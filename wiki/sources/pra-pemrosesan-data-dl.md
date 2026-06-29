---
title: "Pra-pemrosesan Data DL — Dicoding"
source: "[[pra-pemrosesan-data-dl]]"
type: source
created: 2026-06-29
source_url: "https://www.dicoding.com/academies/185/tutorials/10019"
author:
  - "[[Dicoding Indonesia]]"
tags:
  - source
  - dicoding
  - deep-learning
  - data-preprocessing
status: developing
related:
  - "[[Data Preprocessing Deep Learning]]"
  - "[[Image Augmentation]]"
  - "[[Text Tokenization and Padding]]"
  - "[[Deep Learning]]"
---

# Pra-pemrosesan Data untuk Model

Modul dari kursus **Belajar Fundamental Deep Learning** di Dicoding Indonesia.

## 4 Tahapan Umum

1. Ubah dataset ke dalam bentuk larik/array (format angka)
2. Pisahkan atribut dan label
3. Normalisasi skala data (0-1)
4. Pisahkan data latih dan data uji

## Pemrosesan Data Gambar

- **TensorFlow ≤ 2.9**: `ImageDataGenerator` (rescale, rotation, flip, shear)
- **TensorFlow > 2.9**: `tf.keras.Sequential` layers (Resizing, Rescaling, RandomFlip, RandomRotation)
- Data augmentasi tidak aktif saat `Model.evaluate` atau `Model.predict`

## Pemrosesan Data Bahasa

- `Tokenizer` + `texts_to_sequences` untuk konversi teks → array
- `oov_token` untuk kata di luar vocabulary
- `pad_sequences` untuk uniform sequence length
- Layer Embedding untuk representasi kata

## Source Document

Lihat [[pra-pemrosesan-data-dl]] untuk materi lengkap.
