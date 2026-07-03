---
type: concept
title: "pgvector Semantic Search"
created: 2026-07-03
tags:
  - database
  - postgresql
  - vector-search
  - embeddings
  - ai
status: developing
sources:
  - "[[chatbot-kjri-dubai]]"
related:
  - "[[chatbot-kjri-dubai]]"
  - "[[MCP Toolbox]]"
---

# pgvector Semantic Search

Ekstensi PostgreSQL (`pgvector`) yang memungkinkan pencarian semantik berbasis embedding vector langsung di database.

## Cara Kerja

1. Data teks dikonversi menjadi embedding vector menggunakan model embedding (mis. Gemini `gemini-embedding-001`)
2. Vector disimpan di kolom PostgreSQL bertipe `vector`
3. Query pencarian dikonversi ke embedding yang sama
4. PostgreSQL mencari vector terdekat menggunakan cosine similarity atau Euclidean distance

## Dalam Konteks Chatbot KJRI Dubai

Digunakan sebagai fallback saat pencarian keyword (`cari-layanan`) gagal menemukan hasil. User bisa menjelaskan situasi tanpa menyebut nama layanan spesifik, dan pgvector menemukan layanan yang relevan secara semantik.

**Embedding model:** Gemini API (`gemini-embedding-001`)

## Keunggulan vs Solusi Eksternal

- Tidak perlu vector database terpisah (Pinecone, Weaviate, dll.)
- Data dan vector dalam satu transaksi PostgreSQL
- Familiar bagi DBA PostgreSQL
