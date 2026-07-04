---
type: concept
title: "Pool Memory Pattern"
created: 2026-07-03
tags:
  - agent
  - memory
  - dlmm
  - pattern
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Dynamic Re-entry Cooldown]]"
  - "[[Meridian Agent]]"
---

# Pool Memory Pattern

Per-pool deploy history management di Meridian. Mencatat setiap deploy, close, dan snapshot performance untuk mencegah re-entry buruk dan tracking win rate.

## Data Structure (pool-memory.json)

```json
{
  "pool_address": {
    "deploys": [
      { "timestamp": "...", "position_address": "...", "entry_bins": "..." }
    ],
    "closes": [
      { "timestamp": "...", "pnl_pct": 5.2, "hold_minutes": 120 }
    ],
    "snapshots": [
      { "timestamp": "...", "active_bin": 420, "bin_range": [350, 500] }
    ],
    "last_close_at": "2026-07-01T12:00:00Z",
    "consecutive_losses": 2,
    "total_deploys": 8,
    "wins": 5,
    "losses": 3
  }
}
```

## Key Functions

| Function | Purpose |
|----------|---------|
| `getLastCloseForMint(baseMint)` | Timestamp close terakhir — untuk dynamic re-entry gate |
| `isBaseMintOnCooldown(baseMint)` | Apakah token dalam cooldown period |
| `isPoolOnCooldown(poolAddress)` | Apakah pool dalam cooldown |
| `getPoolPerformanceBlock(poolAddress)` | Block deploy jika win rate rendah |
| `recordDeploy(pool, position)` | Catat deploy baru |
| `recordClose(pool, pnl)` | Catat close + update stats |

## Win Rate Gate

```json
{
  "minPoolWinRate": 0.45,
  "minDeploysForWinRateGate": 3,
  "maxConsecutiveLosses": 2
}
```

Pool dengan <3 deploys tidak di-gate. Pool dengan ≥3 deploys dan win rate <45% → di-block. Pool dengan 2 consecutive losses → di-block. Ini mencegah agent dari "revenge trading" di pool yang historically rugi.
