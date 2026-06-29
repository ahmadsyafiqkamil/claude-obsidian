---
type: concept
title: "Image Augmentation"
created: 2026-06-29
tags:
  - concept
  - deep-learning
  - computer-vision
  - tensorflow
status: developing
source: "[[pra-pemrosesan-data-dl]]"
related:
  - "[[Data Preprocessing Deep Learning]]"
  - "[[Convolutional Neural Network]]"
---

# Image Augmentation

Teknik memperbanyak data latih gambar dengan menduplikasi dan menambahkan variasi — rescale, rotation, zoom, flip, shear.

## TensorFlow ≤ 2.9

```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator

train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    horizontal_flip=True,
    shear_range=0.2,
    fill_mode='nearest'
)
```

## TensorFlow > 2.9

```python
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal_and_vertical"),
    layers.RandomRotation(0.2),
])
```

## Catatan Penting

- Augmentasi **tidak aktif** saat `Model.evaluate` atau `Model.predict` — hanya saat `Model.fit`
- Layer augmentasi disimpan bersama model saat `model.save`
- Menggunakan GPU sangat disarankan karena augmentasi berjalan paralel dengan layer lainnya
