# Masterclass Simple POS — Belajar JavaScript dari 0

Dokumen ini adalah modul pembelajaran komprehensif untuk memahami project Simple POS (Point of Sales) dari A sampai Z. Materi ditulis untuk pemula yang belum pernah belajar JavaScript, dengan penjelasan mudah, bertahap, dan fokus pada praktik langsung lewat project ini.

## Tujuan Pembelajaran
- Memahami struktur file dan arsitektur project Simple POS.
- Mampu membaca dan menulis kode JavaScript dasar: variabel, fungsi, objek, array, kontrol alur, manipulasi DOM, event.
- Mengerti modularisasi ES Module (import/export) dan kenapa dipakai.
- Memahami alur kerja aplikasi POS: tambah produk, keranjang, pembayaran, invoice, log penjualan, dan statistik.
- Mampu memperluas fitur dengan aman dan rapi.

## Gambaran Project
Aplikasi web Simple POS terdiri dari halaman HTML, style CSS, dan kode JavaScript modular. Tanpa backend. Semua data disimpan di memori (RAM browser) selama halaman terbuka.

## Struktur Proyek

```
simple-pos/
├─ index.html             // Halaman utama
├─ style.css              // Gaya tampilan
├─ main.js                // Bootstrap aplikasi (ES Module)
└─ modules/
   ├─ state.js           // State global: kasir, produk, keranjang, penjualan
   ├─ ui.js              // Render UI dan referensi elemen DOM
   ├─ utils.js           // Utilitas: format rupiah, tanggal, popup, toast
   └─ sales.js           // Logika bisnis POS
```

## Dasar-Dasar JavaScript yang Dipakai

- Variabel: tempat menyimpan data.
  - Contoh: `const total = 0;` menyimpan angka 0.
- Tipe data: number, string, boolean, object, array.
  - `"Zahra"` (string), `2000` (number), `{ nama: "Zahra" }` (object), `[1,2,3]` (array).
- Fungsi: blok kode yang dapat dipanggil ulang.
  - `function hitungTotal() { ... }` atau `const f = () => { ... }`.
- Objek: kumpulan properti dan nilai.
  - `const produk = { id: "1", nama: "Chiki", harga: 2000 }`.
- Array: daftar berurutan.
  - `const keranjang = []; keranjang.push(produk)`.
- Kontrol alur: `if`, `for`, `return`.
- DOM: mengakses dan mengubah elemen HTML.
  - `document.getElementById("daftarProduk").innerHTML = "..."`.
- Event: merespon klik tombol dsb.
  - `onclick="tambahKeranjang('1')"` di HTML memanggil fungsi JS.
- Modul ES: memisahkan kode ke file-file dengan `export` dan `import`.

## Arsitektur dan Peran Setiap File

### 1) index.html — Struktur Halaman
- Menyusun layout: Header (identitas kasir), Statistik (kartu penuh lebar), Produk, Keranjang, Pembayaran, Log Penjualan.
- Memuat `main.js` sebagai script module.
- Menyediakan modal untuk Add Product dan Invoice.

Elemen penting:
- Input kasir: `#namaKasir`
- Daftar produk: `#daftarProduk`
- Keranjang: `#ringkasanKeranjang`, `#totalBelanja`
- Pembayaran: `#metodeBayar`, `#uangBayar`, `#namaPelanggan`
- Statistik: `#statistikContainer`
- Log penjualan: `#logContainer`
- Modal: `#popupModal1` (Add Product), `#invoiceModal` (Struk), toast: `#toast`

### 2) style.css — Desain dan Komponen UI
- Palet warna gelap dengan aksen hijau.
- Kartu (card), tombol, chip, modal, toast.
- Section statistik: dua kartu (Omzet, Produk Terlaris) + mini-stats.
- Log penjualan: scrollable dan font lebih kecil agar rapi.

Konsep gaya yang relevan:
- `.kartu` untuk blok konten.
- `.chip` untuk produk terlaris.
- `.toast` untuk notifikasi ringan (warning).
- `.ringkasan-log` untuk kontainer log yang dapat di-scroll.

### 3) main.js — Bootstrap Aplikasi
- Menginisialisasi UI awal.
- Merender daftar produk dan keranjang.
- Mengekspos fungsi ke `window` agar HTML inline `onclick` tetap bekerja (sederhana untuk pemula).
- Memanggil update statistik awal.

