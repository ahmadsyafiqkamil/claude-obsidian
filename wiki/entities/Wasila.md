---
type: entity
title: "Wasila"
created: 2026-07-10
updated: 2026-07-10
tags:
  - product
  - fintech-syariah
  - pesantren
  - research-instrument
status: developing
related:
  - "[[Ahmad Syafiq Kamil]]"
  - "[[Badan Riset dan Inovasi Nasional]]"
  - "[[Supplier Trust Score]]"
  - "[[Pesantren Economic Ecosystem]]"
  - "[[Freemium Cross-Subsidy Pricing Model]]"
  - "[[RGBI Wasila Research Design]]"
  - "[[wasila-roi-pricing-model]]"
  - "[[interview-guide-rgbi-2026]]"
  - "[[kuesioner-rgbi-2026]]"
source: "[[wasila-roi-pricing-model]]"
---

# Wasila

Wasila adalah platform digital yang mencatat transaksi bilateral antara pesantren dan supplier lokal untuk membangun *financial identity* bagi supplier yang unbanked, menggunakan [[Supplier Trust Score]] sebagai skor kredit alternatif untuk lembaga keuangan syariah.

Repo: `github.com/ahmadsyafiqkamil/Wasila.git`. Tiga portal: Admin, Supplier, Partner. Stack: Vite + React + TypeScript, shadcn/ui, Tailwind CSS v4.

## Dua konteks penggunaan (penting untuk dibedakan)

1. **Kompetisi Digdaya x Hackathon 2026** (submission kedua) — konteks bisnis/komersial dengan model ROI empat skenario pricing, lihat [[wasila-roi-pricing-model]].
2. **RGBI 2026 (Research Grant Bank Indonesia), Topik 7** — Wasila difungsikan **murni sebagai instrumen riset**, bukan produk komersial. Framing disiplin ini eksplisit: "hackathon/commercial angle harus entirely absent dari materi RGBI." Lihat [[RGBI Wasila Research Design]].

## Mekanisme inti

Tiga pemangku kepentingan: pesantren (via Kopontren, mencatat pengadaan), supplier kecil/UMKM (unbanked, WhatsApp-primary), lembaga keuangan syariah (utamanya BSI). Diferensiator: verifikasi bilateral dua-pihak via WhatsApp membuat data lebih auditable dibanding platform alternative-credit-scoring lain.

## Persona kunci

Pak Slamet (supplier UMKM unbanked), Ustadz Hasan (bendahara/administrator pesantren), Pak Arif (manajer divisi UMKM BSI).

## Fitur teknis

Formulir input transaksi mobile-friendly; pipeline OCR/AI photo-assisted entry untuk kuitansi; template konfirmasi WhatsApp (tombol konfirm/tolak); dashboard monitoring pengurus; modul Supplier Trust Score engine (logistic regression + random forest).

## Temuan validasi lapangan

Prenduan (Sumenep): adopsi cashless sudah ada, struktur via Kopontren. BSI: hambatan segmen mikro adalah biaya akuisisi (CAC) & infrastruktur operasional — bukan motivasi; verifikasi 1 calon debitur mikro biayanya "ratusan ribu" secara konvensional sehingga segmen ini rugi di tahun pertama dan tidak digarap.

## Nilai non-negosiasi

Free-tier wajib dipertahankan (supplier 100% gratis, mayoritas pesantren gratis); selaras prinsip keuangan syariah; inklusi keuangan sebagai misi inti, bukan pertimbangan sekunder. Lihat [[Freemium Cross-Subsidy Pricing Model]].
