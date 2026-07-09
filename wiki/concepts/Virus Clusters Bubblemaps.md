---
type: concept
title: "Virus Clusters Bubblemaps"
domain: defi
address: c-000008
tags:
  - defi
  - solana
  - memecoin
  - onchain-analysis
created: 2026-07-10
status: current
related:
  - "[[DLMM-Coin-Screening-EvilPanda]]"
  - "[[Bundler Detection]]"
---

# Virus Clusters (Bubblemaps)

Pola cluster wallet di [Bubblemaps](https://bubblemaps.io/) yang menyerupai adenovirus — indikasi insider accumulation via multiple wallets yang terhubung.

## Karakteristik Visual

- Bentuk menyerupai adenovirus (bola pusat dengan "spikes" wallet terhubung)
- Satu entitas mengontrol banyak wallet yang saling terhubung
- Wallet-wallet ini membeli di early stage, sebelum publik

## Risiko

- Semua wallet dalam cluster bisa menjual secara simultan (one-click dump via multi-wallet script)
- Insider bisa exit tanpa memicu alarm single-wallet karena distribusi di banyak address
- LP yang masuk ke koin dengan virus clusters menjadi exit liquidity untuk insider

## Detection

- Visual inspection di Bubblemaps
- Cari pola terpusat dengan banyak koneksi ke wallet perimeter
- Cross-reference dengan GMGN top 10 holders metric

## Relevance

Virus clusters adalah red flag absolut. Hindari semua koin dengan pola ini untuk DLMM positions. Komplemen untuk [[Bundler Detection]] yang fokus pada supply-side manipulation signals.
