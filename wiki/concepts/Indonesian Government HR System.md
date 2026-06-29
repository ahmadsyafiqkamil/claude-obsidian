---
type: concept
title: "Indonesian Government HR System"
created: 2026-06-29
tags:
  - concept
  - government
  - hr
  - indonesia
status: developing
source: "[[absensi-sistem-kehadiran]]"
related:
  - "[[Django DRF Backend Pattern]]"
---

# Indonesian Government HR System

Sistem manajemen SDM untuk instansi pemerintah Indonesia — dikembangkan untuk KJRI (Konsulat Jenderal Republik Indonesia).

## Domain-Specific Features

- **SPPD** (Surat Perintah Perjalanan Dinas) — perjalanan dinas, nominatif, payroll dalam/luar PEA
- **Piket** — jadwal piket dengan validasi konflik lembur
- **Lembur** — potensi lembur, rekap bulanan, approval workflow
- **Koreksi** — pengajuan & persetujuan koreksi kehadiran
- **Penilaian Kinerja** — formulir evaluasi & export PDF
- **Cuti** — kuota, pengajuan, approval

## Role-Based Access

3-tier role: `admin` (full access), `staff` (supervisor), `user` (pegawai). Setiap role memiliki URL prefix dan Django group terpisah.
