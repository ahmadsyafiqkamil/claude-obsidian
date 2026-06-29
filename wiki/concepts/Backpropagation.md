---
type: concept
title: "Backpropagation"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - neural-network
  - fundamentals
status: developing
source: "[[rangkuman-pengenalan-dl]]"
related:
  - "[[Forward Propagation]]"
  - "[[Artificial Neural Networks]]"
  - "[[Deep Learning]]"
---

# Backpropagation

Proses mengoptimalkan bobot dan bias jaringan untuk meminimalkan error prediksi — data "mengalir mundur" dari output ke input.

## Langkah

1. **Perhitungan Error** — output prediksi vs nilai target menggunakan loss function (MSE, cross-entropy)
2. **Backward Pass** — gradien dihitung menggunakan chain rule dari output layer mundur ke input layer
3. **Update Bobot** — bobot diperbarui melawan arah gradien (gradient descent), learning rate menentukan besar perubahan
4. **Iterasi** — ulangi forward → error → backward → update untuk setiap batch, banyak epoch

## Algoritma Pengembangan

Backpropagation dikembangkan oleh **Geoffrey Hinton, Yoshua Bengio, dan Yann LeCun** pada 2006 — breakthrough yang memungkinkan pelatihan deep neural networks secara efisien.

Kombinasi forward propagation (prediksi) + backpropagation (optimasi) adalah inti dari cara neural network belajar dari data.
