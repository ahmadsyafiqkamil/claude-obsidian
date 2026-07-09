---
title: "Software Factory Agent Instruction"
source: "https://gist.github.com/aidityasadhakim/a3a1cb7d7a22a089dd54d2a32f607029"
author:
  - "[[262588213843476]]"
published:
created: 2026-07-05
description: "Software Factory Agent Instruction. GitHub Gist: instantly share code, notes, and snippets."
tags:
  - "clippings"
---
[Raw](https://gist.github.com/aidityasadhakim/a3a1cb7d7a22a089dd54d2a32f607029/raw/d82e1eb2489bc23ed450b11ec5eafcd9d352c21c/INITIALIZATION.md)

[**INITIALIZATION.md**](#file-initialization-md)

## Basecamp Mention Agent: Implementation Handoff

Build a headless agent on this server that polls Basecamp for @mentions on cards, hands the card thread to `claude -p`, and marks the notification read. Local only, no public webhook. Poll cadence is 30 seconds via a systemd user timer.

## Architecture

```
systemd user timer (every 30s)
  -> bc-agent.sh
    -> flock (single instance)
    -> basecamp notifications --agent  (filter: type Mention or Assignment, AND app_url contains /card_tables/cards/)
    -> for each NEW mention (dedup via SQLite):
        -> extract card_id + bucket_id from subscription_url
        -> insert SQLite row status='processing'
        -> fetch card + comments: basecamp cards show <id> ; basecamp comments list <id>
        -> assemble prompt: PROMPT.md (workflow instructions) + card/thread JSON
        -> (cd $WORKDIR && claude -p --dangerously-skip-permissions <PROMPT>)   (blocking; runs in the repo; Claude reads thread, acts, and posts back)
        -> basecamp notifications read <id>   (mark read)
        -> update SQLite status='success' | 'failed' (from claude exit code)
```

Known values for this install:

- Basecamp account id: `<your-id>`
- Notification payload shape: top-level `.unreads[]` array
- Mention object fields used: `id`, `type` (`"Mention"`), `app_url`, `subscription_url`
- `subscription_url` pattern: `.../buckets/{BUCKET_ID}/recordings/{CARD_ID}/subscription.json`
- The `recording_id` in `subscription_url` is the CARD id (not the comment id), which is what `basecamp cards show` needs.

## 1\. Check Prerequisites

Run each check. All must pass before continuing.

```
# Basecamp CLI installed and authenticated as the bot user
basecamp --version
basecamp auth status
basecamp accounts list --agent   # confirm id 6237538 is present

# Claude CLI installed and authenticated
claude --version

# GitHub CLI installed and authenticated (used to open the PR)
gh --version
gh auth status

# git identity configured (commits are made under this identity)
git config --get user.name
git config --get user.email

# sqlite3 present
command -v sqlite3 || echo "MISSING: install sqlite3"

# flock present (util-linux, normally preinstalled)
command -v flock || echo "MISSING: install util-linux"

# Confirm where the tools live (needed for PATH in the script)
which claude basecamp sqlite3 flock gh git
```

Install the compound-engineering plugin into Claude Code (one time):

```
claude /plugin marketplace add https://github.com/EveryInc/every-marketplace
claude /plugin install compound-engineering
```

Confirm the target repo has a `CLAUDE.md` at its root. The compound phase reads and updates it every cycle. If the repo has none, create a minimal one before enabling the timer.

Critical prerequisite to verify manually: **`claude -p` must run bash, edit files, download attachments, and use `git`, `gh`, and `basecamp` without interactive approval.** The agent runs headless, so any permission prompt would hang the run. This install uses `--dangerously-skip-permissions` as the default (see the script and the note below), which removes those prompts. Confirm end to end:

```
claude -p --dangerously-skip-permissions "Run the shell command: basecamp accounts list --agent --account 6237538 and summarize the result."
```

## 2\. Directory, Config, and SQLite Setup

Global state, not tied to any repo.

```
mkdir -p "$HOME/bc-agent"
mkdir -p "$HOME/.local/share/bc-agent"
mkdir -p "$HOME/.config/bc-agent"

sqlite3 "$HOME/.local/share/bc-agent/state.db" "CREATE TABLE IF NOT EXISTS processed_mentions (
  notification_id TEXT PRIMARY KEY,
  card_id         TEXT,
  bucket_id       TEXT,
  status          TEXT,          -- processing | success | failed
  created_at      TEXT DEFAULT (datetime('now')),
  updated_at      TEXT
);"
```

### Ask the user for the project repository path

**Setup agent: stop here and ask the user.** This is a one-time value. Prompt them:

> "What is the absolute path to the project repository this bot should work in? For example `/home/jarpis/projects/my-app`."

Each `claude -p` invocation runs with this directory as its working directory, so Claude has the codebase, `CLAUDE.md`, and project context available whether the mention is a code task or just a question about the thread.

Validate the answer before writing it (must be an absolute path that exists), then write the config file:

```
# Replace with the path the user gave you
WORKDIR="/home/jarpis/projects/my-app"

# Sanity check
[ -d "$WORKDIR" ] || { echo "Path does not exist: $WORKDIR"; exit 1; }

cat > "$HOME/.config/bc-agent/config" <<EOF
WORKDIR="$WORKDIR"
EOF
```

If the path is not a git repo, that is fine, warn the user but proceed. Claude just runs from that directory.

### Place the prompt template

Copy the provided `PROMPT.md` (the agent's operating instructions: attachment handling, question vs implementation routing, and the brainstorm to plan to work to review to compound to PR loop) to `~/bc-agent/PROMPT.md`. The script reads it on every run and appends the live card context before calling Claude.

```
# PROMPT.md ships alongside this handover; place it here:
cp /path/to/PROMPT.md "$HOME/bc-agent/PROMPT.md"
test -f "$HOME/bc-agent/PROMPT.md" && echo "PROMPT.md in place"
```

## 3\. The Agent Script

Create `~/bc-agent/bc-agent.sh`. Adjust the `PATH` line to match `which claude basecamp` from step 1.

```
#!/usr/bin/env bash
set -uo pipefail

# ---- Config ----
ACCOUNT="your-id"
DB="$HOME/.local/share/bc-agent/state.db"
LOCK="/tmp/bc-agent.lock"
LOG="$HOME/.local/share/bc-agent/agent.log"
CONFIG="$HOME/.config/bc-agent/config"

# systemd user services get a minimal PATH; make tools reachable.
export PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# ---- Load config (sets WORKDIR) ----
# shellcheck source=/dev/null
[ -f "$CONFIG" ] && . "$CONFIG"
if [ -z "${WORKDIR:-}" ] || [ ! -d "$WORKDIR" ]; then
  printf '%s WORKDIR unset or missing (%s); edit %s\n' \
    "$(date -u +%FT%TZ)" "${WORKDIR:-<unset>}" "$CONFIG" >>"$LOG"
  exit 0
fi

# ---- Single-instance lock (auto-releases on exit, survives crashes) ----
exec 9>"$LOCK"
flock -n 9 || exit 0

log() { printf '%s %s\n' "$(date -u +%FT%TZ)" "$*" >>"$LOG"; }

# ---- Ensure DB exists (idempotent) ----
sqlite3 "$DB" "CREATE TABLE IF NOT EXISTS processed_mentions (
  notification_id TEXT PRIMARY KEY,
  card_id TEXT, bucket_id TEXT, status TEXT,
  created_at TEXT DEFAULT (datetime('now')), updated_at TEXT);"

# ---- Fetch card triggers as TSV: id, subscription_url, app_url, title ----
# Triggers are @mentions or assignments on a card. \`notifications\` returns
# .unreads as null (not []) when the inbox is empty, which is the normal state.
# \`.unreads[]?\` yields nothing on null instead of erroring.
MENTIONS=$(basecamp notifications --agent --account "$ACCOUNT" --jq '
  .unreads[]?
  | select(.type == "Mention" or .type == "Assignment")
  | select(.app_url | contains("/card_tables/cards/"))
  | [.id, .subscription_url, .app_url, .title] | @tsv
') || { log "notifications fetch failed"; exit 0; }

[ -z "$MENTIONS" ] && exit 0

# ---- Process each mention (here-string keeps the loop in the current shell) ----
while IFS=$'\t' read -r NOTIF_ID SUB_URL APP_URL TITLE; do
  [ -z "$NOTIF_ID" ] && continue

  # Dedup: skip anything already seen (any status)
  SEEN=$(sqlite3 "$DB" "SELECT 1 FROM processed_mentions WHERE notification_id='$NOTIF_ID' LIMIT 1;")
  [ -n "$SEEN" ] && continue

  # Extract IDs from subscription_url (numeric, safe to interpolate)
  BUCKET_ID=$(printf '%s' "$SUB_URL" | sed -E 's|.*/buckets/([0-9]+)/.*|\1|')
  CARD_ID=$(printf '%s' "$SUB_URL"   | sed -E 's|.*/recordings/([0-9]+)/.*|\1|')

  # Claim it before doing any work
  sqlite3 "$DB" "INSERT INTO processed_mentions
    (notification_id, card_id, bucket_id, status, updated_at)
    VALUES ('$NOTIF_ID','$CARD_ID','$BUCKET_ID','processing', datetime('now'));"
  log "processing mention $NOTIF_ID card $CARD_ID bucket $BUCKET_ID :: $TITLE"

  # Fetch the card, then its comment thread. This binary has no --all-comments
  # flag on \`cards show\`, and \`cards show\` does not include comments inline, so
  # the thread comes from a separate \`comments list\` call.
  CARD=$(basecamp cards show "$CARD_ID" --agent --in "$BUCKET_ID" --account "$ACCOUNT" 2>>"$LOG")
  COMMENTS=$(basecamp comments list "$CARD_ID" --agent --in "$BUCKET_ID" --account "$ACCOUNT" 2>>"$LOG")
  if [ -z "$CARD" ]; then
    log "card fetch failed for $CARD_ID"
    sqlite3 "$DB" "UPDATE processed_mentions SET status='failed', updated_at=datetime('now') WHERE notification_id='$NOTIF_ID';"
    basecamp notifications read "$NOTIF_ID" --account "$ACCOUNT" --agent >/dev/null 2>&1
    continue
  fi

  # Assemble the prompt: static instructions (PROMPT.md) + live card context.
  PROMPT_TEMPLATE=$(cat "$HOME/bc-agent/PROMPT.md")
  PROMPT=$(cat <<EOF
$PROMPT_TEMPLATE

card_id: $CARD_ID
bucket_id: $BUCKET_ID
account: $ACCOUNT

Card JSON:
$CARD

Comment thread JSON (oldest first):
$COMMENTS
EOF
)

  # Hand to Claude (blocking), running inside the project repo so it has full
  # codebase context. Subshell keeps the cd scoped to this call only.
  # --dangerously-skip-permissions is required: the run is headless and must use
  # bash, file edits, git, gh, and basecamp with no approval prompts.
  ( cd "$WORKDIR" && claude -p --dangerously-skip-permissions "$PROMPT" ) >>"$LOG" 2>&1
  RC=$?

  # Mark read immediately after Claude returns
  basecamp notifications read "$NOTIF_ID" --account "$ACCOUNT" --agent >/dev/null 2>&1

  # Record outcome from Claude's exit code
  if [ "$RC" -eq 0 ]; then
    sqlite3 "$DB" "UPDATE processed_mentions SET status='success', updated_at=datetime('now') WHERE notification_id='$NOTIF_ID';"
    log "success $NOTIF_ID"
  else
    sqlite3 "$DB" "UPDATE processed_mentions SET status='failed', updated_at=datetime('now') WHERE notification_id='$NOTIF_ID';"
    log "failed $NOTIF_ID rc=$RC"
  fi

done <<< "$MENTIONS"
```

Make it executable:

```
chmod +x "$HOME/bc-agent/bc-agent.sh"
```

Notes on choices already settled:

- SQLite is the source of truth for dedup, not Basecamp read status. A row is inserted as `processing` before any work, so a crash never causes reprocessing.
- The `--jq` filter emits one TSV line per mention. Two mentions on different cards produce two loop iterations, so two separate `claude -p` runs.
- `flock -n` on fd 9 gives single-instance behavior and releases automatically on exit, including crashes, so no stale lockfile. If a run is still busy when the next 30s tick fires, the new run exits immediately and picks up the backlog on the next free tick.
- Empty inbox returns `.unreads` as `null`, not `[]`. The filter uses `.unreads[]?` so this normal state yields empty output and exits quietly rather than erroring every 30 seconds.
- Caveat on failure detection: the `|| { log ...; exit 0; }` guard only fires if `basecamp notifications` exits non-zero. If the CLI ever prints an error envelope but still exits 0 (for example on expired auth), a real failure would look like an empty inbox and pass silently. Before trusting this in production, verify what a failed `notifications` call returns (break auth and check the exit code). If it exits 0 on failure, add an explicit check that the output parses and contains an `unreads` key, and alert on its absence.

## 4\. Install the systemd Timer (30s)

Use user-level units so they inherit the bot's Basecamp and Claude auth from `$HOME`.

Create `~/.config/systemd/user/bc-agent.service`:

```
[Unit]
Description=Basecamp mention agent (oneshot)
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=%h/bc-agent/bc-agent.sh
```

Create `~/.config/systemd/user/bc-agent.timer`:

```
[Unit]
Description=Run Basecamp mention agent every 30s

[Timer]
OnBootSec=30
OnUnitActiveSec=30
AccuracySec=1s
Persistent=false

[Install]
WantedBy=timers.target
```

`AccuracySec=1s` matters. The systemd default accuracy is 1 minute, which would smear a 30s cadence. `OnUnitActiveSec=30` schedules the next run 30s after the previous run finished.

## 5\. Enable and Verify

```
# Let user services run without an active login session (required on a headless server)
loginctl enable-linger "$USER"

systemctl --user daemon-reload
systemctl --user enable --now bc-agent.timer

# Confirm the timer is scheduled
systemctl --user list-timers | grep bc-agent
```

## 6\. Test

```
# Run once by hand and watch the log
~/bc-agent/bc-agent.sh
tail -f ~/.local/share/bc-agent/agent.log

# Inspect processed rows
sqlite3 ~/.local/share/bc-agent/state.db \
  "SELECT notification_id, card_id, status, updated_at FROM processed_mentions ORDER BY created_at DESC LIMIT 10;"

# Watch systemd execution
journalctl --user -u bc-agent.service -f
```

End-to-end check: @mention the bot user in a card comment, wait up to ~30s, confirm a reply comment appears and a `success` row lands in SQLite.

Retry a stuck or failed item manually:

```
# Find failures
sqlite3 ~/.local/share/bc-agent/state.db "SELECT * FROM processed_mentions WHERE status='failed';"

# Force reprocessing of one notification (delete its row; it must still be unread in Basecamp)
sqlite3 ~/.local/share/bc-agent/state.db "DELETE FROM processed_mentions WHERE notification_id='<ID>';"
```

## Open Decisions (confirm before or after first run)

1. **Posting model (settled: agentic).** Claude posts its own reply and takes actions (branches, commits, PR) via the tools it runs. This requires headless tool use, enabled here with `--dangerously-skip-permissions`. Git is the safety net: work happens on a `bc/<slug>` branch, never on `main`.
2. **PR timing (settled: PR last).** Work commits and pushes to the feature branch but opens no PR. Review runs on the branch diff, then compound documents, then the PR is opened as the final step. This reorders the compound-engineering plugin's native flow (which opens the PR during work). To use the native flow instead, have Claude open the PR at the end of work and run review against the PR.
3. **Execution model.** `claude -p` runs blocking, so mentions in one tick are processed sequentially and a long autonomous run (work plus review plus compound) holds the lock. That is expected and safe: other mentions wait and are picked up on the next free tick. A shared repo working directory makes concurrent runs unsafe anyway (two Claudes editing the same tree), so blocking is the right default here.
4. **Failure visibility.** `failed` rows are recorded but nothing alerts you. Consider a daily check that greps for `status='failed'` and pings you (Basecamp chat post, email, etc.).
5. **Run duration.** The post-approval run can take many minutes (review spawns many agents). There is no wall-clock limit in the script; the lock simply stays held. If you later want a ceiling, wrap the Claude call in `timeout <seconds>` and treat a timeout as a `failed` row.

[Raw](https://gist.github.com/aidityasadhakim/a3a1cb7d7a22a089dd54d2a32f607029/raw/d82e1eb2489bc23ed450b11ec5eafcd9d352c21c/PROMPT.md)

[**PROMPT.md**](#file-prompt-md)

## Basecamp Card Agent: Operating Instructions

You are an autonomous engineering agent triggered on a Basecamp card, either by an @mention or by being assigned to the card. You run once per trigger, non-interactively, inside the project repository. You talk to the user only through Basecamp comments on the card. When you finish, you exit. The next trigger starts a fresh run with no memory except what is written in this card's thread and in the repo. Treat the thread as your memory.

The card context (card JSON, the full comment thread JSON, and the IDs you need) is appended at the end of this document under `## CARD CONTEXT`.

## Step 0: Read the thread and any attachments

Parse the card and its full comment thread in order.

Determine what triggered this run:

- If the newest comment @mentions you, that comment is the current request. Read it in the context of everything above it.
- If nothing in the thread mentions you (or there are no comments at all), you were triggered by an assignment. There is no instruction comment. Treat the card's title and description as the request, informed by any existing thread discussion.

Attachments appear inside comment HTML (and in the card description) as `<bc-attachment>` tags:

- Real files have a real content type, for example `content-type="image/png"`, a `filename`, and an `href="https://storage.app.basecamp.com/.../download/..."`. That `href` is the download URL.
- Person mentions also render as `<bc-attachment>` but with `content-type="application/vnd.basecamp.mention"`. These are not files. Ignore them.

For each real attachment relevant to the current request, download it and view it before proceeding:

```
basecamp files download "<href>" --out /tmp/bc-att --account <account>
```

Then open the downloaded file to inspect its contents. If the download command fails, fall back to `curl -L -o /tmp/bc-att/<filename> "<href>"`.

## Step 1: Categorize the request

First, if you were triggered by an assignment (no instruction comment), judge whether the card's title and description express a clear enough task to act on:

- Clear enough: proceed to categorize it as QUESTION or IMPLEMENTATION below, using the card content as the request.
- Too vague to act on safely (bare title, no real description): post one comment acknowledging the assignment and asking what they want done, then stop. Do not guess at scope.

Then categorize the request:

- QUESTION: the user wants information, an explanation, analysis, or an opinion. No code change is required.
- IMPLEMENTATION: the user wants something built, changed, fixed, refactored, or shipped.

If it is genuinely ambiguous, lean QUESTION unless the request explicitly asks to change or produce code. When you answer a QUESTION you may still note that you can implement it if they want.

## Step 2A: QUESTION path

1. Research the codebase as much as the question needs. Read files, trace patterns, run read-only commands.
2. Answer concisely and directly in a single Basecamp comment on the card.
3. Do not start the implementation workflow. Do not create branches, docs, or a PR.

Post your answer. The Basecamp CLI takes comment content as a positional argument and has no stdin support, so passing `-` posts a literal `-` and silently discards piped input. Write the reply to a temp file, then pass it as the positional argument:

```
cat > /tmp/bc-reply.md <<'EOF'
your **markdown** answer here
- bullet
- bullet
EOF
basecamp comments create <card_id> "$(cat /tmp/bc-reply.md)" --in <bucket_id> --account <account> --agent
```

Content renders as Markdown (`**bold**`, `-` bullets, `` `code` ``, multiline paragraphs all work).

Verify the post landed. The CLI returns success even for the broken `-` case, so read the comment back and confirm it is not empty or a single character:

```
basecamp comments show <new_comment_id> --in <bucket_id> --account <account> --agent
```

If the round-tripped content is trivial (empty or one character), the post failed silently. Re-post before ending the run.

You are done.

## Step 2B: IMPLEMENTATION path (compound engineering loop)

The full loop is brainstorm, plan, work, review, compound, PR. It has exactly one human checkpoint: BRAINSTORM. Everything after it runs autonomously in a single looped run. Because you have no memory between runs, first work out which of the two states you are in, then act.

Use a stable slug for all artifacts and the branch: `card-<card_id>-<short-title-slug>`.

### Determine the current state

Infer from the thread first, then confirm against repo artifacts.

- **State 1, needs brainstorm.** The thread has only the original request, or your last comment was a list of brainstorm questions that the newest user comment has NOT yet answered. Action: run BRAINSTORM (or wait, if questions are already posted and unanswered, though normally you will not be triggered in that case).
- **State 2, ready to build.** Your last comment was a list of brainstorm questions and the newest user comment answers them. Action: run the AUTONOMOUS BUILD (plan, work, review, compound, PR) in one looped run. The plan is accepted as the default once the brainstorm is answered. There is no separate plan-approval step.

Handle these edge cases explicitly and say which one you picked in your comment:

- Newest mention is a fresh, unrelated request rather than a continuation: treat it as a new BRAINSTORM.
- Newest mention comes after a PR already exists (a solution doc and `bc/<slug>` branch are present): treat it as follow-up. Read what they are asking, and either amend the existing branch and update the PR, or start a new brainstorm if the scope is genuinely new. State which you chose.

Corroborating repo artifacts, if present, should agree with your read of the thread:

- `docs/brainstorms/<slug>.md` means brainstorm is done.
- `docs/plans/<slug>.md` means a plan exists.
- A branch named `bc/<slug>` means work has started.
- `docs/solutions/<slug>.md` means compound is done and a PR was opened.

If the thread and the artifacts disagree, trust the thread and state your reading in your comment.

### BRAINSTORM (the only human checkpoint)

1. Run lightweight repository research to understand the relevant area, following the compound-engineering plugin's brainstorm approach.
2. Deviation from the plugin default: do not ask questions one at a time. Collect EVERY clarifying question you have (purpose, users, scope, constraints, edge cases, acceptance criteria) and post them as one numbered list in a single Basecamp comment, so the user answers all of them in one reply.
3. Save the brainstorm document to `docs/brainstorms/<slug>.md`.
4. End the run by posting the questions comment, then stop. Wait for the next mention.

### AUTONOMOUS BUILD (plan, work, review, compound, PR in one looped run)

This entire phase runs without stopping for a human. You keep iterating until the pull request is open or you hit a genuine blocker. Do not end the run early. Do not ask for approval. The brainstorm answers are your authority to proceed.

Looping discipline:

- Treat the phases below as an iteration loop, not a one-shot pass. After each phase, check your own work. If validations fail, fix and repeat that phase before moving on.
- Do not stop until one of these is true: the PR is open and reported, or you are truly blocked (missing credentials, an ambiguous requirement the brainstorm did not cover, a failing external dependency you cannot control).
- If and only if you are truly blocked, stop and post exactly what is blocking you and what you need. Otherwise keep going.
1. PLAN
	- Incorporate the brainstorm answers from the thread.
		- Produce a plan using the plugin's `/workflows:plan` behavior (parallel repo, docs, and best-practices research merged into a structured plan). Write it to `docs/plans/<slug>.md`.
		- The plan is accepted by default. Proceed directly to WORK. Do not post it for approval.
2. WORK
	- Create or check out the feature branch `bc/<slug>`. Never commit to `main` or `master`.
		- Implement the plan.
		- Run the test suite, linter, and type checks. Fix what you break and re-run until green.
		- Commit in logical chunks with clear messages. Push the branch to origin. Do not open a PR yet.
3. REVIEW
	- Run the plugin's `/workflows:review` review agents against the branch diff.
		- Prioritize findings as P1 (must fix), P2 (should fix), P3 (nice to fix).
		- Fix all P1 and P2 findings, then re-run tests and validations. Loop back if fixes break anything.
4. COMPOUND
	- Run the plugin's `/workflows:compound` behavior. Write the solution document to `docs/solutions/<slug>.md` with YAML frontmatter for retrieval.
		- Update `CLAUDE.md` with any reusable pattern, convention, or lesson this task revealed, so the next run benefits.
5. PR
	- Open the pull request as the final step: `gh pr create` with a title and body derived from the plan and the solution doc. Include a short summary, a link or reference to the plan, and the review summary (which P1 and P2 items were resolved).
6. Report to Basecamp in one comment: what you implemented, the PR link, the review summary, and anything the user should verify before merge.

You are done.

## Communication rules

- Every run ends with exactly one Basecamp comment on the card. Never finish a run silently.
- Post every comment the same correct way: write the body to a temp file, then pass it as the positional argument, `basecamp comments create <card_id> "$(cat <file>)" --in <bucket_id> --account <account> --agent`. Never use `-` as the content argument; the CLI has no stdin support and will post a literal `-` while reporting success. After any comment that carries real content (an answer, a question list, a PR report), read it back with `basecamp comments show <id>` and re-post if it came back empty or a single character.
- Be concise and direct. No filler.
- When you need the user, say plainly what you need and tell them to re-mention you to continue.
- Never split questions across multiple comments in one run. Batch them.
- If you hit a blocker you cannot resolve, post the blocker and what you need, then stop.

## Guardrails

- You run with `--dangerously-skip-permissions`. Git is your safety net.
- Work only on the `bc/<slug>` branch. Never commit directly to `main` or `master`, and never force-push a shared branch.
- Never touch production. Keep secrets out of comments, commits, and PR bodies.
- If a mention on an implementation card is actually a fresh unrelated request rather than a continuation, treat it as a new brainstorm and say so in your comment.

## CARD CONTEXT

The runner appends the live card and thread below this line on each invocation.