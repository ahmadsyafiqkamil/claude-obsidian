---
type: concept
title: "Content-Addressed Knowledge Base"
created: 2026-06-29
tags:
  - concept
  - web3
  - storage
  - knowledge-base
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Walrus Blob Storage]]"
  - "[[Verifiable Provenance]]"
  - "[[LLM Wiki Pattern]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Content-Addressed Knowledge Base

Pendekatan knowledge base di mana setiap artefak (source, page, version) diidentifikasi oleh hash kontennya, bukan oleh lokasi atau URL.

## Perbandingan

| Aspek | Git-based Wiki | Content-Addressed (Cortex) |
|-------|---------------|---------------------------|
| Identifikasi | Path + git ref | Content hash (Walrus blob) |
| Permanence | Tergantung hosted remote | Immutable blob on Walrus |
| Smart contract readability | Tidak bisa | Bisa (via Sui pointer) |
| Multi-party collab | Shared server needed | Trustless via Sui |

## Keunggulan

1. **Wikis outlive maintainer** — tidak ada hosted remote yang bisa mati
2. **Time-travel diff** — bandingkan versi mana pun berdasarkan blob ID
3. **Confidence scoring** — hitung unique source count untuk setiap klaim
4. **On-chain verifiability** — smart contract bisa membaca dan memverifikasi state knowledge base
