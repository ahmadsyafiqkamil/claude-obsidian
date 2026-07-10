---
type: source
title: "Wasila ROI & Pricing Model (v2, Juli 2026)"
created: 2026-07-10
updated: 2026-07-10
tags:
  - wasila
  - fintech-syariah
  - business-model
  - pesantren
  - roi
status: developing
related:
  - "[[Wasila]]"
  - "[[Freemium Cross-Subsidy Pricing Model]]"
  - "[[Supplier Trust Score]]"
  - "[[Badan Riset dan Inovasi Nasional]]"
source: "KONTEKS-ROI-WASILA-transfer.md (dokumen transfer antar-chat, model ternormalisasi v2)"
---

# Wasila ROI & Pricing Model (v2, Juli 2026)

**Wasila** adalah platform fintech/SaaS Islami di Indonesia yang berfungsi sebagai infrastruktur data keuangan untuk ekosistem pesantren, menghubungkan tiga pemangku kepentingan: pesantren (via Kopontren), supplier kecil/UMKM (unbanked, WhatsApp-primary), dan lembaga keuangan syariah (utamanya BSI). Disusun awalnya untuk kompetisi Digdaya x Hackathon 2026 (submission kedua); dalam konteks RGBI 2026, Wasila difungsikan murni sebagai instrumen riset (lihat [[RGBI Wasila Research Design]]).

Mekanisme inti adalah [[Supplier Trust Score]] — skor kredit alternatif dari riwayat transaksi bilateral (dikonfirmasi via WhatsApp), memungkinkan supplier tanpa riwayat kredit formal mengakses pembiayaan mikro syariah.

## Nilai non-negosiasi

Free-tier wajib: supplier 100% gratis selamanya, mayoritas pesantren gratis. Revenue hanya dari lembaga keuangan, pemerintah, dan upgrade institusional opsional. Lihat [[Freemium Cross-Subsidy Pricing Model]] untuk detail.

## Model ternormalisasi v2 — dua koreksi kredibilitas

1. Opex kini memasukkan gaji tim (Rp 10 jt/bln T1 → Rp 45 jt/bln T5). Draft awal hanya menghitung WA API + AI + cloud sehingga ROI 674% sempat muncul dan ditolak karena tidak kredibel.
2. Trajektori pertumbuhan dimoderasi — tanpa lompatan 10x/tahun; penetrasi <1% pesantren nasional di Tahun 5.

## Tiga sumber revenue

| Stream | Pembayar | Cara kerja |
|---|---|---|
| SaaS langganan | Pesantren yang upgrade | Bulanan, pesantren freemium tetap gratis |
| B2B Data API | Lembaga keuangan | Bank bayar akses skor STS supplier |
| Loan channeling 2% | Lembaga keuangan | Komisi dari nilai pembiayaan cair (alternatif: ujrah flat, perlu konsultasi DSN-MUI) |

## Empat skenario pricing

| Skenario | Struktur harga | Revenue T5 | Multiple 5th | IRR | Investable? |
|---|---|---|---|---|---|
| S1 Flat Rp 200rb | Flat semua | Rp 692 jt | 1,38x | 6,7% | Tidak |
| S2 Tiered atap Rp 500rb | 150/400/500rb | Rp 774 jt | 1,94x | ~14% | Marginal |
| **S3 Tiered atap Rp 750rb** ⭐ | 150/400/750rb | **Rp 819 jt** | **2,05x** | **~15%** | **Ya** |
| S4 Flat Rp 500rb | Flat semua | Rp 860 jt | 2,15x | 16–17% | Ya (jangkauan sempit) |

Struktur tiga tier (S3): Basic <300 santri Rp 150rb (55% populasi, konversi 15%); Pro 300–1.000 santri Rp 400rb (35%, konversi 25%); Enterprise >1.000 santri Rp 750rb (10%, konversi 40%). Konversi tertimbang ±21%.

## Rekomendasi: S3 (Tiered atap Rp 750rb)

Trade-off inti: harga murah ramah sosial tapi merugikan investor; harga mahal untung besar tapi menyingkirkan pondok kecil. S3 adalah titik optimal — menangkap ±95% return S4 (IRR ~15%) sambil menjaga jangkauan seluas S1. Enterprise (10% populasi) menghasilkan 39% SaaS T5, membiayai keterjangkauan Basic.

Seed dibutuhkan: Rp 300 jt untuk 25% ekuitas. Break-even kumulatif: Tahun 5. Puncak burn kumulatif: Rp 214 jt.

## Asumsi kritis yang perlu divalidasi di pilot Tahun 1

Distribusi ukuran pondok 55/35/10; konversi per tier 15/25/40% (pengungkit terbesar model, benchmark freemium konsumer hanya 2–5%); kesediaan pondok besar bayar Rp 750rb; kesediaan bank bayar channeling 2% vs ujrah flat; CAC riil per segmen; investasi seed & valuasi.

## Unit economics (LTV/CAC, Tahun 5)

Semua tier pesantren >7x (sehat). Supplier sengaja rendah (2,6x) — bukan profit center, penghasil data dengan CAC nyaris nol (network effect: tiap pesantren membawa 25–30 supplier). Lembaga keuangan sangat sehat (>20x).

## Catatan teknis

Semua angka model ternormalisasi v2 (Juli 2026), konsisten lintas dokumen. Dokumen basis: proposal "Versi 2 SIMULASI DRAFTING 2ND SUBMISSION".
