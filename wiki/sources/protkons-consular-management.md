---
type: source
title: "PROTKONS — Protocol Konsuler"
created: 2026-06-30
source_url: "https://github.com/CV-Syamil/Protkons"
source_type: github-repo
author: "[[Ahmad-Syafiq-Kamil]]"
tags:
  - github-repo
  - php
  - codeigniter
  - government-tech
  - konsuler
status: current
related:
  - "[[Ahmad-Syafiq-Kamil]]"
  - "[[CV-Syamil-Protkons]]"
  - "[[CodeIgniter 3]]"
  - "[[Consular Service Management]]"
  - "[[Tanda Tangan Elektronik]]"
  - "[[chatbot-kjri-dubai]]"
---

# PROTKONS — Protocol Konsuler

Sistem informasi manajemen layanan konsuler untuk KBRI Kuala Lumpur. Versi **0.5.1**.

Aplikasi web berbasis [[CodeIgniter 3]] yang mengelola seluruh siklus layanan konsuler: pencatatan identitas pelapor, pengajuan layanan, verifikasi, penandatanganan dokumen, pembayaran, arsip, hingga pelaporan. Mendukung multi-peran pengguna, pembuatan dokumen otomatis dari template Word, [[Tanda Tangan Elektronik]] (TTE), verifikasi dokumen via QR code, serta integrasi dengan layanan konsuler online.

## Stack

| Komponen | Teknologi |
|----------|-----------|
| Backend | PHP, CodeIgniter 3 |
| Database | MySQL / MariaDB (utf8mb4) |
| Frontend | AdminLTE 3, Bootstrap 4, jQuery |
| Tabel data | DataTables |
| Dokumen | PHPWord, mPDF, Gears PDF |
| QR Code | phpqrcode |
| Grafik | ApexCharts, CanvasJS |

## Alur Kerja Pelayanan

```
Draft (0) → Pengajuan (1) → Terverifikasi (2) → Pengambilan Dokumen (3) → Dokumen Diambil (4) → TerArsip (5)
                ↓                    ↓
         Tolak Verifikasi (91)  Tolak Penandatangan (92)
```

## Multi-Peran Pengguna

| Peran | Keterangan |
|-------|------------|
| Petugas Loket | Menerima dan memproses pengajuan |
| Petugas Verifikasi | Memverifikasi kelengkapan data |
| Pejabat Penanda Tangan (HS) | Menandatangani dokumen resmi |
| Petugas Kasir | Mengelola pembayaran |
| Administrator | Mengelola master data |
| Super User | Akses penuh termasuk manajemen fungsi |

## Integrasi

- **Pelayanan Online** — menerima pengajuan dari portal publik KonsulerPublic
- **Main Server** — sinkronisasi data identitas dengan server pusat
- **TTE API** — penandatanganan dan verifikasi dokumen elektronik

## Konteks

PROTKONS adalah aplikasi utama [[Ahmad-Syafiq-Kamil]] di bawah CV Syamil Solusindo Semesta. Ia mengelola layanan konsuler di 6 misi diplomatik Malaysia. Parallel dengan [[chatbot-kjri-dubai|Chatbot KJRI Dubai]] yang menggunakan pendekatan AI-agent modern.
