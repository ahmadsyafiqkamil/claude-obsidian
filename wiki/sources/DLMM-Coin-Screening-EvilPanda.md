---
type: source
title: "DLMM Coin Screening by Evil Panda"
source_url: "https://x.com/EvilPanda/status/2019606663280619857"
author: "[[@EvilPanda]]"
published: 2026-02-06
ingested: 2026-07-10
address: c-000003
tags:
  - defi
  - solana
  - dlmm
  - memecoin
  - token-screening
status: current
related:
  - "[[Meteora DLMM]]"
  - "[[Meridian AI Agent]]"
  - "[[Exit Liquidity Risk]]"
  - "[[Volatility Execution Gap]]"
  - "[[Bundler Detection]]"
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[DLMM-Bot-Lessons-Tweet]]"
---

# DLMM Coin Screening by Evil Panda

Source: [X/Twitter](https://x.com/EvilPanda/status/2019606663280619857) | 2026-02-06

Thread oleh @EvilPanda (seorang praktisi DLMM di Solana) yang merangkum 8 heuristik untuk menyaring koin yang layak di-DLMM dari sisi SOL. Artikel ini adalah update dari versi sebelumnya, mencerminkan taktik scammer yang terus berevolusi.

---

## Ringkasan 8 Heuristik

### 1. Dexscreener Tanpa Gambar atau Socials
Koin tanpa logo dan social links langsung di-skip. Namun, scammer modern sudah menyertakan social links → screening lanjutan tetap diperlukan.

### 2. Kategori Koin "No-Go"
Enam kategori yang cenderung rug cepat:
- **Trump/Elon/Baron coins** — pump politikal mingguan, selalu crap
- **Celebrity coins** — contoh: Kanye
- **Justice coins** — eksploitasi reputasi korban (contoh: Iryna)
- **Animal celebrities** — hewan viral TikTok
- **DEV/BAGS coins** — boleh jika Dev aktif membantu komunitas; red flag jika Dev ghosting

### 3. Total Fees di GMGN
Indikator organik-tidaknya trading:
- <20: scam coin, bisa rug ke nol kapan saja
- 20-50: abu-abu, perlu cek chart
- 50+: cenderung "aman" untuk DLMM (chopping around)

### 4. GMGN Red-Flag Metrics
Threshold kuantitatif:
- Top 10 holders >30% 🟥
- Dev supply >1% 🟥 (Dev memegang supply berapapun = red flag)
- Insiders >0% 🟥
- Phishing >30% 🟥
- Bundling >60% 🟥 (alpha group calls bisa menyebabkan false positive)
- Initial liquidity tidak dibakar 🟥
- Dev punya riwayat rugging 🟥

### 5. Vampire Coins
Koin yang mengekstrak likuiditas dari "main runner". GMGN menandai dengan ikon vampire fangs merah. Trader yang FOMO pada runner coin membeli vampire coin sebagai "beta play" — hampir selalu berakhir rug.

> [!warning] GMGN kadang terlambat mengupdate status Vamp coin. Cek ulang jika harga tidak behave normal.

### 6. CTO Coins (Community Takeover)
Dulu CTO adalah sinyal positif (komunitas bangkit setelah dev rug). Sekarang dieksploitasi: bad actors apply CTO untuk menjadi dev baru → mengumpulkan creator fees → terus dumping chart sambil hyping di X. Bagholder membeli lebih banyak berharap pump, tapi hanya dev baru yang untung.

### 7. Virus Clusters (Bubblemaps)
Cluster wallet di bubblemaps yang menyerupai adenovirus. Indikasi insider sudah membeli big bag via multiple wallets → bisa dump dalam satu klik.

### 8. Pumpfun Offchain Coins
Koin di mana creator dan minter (first buyer) adalah wallet berbeda. Dead coin yang di-revive oleh rugger. Pola: pump → slow rug tanpa bounce berarti → rug >-90%.

---

## Key Insights

1. **99% koin tereliminasi dalam screening harian** — hanya 1-2 koin per hari yang lolos untuk DLMM
2. **GMGN adalah primary screening tool** — fees, holder distribution, bundling, phishing, vampire detection
3. **Taktik scammer terus berevolusi** — CTO yang dulu positif kini jadi abuse vector; offchain coins adalah pattern baru
4. **Lindy effect untuk koin** — koin dengan volume organik tinggi (>50 fees) cenderung chopping, bukan rulling
5. **Mental health > greed** — skip koin yang meragukan demi kesehatan mental trader
