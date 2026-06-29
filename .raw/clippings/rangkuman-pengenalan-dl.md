---
title: "Rangkuman Pengenalan Deep Learning | Belajar Fundamental Deep Learning"
source: "https://www.dicoding.com/academies/185/tutorials/27135?from=27125"
author:
  - "[[Dicoding Indonesia]]"
published:
created: 2026-06-28
description:
tags:
  - "clippings"
---
## Rangkuman Pengenalan Deep Learning

### Dasar-Dasar Neural Network

Pada zaman komputasi modern ini, neural networktelah menjadi salah satu komponen inti dari kecerdasan buatan. Konsep ini terinspirasi dari jaringan saraf biologis manusia dan dapat mengubah cara komputer belajar dalam berbagai tugas kompleks.

### Taksonomi AI

Taksonomi AI menggambarkan evolusi konsep dan teknologi dalam bidang kecerdasan buatan, mulai dari artificial intelligence hingga deep learning (DL).

1. **Artificial Intelligence (AI)**  
	Pada tingkat paling dasar, AI mencakup penggunaan komputer atau mesin untuk melakukan tugas yang membutuhkan kecerdasan manusia, seperti pengambilan keputusan, pengenalan pola, dan pemecahan masalah.
2. **Machine Learning (ML)**  
	Cabang AI, yakni komputer belajar dari data tanpa pemrograman eksplisit, mengenal pola, dan membuat prediksi.
3. **Neural Network (NN)**  
	Model yang terinspirasi dari jaringan saraf manusia, terdiri dari neuron buatan dalam lapisan-lapisan yang memproses dan belajar dari data.
4. **Deep Learning (DL)**  
	Subbidang ML, yakni penggunaan neural network dengan banyak lapisan untuk memahami data yang lebih kompleks. DL telah memajukan pengenalan gambar, pemrosesan bahasa alami, dan aplikasi AI lainnya.

### Struktur Artificial Neural Network

Neural network yang paling sederhana atau minimal terdiri dari satu unit perceptron tunggal, juga dikenal sebagai single perceptron. Perceptron ini memproses input dengan mengalikan nilai input (x) dengan bobot (w), kemudian menjumlahkannya dengan bias (b). Hasil dari operasi ini disebut net input (z) dan kemudian akan diproses melalui fungsi aktivasi (f) untuk menghasilkan output (y) dari perceptron tersebut.

### Cara Kerja Artificial Neural Network

Cara kerja artificial neural network (ANN) mengambil inspirasi dari struktur jaringan saraf manusia. Pada sebuah ANN, ada jutaan atau bahkan miliaran "neuron" buatan yang terorganisir dalam lapisan-lapisan. Setiap neuron menerima input dari neuron-neuron dalam lapisan sebelumnya, melakukan operasi matematika pada input ini, dan menghasilkan output yang akan diteruskan ke neuron-neuron dalam lapisan berikutnya.

Mirip dengan kerja jaringan saraf manusia, setiap koneksi antar neuron dalam ANN memiliki bobot atau nilai yang memengaruhi pentingnya informasi dari neuron sebelumnya. Selama proses pembelajaran, bobot-bobot ini diatur ulang agar ANN dapat belajar memahami pola-pola yang ada dalam data.

### Perceptron

Perceptron adalah unit dasar dalam neural network yang memproses input untuk menghasilkan output. Input diberi bobot masing-masing dan ditambah dengan bias. Hasil ini kemudian diproses melalui fungsi aktivasi untuk menghasilkan output yang dibutuhkan. Perceptron sendiri kurang efektif untuk tugas kompleks, tetapi ketika banyak perceptron dihubungkan dalam jaringan, mereka bisa memproses data dengan lebih baik.

### Neural Network

Neural network adalah kumpulan dari banyak perceptron yang saling terhubung. Setiap perceptron melakukan komputasi dengan inputnya sendiri, lalu informasi dari satu perceptron mengalir ke yang lain, memungkinkan jaringan untuk mempelajari pola kompleks dalam data. Kemampuan menyesuaikan bobot dan bias selama pelatihan membuat neural network sangat akurat dan adaptif terhadap masalah rumit.

