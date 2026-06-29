---
type: concept
title: "Decentralized Voting System"
created: 2026-06-29
tags:
  - concept
  - web3
  - voting
  - blockchain
status: developing
source: "[[pemilu-dapps-voting]]"
related:
  - "[[Smart Contract Voting]]"
  - "[[RainbowKit Wagmi Web3 Pattern]]"
  - "[[ahmadsyafiqkamil/pemilu-dapps]]"
---

# Decentralized Voting System

Sistem pemungutan suara yang menggunakan blockchain untuk menjamin transparansi, immutability, dan keamanan proses voting.

## Prinsip

1. **Transparansi** — semua vote tercatat on-chain, bisa diaudit publik
2. **Immutability** — vote tidak bisa diubah setelah dikonfirmasi
3. **Security** — smart contract memverifikasi aturan voting (satu wallet = satu vote)
4. **Automation** — vote counting dilakukan oleh smart contract, bukan manual

## Implementasi di [[ahmadsyafiqkamil/pemilu-dapps]]

- Smart contract Solidity mengelola voting period + candidate registry + vote tally
- MetaMask wallet untuk identitas voter
- Admin dashboard untuk start/stop voting period dan candidate management
- Real-time result display tanpa menunggu penghitungan manual
