---
type: concept
title: "Spot LP Strategy"
created: 2026-07-03
tags:
  - dlmm
  - meteora
  - strategy
  - spot
status: current
sources:
  - "[[meridian-agent-architecture]]"
  - "[[meridian-agent-vps]]"
related:
  - "[[Meteora DLMM]]"
  - "[[LP Scanner and Range Selection Pattern]]"
---

# Spot LP Strategy

Single-side SOL deployment strategy di Meteora DLMM. Likuiditas terkonsentrasi di sekitar harga saat ini — **hanya di bawah (bid)**, bukan di atas (ask).

## Cara Kerja

```
         current price
              │
    ──────────┼──────────  ← ask side (KOSONG — tidak naruh likuiditas)
              │
    ██████████│            ← bid side (SOL liquidity di sini)
    ██████████│
    ██████████│
         lower bound
```

## Kenapa Hanya Single-Side (Bid)?

1. SOL sebagai base — risiko IL lebih rendah (SOL relatively stable)
2. Tidak ada likuiditas di ask side → kalau harga naik, tidak kena IL
3. Kalau harga turun → trader beli dari pool → kamu akumulasi token + dapat fee
4. Simple — tidak perlu manage dua sisi range

## Config Instance VPS

```json
{
  "strategy": "spot",
  "solMode": false,
  "deployAmountSol": 0.3,
  "bins_below": "momentum-based (70-150)"
}
```

## vs Other DLMM Strategies

| Strategy | Shape | Kapan pakai |
|----------|-------|-------------|
| **Spot** | Single-side bid | SOL base, momentum entry |
| **Bid-Ask** | Dua sisi | Stable pair, range trading |
| **Curve** | Distribusi melengkung | Volatility expected, want exposure both sides |

## Catatan

Spot strategy di Meridian selalu `bins_above=0`. Executor enforce ini — kalau SCREENER coba set `bins_above > 0` di single-side SOL → reject.