Berikut adalah komponen dari perceptron dan fungsinya.

1. Input(xi): Ini menerima angka-angka sebagai masukan.
2. Bobot atau weights(wi) dan bias (w0): Setiap input dikalikan dengan bobot masing-masing dan ditambah dengan bias.
3. Penjumlahan atau sum (∑): Hasil penjumlahan ini disebut weighted sum.
4. Fungsi aktivasi atau non linearity function (⎰): Weighted sum diproses melalui fungsi aktivasi untuk menyesuaikan nilai hasil.
5. Output (y): Ini menghasilkan bilangan numerik sebagai output.

Fungsi matematis perceptron adalah keluaran (ŷ) yang merupakan bias (w0) ditambah jumlah dari setiap input (xi) dikali dengan bobot masing-masing (wi), kemudian diproses oleh fungsi aktivasi (g).

Dengan jaringan neural network yang lebih besar dan kompleks, performanya dapat terus meningkat, menjadikannya alat efektif untuk berbagai aplikasi, seperti pengenalan pola, klasifikasi, dan prediksi.

### Multilayer Perceptron

Multilayer Perceptron (MLP) atau feedforward neural network adalah jenis neural network yang terdiri dari banyak perceptron (neuron) yang terhubung dalam beberapa lapisan. MLP memiliki tiga jenis lapisan utama.

1. **Input Layer**
	- Fungsi: Menerima data atau input dari luar.
		- Struktur: Setiap neuron mewakili satu fitur atau variabel dari data yang masuk.
2. **Hidden Layer**
	- Fungsi: Memproses input dari input layer dengan operasi matematika menggunakan bobot (weights) dan fungsi aktivasi.
		- Struktur: Terdiri dari satu atau lebih lapisan yang berada antara input layer dan output layer. Berfungsi sebagai penyaring atau extractor fitur untuk mempelajari pola-pola kompleks dalam data.
3. **Output Layer**
	- Fungsi: Menghasilkan output berdasarkan hasil pemrosesan oleh hidden layer.
		- Struktur: Jumlah neuron bergantung pada tipe tugas. Untuk klasifikasi biner, output layer mungkin memiliki satu neuron yang menghasilkan nilai antara 0 dan 1. Untuk klasifikasi multiclass, setiap neuron bisa mewakili probabilitas kelas tertentu.

MLP memungkinkan jaringan neural untuk mempelajari dan memproses pola kompleks dalam data, menjadikannya alat yang efektif dalam berbagai aplikasi, seperti pengenalan pola, klasifikasi, dan prediksi.

### Terms pada Neural Network

Inilah beberapa istilah umum yang penting dalam pengembangan kecerdasan buatan menggunakan neural network, yaitu activation function, loss function, dan optimizer.

Berikut adalah rangkuman tentang beberapa istilah penting dalam pengembangan neural network.

1. **Activation Function (Fungsi Aktivasi)**  
	Fungsi aktivasi adalah fungsi matematika yang menentukan neuron akan aktif atau tidak berdasarkan inputnya. Fungsi ini memungkinkan jaringan saraf mengenali pola non-linier dalam data. Ada dua jenis utama fungsi aktivasi, yaitu linear dan non-linear.  
	  
	Inilah jenis-jenis fungsi aktivasi.
	- **Linear:** Output proporsional secara linear terhadap input. Jarang digunakan pada hidden layer karena tidak bisa menangani non-linearitas.
		- **ReLU (Rectified Linear Unit):** Output adalah input jika positif atau nol jika negatif. Sederhana dan efisien, sering digunakan pada hidden layer.
		- **Leaky ReLU:** Modifikasi ReLU yang memperkenalkan gradien kecil pada bagian negatif untuk mencegah "neuron mati".
		- **Sigmoid:** Mengubah input menjadi nilai antara 0 dan 1, cocok untuk klasifikasi biner, tetapi rentan terhadap gradien yang menghilang.
		- **Tanh:** Mengubah input menjadi nilai antara -1 dan 1, lebih simetris dibanding sigmoid dan sering digunakan pada hidden layer.
		- **Softmax:** Mengubah input menjadi distribusi probabilitas, digunakan pada output layer untuk klasifikasi multiclass.
2. **Loss Function**  
	Loss function mengukur seberapa baik atau buruk kinerja model pada data pelatihan dengan memberikan representasi numerik tentang kesalahan prediksi. Berikut contoh umumnya.
	- **Mean Square Error (MSE):** Mengukur rata-rata dari kuadrat selisih antara prediksi model dan nilai sebenarnya.
		- **Cross-Entropy Loss:** Umum digunakan untuk klasifikasi, mengukur perbedaan antara distribusi prediksi dan distribusi target.
3. **Optimizer**  
	Optimizeradalah komponen yang mengoptimalkan bobot dan bias jaringan untuk mengurangi kesalahan prediksi dengan cara memperbarui parameter berdasarkan gradien dari loss function. Fungsi utama optimizer adalah untuk menghitung gradien dan memperbarui parameter. Berikut adalah contoh optimizer.
	- **Stochastic Gradient Descent (SGD):** Ini menggunakan gradien dari subset data untuk memperbarui parameter.
		- **RMSprop:** Ini menyesuaikan learning rate untuk setiap parameter berdasarkan sejarah gradien.
		- **Adam:** Optimizer adaptif yang menggabungkan momentum dan RMSprop untuk mengatur learning rate secara adaptif.

Pemilihan optimizer memengaruhi kecepatan konvergensi, kualitas model, dan kemampuan untuk menghindari masalah optimisasi, seperti “terjebak” dalam optimum lokal atau gradien yang menghilang.

### Forward Propagation dan Backpropagation

#### Forward Propagation

Forward propagationadalah proses menghitung output dari neural network berdasarkan input yang diberikan. Berikut adalah langkah-langkah dalam forward propagation.

1. **Input Data**  
	Data dimasukkan ke jaringan, bisa berupa gambar (piksel), teks (token), atau nilai numerik (fitur seperti luas tanah atau jumlah kamar).
2. **Neuron dan Bobot**  
	Setiap neuron menerima input yang dikalikan dengan bobotnya dan ditambahkan bias. Bobot menentukan seberapa penting input tersebut, kemudian bias membantu neuron untuk tetap aktif dalam berbagai kondisi.
3. **Perhitungan di Neuron**  
	Hasil perkalian input dan bobot ditambah bias dimasukkan ke fungsi aktivasi (seperti ReLU atau sigmoid). Fungsi aktivasi menentukan bahwa neuron tersebut aktif atau tidak.
4. **Output**  
	Aktivasi dari neuron pada lapisan sebelumnya menjadi input untuk neuron dalam lapisan berikutnya, berulang hingga mencapai lapisan output yang menghasilkan prediksi akhir.

#### Backpropagation

Backpropagationadalah proses mengoptimalkan bobot dan bias jaringan untuk meminimalkan error pada prediksi. Berikut adalah langkah-langkah dalam backpropagation.

1. **Perhitungan Error**  
	Output prediksi dibandingkan dengan nilai target sebenarnya menggunakan fungsi kerugian (loss function), seperti mean squared error (MSE) atau cross-entropy loss.
2. **Backward Pass**  
	Penghitungan gradien dari loss function terhadap setiap bobot menggunakan aturan rantai (*chain rule*). Gradien menunjukkan kontribusi setiap bobot terhadap total error.
3. **Perubahan Bobot**  
	Bobot diperbarui dengan menggerakkannya melawan arah gradien menggunakan algoritma optimasi, seperti gradient descent. Laju pembelajaran (learning rate) menentukan seberapa besar perubahan bobot dalam setiap iterasi.
4. **Iterasi**  
	Langkah forward propagation, perhitungan error, backward propagation, dan optimasi bobot diulang untuk setiap batch data latihan hingga bobot konvergen ke nilai optimal. Proses ini melibatkan banyak iterasi (*epochs*) untuk memastikan model belajar dari data secara efektif.

Dengan forward propagation, jaringan menghasilkan prediksi berdasarkan input, sedangkan backpropagation mengoptimalkan bobot untuk mengurangi kesalahan prediksi. Kombinasi keduanya memungkinkan neural network belajar dari data dan meningkatkan akurasinya secara iteratif.

### Definisi Deep Learning

Deep learning adalah cabang dari kecerdasan buatan yang menggunakan algoritma terinspirasi dari cara otak manusia bekerja. Metode ini diimplementasikan melalui jaringan saraf tiruan yang disebut artificial neural networks (ANN).

Keunggulan utama deep learning terletak pada kemampuannya untuk belajar secara mandiri dari data besar dan kompleks. Proses pembelajaran melibatkan penyesuaian bobot dan parameter jaringan secara iteratif melalui proses pelatihan, yakni ketika model diuji dan diperbaiki berdasarkan umpan balik dari data.

Aplikasi dan Metode dalam Deep Learning

1. **Convolutional Neural Networks (CNNs):** Ini digunakan untuk analisis gambar. CNNs efektif dalam mendeteksi fitur visual dan pola dalam gambar.
2. **Recurrent Neural Networks (RNNs):** Cocok untuk data berurutan, seperti teks atau sinyal suara. RNNs mempertimbangkan konteks temporal atau urutan data.

Tantangan dalam Deep Learning

1. Pelatihan model deep learning membutuhkan data dalam jumlah besar untuk menghasilkan prediksi yang akurat.
2. Mengatur parameter model yang kompleks memerlukan pemahaman mendalam dan sering kali eksperimen berulang.

Deep learning membawa terobosan besar dalam berbagai bidang, yaitu pengenalan wajah, mobil otonom, penelitian medis, dan banyak lagi. Dengan deep learning, kita dapat membuat komputer "belajar" dari data besar untuk membuat prediksi yang lebih cerdas dan akurat, mirip seperti cara manusia belajar dari pengalaman.

### Arsitektur Deep Learning

Arsitektur deep learning adalah struktur jaringan saraf buatan yang kompleks dan terdiri dari berbagai lapisan yang memproses data masukan dan menghasilkan output. Setiap lapisan dalam arsitektur memiliki fungsi khusus dan bertanggung jawab untuk mengekstrak fitur-fitur yang semakin abstrak dan kompleks. Dengan kedalaman lebih besar, arsitektur deep learning dapat mempelajari pola yang lebih rumit dari data dan memberikan hasil lebih baik.

#### Jenis-Jenis Layer dalam Arsitektur Deep Learning

1. **Input Layer**  
	Input layer adalah bagian pertama dari jaringan neural yang menerima data masukan, seperti gambar, teks, atau data numerik lainnya. Fungsi utamanya adalah meneruskan data masukan ke lapisan-lapisan selanjutnya dalam jaringan.
2. **Hidden Layer**  
	Hidden layers adalah lapisan-lapisan antara input layer dan output layer yang bertugas mengekstrak fitur-fitur dari data masukan.  
	  
	Berikut adalah jenis-jenis hidden layers yang umum digunakan.
	- **Fully Connected Layer (Dense Layer)**: membantu dalam mempelajari hubungan yang kompleks antara fitur-fitur input.
		- **Convolutional Layer (Conv Layer)**: digunakan dalam convolutional neural networks (CNNs) untuk pengenalan gambar atau segmentasi objek.
		- **Batch Normalization Layer**: digunakan untuk mempercepat konvergensi pelatihan dengan memungkinkan penggunaan learning rate yang lebih tinggi.
		- **Recurrent Layer (RNN, LSTM, GRU)**: digunakan untuk memproses data berurutan, seperti teks, audio, atau video.
		- **Dropout Layer**: digunakan di antara lapisan-lapisan tersembunyi untuk membuat jaringan lebih *robust* dan mengatasi *overfitting*.
		- **Pooling Layer**: digunakan setelah convolutional layers dalam CNN untuk mengurangi *overfitting* dan menghemat komputasi.
		- **Flatten Layer**: digunakan untuk mengubah representasi data spasial menjadi representasi linear.
		- **Output Layer**: digunakan untuk lapisan terakhir dalam jaringan neural yang menghasilkan prediksi atau output akhir berdasarkan data yang telah diproses oleh hidden layers.

