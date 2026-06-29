---
type: concept
title: "Smart Contract Voting"
created: 2026-06-29
tags:
  - concept
  - solidity
  - smart-contract
  - voting
status: developing
source: "[[pemilu-dapps-voting]]"
related:
  - "[[Decentralized Voting System]]"
  - "[[ahmadsyafiqkamil/pemilu-dapps]]"
---

# Smart Contract Voting

Pola smart contract untuk mengelola proses voting on-chain — dari registrasi kandidat hingga penghitungan suara.

## Core Functions

| Function | Deskripsi |
|----------|-----------|
| `addCandidate()` | Admin menambah kandidat |
| `startVoting()` | Admin memulai periode voting |
| `vote(candidateId)` | Voter memberikan suara (1 wallet = 1 vote) |
| `stopVoting()` | Admin menghentikan periode (atau emergency stop) |
| `getResults()` | Membaca hasil vote on-chain |

## Security Considerations

- **One vote per address** — dicegah di level smart contract
- **Voting period enforcement** — vote hanya diterima selama periode aktif
- **Admin-only functions** — candidate management + period control
- **Emergency stop** — admin bisa menghentikan voting sebelum waktunya
- **No vote modification** — vote bersifat final setelah transaksi dikonfirmasi

## Dev Stack

Solidity + Foundry untuk development dan testing — bukan Hardhat atau Truffle.
