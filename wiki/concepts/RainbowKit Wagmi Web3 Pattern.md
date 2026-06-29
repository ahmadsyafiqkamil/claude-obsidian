---
type: concept
title: "RainbowKit Wagmi Web3 Pattern"
created: 2026-06-29
tags:
  - concept
  - web3
  - frontend
  - nextjs
  - ethereum
status: developing
source: "[[pemilu-dapps-voting]]"
related:
  - "[[Decentralized Voting System]]"
  - "[[ahmadsyafiqkamil/pemilu-dapps]]"
---

# RainbowKit Wagmi Web3 Pattern

Pola integrasi Web3 frontend menggunakan RainbowKit + Wagmi di aplikasi Next.js.

## Stack

| Library | Peran |
|---------|-------|
| **RainbowKit** | Wallet connection UI (MetaMask, WalletConnect, Coinbase Wallet, dll.) |
| **Wagmi** | React hooks untuk Ethereum interactions (read contract, write contract, account, network) |
| **Viem** | Low-level Ethereum library (underlying Wagmi) |

## Pattern

```tsx
// RainbowKit: wallet connection button
<ConnectButton />

// Wagmi: read contract data
const { data } = useReadContract({
  address: contractAddress,
  abi: votingAbi,
  functionName: 'getCandidates',
})

// Wagmi: write contract (vote)
const { writeContract } = useWriteContract()
writeContract({
  address: contractAddress,
  abi: votingAbi,
  functionName: 'vote',
  args: [candidateId],
})
```

## Keunggulan

- **Zero-config wallet UI** — RainbowKit menyediakan modal connect/disconnect/switch network siap pakai
- **Type-safe contract interactions** — Wagmi hooks dengan TypeScript type inference
- **Auto-refresh** — data contract otomatis refresh saat wallet/network berubah
- **Next.js compatible** — App Router + React 19 support penuh
