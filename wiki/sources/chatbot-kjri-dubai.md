---
type: source
title: "Chatbot KJRI Dubai"
created: 2026-06-29
source_url: "https://github.com/ahmadsyafiqkamil/Chatbot-KJRI-Dubai"
source_type: github-repo
author: "[[Ahmad-Syafiq-Kamil]]"
tags:
  - github-repo
  - chatbot
  - ai-agent
  - government-tech
  - konsuler
status: current
related:
  - "[[Ahmad-Syafiq-Kamil]]"
  - "[[ahmadsyafiqkamil-Chatbot-KJRI-Dubai]]"
  - "[[Google Agent Development Kit]]"
  - "[[MCP Toolbox]]"
  - "[[pgvector Semantic Search]]"
  - "[[CV-Syamil-Protkons]]"
---

# Chatbot KJRI Dubai

Chatbot layanan konsuler untuk Konsulat Jenderal Republik Indonesia di Dubai (KJRI Dubai). Membantu WNI mencari informasi layanan konsuler — persyaratan, biaya, dan catatan — dalam Bahasa Indonesia.

Dibangun dengan [[Google Agent Development Kit]] (ADK), terhubung ke database layanan konsuler via [[MCP Toolbox]], dan mendukung akses melalui web UI maupun Telegram.

## Stack

| Komponen | Teknologi |
|----------|-----------|
| Agent framework | Google ADK |
| LLM routing | LiteLLM |
| Database tools | MCP Toolbox v0.28.0 |
| Database | PostgreSQL 16 + pgvector |
| Vector store | ChromaDB |
| Container | Docker Compose |
| Tunnel publik | Ngrok |
| LLM | Ollama (lokal) atau Google Gemini (cloud) |
| Embedding | Gemini API (gemini-embedding-001) |

## Fitur

- Pencarian layanan konsuler berdasarkan kata kunci
- Pencarian semantik ([[pgvector Semantic Search|pgvector]] + Gemini embeddings) untuk query situasional
- Detail lengkap layanan: persyaratan, biaya (AED), dan catatan
- Pengumpulan identitas pengguna di awal sesi
- Pencatatan interaksi untuk administrasi dan statistik
- Dual channel: Web UI (ADK) dan Telegram Bot
- Dukungan LLM lokal (Ollama) atau cloud (Google Gemini)

## Alur Percakapan

1. **Identitas** — Agent menyapa dan meminta data diri (nama lengkap)
2. **Simpan identitas** — Data ke tabel `pengguna`
3. **Pencarian layanan** — Keyword search → semantic search (fallback) → detail layanan
4. **Log interaksi** — Catat ke tabel `chat_sessions`

## Tools (MCP Toolbox)

| Tool | Fungsi |
|------|--------|
| `cari-layanan` | Pencarian keyword layanan konsuler |
| `get-detail-layanan` | Detail lengkap layanan |
| `cari-layanan-semantik` | Pencarian semantik via pgvector |
| `simpan-identitas` | Simpan data identitas pengguna |
| `simpan-interaksi` | Catat interaksi chat |
| `get-statistik-penggunaan` | Statistik penggunaan (admin) |

## Arsitektur

```
User (Web / Telegram)
        ↓
   ADK Agent (port 8000) ←→ Telegram Bot (port 8080)
        ↓ tool calls
   MCP Toolbox (port 5001) → PostgreSQL + pgvector (port 5432)
        ↓ LLM calls
   Ollama (local) atau Google Gemini (cloud)
        ↓ embeddings
   Gemini API (gemini-embedding-001)
```

## Konteks

Proyek ini adalah salah satu deployment AI agent pertama di infrastruktur diplomatik Indonesia. Dibangun oleh [[Ahmad-Syafiq-Kamil]] sebagai bagian dari portfolionya di KJRI Dubai, paralel dengan [[CV-Syamil-Protkons|PROTKONS]] yang mengelola layanan konsuler untuk KBRI Kuala Lumpur.
