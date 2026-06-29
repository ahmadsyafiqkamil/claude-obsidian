---
title: "data_podes — Pipeline PODES 2024"
source: "[[podes-2024-pipeline]]"
type: source
created: 2026-06-29
source_url: "https://github.com/ahmadsyafiqkamil/data_podes"
author:
  - "[[Ahmad-Syafiq-Kamil]]"
tags:
  - source
  - github-repo
  - data-science
  - indonesia
  - government-data
status: developing
related:
  - "[[PODES Village Data Pipeline]]"
  - "[[IDM Village Classification]]"
  - "[[DBF Data Processing]]"
---

# data_podes — Pipeline PODES 2024 & Analisis IDM

Pipeline Python untuk membaca, menggabungkan, dan memfilter data **PODES 2024** (Potensi Desa, BPS) dari 4 file DBF, lalu menggabungkan dengan data **Indeks Desa Membangun (IDM) 2025**.

## Skala Data

| Entitas | Keterangan |
|---------|------------|
| Sumber PODES | 4 file DBF (~84k baris/file) |
| Gabungan penuh | ~337k baris × 793 kolom |
| Desa unik | ~84.276 (`IDDESA`) |
| Null density | ~74% (sparse) |

## Stack

- Python ≥ 3.10 + `uv`
- pandas, numpy, dbfread, chardet, openpyxl, python-dotenv
- jupyter, matplotlib, reportlab, python-pptx (analisis/output)

## Alur Kerja

1. **Inventaris kolom DBF** → `list_podes_dbf_columns.py`
2. **Merge penuh + filter IDM** → `merge_podes_idm.py` (by IDDESA) atau `merge_podes_idm_by_nama.py` (by nama+kab)
3. **Pipeline narrow** → `filter_podes_idm_narrow.py` (kolom terbatas per-DBF)
4. **Filter desa tertinggal** → `filter_podes_idm_tertinggal.py`

Output: pickle, metadata JSON, CSV, notebook analisis, PPT, PDF variabel.

## Source Document

Lihat [[podes-2024-pipeline]] untuk README lengkap.