Contoh (disederhanakan):
```js
import { initUI, renderProduk, renderKeranjang } from "./modules/ui.js";
import { togglePopup } from "./modules/utils.js";
import { toggleUangBayar, addProduct, simpanKasir, hapusProduk, tambahKeranjang, ubahJumlah, kosongkanKeranjang, prosesPembayaran, updateStatsUI } from "./modules/sales.js";

initUI();
renderProduk();
renderKeranjang();
updateStatsUI();

window.togglePopup = togglePopup;
// ... mengekspor semua fungsi yang dipanggil dari HTML
```

Mengapa mengekspor ke `window`?
- HTML project ini menggunakan `onclick="..."` langsung di tombol.
- Cara pemula: lebih mudah melihat hubungan tombol → fungsi.
- Di proyek besar, disarankan event listener terpisah atau framework.

### 4) modules/state.js — State Global
- Menyimpan semua data selama sesi:
  - `kasir`: `{ nama: "" }`
  - `daftarProduk`: array awal produk contoh.
  - `keranjang`: array item yang ditambahkan.
  - `dataPenjualan`: array log tiap transaksi.

Kenapa dipisah?
- Mudah dibaca, diuji, dan diubah.
- Memisahkan “data” dari “tampilan” dan “logika bisnis”.

### 5) modules/utils.js — Utilitas
- `formatRupiah(angka)`: format angka ke Rupiah.
- `getDateStr()`, `getTimeStr()`: tanggal dan jam lokal.
- `togglePopup(id)`: membuka/menutup modal.
- `showNotif(message, type='warning', duration=3000)`: toast ringan untuk peringatan.

Kenapa toast?
- Notifikasi ringkas tidak mengganggu alur.
- Cocok untuk validasi: nama kasir kosong, keranjang kosong, uang kurang.

### 6) modules/ui.js — Render UI dan Referensi DOM
- Menyimpan referensi elemen HTML (`refs`) agar akses cepat dan konsisten.
- `initUI()`: mengisi pesan awal dan reset area struk/keranjang.
- `renderProduk()`: menampilkan daftar produk, tombol tambah/hapus.
- `renderKeranjang()`: menampilkan item keranjang + tombol `+` dan `−` untuk ubah jumlah.
- Setter pesan/total: `setTotalBelanja`, `setPesanKasir`, `setPesanPembayaran`.

Konsep DOM penting:
- `innerHTML` untuk menyisipkan string HTML.
- Event `onclick` yang memanggil fungsi global (dipaparkan lewat `window`).
- Pemutakhiran UI reaktif: panggil fungsi render setelah data berubah.

### 7) modules/sales.js — Logika Bisnis POS

Fungsi-fungsi inti:
- Pembayaran
  - `toggleUangBayar()`: sembunyikan input uang jika bukan Tunai.
  - `prosesPembayaran()`: validasi, hitung kembalian, tulis struk, catat log, update statistik, buka modal invoice.
- Produk
  - `addProduct()`: validasi input, menambah produk ke awal daftar, rerender.
  - `hapusProduk(id)`: hapus produk dari daftar.
- Keranjang
  - `tambahKeranjang(id)`: tambah item ke keranjang atau menaikkan jumlah jika sudah ada.
  - `ubahJumlah(id, aksi)`: tambah/kurangi jumlah, hapus jika 0.
  - `hitungTotal()`: jumlahkan harga×qty tiap item.
  - `kosongkanKeranjang()`: reset keranjang dan pesan.
- Kasir
  - `simpanKasir()`: simpan nama dan tampilkan sapaan; jika kosong → toast warning.
- Statistik dan Log
  - `hitungStatistik()`: agregasi kasir teraktif, pelanggan setia, produk terlaris (berdasarkan jumlah unit terjual), total omzet.
  - `updateStatsUI()`: render kartu statistik atas dan isi section log.

Struktur data penjualan:
```js
{
  kasir: "Nama Kasir",
  pelanggan: "Nama Pelanggan",
  date: "17 November 2025",
  time: "12.34",
  total: 25000,
  payment: "Tunai/QRIS/Transfer Bank",
  penjualan: [
    { item: "Chiki", harga: 2000, jumlah: 2 },
    { item: "Permen", harga: 1000, jumlah: 1 }
  ]
}
```

Alur pembayaran (ringkas):
1. Validasi: keranjang tidak kosong, jika Tunai → angka uang diterima valid dan tidak kurang.
2. Hitung kembalian.
3. Buat konten struk (HTML), tampilkan di modal invoice.
4. Catat transaksi ke `dataPenjualan`.
5. Kosongkan keranjang dan reset total.
6. Update statistik dan log di layar.

