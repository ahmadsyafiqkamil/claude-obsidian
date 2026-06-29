---
type: concept
title: "Long Short-Term Memory"
alias: LSTM
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - lstm
  - rnn
  - sequence-modeling
related:
  - "[[Recurrent Neural Network]]"
  - "[[Transformer Architecture]]"
  - "[[Deep Learning Architecture]]"
source: "[[arsitektur-populer-deep-learning]]"
---

# Long Short-Term Memory (LSTM)

LSTM adalah jenis [[Recurrent Neural Network]] yang ditingkatkan dengan mekanisme **gate** untuk mengatasi masalah hilangnya informasi jangka panjang dalam pembelajaran berurutan.

## Mekanisme Gate

| Gate | Fungsi |
|------|--------|
| **Forget gate** | Memutuskan informasi mana yang "dilupakan" dari memori jangka panjang |
| **Input gate** | Mengontrol aliran informasi baru yang disimpan ke memori |
| **Output gate** | Menentukan bagian memori yang jadi output saat ini |

Gate-gate ini memungkinkan LSTM mempertahankan informasi relevan selama ratusan langkah waktu — mengatasi vanishing gradient yang menjadi kelemahan RNN dasar.

## Penggunaan Umum

- NLP yang membutuhkan pemahaman konteks dalam: generasi teks natural
- Pengenalan wicara dengan pengertian konteks temporal
- Prediksi time series kompleks

## LSTM vs GRU

GRU (Gated Recurrent Unit) adalah alternatif lebih ringan dengan dua gate (reset dan update). Performa serupa dengan LSTM pada banyak tugas, namun lebih efisien secara komputasi.

## Konteks Historis

LSTM diperkenalkan oleh Hochreiter & Schmidhuber (1997) sebagai solusi untuk vanishing gradient. Menjadi arsitektur dominan NLP sebelum digantikan [[Transformer Architecture]] (2017+).

## Sumber

- [[arsitektur-populer-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning
