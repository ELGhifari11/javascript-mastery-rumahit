# 🎓 25 Soal: Mastery Project POS Lite
> *"Belajar coding itu seperti main LEGO. Pahami baloknya (Syntax), lalu susun jadi istana (Paradigma)."*

Dokumen ini berisi **25 Misi** yang akan membawamu dari "Newbie" menjadi paham betul arsitektur project ini. Kita bagi menjadi 5 Fase sesuai aliran datanya.

---

## 💾 FASE 1: DATA LAYER (Paham Struktur Data)
**Lokasi:** `js/db/products.js`
**Paradigma:** *Single Source of Truth*. Data adalah Raja. Kalau data salah, aplikasi bubar.

### 📝 Soal 1: Intip Data Gudang
1.  Buka `js/main.js`.
2.  Ubah `console.table(db.myProduct)` menjadi `console.log(db.myProduct)`.
3.  **Tugas:** Buka Console Browser, klik panah kecil di array, lihat isinya.
4.  **Goal:** Kamu sadar bahwa data kita hanyalah sekumpulan `Object` di dalam `Array`.

### 📝 Soal 2: Menambah Inventaris
1.  Buka `js/db/products.js`.
2.  Tambahkan satu produk baru: "Susu Coklat Mahal", harga 50000, kategori "Minuman".
3.  **Goal:** Produk baru langsung muncul di layar tanpa kamu harus edit HTML. Inilah *Data Driven*.

### 📝 Soal 3: Koreksi Harga (Update)
1.  Cari produk "Nasi Goreng Spesial".
2.  Harganya 25000. Ubah jadi 28500.
3.  **Goal:** Refresh browser. Tampilan harga otomatis berubah.

### 📝 Soal 4: Menambah Fitur Stok (New Field)
1.  Kita butuh data stok.
2.  Tambahkan properti `stok: 10` di **SEMUA** data produk di `products.js`.
3.  **Goal:** Membiasakan diri menjaga konsistensi struktur data (Schema).

### 📝 Soal 5: Simulasi Data Rusak (Error Handling)
1.  Buat satu produk baru TAPI jangan kasih properti `harga`.
2.  Lihat apa yang terjadi di layar. (Mungkin tertulis `NaN` atau `undefined`).
3.  **Goal:** Memahami pentingnya validasi data.

---

## 🛠️ FASE 2: UTILITY LAYER (Paham Helper Function)
**Lokasi:** `js/utils/format.js`
**Paradigma:** *Pure Functions*. Fungsi yang tugasnya spesifik dan tidak punya efek samping.

### 📝 Soal 6: Membuat Formatter Diskon
1.  Buka `js/utils/format.js`.
2.  Buat fungsi baru: `export const hitungDiskon = (harga, diskon) => harga - (harga * diskon / 100);`.
3.  **Goal:** Membuat alat bantu hitung yang bisa dipakai di mana saja.

### 📝 Soal 7: Membuat Formatter Stok
1.  Masih di `format.js`.
2.  Buat fungsi: `export const formatStok = (n) => n > 0 ? \`Stok: ${n}\` : "Stok Habis";`.
3.  **Goal:** Memisahkan logika tampilan teks dari logika UI utama.

### 📝 Soal 8: Integrasi Utilitas
1.  Buka `js/utils/index.js`.
2.  Pastikan `format.js` terekuspor. (Seharusnya sudah `export * from './format.js'`).
3.  **Goal:** Memahami konsep "Barrel File" (satu pintu keluar untuk banyak modul).

### 📝 Soal 9: Uji Coba Manual
1.  Buka `js/main.js`.
2.  Di paling bawah, ketik `console.log(utils.hitungDiskon(10000, 10))`.
3.  **Goal:** Output harus 9000. Memastikan alat bantu bekerja sebelum dipasang ke UI.

---

## 🎨 FASE 3: COMPONENT LAYER (Paham UI Component)
**Lokasi:** `js/utils/ui.js`
**Paradigma:** *Component Based*. UI dipecah jadi potongan kecil yang bisa dipakai ulang.

### 📝 Soal 10: Bedah Anatomi Kartu
1.  Buka `js/utils/ui.js`.
2.  Lihat fungsi `renderSingleKartu`.
3.  Coba tukar posisi: Letakkan `kategori` di ATAS `nama`.
4.  **Goal:** Mengerti bahwa mengubah satu cetakan akan mengubah semua hasil cetakan.

### 📝 Soal 11: Styling Kondisional (Warna Harga)
1.  Cari baris yang merender harga (`h3`).
2.  Ganti `style` warnanya dengan logika: `db.harga > 20000 ? 'red' : 'green'`.
3.  **Goal:** Tampilan bereaksi terhadap data (Mahal=Merah, Murah=Hijau).

### 📝 Soal 12: Menampilkan Stok (Integrasi Fase 1)
1.  Ingat kita punya data `stok` di Soal 4?
2.  Di dalam `renderSingleKartu`, tambahkan elemen `p` buatanmu.
3.  Isinya ambil dari `db.stok`.
4.  **Goal:** Data yang tadi kita siapkan di database akhirnya muncul di UI.

