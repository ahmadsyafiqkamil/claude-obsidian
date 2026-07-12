---
type: source
title: "Evil Panda Exit Strategy — Real Case Study"
source_url: "https://x.com/evilpanda/status/2008841036878213519"
source_type: tweet
author: "[[@EvilPanda]]"
published: 2026-07-10
ingested: 2026-07-12
tags:
  - tweet
  - evil-panda
  - dlmm
  - exit-strategy
  - solana
  - meteora
  - case-study
created: 2026-07-12
related:
  - "[[@EvilPanda]]"
  - "[[DLMM-Coin-Screening-EvilPanda]]"
  - "[[Exit Liquidity Risk]]"
  - "[[Meteora DLMM]]"
  - "[[Solana Memecoin Taxonomy]]"
---

# Evil Panda Exit Strategy — Real Case Study

Tweet oleh @EvilPanda (Logical TA) mendemonstrasikan inti dari Evil Panda Strat dengan **real on-chain example** — posisi SOL-sided di pool 125/10% dengan range -95%.

---

## Setup Posisi

| Parameter | Value |
|-----------|-------|
| Pool type | SOL-sided |
| Fee tier | 10% |
| Range | -95% (wide) |
| Entry timing | Saat merasa "top is close" (near ATH dump) |

## Logic

> "Notice how I did not chase the price up and keep repositioning, I just left my position there as I know when it starts dumping it will very quickly come into my range."

Key principles:
1. **Jangan chase pump** — buka posisi sekali, biarkan dump yang "datang ke range"
2. **Wide range -90% to -95%** — insurance untuk "predictable unpredictability"
3. **Fee 5-10%** — kompensasi tinggi sebagai exit liquidity provider terakhir

## The "Final Exam"

> "The Evil Panda Strat is to make us the **last pool still hodling strong** when everyone else ran away, to be the final exit liquidity provider."

Saat semua orang panic sell, bundler dump, stop-loss trigger, mereka semua bayar 10% fee ke pool Evil Panda. Setelah fee terkumpul, exit dengan sinyal: **RSI(2) close above 90 AND Price closing above BB Upper on 5min chart**.

> "Where else can you earn money from -97% dumps other than on Meteora."

---

## Hubungan dengan Konsep Existing

- [[DLMM-Coin-Screening-EvilPanda]] — 8 heuristik screening koin yang harus di-avoid (complementary: ini adalah strategi untuk koin yang SUDAH di-screening)
- [[Exit Liquidity Risk]] — link langsung: Evil Panda Strat = menjadi pihak yang menerima fee dari exit liquidity orang lain, bukan yang trapped
- [[Solana Memecoin Taxonomy]] — memahami kategori koin yang cocok untuk strategy ini
