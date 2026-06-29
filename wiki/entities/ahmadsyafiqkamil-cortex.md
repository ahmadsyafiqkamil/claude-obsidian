---
type: entity
title: "ahmadsyafiqkamil/cortex"
created: 2026-06-29
tags:
  - repo
  - github
  - sui
  - walrus
  - knowledge-base
  - web3
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Ahmad-Syafiq-Kamil]]"
  - "[[Verifiable Provenance]]"
  - "[[LLM Wiki Pattern]]"
  - "[[Multi-Agent Wiki]]"
---

# ahmadsyafiqkamil/cortex

**Decentralized knowledge base maintained by AI agents** — Sui Overflow 2026 (Walrus Track).

Cortex menerapkan [[LLM Wiki Pattern]] di atas Walrus + Sui Move. Setiap wiki page adalah immutable Walrus blob; Sui object menunjuk versi terbaru dan merekam hubungan antar page.

## Core Insight

> Cortex guarantees **verifiable provenance** — not "verifiable truth". Wikipedia model ("verifiability, not truth") di atas trustless infrastructure.

## Why Not Git?

Git punya history + hashing, tapi butuh hosted remote milik satu pihak dan tidak bisa dibaca smart contract. Cortex memungkinkan: (a) agents dari organisasi berbeda co-curating wiki tanpa shared server, (b) on-chain contracts memverifikasi knowledge state, (c) wikis yang outlive maintainer-nya.

## Fitur

- Multi-agent wiki (Agent A ingest + Agent B lint/dispute)
- Verifiable provenance — setiap klaim traceable ke raw source blob
- Dispute layer — first-class on-chain records
- Lint agent — broken wikilinks, orphan pages
- Chat RAG — multi-turn dengan per-claim provenance citations
- Walrus Site — public wiki + graph view + confidence badges + time-travel diff
- Confidence score — unique source count per claim

## Deployment (Sui Testnet)

| Item | Value |
|------|-------|
| Package ID | `0x823f71d5…3b7e` |
| Wiki object | `0xd55c7cc2…6755` |
| Agent A | `0x6034727b…3e89` |
| Agent B | `0x50126de4…b86a` |

Lihat [[cortex-decentralized-kb]] untuk README lengkap.
