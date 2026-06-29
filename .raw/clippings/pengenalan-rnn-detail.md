---
title: "Pengenalan Recurrent Neural Network | Belajar Fundamental Deep Learning"
source: "https://www.dicoding.com/academies/185/tutorials/27125?from=27120"
author:
  - "[[Dicoding Indonesia]]"
published:
created: 2026-06-28
description:
tags:
  - "clippings"
---
## Pengenalan Recurrent Neural Network

Recurrent neural network (RNN) adalah jenis arsitektur jaringan saraf yang dirancang untuk memproses data berurutan, yakni ketika hubungan antar elemen dalam urutan memiliki arti atau konteks temporal. RNN biasanya digunakan pada data teks (sekuens kata), audio (gelombang suara), deret waktu (data berurutan terkait waktu), dan lainnya. Keunggulan utama RNN adalah kemampuannya untuk "mengingat" atau mempertahankan informasi tentang sejarah (konteks) dari urutan data yang diproses.

Anda dapat menemukan RNN digunakan dalam aplikasi populer, seperti Siri, pencarian suara, dan Google Translate. Sebagaimana halnya jaringan saraf feedforward dan convolutional neural networks (CNNs), RNN juga belajar dari data pelatihan. RNN mengambil informasi dari input dan output saat ini yang memungkinkannya untuk "mengingat" konteks sebelumnya.

Tujuan utama RNN adalah memahami dan memproses data yang memiliki struktur urutan atau jangka waktu. Hal ini membuat RNN sangat berguna dalam aplikasi-aplikasi yang melibatkan data berurutan, yaitu pemrosesan bahasa alami atau *natural language processing* (NLP), pemodelan bahasa, prediksi deret waktu (*time series*), pengenalan suara, dan lainnya. RNN memungkinkan jaringan saraf untuk memahami konteks temporal dan menghasilkan prediksi atau output berdasarkan urutan masukan yang diberikan.

### Tipe-Tipe RNN

Jaringan feedforward memiliki satu input dan satu output, sementara Recurrent neural network (RNN) lebih fleksibel karena panjang input dan output dapat diubah-ubah. Fleksibilitas ini memungkinkan RNN untuk menghasilkan musik, klasifikasi sentimen, dan terjemahan mesin.

Ada empat tipe RNN berdasarkan panjang input dan output yang berbeda.

1. *One-to-one* adalah jaringan neural sederhana yang umum digunakan untuk masalah pembelajaran mesin dengan satu input dan satu output.
2. *One-to-many* memiliki satu input dan banyak output. Ini biasanya digunakan untuk menghasilkan deskripsi gambar.
3. *Many-to-one* mengambil urutan multiple inputs dan memprediksi satu output. Populer dalam klasifikasi sentimen, yaitu ketika inputnya berupa teks dan output-nya adalah kategori.
4. *Many-to-many* menggunakan multiple inputs dan outputs. Aplikasi paling umumnya adalah terjemahan mesin.

### Jenis-Jenis RNN

RNN merupakan salah satu arsitektur jaringan saraf yang sangat berguna dalam memproses data berurutan. Namun, terkadang satu model RNN saja tidak cukup untuk menangani semua tugas yang berbeda. Karena itu, RNN telah berkembang menjadi beberapa jenis yang dibedakan berdasarkan bentuk dasar dan cara kerja masing-masing. Setiap jenis RNN ini dirancang untuk menangani situasi atau masalah tertentu dengan lebih baik.

Sebagai contoh, ada jenis RNN sederhana yang disebut Vanilla RNN, yang memiliki keterbatasan dalam mengingat informasi dari waktu ke waktu. Kemudian, ada jenis RNN yang lebih canggih, seperti *long short-term memory* (LSTM) dan *gated recurrent unit* (GRU), yang dirancang khusus untuk mengatasi masalah hilangnya informasi jangka panjang. Dengan memahami perbedaan dan kelebihan masing-masing jenis RNN, pengembang dan peneliti dapat memilih model yang paling sesuai untuk tugas mereka.

1. **RNN Sederhana (Vanilla RNN)**  
	RNN sederhana, atau sering disebut sebagai vanilla RNN, adalah bentuk dasar dari arsitektur recurrent neural network. Pada RNN sederhana, setiap neuron memiliki sambungan kembali ke dirinya sendiri. Ini memungkinkan RNN sederhana untuk menggunakan output sebelumnya sebagai input pada langkah waktu berikutnya dalam urutan data.  
	Meskipun RNN sederhana tidaklah rumit dan mudah diimplementasikan, masalah *vanishing gradient* menjadi kendala utama dalam aplikasi pada data berurutan yang panjang. Inovasi seperti long short-term memory dan gated recurrent unit dikembangkan untuk mengatasi masalah ini dan meningkatkan kemampuan RNN dalam memodelkan hubungan.
