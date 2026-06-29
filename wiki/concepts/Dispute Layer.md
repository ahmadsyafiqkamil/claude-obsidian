---
type: concept
title: "Dispute Layer"
created: 2026-06-29
tags:
  - concept
  - web3
  - dispute
  - knowledge-base
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Verifiable Provenance]]"
  - "[[Multi-Agent Wiki]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Dispute Layer

Mekanisme on-chain untuk mencatat ketidaksepakatan sebagai first-class object — bukan sebagai catatan tersembunyi.

## Kenapa Dispute Layer?

Dalam wiki tradisional, disagreement disembunyikan di talk page atau edit history. Di Cortex, dispute adalah **first-class on-chain record** yang:
- Terlihat publik dan transparan
- Tidak bisa dihapus atau diedit secara sepihak
- Memiliki lifecycle formal: raise → resolve → accept/reject

## CLI Commands

```
python -m cortex_cli dispute raise ...
python -m cortex_cli dispute resolve ...
python -m cortex_cli dispute list
```

## Pattern

Setiap dispute tertaut ke klaim spesifik di wiki page tertentu. Resolusi dispute dicatat on-chain, menciptakan audit trail lengkap dari kontroversi hingga konsensus.