### 8) PDF Struk dengan jsPDF
- Menggunakan CDN jsPDF yang sudah disertakan di `index.html`.
- Tombol `Download PDF` membuat file `struk_penjualan.pdf` berdasarkan data transaksi.
- Teknik: menyusun teks baris demi baris dengan koordinat Y.

### 9) Statistik di Kartu Atas
- Total Omzet: penjumlahan `total` dari seluruh transaksi.
- Produk Terlaris: akumulasi jumlah unit terjual per nama produk (top 3 ditampilkan sebagai chip).
- Kasir Teraktif: banyaknya transaksi per kasir.
- Pelanggan Setia: banyaknya transaksi per pelanggan.

### 10) Log Penjualan di Halaman
- Log dipaparkan dalam section khusus (bukan modal) agar mudah dibaca panjang.
- Setiap entri berisi tanggal, kasir, pelanggan, metode bayar, total, dan daftar item.
- Font diperkecil dan kontainer scroll agar rapi.

## Semantik & Paradigma yang Dipakai

- Imperatif yang sederhana: kita “memberitahu” komputer langkah demi langkah (ubah data, render ulang UI).
- Mutable state: array seperti `keranjang` diubah (push, splice, increment). Untuk proyek pemula, ini lebih mudah dipahami.
- Event-driven: UI merespon event klik, change, dsb. Fungsi dipanggil saat pengguna berinteraksi.
- Modularisasi: memecah kode menjadi file kecil sesuai tugasnya (state, ui, utils, sales) → lebih terstruktur dan mudah dikembangkan.
- Pemisahan data, tampilan, dan logika: walau sederhana, kita sudah memisah tiga peran utama.

## Latihan Praktik (Step-by-Step)

1) Ubah sapaan kasir
- Cari `simpanKasir()` lalu ubah teks sapaan menjadi gaya Anda.

2) Tambah produk default
- Di `state.js`, tambahkan satu entri produk baru ke `daftarProduk` dan lihat tampilannya.

3) Validasi harga produk
- Di `addProduct()`, coba masukkan harga negatif. Perhatikan toast warning.

4) Coba pembayaran QRIS
- Pilih QRIS, kosongkan input uang, lalu proses pembayaran. Invoice tetap muncul tanpa kembalian.

5) Lihat statistik berubah
- Lakukan beberapa transaksi produk sama. Lihat chip Produk Terlaris berubah.

6) Eksperimen keranjang
- Coba tombol `+` dan `−` untuk satu produk berkali-kali dan lihat perhitungan total.

7) Unduh PDF struk
- Setelah transaksi, klik `Download PDF` dan buka file PDF-nya.

## Tips Pengembangan Lanjut

- Simpan ke `localStorage`: agar log dan statistik tetap ada setelah reload.
- Diskon dan pajak: tambah properti di `prosesPembayaran()` lalu tampilkan di invoice.
- Unit test: cek fungsi utilitas seperti `formatRupiah`, `hitungStatistik` lewat test sederhana.
- Pisah event dari HTML: gunakan `addEventListener` untuk produksi yang lebih rapi.

## Glosarium Singkat
- DOM: Document Object Model, representasi struktur HTML yang bisa diubah via JS.
- Event: kejadian seperti klik, input, perubahan select.
- State: data yang mewakili kondisi aplikasi saat ini.
- Render: proses menampilkan ulang UI berdasarkan state terbaru.
- Modal: jendela pop-up di atas halaman.
- Toast: notifikasi kecil di sudut layar yang muncul singkat.

## FAQ Pemula
- Kenapa tidak ada database? Project ini versi simple untuk pembelajaran awal. Semua data di memori.
- Apakah bisa dipakai nyata? Bisa untuk latihan. Untuk produksi: tambahkan penyimpanan, autentikasi, dan keamanan.
- Kenapa banyak string HTML? Ini pendekatan sederhana. Di proyek besar, gunakan framework (React/Vue) atau templating.

## Rujukan Kode (Navigasi Cepat)
- Struktur state: `simple-pos/modules/state.js`
- Utilitas & notifikasi: `simple-pos/modules/utils.js`
- Render UI: `simple-pos/modules/ui.js`
- Logika bisnis & statistik: `simple-pos/modules/sales.js`
- Bootstrap & ekspor fungsi ke global: `simple-pos/main.js`
- Halaman & komponen: `simple-pos/index.html`
- Gaya: `simple-pos/style.css`

Selamat belajar! Baca kode sambil membuka dokumen ini, coba klik tombol-tombolnya, ubah sedikit-sedikit, dan lihat dampaknya. Dengan memahami alur dan struktur proyek ini, Anda sudah melangkah kuat untuk menguasai JavaScript modern.

