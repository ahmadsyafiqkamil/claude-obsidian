---
type: concept
title: "Darwin Threshold Evolution"
created: 2026-07-03
tags:
  - agent
  - optimization
  - self-tuning
  - evolution
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Data Gathering and Expected Value Optimization]]"
  - "[[Meridian Agent]]"
---

# Darwin Threshold Evolution

Self-tuning mechanism dalam Meridian agent. Screening thresholds berevolusi secara otomatis berdasarkan data performa closed position.

## Cara Kerja

1. Setiap position close → `lessons.js.recordPerformance()` mencatat win/loss + metrics
2. Setelah ≥10 sample, `/evolve` menganalisis winners vs losers
3. Thresholds di `user-config.json` di-adjust berdasarkan pattern
4. Changes berlaku segera — no restart

## Config

```json
{
  "darwinEnabled": true,
  "darwinWindowDays": 60,
  "darwinRecalcEvery": 5,
  "darwinBoost": 1.05,
  "darwinDecay": 0.95,
  "darwinFloor": 0.3,
  "darwinCeiling": 2.5,
  "darwinMinSamples": 10
}
```

## Mekanisme

| Parameter | Efek |
|-----------|------|
| `darwinBoost` (1.05) | Naikkan threshold 5% jika winners > losers |
| `darwinDecay` (0.95) | Turunkan threshold 5% jika losers > winners |
| `darwinFloor` (0.3) | Threshold tidak boleh di bawah 30% original |
| `darwinCeiling` (2.5) | Threshold tidak boleh di atas 2.5× original |

## Contoh

Jika `minFeeActiveTvlRatio=0.1` dan winners konsisten di pool dengan ratio >0.15:
- Darwin boost: 0.1 × 1.05 = 0.105
- Setelah beberapa cycle: 0.1 → 0.105 → 0.110 → 0.116
- Agent secara alami menyaring pool yang kurang profitable

## Known Issue

Evolusi pada `maxVolatility` dan `minFeeTvlRatio` adalah no-op karena key names tidak match config (`minFeeActiveTvlRatio` dan `maxVolatility` tidak ada di config system). Filed as tech debt di CLAUDE.md.
