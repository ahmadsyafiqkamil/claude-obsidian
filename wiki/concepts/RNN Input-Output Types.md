---
type: concept
title: "RNN Input-Output Types"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - rnn
  - nlp
status: developing
source: "[[pengenalan-rnn-detail]]"
related:
  - "[[Recurrent Neural Network]]"
  - "[[Vanilla RNN]]"
---

# RNN Input-Output Types

Empat tipe Recurrent Neural Network berdasarkan panjang input dan output.

| Tipe | Input | Output | Use Case |
|------|-------|--------|----------|
| **One-to-one** | Tunggal | Tunggal | ML sederhana, klasifikasi statis |
| **One-to-many** | Tunggal | Banyak | Image captioning (gambar → deskripsi) |
| **Many-to-one** | Sekuens | Tunggal | Klasifikasi sentimen (teks → kategori) |
| **Many-to-many** | Sekuens | Sekuens | Terjemahan mesin (teks → teks) |

Fleksibilitas panjang I/O ini yang membedakan RNN dari feedforward network dan membuatnya cocok untuk data berurutan.
