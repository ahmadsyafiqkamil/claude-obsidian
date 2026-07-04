---
type: source
title: "Meridian Agent — Full Architecture"
created: 2026-07-03
source_type: codebase
source_url: "https://github.com/yunus-0x/meridian"
tags:
  - codebase
  - defi
  - solana
  - agent
  - dlmm
  - meteora
status: current
sources:
  - ".raw/meridian-agent/README.md"
  - ".raw/meridian-agent/CLAUDE.md"
related:
  - "[[meridian-agent-vps]]"
  - "[[Meridian Agent]]"
  - "[[ReAct Agent Loop]]"
  - "[[Hunter-Healer Dual Agent]]"
  - "[[Meteora DLMM]]"
---

# Meridian Agent — Full Architecture

Autonomous DLMM liquidity management agent untuk Meteora, Solana. Powered by LLMs via OpenRouter.

## Arsitektur Tingkat Tinggi

```
index.js         → REPL + cron orchestration + Telegram polling
agent.js         → ReAct loop: LLM → tool call → observe → repeat
prompt.js        → System prompt builder per agent role
config.js        → Runtime config dari user-config.json + .env
state.js         → Position registry (state.json)
lessons.js       → Learning engine: record + derive + evolve
pool-memory.js   → Per-pool deploy history + cooldown
momentum.js      → Momentum classification + bins sizing + re-entry gate
strategy-library.js → Saved LP strategies (tweets → structured criteria)
```

## Dua Agent Spesialis

| Agent | Interval | Peranan |
|-------|----------|---------|
| **Hunter Alpha (SCREENER)** | 30m / 5m | Pool screening → find + deploy best candidate |
| **Healer Alpha (MANAGER)** | 10m / 5m | Position management → evaluate + close/claim |

**Health check** runs hourly untuk summarize portfolio state.

## ReAct Loop

```
LLM reasons over live data → calls tool → executor dispatches → result back to LLM → repeat
```

Max 20 steps per cycle. Temperature 0.373.

## Tool System

Tools defined di `tools/definitions.js` (OpenAI function-calling format). Dispatch di `tools/executor.js` dengan safety checks:
- `bin_step` validation
- Max position count (force-fresh scan)
- No duplicate pool / base token
- Range width ≥ `minBinsBelow` (never below 35)
- `bins_above=0` untuk single-side SOL
- SOL balance ≥ deploy + gas reserve
- `blockedLaunchpads` enforced

## Data Sources

| Source | Data |
|--------|------|
| `@meteora-ag/dlmm` SDK | On-chain positions, active bin, deploy/close tx |
| Meteora DLMM PnL API | Position yield, fee accrual, PnL |
| DexScreener API | Price change momentum (5m/1h/6h/24h) |
| Helius RPC | Wallet SOL/token balances |
| Jupiter API | Token holders, bundler detection |
| LPAgent API | Top LPers study |

## Model Configuration

Default via OpenRouter, tapi support mana-mana OpenAI-compatible API. Per-role model: `managementModel`, `screeningModel`, `generalModel`. Instance VPS user menggunakan **MiniMax-M3** via TokenRouter.

## Codebase Stats

| Metric | Value |
|--------|-------|
| Total JS files | 12 (core) + 9 (tools) |
| Largest file | `tools/dlmm.js` (91KB, ~2260 lines) |
| Total LOC | ~16,000 |
| Positions tracked | 354 closed |
| Node modules | 142 packages |

Lihat code: `.raw/meridian-agent/`
