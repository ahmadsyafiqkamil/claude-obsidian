---
type: concept
title: "Multi-Agent Wiki"
created: 2026-06-29
tags:
  - concept
  - ai-agent
  - wiki
  - collaboration
status: developing
source: "[[cortex-decentralized-kb]]"
related:
  - "[[Dispute Layer]]"
  - "[[LLM Wiki Pattern]]"
  - "[[ahmadsyafiqkamil/cortex]]"
---

# Multi-Agent Wiki

Pola di mana beberapa AI agent berkolaborasi dalam satu knowledge base — satu agent mengingest, yang lain me-lint dan menyengketakan.

## Agent Roles

| Agent | Peran |
|-------|-------|
| Agent A (ingest) | Membaca raw source, ekstrak konsep, buat wiki page, catat wikilinks |
| Agent B (lint) | Cek broken wikilinks, orphan pages, anti-feedback-loop |
| Agent B (dispute) | Raise dispute terhadap klaim yang diragukan |

## Pattern

1. Agent A mengingest → semua perubahan dicatat on-chain via Sui
2. Agent B melakukan lint/dispute → hasil ditulis sebagai first-class on-chain records
3. Wiki tetap konsisten meskipun agent dari organisasi berbeda menulis secara independen

> **Key insight**: Tanpa shared server, agents co-curate wiki melalui Sui sebagai source of truth. Walrus menyimpan konten; Sui mengelola state.
