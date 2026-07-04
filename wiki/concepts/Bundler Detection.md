---
type: concept
title: "Bundler Detection"
created: 2026-07-03
tags:
  - defi
  - solana
  - security
  - anti-manipulation
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meteora DLMM]]"
  - "[[Meridian Agent]]"
  - "[[Exit Liquidity Risk]]"
---

# Bundler Detection

Signal anti-manipulasi untuk mendeteksi token yang supply-nya dikontrol oleh bot/bundler. Digunakan dalam screening pipeline Meridian untuk menghindari pool dengan distribusi token yang tidak organik.

## Sources

| Source | Data |
|--------|------|
| Jupiter Audit API | `botHoldersPercentage` (5-25% normal untuk token legit) |
| Solana RPC | `common_funder`, `funded_same_window` analysis |

## Dua Signal Utama

### 1. Common Funder
Multiple wallets didanai dari source yang sama → indikasi satu entity mengontrol banyak wallet.

### 2. Funded Same Window
Multiple wallets didanai dalam time window yang sama → indikasi bot yang launch banyak wallet sekaligus.

## Thresholds (Production Config)

```json
{
  "maxBundlePct": 25,
  "maxBotHoldersPct": 25,
  "maxTop10Pct": 30
}
```

| Threshold | Maksud | Action jika exceed |
|-----------|--------|--------------------|
| `maxBundlePct` > 25% | >25% holders dari bundle | Drop candidate |
| `maxBotHoldersPct` > 25% | >25% holders flagged bot | Drop candidate |
| `maxTop10Pct` > 30% | Top 10 wallets hold >30% | Drop candidate |

## Kenapa Penting

Token dengan supply terkonsentrasi di bot/bundler riskan:
- **Rug pull** — satu entity bisa dump kapan saja
- **Wash trading** — volume palsu, fee/TVL ratio menipu
- **Liquidity removal** — LP bisa ditarik tiba-tiba

Bundler detection adalah first-line defense sebelum agent deploy dana real.
