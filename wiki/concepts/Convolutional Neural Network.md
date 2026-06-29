---
type: concept
title: "Convolutional Neural Network"
alias: CNN
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - cnn
  - computer-vision
related:
  - "[[Deep Learning Architecture]]"
  - "[[Neural Network Layers]]"
  - "[[Deep Learning]]"
source: "[[arsitektur-populer-deep-learning]]"
---

# Convolutional Neural Network (CNN)

CNN adalah arsitektur deep learning dirancang khusus untuk memproses data gambar dan visual secara efisien melalui ekstraksi fitur hierarkis bertahap.

## Komponen Utama

| Layer | Fungsi |
|-------|--------|
| Convolutional | Filter bergerak mengekstrak fitur lokal (tepi, sudut, tekstur) — menghasilkan feature map |
| Pooling | Reduksi dimensi spasial via max pooling atau average pooling |
| Activation (ReLU) | Memperkenalkan non-linearitas ke jaringan |
| Fully Connected | Klasifikasi akhir berdasarkan fitur yang diekstraksi |

## Alur Kerja

```
Input Image → [Conv → ReLU → Pooling] × N → Flatten → Dense → Output
```

Lapisan konvolusi awal mendeteksi fitur sederhana (tepi). Lapisan lebih dalam menggabungkan fitur sederhana menjadi pola kompleks (wajah, objek).

## Penggunaan Umum

- Pengenalan gambar dan deteksi objek (pengenalan wajah)
- Klasifikasi citra (pengenalan angka tulisan tangan)
- Segmentasi gambar (pemisahan objek dari latar belakang)

## Keunggulan vs Dense Network

CNN memanfaatkan **local connectivity** dan **weight sharing** — filter yang sama diaplikasikan ke seluruh gambar, mengurangi parameter drastis dibanding fully connected network untuk data gambar.

## Sumber

- [[arsitektur-populer-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning
