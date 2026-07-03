---
title: "ahmadsyafiqkamil/Chatbot-KJRI-Dubai"
source: "https://github.com/ahmadsyafiqkamil/Chatbot-KJRI-Dubai"
author:
published:
created: 2026-06-29
description: "Contribute to ahmadsyafiqkamil/Chatbot-KJRI-Dubai development by creating an account on GitHub."
tags:
  - "clippings"
---
## Chatbot KJRI Dubai

Chatbot layanan konsuler untuk **Konsulat Jenderal Republik Indonesia di Dubai (KJRI Dubai)**. Membantu Warga Negara Indonesia (WNI) mencari informasi layanan konsuler — persyaratan, biaya, dan catatan penting — dalam Bahasa Indonesia.

Dibangun dengan [Google ADK](https://google.github.io/adk-docs/) (Agent Development Kit), terhubung ke database layanan konsuler via MCP Toolbox, dan mendukung akses melalui web UI maupun Telegram.

## Fitur

- Pencarian layanan konsuler berdasarkan kata kunci
- Pencarian semantik (pgvector + Gemini embeddings) saat user menjelaskan situasi tanpa menyebut nama layanan
- Detail lengkap layanan: persyaratan, biaya (AED), dan catatan
- Pengumpulan identitas pengguna di awal sesi
- Pencatatan interaksi untuk keperluan administrasi dan statistik
- Dua channel akses: **Web UI (ADK)** dan **Telegram Bot**
- Dukungan LLM lokal (Ollama) atau cloud (Google Gemini)

## Arsitektur

```
User (Web / Telegram)
        ↓
   ADK Agent (port 8000)  ←→  Telegram Bot (port 8080)
        ↓ tool calls
   MCP Toolbox (port 5001) → PostgreSQL + pgvector (port 5432)
        ↓ LLM calls
   Ollama (local) atau Google Gemini (cloud)
        ↓ embeddings (semantic search)
   Gemini API (gemini-embedding-001)
```

### Stack

| Komponen | Teknologi |
| --- | --- |
| Agent framework | Google ADK |
| LLM routing | LiteLLM |
| Database tools | MCP Toolbox v0.28.0 (`toolbox-adk`) |
| Database | PostgreSQL 16 + pgvector |
| Vector store | ChromaDB (tersedia, port 8001) |
| Container | Docker Compose |
| Tunnel publik | Ngrok |

## Prasyarat

- Docker & Docker Compose
- [Ollama](https://ollama.com/) (jika menggunakan LLM lokal) — dijalankan di host, bukan di container
- File `rag_kjri_dubai.sql` — skema dan data layanan konsuler (tidak di-commit ke repo)
- Akun [Ngrok](https://ngrok.com/) — untuk akses publik (Telegram webhook)
- Google Gemini API key — **wajib** untuk pencarian semantik, meskipun LLM utama memakai Ollama

## Instalasi Cepat

### Server Debian/Ubuntu (fresh install)

Script ini menginstall Docker, Ollama, menarik model default, dan menjalankan semua service:

```
chmod +x install.sh && sudo ./install.sh
```

### Setup Manual (development)

```
# 1. Salin dan edit konfigurasi
cp .env.example .env

# 2. Pastikan rag_kjri_dubai.sql ada di root project
# 3. Pull model Ollama (jika LLM_PROVIDER=ollama)
ollama pull qwen2.5:0.5b

# 4. Jalankan semua service
make start
# atau: docker compose up -d --build
```

## Konfigurasi Environment

Salin `.env.example` ke `.env` dan isi nilai berikut:

| Variabel | Deskripsi |
| --- | --- |
| `POSTGRES_USER` / `POSTGRES_PASSWORD` / `POSTGRES_DB` | Kredensial PostgreSQL |
| `PGADMIN_EMAIL` / `PGADMIN_PASSWORD` | Login pgAdmin |
| `LLM_PROVIDER` | `ollama` (lokal) atau `gemini` (cloud) |
| `LLM_MODEL` | Nama model, mis. `qwen2.5:0.5b` atau `gemini-2.0-flash` |
| `GEMINI_API_KEY` | **Wajib** — dipakai untuk embedding semantik dan LLM Gemini |
| `NGROK_AUTHTOKEN` | Token Ngrok untuk tunnel publik |
| `TELEGRAM_BOT_TOKEN` | Token bot dari [@BotFather](https://t.me/BotFather) |
| `OLLAMA_API_BASE` | URL Ollama di host, default `http://localhost:11434` |

> **Catatan:** Agent container mengakses Ollama via `host.docker.internal:11434`. Pastikan Ollama berjalan di mesin host.

## URL Service

| Service | URL |
| --- | --- |
| Agent Web UI | [http://localhost:8000](http://localhost:8000/) |
| Telegram Bot (webhook) | [http://localhost:8080](http://localhost:8080/) |
| MCP Toolbox | [http://localhost:5001](http://localhost:5001/) |
| pgAdmin | [http://localhost:5050](http://localhost:5050/) |
| ChromaDB | [http://localhost:8001](http://localhost:8001/) |
| Ollama | [http://localhost:11434](http://localhost:11434/) |
| Ngrok Dashboard | [http://localhost:4040](http://localhost:4040/) |

Cek URL publik Ngrok:

```
make status
```

## Telegram Bot

1. Buat bot via [@BotFather](https://t.me/BotFather) dan salin token ke `TELEGRAM_BOT_TOKEN` di `.env`
2. Isi `NGROK_AUTHTOKEN` di `.env`
3. Jalankan `make start` — script akan otomatis mendeteksi URL publik Ngrok
4. Bot mendaftarkan webhook ke Telegram saat startup

Perintah berguna:

```
make telegram-logs      # Lihat log bot
make telegram-restart   # Rebuild & restart bot
```

## Alur Percakapan

1. **Identitas** — Agent menyapa dan meminta data diri (minimal: nama lengkap)
2. **Simpan identitas** — Data disimpan ke tabel `pengguna`
3. **Pencarian layanan** — Keyword search → semantic search (jika perlu) → detail layanan
4. **Log interaksi** — Setiap jawaban dicatat ke tabel `chat_sessions`

## Tools (MCP Toolbox)

Didefinisikan di `toolbox/config/tools.yaml`:

| Tool | Fungsi |
| --- | --- |
| `cari-layanan` | Pencarian keyword layanan konsuler |
| `get-detail-layanan` | Detail lengkap layanan (persyaratan, biaya, catatan) |
| `cari-layanan-semantik` | Pencarian semantik via pgvector |
| `simpan-identitas` | Simpan data identitas pengguna |
| `simpan-interaksi` | Catat interaksi chat |
| `get-statistik-penggunaan` | Statistik penggunaan (admin) |

## Database & Migrasi

Data layanan konsuler diinisialisasi dari `rag_kjri_dubai.sql` saat PostgreSQL pertama kali dibuat. Migrasi tambahan ada di folder `migrations/`.

Untuk database yang sudah berjalan, jalankan migrasi manual:

```
docker exec -i kjri_postgres psql -U postgres -d rag_kjri < migrations/001_chat_sessions.sql
docker exec -i kjri_postgres psql -U postgres -d rag_kjri < migrations/002_pengguna.sql
```

Reset database (menghapus semua data):

```
make clean   # stop + hapus volumes
docker compose up -d
```

## Development Lokal

Jalankan agent di luar Docker (Ollama & Toolbox harus sudah berjalan):

```
pip install -r requirements.txt
cd chatbot_kjri_dubai
adk web --host 0.0.0.0 --port 8000
```

Log service:

```
docker compose logs -f agent
docker compose logs -f toolbox
docker compose logs -f ngrok
```

## Perintah Makefile

```
make help              # Daftar perintah
make start             # Start semua service (+ deteksi Ngrok URL)
make stop              # Stop semua service
make restart           # Restart semua service
make status            # Status container + URL publik
make logs              # Stream log semua container
make clean             # Stop + hapus container & volumes
make telegram-logs     # Log Telegram bot
make telegram-restart  # Rebuild Telegram bot
```

## Struktur Project

```
.
├── chatbot_kjri_dubai/
│   ├── agent.py              # Logika agent & system prompt
│   ├── telegram_bot.py       # FastAPI webhook untuk Telegram
│   └── markdown_converter.py # Konversi Markdown → HTML (Telegram)
├── toolbox/config/
│   └── tools.yaml            # Definisi SQL tools MCP Toolbox
├── migrations/               # SQL migrasi database
├── scripts/
│   └── seed_embeddings.py    # Seed embedding pgvector
├── docker-compose.yml
├── Dockerfile                # Agent (ADK web)
├── Dockerfile.telegram       # Telegram bot
├── install.sh                # Setup server Debian
├── start.sh                  # Start + deteksi Ngrok URL
├── Makefile
├── requirements.txt
└── .env.example
```

## Menambah Tool Baru

1. Tambahkan query SQL di `toolbox/config/tools.yaml`
2. Daftarkan nama tool di `chatbot_kjri_dubai/agent.py` (`tool_names=[...]`)
3. Update system prompt di `agent.py` jika behavior agent perlu disesuaikan

## Lisensi

Proyek internal KJRI Dubai. Hubungi maintainer untuk pertanyaan penggunaan.