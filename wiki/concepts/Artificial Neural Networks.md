---
type: concept
title: "Artificial Neural Networks"
domain: artificial-intelligence
status: developing
tags:
  - neural-networks
  - deep-learning
  - ai
related:
  - "[[Deep Learning]]"
  - "[[Deep Learning Architecture]]"
  - "[[Neural Network Layers]]"
  - "[[Forward Propagation]]"
  - "[[Backpropagation]]"
source: "[[pengantar-deep-learning]]"
---

# Artificial Neural Networks

Artificial Neural Networks (ANN) adalah model matematis terdiri dari tiga atau lebih lapisan neuron yang saling terhubung, meniru cara otak manusia memproses informasi.

## Struktur Dasar

ANN terdiri dari:
- **Input layer** — menerima data masukan
- **Hidden layers** — memproses dan mengekstrak fitur
- **Output layer** — menghasilkan prediksi/klasifikasi

Lihat [[Neural Network Layers]] untuk detail setiap jenis lapisan.

## Prinsip Kerja

1. Data masukan diteruskan dari input layer ke hidden layers
2. Setiap neuron menerapkan fungsi aktivasi pada input tertimbang
3. Bobot disesuaikan melalui **backpropagation** berdasarkan error prediksi
4. Proses iteratif ini disebut **training**

## Hubungan ke Deep Learning

[[Deep Learning]] adalah penggunaan ANN dengan banyak lapisan (deep neural networks). "Deep" merujuk pada kedalaman lapisan — semakin dalam, semakin abstrak fitur yang dipelajari.

## Sumber

- [[pengantar-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning

## Lihat Juga

- [[rangkuman-pengenalan-dl]] — ringkasan pengenalan deep learning: sejarah, arsitektur, dan konsep fundamental
