---
type: concept
title: "Deep Learning Architecture"
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - architecture
  - neural-networks
related:
  - "[[Deep Learning]]"
  - "[[Neural Network Layers]]"
  - "[[Convolutional Neural Network]]"
  - "[[Recurrent Neural Network]]"
  - "[[Transformer Architecture]]"
  - "[[Forward Propagation]]"
  - "[[Backpropagation]]"
source: "[[arsitektur-deep-learning]]"
---

# Deep Learning Architecture

Arsitektur deep learning adalah struktur atau tata letak jaringan saraf buatan yang kompleks, terdiri dari berbagai lapisan yang memproses dan mentransformasikan data masukan menjadi keluaran yang diinginkan.

## Prinsip Utama

Setiap lapisan mengekstrak fitur yang semakin abstrak seiring meningkatnya kedalaman jaringan. Kedalaman lebih besar = kemampuan mempelajari pola lebih kompleks.

## Struktur Umum

```
Input Layer → Hidden Layers (stacked) → Output Layer
```

### Input Layer

Menerima data masukan (gambar, teks, data numerik). Tidak melakukan komputasi kompleks — hanya meneruskan data ke hidden layers.

Jumlah neuron = dimensi data masukan. Contoh: gambar 32x32 RGB = 32x32x3 = 3.072 neuron.

### Hidden Layers

Lapisan antara input dan output. Jenis-jenis:

| Layer | Fungsi |
|-------|--------|
| Fully Connected (Dense) | Mempelajari hubungan kompleks antar fitur |
| Convolutional | Ekstraksi fitur spasial (gambar) |
| Batch Normalization | Stabilisasi & percepatan pelatihan |
| Recurrent (RNN/LSTM/GRU) | Memproses data berurutan |
| Dropout | Regularisasi, mencegah overfitting |
| Pooling | Reduksi dimensi spasial |
| Flatten | Konversi tensor multidimensi ke vektor 1D |

Lihat [[Neural Network Layers]] untuk detail setiap jenis.

### Output Layer

Layer terakhir yang menghasilkan prediksi. Jumlah neuron bergantung pada tugas:
- **Klasifikasi biner**: 1 neuron (probabilitas 0-1)
- **Klasifikasi multiclass**: N neuron (1 per kelas)
- **Regresi**: 1 neuron (nilai kontinu)

## Arsitektur Populer

- [[Convolutional Neural Network]] — gambar dan visual
- [[Recurrent Neural Network]] — data berurutan
- [[Long Short-Term Memory]] — konteks jangka panjang
- [[Generative Adversarial Network]] — generasi data sintetis
- [[Transformer Architecture]] — NLP dan atensi

## Sumber

- [[arsitektur-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning

## Lihat Juga

- [[rangkuman-pengenalan-dl]] — ringkasan pengenalan deep learning: sejarah, arsitektur, dan konsep fundamental
