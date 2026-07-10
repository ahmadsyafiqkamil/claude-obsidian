---
type: concept
title: "Two-Sided Embedded Survey Design"
created: 2026-07-10
updated: 2026-07-10
tags:
  - research-methodology
  - survey-design
  - quantitative-research
domain: pesantren-fintech
status: developing
related:
  - "[[kuesioner-rgbi-2026]]"
  - "[[Wasila]]"
  - "[[RGBI Wasila Research Design]]"
  - "[[Portes Deference Critique]]"
---

# Two-Sided Embedded Survey Design

Prinsip arsitektur kuesioner [[kuesioner-rgbi-2026]]: mengumpulkan data dari **kedua sisi** relasi bilateral pesantren-supplier secara serentak, diadministrasikan langsung lewat interface [[Wasila]] (bukan survei eksternal terpisah) untuk mengurangi beban pengisian dan *social desirability bias*.

## Dua instrumen paralel

Kuesioner A (Pengurus Pesantren, 50 item, 5 bagian, 20–25 menit) dan Kuesioner B (Supplier Lokal, 57 item, 7 bagian, 25–30 menit, batched via WhatsApp). Two-sided data collection dianggap **non-negotiable** dalam desain riset karena sifat bilateral ekosistem — mengukur hanya satu sisi (misalnya hanya persepsi pesantren) akan melewatkan dinamika kekuasaan dan [[Portes Deference Critique]] yang justru muncul dari sisi supplier.

## Desain baseline-endline berpasangan

Item [Baseline & Endline] diadministrasikan identik di Bulan 1 dan Bulan 4 untuk analisis paired t-test/Wilcoxon (pre-post). Item [Baseline Only] menangkap kondisi awal (profil, kapasitas digital); item [Endline Only] menangkap evaluasi pengalaman pasca-intervensi (kepuasan Wasila, perubahan perilaku).

## Kontrol bias tertanam

Social Desirability Bias Control (item SD01-05, adaptasi Marlowe-Crowne short form) sebagai kovariat — dipasang khusus di Kuesioner B karena supplier punya insentif lebih besar memberi jawaban yang menyenangkan (relasi ketergantungan ekonomi dengan pesantren). Reliabilitas semua konstruk Likert diuji Cronbach's Alpha (α ≥ 0.70) sebelum analisis lanjutan; item dengan korelasi item-total terendah di-drop jika gagal.

## Kaitan dengan platform

Karena kuesioner diadministrasikan lewat Wasila sendiri (bukan Google Form terpisah), desain ini memanfaatkan channel yang sudah dipakai user sehari-hari (WhatsApp untuk supplier, dashboard untuk pengurus) — mengurangi survey fatigue dan meningkatkan response rate, sekaligus menyatukan data perilaku (transaksi riil) dengan data persepsi (survei) dalam satu sistem untuk analisis RQ2/RQ3.
