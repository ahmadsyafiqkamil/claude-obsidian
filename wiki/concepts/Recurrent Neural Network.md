---
type: concept
title: "Recurrent Neural Network"
alias: RNN
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - rnn
  - sequence-modeling
  - nlp
related:
  - "[[Long Short-Term Memory]]"
  - "[[Deep Learning Architecture]]"
  - "[[Transformer Architecture]]"
source: "[[arsitektur-populer-deep-learning]]"
---

# Recurrent Neural Network (RNN)

RNN adalah arsitektur deep learning dirancang untuk memproses data berurutan (teks, audio, time series) melalui loop rekursif yang mempertahankan konteks dari waktu ke waktu.

## Karakteristik Utama

- **Recurrent loop**: Memungkinkan pengolahan data berurutan dan mempertahankan konteks temporal
- **Memory cell**: Pada LSTM dan GRU (variasi lebih canggih), menyimpan informasi jangka panjang

## Penggunaan Umum

- Pemrosesan bahasa alami: penerjemahan mesin, pembangkitan teks, analisis sentimen
- Pengenalan suara dan pengolahan sinyal audio
- Prediksi time series: peramalan harga saham, cuaca

## Keterbatasan RNN Dasar

RNN standar mengalami masalah **vanishing gradient** — informasi dari langkah waktu awal menghilang seiring panjang urutan. Ini menyulitkan pembelajaran dependensi jangka panjang.

## Variasi

| Arsitektur | Keunggulan |
|------------|------------|
| RNN dasar | Sederhana, urutan pendek |
| [[Long Short-Term Memory]] (LSTM) | Gate mechanism, konteks jangka panjang |
| GRU | Lebih ringan dari LSTM, performa serupa |

## Pergeseran ke Transformer

Untuk banyak tugas NLP, [[Transformer Architecture]] kini menggantikan RNN karena komputasi paralel dan penanganan dependensi jangka panjang yang lebih baik.

## Sumber

- [[arsitektur-populer-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning
