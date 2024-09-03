+++
title = 'comp method vs comp physc'
date = 2024-09-03T07:24:00+07:00
draft = false
math = true
tags = ['computation', 'refs']
authors = ['viridi']
url = '2120'
+++
Archive for computational physics that might be used in computational method<!--more-->


## materials
Comparison between the courses Computational Method [^curr_2024] and Computational Physics [^curr_2019] is as follow.

2024 | 2019
:- | :-
Computational thinking | Introduction to Computational Physics
Pseudocode-algorithm | Concepts of algorithms
Finding the roots of an equation | Root of equation
Tangent line to the curve (\*) | Curve Fitting and interpolation
Matrix algebra operations | Matrix
Linear programming solutions | System of Linear Equations
Eigenproblem | Numerical eigenvalues
Optimization | Optimation
Solutions to ODE and PDE | Integration (RK4) dan differentiation (RD)
Soft computing or AI | Artificial Intelligent (ANN, SVM, GA)

\* Further discussion to the creator of RPMK is required for the interpretation.


## archive
There are one version of lecture notes and three collections of students projects and examples.

+ Lecture note in 2016-1 semester (using C++) [^viridi_2016a]
  - Program Pertama 1
  - Nama Variabel 7
  - Variabel 17
  - Algoritma 27
  - Model Mengurutkan Data 33
  - Regresi Linier 47
  - Sistem Persamaan Linier 61
  - Deret Taylor 73
  - Integrasi Numerik 81
  - Mencari Akar 87
  - Matriks 2-D 95
  - Sekilas Metode Beda Hingga 101
  - Jaringan Saraf Tiruan 109
  - Lengkungan Batang 113
  - Monte-Carlo untuk Aluran Fluks Sederhana 117
  - Catatan Penutup 121
+ Student projects in 2015-1 semester (using C and C++) [^viridi_2015]
  - Pemodelan Aliran Fluida Pipa dengan Penghalang 1
  - Simulasi Bouncing Ball 11
  - Model Lintasan Shuttlecock dengan Variasi Gaya Hambat Udara 22
  - Simulasi Gerakan Air Dangkal 1 Dimensi 35
  - Analisis Titik Luluh Material Dengan Menggunakan Metode Secant 45
  - Gelombang Tali 59
  - Pemodelan Lintasan Benda Titik pada Tong Setan 103
  - Osilasi Teredam Sistem Pegas dengan Massa Beban tak Konstan 113
  - Orientasi Gerak Jatuh Bebas Sistem 3 Partikel 129
  - Inverted Pendulum Pada Sebuah Kereta 141
+ Student projects in 2015-2 semester + example (using C++) [^viridi_2016b]
  - Simulasi pertumbuhan tumor dengan metode central finite difference 1
  - Distribusi Panas Donat yang Dipanggang di dalam Oven 23
  - Penerapan metode beda hingga dalam penyelesaian berbagai macam persamaan diferensial dari osilator harmonis hingga Klein-Gordon 43
  - Karambol ditinjau dari segi fisika granular 81
  - Gerakan tali sebagai rantai granular bermuatan dan bermassa dalam medan listrik seragam dan periodik 99
  - Simulasi trayektori nanopartikel Au+ yang ditumbuhkan di dalam pengaruh medan listrik, dan medan magnet, di dalam vakum 127
  - Pengaruh fraksi volume, tekanan udara, dan diameter nozzle dalam gerak roket air 139
  - Distribusi temperatur 1-D pada batang dengan variasi jumlah kontak dan lebar kontak terhadap lingkungan 175
  - Pengaruh momentum awal pesawat pada orbit manuver ayunan gravitasi 199
  - Simulasi Gerakan Harmonis dan Chaotic pada Sistem Triple Pendulum dengan Metode Dinamika Molekuler-Euler 209
  - Kecepatan akhir tumbukan satu dimensi dua partikel: Sebuah partikel monoatomik dan sebuah partikel diatomik 231
+ Student projects in 2016-1 semester (using JS) [^viridi_2017]
  - Analisis bentuk orbit bumi mengelilingi matahari berdasarkan perubahan nilai posisi awal, kecepatan awal, dan massa matahari 1
  - imulasi gerak fluida berdasarkan variasi luas penampang self-siphon dengan menggunakan metode SFVE yang mengimplementasikanalgoritma Euler 25
  - Simulasi numerik distribusi temperatur pada pelat material persegi menggunakan Javascript 51
  - Studi gerak jatuh 2-dimensi sistem benda: Kasus dua benda yang terhubung dengan pegas 71
  - Model klasik resonansi Fano 115
  - Simulasi 1d gerak osilasi terkopel untuk menentukan amplitudo maksimum benda terbawa 149
  - Simulasi - reflektansi, transmitasi, absorbansi gelombang EM melalui N medium 173
  - Analisis pengaruh gravitasi terhadap fenomena efek kacang Brazil 211
  - Simulasi sifon dengan metode elemen volume fluida tunggal (single volume fluid element method) 227
  - Simulasi gerak sistem pendulum ganda dengan gravitasi 249
  - Pergerakan flagella dengan gaya pegas 269


## notes
+ It seems that both courses are the same.
+ New course is focused on the method that might have not physical system as the examples.
+ There is another course that is continuation of this course, e.g. Computational of Physical System.


## refs
[^curr_2024]: -, "FI3103 Computational Method", Kurikulum 2024, url https://six.itb.ac.id/pub/kur2024/matakuliah/47218 [20240903].
[^curr_2019]: -, "FI3201 Computational Physics", Silabus Mata Kuliah 1019, url https://six.itb.ac.id/app/dosen:000000000000000000/kurikulum/silabus/40267/view [20240903].
[^viridi_2016a]: Sparisoma Viridi, "Komputasi Fisika", ResearchGate 311740416, Dec 2016, url http://dx.doi.org/10.13140/RG.2.2.21787.87844.
[^viridi_2015]: Sparisoma Viridi, Suprijadi, "Komputasi Fisika 1: Simulasi dan Visualisasi Fisika dengan C, C++, Gnuplot, dan OpenGL", ResearchGate 317740832, Dec 2015, url https://www.researchgate.net/publication/317740832 [20240903].
[^viridi_2016b]: Sparisoma Viridi, Siti Nurul Khotimah, Suprijadi, "Komputasi Fisika 2: Simulasi dan Visualisasi Fisika dengan C++ dan Gnuplot", ResearchGate 317731678, May 2016, url http://dx.doi.org/10.13140/RG.2.2.31633.22880.
[^viridi_2017]: Sparisoma Viridi, Rizal Kurniadi, "Komputasi Fisika 3: Simulasi dan Visualisasi Fisika dengan JavaScript", ResearchGate 317235037, May 2017, url http://dx.doi.org/10.13140/RG.2.2.35065.67680.