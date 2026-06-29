---
type: concept
title: "Export Pipeline DOCX PDF"
created: 2026-06-29
tags:
  - concept
  - document-generation
  - export
  - django
status: developing
source: "[[absensi-sistem-kehadiran]]"
related:
  - "[[Django DRF Backend Pattern]]"
---

# Export Pipeline DOCX PDF

Pipeline ekspor dokumen di [[absensi-sistem-kehadiran]]: template Word → DOCX generation → PDF conversion.

## Flow

1. Template Word disimpan di `template/`
2. Django backend mengisi template dengan data (python-docx)
3. DOCX dikirim ke converter microservice (port 3003)
4. Converter (LibreOffice headless) menghasilkan PDF
5. PDF dikembalikan ke client

## Use Cases

- Laporan lembur bulanan (rekap + export DOCX/PDF)
- Formulir penilaian kinerja → export PDF
- SPPD nominatif → export DOCX
