<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

# PROGRAMMER A 
***
# TASK DAY 7

## Tugas Eksplorasi Mandiri: Manipulasi Data Array JavaScript

## Management Folder 
Di persimple file file nya
- folder: *`day7`* : 
-- file: *`soal-explorasi-day7.md`*  (Wajib)
-- file: *`hasil-explorasi.js`* (Wajib)
-- file: *`catatan.md`* (Opsional)
-- file: *`index.html`* (Opsional)

####  *Kumpulkan Link Repo Pada Spesifik folder day7 nya ya* 


***

### Soal 1: Membuat dan Mengakses Array

**Contoh Kode:**

```javascript
let buah = ['apel', 'pisang', 'jeruk'];
console.log(buah[0]); // Output: apel
console.log(buah.length); // Output: 3
```

**Pembelajaran:** Pelajari cara membuat array dan mengakses elemen berdasarkan indeks.

**Tugas Eksplorasi:** Buatlah array berisi 5 nama teman kalian, tampilkan nama pertama dan terakhir, serta hitunglah total nama dalam array.

***

### Soal 2: Menambahkan Elemen ke Array

**Contoh Kode:**

```javascript
let angka = [1, 2, 3];
angka.push(4);
console.log(angka); // Output: [1, 2, 3, 4]
```

**Pembelajaran:** Eksplorasi method `push()` untuk menambahkan elemen di akhir array.

**Tugas Eksplorasi:** Buatlah array kosong, tambahkan 3 hobi kalian satu per satu menggunakan `push()`, lalu tampilkan hasilnya.

***

### Soal 3: Menghapus Elemen dari Array

**Contoh Kode:**

```javascript
let warna = ['merah', 'biru', 'hijau'];
warna.pop();
console.log(warna); // Output: ['merah', 'biru']
```

**Pembelajaran:** Pelajari method `pop()` untuk menghapus elemen terakhir array.

**Tugas Eksplorasi:** Buatlah array berisi 4 mata pelajaran, hapus mata pelajaran terakhir, kemudian tampilkan sisa mata pelajaran.

***

### Soal 4: Loop Sederhana dengan Array

**Contoh Kode:**

```javascript
let nilai = [80, 90, 75];
for(let i = 0; i < nilai.length; i++) {
    console.log('Nilai ke-' + (i+1) + ': ' + nilai[i]);
}
```

**Pembelajaran:** Kombinasikan loop dengan array untuk mengakses semua elemen.

**Tugas Eksplorasi:** Buatlah array berisi 5 angka, gunakan loop untuk menampilkan setiap angka beserta nomor urutannya.

***

### Soal 5: Mencari Elemen dalam Array

**Contoh Kode:**

```javascript
let hewan = ['kucing', 'anjing', 'burung'];
let posisi = hewan.indexOf('anjing');
console.log(posisi); // Output: 1
```

**Pembelajaran:** Gunakan `indexOf()` untuk mencari posisi elemen dalam array.

**Tugas Eksplorasi:** Buatlah array berisi nama-nama kota, cari posisi kota tempat tinggal kalian. Jika tidak ada, tampilkan pesan "Kota tidak ditemukan".

***

### Soal 6: Mengubah Elemen Array

**Contoh Kode:**

```javascript
let makanan = ['nasi', 'mie', 'roti'];
makanan[1] = 'spaghetti';
console.log(makanan); // Output: ['nasi', 'spaghetti', 'roti']
```

**Pembelajaran:** Elemen array dapat diubah dengan mengakses indeks tertentu.

**Tugas Eksplorasi:** Buatlah array berisi 4 nama film, ganti film kedua dengan film favorit kalian, tampilkan array sebelum dan sesudah perubahan.

***

### Soal 7: Menambah Elemen di Awal Array

**Contoh Kode:**

```javascript
let transport = ['mobil', 'motor'];
transport.unshift('sepeda');
console.log(transport); // Output: ['sepeda', 'mobil', 'motor']
```

