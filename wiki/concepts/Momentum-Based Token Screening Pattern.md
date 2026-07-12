---
type: concept
title: "Momentum-Based Token Screening Pattern"
created: 2026-07-03
tags:
  - defi
  - solana
  - meteora
  - dlmm
  - meridian
  - momentum
  - strategy
  - agent
status: current
sources:
  - "[[lp-army-bootcamp-meteora]]"
  - "[[meridian-momentum-screening-bravonoid]]"
related:
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[Meteora DLMM]]"
  - "[[Meridian AI Agent]]"
  - "[[yunus-0x-meridian]]"
---

# Momentum-Based Token Screening Pattern

Pattern screening untuk agent LP di Meridian yang menggunakan **price change %** sebagai core metric momentum. Simple approach — satu metric untuk menjawab: "token ini lagi punya momentum atau nggak?"

---

## Core Metric: Price Change %

Satu metric dari DexScreener API (free, reliable, rate limit oke):

| Timeframe | Guna | Agent type |
|-----------|------|------------|
| Price change 5m | Momentum jangka pendek | Tight strategy agent |
| Price change 1h | Momentum jangka menengah | Wide strategy agent |
| Price change 6h | Trend jangka panjang | Optional |
| Price change 24h | Macro trend | Optional |

**Kenapa cukup satu metric?** Price change % memberi snapshot: token ini barusan gerak ke mana dan seberapa kuat di timeframe tertentu. Tidak perlu kalkulasi metric custom dari OHLCV.

> "I like simpler approach because most of the time the simpler the better."

---

## Implementasi (3 Tempat)

### 1. Filter Utama Candidates

Dari semua candidates (Meteora discovery / source lain), cek price change > threshold:

```
if price_change_5m > threshold:
    candidate = True   # lanjut ke range selection
else:
    drop               # skip
```

### 2. Dynamic Re-entry Cooldown

**Crucial.** Bukan static cooldown, tapi **dynamic** berdasarkan price change + waktu:

```
if timeAfterClose < 1h:
    drop_token

elif timeAfterClose > 1h AND timeAfterClose < 6h AND priceChange1h > 100%:
    add_token                    # momentum masih gila, boleh re-enter

elif timeAfterClose > 6h AND timeAfterClose < 12h AND priceChange1h > 50%:
    add_token                    # momentum masih kuat

elif timeAfterClose > 12h AND timeAfterClose < 24h AND priceChange1h > 20%:
    add_token                    # ada momentum residual

else:
    drop_token                   # momentum habis, skip
```

**Logikanya:** Cooldown makin longgar kalau momentum masih kuat. Token yang abis profit tapi masih nge-pump 100% dalam 1 jam → layak re-enter setelah 1 jam (bukan nunggu 6 jam static). Tapi token yang momentumnya lemah → cooldown lebih panjang.

> "Ini powerful karena bisa ngebantu avoid unnecessary losses, even mungkin ngorbanin potential gains, but I think the math is better to avoid losses."

---

## Bins Range Selection: Price Change → Bins

Bins range (lebar posisi LP) ditentukan oleh kekuatan momentum:

| Klasifikasi Momentum | Price Change 1h | Bins Below | Reasoning |
|---------------------|-----------------|------------|-----------|
| **Extreme** | ≥ 100% | 70–100 | Trend sangat kuat, pullback minimal → **tight bins** |
| **High** | ≥ 50% | 70–100 | Trend kuat → **tight bins** |
| **Moderate** | ≥ 20% | 100–150 | Trend biasa → medium bins |
| **Low** | ≥ 10% | 100–150 | Trend lemah → wide bins |
| **Minimal** | < 10% | 130–150 or skip | No momentum → widest bins or skip entirely |

### Kenapa momentum kuat = bins sempit?

> "Semakin kuat trending/momentum-nya, semakin kecil kemungkinan dia untuk punya pullback besar."

Logikanya:
- Momentum kuat → pullback kecil → bins **tight** (70-100) → maksimalin fee dari range sempit
- Momentum lemah → pullback bisa besar → bins **wide** (130-150) → kasih room of error

---

## Complete Decision Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    SCREENING (Phase 2)                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Meteora API ──→ volatility (0-5+)                              │
│  DexScreener ──→ price_change_1h (%)                            │
│                                                                  │
│  ▼                                                               │
│                                                                  │
│  getMomentumGuidance() → klasifikasi momentum:                   │
│    extreme  (≥100%) → 70-100 bins                                │
│    high     (≥50%)  → 70-100 bins                                │
│    moderate (≥20%)  → 100-150 bins                               │
│    low      (≥10%)  → 100-150 bins                               │
│    minimal  (<10%)  → 100-150 bins or SKIP                       │
│                                                                  │
│  ▼                                                               │
│                                                                  │
│  LLM decides final bins_below:                                   │
│    Pathway A: formula floor (35 + volatility/5 × 55)             │
│    Pathway B: momentum guidance (↑ primary reference)            │
│    Pathway C: momentum_sculpt strategy (70-150 range)            │
│    Pathway D: config default = 69 (last resort)                  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────┐       │
│  │ Real Examples (momentum_sculpt strategy):             │       │
│  │                                                       │       │
│  │  +80% 1h (high_momentum):    ~75-85 bins  — narrow   │       │
│  │  +25% 1h (moderate):         ~110-140 bins — medium   │       │
│  │  <10% 1h (minimal):          ~130-150 or SKIP — wide  │       │
│  └──────────────────────────────────────────────────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Insight

Pattern ini adalah contoh bagaimana **satu metric sederhana** (price change %) bisa menjadi tulang punggung seluruh decision flow agent:

1. **Filter entry** — cek apakah token punya momentum
2. **Dynamic cooldown** — re-entry timing berdasarkan residual momentum
3. **Bins sizing** — tight bins saat momentum kuat, wide saat lemah

Prinsip dasarnya: **momentum kuat = risk kecil = bins ketat = fee maksimal**. Semakin objektif dan reasoning-based decision-nya, semakin konsisten agent-nya.
