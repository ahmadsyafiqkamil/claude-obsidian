---
type: concept
title: "Text Tokenization and Padding"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - nlp
  - tensorflow
status: developing
source: "[[pra-pemrosesan-data-dl]]"
related:
  - "[[Data Preprocessing Deep Learning]]"
  - "[[Recurrent Neural Network]]"
---

# Text Tokenization and Padding

Teknik mengubah teks menjadi array numerik yang bisa diproses model neural network.

## Tokenization

```python
from tensorflow.keras.preprocessing.text import Tokenizer

tokenizer = Tokenizer(num_words=100, oov_token="<OOV>")
tokenizer.fit_on_texts(sentences)
sequences = tokenizer.texts_to_sequences(sentences)
```

Membangun indeks kata dari korpus teks → mengonversi teks ke urutan indeks numerik.

## OOV Token

`oov_token="<OOV>"` — kata yang tidak ada di vocabulary tokenizer diganti dengan special token, bukan diabaikan.

## Padding

```python
from tensorflow.keras.preprocessing.sequence import pad_sequences

padded = pad_sequences(sequences, padding="post", truncating="post", maxlen=10)
```

Menyamakan panjang semua sequence agar input memiliki dimensi konsisten — penting karena neural network mengharuskan ukuran input yang seragam.
