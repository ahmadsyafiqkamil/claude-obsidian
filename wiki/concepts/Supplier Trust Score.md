---
type: concept
title: "Supplier Trust Score"
created: 2026-07-10
updated: 2026-07-10
tags:
  - credit-scoring
  - fintech-syariah
  - machine-learning
  - financial-inclusion
domain: pesantren-fintech
status: developing
related:
  - "[[Wasila]]"
  - "[[RGBI Wasila Research Design]]"
  - "[[Portes Deference Critique]]"
  - "[[wasila-roi-pricing-model]]"
  - "[[interview-guide-rgbi-2026]]"
  - "[[kuesioner-rgbi-2026]]"
---

# Supplier Trust Score

Skor kredit alternatif yang dibangun dari riwayat transaksi bilateral (dikonfirmasi dua pihak via WhatsApp) antara supplier lokal dan pesantren di platform [[Wasila]]. Memungkinkan supplier tanpa riwayat kredit formal (unbanked, mayoritas hanya punya WhatsApp) mengakses pembiayaan mikro syariah.

## Fitur input (ML pipeline)

Frekuensi transaksi per minggu/bulan, volume nominal transaksi, konsistensi pembayaran (ketepatan waktu, tunai/tempo), variasi jenis transaksi (diversifikasi komoditas), rasio konfirmasi bilateral (proporsi dikonfirmasi kedua pihak vs tertunda/ditolak), durasi hubungan supplier-pesantren, metadata OCR kuitansi.

## Metodologi validasi

Weighted scoring dengan logistic regression + random forest, divalidasi iteratif 2–3 putaran bersama perwakilan LKS mitra (BMT Sidogiri, BWM) melalui wawancara terstruktur — lihat Guide C pada [[interview-guide-rgbi-2026]]. LKS menerima sampel skor sebelum wawancara, lalu mendiskusikan face validity, concordance/discordance dengan penilaian internal mereka, dan variabel yang mungkin hilang.

Benchmark independen: data keputusan kredit aktual LKS (approved/rejected, alasan, riwayat kredit supplier) dari BMT Sidogiri/BWM.

## Menjawab RQ2

RQ2 (dalam [[RGBI Wasila Research Design]]): "Bagaimana validitas Supplier Trust Score sebagai instrumen credit scoring?" — dijawab lewat pipeline ML plus validasi kualitatif iteratif, bukan murni statistik. Willingness to Share Data (item WD01-WD04 di [[kuesioner-rgbi-2026]]) adalah prasyarat non-teknis: supplier harus bersedia data transaksinya dipakai untuk penilaian kredit.

## Diferensiator vs alternative credit scoring lain

Verifikasi bilateral dua-pihak (bukan hanya data sepihak dari satu sisi transaksi) membuat data lebih auditable dan kredibel — ini adalah klaim inti yang membedakan Wasila dari platform scoring alternatif lainnya di pasar fintech syariah.

## Risiko yang perlu diwaspadai (dari desain kuesioner)

[[Portes Deference Critique]] relevan di sini: skor tinggi bisa jadi mencerminkan volume transaksi tinggi karena supplier "sungkan menolak" pesantren (deference), bukan genuine reliability. Trust Authenticity Index dipakai sebagai kovariat untuk memisahkan kedua sinyal ini saat interpretasi skor.
