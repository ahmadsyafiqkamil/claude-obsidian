---
type: concept
title: "Forward Propagation"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - neural-network
  - fundamentals
status: developing
source: "[[rangkuman-pengenalan-dl]]"
related:
  - "[[Backpropagation]]"
  - "[[Artificial Neural Networks]]"
  - "[[Deep Learning]]"
---

# Forward Propagation

Proses menghitung output neural network berdasarkan input — data mengalir maju dari input layer ke output layer.

## Langkah

1. **Input data** — gambar (piksel), teks (token), atau nilai numerik dimasukkan
2. **Neuron + Bobot** — setiap input × bobot + bias
3. **Fungsi aktivasi** — weighted sum diproses melalui ReLU/sigmoid/tanh
4. **Output** — aktivasi menjadi input untuk layer berikutnya, berulang hingga output layer

Output dari forward propagation adalah prediksi model yang akan dibandingkan dengan nilai target sebenarnya dalam proses [[Backpropagation]].
