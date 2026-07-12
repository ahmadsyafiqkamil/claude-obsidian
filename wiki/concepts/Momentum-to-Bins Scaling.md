---
type: concept
title: "Momentum-to-Bins Scaling"
created: 2026-07-03
tags:
  - momentum
  - dlmm
  - meteora
  - strategy
  - bins
status: current
sources:
  - "[[meridian-agent-architecture]]"
  - "[[meridian-momentum-screening-bravonoid]]"
related:
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[LP Scanner and Range Selection Pattern]]"
  - "[[Meteora DLMM]]"
  - "[[Volatility Execution Gap]]"
---

# Momentum-to-Bins Scaling (Meridian Implementation)

Implementasi production dalam Meridian agent. 1h price change dari DexScreener diklasifikasi ke momentum band, lalu dipetakan ke bins range.

## Klasifikasi (Production Config)

Dari `user-config.json` instance VPS user:

| Kategori | Price Change 1h | Bins Range |
|----------|----------------|------------|
| **extreme** | ≥ 100% | 70–85 |
| **high** | ≥ 50% | 85–100 |
| **moderate** | ≥ 20% | 100–120 |
| **low** | ≥ 10% | 120–135 |
| **minimal** | < 10% | 135–150 |

## Code (momentum.js)

```javascript
export const DEFAULT_MOMENTUM_CLASSES = [
  { name: "extreme",  min: 100, bins: { min: 70,  max: 100 } },
  { name: "high",     min: 50,  bins: { min: 70,  max: 100 } },
  { name: "moderate", min: 20,  bins: { min: 100, max: 150 } },
  { name: "low",      min: 10,  bins: { min: 100, max: 150 } },
  { name: "minimal",  min: -Infinity, bins: { min: 100, max: 150 } },
];

export function classifyMomentum(pct, classes) {
  for (const cls of classes) {
    if (value >= cls.min) return cls.name;
  }
}

export function momentumToBins(category, classes) {
  const cls = classes.find(c => c.name === category);
  return { ...cls.bins };
}
```

## Prompt Integration

System prompt SCREENER menerima guidance table (dari `prompt.js`):

```
extreme (1h ≥ 100%) → 70-85 bins
high (1h ≥ 50%) → 85-100 bins
moderate (1h ≥ 20%) → 100-120 bins
low (1h ≥ 10%) → 120-135 bins
minimal (1h < 10%) → 135-150 bins
```

LLM memilih final `bins_below` dalam band tersebut. Prompt menekankan: **stronger momentum → tighter bins → more fee capture**.

## Safety Floor

Executor menolak `bins_below` < `minBinsBelow` (70). Prompt guidance di-clamp ke floor/ceiling config supaya LLM tidak bisa suggest bins yang akan di-reject.