**Pembelajaran:** Method `unshift()` menambahkan elemen di awal array.

**Tugas Eksplorasi:** Buatlah array berisi 3 jenis olahraga, tambahkan olahraga favorit kalian di posisi pertama menggunakan `unshift()`.

***

### Soal 8: Menghapus Elemen di Awal Array

**Contoh Kode:**

```javascript
let hari = ['Senin', 'Selasa', 'Rabu'];
let hariPertama = hari.shift();
console.log(hariPertama); // Output: Senin
console.log(hari); // Output: ['Selasa', 'Rabu']
```

**Pembelajaran:** Method `shift()` menghapus dan mengembalikan elemen pertama.

**Tugas Eksplorasi:** Buatlah array berisi 5 nama bulan, hapus bulan pertama dan simpan dalam variabel terpisah, tampilkan bulan yang dihapus dan sisa array.

***

### Soal 9: Menggabungkan Array

**Contoh Kode:**

```javascript
let grup1 = ['Ana', 'Budi'];
let grup2 = ['Cici', 'Dedi'];
let gabungan = grup1.concat(grup2);
console.log(gabungan); // Output: ['Ana', 'Budi', 'Cici', 'Dedi']
```

**Pembelajaran:** Method `concat()` menggabungkan dua atau lebih array.

**Tugas Eksplorasi:** Buatlah dua array terpisah berisi makanan ringan dan makanan berat, gabungkan keduanya menjadi satu array lengkap.

***

### Soal 10: Membalik Urutan Array

**Contoh Kode:**

```javascript
let urutan = [1, 2, 3, 4];
urutan.reverse();
console.log(urutan); // Output: [4, 3, 2, 1]
```

**Pembelajaran:** Method `reverse()` membalik urutan elemen dalam array.

**Tugas Eksplorasi:** Buatlah array berisi huruf A sampai E, balik urutannya, kemudian tampilkan array asli dan hasil pembalikan.

***

### Soal 11: Mengurutkan Array

**Contoh Kode:**

```javascript
let nama = ['Zara', 'Ana', 'Budi'];
nama.sort();
console.log(nama); // Output: ['Ana', 'Budi', 'Zara']
```

**Pembelajaran:** Method `sort()` mengurutkan elemen array secara alfabetis.

**Tugas Eksplorasi:** Buatlah array berisi 6 nama acak, urutkan secara alfabetis, tampilkan sebelum dan sesudah pengurutan.

***

### Soal 12: Mengecek Keberadaan Elemen

**Contoh Kode:**

```javascript
let bahasa = ['Indonesia', 'Inggris', 'Jepang'];
let ada = bahasa.includes('Inggris');
console.log(ada); // Output: true
```

**Pembelajaran:** Method `includes()` mengecek apakah elemen ada dalam array.

**Tugas Eksplorasi:** Buatlah array berisi mata pelajaran sekolah, buat function untuk mengecek apakah mata pelajaran tertentu ada dalam daftar.

***

### Soal 13: Mengambil Bagian Array

**Contoh Kode:**

```javascript
let angka = [1, 2, 3, 4, 5];
let bagian = angka.slice(1, 4);
console.log(bagian); // Output: [2, 3, 4]
```

**Pembelajaran:** Method `slice()` mengambil bagian array tanpa mengubah array asli.

**Tugas Eksplorasi:** Buatlah array berisi 7 hari dalam seminggu, ambil hari kerja (Senin-Jumat) menggunakan `slice()`.

***

### Soal 14: Loop dengan Method forEach

**Contoh Kode:**

```javascript
let skor = [85, 90, 78];
skor.forEach(function(nilai, index) {
    console.log(`Skor ${index + 1}: ${nilai}`);
});
```

**Pembelajaran:** Method `forEach()` memberikan cara yang lebih elegant untuk loop array.

