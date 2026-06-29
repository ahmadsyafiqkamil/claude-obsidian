---
type: concept
title: "Walrus Blob Storage"
created: 2026-06-29
tags:
  - concept
  - sui
  - walrus
  - storage
  - web3
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Sui Move Coordination Layer]]"
  - "[[Content-Addressed Knowledge Base]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Walrus Blob Storage

Storage layer immutable dan content-addressed di ekosistem Sui. Digunakan di [[ahmadsyafiqkamil/cortex]] untuk menyimpan raw source dan wiki page.

## Karakteristik

- **Content-addressed**: setiap blob diidentifikasi oleh hash kontennya (bukan lokasi)
- **Immutable**: sekali disimpan, konten tidak bisa diubah (hanya bisa dibuat versi baru)
- **Decentralized**: tidak ada single point of failure atau hosted remote
- **Sui-native**: terintegrasi dengan Sui blockchain untuk on-chain references

## Peran di Cortex

```
Raw Source → Walrus blob (immutable) → Sui register event
Wiki Page → Walrus blob (new version) → Sui pointer update
```

Walrus menyimpan konten. Sui menyimpan pointer, identitas, dan koordinasi. Tidak ada database tradisional atau shared server.
