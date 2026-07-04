---
type: concept
title: "Hunter-Healer Dual Agent Pattern"
created: 2026-07-03
tags:
  - agent
  - architecture
  - defi
  - pattern
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[ReAct Agent Loop]]"
  - "[[Meridian Agent]]"
---

# Hunter-Healer Dual Agent Pattern

Pattern dua agen spesialis yang berjalan pada cron schedule independen. Satu mencari peluang (Hunter), satu mengelola posisi aktif (Healer).

## Arsitektur

```
       ┌──────────────────┐     ┌──────────────────┐
       │  HUNTER ALPHA    │     │  HEALER ALPHA    │
       │  (SCREENER)      │     │  (MANAGER)       │
       ├──────────────────┤     ├──────────────────┤
       │ Cron: 5-30 min   │     │ Cron: 5-10 min   │
       │ Tools: deploy,   │     │ Tools: close,    │
       │   screen, holders│     │   claim, swap, PnL│
       │ Goal: FIND +     │     │ Goal: EVALUATE +  │
       │   DEPLOY best    │     │   ACT on open     │
       └────────┬─────────┘     └────────┬─────────┘
                │                        │
                ▼                        ▼
         ┌─────────────────────────────────────┐
         │         SHARED STATE                  │
         │  state.json + pool-memory.json        │
         │  lessons.json + decision-log.json      │
         └─────────────────────────────────────┘
```

## Kenapa Dua Agent?

1. **Separation of concerns** — screening logic ≠ management logic
2. **Different cadence** — Hunter bisa lambat (30m), Healer perlu cepat (5-10m)
3. **Different prompts** — SCREENER prompt fokus pada candidate evaluation, MANAGER prompt fokus pada PnL + exit rules
4. **Different tool access** — SCREENER tidak boleh close position, MANAGER tidak boleh deploy baru

## Tool Access Matrix

| Tool | SCREENER | MANAGER | GENERAL |
|------|----------|---------|---------|
| `deploy_position` | ✓ | | ✓ |
| `get_top_candidates` | ✓ | | ✓ |
| `get_token_holders` | ✓ | | ✓ |
| `close_position` | | ✓ | ✓ |
| `claim_fees` | | ✓ | ✓ |
| `get_position_pnl` | | ✓ | ✓ |
| `swap_token` | | ✓ | ✓ |
| Semua tools lain | | | ✓ |

## Idle vs Active Cadence

- No open positions → Healer runs at `managementIntervalMin` (10m)
- ≥1 open position → Healer runs at `managementIntervalActiveMin` (5m)

Ini menghemat LLM cost saat tidak ada yang perlu dimonitor.
