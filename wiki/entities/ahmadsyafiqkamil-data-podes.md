---
type: entity
title: "ahmadsyafiqkamil/data_podes"
created: 2026-06-29
tags:
  - repo
  - github
  - data-science
  - indonesia
  - government-data
  - python
status: developing
source: "[[podes-2024-pipeline]]"
related:
  - "[[Ahmad-Syafiq-Kamil]]"
  - "[[PODES Village Data Pipeline]]"
  - "[[IDM Village Classification]]"
---

# ahmadsyafiqkamil/data_podes

Pipeline Python untuk data **PODES 2024** (Potensi Desa, BPS) + **IDM 2025** (Indeks Desa Membangun). Memproses 4 file DBF (~84k baris/file, total ~337k baris × 793 kolom) menjadi dataset terstruktur untuk analisis klasifikasi desa.

## Stack

Python ≥ 3.10, `uv`, pandas, numpy, dbfread, chardet, openpyxl, jupyter, matplotlib, python-pptx.

## Output

- Pickle + metadata JSON (merge penuh & narrow)
- CSV statistik
- Jupyter notebook analisis
- PPT klasifikasi desa
- PDF variabel PODES 4 tema

## Use Case

Analisis dan klasifikasi desa di Indonesia berdasarkan data PODES BPS — digunakan untuk prioritas pembangunan dan evaluasi IDM.

Lihat [[podes-2024-pipeline]] untuk README lengkap.
