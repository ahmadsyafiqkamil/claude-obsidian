---
type: concept
title: "Data Gathering and Expected Value Optimization"
created: 2026-07-03
tags:
  - defi
  - solana
  - dlmm
  - meteora
  - trading
  - data-science
  - optimization
  - ev
  - journaling
status: current
sources:
  - "[[lp-army-bootcamp-meteora]]"
related:
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[Meteora DLMM]]"
  - "[[Meridian AI Agent]]"
---

# Data Gathering and Expected Value Optimization

Framework untuk optimasi strategy LP/trading agent berbasis data — bukan emosi dan overfitting. Dua pilar: **Data Gathering** (journaling) dan **Expected Value** (EV sebagai true metric).

> "Data give you confidence in the long term, emotion destroy it overnight."

---

## Part 1: Data Gathering (Journaling)

### Kenapa?

Goal: ubah config/parameter/screening logic supaya **hindari catastrophic losses** tanpa **menggerus significant returns**. Untuk itu, butuh data — bukan tebakan.

### What to Gather

**Saat Entry** — semua metric dari semua source:
- Fee/TVL ratio
- Volatility
- Market cap
- Volume
- Price change (5m, 1h, 6h, 24h)
- LP USD
- Tx count
- DLL — makin lengkap makin bagus

Source data: Jupiter, Meteora, wallet, DexScreener, dll.

**Saat Exit** — PnL (dalam % dan notional):
- Resulting PnL untuk jadi **target** optimasi

```
Entry Metrics (features)  +  Exit PnL (target)  =  Complete Dataset
```

### Pola Evaluasi

Dari dataset lengkap:
1. Lihat **pattern/tendency** — metric apa yang biasanya muncul saat loss besar?
2. Cari **kecenderungan** — apakah ada konfigurasi spesifik yang selalu rugi?
3. Lakukan **what-if analysis** — "kalau aku terapkan filter ini, EV berubah berapa? opportunity cost hilang berapa?"

### Basis Knowledge: Machine Learning

Framework ini berakar dari:
- **Supervised learning** — entry metrics = features, PnL = label
- **Unsupervised learning** — cluster pattern yang mirip
- **Reinforcement learning** — agent belajar dari reward (PnL)

---

## Part 2: Win Rate Is a Trap

### Why Win Rate Alone Misleads

Win rate tinggi terasa enak secara psikologis, tapi **win rate alone doesn't matter**.

### Contoh 1: High Win Rate, Negative EV (Steamroller)

| Metric | Value |
|--------|-------|
| Win Rate | 95% |
| Avg Profit | +$10 |
| Avg Loss | −$300 |

```
EV = (0.95 × 10) − (0.05 × 300) = 9.5 − 15 = −$5.5 per position
```

100 posisi: 95 menang (+$950), 5 kalah (−$1,500) → **−$550 total**

Ini disebut **"picking pennies in front of a steamroller"** — sangat umum di DLMM:
- Profit 1-2% terus, win rate 90%+
- Sekali loss → hapus profit berhari-hari bahkan berminggu-minggu

### Contoh 2: Low Win Rate, Positive EV

| Metric | Value |
|--------|-------|
| Win Rate | 40% |
| Avg Profit | +$200 (2R) |
| Avg Loss | −$100 (1R) |

```
EV = (0.40 × 200) − (0.60 × 100) = 80 − 60 = +$20 per position
```

100 posisi: 40 menang (+$8,000), 60 kalah (−$6,000) → **+$2,000 total**

> [!key-insight] Risk-Reward matters more than Win Rate. Strategy dengan RR 2:1 dan WR 40% jauh lebih sustainable dari WR 95% dengan RR 1:30 melawan kamu.

### Kenapa Orang Obsesi Win Rate?

1. **Psikologis nyaman** — sering menang = "saya benar"
2. **Mudah dibanggakan** — "WR 90%" lebih keren dari "EV positif, WR 45%"
3. **Mudah di-backtest** — tapi sering overfitting, live beda hasil

---

## Evaluasi yang Benar

Saat mengevaluasi strategy/filter/optimasi, urutan pertanyaan:

1. **Berapa Expected Value-nya?** — bukan berapa WR
2. **Risk vs Reward** — berapa besar loss vs profit?
3. **Tail risk** — ada risiko besar yang jarang tapi bisa hapus semua profit?
4. **Apakah perubahan ini improve EV secara keseluruhan?** — atau cuma naikin WR doang?

---

## Full Loop: Data → EV → Optimize

```
┌─────────────────────────────────────────────────────────┐
│                    OPTIMIZATION LOOP                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. GATHER                                              │
│     Record all entry metrics + exit PnL                 │
│     ▼                                                    │
│  2. ANALYZE                                             │
│     Find patterns in losses. Calculate real EV.         │
│     ▼                                                    │
│  3. WHAT-IF                                             │
│     "If I add filter X, EV changes to Y.                │
│      Opportunity cost = Z"                              │
│     ▼                                                    │
│  4. IMPLEMENT                                           │
│     Data-backed config change, not emotion-driven       │
│     ▼                                                    │
│  5. REPEAT                                              │
│     Journal every position. Continuous improvement.     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Takeaway

> "Data give you confidence in the long term, emotion destroy it overnight."

WR adalah metrik terakhir yang dipertimbangkan. Yang pertama: EV, risk-reward, dan tail risk. Optimasi berbasis data (what-if analysis) jauh lebih powerful dari "rasanya WR jadi lebih tinggi."
