---
type: concept
title: "Consular Service Management"
created: 2026-07-03
updated: 2026-07-05
tags:
  - government-tech
  - konsuler
  - workflow
  - domain-pattern
status: developing
sources:
  - "[[protkons-consular-management]]"
  - "[[chatbot-kjri-dubai]]"
  - "[[vienna-convention-consular-relations]]"
  - "[[estonia-e-residency]]"
  - "[[singapore-ica-model]]"
  - "[[indonesian-passport-biometric]]"
  - "[[law-of-indonesia-overview]]"
  - "[[e-government-frameworks]]"
  - "[[digital-identity-patterns]]"
related:
  - "[[CV-Syamil-Protkons]]"
  - "[[ahmadsyafiqkamil-Chatbot-KJRI-Dubai]]"
  - "[[Tanda Tangan Elektronik]]"
  - "[[Indonesian Government HR System]]"
  - "[[Vienna Convention Consular Functions]]"
  - "[[Estonian E-Residency Pattern]]"
  - "[[Singapore ICA Model]]"
  - "[[Passport vs Consular Boundary]]"
---

# Consular Service Management

Pola domain untuk sistem informasi yang mengelola layanan konsuler di perwakilan diplomatik Indonesia (KBRI/KJRI).

## Alur Standar

```
Pendaftaran → Verifikasi → Penandatanganan → Pembayaran → Penyerahan → Arsip
```

Layanan konsuler yang didefinisikan oleh [[Vienna Convention Consular Functions|Article 5 Vienna Convention 1963]] adalah kerangka yurisdiksi internasionalnya. Implementasi di KBRI/KJRI Indonesia adalah subset dari kerangka tersebut.

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

## Abstraksi: Lapisan-Lapisan Sistem Konsuler

Setiap sistem konsuler duduk pada beberapa lapisan sekaligus:

| Lapisan | Fungsi | Contoh Standar | Implementasi Wiki |
|--------|--------|----------------|-------------------|
| Internasional | Service catalogue, citizen protection | [[Vienna Convention Consular Functions]] | n/a (treaty) |
| E-Government | Workflow stages G2C | [[e-government-frameworks]] (UN EGDI) | n/a |
| Identity | Trust/issuance/auth | [[digital-identity-patterns]], [[Estonian E-Residency Pattern]] | [[Tanda Tangan Elektronik]] (TTE) |
| Agency | Statutory consolidation | [[Singapore ICA Model]] | n/a (split: Imigrasi+Dukcapil+Kemlu) |
| Workflow | Local case management | Local best practice | [[CV-Syamil-Protkons]] |
| Frontend | Information access | UN "one-stop portal" | [[ahmadsyafiqkamil-Chatbot-KJRI-Dubai\|Chatbot KJRI Dubai]] |

## Batasan Penting: Passport vs Consular

Sistem [[CV-Syamil-Protkons|PROTKONS]] dan [[ahmadsyafiqkamil-Chatbot-KJRI-Dubai|Chatbot KJRI Dubai]] **TIDAK mencakup penerbitan paspor**. Paspor adalah wewenang [[Passport vs Consular Boundary|Dirjen Imigrasi]]. KBRI/KJRI hanya berperan sebagai intermediary (kumpulkan aplikasi → teruskan ke Jakarta → serahkan ke pemohon).

## Tahapan E-Government yang Sudah Diimplementasikan

| E-Gov Stage | Implementasi | Sistem |
|-------------|--------------|--------|
| Information | Katalog layanan + Tanya jawab AI | [[ahmadsyafiqkamil-Chatbot-KJRI-Dubai\|Chatbot KJRI Dubai]] |
| Interaction | Formulir online pengajuan | KonsulerPublic (PROTKONS) |
| Transaction | Generate dokumen + TTE signing | PHPWord + TTE API |
| Integration | Arsip + dashboard statistik | MySQL + ApexCharts |

Semua 4 tahap UN EGDI sudah ter-cover oleh stack [[CV-Syamil-Protkons|PROTKONS]] + [[ahmadsyafiqkamil-Chatbot-KJRI-Dubai|Chatbot KJRI Dubai]].

## Implementasi di Wiki

Dua implementasi dalam portfolio [[Ahmad-Syafiq-Kamil]]:
- **[[CV-Syamil-Protkons|PROTKONS]]** — CodeIgniter 3, full lifecycle, KBRI Kuala Lumpur (6 misi)
- **[[chatbot-kjri-dubai|Chatbot KJRI Dubai]]** — AI agent, akses informasi, KJRI Dubai

## Gap Analysis (per 2026-07-05)

1. **Belum ada PKI-equivalent untuk TTE** — TTE server-side, bukan portable smart-card (bandingkan [[Estonian E-Residency Pattern]])
2. **Tidak ada integrated agency model** — paspor (Imigrasi), KTP (Dukcapil), konsuler (Kemlu) berjalan paralel tanpa konsolidasi (bandingkan [[Singapore ICA Model]])
3. **Primary source untuk regulasi konsuler Indonesia tidak terverifikasi** — flagged di [[law-of-indonesia-overview]] sebagai gap