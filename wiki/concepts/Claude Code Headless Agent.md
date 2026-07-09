---
type: concept
title: "Claude Code Headless Agent"
domain: agent-architecture
address: c-000015
tags:
  - agent-architecture
  - claude-code
  - headless
created: 2026-07-10
status: current
related:
  - "[[Basecamp Mention Agent]]"
  - "[[Compound Engineering Loop]]"
  - "[[systemd User Timer Agent]]"
---

# Claude Code Headless Agent

Pola menjalankan Claude Code (`claude -p`) dalam mode headless — tanpa interactive approval, di-trigger oleh event eksternal (polling, webhook, timer).

## Konfigurasi Kritis

```bash
claude -p --dangerously-skip-permissions "$PROMPT"
```

`--dangerously-skip-permissions` adalah requirement untuk headless operation. Tanpa flag ini, Claude akan meminta approval untuk bash, file edits, git, gh, dan tool calls lain — yang akan hang di environment headless.

## Safety Net

- Git adalah safety net: semua work di branch `bc/<slug>`, tidak pernah di `main`
- Tidak menyentuh production
- Secrets tidak boleh masuk comments, commits, atau PR bodies
- Force-push tidak diizinkan pada shared branch

## Prerequisites untuk Headless

1. Claude CLI terinstal dan terautentikasi
2. Basecamp CLI / gh CLI sesuai use case
3. Git identity terkonfigurasi
4. `sqlite3` untuk state persistence
5. `flock` (util-linux) untuk single-instance lock
6. Semua tool bisa dipanggil tanpa interactive prompt

## Verification

```bash
claude -p --dangerously-skip-permissions \
  "Run the shell command: basecamp accounts list --agent --account <id> and summarize the result."
```

End-to-end check: pastikan Claude bisa menjalankan shell commands, edit files, dan menggunakan git/gh/basecamp tanpa prompt.

## Relevance

Pola headless Claude Code adalah fondasi untuk autonomous agent di production environment. [[Basecamp Mention Agent]] adalah salah satu implementasi konkretnya.
