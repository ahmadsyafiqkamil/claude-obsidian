---
type: concept
title: "Meridian AI Agent"
created: 2026-07-03
tags:
  - ai
  - agent
  - defi
  - solana
  - trading
  - automation
status: developing
sources:
  - "[[lp-army-bootcamp-meteora]]"
related:
  - "[[yunus-0x-meridian]]"
  - "[[Meteora DLMM]]"
  - "[[LP Army]]"
---

# Meridian AI Agent

Platform agen AI otonom untuk liquidity provision di Meteora DLMM (Solana). Dibuat oleh Yunus (`yunus-0x/meridian`).

## Cara Kerja

1. User mendefinisikan konfigurasi agent — strategi LP, filter koin, parameter risiko
2. Agent berjalan otonom: memilih pool, membuka/menutup posisi, mengelola range
3. Dry run mode (`npm run dev`) untuk testing tanpa real funds

## Filosofi Penggunaan

> "Buat kalian yang belum pernah nyemplung LP di Meteora, nggak mungkin bisa profitable dari Meridian. Kalian harus belajar dulu LP secara manual." — Yunus

Meridian adalah **alat otomatisasi**, bukan pengganti pemahaman. User harus:
1. Paham fundamental LP dan DLMM
2. Bisa memilih strategi yang menguntungkan secara manual
3. Bisa memfilter koin yang baik
4. Baru kemudian mendelegasikan ke agent

## Status

- **Stars:** 490
- **Branch:** experimental
- **Language:** JavaScript 100%
- **Disclaimer:** Autonomous trading agent — real financial risk
