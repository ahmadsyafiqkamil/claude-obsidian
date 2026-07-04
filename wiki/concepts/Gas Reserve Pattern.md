---
type: concept
title: "Gas Reserve Pattern"
created: 2026-07-03
tags:
  - defi
  - solana
  - safety
  - pattern
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meridian Agent]]"
  - "[[meridian-agent-vps]]"
  - "[[Exit Liquidity Risk]]"
---

# Gas Reserve Pattern

Pattern safety dalam Meridian agent: memastikan wallet selalu punya cukup SOL untuk gas + biaya transaksi, tidak peduli seberapa agresif strategi.

## Implementasi

```javascript
// executor.js — deploy_position safety check
if (wallet_sol < amount_y + gasReserve) {
  throw new Error("Insufficient SOL: need deploy + gas reserve");
}
```

## Config

```json
{
  "deployAmountSol": 0.3,
  "gasReserve": 0.05,
  "minSolToOpen": 0.1,
  "positionSizePct": 0.09
}
```

## Alokasi Wallet

```
Wallet SOL: 10 SOL

├── minSolToOpen: 0.1    ← minimum to even consider opening
├── positionSizePct: 9%  ← 0.9 SOL allocated per position
├── gasReserve: 0.05      ← always kept for gas
└── deployAmountSol: 0.3  ← minimum deploy per position
```

## computeDeployAmount()

```javascript
deployable = walletSol - gasReserve;
amount = clamp(deployable × positionSizePct, deployAmountSol, maxDeployAmount);
```

Formula compounding: semakin besar wallet → semakin besar position size, tapi selalu bounded oleh `maxDeployAmount` dan selalu sisakan `gasReserve`.

## Kenapa Penting

Tanpa gas reserve, agent bisa deploy semua SOL → tidak bisa close position atau claim fees → position stuck. Gas reserve adalah "seatbelt" untuk autonomous agent.
