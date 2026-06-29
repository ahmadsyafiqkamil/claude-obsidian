---
title: "cortex — Decentralized Knowledge Base"
source: "[[cortex-decentralized-kb]]"
type: source
created: 2026-06-29
source_url: "https://github.com/ahmadsyafiqkamil/cortex"
author:
  - "[[Ahmad-Syafiq-Kamil]]"
tags:
  - source
  - github-repo
  - sui
  - walrus
  - knowledge-base
  - web3
status: developing
related:
  - "[[Verifiable Provenance]]"
  - "[[Walrus Blob Storage]]"
  - "[[Sui Move Coordination Layer]]"
  - "[[Multi-Agent Wiki]]"
  - "[[Dispute Layer]]"
  - "[[Content-Addressed Knowledge Base]]"
  - "[[On-Chain Confidence Score]]"
  - "[[LLM Wiki Pattern]]"
---

# cortex — Decentralized Knowledge Base

Dibangun untuk **Sui Overflow 2026 (Walrus Track)**. Cortex menerapkan [[LLM Wiki Pattern]] di atas **Walrus** (immutable, content-addressed storage) dengan **Sui Move** sebagai coordination layer.

> **Positioning:** Cortex menjamin **verifiable provenance** — siapa menulis apa, kapan, dari sumber mana, dan apakah ada yang menyengketakannya.

## Stack

| Layer | Teknologi |
|-------|-----------|
| Storage | Walrus (immutable blob) |
| Coordination | Sui Move (wiki.move, source.move, dispute.move, attest.move, contributor.move) |
| Agent CLI | Python (cortex_cli) |
| Chat API | Flask (port 5001) |
| Site | Vite + React + TypeScript + TailwindCSS v4 |

## Flow

```
Raw Source → Walrus blob → Sui register → LLM extract → Walrus page blob → Sui pointer update → Wikilinks recorded → _index/_log updated
```

## Fitur Utama

- **Multi-agent wiki** — Agent A (ingest) + Agent B (lint/dispute) di wiki yang sama
- **Verifiable provenance** — setiap klaim bisa dilacak ke raw source blob
- **Dispute layer** — ketidaksepakatan sebagai first-class on-chain record
- **Lint agent** — broken wikilinks, orphan pages, anti-feedback-loop checks
- **Chat RAG** — multi-turn chat dengan per-claim provenance citations
- **Walrus Site** — public wiki + graph view + confidence badges + time-travel diff
- **Confidence score** — unique source count per claim
- **Provenance attestation** — wallet sign-in + on-chain attest

## Deployment (Sui Testnet)

| Item | Value |
|------|-------|
| Package ID | `0x823f…3b7e` |
| Wiki object ID | `0xd55c…6755` |
| Agent A | `0x6034…3e89` |
| Agent B | `0x5012…b86a` |

## Source Document

Lihat [[cortex-decentralized-kb]] untuk README lengkap.
