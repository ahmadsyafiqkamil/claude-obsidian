---
type: concept
title: "Sui Move Coordination Layer"
created: 2026-06-29
tags:
  - concept
  - sui
  - move
  - smart-contract
  - coordination
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Walrus Blob Storage]]"
  - "[[Multi-Agent Wiki]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Sui Move Coordination Layer

Layer koordinasi on-chain di Sui yang mengelola pointer ke konten Walrus, identitas kontributor, dan hubungan antar halaman wiki.

## Move Package Structure

5 modul di [[ahmadsyafiqkamil/cortex]]:

| Modul | Fungsi |
|-------|--------|
| `wiki.move` | Pointer ke latest blob, history versi, wikilinks |
| `source.move` | Registrasi raw source blob |
| `dispute.move` | Raise/resolve/reject dispute |
| `attest.move` | On-chain provenance attestation |
| `contributor.move` | Apply/approve/reject/revoke lifecycle |

## On-Chain Events

- `SourceRegistered` — raw source blob diregistrasi
- `LinkAdded` — wikilink antar page dicatat
- `DisputeRaised/DisputeResolved` — sengketa sebagai first-class object
- `AttestationCreated` — kontributor menandatangani klaim
