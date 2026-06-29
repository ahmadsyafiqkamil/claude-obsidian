---
title: "Pengenalan CNN — Dicoding"
source: "[[pengenalan-cnn-detail]]"
type: source
created: 2026-06-29
source_url: "https://www.dicoding.com/academies/185/tutorials/27120"
author:
  - "[[Dicoding Indonesia]]"
tags:
  - source
  - dicoding
  - deep-learning
  - cnn
status: developing
related:
  - "[[Convolutional Neural Network]]"
  - "[[LeNet]]"
  - "[[AlexNet]]"
  - "[[CNN 5-Step Pipeline]]"
  - "[[Weights Sharing in CNN]]"
---

# Pengenalan Convolutional Neural Network

Modul dari kursus **Belajar Fundamental Deep Learning** di Dicoding Indonesia.

## Sejarah CNN

- **LeNet** (1998) — Yann LeCun, pengenalan karakter tulisan tangan, database MNIST
- **AlexNet** (2012) — Alex Krizhevsky, pemenang ImageNet, cikal bakal deep learning modern

## 5 Langkah CNN

1. **Patches** — memecah gambar menjadi bagian-bagian kecil
2. **Small NN** — setiap patch diproses oleh jaringan saraf kecil dengan filter yang sama (weights sharing)
3. **Array baru** — hasil konvolusi disimpan dalam array fitur
4. **Downsampling** — pooling (max/average) mengurangi dimensi, overfitting, dan meningkatkan invariansi spasial
5. **Prediksi** — fully connected → softmax → klasifikasi akhir

## Source Document

Lihat [[pengenalan-cnn-detail]] untuk materi lengkap.
