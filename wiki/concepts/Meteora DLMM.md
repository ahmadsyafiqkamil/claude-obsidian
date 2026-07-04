---
type: concept
title: "Meteora DLMM"
created: 2026-07-03
tags:
  - defi
  - solana
  - liquidity
  - dlmm
  - amm
status: developing
sources:
  - "[[lp-army-bootcamp-meteora]]"
  - "[[DLMM-Bot-Lessons-Tweet]]"
related:
  - "[[lp-army-bootcamp-meteora]]"
  - "[[LP Army]]"
  - "[[yunus-0x-meridian]]"
  - "[[Exit Liquidity Risk]]"
  - "[[Volatility Execution Gap]]"
---

# Meteora DLMM

Protokol DeFi di Solana yang menggunakan model **Dynamic Liquidity Market Maker (DLMM)**. Berbeda dari AMM tradisional (constant product), DLMM memungkinkan liquidity provider untuk mendistribusikan likuiditas secara presisi di berbagai rentang harga.

## Model Distribusi Likuiditas

| Model | Deskripsi |
|-------|-----------|
| **Spot** | Likuiditas terkonsentrasi di satu titik harga |
| **Curve** | Distribusi melengkung — lebih banyak likuiditas di sekitar harga saat ini |
| **Bid-Ask** | Mirip orderbook — bid di bawah, ask di atas harga pasar |

## Keunggulan vs AMM Tradisional

- **Capital efficiency** lebih tinggi — LP bisa konsentrasi di range spesifik
- **Fee optimization** — lebih banyak fee dari volume trading di range yang dipilih
- **Fleksibilitas strategi** — mendukung berbagai strategi LP (spot, curve, bid-ask)

## Ekosistem

- **LP Army** — komunitas edukasi liquidity provision
- **Meridian** — AI agent untuk autonomous LP
- Tools: Matlex (monitoring), GMGN (security), Zapin (execution)

## Risiko

- **Impermanent loss** — perbedaan nilai vs hold saat harga bergerak keluar range
- **Range selection risk** — memilih range yang salah = tidak dapat fee
- **Smart contract risk** — risiko protokol Solana
