---
type: entity
title: "Bravonoid"
aliases:
  - "@dikibagast"
  - "dikibagast"
created: 2026-07-12
tags:
  - entity
  - person
  - meridian
  - dlmm
  - solana
  - trader
status: current
related:
  - "[[Meridian AI Agent]]"
  - "[[meridian-momentum-screening-bravonoid]]"
  - "[[meridian-bins-range-bravonoid]]"
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[Momentum-to-Bins Scaling]]"
  - "[[Dynamic Re-entry Cooldown]]"
sources:
  - "[[meridian-momentum-screening-bravonoid]]"
  - "[[meridian-bins-range-bravonoid]]"
---

# Bravonoid

X/Twitter handle: [@dikibagast](https://x.com/dikibagast). Praktisi dan builder strategy untuk [[Meridian AI Agent]] — autonomous DLMM liquidity agent di Solana.

## Kontribusi Kunci

- **Momentum screening dengan price change %** — mengusulkan penggunaan single metric dari DexScreener API sebagai core filter momentum, menggantikan kalkulasi custom dari OHLCV
- **Dynamic re-entry cooldown** — mengusulkan momentum-aware re-entry rules yang menggantikan static cooldown timer
- **Momentum-to-bins scaling** — mengusulkan mapping dari price change % ke bins range: stronger momentum → tighter bins, weaker momentum → wider bins
- **Klasifikasi momentum categorical** — extreme/high/moderate/low/minimal dari nilai numerik price change %

## Filosofi Strategy

> "I like simpler approach because most of the time the simpler the better."

Prinsip: satu metric yang dipahami dengan baik lebih powerful daripada banyak metric yang kompleks. Decision flow harus reasoning-based dan jelas logic-nya.

## Related Strategy Components

Semua strategy Bravonoid menggunakan Meridian agent:
- **Agent 1**: wide strategy (1h timeframe)
- **Agent 2**: tight strategy (5m timeframe)

Keduanya pakai logic yang sama, hanya berbeda timeframe — menunjukkan bahwa pattern ini scalable dan adaptable.

> [!key-insight] Bravonoid mendemonstrasikan bahwa agent strategy yang baik datang dari reasoning yang jelas, bukan dari kompleksitas metric. Three simple rules (price change filter, dynamic cooldown, momentum-to-bins) covering entire decision flow.
