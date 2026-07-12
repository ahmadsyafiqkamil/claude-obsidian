---
type: source
title: "Bravonoid: Momentum Screening untuk Meridian Agent"
source_url: "https://x.com/dikibagast/status/2067284884008370591"
source_type: tweet
author: "[[Bravonoid]]"
published: 2026-06-16
ingested: 2026-07-12
tags:
  - tweet
  - meridian
  - dlmm
  - momentum
  - screening
  - strategy
created: 2026-07-12
related:
  - "[[Momentum-Based Token Screening Pattern]]"
  - "[[Dynamic Re-entry Cooldown]]"
  - "[[Bravonoid]]"
  - "[[Meridian AI Agent]]"
  - "[[meridian-bins-range-bravonoid]]"
---

# Bravonoid: Momentum Screening untuk Meridian Agent

Tweet thread oleh @dikibagast (Bravonoid) tentang adjustment game-changing di logic strategy Meridian agent: **price change % sebagai core metric momentum**.

---

## 3 Takeaway Utama

### 1. Screen Token dengan Price Change %

Satu metric dari DexScreener API (free, reliable) — tidak perlu bikin metric custom dari OHLCV:

| Timeframe | Gunakan untuk |
|-----------|--------------|
| Price change 5m | Agent tight strategy |
| Price change 1h | Agent wide strategy |

> "I like simpler approach because most of the time the simpler the better."

### 2. Dynamic Re-entry Cooldown

Bukan static cooldown, tapi **momentum-aware re-entry logic**:

```
if timeAfterClose < 1h → DROP

elif 1h < timeAfterClose < 6h AND priceChange1h > 100% → ALLOW
elif 6h < timeAfterClose < 12h AND priceChange1h > 50% → ALLOW
elif 12h < timeAfterClose < 24h AND priceChange1h > 20% → ALLOW

else → DROP
```

Makin lama sejak close → threshold makin rendah. Kalau momentum masih kuat → boleh re-enter lebih cepat.

> "Ini powerful karena bisa ngebantu avoid unnecessary losses even mungkin ngorbanin potential gains, but the math is better to avoid losses."

### 3. Tiga Tempat Implementasi

1. **Filter utama** candidates — drop token kalau price change negatif / di bawah threshold
2. **Dynamic re-entry** — momentum-aware gate setelah posisi close
3. **Bins range determination** — dibahas di tweet lanjutan ([[meridian-bins-range-bravonoid]])

---

## Hubungan dengan Konsep Existing

Tweet ini adalah **sumber asli** dari beberapa konsep yang sudah ada di wiki:

- [[Momentum-Based Token Screening Pattern]] — full synthesis dari pattern ini
- [[Dynamic Re-entry Cooldown]] — implementasi production di Meridian agents
- [[Momentum-to-Bins Scaling]] — lanjutan logic di tweet berikutnya
