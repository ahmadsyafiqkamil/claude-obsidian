---
title: "pemilu-dapps — Decentralized Voting System"
source: "[[pemilu-dapps-voting]]"
type: source
created: 2026-06-29
source_url: "https://github.com/ahmadsyafiqkamil/pemilu-dapps"
author:
  - "[[Ahmad-Syafiq-Kamil]]"
tags:
  - source
  - github-repo
  - web3
  - solidity
  - voting
status: developing
related:
  - "[[Decentralized Voting System]]"
  - "[[Smart Contract Voting]]"
  - "[[RainbowKit Wagmi Web3 Pattern]]"
---

# pemilu-dapps — Decentralized Voting System

Sistem voting terdesentralisasi berbasis blockchain. Implementasi smart contract untuk transparansi, immutability, dan keamanan proses pemungutan suara.

## Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | Next.js 15, React 19, TailwindCSS |
| Web3 | RainbowKit, Wagmi |
| Backend | FastAPI, Python 3.x, Web3.py, Uvicorn |
| Smart Contract | Solidity, Foundry |

## Fitur

- **Decentralized Voting** — secure, transparent voting process on-chain
- **Smart Contract Integration** — automated vote counting + result verification
- **Admin Dashboard** — candidate management, voting period control, emergency stop
- **Voter Dashboard** — real-time vote count, voting status, candidate selection

## Arsitektur

```
frontend/ (Next.js + RainbowKit) ↔ backend/ (FastAPI) ↔ contract/ (Solidity + Foundry)
```

## Source Document

Lihat [[pemilu-dapps-voting]] untuk README lengkap.
