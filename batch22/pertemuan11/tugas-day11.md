<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

# Soal Tugas Day 11 

### **🚀 THIS IS YOUR MOMENT:**

Tugas ini bukan hanya sekedar **assignment**, tapi **milestone** penting dalam journey kalian sebagai JavaScript developer. Setiap line code yang kalian tulis adalah **investment** untuk masa depan karir di tech industry.

### **🏆 REMEMBER:**

> **"The expert in anything was once a beginner who never gave up!"** 

***


## 🎯 **TUGAS EXPLORASI DAN EXPERIMENT**

### **📚 PELAJARI SECARA MENDASAR DAN MENDETAIL**

- **Object Manipulation** dengan semua built-in methods yang telah dipelajari
- **Array Processing** menggunakan functional programming approach
- **Modern JavaScript Features**: Destructuring, Spread/Rest Operators
- **Real-world Problem Solving** dengan pendekatan sistematis


### **🧠 PAHAMI SECARA MENYELURUH DAN MENDALAM**

- **Konsep Fundamental** dari setiap method yang digunakan
- **Best Practices** dalam manipulasi data JavaScript
- **Performance Considerations** untuk operasi data yang efisien
- **Code Organization** dan struktur yang maintainable


### **💪 KUASAI DENGAN PRAKTIK LANGSUNG DAN INTENSIF**

- **Hands-on Coding** dengan studi kasus nyata kehidupan sehari-hari
- **Problem-based Learning** melalui skenario yang relevan
- **Progressive Difficulty** dari basic hingga intermediate level
- **Creative Implementation** sesuai dengan gaya coding masing-masing


### **🚀 IMPLEMENTASIKAN DENGAN KREATIVITAS DAN INOVASI**

- **Personal Touch** dalam setiap solusi yang dibuat
- **Clean Code Principles** yang readable dan efficient
- **Documentation** yang jelas dan comprehensive
- **Testing Approach** untuk memastikan code berjalan sempurna

***


## 🎓 **LEARNING OUTCOMES YANG DIHARAPKAN:**

### **📈 TECHNICAL SKILLS:**

- Mahir menggunakan **10 built-in methods** JavaScript (Object.keys, values, entries, map, filter, reduce, find, forEach, dll)
- Lancar menerapkan **Destructuring** dalam berbagai konteks
- Confident dengan **Spread \& Rest Operators** untuk data manipulation
- Terbiasa dengan **Functional Programming** approach


### **🧩 PROBLEM SOLVING:**

- Kemampuan **break down** masalah kompleks menjadi langkah-langkah sederhana
- Skill **debugging** dan troubleshooting code
- **Analytical thinking** dalam memilih approach yang tepat
- **Efficiency mindset** dalam menulis code


### **💼 PRACTICAL APPLICATION:**

- Pengalaman **real-world scenarios** yang applicable di dunia kerja
- Foundation yang kuat untuk learning **advanced JavaScript concepts**
- Confidence untuk tackle **coding interview questions**

***
## **📦 OBJECT METHODS**

### **1. `Object.keys()` - Ambil Nama Property**

```javascript
const nilai = { math: 85, english: 90, science: 78 };

const mataPelajaran = Object.keys(nilai);
console.log(mataPelajaran); // ["math", "english", "science"]

// Dengan destructuring
const [pertama, ...lainnya] = Object.keys(nilai);
console.log(pertama); // "math"
```


### **2. `Object.values()` - Ambil Semua Nilai**

```javascript
const harga = { nasi: 15000, ayam: 25000, es_teh: 5000 };

const semuaHarga = Object.values(harga);
console.log(semuaHarga); // [15000, 25000, 5000]

// Hitung total dengan spread
const total = [...Object.values(harga)].reduce((sum, h) => sum + h, 0);
console.log(total); // 45000
```


### **3. `Object.entries()` - Ambil Pasangan Key-Value**

```javascript
const kontak = { mama: "08123", papa: "08456", adik: "08789" };

// Loop dengan destructuring
for (const [nama, nomor] of Object.entries(kontak)) {
    console.log(`${nama}: ${nomor}`);
}
// mama: 08123
// papa: 08456
// adik: 08789
```


### **4. Spread Operator `{...}` - Gabung Object**

```javascript
const profil = { nama: "Alice", umur: 20 };
const hobi = { musik: true, baca: true };

// Gabungkan dengan spread
const lengkap = { ...profil, ...hobi };
console.log(lengkap); // { nama: "Alice", umur: 20, musik: true, baca: true }
```


### **5. `Object.fromEntries()` - Array ke Object**

```javascript
const nilai = [["math", 85], ["english", 90]];

const objekNilai = Object.fromEntries(nilai);
console.log(objekNilai); // { math: 85, english: 90 }
```


***

## **🎯 5 Real Examples - Object Simple**

### **Example 1: Profil Sosmed**

```javascript
const profil = { nama: "Budi", kota: "Jakarta", hobi: ["gaming", "musik"] };

// Update dengan spread
const profilBaru = { ...profil, umur: 22, hobi: [...profil.hobi, "baca"] };
console.log(profilBaru);
```


