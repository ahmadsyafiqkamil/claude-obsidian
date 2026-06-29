---
type: concept
title: "Transformer Architecture"
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - transformer
  - nlp
  - attention
related:
  - "[[Recurrent Neural Network]]"
  - "[[Long Short-Term Memory]]"
  - "[[Deep Learning Architecture]]"
  - "[[Deep Learning]]"
source: "[[arsitektur-populer-deep-learning]]"
---

# Transformer Architecture

Transformer adalah arsitektur deep learning berbasis **mekanisme atensi** (attention-based) untuk mengatasi ketergantungan jarak panjang, terutama dalam pemrosesan bahasa alami.

## Karakteristik Utama

- **Self-attention**: Memberikan bobot berbeda pada setiap token dalam urutan, memungkinkan model fokus pada kata-kata paling relevan tanpa terpengaruh jarak posisi
- **Encoder block**: Memproses input dan membangun representasi kontekstual
- **Decoder block**: Menghasilkan output berdasarkan representasi encoder (untuk tugas seperti terjemahan)

## Keunggulan atas RNN/LSTM

| Aspek | RNN/LSTM | Transformer |
|-------|----------|-------------|
| Komputasi | Sequential (lambat) | Paralel (cepat) |
| Dependensi jangka panjang | Terbatas (vanishing gradient) | Langsung via self-attention |
| Skalabilitas | Terbatas | Sangat baik (GPT, BERT) |

## Penggunaan Umum

- Penerjemahan mesin (seq2seq)
- Pemodelan bahasa (GPT, BERT, LLaMA)
- Rangkuman teks dan question answering
- Generasi kode

## Signifikansi

Diperkenalkan dalam paper "Attention Is All You Need" (Vaswani et al., 2017). Menjadi fondasi hampir semua LLM modern termasuk GPT-4, Claude, dan Gemini.

## Sumber

- [[arsitektur-populer-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning
