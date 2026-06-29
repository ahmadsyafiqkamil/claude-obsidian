---
title: "Arsitektur Deep Learning | Belajar Fundamental Deep Learning"
source: "https://www.dicoding.com/academies/185/tutorials/10244?from=10069"
author:
  - "[[Dicoding Indonesia]]"
published:
created: 2026-06-28
description:
tags:
  - "clippings"
---
## Arsitektur Deep Learning

Arsitektur deep learning adalah struktur atau tata letak jaringan saraf buatan yang kompleks. Arsitektur ini terdiri dari berbagai lapisan yang bertugas untuk memproses dan mentransformasikan data masukan menjadi hasil keluaran sesuai dengan keinginan.

Setiap lapisan dalam arsitektur memiliki fungsi khusus serta bertanggung jawab untuk mengekstrak fitur-fitur yang semakin abstrak dan kompleks seiring dengan meningkatnya kedalaman jaringan. Dengan kedalaman lebih besar, arsitektur deep learning dapat mempelajari pola yang lebih kompleks dari data dan menunjukkan hasil lebih baik.

Mari kita bahas lebih lengkap mengenai jenis-jenis layer dalam arsitektur deep learning beserta penjelasan masing-masing.

### Input Layer

Input layer adalah bagian pertama dari jaringan neural yang bertanggung jawab untuk menerima data masukan, yaitu gambar, teks, atau data numerik lainnya. Fungsi utama dari input layer adalah meneruskan data masukan ke lapisan-lapisan selanjutnya dalam jaringan, yang disebut sebagai hidden layers.

Karakteristik:

- Input layer tidak melakukan komputasi yang kompleks, seperti aktivasi atau transformasi data. Tugasnya hanyalah untuk menerima data masukan dan meneruskannya ke hidden layers.
- Jumlah neuron atau unit dalam input layer ditentukan oleh dimensi atau jumlah fitur pada data masukan. Misalnya, jika data masukan berupa gambar berwarna dengan resolusi 32 × 32 piksel dan tiga saluran warna RGB, input layer akan memiliki 32 × 32 × 3 neuron.

Input layer berperan penting dalam proses pembelajaran jaringan neural. Ini karena data masukan yang disampaikan ke jaringan akan diproses dan dipelajari oleh hidden layers. Fungsinya untuk menghasilkan output yang diinginkan, seperti klasifikasi gambar, prediksi teks, atau regresi numerik.

### Hidden Layer

Lapisan tersembunyi (hidden layers) adalah lapisan-lapisan di antara input layer dan output layer dalam jaringan neural. Tugas utama dari hidden layers adalah untuk mengekstrak fitur-fitur yang semakin abstrak dan kompleks dari data masukan yang telah diteruskan oleh input layer.

Berikut adalah jenis-jenis hidden layers yang umum digunakan.

1. **Fully Connected Layer (Dense Layer)**  
	**Deskripsi:** Setiap neuron pada lapisan ini terhubung dengan setiap neuron dalam lapisan sebelumnya dan sesudahnya.  
	**Penggunaan Umum:** *Fully connected layer* paling umum digunakan dalam jaringan saraf multi-layer perceptron.  
	**Fungsi:** Layer ini membantu dalam mempelajari hubungan yang kompleks antara fitur-fitur input.
2. **Convolutional Layer (Conv Layer)**  
	**Deskripsi:** Ini digunakan khusus untuk memproses data spasial, seperti gambar.  
	**Karakteristik:** *Convolutional layer* menggunakan filter atau kernel yang bergerak pada seluruh gambar untuk mengekstrak fitur lokal, seperti tepi, sudut, atau tekstur.  
	**Penggunaan Umum:** Lapisan ini digunakan dalam convolutional neural networks untuk tugas-tugas tertentu, seperti pengenalan gambar atau segmentasi objek.
3. **Batch Normalization Layer**  
	**Deskripsi:** *Batch normalization* adalah teknik yang digunakan untuk mempercepat dan stabilisasi pelatihan jaringan neural dengan normalisasi batch. Umumnya ditempatkan setelah lapisan aktivasi (misalnya setelah convolutional layer atau fully connected layer) sebelum lapisan selanjutnya.  
	  
	**Karakteristik:**
	1. Menghitung mean dan variance dari setiap batch data input.
		2. Normalisasi input dengan menggunakan mean dan variance untuk mengurangi internal covariate shift.
		3. Menerapkan transformasi linier pada setiap mini-batch untuk memperbaiki distribusi input ke setiap lapisan.

