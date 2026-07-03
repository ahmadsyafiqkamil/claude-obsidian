---
type: concept
title: "Consular Service Management"
created: 2026-07-03
tags:
  - government-tech
  - konsuler
  - workflow
  - domain-pattern
status: developing
sources:
  - "[[protkons-consular-management]]"
  - "[[chatbot-kjri-dubai]]"
related:
  - "[[CV-Syamil-Protkons]]"
  - "[[ahmadsyafiqkamil-Chatbot-KJRI-Dubai]]"
  - "[[Tanda Tangan Elektronik]]"
  - "[[Indonesian Government HR System]]"
---

# Consular Service Management

Pola domain untuk sistem informasi yang mengelola layanan konsuler di perwakilan diplomatik Indonesia (KBRI/KJRI).

## Alur Standar

```
Pendaftaran → Verifikasi → Penandatanganan → Pembayaran → Penyerahan → Arsip
```

## Komponen Kunci

| Komponen | Fungsi | Contoh |
|----------|--------|--------|
| Manajemen identitas | Registrasi & verifikasi WNI/pelapor | NIK, paspor, KITAS |
| Katalog layanan | Jenis layanan + persyaratan + biaya | Paspor, legalisir, akta |
| Alur multi-tahap | Status tracking per pengajuan | Draft→Proses→Selesai |
| Multi-peran | RBAC untuk petugas konsuler | Loket, Verifikasi, HS |
| Dokumen legal | Template → generate → signed PDF | PHPWord + mPDF |
| TTE | Tanda tangan elektronik legal | [[Tanda Tangan Elektronik]] |
| Pelaporan | Statistik & rekapitulasi | Per jenis layanan, per periode |

## Implementasi di Wiki

Dua implementasi dalam portfolio [[Ahmad-Syafiq-Kamil]]:
- **[[CV-Syamil-Protkons|PROTKONS]]** — CodeIgniter 3, full lifecycle, KBRI Kuala Lumpur (6 misi)
- **[[chatbot-kjri-dubai|Chatbot KJRI Dubai]]** — AI agent, akses informasi, KJRI Dubai
