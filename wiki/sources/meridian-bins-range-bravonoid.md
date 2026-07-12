---
type: source
title: "Bravonoid: Bins Range Determination dari Momentum"
source_url: "https://x.com/dikibagast/status/2068666995663409550"
source_type: tweet
author: "[[Bravonoid]]"
published: 2026-06-17
ingested: 2026-07-12
tags:
  - tweet
  - meridian
  - dlmm
  - momentum
  - bins
  - strategy
created: 2026-07-12
related:
  - "[[Momentum-to-Bins Scaling]]"
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[Bravonoid]]"
  - "[[Meridian AI Agent]]"
  - "[[meridian-momentum-screening-bravonoid]]"
---

# Bravonoid: Bins Range Determination dari Momentum

Tweet lanjutan @dikibagast (Bravonoid) tentang cara menentukan bins range di strategy Meridian agent — **derived dari price change timeframe %**.

---

## Core Logic

**Stronger momentum = tighter bins. Weaker momentum = wider bins.**

> "Semakin kuat trending/momentum-nya, semakin kecil kemungkinan dia untuk punya pullback besar."

Dari observasi:
- Token trending kuat → pullback minimal → **bins sempit** (70-100) → maksimalin fee capture
- Token trending lemah → pullback bisa besar → **bins lebar** (130-150) → room of error

## Klasifikasi Momentum

Mengkonversi metric numeric (price change %) ke metric categorical:

| Kategori | Price Change 1h | Bins Range | Reasoning |
|----------|----------------|------------|-----------|
| Extreme | ≥ 100% | 70-100 | Pullback minimal |
| High | ≥ 50% | 70-100 | Trend kuat |
| Moderate | ≥ 20% | 100-150 | Medium risk |
| Low | ≥ 10% | 100-150 | Longgar |
| Minimal | < 10% | 130-150 or skip | No momentum |

---

## Hubungan dengan Konsep Existing

Tweet ini melengkapi [[Momentum-to-Bins Scaling]] dengan **rationale behind the numbers**:

- Kenapa extreme & high pakai bins yang sama (70-100)? Karena pullback di kedua kondisi ini sama-sama minimal — yang beda cuma seberapa sustainable trend-nya.
- Kenapa moderate/low/minimal pakai bins lebih lebar? Karena semakin lemah momentum, semakin unpredictable pullback-nya.

Sekuens penuh: **price change % → momentum classification → bins range → LLM final decision**.
