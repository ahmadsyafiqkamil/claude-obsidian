---
type: concept
title: "Data Preprocessing Deep Learning"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - data-engineering
status: developing
source: "[[pra-pemrosesan-data-dl]]"
related:
  - "[[Image Augmentation]]"
  - "[[Text Tokenization and Padding]]"
  - "[[Deep Learning]]"
---

# Data Preprocessing Deep Learning

Tahapan mengubah data mentah menjadi format yang dapat diterima model neural network — array numerik dengan skala seragam.

## 4 Tahapan Umum

| Tahap | Deskripsi |
|-------|-----------|
| 1. Array conversion | Dataset diubah ke larik/array angka |
| 2. Split attributes & labels | Model mempelajari korelasi atribut → label |
| 3. Normalization | Skala data diseragamkan (0-1) untuk komputasi optimal |
| 4. Train/test split | Data uji untuk evaluasi kinerja model |

## Perbedaan per Tipe Data

| Tipe Data | Pendekatan |
|-----------|------------|
| **Gambar** | Data augmentation (rescale, rotation, flip), resize, rescaling |
| **Teks/NLP** | Tokenization, oov_token, padding, embedding layer |
