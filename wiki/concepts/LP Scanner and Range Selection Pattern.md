---
type: concept
title: "LP Scanner and Range Selection Pattern"
created: 2026-07-03
tags:
  - defi
  - solana
  - meteora
  - dlmm
  - strategy
  - trading
  - agent
status: current
sources:
  - "[[lp-army-bootcamp-meteora]]"
  - "[[DLMM-Bot-Lessons-Tweet]]"
related:
  - "[[Meteora DLMM]]"
  - "[[Meridian AI Agent]]"
  - "[[yunus-0x-meridian]]"
  - "[[Exit Liquidity Risk]]"
---

# LP Scanner and Range Selection Pattern

Pola dua-layer untuk agent LP di [[Meteora DLMM]]: **Scanner Layer** (filter koin) dan **Range Selection Engine** (pilih range). Pola ini digunakan dalam agent trading otonom untuk memilih koin dan menempatkan likuiditas secara presisi.

---

## Layer 1: Scanner (Filter Koin)

```python
if (
    100_000 <= market_cap <= 1_000_000 and  # micro-cap: cukup likuid, belum terlalu besar
    volume_5m >= 20_000 and                  # minimal aktivitas trading
    tx_count_5m >= 100 and                   # cukup transaksi (bukan wash trading)
    lp_usd >= 50_000                         # likuiditas pool minimal
):
    candidate = True
```

**Rasional tiap filter:**

| Kriteria | Range | Kenapa |
|----------|-------|--------|
| Market cap | $100K–$1M | Micro-cap — cukup likuid untuk trading, cukup kecil untuk volatilitas tinggi + fee besar |
| Volume 5m | ≥ $20K | Ada aktivitas real, bukan dead pool |
| Tx count 5m | ≥ 100 | Konfirmasi banyak participant, bukan 1-2 whale |
| LP USD | ≥ $50K | Pool punya cukup depth, slippage manageable |

---

## Layer 2: Range Selection Engine

Range diletakkan dalam bentuk **single-down** — likuiditas hanya di bawah harga saat ini (bid side), tidak di atas (ask side).

```
┌─────────────────┐
│  current price  │  ← upper = -1% (tepat di bawah harga)
├─────────────────┤
│                 │
│   LIQUIDITY     │  ← likuiditas kamu di sini
│                 │
├─────────────────┤
│                 │  ← lower (bervariasi)
└─────────────────┘
```

### Conservative (Standard)
```
upper = -1%
lower = -55%
shape = "single-down"
```
Range lebar (-1% sampai -55%). **Aman**: menangkap pergerakan turun besar tanpa keluar range.

### Dynamic (Volatility-Based)
```python
if volatility > high:
    lower = -0.75   # 75% di bawah — range sangat lebar
elif volatility > medium:
    lower = -0.55   # 55% — standard
else:
    lower = -0.30   # 30% — range lebih ketat saat pasar tenang
upper = -0.01       # selalu 1% di bawah harga
shape = "single-down"
```
Menyesuaikan lebar range berdasarkan volatilitas. Saat volatilitas tinggi → range lebih lebar (hindari keluar range). Saat tenang → range lebih ketat (fee lebih efisien).

### Aggressive
```
upper = -1%
lower = -25%
shape = "single-down"
```
Range lebih ketat (-1% sampai -25%). **Lebih banyak fee** karena likuiditas lebih terkonsentrasi, tapi **risiko lebih tinggi** — gampang keluar range.

---

## Kenapa Single-Down?

Dalam single-down, kamu hanya menyediakan likuiditas di **bawah** harga saat ini. Ini berarti:
- Kamu hanya jadi **bid** (buy side)
- Saat harga turun ke range-mu, trader beli dari pool → kamu dapat fee
- Saat harga naik, kamu tidak kena impermanent loss karena tidak ada likuiditas di ask side

Strategi ini cocok untuk koin micro-cap yang cenderung volatile ke bawah setelah pump.

---

## Integrasi dengan Agent

Pattern ini bisa diimplementasikan di [[Meridian AI Agent]] sebagai dua step:

1. **Scanner** → `filter_coins()` — return list koin yang lolos filter
2. **Range Engine** → `select_range(coin, volatility)` — return `{shape, upper, lower}`

```python
def run_agent():
    candidates = scanner.filter()           # Layer 1
    for coin in candidates:
        vol = get_volatility(coin)
        range = engine.select(vol)          # Layer 2
        open_position(coin, range)
```
