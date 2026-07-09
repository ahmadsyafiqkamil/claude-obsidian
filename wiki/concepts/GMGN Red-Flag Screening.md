---
type: concept
title: "GMGN Red-Flag Screening"
domain: defi
address: c-000005
tags:
  - defi
  - solana
  - dlmm
  - memecoin
  - token-screening
created: 2026-07-10
status: current
related:
  - "[[DLMM-Coin-Screening-EvilPanda]]"
  - "[[Bundler Detection]]"
  - "[[Exit Liquidity Risk]]"
---

# GMGN Red-Flag Screening

Framework screening kuantitatif menggunakan metrics dari [GMGN](https://gmgn.ai) untuk mengidentifikasi koin memecoin Solana yang tidak layak di-DLMM.

## 7 Red-Flag Metrics

| Metric | Threshold | Rationale |
|--------|-----------|-----------|
| Top 10 holders | >30% | Whale dominance — risiko dump masif |
| Dev supply | >1% | Dev bisa dump kapan saja. Bahkan 1% = red flag |
| Insiders | >0% | Insider allocation presignals rug |
| Phishing | >30% | Indikasi wallet phishing aktif di pool |
| Bundling | >60% | False positive mungkin (alpha group calls), tapi tetap dianggap risiko |
| Initial liquidity | Not burnt | Likuiditas bisa ditarik sewaktu-waktu |
| Dev rug history | Any | Dev dengan riwayat rugging = constant dump pressure dari wallet lain |

## Total Fees sebagai Proxy Organik

GMGN total fees memberikan sinyal seberapa organik aktivitas trading:
- **<20**: Scam coin — bisa rug ke nol kapan saja
- **20-50**: Grey area — perlu cek chart secara manual
- **50+**: Cenderung "aman" untuk DLMM (chopping, bukan rulling)

`> [!warning]`
> Total fees tinggi bukan jaminan absolut. Bisa jadi karena initial mass hype. Tetap cross-check dengan metrics lain.

## Integrasi dengan DLMM Automation

Metrics ini bisa diotomatisasi sebagai pre-deployment screening layer untuk agent LP seperti [[Meridian AI Agent]]. [[Bundler Detection]] dan GMGN red-flag screening berfungsi sebagai dual gate sebelum position deployment.
