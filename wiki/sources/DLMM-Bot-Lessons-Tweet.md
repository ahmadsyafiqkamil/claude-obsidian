---
type: source
title: "DLMM Bot Lessons: Token Screening Before Position"
created: 2026-07-03
source_type: tweet
tags:
  - tweet
  - defi
  - solana
  - dlmm
  - meteora
  - risk-management
  - screening
status: current
related:
  - "[[Meteora DLMM]]"
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[Exit Liquidity Risk]]"
  - "[[Volatility Execution Gap]]"
  - "[[Gas Reserve Pattern]]"
  - "[[Trailing Take Profit]]"
  - "[[Bundler Detection]]"
---

# DLMM Bot Lessons: Token Screening Before Position

Tweet thread dari praktisi anonim tentang pelajaran paling mahal dari menjalankan automated DLMM bot di [[Meteora DLMM|Meteora]]. Fokus utama: **token screening sebelum posisi dibuka** — bukan exit strategy atau indikator baru.

## Empat Pelajaran

### 1. Market Cap vs Sizing — Jangan Jadi Exit Liquidity Sendiri

Pola kerugian terbesar: **market cap kecil + LP sizing besar**. Di token small-cap, pool liquidity tipis. Posisi sendiri jadi porsi signifikan dari market depth. Saat harga dump, posisi LP-mu yang menyerap panic selling — kamu jadi exit liquidity orang lain.

Korelasi sederhana: **semakin kecil market cap, semakin kecil sizing**. Bukan soal "seberapa confident dengan token ini" — tapi seberapa besar tanggungan terhadap market depth jika harga bergerak melawan.

> Lihat: [[Exit Liquidity Risk]] untuk analisis mendalam + [[Gas Reserve Pattern]] untuk pola position sizing.

### 2. Volatilitas: Kawan atau Lawan?

Volatilitas tinggi bukan sekadar "harga naik turun cepat" — ini danger signal untuk bot dengan rule-based TP/SL. Contoh real: bot trigger TP karena harga kena threshold. Tapi volatilitas tinggi → harga sudah dump sebelum eksekusi selesai (slippage, execution delay). Hasil: PnL yang di atas kertas positif jadi negatif saat direalisasi.

**Volatilitas tinggi = narrow execution window.** Gap antara "harga saat sinyal fired" dan "harga saat posisi closed" semakin besar.

> Lihat: [[Volatility Execution Gap]] untuk analisis + [[Trailing Take Profit]] untuk mitigasi + [[Momentum-to-Bins Scaling]] untuk volatility-aware bin sizing.

### 3. Root Cause yang Sama

Dua poin di atas masalah yang sama: **screening berdasarkan sinyal saja, tanpa screening market structure**.
- Market cap kecil + sizing besar = depth tidak bisa absorb posisi.
- Volatilitas tinggi + rigid TP = eksekusi tidak bisa mengikuti pergerakan harga.

Sinyal bisa kelihatan bagus, tapi kalau market structure tidak "fit" dengan cara entry/exit, tetap rugi.

### 4. Practical Takeaway

Dua pertanyaan sebelum setiap entry:

1. **Berapa persen pool depth yang sizing kamu wakili?** (bukan cuma "% dari capital")
2. **Jika volatilitas spike saat exit, seberapa besar gap antara sinyal exit dan eksekusi aktual?**

Turning point dari negatif ke positif bukan dari fitur baru — tapi dari rethink apakah screening benar-benar respect market structure, atau cuma chase sinyal.