### **Example 2: Nilai Rapor**

```javascript
const rapor = { math: 85, english: 90, science: 78 };

// Hitung rata-rata
const rataRata = Object.values(rapor).reduce((sum, n) => sum + n, 0) / Object.keys(rapor).length;
console.log(`Rata-rata: ${rataRata}`); // 84.33
```


### **Example 3: Kontak HP**

```javascript
const kontak = { mama: "08123", papa: "08456" };

// Tambah kontak baru
const kontakBaru = { ...kontak, adik: "08789" };
console.log(kontakBaru);
```


### **Example 4: Harga Menu**

```javascript
const menu = { nasi_goreng: 20000, mie_ayam: 15000 };

// Naik harga 10%
const menuBaru = Object.fromEntries(
    Object.entries(menu).map(([item, harga]) => [item, harga * 1.1])
);
console.log(menuBaru);
```


### **Example 5: Setting Game**

```javascript
const defaultSetting = { volume: 50, brightness: 70 };
const userSetting = { volume: 80 };

// Gabungkan setting
const finalSetting = { ...defaultSetting, ...userSetting };
console.log(finalSetting); // { volume: 80, brightness: 70 }
```


***

## **🔥 ARRAY METHODS - 5 Yang Penting**

### **1. `map()` - Ubah Setiap Item**

```javascript
const nilai = [75, 80, 65, 90];

// Tambah bonus 5
const nilaiBonus = nilai.map(n => n + 5);
console.log(nilaiBonus); // [80, 85, 70, 95]

// Dengan object
const siswa = [{ nama: "Alice", nilai: 85 }];
const hasil = siswa.map(({ nama, nilai }) => `${nama}: ${nilai >= 80 ? "Lulus" : "Belum"}`);
```


### **2. `filter()` - Saring Item**

```javascript
const film = [
    { judul: "Avengers", rating: 8.5 },
    { judul: "Frozen", rating: 7.8 }
];

// Film bagus saja
const filmBagus = film.filter(({ rating }) => rating >= 8.0);
console.log(filmBagus); // [{ judul: "Avengers", rating: 8.5 }]
```


### **3. `reduce()` - Gabungkan Data**

```javascript
const belanja = [{ item: "Beras", harga: 50000 }, { item: "Minyak", harga: 25000 }];

// Total harga
const total = belanja.reduce((sum, { harga }) => sum + harga, 0);
console.log(total); // 75000
```


### **4. `find()` - Cari Item Pertama**

```javascript
const buku = [
    { judul: "Harry Potter", tersedia: true },
    { judul: "Laskar Pelangi", tersedia: false }
];

// Cari yang tersedia
const bukuTersedia = buku.find(({ tersedia }) => tersedia);
console.log(bukuTersedia); // { judul: "Harry Potter", tersedia: true }
```


### **5. `forEach()` - Loop Setiap Item**

```javascript
const tugas = ["Belajar JS", "Buat PR", "Tidur"];

// Tambah centang
tugas.forEach((task, index, arr) => {
    arr[index] = `✅ ${task}`;
});
console.log(tugas); // ["✅ Belajar JS", "✅ Buat PR", "✅ Tidur"]
```


***

## **🎯 5 Real Examples - Array Simple**

### **Example 1: Playlist Musik**

```javascript
const lagu = [
    { judul: "Bohemian Rhapsody", durasi: 355 },
    { judul: "Shape of You", durasi: 235 }
];

// Total durasi
const totalMenit = lagu.reduce((total, { durasi }) => total + durasi, 0) / 60;
console.log(`Total: ${Math.round(totalMenit)} menit`);
```


### **Example 2: Daftar Belanja**

```javascript
const belanja = [
    { item: "Susu", harga: 15000 },
    { item: "Roti", harga: 8000 }
];

// Hitung total dengan spread
const items = [...belanja];
const totalBelanja = items.reduce((sum, { harga }) => sum + harga, 0);
console.log(`Total: Rp ${totalBelanja.toLocaleString()}`);
```


### **Example 3: Nilai Ujian**

```javascript
const nilaiKelas = [
    { nama: "Alice", nilai: 85 },
    { nama: "Bob", nilai: 92 }
];

// Yang lulus
const lulus = nilaiKelas.filter(({ nilai }) => nilai >= 80);
console.log(`Yang lulus: ${lulus.length} orang`);
```


### **Example 4: Jadwal Kuliah**

```javascript
const jadwal = [
    { hari: "Senin", matkul: "Math" },
    { hari: "Selasa", matkul: "Physics" }
];

// Cari hari tertentu
const hariIni = jadwal.find(({ hari }) => hari === "Senin");
console.log(`Hari ini: ${hariIni?.matkul || "Libur"}`);
```


### **Example 5: Pengeluaran**

```javascript
const pengeluaran = [
    { kategori: "makan", jumlah: 25000 },
    { kategori: "transport", jumlah: 15000 }
];

// Per kategori dengan rest
const [makan, ...lainnya] = pengeluaran;
console.log(`Makan: ${makan.jumlah}, Lainnya: ${lainnya.length} item`);
```


