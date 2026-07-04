---
type: concept
title: "Strategy Library"
created: 2026-07-03
tags:
  - strategy
  - agent
  - dlmm
  - configuration
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meridian Agent]]"
  - "[[Momentum-to-Bins Scaling]]"
---

# Strategy Library (Meridian)

Sistem penyimpanan strategi LP yang user bisa simpan dari tweet/deskripsi teks. Agent mengekstrak kriteria terstruktur dan menyimpannya untuk digunakan saat screening cycle.

## Data Structure

```json
{
  "active": "momentum_sculpt",
  "strategies": {
    "momentum_sculpt": {
      "id": "momentum_sculpt",
      "name": "Momentum Sculpt",
      "lp_strategy": "spot",
      "token_criteria": { "min_mcap": 80000, ... },
      "entry": { "condition": "momentum_1h >= 5%", ... },
      "range": { "type": "single-down", "bins_below_pct": "momentum-based" },
      "exit": { "take_profit_pct": 8, "trailing": true },
      "raw": "original tweet text..."
    }
  }
}
```

## API

| Function | Purpose |
|----------|---------|
| `addStrategy({id, name, criteria, ...})` | Simpan strategy baru (dari tweet) |
| `listStrategies()` | List semua dengan summary |
| `getStrategy({id})` | Full detail + raw text |
| `setActiveStrategy({id})` | Set sebagai strategy aktif |
| `removeStrategy({id})` | Hapus strategy |
| `getActiveStrategy()` | Return strategy aktif (dipakai screening) |

## Format Strategy

Setiap strategy mengandung:
- **token_criteria** — min mcap, min age, requires KOL
- **entry** — condition, price change threshold, single-side
- **range** — type (spot/curve/bid-ask), bins_below_pct
- **exit** — take profit %, trailing config
- **best_for** — deskripsi kondisi ideal
- **raw** — original tweet/text untuk reference

## Use Case

1. User lihat tweet tentang strategi LP di X
2. Paste tweet via Telegram: "save this strategy: [tweet text]"
3. Agent (GENERAL role) parse tweet → `addStrategy()`
4. Strategy langsung tersedia untuk screening cycle berikutnya
