<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>


# Soal Day 9 Pada Pembahasan JavaScript

***
# 🌟 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
- Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang

***

## Doa Sebelum Menuntut Ilmu
اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا وَعَلِّمْنَا مَا يَنْفَعُنَا وَزِدْنَا عِلْمًا

"Ya Allah, manfaatkanlah ilmu yang telah Engkau ajarkan kepada kami, ajarkanlah kami ilmu yang bermanfaat, dan tambahkanlah kami ilmu."

 اللّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً

"Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau menjadikan kesulitan itu mudah jika Engkau kehendaki."

***

## Management Fodler 
Di persimple file file nya
- fodler: Pertemuan9-JS : 
-- file: soal.md (Wajib)
-- file: jawaban.js (Wajib)
-- file: catatan.js (Wajib)
-- file: catatan.md (Opsional)
-- file: index.html (Opsional)

#### - *Kumpulkan Link Repo Pada Spesifik folder nya ya* 

*** 

## Peringatan Khusus Penggunaan AI

**PERHATIAN SERIUS:** AI adalah alat bantu untuk memahami konsep, BUKAN joki! Penggunaan berlebihan akan membuat kemapuan  sendiri tidak terasah:

- Solusi terlalu kompleks untuk level pemula
- Gaya penulisan tidak konsisten
- Ketidakmampuan menjelaskan kode sendiri

Ingat: Client percaya pada kemampuan ANDA, bukan AI. Bangun kepercayaan dengan kemampuan autentik!

***

## Bahan Riset Explorasi : Sistem Manajemen Perpustakaan Digital

Buatlah sebuah sistem manajemen perpustakaan digital menggunakan JavaScript yang mencakup semua konsep berikut:

### Bagian 1: Deklarasi dan Struktur Dasar

```javascript
// 1. Buat sebuah object kosong bernama 'perpustakaan'

// 2. Buat sebuah array kosong bernama 'daftarPengunjung'

// 3. Jelaskan perbedaan antara object dan array yang telah Anda buat

// 4. Sebutkan istilah yang tepat untuk:
//    - Bagian dari object: 
//    - Bagian dari array:
//    - Nama identifier dalam object:
//    - Isi dari identifier tersebut:
```


### Bagian 2: Manipulasi Data

```javascript
// 5. Tambahkan property berikut ke object 'perpustakaan':
//    - nama: "Perpustakaan Kota"
//    - alamat: "Jl. Pendidikan No. 123"
//    - tahunBerdiri: 1995

// 6. Tambahkan 3 nama pengunjung ke array 'daftarPengunjung'

// 7. Ubah nama perpustakaan menjadi "Perpustakaan Digital Kota"

// 8. Ubah pengunjung pertama dalam array menjadi "Ahmad Budi"

// 9. Tambahkan property baru 'jumlahBuku' dengan nilai 5000 ke object perpustakaan

// 10. Tambahkan pengunjung baru "Sari Dewi" ke array daftarPengunjung
```


### Bagian 3: Struktur Nested dan Complex

```javascript
// 11. Buat nested array 'kategoriBuku' yang berisi:
//     [["Fiksi", "Non-Fiksi"], ["Sains", "Sejarah", "Biografi"]]

// 12. Tambahkan nested object 'fasilitasPerpustakaan' ke object perpustakaan:
//     {
//       ruangBaca: { kapasitas: 100, lantai: 1 },
//       ruangKomputer: { kapasitas: 30, lantai: 2 }
//     }

// 13. Hapus property 'tahunBerdiri' dari object perpustakaan

// 14. Buat object baru dengan key yang menggunakan berbagai format:
//     - Key biasa: jenisKeanggotaan
//     - Key dengan spasi: "jenis keanggotaan"
//     - Key dengan angka: "anggota2023"
//     - Key dengan simbol: "biaya-pendaftaran"
```


### Bagian 4: Looping dan Iterasi

```javascript
// 15. Buat loop untuk menampilkan semua property dari object 'perpustakaan'

// 16. Buat loop untuk menampilkan semua property dari nested object 'fasilitasPerpustakaan'

// 17. Duplikasi object 'perpustakaan' ke object baru bernama 'cabangPerpustakaan'
//     dan ubah nama menjadi "Perpustakaan Digital Cabang Selatan"
```


### Bagian 5: Object dengan Function

```javascript
// 18. Buat object 'sistemPerpustakaan' yang memiliki property berupa function:
//     - tambahBuku(judul, pengarang): menambah buku baru
//     - cariBuku(judul): mencari buku berdasarkan judul
//     - hitungTotalBuku(): menghitung total buku
//     - tampilkanInfo(): menampilkan informasi perpustakaan
```


### Contoh Output yang Diharapkan:

```javascript
// Contoh penggunaan sistem:
sistemPerpustakaan.tambahBuku("Laskar Pelangi", "Andrea Hirata");
sistemPerpustakaan.tambahBuku("Bumi Manusia", "Pramoedya Ananta Toer");

console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
console.log(sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();

```
### POV Di terminal
```terminal
========================================
    INFORMASI PERPUSTAKAAN DIGITAL
========================================

📚 Nama Perpustakaan: Perpustakaan Digital Kota
📍 Alamat: Jl. Pendidikan No. 123
📖 Total Koleksi Buku: 5002 buku

========================================
           FASILITAS TERSEDIA
========================================

🪑 Ruang Baca
   • Kapasitas: 100 orang
   • Lokasi: Lantai 1

💻 Ruang Komputer  
   • Kapasitas: 30 orang
   • Lokasi: Lantai 2

========================================
         KOLEKSI BUKU TERBARU
========================================

1. "Laskar Pelangi" - Andrea Hirata
2. "Bumi Manusia" - Pramoedya Ananta Toer

========================================
        PENGUNJUNG HARI INI
========================================

• Ahmad Budi
• Sari Dewi
• [Nama pengunjung lainnya...]

========================================
Status Sistem: ✅ Online
Terakhir diupdate: 11 September 2025
========================================
```
***

