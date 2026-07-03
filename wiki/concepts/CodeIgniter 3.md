---
type: concept
title: "CodeIgniter 3"
created: 2026-07-03
tags:
  - php
  - framework
  - mvc
  - web
status: current
sources:
  - "[[protkons-consular-management]]"
related:
  - "[[CV-Syamil-Protkons]]"
  - "[[Consular Service Management]]"
---

# CodeIgniter 3

PHP MVC framework ringan yang digunakan di [[CV-Syamil-Protkons|PROTKONS]] untuk mengelola layanan konsuler KBRI Kuala Lumpur.

## Karakteristik

- Arsitektur MVC (Model-View-Controller)
- Ringan — tidak memerlukan template engine khusus
- PHP 5.3.7+ (PROTKONS menggunakan PHP 7.4+)
- URL rewriting via `.htaccess`

## Dalam Konteks PROTKONS

- **Controllers**: `Auth`, `Pelayanan`, `Laporan`, dll.
- **Models**: Database access layer
- **Libraries**: TTE (Tanda Tangan Elektronik), KonsulerPublic, Datatables, QR Code
- **Base Controller**: `BASE_Controller` untuk autentikasi & layout
- **Frontend**: AdminLTE 3 + Bootstrap 4 + jQuery

## vs Framework Modern

CodeIgniter 3 adalah framework mature (rilis 2015). PROTKONS menggunakannya karena stabilitas dan ekosistem library yang luas untuk kebutuhan government enterprise. Framework yang lebih baru (Laravel, Symfony) tersedia tapi CI3 tetap menjadi pilihan praktis untuk aplikasi government dengan siklus maintenance panjang.
