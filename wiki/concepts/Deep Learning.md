---
type: concept
title: "Deep Learning"
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - ai
  - machine-learning
related:
  - "[[Artificial Neural Networks]]"
  - "[[Deep Learning Architecture]]"
  - "[[Convolutional Neural Network]]"
  - "[[Recurrent Neural Network]]"
  - "[[Transformer Architecture]]"
  - "[[Forward Propagation]]"
  - "[[Backpropagation]]"
  - "[[Data Preprocessing Deep Learning]]"
  - "[[Image Augmentation]]"
  - "[[Text Tokenization and Padding]]"
source: "[[pengantar-deep-learning]]"
---

# Deep Learning

Deep learning adalah cabang kecerdasan buatan yang menggunakan algoritma terinspirasi dari cara otak manusia bekerja, diimplementasikan melalui [[Artificial Neural Networks]] (ANN).

## Definisi

ANN adalah model matematis terdiri dari tiga atau lebih lapisan neuron yang saling terhubung. Deep learning menggunakan konsep ANN dengan banyak lapisan (deep neural networks) untuk tugas seperti pengenalan gambar, suara, dan terjemahan bahasa.

Keunggulan utama: kemampuan belajar secara mandiri dari data besar dan kompleks melalui proses pelatihan (training) — penyesuaian bobot dan parameter secara iteratif berdasarkan umpan balik data.

## Sejarah Perkembangan

| Tahun | Milestone |
|-------|-----------|
| 1943 | Warren McCulloch & Walter Pitts — model jaringan saraf pertama |
| 1950-60an | Frank Rosenblatt — perceptron |
| 2006 | Geoffrey Hinton, Yoshua Bengio, Yann LeCun — backpropagation efisien |
| 2012 | AlexNet memenangkan ImageNet — titik balik deep learning |

GPU menjadi akselerator utama. Framework TensorFlow dan PyTorch mempermudah implementasi.

## Hubungan dengan Machine Learning

Deep learning adalah subset machine learning. Metode utama:
- [[Convolutional Neural Network]] (CNN) — analisis gambar
- [[Recurrent Neural Network]] (RNN) — data berurutan
- [[Transformer Architecture]] — NLP modern

## Tantangan

- Sulitnya interpretasi keputusan model (black box)
- Kebutuhan data besar untuk pelatihan
- Kompleksitas pengaturan parameter

## Sumber

- [[pengantar-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning

## Lihat Juga

- [[pra-pemrosesan-data-dl]] — teknik preprocessing data untuk deep learning: augmentasi gambar, tokenisasi teks, dan normalisasi
- [[rangkuman-pengenalan-dl]] — ringkasan pengenalan deep learning: sejarah, arsitektur, dan konsep fundamental
