---
type: concept
title: "Neural Network Layers"
domain: artificial-intelligence
status: developing
tags:
  - neural-networks
  - deep-learning
  - layers
related:
  - "[[Deep Learning Architecture]]"
  - "[[Convolutional Neural Network]]"
  - "[[Recurrent Neural Network]]"
  - "[[CNN 5-Step Pipeline]]"
  - "[[Weights Sharing in CNN]]"
source: "[[arsitektur-deep-learning]]"
---

# Neural Network Layers

Referensi lengkap jenis-jenis lapisan dalam arsitektur deep learning beserta fungsi dan penggunaan masing-masing.

## Fully Connected Layer (Dense Layer)

- **Deskripsi**: Setiap neuron terhubung ke semua neuron lapisan sebelumnya dan sesudahnya
- **Fungsi**: Mempelajari hubungan kompleks antara fitur input
- **Umum di**: Multi-layer perceptron, bagian akhir CNN untuk klasifikasi

## Convolutional Layer (Conv Layer)

- **Deskripsi**: Memproses data spasial menggunakan filter/kernel yang bergerak pada input
- **Karakteristik**: Mengekstrak fitur lokal (tepi, sudut, tekstur)
- **Umum di**: CNN untuk pengenalan gambar, segmentasi objek

## Batch Normalization Layer

- **Deskripsi**: Normalisasi batch untuk stabilisasi pelatihan
- **Karakteristik**:
  1. Hitung mean dan variance tiap batch
  2. Normalisasi input untuk mengurangi internal covariate shift
  3. Transformasi linier pada setiap mini-batch
- **Umum di**: Setelah lapisan aktivasi; memungkinkan learning rate lebih tinggi

## Recurrent Layer (RNN / LSTM / GRU)

- **Deskripsi**: Memproses data berurutan dengan mempertahankan state dari waktu ke waktu
- **Karakteristik**: Mengatasi dependensi jarak jauh
- **Umum di**: NLP, pengenalan suara, pemrosesan time series

Lihat [[Recurrent Neural Network]] dan [[Long Short-Term Memory]] untuk detail.

## Dropout Layer

- **Deskripsi**: Regularisasi dengan menonaktifkan neuron secara acak selama training
- **Karakteristik**: Probabilitas penonaktifan tertentu; mencegah neuron terlalu bergantung pada subset tertentu
- **Umum di**: Di antara hidden layers; efektif mencegah overfitting

## Pooling Layer

- **Deskripsi**: Mengurangi dimensi spasial feature map
- **Karakteristik**: Max pooling (nilai maksimum) atau average pooling (rata-rata) dalam suatu area
- **Umum di**: Setelah conv layer dalam CNN; hemat komputasi

## Flatten Layer

- **Deskripsi**: Mengubah tensor multidimensi menjadi vektor 1D
- **Karakteristik**: Konversi representasi spasial ke linear
- **Umum di**: Sebelum fully connected layer di akhir arsitektur CNN

## Sumber

- [[arsitektur-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning

## Lihat Juga

- [[pengenalan-cnn-detail]] — penjelasan detail 5-step pipeline CNN dari input gambar hingga output klasifikasi