Hidden layers memiliki peran krusial dalam pembelajaran jaringan neural. Setiap jenis layer memiliki karakteristik dan fungsi khusus untuk membantu jaringan mempelajari representasi yang lebih abstrak dari data. Kombinasi yang tepat dari hidden layers dalam arsitektur jaringan neural memungkinkan jaringan untuk belajar dan menggeneralisasi pola kompleks dari data; ini menghasilkan prediksi yang akurat.

### Pengenalan Arsitektur Deep Learning yang Populer

Arsitektur deep learning terdiri dari berbagai struktur jaringan saraf buatan dirancang untuk memproses dan mentransformasikan data masukan menjadi keluaran yang diinginkan. Beberapa arsitektur populer yang digunakan dalam deep learning sebagai berikut.

1. **Convolutional Neural Network**  
	Convolutional neural network (CNN) dirancang khusus untuk memproses data gambar dan visual. CNN terdiri dari lapisan konvolusi yang menggunakan filter untuk mengekstrak fitur-fitur lokal dari gambar; lapisan pooling untuk mengurangi dimensi spasial; lapisan aktivasi, seperti ReLU, untuk memperkenalkan non-linearitas; dan lapisan fully connected untuk klasifikasi akhir berdasarkan fitur yang diekstraksi. CNN sering digunakan untuk pengenalan gambar dan objek, klasifikasi citra, dan segmentasi gambar.
2. **Recurrent Neural Network**  
	Recurrent neural network (RNN) dirancang untuk memproses data berurutan, seperti teks, audio, atau data time series. RNN memiliki loop rekursif yang memungkinkan jaringan untuk mengingat informasi dari iterasi sebelumnya. Variasi canggih dari RNN, seperti LSTM dan GRU, memiliki sel memori yang memungkinkan jaringan untuk mengingat informasi dalam jangka panjang. RNN umum digunakan dalam pemrosesan bahasa alami, pengenalan suara, dan prediksi time series.
3. **Long Short-Term Memory**  
	Long short-term memory (LSTM) adalah jenis RNN dengan mekanisme gate untuk mengatasi masalah hilangnya informasi jangka panjang. LSTM memiliki gate, seperti forget gate untuk melupakan informasi tidak relevan dan input gate untuk mengontrol aliran informasi baru yang disimpan dalam memori jangka panjang. LSTM digunakan dalam pemrosesan bahasa alami yang memerlukan pemahaman konteks lebih dalam, seperti generasi teks alami dan pengenalan wicara.
4. **Generative Adversarial Network**  
	Generative adversarial network (GAN) terdiri dari dua jaringan neural berlawanan, yaitu generator dan diskriminator. Generator menghasilkan data sintetis dari distribusi laten, sementara diskriminator mencoba membedakan antara data asli dan sintetis. GAN digunakan untuk menghasilkan gambar sintetis, augmentasi dataset, dan aplikasi kreatif lainnya.
5. **Transformer**  
	Transformer adalah arsitektur berbasis atensi yang digunakan terutama dalam pemrosesan bahasa alami untuk mengatasi masalah ketergantungan jarak panjang. Transformer menggunakan mekanisme *self-attention*. Ini memungkinkan model memberikan bobot yang tepat pada kata-kata penting dalam teks. Ia juga memiliki blok encoder dan decoder untuk tugas seperti penerjemahan mesin dan pemodelan bahasa.
