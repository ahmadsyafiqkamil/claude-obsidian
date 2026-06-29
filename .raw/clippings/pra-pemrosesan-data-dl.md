---
title: "Pra-pemrosesan Data untuk Model | Belajar Fundamental Deep Learning"
source: "https://www.dicoding.com/academies/185/tutorials/10019?from=10014"
author:
  - "[[Dicoding Indonesia]]"
published:
created: 2026-06-28
description:
tags:
  - "clippings"
---
## Pra-pemrosesan Data untuk Model

Neural Network (NN) dapat digunakan untuk klasifikasi gambar, deteksi objek, pengenalan suara, dan prediksi time series. Sebelum kita membahas lebih lanjut mengenai bagaimana mengimplementasikan itu semua, kita akan membahas terlebih dahulu tentang pemrosesan data. *Yup*, sebelum dipakai untuk pelatihan model, dataset yang Anda miliki haruslah sesuai dengan format yang dapat diterima oleh model.

Tahap pemrosesan data merupakan perubahan dari data mentah yang dibersihkan dan diatur untuk tahap pemrosesan berikutnya. Selama tahapan pemrosesan data, data mentah harus diperiksa dengan sangat cermat agar kita dapat memahami karakteristik dataset yang akan dilatih.

Dataset untuk setiap masalah tentunya berbeda. Contohnya pada dataset untuk klasifikasi gambar dan dataset untuk pemrosesan bahasa alami atau NLP. Pada dataset untuk klasifikasi gambar, sampelnya berupa kumpulan gambar atau matriks hasil representasi sebuah gambar seperti gambar berikut.

Berbeda dengan dataset NLP, sampelnya tentu berupa kalimat-kalimat yang terdiri dari sejumlah kata tertentu seperti gambar di bawah.

Tidak seperti manusia yang bisa mengenali gambar atau memahami kalimat secara langsung, kita perlu melakukan pemrosesan dahulu agar data tersebut siap diterima oleh model.

Secara umum, ada empat tahapan yang perlu kita lakukan dalam memproses data.

1. Ubah dataset ke dalam bentuk larik/array. *Yup*, larik berisi angka-angka adalah format data yang dapat diterima oleh model kita. Sama seperti pada kelas Belajar Machine Learning untuk Pemula, model kita menerima gambar sebagai matriks atau larik 2 dimensi.
2. Pisahkan atribut dan label pada data. Model kita akan mempelajari korelasi antara atribut dan label pada dataset.
3. Ubah skala data dalam skala yang seragam. Nama teknik ini adalah normalization. Normalization dilakukan karena NN akan memproses nilai yang berada di antara 0 dan 1 sehingga membuat komputasi lebih optimal. Teknik ini dibutuhkan sehingga komputasi lebih optimal.
4. Terakhir, pisahkan dataset ke dalam data latih dan data uji. Betul, kita memerlukan data uji untuk mengevaluasi kinerja dari model yang telah kita latih.

Selanjutnya setelah memahami bagaimana tahapan awal memproses data secara umum, tentunya Anda membayangkan cara melakukan pemrosesan data tersebut. Mari kita bahas pemrosesan pada data gambar dan bahasa alami secara saksama agar lebih terbayang dan mahir dalam menguasai elemen ini.

### Pemrosesan Data Gambar

Kita akan menerapkan *data augmentation* untuk data latih dan data validasi agar dataset yang Anda miliki dapat diterima dengan baik oleh model sebelum pelatihan dimulai. Pada tahap ini, Anda memiliki dua opsi yang bisa digunakan untuk melakukan augmentasi, kondisi ini menyesuaikan dengan versi TensorFlow yang Anda instal pada komputer atau environment Anda.

Kasus pertama jika menggunakan TensorFlow versi <= 2.9, Anda dapat melakukan augmentasi menggunakan fungsi ImageDataGenerator untuk data latih dan data validasi. Saat ini, peringatan penghentian penggunaan akan muncul ketika Anda menggunakan fungsi tersebut.

Namun, untuk kasus kedua ketika menggunakan TensorFlow versi > 2.9, Anda dapat menggunakan tf.data dan layer augmentasi yang secara langsung dapat dimasukkan pada jajaran layer sequentials Anda.

Sampai di sini sudah mulai cukup menantang, ‘kan? Jangan risau terlebih dahulu, mari kita bahas bersama-sama implementasi dari kedua kasus di atas agar data yang kita miliki dapat melakukan proses pelatihan dengan baik.

#### Data Augmentasi dengan TensorFlow <= 2.9

Seperti yang sudah Anda pelajari sebelumnya, pada kasus ini kita dapat menggunakan fungsi ImageDataGenerator. ImageDataGenerator merupakan sebuah fungsi yang sangat berguna untuk mempersiapkan data latih dan data validasi. Beberapa kemudahan yang disediakan ImageDataGenerator antara lain, preprocessing data, pelabelan sampel otomatis, dan augmentasi gambar.

Augmentasi gambar merupakan sebuah teknik yang dapat digunakan untuk memperbanyak data latih dengan cara menduplikasi gambar yang telah ada dengan menambahkan variasi tertentu seperti *rescale, rotation, zoom*, dan lain sebagainya. Anda juga dapat melihat detail mengenai augmentasi gambar menggunakan ImageDataGenerator pada tautan [di sini](https://keras.io/preprocessing/image/).

Kode berikut menunjukkan proses augmentasi gambar pada setiap sampel di dataset.

from tensorflow.keras.preprocessing.image import ImageDataGenerator

```
from tensorflow.keras.preprocessing.image import ImageDataGenerator train_datagen = ImageDataGenerator(                    rescale=1./255,                    rotation_range=20,                    horizontal_flip=True,                    shear_range = 0.2,                    fill_mode = 'nearest') test_datagen = ImageDataGenerator(                    rescale=1./255)
```

Fungsi di atas berguna untuk memperbanyak data latih dengan mengubah kondisi gambar menyesuaikan dengan layer yang digunakan, berikut hasil gambar yang telah dilakukan augmentasi.

Terlihat sangat mudah, bukan? Walaupun terlihat mudah tetapi fungsi ini berguna untuk meningkatkan keberagaman data pelatihan dengan cara membuat variasi dari data yang ada. Tujuan utamanya adalah untuk meningkatkan kinerja model dengan mengurangi overfitting dan meningkatkan generalisasi.

#### Data Augmentasi dengan TensorFlow > 2.9

Setelah Anda mempelajari penggunaan data augmentasi menggunakan versi lama, tahapan ini mungkin terasa *useless* karena Anda sudah dapat menjalankan augmentasi dengan lancar dan mudah. Namun, metode kedua ini akan sangat berguna ketika perusahaan atau proyek Anda memiliki kebutuhan untuk menggunakan library terbaru. Selain itu, kasus ini juga akan membantu Anda ketika TensorFlow versi lama sudah deprecated dan tidak bisa digunakan lagi.

Dengan menggunakan TensorFlow versi > 2.9, Anda dapat mengubah ukuran gambar dan piksel secara eksplisit dengan memanfaatkan layers sequential seperti kode berikut.

```
IMG_SIZE = 180 resize_and_rescale = tf.keras.Sequential([  layers.Resizing(IMG_SIZE, IMG_SIZE),  layers.Rescaling(1./255)])
```

Selanjutnya, Anda harus melakukan data augmentasi menggunakan berbagai macam fungsi augmentasi, seperti **tf.keras.layers.Resizing**, **tf.keras.layers.Rescaling**, **tf.keras.layers.RandomFlip**, **tf.keras.layers.RandomRotation**, dan lain sebagainya. Penggunaan fungsi menyesuaikan kebutuhan dan karakteristik dataset yang Anda miliki ketika membangun sebuah model machine learning. Berikut penggunaan beberapa layer augmentasi dengan menggunakan tf.keras.layers.

```
data_augmentation = tf.keras.Sequential([  layers.RandomFlip("horizontal_and_vertical"),  layers.RandomRotation(0.2),])
```

Pada tahap terakhir, Anda perlu memasukkan data augmentasi tersebut pada layer sequentials ketika membangun struktur neural network agar seluruh dataset yang ada dapat diproses dan melakukan pelatihan dengan baik. Berikut contoh kode yang dapat Anda lakukan untuk menerapkan data augmentasi.

```
model = tf.keras.Sequential([  # Menambahkan processing image yang telah didefinisikan sebelumnya  resize_and_rescale,  data_augmentation,  layers.Conv2D(16, 3, padding='same', activation='relu'),  layers.MaxPooling2D(),  # Sesuaikan sisa layer dengan kasus yang Anda miliki])
```

Pada kasus ini, ada tiga hal penting yang perlu Anda perhatikan ketika membangun model neural network menggunakan TensorFlow versi > 2.9.

1. Data augmentasi akan berjalan pada device yang digunakan, baik itu lokal maupun cloud environment seperti Google Colab atau Kaggle Kernel. Proses ini akan berjalan secara bersamaan dengan eksekusi layer lainnya. Hal ini menyebabkan komputasi yang dilakukan akan lebih berat sehingga penggunaan GPU akan lebih menguntungkan.
2. Ketika Anda mengekspor model menggunakan model.save, layer processing ini akan disimpan bersama dengan layer lainnya. Jika Anda nantinya menggunakan model ini, model ini akan secara otomatis menstandarkan gambar (sesuai dengan konfigurasi layer Anda). Hal ini dapat membantu Anda untuk mengimplementasikan ulang logika tersebut di sisi server dengan lebih mudah.
3. Data augmentasi tidak akan aktif pada saat pengujian sehingga gambar input hanya akan ditambah selama pemanggilan Model.fit (bukan Model.evaluate atau Model.predict).

Dengan menggunakan kasus kedua ini, komputasi yang dilakukan akan lebih berat karena berjalan bersamaan dengan layer lainnya ketika proses pelatihan dijalankan. Namun, Anda tidak perlu khawatir karena ini terjadi hanya pada saat proses pelatihan saja.

Sampai di sini, Anda sudah dapat melakukan augmentasi terhadap data dengan tipe gambar (unstructured data) sehingga data yang Anda miliki sudah dapat diterima dengan baik oleh model yang akan dibangun. Selanjutnya, Anda akan mempelajari pemrosesan data bahasa agar dapat membuat model dengan tipe lainnya. Silakan rehat sejenak dan mengambil secangkir kopi untuk menemani perjalanan indah yang akan Anda jalani pada tahap berikutnya, ya!

### Pemrosesan Data Bahasa

Halo pelopor machine learning masa depan! Apakah Anda sudah menyiapkan secangkir kopi dan semangat yang membara untuk mengarungi perjalanan terakhir kita pada materi ini? Tarik jangkar dan mari kita berlayar!

Pada kasus ini, kita akan belajar pemrosesan bahasa manusia. Berbeda dengan pemrosesan gambar yang telah kita pelajari, pemrosesan teks memiliki tantangan tersendiri, seperti perbedaan panjang teks, bahasa, serta bagaimana merepresentasikan teks ke dalam format yang dapat diterima oleh sebuah model.

Mungkin tebersit di benak Anda sebuah pertanyaan, “Bagaimana komputer memproses sebuah kalimat?” Jika Pertanyaan tersebut muncul, Anda berada pada jalur yang tepat! Berikut garis besar cara komputer untuk memproses sebuah kalimat.

Gambar di atas merepresentasikan langkah umum pemrosesan data yang telah kita bahas sebelumnya. Hal ini karena komputer memiliki sifat tidak seperti manusia yang bisa mengenali gambar atau memahami kalimat secara langsung, kita perlu melakukan pemrosesan dahulu agar data tersebut siap diterima oleh model. Sekarang saatnya kita mempelajari tahapan untuk mengubah kata atau kalimat menjadi angka atau larik sehingga dapat diterima oleh model neural network.

Tanpa berlama-lama lagi*,* mari kita langsung bahas bersama pemrosesan data yang perlu dilakukan untuk data bahasa alami pada kode berikut.

```
sentences = ["I love my cat"] tokenizer = Tokenizer(num_words = 100)tokenizer.fit_on_texts(sentences)sequences = tokenizer.texts_to_sequences(sentences) print(tokenizer.word_index)print(sequences)###############################################Output{'i': 1, 'love': 2, 'my': 3, 'cat': 4}[[1, 2, 3, 4]]
```

Dengan menggunakan kode di atas, Anda sudah dapat mengubah kalimat menjadi sebuah larik/array yang dapat digunakan untuk proses pelatihan model neural network. Tokenizer digunakan untuk membangun indeks kata dari korpus teks. Ini membuat kamus dari kata-kata yang ada dalam teks dan memberi indeks unik untuk setiap kata. Sedangkan texts\_to\_sequences bertugas untuk mengonversi teks menjadi urutan indeks numerik berdasarkan kamus yang dibuat.

Namun, kondisi tersebut masih ringkih dan belum mendapatkan performa yang cukup baik karena bentuk dari data yang Anda miliki masih beragam dan terbatas pada kata-kata yang tidak termasuk dalam dataset.

Untuk mengatasi permasalahan tersebut, kita dapat menggunakan fungsi oov\_token dan padding agar dataset yang Anda miliki lebih baik karena memiliki shape yang serupa.

Pada kasus ini, oov\_token berguna untuk mengatasi kata yang tidak termasuk pada tokenizer sehingga akan diubah menjadi *special value* yang dapat kita tentukan sendiri. Oleh karena itu, model dapat melakukan perhitungan ketika menemukan kata yang tidak terlihat. Lalu, padding berguna untuk menyesuaikan semua kamus dalam satu urutan yang serupa. Jadi, semua urutan memiliki panjang yang sama. Berikut merupakan contoh implementasi penggunaan oov\_token dan padding secara bersamaan.

```
sentences = ["I love my cat",             "Do you think my cat is cute?"]  tokenizer = Tokenizer(num_words = 100, oov_token="<OOV>")tokenizer.fit_on_texts(sentences)sentences = ["I love my cat",             "Do you think my cat is cute?",             "Additional cat for you"]sequences = tokenizer.texts_to_sequences(sentences) padded = pad_sequences(sequences, padding="post", truncating="post", maxlen=10) print("Tokenizer: ",tokenizer.word_index)print("Sequences: ",sequences)print("Padded: ",padded) ###########################OutputTokenizer:  {'<OOV>': 1, 'my': 2, 'cat': 3, 'i': 4, 'love': 5, 'do': 6, 'you': 7, 'think': 8, 'is': 9, 'cute': 10}Sequences:  [[4, 5, 2, 3], [6, 7, 8, 2, 3, 9, 10], [1, 3, 1, 7]]Padded:  [[ 4  5  2  3  0  0  0  0  0  0] [ 6  7  8  2  3  9 10  0  0  0] [ 1  3  1  7  0  0  0  0  0  0]]
```

Seperti yang Anda lihat pada kode di atas, dengan menggunakan oov\_token dan padding, kita akan mendapatkan sebuah larik/array yang memiliki ukuran sama sehingga memberikan performa yang lebih baik ketika pelatihan model dijalankan. Hal ini dikarenakan padding merupakan teknik yang digunakan untuk memastikan bahwa semua urutan teks (*sequences*) memiliki panjang yang sama. Ini penting karena sebagian besar model machine learning, terutama neural networks, mengharuskan input mereka memiliki ukuran yang konsisten.

Sampai pada tahap ini, Anda sudah memiliki sebuah data yang siap untuk melakukan pelatihan dan dapat diterima dengan baik oleh layer embedding. Ngomong-ngomong, layer embedding ini berguna untuk mengubah larik menjadi representasi kata yang memungkinkan kata-kata dengan arti yang sama memiliki representasi yang sama. Sedikit bocoran layer embedding ini akan mengubah larik/array menjadi seperti berikut.

*Huftt,* seru ya? Tidak terasa secangkir kopi yang telah Anda siapkan sudah dingin, tetapi tentunya semangat belajar Anda masih membara, bukan? Setelah memahami bagaimana tahapan awal memproses data, di materi selanjutnya, Diana dan Ryan akan belajar membuat model neural network pertama di kelas ini dan melakukan inference atau prediksi menggunakan Keras. Tetap semangat dan terus haus akan ilmu, ya.