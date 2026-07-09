---
type: concept
title: "Basecamp Mention Agent"
domain: agent-architecture
address: c-000013
tags:
  - agent-architecture
  - claude-code
  - basecamp
  - infrastructure
created: 2026-07-10
status: current
related:
  - "[[Basecamp-Mention-Agent|Source]]"
  - "[[Compound Engineering Loop]]"
  - "[[Claude Code Headless Agent]]"
  - "[[systemd User Timer Agent]]"
---

# Basecamp Mention Agent

Pola autonomous agent yang mem-poling Basecamp untuk @mentions dan men-dispatch Claude Code untuk autonomous engineering task execution.

## Arsitektur

```
systemd user timer (every 30s)
  → bc-agent.sh (flock single-instance)
    → basecamp notifications --agent
    → SQLite dedup
    → fetch card + comments
    → claude -p --dangerously-skip-permissions
    → mark notification read
    → record outcome in SQLite
```

## Design Properties

- **Single-instance**: `flock -n` pada fd 9, auto-release pada exit/crash
- **Dedup via SQLite**: insert `processing` sebelum kerja → crash tidak menyebabkan reprocessing
- **Empty inbox safe**: `.unreads` null (bukan `[]`) → filter `.unreads[]?`
- **Blocking execution**: concurrent Claude runs pada repo yang sama unsafe
- **Sequential mentions**: dua mention pada dua card → dua loop iteration, dua `claude -p` run berurutan

## Trigger Routing

```
STATUS_QUERY       →  QUESTION path  →  research + answer
STATUS_ACTIONABLE  →  IMPLEMENTATION →  compound loop
```

Setiap run berakhir dengan tepat satu Basecamp comment. Brainstorm adalah satu-satunya human checkpoint.

## Deployment

- systemd user unit (`bc-agent.service` + `bc-agent.timer`)
- `loginctl enable-linger` untuk headless server
- `AccuracySec=1s` penting — default systemd accuracy smear 30s cadence
