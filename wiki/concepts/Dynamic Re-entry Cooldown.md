---
type: concept
title: "Dynamic Re-entry Cooldown"
created: 2026-07-03
tags:
  - momentum
  - strategy
  - risk-management
  - dlmm
status: current
sources:
  - "[[meridian-agent-architecture]]"
  - "[[meridian-momentum-screening-bravonoid]]"
related:
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[Momentum-to-Bins Scaling]]"
---

# Dynamic Re-entry Cooldown

Pattern re-entry gate yang menggantikan static cooldown timer dengan **momentum-aware** rules. Implementasi di `momentum.js:shouldAllowReentry()`.

## Kenapa Bukan Static Cooldown?

Static timer (misal: "tunggu 6 jam setelah close") membuang peluang jika momentum masih kuat, dan membiarkan re-entry terlalu cepat jika momentum sudah habis.

## Rules (Production)

```javascript
export const DEFAULT_REENTRY_RULES = [
  { maxHours: 1, allow: false },                  // <1h → DROP
  { minHours: 1, maxHours: 6, minH1: 100 },       // 1-6h → need +100%
  { minHours: 6, maxHours: 12, minH1: 20 },       // 6-12h → need +20%
  { minHours: 12, allow: true },                  // >12h → ALLOW
];
```

## Decision Logic

```
timeSinceClose → pick matching rule → check condition:

< 1h          → BLOCK (always)
1–6h          → ALLOW only if price_change_1h ≥ 100%
6–12h         → ALLOW only if price_change_1h ≥ 20%
> 12h         → ALLOW (unrestricted)
```

## Integrasi dengan Pool Memory

`pool-memory.js` menyediakan `getLastCloseForMint()` — returns timestamp close terakhir untuk base token. `tools/screening.js` memanggil `shouldAllowReentry(hoursSinceClose, priceChange1h)` sebelum menambahkan token ke candidate list.

## Konfigurasi

```json
{
  "momentumReentryEnabled": true,
  "momentumReentryRules": [ ... ]
}
```

Saat `momentumReentryEnabled=true`, static cooldown di `pool-memory.js` (low-yield, repeat-fee) di-skip. Hanya OOR cooldown yang tetap berlaku sebagai safety net.

> [!key-insight] Dynamic cooldown = avoid unnecessary losses tanpa mengorbankan re-entry saat momentum masih kuat. Lebih canggih dari "tunggu X jam" static.
