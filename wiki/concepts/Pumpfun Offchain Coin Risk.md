---
type: concept
title: "Pumpfun Offchain Coin Risk"
domain: defi
address: c-000009
tags:
  - defi
  - solana
  - memecoin
  - dlmm
created: 2026-07-10
status: current
related:
  - "[[DLMM-Coin-Screening-EvilPanda]]"
  - "[[CTO Coin Exploitation]]"
---

# Pumpfun Offchain Coin Risk

Koin Pumpfun di mana creator wallet berbeda dengan minter (first buyer) wallet. Dead coin yang di-revive untuk aktivitas kriminal.

## Mekanisme

1. Creator membuat koin di Pumpfun — tidak ada yang membeli
2. Koin menjadi "dead" — tidak ada aktivitas
3. Setelah beberapa waktu, rugger (first buyer/minter) menggunakan koin ini untuk aktivitas penipuan
4. Creator dan minter adalah wallet berbeda — ini adalah offchain signal
5. Pola hasil: pump → slow rug tanpa bounce berarti → rug >-90%

## Perbedaan dengan CTO

| Aspek | CTO Coin | Offchain Coin |
|-------|----------|---------------|
| Takeover | Eksplisit via fitur CTO | Implisit via minter berbeda |
| Dev | Berganti (dev baru) | Tetap (creator ≠ minter) |
| Revenue model | Creator fees | Dump setelah pump |

## Detection

- Periksa apakah creator wallet == minter wallet di Pumpfun
- Jika berbeda → offchain coin → blacklist
- Pola harga: pump cepat diikuti slow bleed tanpa bounce

> [!warning]
> Pattern ini telah dikonfirmasi terjadi dua kali dengan hasil identik (rug >-90%). Masuk ke blacklist screening DLMM.
