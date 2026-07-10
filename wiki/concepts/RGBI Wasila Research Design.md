---
type: concept
title: "RGBI Wasila Research Design"
created: 2026-07-10
updated: 2026-07-10
tags:
  - rgbi
  - research-design
  - islamic-economics
  - mixed-methods
domain: pesantren-fintech
status: developing
related:
  - "[[Wasila]]"
  - "[[Supplier Trust Score]]"
  - "[[Portes Deference Critique]]"
  - "[[Two-Sided Embedded Survey Design]]"
  - "[[Ahmad Syafiq Kamil]]"
  - "[[interview-guide-rgbi-2026]]"
  - "[[kuesioner-rgbi-2026]]"
  - "[[inventaris-kebutuhan-penelitian-rgbi-2026]]"
---

# RGBI Wasila Research Design

Desain riset untuk Research Grant Bank Indonesia 2026, Topik 7 (Ekonomi Syariah): "Digitalisasi Rekam Jejak Transaksi Ekosistem Pesantren sebagai Instrumen Pembentukan Financial Identity Supplier Lokal untuk Akses Pembiayaan Syariah". Diketuai Ahmad Syafiq Kamil bersama tim: Satrio Adi Priyambada (Data Scientist/ML Engineer), Kokoy Siti Komariah (AI Engineer/UX Designer), Andriawan Yoga (domain expert, Kemenko Perekonomian).

## Tiga research question — dependensi sekuensial

- **RQ1** (prerequisite): faktor adopsi teknologi (kualitatif, fokus UTAUT) dan peran otoritas kiai — direframe sebagai Proposisi Riset, bukan hipotesis falsifiable (Skenario A-plus).
- **RQ2**: validitas [[Supplier Trust Score]] sebagai instrumen credit scoring (pipeline ML + validasi iteratif LKS).
- **RQ3**: dampak pre-post digitalisasi terhadap transparansi transaksi dan akses pembiayaan (proto-Difference-in-Differences framing).

Prinsip kunci: adopsi (RQ1) harus mapan lebih dulu sebagai prasyarat logis sebelum validitas scoring (RQ2) dan dampak (RQ3) bisa dinilai — ini mendorong penataan ulang seluruh arsitektur riset.

## Landasan teori

Stiglitz-Weiss information asymmetry; Social Capital theory (Coleman, Putnam, Fukuyama); [[Portes Deference Critique]]; UTAUT (Venkatesh et al., 2003); Maqāṣid al-Sharī'ah; Anchor Institution Theory; Demirguc-Kunt financial inclusion framework.

## Metodologi

Mixed-methods implementation-focused: thematic analysis kualitatif (prerequisite, lihat [[interview-guide-rgbi-2026]]) → ML credit scoring → analisis pre-post baseline/endline (lihat [[kuesioner-rgbi-2026]] dan [[Two-Sided Embedded Survey Design]]). PLS-SEM diganti korelasional yang lebih sederhana; skala wawancara direduksi ke 5–8 informan per guide dari pesantren pilot saja.

Framing proof-of-concept diagnostik dipilih secara sadar: budget dan timeline 6 bulan membuat studi intervensi penuh tidak feasible.

## Ruang lingkup pelaksanaan

Pilot 5–10 pesantren, Mei–Oktober 2026 (6 bulan), pagu Rp 250 juta. Sampling frame utama: 776 pesantren dari [[policy-paper-pesantren-2023]] (unfair advantage tim, bersama [[policy-paper-pesantren-2024]]). Lihat [[inventaris-kebutuhan-penelitian-rgbi-2026]] untuk 38 item kebutuhan lengkap dalam 6 kategori.

## Disiplin framing kritis

Wasila dalam konteks RGBI difungsikan murni sebagai instrumen riset — framing hackathon/komersial (lihat [[wasila-roi-pricing-model]]) harus sepenuhnya absen dari materi RGBI untuk menjaga integritas akademik proposal. Interviewer untuk data kualitatif bukan anggota tim pengembang Wasila, sebagai mitigasi researcher bias.

## Status (per 2026-07-10)

Proposal telah melalui multiple rounds revisi kritis, tahap lanjut. Item terbuka: `03-research-instruments.md` (menjembatani 107-item kuesioner ke modul survei aplikasi) dan `04-data-export-spec.md` (kontrak ekspor data untuk pipeline ML — prioritas tinggi karena memengaruhi keputusan skema data).