***

### **Destructuring \& Spread:**

```javascript
// Object: const { nama, umur } = user
// Array: const [first, ...rest] = arr
// Spread Object: { ...obj, newProp: value }
// Spread Array: [...arr1, ...arr2]
```


***

# 🎯 **TUGAS LATIHAN**

## **📝 SOAL 1: Kelola Nilai Mahasiswa**

### **Data yang diberikan:**

```javascript
const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};
```


### **Yang harus dikerjakan:**

1. **Extract semua nama mahasiswa** menggunakan `Object.keys()`
2. **Hitung rata-rata nilai setiap mahasiswa** menggunakan `Object.values()` dan `reduce()`
3. **Loop semua mahasiswa** menggunakan `Object.entries()` dan destructuring
4. **Gabungkan dengan data baru** menggunakan spread operator:

```javascript
const dataTambahan = { david: { math: 88, english: 91, science: 85 } };
```


### **Expected Output:**

```javascript
// 1. Nama mahasiswa: ["alice", "bob", "carol"]
// 2. alice rata-rata: 87.67, bob rata-rata: 81.67, carol rata-rata: 91.67
// 3. alice: math=85, english=90, science=88 (dst...)
// 4. Object gabungan dengan 4 mahasiswa
```


***
## **📝 SOAL 2: Sistem Playlist Murottal**
### **Data yang diberikan:**

```javascript
const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];
```

### **Yang harus dikerjakan:**

1. **Filter murottal Juz 1** menggunakan `filter()` dan destructuring
2. **Hitung total durasi semua murottal** menggunakan `reduce()`
3. **Buat list "Surat - Qari"** menggunakan `map()` dan destructuring
4. **Cari murottal terpanjang** menggunakan `reduce()`
5. **Tambah murottal baru di awal** menggunakan spread operator

### **Expected Output:**

```javascript
// 1. [Al-Fatihah dan Al-Baqarah dari Juz 1]
// 2. Total: 8772 detik (146.2 menit atau 2.44 jam)
// 3. ["Al-Fatihah - Mishary Rashid", "Al-Baqarah - Abdul Rahman As-Sudais", ...]
// 4. Al-Baqarah (7380 detik atau 123 menit)
// 5. Array dengan murottal baru di posisi pertama
```


***

## **📝 SOAL 3: Pengeluaran Mingguan**

### **Data yang diberikan:**

```javascript
const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];
```


### **Yang harus dikerjakan:**

1. **Total pengeluaran semua** menggunakan `reduce()` dan destructuring
2. **Group berdasarkan kategori** menggunakan `reduce()` dan spread
3. **Pengeluaran per hari** menggunakan `reduce()`
4. **Cari pengeluaran terbesar** menggunakan `reduce()`
5. **Filter pengeluaran >= 25000** menggunakan `filter()`

### **Expected Output:**

```javascript
// 1. Total: Rp 140.000
// 2. { makan: 75000, transport: 15000, hiburan: 50000 }
// 3. { Senin: 40000, Selasa: 80000, Rabu: 20000 }
// 4. { hari: "Selasa", kategori: "hiburan", jumlah: 50000 }
// 5. [3 pengeluaran >= 25000]
```


***

## **📝 SOAL 4: Kontak Telepon**

### **Data yang diberikan:**

```javascript
const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];
```


### **Yang harus dikerjakan:**

1. **Gabungkan kontak lama dan baru** menggunakan spread dan `Object.fromEntries()`
2. **Extract semua nomor telepon** menggunakan `Object.values()`
3. **Buat format tampilan** menggunakan `Object.entries()` dan `map()`
4. **Tambah prefix +62** menggunakan destructuring dan spread

### **Expected Output:**

```javascript
// 1. { mama: "08123456789", papa: "08987654321", adik: "08111222333", kakak: "08444555666" }
// 2. ["08123456789", "08987654321", "08111222333", "08444555666"]
// 3. ["Mama: 08123456789", "Papa: 08987654321", ...]
// 4. Semua nomor dengan prefix +62
```


***

## **📝 SOAL 5: Sistem Penilaian Kelas**

### **Data yang diberikan:**

```javascript
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];
```


### **Yang harus dikerjakan:**

1. **Hitung rata-rata tugas setiap siswa** menggunakan spread dan `reduce()`
2. **Hitung nilai akhir** (tugas 30%, UTS 30%, UAS 40%) menggunakan destructuring
3. **Filter siswa yang lulus** (nilai akhir >= 80) menggunakan `filter()`
4. **Cari siswa terbaik** menggunakan `reduce()`
5. **Buat laporan** menggunakan `map()` dan destructuring

### **Expected Output:**

```javascript
// 1. Alice: 85, Bob: 80, Carol: 91
// 2. Alice: 88.5, Bob: 82.3, Carol: 90.1
// 3. [Semua siswa lulus]
// 4. Carol (nilai akhir tertinggi)
// 5. ["Alice: 88.5 (Lulus)", "Bob: 82.3 (Lulus)", "Carol: 90.1 (Lulus)"]
```