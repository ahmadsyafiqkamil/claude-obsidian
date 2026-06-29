---
type: concept
title: "On-Chain Confidence Score"
created: 2026-06-29
tags:
  - concept
  - web3
  - knowledge-base
  - trust
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Verifiable Provenance]]"
  - "[[Content-Addressed Knowledge Base]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# On-Chain Confidence Score

Metrik yang mengukur tingkat kepercayaan terhadap sebuah klaim berdasarkan jumlah unique source yang mendukungnya — dihitung on-chain.

## Cara Kerja

1. Setiap klaim di wiki page tertaut ke satu atau lebih raw source blob
2. Confidence score = jumlah unique source yang mendukung klaim tersebut
3. Score ditampilkan di Walrus Site dengan badge visual
4. Semakin banyak source independen yang mengonfirmasi klaim → semakin tinggi confidence

## Bedanya dengan "Truth"

Confidence score mengukur **verifiability** (berapa banyak sumber yang mendukung), bukan **truth** (apakah klaim benar). Ini konsisten dengan model Wikipedia: "verifiability, not truth."