6. **Autoencoder**  
	Autoencoder adalah arsitektur yang digunakan untuk reduksi dimensi atau generasi data sintetis. Autoencoder terdiri dari encoder yang menghasilkan representasi tersembunyi dari data input dan decoder yang memulihkan data asli dari representasi tersembunyi. Autoencoder digunakan untuk reduksi dimensi data, denoising, dan menghasilkan data sintetis.  
	  
	Arsitektur-arsitektur ini telah membuka berbagai kemungkinan dalam pemrosesan data yang kompleks dan memungkinkan deep learning untuk mencapai hasil luar biasa dalam berbagai bidang aplikasi.

### Pengenalan Convolutional Neural Network

Convolutional neural network (CNN) adalah tipe jaringan saraf yang umum digunakan untuk memproses data gambar. CNN digunakan untuk mendeteksi dan mengenali objek dalam gambar, terinspirasi dari cara manusia memproses informasi visual.

Secara umum, CNN memiliki struktur mirip seperti jaringan saraf biasa, dengan neuron yang memiliki bobot, bias, dan fungsi aktivasi. Namun, pembeda CNN dengan lainnya adalah lapisan konvolusi, terdiri dari neuron-neuron yang tersusun dalam filter dengan dimensi panjang dan tinggi (piksel).

Berikut adalah langkah-langkah CNN bekerja.

1. Memecah gambar menjadi bagian-bagian lebih kecil atau jendela-jendela gambar yang disebut "patches”.
2. Memasukkan setiap gambar yang lebih kecil ke jaringan saraf yang lebih sederhana (small neural network).
3. Menyimpan hasil dari masing-masing gambar kecil yang telah melewati proses konvolusi pada sebuah array baru.
4. Pengurangan dimensi atau resolusi dari representasi fitur yang telah diperoleh.
5. Membuat prediksi berdasarkan representasi fitur.

### Pengenalan Recurrent Neural Network

Recurrent neural network (RNN) adalah jenis arsitektur jaringan saraf yang dirancang untuk memproses data berurutan, yakni ketika hubungan antar elemen dalam urutan memiliki arti atau konteks temporal. RNN biasanya digunakan pada data teks (sekuens kata), audio (gelombang suara), deret waktu (data berurutan terkait waktu), dan lainnya. Keunggulan utama RNN adalah kemampuannya untuk "mengingat" atau mempertahankan informasi tentang sejarah (konteks) dari urutan data yang diproses.

Ada empat tipe RNN berdasarkan panjang input dan output yang berbeda.

1. One-to-one adalah jaringan neural sederhana yang umum digunakan untuk masalah pembelajaran mesin dengan satu input dan satu output.
2. One-to-many memiliki satu input dan banyak output. Ini biasanya digunakan untuk menghasilkan deskripsi gambar.
3. Many-to-one mengambil urutan multiple inputs dan memprediksi satu output. Populer dalam klasifikasi sentimen, yaitu ketika inputnya berupa teks dan output-nya adalah kategori.
4. Many-to-many menggunakan multiple inputs dan outputs. Aplikasi paling umumnya adalah terjemahan mesin.

Berikut adalah langkah-langkah RNN bekerja.

1. RNN menerima input berurutan, seperti kata-kata dalam sebuah kalimat atau frame pada video. Setiap elemen input direpresentasikan dengan vektor fitur numerik.
2. Setiap unit (*neuron*) dalam RNN menghitung aktivasi berdasarkan input saat ini dan status internal (*state*) dari unit pada waktu sebelumnya.
3. Setiap unit RNN memiliki status internal yang menyimpan informasi dari elemen-elemen sebelumnya dalam urutan data.
4. Pada setiap langkah waktu, RNN menghasilkan output berdasarkan aktivasi saat ini atau status internal terakhir.