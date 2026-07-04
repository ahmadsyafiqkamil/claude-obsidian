---
type: concept
title: "Trailing Take Profit"
created: 2026-07-03
tags:
  - strategy
  - risk-management
  - exit-strategy
  - dlmm
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meridian Agent]]"
  - "[[meridian-agent-vps]]"
  - "[[Volatility Execution Gap]]"
---

# Trailing Take Profit

Dynamic exit strategy: take profit yang mengikuti harga naik, tapi close saat harga turun dari puncak.

## Mekanisme

```
Token price: $1.00 → $1.05 → $1.08 → $1.07 → $1.04 → CLOSE

Trigger:    ────────┬────────
                    5% profit (trigger activated)
                            ───┬───
                         trail starts
                               ───┬───
                             new high $1.08
                                     ───┬───
                                   dropped 3% from $1.08 → CLOSE
```

## Config (Production)

```json
{
  "trailingTakeProfit": true,
  "trailingTriggerPct": 5,
  "trailingDropPct": 3,
  "takeProfitPct": 8
}
```

| Parameter | Value | Maksud |
|-----------|-------|--------|
| `trailingTriggerPct` | +5% | Trail diaktifkan setelah profit ≥5% |
| `trailingDropPct` | −3% | Close saat turun 3% dari highest point |
| `takeProfitPct` | +8% | Hard TP jika trail tidak triggered |

## Kenapa Lebih Baik dari Static TP

Static TP (+8%) punya masalah: kalau token pump ke +7.5% lalu turun, kamu tidak close. Trailing TP: begitu trigger di +5%, trail dimulai. Kalau token lanjut ke +12% lalu turun 3% → close di ~+9%.

> "Let your winners run, but cut them when they start falling."
