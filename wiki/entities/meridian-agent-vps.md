---
type: entity
title: "meridian-agent-vps"
created: 2026-07-03
tags:
  - agent-instance
  - vps
  - defi
  - solana
  - dlmm
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meridian Agent]]"
  - "[[yunus-0x-meridian]]"
  - "[[Meteora DLMM]]"
  - "[[HiveMind Collective Intelligence]]"
---

# meridian-agent-vps

Running instance Meridian Agent di VPS user ([REDACTED_IP]). Folder: `~/meridian_experimental/`

## Active Config

| Parameter | Value |
|-----------|-------|
| Preset | `degen` |
| Strategy | `spot` (single-side SOL) |
| Timeframe | `1h` |
| Category | `trending` |
| Deploy amount | 0.3 SOL |
| Max positions | 1 |
| Position size | 9% of wallet |
| Gas reserve | 0.05 SOL |
| bins_below range | 70–150 |
| Take profit | +8% |
| Stop loss | −8% |
| OOR wait | 45 min |
| LLM Model | MiniMax-M3 (via TokenRouter) |
| Temperature | 0.373 |
| Momentum entry | ≥5% 1h price change |
| Momentum classes | extreme≥100%/high≥50%/moderate≥20%/low≥10% |

## Screening Profile

| Parameter | Value |
|-----------|-------|
| TVL range | $10K–$200K |
| Market cap | $80K–$10M |
| Fee/TVL ratio | ≥0.1 |
| Organic score | ≥45 |
| Holders | ≥500 |
| Bin step | 80–200 |
| Volume | ≥$5K |
| Bundler max | 25% |
| Win rate gate | ≥45% (min 3 deploys) |
| Max consecutive losses | 2 |

## Running Stats

| Metric | Value |
|--------|-------|
| Total closed positions | **354** |
| Agent ID | `agt_bd9e4d41c976631bd269f249` |
| HiveMind | Enabled (auto-pull) |
| Trailing TP | Enabled (+5% trigger, −3% drop) |
| Darwin evolution | Enabled (60-day window, recalc every 5) |
| Chart indicators | Supertrend break (entry), BB+RSI (exit) |

## Credentials Warning

`.env` dan `user-config.json` di VPS mengandung private key dan API keys. **Tidak di-copy ke vault.**
