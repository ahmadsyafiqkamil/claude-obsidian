---
type: concept
title: "Exit Liquidity Risk"
created: 2026-07-03
tags:
  - defi
  - solana
  - dlmm
  - meteora
  - risk-management
  - liquidity
status: current
sources:
  - "[[DLMM-Bot-Lessons-Tweet]]"
  - "[[meridian-agent-architecture]]"
related:
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[Gas Reserve Pattern]]"
  - "[[Bundler Detection]]"
  - "[[Meteora DLMM]]"
  - "[[evil-panda-exit-case-study]]"
---

# Exit Liquidity Risk

Risiko dimana posisi LP sendiri menjadi **exit liquidity** untuk pelaku pasar lain — kebalikan dari tujuan awal menyediakan likuiditas dan mengumpulkan fee. Risiko ini muncul ketika sizing LP tidak proporsional terhadap market depth.

## Mekanisme

```
Token small-cap: market cap $100K, pool depth $50K

LP sizing: 5 SOL (~$500)
  → Posisi kamu = 1% pool depth  ← TERLALU BESAR

Saat harga dump:
  1. Seller panic masuk
  2. Pool tipis → depth cepat habis
  3. Posisi LP-mu di-buy secara agresif (kamu jadi counterparty)
  4. Kamu beli token yang sedang jatuh → unrealized loss besar
```

Di sisi lain, jika sizing kecil (misal 0.1% pool depth), kamu hanya menyerap sebagian kecil sell pressure. Risiko lebih manageable.

## Hubungan Market Cap → Sizing

| Market Cap | Pool Depth (typical) | Max Sizing | Rasional |
|------------|---------------------|------------|----------|
| < $100K | < $20K | 0.1-0.3 SOL | Depth terlalu tipis, sizing besar = insta exit liquidity |
| $100K-$500K | $20K-$100K | 0.3-1 SOL | Micro-cap, volatile tapi mulai likuid |
| $500K-$1M | $50K-$200K | 1-3 SOL | Cukup depth untuk sizing moderat |
| > $1M | > $100K | 3-10 SOL | Lebih aman, tapi tetap monitor depth/pct |

Prinsip: **bukan soal confidence di token, tapi seberapa besar tanggungan terhadap market depth.**

## Deteksi di Agent

Dalam [[Meridian Agent]], risiko ini dimitigasi lewat beberapa layer:

1. **Scanner filter**: market cap $100K-$1M + LP USD >=$50K ([[LP Scanner and Range Selection Pattern]])
2. **Position sizing**: `computeDeployAmount()` clamping + gas reserve ([[Gas Reserve Pattern]])
3. **Bundler detection**: tolak token dengan supply terkonsentrasi di bot ([[Bundler Detection]])

Pertanyaan screening kunci: **"Berapa persen pool depth yang sizing saya wakili?"** — bukan cuma "% dari capital sendiri".

## Perbedaan dengan Impermanent Loss

Impermanent loss terjadi saat harga bergerak KELUAR range. Exit liquidity risk terjadi saat sizing TERLALU BESAR untuk depth pool — bahkan sebelum harga bergerak signifikan, posisi sudah jadi beban.

> [!key-insight] Key insight
> Small market cap + large LP sizing = kamu jadi counterparty untuk semua seller. The market structure doesn't fit your entry — bukan soal sinyal entry yang salah.