### 📝 Soal 13: Badge Promo (Render Bersyarat)
1.  Jika `db.kategori === 'Minuman'`, tampilkan badge teks "🥤 SEGAR" di samping nama.
2.  Gunakan ternary operator di dalam `buatElemen`.
3.  **Goal:** Logika tampilan yang spesifik untuk kategori tertentu.

### 📝 Soal 14: Tombol Beli Pintar
1.  Cari elemen `button` Beli.
2.  Ubah teksnya: Jika `db.stok > 0` tulis "Beli", jika 0 tulis "Habis".
3.  **Goal:** UX yang baik memberi informasi status yang jelas.

---

## 🏗️ FASE 4: DOM ENGINE (Paham Abstraksi)
**Lokasi:** `js/utils/dom.js` & `js/main.js`
**Paradigma:** *Declarative DOM*. Kita menyuruh "apa yang dibuat", bukan "bagaimana langkahnya".

### 📝 Soal 15: Header Manual
1.  Buka `js/main.js`.
2.  Gunakan `utils.buatElemen` untuk membuat `h2` baru bertuliskan "Katalog Produk".
3.  Tempelkan ke `wadahAplikasi` sebelum render kartu.
4.  **Goal:** Berlatih menggunakan fungsi helper DOM kita.

### 📝 Soal 16: CSS via JavaScript
1.  Pada `h2` tadi, reset stylenya lewat JS.
2.  `style: 'text-align: center; color: blue; width: 100%;'`
3.  **Goal:** Mengontrol visual layout lewat logic JS.

### 📝 Soal 17: Container Footer
1.  Buat elemen `div` sebagai footer di `main.js`.
2.  Isi dengan nama kamu.
3.  Append ke `document.body`.
4.  **Goal:** Memahami struktur hirarki HTML (Parent-Child).

### 📝 Soal 18: Event Listener Manual
1.  Di footer tadi, tambahkan event `onClick`.
2.  Isinya `alert("Copyright 2024")`.
3.  **Goal:** Interaktivitas dasar pada elemen yang dibuat dinamis.

### 📝 Soal 19: Debugging Elemen
1.  Buka browser, Inspect Element footer buatanmu.
2.  Pastikan tidak ada properti `undefined` di atribut HTML-nya.
3.  **Goal:** Quality Control hasil render JavaScript.

---

## 🚀 FASE 5: ORCHESTRATION (Paham Data Flow)
**Lokasi:** `js/main.js`
**Paradigma:** *Unidirectional Data Flow*. Data -> Filter -> Render.

### 📝 Soal 20: Filtering Dasar
1.  Sebelum baris `utils.renderBanyakKartu`.
2.  Buat variabel: `const produkMakanan = db.myProduct.filter(item => item.kategori === 'Makanan');`
3.  Ubah render-nya jadi me-render `produkMakanan`.
4.  **Goal:** Kamu baru saja memanipulasi aliran data sebelum sampai ke user.

### 📝 Soal 21: Sorting (Pengurutan)
1.  Gunakan `.sort()` untuk mengurutkan `products` berdasarkan harga termurah.
2.  Pastikan ini dilakukan SEBELUM data masuk ke fungsi render.
3.  **Goal:** Logika presentasi data.

### 📝 Soal 22: Search Logic (Simulasi Console)
1.  Buat variabel keyword: `let cari = "susu"`.
2.  Lakukan filtering: `products.filter(item => item.nama.toLowerCase().includes(cari))`.
3.  Console log hasilnya.
4.  **Goal:** Logic dasar fitur pencarian.

### 📝 Soal 23: Fitur Keranjang (State Management)
1.  Buat array kosong `let keranjang = []` di paling atas `main.js`.
2.  Masuk ke `js/utils/ui.js` (Lho kok pindah?).
3.  Oke, ini agak sulit: Ubah tombol Beli agar me-return data produk saat diklik. (Callback).
4.  *Alternatif Mudah:* Di `main.js`, buat fungsi `tambahKeranjang(produk)`. Tapi UI kita belum support passing function.
5.  *Solusi Soal:* Cukup `console.log` dulu data produknya di `ui.js` saat tombol diklik.
6.  **Goal:** Memahami batasan komunikasi antar modul.

### 📝 Soal 24: Reset App
1.  Buat tombol "Reset Filter" di HTML atau JS.
2.  Saat diklik, render ulang `db.myProduct` yang asli (tanpa filter).
3.  **Goal:** Mengembalikan state aplikasi ke kondisi awal.

### 📝 Soal 25: The Grand Finale
1.  Rapikan kodemu.
2.  Hapus semua `console.log` debug.
3.  Pastikan tidak ada error merah di console browser.
4.  **Goal:** Production Ready! Aplikasi bersih dan bebas error.

---


INI EDIT CONTOH AJH