2. **Long Short-Term Memory (LSTM)**  
	LSTM adalah varian RNN yang dikembangkan untuk mengatasi masalah vanishing gradient. LSTM memiliki struktur yang lebih kompleks dengan mekanisme gerbang (*gate mechanism*) yang memungkinkan model untuk memilih dan melupakan informasi secara selektif. Hal ini membuat LSTM efektif dalam memahami konteks jangka panjang pada data berurutan, seperti pengenalan teks atau prediksi deret waktu.  
	Dengan menggunakan mekanisme gerbang ini, LSTM dapat mengontrol aliran informasi lebih baik dan mempertahankan informasi yang relevan dalam cell state. Hal ini memungkinkan LSTM untuk efektif mengatasi masalah vanishing gradient dan memodelkan konteks jangka panjang pada data berurutan, seperti dalam pengenalan teks atau prediksi deret waktu.
3. **Gated Recurrent Unit**  
	Gated recurrent unit (GRU) adalah variasi dari LSTM karena keduanya memiliki kemiripan dalam desain. Dalam beberapa kasus, keduanya pun membuat hasil yang serupa.  
	  
	GRU menggunakan gerbang pembaruan (*update gate*) dan gerbang reset (*reset gate*) untuk mengatasi masalah vanishing gradient. Gerbang-gerbang ini memutuskan informasi yang penting dan meneruskannya ke output. Gerbang-gerbang ini dapat dilatih untuk menyimpan informasi dari waktu yang lama tanpa menghilang seiring berjalannya waktu atau menghapus informasi tidak relevan.  
	Berbeda dengan LSTM, GRU tidak memiliki cell state. GRU hanya memiliki state tersembunyi (*hidden state*). Lalu, sebab arsitekturnya yang sederhana, GRU memiliki waktu pelatihan lebih singkat dibandingkan model LSTM. Arsitektur GRU mudah dipahami karena mengambil input xt dan state tersembunyi dari timestamp sebelumnya ht-1, lalu menghasilkan state tersembunyi baru ht.

### Cara Kerja RNN

**Langkah 1: Pengolahan Input**

RNN menerima input berurutan, seperti kata-kata dalam sebuah kalimat atau frame pada video. Setiap elemen input direpresentasikan dengan vektor fitur numerik. Misalnya, dalam pemrosesan teks, setiap kata dapat diubah menjadi vektor berdasarkan representasi tertentu, seperti word embedding. Input ini diberikan satu per satu ke jaringan, dimulai sejak elemen pertama hingga elemen terakhir dari urutan data.

**Langkah 2: Perhitungan Aktivasi**

Setiap unit (*neuron*) dalam RNN menghitung aktivasi berdasarkan input saat ini dan status internal (*state*) dari unit pada waktu sebelumnya. Aktivasi ini mencerminkan informasi yang telah dipelajari dari konteks sebelumnya dalam urutan data. Perhitungan aktivasi dilakukan menggunakan fungsi aktivasi, seperti tangen hiperbolik (tanh) atau fungsi sigmoid.

**Langkah 3: Pembaruan Status Internal**

Setiap unit RNN memiliki status internal yang menyimpan informasi dari elemen-elemen sebelumnya dalam urutan data. Status internal tersebut diperbarui pada setiap langkah waktu dengan mempertimbangkan aktivasi saat ini dan status internal sebelumnya. Pembaruan status internal dapat dijelaskan dengan rumus matematis yang melibatkan operasi matematika, seperti perkalian matriks antara vektor input dan bobot serta penambahan bias.

**Langkah 4: Output**

Pada setiap langkah waktu, RNN menghasilkan output berdasarkan aktivasi saat ini atau status internal terakhir. Output ini dapat digunakan sebagai prediksi berikutnya dalam urutan (misalnya, kata berikutnya pada kalimat) atau sebagai hasil akhir dari proses pemrosesan urutan data. Output RNN dapat digunakan dalam berbagai tugas, seperti klasifikasi, regresi, atau generasi urutan.

Proses tersebut diulang untuk setiap elemen dalam urutan data. Hal itu memungkinkan RNN untuk memahami konteks temporal dan memproses data berurutan secara dinamis. Dengan memanfaatkan hubungan temporal antar elemen data, RNN dapat menghasilkan prediksi atau output yang relevan untuk berbagai tugas pemrosesan data. Secara keseluruhan, RNN adalah alat yang kuat untuk memodelkan informasi berurutan. RNN pun telah digunakan dalam berbagai aplikasi yang memerlukan pemahaman dan pengolahan data temporal.

---

*Yay*, kita telah selesai dengan modul **Pengenalan Deep Learning**! Sekarang, Anda sudah memiliki dasar untuk mulai menjelajahi teknik-teknik keren ini. Lanjutkan eksplorasi teknik dan/atau data serta temukan solusi kreatif menggunakan deep learning. Selamat bersenang-senang dan jangan lupa untuk tetap semangat dalam belajar! *Peace out!*