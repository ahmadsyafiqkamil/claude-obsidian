---
type: concept
title: "Bin Step Screening"
created: 2026-07-03
tags:
  - dlmm
  - meteora
  - screening
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meteora DLMM]]"
  - "[[LP Scanner and Range Selection Pattern]]"
---

# Bin Step Screening

Filter pool berdasarkan `bin_step` — parameter internal Meteora DLMM yang menentukan granularity price bins.

## Apa itu Bin Step?

Bin step menentukan jarak harga antar bin dalam DLMM pool. Semakin kecil bin step → semakin granular (banyak bin sempit). Semakin besar → semakin kasar (sedikit bin lebar).

| Bin Step | Karakteristik |
|----------|---------------|
| 1–50 | Sangat granular, precision tinggi, gas cost tinggi |
| **80–200** | **Sweet spot untuk LP strategy** — granularity cukup, gas manageable |
| >200 | Kasar, sedikit bins, range tidak presisi |

## Config (Production)

```json
{
  "minBinStep": 80,
  "maxBinStep": 200
}
```

## Kenapa Range 80-200?

1. **≥80** — menghindari bin yang terlalu granular. Bin step <50 berarti ribuan bins dalam range harga normal → deploy cost mahal, sulit manage
2. **≤200** — menghindari bin yang terlalu kasar. Bin step >200 berarti hanya beberapa bins → tidak bisa set range LP dengan presisi

## Safety Check

```javascript
// executor.js — deploy_position safety
if (bin_step < minBinStep || bin_step > maxBinStep) {
  throw new Error(`Bin step ${bin_step} out of range [${minBinStep}, ${maxBinStep}]`);
}
```

Dipaksa sebelum LLM lihat candidate — screening pipeline sudah filter duluan.