**Penggunaan Umum:** Lapisan ini digunakan untuk mempercepat konvergensi pelatihan dengan memungkinkan penggunaan learning rate yang lebih tinggi.

4. **Recurrent Layer (RNN, LSTM, GRU)**  
	**Deskripsi:** Ini digunakan untuk memproses data berurutan, seperti teks, audio, atau video.  
	**Karakteristik:** Lapisan ini mempertahankan informasi state (keadaan) dari waktu ke waktu sehingga mampu mengatasi masalah dependensi jarak jauh.  
	**Penggunaan Umum:** *Recurrent layers*, termasuk *long short-term memory* (LSTM) dan *gated recurrent units* (GRU), digunakan dalam aplikasi, seperti pemrosesan bahasa alami dan pengenalan suara.
5. **Dropout Layer**  
	**Deskripsi:** *Dropout layer* adalah teknik regularisasi yang digunakan untuk mencegah *overfitting* dalam jaringan neural dengan secara acak "menonaktifkan" sebagian neuron pada setiap iterasi pelatihan.  
	**Karakteristik:** Ini menonaktifkan secara acak sebagian neuron dengan probabilitas tertentu selama proses pelatihan dan mencegah neuron menjadi terlalu bergantung pada subset tertentu dari neuron lainnya.  
	**Penggunaan Umum:** Ini digunakan di antara lapisan-lapisan tersembunyi pada jaringan dan membuatnya lebih robust dan umumnya efektif dalam mengatasi *overfitting*.
6. **Pooling Layer**  
	**Deskripsi:** Lapisan ini digunakan untuk mengurangi dimensi spasial dari *feature map*.  
	**Karakteristik:** *Pooling layer* menggabungkan informasi dari beberapa neuron tetangga untuk mengurangi ukuran representasi data.  
	**Penggunaan Umum:** Umumnya, ini digunakan setelah convolutional layers dalam CNN untuk mengurangi *overfitting* dan menghemat komputasi.
7. **Flatten Layer**  
	**Deskripsi:** Ini adalah lapisan yang mengubah tensor multidimensi (seperti hasil dari convolutional layers) menjadi vektor satu dimensi agar dapat diproses oleh lapisan fully connected layer.  
	**Karakteristik:** *Flatten layer* mengubah representasi data spasial menjadi representasi linear.  
	**Penggunaan Umum:**
	- Biasanya ditempatkan sebelum masuk ke lapisan fully connected layer (dense layer) di akhir arsitektur.
		- Ini memungkinkan hasil dari feature extraction (misalnya convolutional layer) dapat dijadikan input untuk proses klasifikasi atau regresi pada lapisan fully connected.

Hidden layers memiliki peran kritis dalam pembelajaran jaringan neural. Setiap jenis layer memiliki karakteristik dan fungsi khusus untuk membantu jaringan dalam mempelajari representasi yang lebih abstrak dari data. Kombinasi yang tepat dari hidden layers dalam arsitektur jaringan neural akan memungkinkan jaringan untuk belajar dan menggeneralisasi pola kompleks pada data sehingga menghasilkan hasil prediksi yang akurat.

### Output Layer

*Output layer* adalah layer terakhir dalam deep learning yang menghasilkan output berdasarkan hasil pemrosesan oleh hidden layer. Jumlah neuron dalam output layer bergantung pada tipe tugas yang ingin diselesaikan oleh jaringan. Misalnya, untuk tugas klasifikasi biner, output layer dapat memiliki satu neuron yang menghasilkan nilai antara 0 dan 1 (mengindikasikan probabilitas kelas), sedangkan untuk klasifikasi multiclass, setiap neuron mungkin mewakili probabilitas dalam kelas tertentu.

Ini adalah struktur dasar yang sering digunakan dalam deep learning dengan banyak lapisan (deep neural networks) untuk memproses dan mempelajari pola-pola yang sangat kompleks dari data yang besar.