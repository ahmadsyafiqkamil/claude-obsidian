---
type: concept
title: "Volatility Execution Gap"
created: 2026-07-03
tags:
  - defi
  - solana
  - dlmm
  - volatility
  - execution
  - risk-management
status: current
sources:
  - "[[DLMM-Bot-Lessons-Tweet]]"
  - "[[meridian-agent-architecture]]"
related:
  - "[[Trailing Take Profit]]"
  - "[[Momentum-to-Bins Scaling]]"
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[DLMM Position Lifecycle]]"
---

# Volatility Execution Gap

Gap antara **harga saat sinyal exit/TP di-trigger** dan **harga saat eksekusi benar-benar selesai** — diperbesar oleh volatilitas tinggi.

## Mekanisme

```
Bot trigger TP karena harga kena +5% threshold:

  Harga saat sinyal:  $1.05  ← trigger TP
  Latency + slippage:  ~2-5 detik (RPC, tx confirmation)
  Harga saat closed:   $0.97  ← sudah dump
  Realized PnL:        -3%    ← negatif, padahal di atas kertas +5%
```

**Volatilitas tinggi = narrow execution window.** Semakin cepat harga bergerak, semakin besar gap antara sinyal dan realisasi.

## Faktor yang Memperburuk Gap

| Faktor | Dampak | Mitigasi |
|--------|--------|----------|
| Volatilitas ekstrim (1h >= 100%) | Gap bisa >10% dalam hitungan detik | Kurangi sizing, hindari entry |
| RPC latency | 500ms-2s delay tambahan | Gunakan dedicated RPC (Helius) |
| Solana congestion | Tx confirmation lambat | Priority fee agresif |
| Pool depth rendah | Slippage besar per unit size | Sizing kecil + LP USD filter |
| Rigid TP/SL tanpa trail | Tidak adaptif ke pergerakan harga | Trailing TP ([[Trailing Take Profit]]) |

## Integrasi dengan Screening

Volatility execution gap bukan cuma masalah exit — harus dipertimbangkan **sebelum entry**:

1. **Momentum-based screening**: [[Momentum-Based Token Screening Pattern]] — 1h price change >= 100% = extreme band = tighter bins (70-85), lebih sedikit exposure
2. **Dynamic re-entry cooldown**: [[Dynamic Re-entry Cooldown]] — high momentum tokens boleh re-entry lebih cepat karena eksekusi lebih predictable
3. **Momentum-to-bins**: [[Momentum-to-Bins Scaling]] — high volatility = tighter bins = keluar range lebih cepat = exposure lebih pendek

## Mitigasi dalam Agent

```python
# Sebelum entry — screening
if volatility_1h >= 100:
    sizing = min(sizing, 0.3 * normal_sizing)  # kurangi sizing
    bins_below = 70  # tightest bins → keluar cepat

# Saat exit — trailing TP
if trailing_triggered:
    if time_since_trigger > 10s:  # execution delay
        log_warning("Execution gap >10s, check RPC")
```

> [!key-insight] Key insight
> Pada volatilitas tinggi, PnL di atas kertas hampir selalu berbeda dari PnL realisasi. Screening harus memperhitungkan bukan cuma apakah sinyal TP akan triggered, tapi apakah eksekusi bisa mengikuti.