**Tugas Eksplorasi:** Buatlah array berisi 5 nama negara, gunakan `forEach()` untuk menampilkan setiap negara dengan format "Negara ke-X: [nama negara]".

***

### Soal 15: Transformasi Array dengan Map

**Contoh Kode:**

```javascript
let angka = [1, 2, 3];
let dikali2 = angka.map(function(num) {
    return num * 2;
});
console.log(dikali2); // Output: [2, 4, 6]
```

**Pembelajaran:** Method `map()` membuat array baru dengan mentransformasi setiap elemen.

**Tugas Eksplorasi:** Buatlah array berisi 4 angka, gunakan `map()` untuk membuat array baru yang berisi kuadrat dari setiap angka.

***

### Soal 16: Filter Array

**Contoh Kode:**

```javascript
let umur = [15, 20, 17, 25];
let dewasa = umur.filter(function(usia) {
    return usia >= 18;
});
console.log(dewasa); // Output: [20, 25]
```

**Pembelajaran:** Method `filter()` membuat array baru berisi elemen yang memenuhi kondisi.

**Tugas Eksplorasi:** Buatlah array berisi nilai ujian (0-100), gunakan `filter()` untuk mendapatkan nilai yang lulus (>=70).

***

### Soal 17: Menghitung Total dengan Reduce

**Contoh Kode:**

```javascript
let belanja = [10000, 15000, 8000];
let total = belanja.reduce(function(sum, harga) {
    return sum + harga;
}, 0);
console.log(total); // Output: 33000
```

**Pembelajaran:** Method `reduce()` menggabungkan semua elemen menjadi satu nilai.

**Tugas Eksplorasi:** Buatlah array berisi harga 5 barang yang ingin kalian beli, hitung total harga menggunakan `reduce()`.

***

### Soal 18: Mencari Elemen dengan Find

**Contoh Kode:**

```javascript
let produk = ['laptop', 'mouse', 'keyboard'];
let cari = produk.find(function(item) {
    return item.length > 5;
});
console.log(cari); // Output: laptop
```

**Pembelajaran:** Method `find()` mengembalikan elemen pertama yang memenuhi kondisi.

**Tugas Eksplorasi:** Buatlah array berisi nama-nama teman, gunakan `find()` untuk mencari teman yang namanya dimulai dengan huruf tertentu.

***

### Soal 19: Mengecek Kondisi dengan Some dan Every

**Contoh Kode:**

```javascript
let nilai = [80, 75, 90];
let adaLulus = nilai.some(function(skor) {
    return skor >= 70;
});
let semuaLulus = nilai.every(function(skor) {
    return skor >= 70;
});
console.log(adaLulus); // true
console.log(semuaLulus); // true
```

**Pembelajaran:** `some()` mengecek apakah minimal satu elemen memenuhi kondisi, `every()` mengecek apakah semua elemen memenuhi kondisi.

**Tugas Eksplorasi:** Buatlah array berisi tinggi badan teman-teman, gunakan `some()` dan `every()` untuk mengecek apakah ada yang tinggi di atas 170cm dan apakah semua tinggi di atas 150cm.

***

### Soal 20: Kombinasi Method Array

**Contoh Kode:**

```javascript
let data = [1, 2, 3, 4, 5, 6];
let hasil = data
    .filter(function(num) { return num % 2 === 0; })
    .map(function(num) { return num * 3; })
    .reduce(function(sum, num) { return sum + num; }, 0);
console.log(hasil); // Output: 36 (2*3 + 4*3 + 6*3)
```

**Pembelajaran:** Method array dapat digabungkan untuk operasi yang kompleks.

**Tugas Eksplorasi:** Buatlah array berisi angka 1-10, filter angka ganjil, kalikan dengan 2, lalu hitung totalnya menggunakan kombinasi method array.

***

### Kirimkan Link Spesifik Folder pada Reponya ya, 
Spesifik pada folder day 7 nya yang isinya Catatan Dan Latihan hasil explorasi belajar mandirinya pada day 7  ini

