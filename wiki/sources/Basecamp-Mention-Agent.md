---
type: source
title: "Software Factory Agent Instruction"
source_url: "https://gist.github.com/aidityasadhakim/a3a1cb7d7a22a089dd54d2a32f607029"
author: "[[aidityasadhakim]]"
published: 2026
ingested: 2026-07-10
address: c-000011
tags:
  - agent-architecture
  - claude-code
  - basecamp
  - automation
  - infrastructure
status: current
related:
  - "[[Basecamp Mention Agent]]"
  - "[[Compound Engineering Loop]]"
  - "[[Claude Code Headless Agent]]"
  - "[[systemd User Timer Agent]]"
  - "[[ReAct Agent Loop]]"
---

# Software Factory Agent Instruction

Source: [GitHub Gist](https://gist.github.com/aidityasadhakim/a3a1cb7d7a22a089dd54d2a32f607029)

Gist oleh aidityasadhakim yang mendeskripsikan arsitektur complete untuk autonomous engineering agent yang berjalan di atas Basecamp + Claude Code. Agent ini mem-poling Basecamp setiap 30 detik untuk @mentions, lalu men-dispatch `claude -p` untuk autonomous implementation.

---

## Arsitektur

```
systemd user timer (every 30s)
  → bc-agent.sh
    → flock (single instance)
    → basecamp notifications --agent
    → for each NEW mention (dedup via SQLite):
        → extract card_id + bucket_id
        → insert SQLite status='processing'
        → fetch card + comments
        → assemble prompt: PROMPT.md + card/thread JSON
        → claude -p --dangerously-skip-permissions (blocking)
        → basecamp notifications read (mark read)
        → update SQLite status='success' | 'failed'
```

## Komponen Utama

### 1. Polling Loop
- systemd user timer setiap 30 detik
- `flock` untuk single-instance behavior
- SQLite untuk dedup (source of truth, bukan Basecamp read status)

### 2. Trigger Detection
- Filter: type Mention atau Assignment pada card_tables/cards
- Empty inbox mengembalikan `.unreads` sebagai `null` (bukan `[]`)
- Filter `.unreads[]?` untuk safe handling

### 3. Dispatch ke Claude
- Blocking execution (`claude -p`)
- `--dangerously-skip-permissions` untuk headless operation
- Working directory adalah repo project (akses codebase + CLAUDE.md)

### 4. Compound Engineering Loop
Brainstorm → Plan → Work → Review → Compound → PR. Satu human checkpoint (BRAINSTORM), sisanya autonomous.

### 5. Communication
- Post ke Basecamp via `basecamp comments create`
- Satu comment per run
- Temp file untuk konten (CLI tidak support stdin)

## Key Design Decisions

- SQLite sebagai dedup source of truth (insert `processing` sebelum kerja)
- `flock -n` pada fd 9: auto-release pada exit/crash, tidak ada stale lockfile
- Blocking execution sengaja: concurrent run pada repo yang sama unsafe
- PR sebagai langkah terakhir (setelah review + compound), bukan di awal
- Brainstorm adalah satu-satunya human checkpoint; semua fase setelahnya autonomous

## Relevance

Arsitektur ini adalah blueprint reference untuk autonomous engineering agent yang terintegrasi dengan project management tool. Pola polling + dispatch + compound loop bisa diadaptasi untuk Jira, Linear, atau GitHub Issues dengan Claude Code sebagai execution engine.
