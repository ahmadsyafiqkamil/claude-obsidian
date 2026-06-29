---
type: concept
title: "CNN 5-Step Pipeline"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - cnn
  - pipeline
status: developing
source: "[[pengenalan-cnn-detail]]"
related:
  - "[[Convolutional Neural Network]]"
  - "[[Weights Sharing in CNN]]"
  - "[[Neural Network Layers]]"
---

# CNN 5-Step Pipeline

Lima langkah kerja Convolutional Neural Network dalam memproses dan mengklasifikasi gambar.

| Langkah | Nama | Deskripsi |
|---------|------|-----------|
| 1 | **Patches** | Memecah gambar menjadi bagian-bagian kecil (jendela/patch) |
| 2 | **Small NN** | Setiap patch diproses jaringan saraf kecil dengan filter yang sama ([[Weights Sharing in CNN]]) |
| 3 | **Array Baru** | Hasil konvolusi dikumpulkan dalam array fitur baru |
| 4 | **Downsampling** | Pooling (max/average) mengurangi dimensi, overfitting, dan meningkatkan invariansi spasial |
| 5 | **Prediksi** | Fully connected → softmax → klasifikasi akhir dengan probabilitas tertinggi |

Setiap patch mendapat transformasi identik (weights sharing), memungkinkan CNN mengenali objek di mana pun posisinya dalam gambar.
