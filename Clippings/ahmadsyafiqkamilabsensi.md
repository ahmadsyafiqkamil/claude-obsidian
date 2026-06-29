---
title: "ahmadsyafiqkamil/absensi"
source: "https://github.com/ahmadsyafiqkamil/absensi"
author:
published:
created: 2026-06-29
description: "Contribute to ahmadsyafiqkamil/absensi development by creating an account on GitHub."
tags:
  - "clippings"
---
## Absensi — Sistem Kehadiran & HR

Aplikasi manajemen kehadiran pegawai untuk Konsulat Jenderal Republik Indonesia, meliputi absensi, koreksi, cuti, lembur, piket, SPPD, penilaian kinerja, dan payroll terkait.

## Stack

| Layer | Teknologi |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, MUI v7, TanStack Query v5 |
| Backend | Django 5, Django REST Framework |
| Database | MySQL 8.0 |
| Auth | NextAuth v5 ↔ JWT (djangorestframework-simplejwt), httpOnly cookies |
| Infra | Docker Compose, Caddy (production) |

## Struktur Repo

```
absensi/
├── fuse/              Frontend Next.js (Fuse React template)
├── drf/app/           Backend Django + DRF (API di /api/v2/)
├── docs/              Diagram aktivitas & CODEMAPS
├── scripts/           Deploy, backup, maintenance
├── template/          Template Word/PDF export
└── mysql/init/        Skrip inisialisasi database
```

Dokumentasi arsitektur ringkas: [`docs/CODEMAPS/`](https://github.com/ahmadsyafiqkamil/absensi/blob/main/docs/CODEMAPS).

## Prasyarat

- Docker & Docker Compose
- Node.js 20+ (opsional, untuk menjalankan frontend di luar Docker)

## Setup Cepat (Docker — disarankan)

```
# 1. Salin environment
cp fuse/env.example fuse/.env.local

# 2. Jalankan semua layanan
cd fuse && docker-compose up -d

# 3. Migrasi database (pertama kali atau setelah restore dump)
docker exec -it fuse_backend_dev python manage.py migrate
```

### URL Development

| Layanan | URL |
| --- | --- |
| Frontend | [http://localhost:3002](http://localhost:3002/) |
| Backend API | [http://localhost:8001/api/v2/](http://localhost:8001/api/v2/) |
| API Schema | [http://localhost:8001/api/schema/](http://localhost:8001/api/schema/) |
| phpMyAdmin | [http://localhost:8081](http://localhost:8081/) (root / rootpassword) |
| MySQL (host) | localhost:3307 |
| DOCX converter | [http://localhost:3003](http://localhost:3003/) |

### Container Docker

| Service | Container |
| --- | --- |
| MySQL | `fuse_mysql_dev` |
| Backend | `fuse_backend_dev` |
| Frontend | `fuse_frontend_dev` |
| phpMyAdmin | `fuse_phpmyadmin_dev` |
| DOCX converter | `fuse_docx_converter_dev` |

## Perintah Umum

### Docker

```
cd fuse
docker-compose up          # Dev (foreground)
docker-compose up -d       # Dev (background)
docker-compose down        # Stop semua
docker-compose -f docker-compose.prod.yml up   # Production
```

### Backend (via Docker)

```
docker exec -it fuse_backend_dev python manage.py migrate
docker exec -it fuse_backend_dev python manage.py makemigrations [app]
docker exec -it fuse_backend_dev python manage.py test apps.[feature]
docker exec -it fuse_backend_dev python manage.py test apps.[feature].tests.[TestClass].[test_method]
docker exec -it fuse_backend_dev python manage.py shell
```

### Frontend (tanpa Docker)

```
cd fuse
npm install
npm run dev      # Port 3000 (Turbopack)
npm run build
npm run lint
npm run lint:fix
```

## Role & Routing

| URL frontend | Role auth | Grup Django |
| --- | --- | --- |
| `/admin/` | `admin` | admin |
| `/supervisor/` | `staff` | staff |
| `/pegawai/` | `user` | user |

Frontend mem-proxy request ke backend lewat `fuse/src/app/api/v2/` dengan Bearer token dari sesi NextAuth.

## Modul Fitur

- **Absensi** — check-in/out, riwayat, dashboard supervisor
- **Koreksi** — pengajuan & persetujuan koreksi kehadiran
- **Cuti** — pengajuan cuti, kuota, approval
- **Lembur** — pengajuan lembur, potensi lembur, rekap bulanan, export DOCX/PDF
- **Piket** — jadwal piket & validasi konflik lembur
- **SPPD** — perjalanan dinas, nominatif, payroll dalam/luar PEA
- **Penilaian kinerja** — formulir evaluasi & export PDF
- **Pegawai & Settings** — master data, work settings, hari libur

## Testing

### Backend — unit test

```
docker exec -it fuse_backend_dev python manage.py test apps.overtime.tests -v2
docker exec -it fuse_backend_dev python manage.py test --keepdb
```

### Backend — contract test (curl + jq)

```
bash drf/app/apps/overtime/test_overtime_api.sh
```

Script di atas men-seed data test, login JWT, dan memverifikasi shape response API lembur end-to-end.

### Verifikasi syntax Python

```
python3 -m compileall drf/app/apps/overtime/
```

## Environment Variables

Salin `fuse/env.example` → `fuse/.env.local`. Variabel penting:

| Variable | Keterangan |
| --- | --- |
| `NEXT_PUBLIC_BACKEND_URL` | URL backend untuk client (e.g. `http://localhost:8001`) |
| `BACKEND_URL` | URL backend server-side/Docker (e.g. `http://backend:8000`) |
| `NEXTAUTH_URL` | URL frontend (e.g. `http://localhost:3002`) |
| `NEXTAUTH_SECRET` | Secret NextAuth |

Backend di dalam Docker memakai `DOCX_CONVERTER_URL=http://docx_converter:8000` untuk export Word→PDF.

## Deployment

Skrip tersedia di `scripts/`:

- `deploy.sh` — deploy development
- `deploy-prod.sh` — deploy production
- `deploy-remote.sh` — deploy ke server remote
- `backup.sh` — backup database
- `maintenance.sh` — mode maintenance
- `monitor.sh` — monitoring

## Debugging

```
docker logs -f fuse_frontend_dev
docker logs -f fuse_backend_dev
docker logs -f fuse_mysql_dev
```

Log file juga tersimpan di `logs/dev/`.

> **Catatan:** Restore dump MySQL lama bisa membuat schema ketinggalan dari kode Django. Selalu jalankan `migrate` setelah import dump, atau endpoint seperti `/api/v2/auth/me/` bisa error 500.

## Lisensi

Proyek internal — bukan open source.