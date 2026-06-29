---
title: "absensi — Sistem Kehadiran & HR"
source: "[[absensi-sistem-kehadiran]]"
type: source
created: 2026-06-29
source_url: "https://github.com/ahmadsyafiqkamil/absensi"
author:
  - "[[Ahmad-Syafiq-Kamil]]"
tags:
  - source
  - github-repo
  - hr-system
  - django
  - nextjs
status: developing
related:
  - "[[Django DRF Backend Pattern]]"
  - "[[NextAuth JWT Bridge]]"
  - "[[Docker Compose Multi-Service]]"
  - "[[Export Pipeline DOCX PDF]]"
  - "[[Indonesian Government HR System]]"
---

# absensi — Sistem Kehadiran & HR

Aplikasi manajemen kehadiran pegawai untuk Konsulat Jenderal Republik Indonesia. Stack: **Next.js 16 (App Router, MUI v7, TanStack Query v5)** frontend, **Django 5 + DRF** backend, **MySQL 8.0** database.

## Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | Next.js 16 (App Router), React 19, TypeScript, MUI v7, TanStack Query v5 |
| Backend | Django 5, Django REST Framework |
| Database | MySQL 8.0 |
| Auth | NextAuth v5 ↔ JWT (djangorestframework-simplejwt), httpOnly cookies |
| Infra | Docker Compose, Caddy (production) |

## Modul Fitur

- **Absensi** — check-in/out, riwayat, dashboard supervisor
- **Koreksi** — pengajuan & persetujuan koreksi kehadiran
- **Cuti** — pengajuan cuti, kuota, approval
- **Lembur** — pengajuan lembur, potensi lembur, rekap bulanan, export DOCX/PDF
- **Piket** — jadwal piket & validasi konflik lembur
- **SPPD** — perjalanan dinas, nominatif, payroll dalam/luar PEA
- **Penilaian kinerja** — formulir evaluasi & export PDF
- **Pegawai & Settings** — master data, work settings, hari libur

## Role & Routing

| URL | Role | Grup Django |
|-----|------|-------------|
| `/admin/` | `admin` | admin |
| `/supervisor/` | `staff` | staff |
| `/pegawai/` | `user` | user |

Frontend proxy request ke backend lewat `fuse/src/app/api/v2/` dengan Bearer token dari sesi NextAuth.

## Testing

- Backend unit test via Django test runner dengan `--keepdb`
- Contract test: `bash drf/app/apps/overtime/test_overtime_api.sh` (seed data → login JWT → verifikasi shape response API lembur end-to-end)
- Verifikasi syntax: `python3 -m compileall`

## Source Document

Lihat [[absensi-sistem-kehadiran]] untuk README lengkap.
