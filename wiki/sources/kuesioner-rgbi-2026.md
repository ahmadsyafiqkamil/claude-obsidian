---
type: source
title: "Kuesioner RGBI 2026 (A/B + Matriks Operasionalisasi)"
created: 2026-07-10
updated: 2026-07-10
tags:
  - rgbi
  - quantitative-research
  - pesantren
  - survey-design
status: developing
related:
  - "[[RGBI Wasila Research Design]]"
  - "[[Two-Sided Embedded Survey Design]]"
  - "[[Portes Deference Critique]]"
  - "[[Wasila]]"
source: "Kuesioner_Lengkap_RGBI_2026.md (Draft 1.0, Maret 2026)"
---

# Kuesioner RGBI 2026 (A/B + Matriks Operasionalisasi)

Instrumen kuantitatif untuk RGBI 2026 Topik 7, dirancang sebagai *two-sided embedded survey* terintegrasi dalam platform Wasila. Lihat [[Two-Sided Embedded Survey Design]] untuk arsitektur lengkap.

## Kuesioner A — Pengurus Pesantren

50 item, 5 bagian, 20–25 menit. Bagian: profil pesantren & responden, kapasitas digital [Baseline Only], adopsi teknologi UTAUT [Baseline & Endline], modal sosial (Coleman 1988, Putnam 1993) [Baseline & Endline], transparansi pencatatan [Baseline & Endline — paired pre-post].

## Kuesioner B — Supplier Lokal

57 item, 7 bagian, 25–30 menit, diadministrasikan via WhatsApp-based interface secara batched. Bagian: profil supplier, literasi keuangan syariah, modal sosial & kepercayaan dengan Portes Critique ([[Portes Deference Critique]]), persepsi akses pembiayaan syariah (Demirguc-Kunt et al., 2018), niat akses pembiayaan & willingness to share data, social desirability bias control (Marlowe-Crowne short form), evaluasi pengalaman Wasila [Endline Only].

## Skala & desain

Likert 5-poin (STS-SS), item reverse-coded ditandai (R) — termasuk Portes PO01-PO04, barrier BA01-BA04, WD04. Desain baseline-endline paired: Bulan 1 dan Bulan 4, item identik, analisis paired t-test/Wilcoxon.

Trust Authenticity Index = Mean(GT01-GT04) − Mean(PO01-PO04 reversed) — metrik kunci pembeda genuine trust dari deference.

Reliabilitas: Cronbach's Alpha (α ≥ 0.70) pada data baseline; item dengan corrected item-total correlation terendah di-drop jika α < 0.70.

## Matriks operasionalisasi — 15 konstruk

Performance Expectancy, Effort Expectancy, Social Influence, Facilitating Conditions (Venkatesh et al. 2003, UTAUT) → RQ1; Genuine Trust & Deference/Compliance (Coleman 1988, Fukuyama 1995, Portes 1998) → RQ1/RQ2 via Trust Authenticity Index; Network & Norms, Otoritas Kiai (Anchor Institution — Birch et al. 2013) → RQ1 thematic; Literasi Keuangan Syariah, Persepsi Akses Pembiayaan, Niat Akses Pembiayaan (Demirguc-Kunt et al. 2018; Allen et al. 2016) → RQ3 pre-post; Willingness to Share Data (Stiglitz & Weiss 1981) → RQ2/RQ3; Transparansi Pencatatan → RQ3 pre-post; Social Desirability (Marlowe-Crowne) → kovariat kontrol; Kapasitas Digital → moderator RQ1.

## Pemetaan ke Research Questions

RQ1 (Faktor Adopsi): UTAUT + Modal Sosial + wawancara mendalam. RQ2 (Validitas Trust Score): data transaksi Wasila + data LKS + willingness to share data. RQ3 (Dampak Digitalisasi): item pre-post transparansi, literasi, persepsi, niat.
