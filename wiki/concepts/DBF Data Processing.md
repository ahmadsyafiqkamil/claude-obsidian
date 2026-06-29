---
type: concept
title: "DBF Data Processing"
created: 2026-06-29
tags:
  - concept
  - data-engineering
  - dbf
  - python
status: developing
source: "[[podes-2024-pipeline]]"
related:
  - "[[PODES Village Data Pipeline]]"
  - "[[ahmadsyafiqkamil/data_podes]]"
---

# DBF Data Processing

Pola pemrosesan file DBF (dBase) dalam pipeline data Python menggunakan `dbfread`.

## Pattern

```python
import pandas as pd
from dbfread import DBF

# Baca dengan multiple encoding fallback
for encoding in ['cp1252', 'latin-1', 'utf-8']:
    try:
        table = DBF(filename, encoding=encoding)
        break
    except UnicodeDecodeError:
        continue
```

## Tantangan

1. **Sparse columns** — 4 DBF memiliki kolom yang berbeda, union menghasilkan ~74% null
2. **Encoding inconsistency** — DBF tidak menyimpan metadata encoding; perlu auto-detect
3. **Multi-key joins** — overlap kode desa rendah antara PODES dan IDM; fallback ke join by nama+kab
4. **Large output** — gabungan penuh ~337k × 793 terlalu besar untuk CSV praktis; pickle + metadata JSON

## Best Practices

- Gunakan `dict[str, pd.DataFrame]` untuk narrow per-DBF (hindari memuat 793 kolom sekaligus)
- Catat error encoding di metadata JSON
- Hindari asumsi overlap sempurna antara dataset pemerintah yang berbeda
