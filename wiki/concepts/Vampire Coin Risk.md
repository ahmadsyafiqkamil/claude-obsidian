---
type: concept
title: "Vampire Coin Risk"
domain: defi
address: c-000007
tags:
  - defi
  - solana
  - memecoin
  - dlmm
created: 2026-07-10
status: current
related:
  - "[[DLMM-Coin-Screening-EvilPanda]]"
  - "[[Exit Liquidity Risk]]"
---

# Vampire Coin Risk

Koin yang mengekstrak likuiditas dari "main runner" coin. GMGN menandai dengan ikon vampire fangs (merah).

## Mekanisme

1. Main runner coin mengalami pump signifikan
2. Scammer membuat "vampire coin" — dengan nama/ticker mirip atau riding narasi yang sama
3. Trader yang FOMO/missed out pada runner coin membeli vampire coin sebagai "beta play"
4. Vampire coin dipompa sebentar lalu di-dump
5. Dalam banyak kasus, ini murni ekstraksi likuiditas — tidak ada fundamental di balik koin

## Detection

- Ikon vampire fangs merah di GMGN
- GMGN kadang terlambat mengupdate status → cross-check jika harga tidak behave normal
- Koin muncul setelah main runner coin trending
- Nama/ticker derivative dari koin yang sedang populer

## Relevance

> [!warning]
> Selalu hindari vampire coins untuk DLMM. Struktur pump-and-dump-nya tidak menghasilkan chop yang profitable untuk LP; yang terjadi adalah ekstraksi cepat diikuti dump tanpa bounce.
