---
type: concept
title: "MCP Toolbox"
created: 2026-07-03
tags:
  - ai
  - agent-framework
  - database
  - mcp
  - google
status: developing
sources:
  - "[[chatbot-kjri-dubai]]"
related:
  - "[[chatbot-kjri-dubai]]"
  - "[[Google Agent Development Kit]]"
  - "[[pgvector Semantic Search]]"
---

# MCP Toolbox

Komponen dari ekosistem Google yang menyediakan bridge antara AI agent dan database SQL. Memungkinkan agent melakukan query database sebagai tool calls — tanpa perlu menulis koneksi database di kode agent.

## Cara Kerja

1. Developer mendefinisikan tool sebagai query SQL di file YAML (`tools.yaml`)
2. Toolbox mengekspos tool tersebut via protokol MCP
3. Agent framework (seperti [[Google Agent Development Kit|ADK]]) memanggil tool yang menghasilkan eksekusi SQL di database PostgreSQL

## Dalam Konteks Chatbot KJRI Dubai

6 tool didefinisikan:
- `cari-layanan` — keyword search layanan konsuler
- `get-detail-layanan` — detail persyaratan, biaya, catatan
- `cari-layanan-semantik` — semantic search via [[pgvector Semantic Search|pgvector]]
- `simpan-identitas` — simpan data pengguna
- `simpan-interaksi` — catat chat log
- `get-statistik-penggunaan` — admin stats

**Versi:** 0.28.0 dengan adapter `toolbox-adk`
