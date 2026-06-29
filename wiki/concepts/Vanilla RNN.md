---
type: concept
title: "Vanilla RNN"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - rnn
status: developing
source: "[[pengenalan-rnn-detail]]"
related:
  - "[[Recurrent Neural Network]]"
  - "[[Long Short-Term Memory]]"
  - "[[Gated Recurrent Unit]]"
---

# Vanilla RNN

Bentuk dasar Recurrent Neural Network — setiap neuron memiliki koneksi kembali ke dirinya sendiri, memungkinkan output sebelumnya menjadi input untuk langkah waktu berikutnya.

## Karakteristik

- Sederhana dan mudah diimplementasikan
- Setiap neuron memiliki **recurrent loop** ke dirinya sendiri
- Output dari timestep t-1 menjadi input di timestep t

## Keterbatasan

- **Vanishing gradient** — informasi dari langkah waktu yang jauh "menghilang" selama backpropagation
- Tidak efektif untuk data berurutan panjang

## Solusi

Kelemahan Vanilla RNN memotivasi pengembangan:
- [[Long Short-Term Memory|LSTM]] — gate mechanism untuk kontrol aliran informasi
- [[Gated Recurrent Unit|GRU]] — versi lebih sederhana dari LSTM
