---
title: "Pengenalan Convolutional Neural Network | Belajar Fundamental Deep Learning"
source: "https://www.dicoding.com/academies/185/tutorials/27120?from=21897"
author:
  - "[[Dicoding Indonesia]]"
published:
created: 2026-06-28
description:
tags:
  - "clippings"
---
## Pengenalan Convolutional Neural Network

Convolutional neural networks (CNN) pertama kali dikenalkan oleh Yann LeCun dkk., pada tahun 1998 dalam makalahnya “Gradient-Based Learning Applied to Document Recognition”. LeCun mengenalkan versi awal CNN, yaitu LeNet (berasal dari nama LeCun), yang berhasil mengenali karakter tulisan tangan. Saat itu, LeNet hanya mampu bekerja dengan baik pada gambar dengan resolusi rendah.

Database yang digunakan dalam LeCun adalah [MNIST Database of Handwritten Digits](https://archive.ics.uci.edu/dataset/683/mnist+database+of+handwritten+digits), terdiri dari pasangan angka 0 hingga 9 dengan labelnya. Dataset MNIST dikenal luas hingga saat ini dan banyak digunakan terutama oleh para pemula untuk melatih model machine learning.

Sejak ditemukannya LeNet, para peneliti terus melakukan riset untuk mengembangkan model CNN. Hingga pada tahun 2012, Alex Krizhevsky memperkenalkan AlexNet, versi lebih canggih dari CNN yang memenangkan perlombaan terkenal: [ImageNet](http://image-net.org/index). AlexNet ini adalah cikal bakal deep learning, salah satu cabang AI yang menggunakan *multi-layer neural networks.*

Selain deep learning, salah satu bidang menarik yang muncul dari perkembangan machine learning adalah *computer vision*. Itu adalah bidang yang memberi komputer kemampuan untuk ‘melihat’ seperti manusia.

Convolutional neural network (CNN) adalah tipe jaringan saraf yang umum digunakan untuk memproses data gambar. CNN digunakan untuk mendeteksi dan mengenali objek dalam gambar, terinspirasi dari cara manusia memproses informasi visual.

Secara umum, CNN memiliki struktur mirip seperti jaringan saraf biasa dengan neuron yang memiliki bobot, bias, dan fungsi aktivasi. Namun, pembeda CNN dengan lainnya adalah lapisan konvolusi, terdiri dari neuron-neuron yang tersusun dalam filter dengan dimensi panjang dan tinggi (piksel).

### Bagaimana CNN Bekerja?

Secara garis besar, CNN memanfaatkan proses konvolusi untuk mengolah gambar. Proses konvolusi melibatkan penggunaan sebuah kernel konvolusi (filter) berukuran tertentu yang digerakkan melintasi seluruh gambar. Pada setiap lokasi dalam gambar, filter ini berinteraksi dengan piksel-piksel di sekitarnya.

**Langkah 1: Memecah gambar menjadi bagian-bagian lebih kecil atau jendela-jendela gambar yang disebut "patches”.**

Dari gambar di bawah, hasil dari proses konvolusi dapat diilustrasikan dengan membagi gambar tersebut menjadi bagian-bagian kecil atau " *patches* ".

Dengan menggunakan konvolusi, gambar asli di atas dibagi menjadi 77 gambar yang lebih kecil.

**Langkah 2: Memasukkan setiap gambar yang lebih kecil ke jaringan saraf yang lebih sederhana (*****small neural network*****).**

Setiap gambar kecil hasil konvolusi digunakan sebagai input untuk menghasilkan representasi fitur melalui sebuah proses yang memberikan kemampuan kepada convolutional neural network (CNN) dalam mengenali objek, tidak peduli bahwa posisi objek tersebut muncul pada gambar. Proses ini diulang sebanyak 77 kali untuk setiap gambar kecil dengan menggunakan filter yang sama untuk setiap iterasi.

Dengan demikian, setiap bagian dari gambar kecil akan mengalami transformasi yang sama menggunakan faktor pengali yang sama. Dalam konteks jaringan saraf, hal itu disebut sebagai *weights sharing*. Jika ada hal menarik atau penting dalam setiap gambar kecil, fitur tersebut akan ditemukan dan diidentifikasi sebagai objek yang relevan (*object of interest*).

Proses ini memungkinkan CNN untuk memahami berbagai aspek visual pada gambar secara komprehensif dan memperoleh pemahaman yang lebih dalam tentang objek-objek pada gambar.

**Langkah 3: Menyimpan hasil dari masing-masing gambar kecil yang telah melewati proses konvolusi pada sebuah array baru.**

Langkah ketiga dalam pengolahan gambar menggunakan convolutional neural network (CNN) adalah menyimpan hasil dari masing-masing gambar kecil yang telah melewati proses konvolusi pada sebuah array baru.

Setelah setiap gambar kecil melewati lapisan konvolusi dan lapisan-lapisan jaringan saraf (neural network) lainnya, gambar-gambar tersebut akan menghasilkan representasi fitur yang terdiri dari nilai-nilai numerik. Representasi fitur ini mencerminkan informasi penting yang diekstrak dari setiap bagian gambar.

Proses penyimpanan dilakukan dengan mengumpulkan semua representasi fitur dari gambar-gambar kecil dan mengaturnya pada sebuah array data. Array ini akan memiliki dimensi sesuai dengan jumlah gambar kecil yang dihasilkan oleh konvolusi.

Array baru yang berisi representasi fitur dari gambar-gambar kecil tersebut akan digunakan sebagai input untuk langkah-langkah selanjutnya dalam pengolahan data, seperti klasifikasi, deteksi objek, atau segmentasi. Representasi fitur ini menjadi landasan penting pada pengambilan keputusan oleh CNN terkait dengan informasi dalam gambar asli.

**Langkah 4:** ***Downsampling*****.**

Langkah keempat dalam convolutional neural network (CNN) setelah representasi fitur dari gambar-gambar kecil disimpan pada array baru adalah melakukan **downsampling**. Ini adalah proses pengurangan dimensi atau resolusi dari representasi fitur yang telah diperoleh.

Proses downsampling umumnya dilakukan menggunakan lapisan pooling, seperti max pooling atau average pooling. Lapisan pooling mengambil bagian tertentu dari representasi fitur (misalnya, area 2 × 2 atau 3 × 3) dan melakukan operasi statistik, seperti mengambil nilai maksimum atau *max pooling* maupun rata-rata atau *average* *pooling* dari bagian tersebut.

Tujuan dari downsampling adalah mengurangi jumlah parameter dalam jaringan, mengurangi *overfitting*, dan meningkatkan invariansi terhadap pergeseran spasial. Dengan mengurangi resolusi representasi fitur, CNN dapat mempertahankan informasi penting sambil mempercepat komputasi dan mengurangi kompleksitas model.

Setelah proses downsampling selesai, representasi fitur yang sudah di-downsample akan menjadi input untuk lapisan-lapisan selanjutnya dalam CNN, seperti lapisan konvolusi tambahan, lapisan aktivasi, atau lapisan fully connected. Lapisan-lapisan itu akan terus memproses dan mempelajari fitur-fitur dari gambar secara hierarkis untuk tujuan tertentu, seperti klasifikasi atau deteksi objek.

**Langkah 5:** **Membuat prediksi berdasarkan representasi fitur.**

Langkah kelima dalam CNN setelah melakukan proses downsampling adalah membuat prediksi berdasarkan representasi fitur yang telah diproses oleh jaringan. Proses ini terjadi di bagian akhir dari arsitektur CNN, setelah representasi fitur melewati beberapa lapisan, yakni konvolusi, aktivasi, dan pooling.

Untuk membuat prediksi, representasi fitur yang telah dihasilkan dari gambar-gambar masukan akan dimasukkan ke lapisan fully connected di akhir jaringan. Lapisan ini akan mengubah representasi fitur menjadi vektor satu dimensi yang kemudian diumpankan ke jaringan saraf terakhir (biasanya berupa softmax) untuk menghasilkan output klasifikasi.

Dalam lapisan softmax, vektor fitur akan diubah menjadi distribusi probabilitas yang menunjukkan kemungkinan kelas-kelas berbeda berdasarkan representasi fitur yang diterima. Kelas dengan probabilitas tertinggi akan menjadi prediksi akhir dari CNN untuk gambar yang diberikan.

Proses pembuatan prediksi ini adalah langkah terakhir dalam CNN dan biasanya dilakukan ketika jaringan telah menjalani proses pelatihan untuk mempelajari hubungan antara representasi fitur dengan label atau kelas yang benar dari gambar-gambar pelatihan. Dengan menggunakan prediksi yang dihasilkan oleh CNN, kita dapat mengidentifikasi atau mengklasifikasikan objek atau pola dalam gambar. Tingkat akurasinya pun tinggi berdasarkan pembelajaran dari data pelatihan.

Hebat! Sekarang Anda sudah mengetahui proses CNN bekerja dan fungsinya untuk deteksi gambar. Dalam modul kelima, kita akan membahas lebih mendalam cara CNN digunakan untuk mengklasifikasi gambar! Tetap semangat, ya!