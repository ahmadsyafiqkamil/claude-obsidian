---
type: concept
title: "PODES Village Data Pipeline"
created: 2026-06-29
tags:
  - concept
  - data-science
  - indonesia
  - government
  - pipeline
status: developing
source: "[[podes-2024-pipeline]]"
related:
  - "[[IDM Village Classification]]"
  - "[[DBF Data Processing]]"
  - "[[ahmadsyafiqkamil/data_podes]]"
---

# PODES Village Data Pipeline

Pipeline Python untuk membaca, menggabungkan, dan memfilter data PODES 2024 (Potensi Desa, BPS).

## Skala

- 4 file DBF (~84k baris per file)
- Gabungan penuh: ~337k baris × 793 kolom (union semua field)
- Desa unik: ~84.276 (`IDDESA`)
- Null density: ~74% (sparse — banyak kolom hanya ada di satu DBF)

## Pipeline Steps

1. Inventaris kolom → `list_podes_dbf_columns.py`
2. Merge penuh + inner join IDM → `merge_podes_idm.py` (by `IDDESA`) atau `merge_podes_idm_by_nama.py`
3. Filter narrow (kolom terbatas per modul) → `filter_podes_idm_narrow.py`
4. Filter desa tertinggal → `filter_podes_idm_tertinggal.py`

## Encoding Strategy

DBF dibaca dengan fallback encoding: cp1252 → latin-1 → utf-8 → auto-detect. Error encoding dicatat di metadata JSON tanpa menghentikan pipeline.
