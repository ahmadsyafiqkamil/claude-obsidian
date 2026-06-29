---
type: concept
title: "Generative Adversarial Network"
alias: GAN
domain: artificial-intelligence
status: developing
tags:
  - deep-learning
  - gan
  - generative-ai
related:
  - "[[Deep Learning Architecture]]"
  - "[[Deep Learning]]"
source: "[[arsitektur-populer-deep-learning]]"
---

# Generative Adversarial Network (GAN)

GAN adalah arsitektur deep learning terdiri dari dua jaringan neural yang saling bersaing: **generator** dan **diskriminator**.

## Mekanisme Adversarial

```
Generator → [Data sintetis] → Diskriminator → Real/Fake?
                                     ↑
                              [Data asli]
```

- **Generator**: Menghasilkan data sintetis (gambar, audio) dari distribusi laten acak
- **Diskriminator**: Mencoba membedakan data asli dari data sintetis generator

Kedua jaringan dilatih bersamaan — generator terus membaik untuk "menipu" diskriminator, diskriminator terus membaik untuk mendeteksi tipu daya. Keseimbangan Nash tercapai saat generator menghasilkan data tak dapat dibedakan dari aslinya.

## Penggunaan Umum

- Menghasilkan gambar sintetis (deepfake wajah, seni generatif)
- Data augmentation untuk memperkaya dataset pelatihan
- Image-to-image translation (foto ke lukisan, siang ke malam)
- Super-resolution gambar

## Tantangan Pelatihan

- **Mode collapse**: Generator menghasilkan variasi terbatas
- **Training instability**: Keseimbangan generator-diskriminator sulit dicapai
- Membutuhkan tuning hiperparameter cermat

## Sumber

- [[arsitektur-populer-deep-learning]] — Dicoding Indonesia, Belajar Fundamental Deep Learning
