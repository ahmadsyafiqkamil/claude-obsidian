---
type: concept
title: "DLMM Position Lifecycle"
created: 2026-07-03
tags:
  - dlmm
  - meteora
  - lifecycle
  - pattern
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meteora DLMM]]"
  - "[[Hunter-Healer Dual Agent]]"
  - "[[ReAct Agent Loop]]"
---

# DLMM Position Lifecycle

Complete lifecycle posisi LP di Meridian — dari deploy hingga learn.

## Stages

```
DEPLOY  →  MONITOR  →  CLOSE  →  SWAP  →  LEARN
(SCREENER) (MANAGER)  (MANAGER) (auto)   (lessons.js)
```

### 1. DEPLOY (SCREENER)

```
get_top_candidates → filter → deploy_position
                              ├── bin_step validation
                              ├── duplicate check
                              ├── range width check
                              ├── SOL balance check
                              └── on-chain tx → trackPosition()
```

### 2. MONITOR (MANAGER)

```
management cron → getMyPositions
  ├── getPositionPnl()
  ├── check OOR (out of range)
  ├── pool-memory snapshots
  └── decision: STAY / CLOSE / CLAIM
```

**OOR Detection:** Jika active bin di luar range position + > `outOfRangeWaitMinutes` (45m) → alert + consider close.

### 3. CLOSE (MANAGER)

```
close_position
  ├── recordPerformance() → lessons.js
  ├── auto-swap base token → SOL
  └── Telegram notify
```

### 4. SWAP (auto after close)

Token worth ≥ $0.10 → `swap_token` ke SOL. Dust (<$0.10) → skip (gas > value).

### 5. LEARN

```
recordPerformance()
  ├── Update pool-memory (win/loss/win rate)
  ├── derive lessons (patterns)
  └── Darwin evolve thresholds (every 5 samples)
```

## State Tracking

`state.js` + `state.json`:
- `positions[address]` — bin ranges, OOR timestamps, notes, deploy time
- `recentEvents[]` — last N events for context
- `lastUpdated` — freshness check
