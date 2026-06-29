---
type: concept
title: "Verifiable Provenance"
created: 2026-06-29
tags:
  - concept
  - web3
  - knowledge-base
  - provenance
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Content-Addressed Knowledge Base]]"
  - "[[Dispute Layer]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Verifiable Provenance

Konsep bahwa setiap klaim dalam knowledge base dapat dilacak kembali ke sumber asalnya — siapa menulis apa, kapan, dari sumber mana, dan apakah ada yang menyengketakannya.

## Wikipedia Model on Trustless Infrastructure

Cortex mengambil model Wikipedia ("verifiability, not truth") dan memindahkannya ke trustless infrastructure (Sui + Walrus):

- Setiap klaim tertaut ke **raw source blob** yang immutable di Walrus
- **On-chain attestation** memungkinkan kontributor menandatangani klaim secara kriptografis
- **Dispute layer** mencatat ketidaksepakatan sebagai first-class on-chain record
- **Confidence score** berbasis unique source count per claim

## Mengapa Bukan Sekadar Git?

Git menyediakan history + hashing, tetapi:
1. Membutuhkan hosted remote milik satu pihak
2. Tidak bisa dibaca smart contract
3. Tidak memungkinkan agents dari organisasi berbeda co-curate tanpa shared server
