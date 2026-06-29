---
type: concept
title: "Weights Sharing in CNN"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - cnn
status: developing
source: "[[pengenalan-cnn-detail]]"
related:
  - "[[Convolutional Neural Network]]"
  - "[[CNN 5-Step Pipeline]]"
---

# Weights Sharing in CNN

Teknik di mana filter konvolusi yang sama digunakan untuk memproses setiap patch gambar — setiap bagian gambar mengalami transformasi yang sama menggunakan faktor pengali yang sama.

## Mengapa Penting?

1. **Translation invariance** — CNN mengenali objek di mana pun posisinya dalam gambar
2. **Parameter efficiency** — satu filter dipakai ulang untuk seluruh gambar, bukan filter berbeda per posisi
3. **Feature detection** — jika ada fitur menarik di patch mana pun, filter akan mendeteksinya sebagai "object of interest"

Tanpa weights sharing, CNN akan membutuhkan jumlah parameter yang jauh lebih besar dan kehilangan kemampuan generalisasi spasial.
