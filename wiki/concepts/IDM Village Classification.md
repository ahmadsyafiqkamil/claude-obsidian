---
type: concept
title: "IDM Village Classification"
created: 2026-06-29
tags:
  - concept
  - indonesia
  - village-development
  - classification
status: developing
source: "[[podes-2024-pipeline]]"
related:
  - "[[PODES Village Data Pipeline]]"
  - "[[ahmadsyafiqkamil/data_podes]]"
---

# IDM Village Classification

Indeks Desa Membangun (IDM) — sistem klasifikasi desa di Indonesia berdasarkan tingkat kemandirian dan pembangunan.

## Klasifikasi

Status IDM 2025 digunakan sebagai filter dalam pipeline [[ahmadsyafiqkamil/data_podes]]:

| Status | Arti |
|--------|------|
| MANDIRI | Desa dengan kapasitas tertinggi |
| MAJU | Desa berkembang pesat |
| BERKEMBANG | Desa dalam proses pembangunan |
| TERTINGGAL | Desa dengan kapasitas terbatas |
| SANGAT TERTINGGAL | Desa prioritas intervensi |

## Konfigurasi

```env
IDM_STATUS_KEEP=tertinggal|MAJU|MANDIRI
```

Filter case-insensitive, mendukung multiple status dipisah pipe atau koma.

## Output Analisis

- `klasifikasi_desa_gd_v3.ipynb` — klasifikasi prioritas 5 tier
- `build_ppt.py` — presentasi klasifikasi desa
- `extract_kepmendes_csv.py` — data KepmenDes status desa
