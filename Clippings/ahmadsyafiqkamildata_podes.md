---
title: "ahmadsyafiqkamil/data_podes"
source: "https://github.com/ahmadsyafiqkamil/data_podes"
author:
published:
created: 2026-06-29
description: "Contribute to ahmadsyafiqkamil/data_podes development by creating an account on GitHub."
tags:
  - "clippings"
---
## PODES 2024 — Pipeline Data & Analisis IDM

Pipeline Python untuk membaca, menggabungkan, dan memfilter data **PODES 2024** (Potensi Desa, BPS) dari 4 file DBF, lalu menggabungkannya dengan data **Indeks Desa Membangun (IDM) 2025** dari Excel. Output utama berupa pickle, metadata JSON, dan artefak analisis (CSV, notebook, presentasi).

## Ringkasan data

| Entitas | Keterangan |
| --- | --- |
| Sumber PODES | 4 file `podes2024_desa_*.dbf` (~84k baris per file) |
| Gabungan penuh | ~337k baris × 793 kolom (union semua field) |
| Desa unik | ~84.276 (`IDDESA`) |
| Kolom umum (di semua DBF) | 9 kolom identitas geografis |
| Null density | ~74% (sparse — banyak kolom hanya ada di satu/two DBF) |

## Prasyarat

- Python ≥ 3.10
- [`uv`](https://docs.astral.sh/uv/) (direkomendasikan) atau `pip`
- File data (tidak ada di repo):
	- `podes2024_desa_01.dbf` … `podes2024_desa_04.dbf`
		- `ID IDM.xlsx` (daftar desa + status IDM 2025)

## Instalasi

```
cd data_podes
uv sync
# atau: pip install -r requirements.txt
```

Salin konfigurasi lingkungan:

```
cp .env.example .env
# Edit DATA_DIR, IDM_EXCEL_PATH, IDM_STATUS_KEEP sesuai kebutuhan
```

## Struktur proyek

```
data_podes/
├── podes2024_desa_*.dbf          # Input DBF (4 file)
├── ID IDM.xlsx                   # Input Excel IDM
├── .env                          # Konfigurasi (dari .env.example)
├── merge_podes_idm.py            # Merge penuh, join by IDDESA
├── merge_podes_idm_by_nama.py    # Merge penuh, join by nama+kab
├── filter_podes_idm_narrow.py    # Filter kolom terbatas, per-DBF
├── filter_podes_idm_tertinggal.py# Varian narrow, default TERTINGGAL
├── list_podes_dbf_columns.py     # Inventaris kolom per DBF
├── inspect_podes_idm_narrow.py   # Ringkasan pickle narrow
├── extract_kepmendes_csv.py      # Ekstrak KepmenDes status desa
├── build_ppt.py                  # Generator presentasi klasifikasi
├── generate_variabel_pdf.py      # PDF variabel PODES 4 tema
├── podes.ipynb                   # ETL gabungan penuh (notebook legacy)
├── klasifikasi_desa_gd_v3.ipynb  # Klasifikasi prioritas desa
├── docs/                         # Catatan layout & outline PPT
└── output/                       # Artefak keluaran
```

## Alur kerja utama

### 1\. Inventaris kolom DBF

Baca header saja (tanpa load seluruh record):

```
uv run python list_podes_dbf_columns.py
```

Output: `output/podes_columns_by_dbf.json`

### 2\. Merge penuh + filter IDM

**Join berdasarkan kode desa (`IDDESA`):**

```
uv run python merge_podes_idm.py
```

Output:

- `output/podes_combined_idm2025_filtered.pkl`
- `output/podes_idm_merge_metadata.json`

**Join berdasarkan nama desa + kabupaten** (lebih cocok jika overlap kode IDM rendah):

```
uv run python merge_podes_idm_by_nama.py
```

Output:

- `output/podes_combined_idm2025_filtered_by_nama_kab.pkl`
- `output/podes_idm_merge_by_nama_metadata.json`

Kedua skrip: baca 4 DBF → `pd.concat` dengan union kolom → inner join IDM → filter `IDM_STATUS_KEEP` (case-insensitive).

### 3\. Pipeline narrow (kolom terbatas, per-DBF)

Untuk analisis modul tertentu (mis. bencana R601) tanpa memuat seluruh 793 kolom:

```
# Set di .env, contoh:
# PODES_KEEP_COLS=R601AK2,R601AK3,...,R602,R603
uv run python filter_podes_idm_narrow.py
```

Output:

- `output/podes_idm_narrow.pkl` — `dict[str, pd.DataFrame]` (kunci = stem DBF, mis. `podes2024_desa_01`)
- `output/podes_idm_narrow_columns_metadata.json`

Verifikasi cepat:

```
uv run python inspect_podes_idm_narrow.py
```

Detail layout kolom: [`docs/podes_idm_narrow_layout.md`](https://github.com/ahmadsyafiqkamil/data_podes/blob/main/docs/podes_idm_narrow_layout.md).

### 4\. Filter desa tertinggal

Varian narrow dengan default `IDM_STATUS_KEEP=TERTINGGAL`:

```
uv run python filter_podes_idm_tertinggal.py
```

Output terpisah (tidak menimpa narrow):

- `output/podes_idm_tertinggal.pkl`
- `output/podes_idm_tertinggal_metadata.json`

## Konfigurasi.env

| Variabel | Default | Keterangan |
| --- | --- | --- |
| `DATA_DIR` | folder skrip | Lokasi file DBF |
| `IDM_EXCEL_PATH` | `ID IDM.xlsx` | Path Excel IDM |
| `OUTPUT_DIR` | `output` | Folder keluaran |
| `IDM_STATUS_KEEP` | kosong | Filter status, pisah `\|` atau koma (case-insensitive) |
| `IDM_KEY_COL` | auto | Kolom kode desa di Excel (`KODE DESA`) |
| `IDM_STATUS_COL` | auto | Kolom status (`STATUS IDM 2025`) |
| `PODES_NAMA_COL` | `NAMA_DESA` | Kolom nama desa PODES |
| `PODES_KAB_COL` | `NAMA_KAB` | Kolom kabupaten PODES |
| `PODES_KEEP_COLS` | — | Kolom narrow (koma/pipe, uppercase) |
| `IDM_MIN_DESA_CODE` | `1000000000` | Hanya merge by-ID |
| `SAVE_CSV` | `false` | Ekspor CSV (file besar) |
| `DEDUPE_ONE_ROW_PER_DESA` | `false` | Satu baris per desa setelah filter |

Contoh filter status:

```
IDM_STATUS_KEEP=tertinggal|MAJU|MANDIRI
```

## Memuat data di Python

**Merge penuh (by nama+kab):**

```
import pandas as pd

df = pd.read_pickle("output/podes_combined_idm2025_filtered_by_nama_kab.pkl")
print(df.shape)
```

**Narrow dict per DBF:**

```
import pickle

with open("output/podes_idm_narrow.pkl", "rb") as f:
    by_dbf = pickle.load(f)

df01 = by_dbf["podes2024_desa_01"]
df02 = by_dbf["podes2024_desa_02"]

# Gabung modul dari DBF berbeda pada IDDESA
merged = df01.merge(df02, on="IDDESA", how="inner", suffixes=("", "_y"))
```

**Subset 9 kolom umum (dari `podes.ipynb`):**

```
import pandas as pd

df = pd.read_pickle("output/podes_common_only.pkl")
```

## Notebook & analisis lanjutan

| Notebook / skrip | Fungsi |
| --- | --- |
| `podes.ipynb` | ETL gabungan 4 DBF → pickle/CSV penuh |
| `inspect_idm_filtered_pkl.ipynb` | Eksplorasi hasil merge by nama+kab |
| `analisis_podes_idm_narrow.ipynb` | Analisis data narrow |
| `analisis_podes_idm_tertinggal.ipynb` | Analisis desa tertinggal |
| `klasifikasi_desa_gd_v3.ipynb` | Klasifikasi prioritas 5 tier |
| `podes_filter_sumut_r601.ipynb` | Filter Sumatera Utara, kolom R601 |
| `run_r601_analysis.py` | Analisis deskriptif R601 (script) |
| `extract_kepmendes_csv.py` | KepmenDes → `output/kepmendes_status_desa_2025.csv` |
| `build_ppt.py` | Presentasi klasifikasi → `output/presentasi_klasifikasi_desa.pptx` |
| `generate_variabel_pdf.py` | PDF variabel → `output/variabel_podes_2024_4_tema.pdf` |

Jupyter:

```
uv run jupyter lab
# atau: uv run jupyter notebook
```

## Encoding & kualitas data

- DBF dibaca dengan urutan encoding: `cp1252` → `latin-1` → `utf-8` → auto-detect.
- Error encoding dicatat di metadata JSON (`errors_log`), tidak menghentikan pipeline.
- Setiap `IDDESA` muncul 4× di dataset gabungan penuh (satu per file DBF) — ini **diharapkan**.
- Overlap rendah antara kode PODES dan Excel IDM sering mencerminkan **perbedaan cakupan data**, bukan bug join; cek metadata (`podes_unique_desa_no_idm`) sebelum mengasumsikan kesalahan merge.

## Dependensi utama

Dikelola via `pyproject.toml` / `requirements.txt`:

- pandas, numpy — manipulasi data
- dbfread — pembaca DBF
- chardet — deteksi encoding
- openpyxl — Excel IDM
- python-dotenv — konfigurasi `.env`
- jupyter, notebook — eksplorasi interaktif
- matplotlib, reportlab, python-pptx — visualisasi & dokumen (analisis/PPT/PDF)