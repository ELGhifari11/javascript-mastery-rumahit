
1. **Array & Operasi Dasar**
2. **Array Method (`forEach`, `map`, `filter`, `reduce`, `find`)**
3. **Object & Manipulasi Properti**

---

````md
# 🧭 Eksplorasi Data JavaScript: Dari Array ke Object
> “Kita tidak sedang belajar kode — kita sedang belajar cara berpikir logis tentang data.”

---

## 🌱 Level 1 — EASY MODE
### 🎯 Fokus: Array & Operasi Dasar

Bayangkan kamu sedang menjadi **asisten pengajar** di pondok yang harus mencatat daftar santri yang hadir dalam kelas.

#### 📘 Contoh Kasus 1 — Data Kehadiran Sederhana
```js
const santri = ["Ahmad", "Luqman", "Fauzi", "Rayhan"];
console.log(santri[0]); // Ahmad
console.log(santri.length); // 4
````

🧠 **Penjelasan:**
Array menyimpan data berurutan. Kamu bisa mengaksesnya lewat indeks.

#### 💡 Study Case — Menambah & Menghapus Data

```js
//CODE EKSEKUSI =>    // Tambah santri
//CODE EKSEKUSI =>    // Hapus santri terakhir
//CODE EKSEKUSI =>    // Tambah ke awal
//CODE EKSEKUSI =>    // Hapus santri di indeks ke-2
```

#### 🧩 Tantangan Easy

1. Buat daftar **10 santri baru** dalam array.
2. Tambahkan 3 santri yang terlambat.
3. Hapus 1 santri yang izin.
4. Tampilkan total santri yang hadir.

> 💬 *Eksplorasi:*
> Coba pikir, bagaimana kalau kamu ingin tahu **siapa yang selalu hadir** selama 7 hari berturut-turut?
> Data seperti apa yang harus kamu simpan?

---

## ⚙️ Level 2 

### 🎯 Fokus: Array Method (`forEach`, `map`, `filter`, `reduce`, `find`)

Sekarang kamu sudah punya daftar nilai santri. Kamu ingin:

* menampilkan semua nilai,
* menambah bonus,
* mencari siapa yang lulus,
* dan menghitung rata-rata nilai.

#### 📘 Contoh Data

```js
const nilaiSantri = [85, 92, 76, 90, 100, 67, 88];
```

#### 💡 Operasi dengan Array Method

**1. `forEach()` — Tampilkan semua nilai**

```js
// CODE EKSEKUSI  NYA => 
```

**2. `map()` — Tambah bonus nilai**

```js
// CODE EKSEKUSI  NYA => 
```

**3. `filter()` — Ambil yang nilainya ≥ 90**

```js
// CODE EKSEKUSI  NYA => 
```

**4. `reduce()` — Hitung rata-rata**

```js
// CODE EKSEKUSI  NYA => 
```

**5. `find()` — Cari yang dapat nilai sempurna (100)**

```js
// CODE EKSEKUSI  NYA => 
```

---

### 🧩 Study Case Medium — Sistem Nilai Kelas

Buat program:

* Menampilkan semua nilai awal
* Menambah 5 poin ke semua santri
* Menampilkan hanya santri yang lulus (≥ 85)
* Menghitung rata-rata keseluruhan

Output contoh:

```
Nilai awal: [85, 92, 76, 90, 100, 67, 88]
Nilai + Bonus: [90, 97, 81, 95, 105, 72, 93]
Santri Lulus: [90, 97, 95, 105, 93]
Rata-rata: 90.4
```

> 💬 *Eksplorasi:*
> Bagaimana jika kamu ingin tahu **berapa banyak santri yang gagal dua kali berturut-turut**?
> Coba simulasikan data multi-hari dan cari polanya.

---

## 🧱 Level 3

### 🎯 Fokus: Object & Manipulasi Properti

Sekarang setiap santri punya banyak informasi: nama, usia, nilai, program, dan status.

#### 📘 Contoh Data Santri

```js
const santri = {
  nama: "Ahmad Fauzi",
  usia: 18,
  program: "Fullstack Development",
  nilai: 92,
  aktif: true
};
```

Kamu bisa manipulasi data:

```js
// CODE EKSEKUSI  NYA => .....       // tambah properti baru
// CODE EKSEKUSI  NYA => .....      // ubah nilai
// CODE EKSEKUSI  NYA => .....      // hapus properti
```

---

### 🧩 Study Case Array of Object

```js
const dataSantri = [
  { nama: "Ahmad", nilai: 90, aktif: true },
  { nama: "Luqman", nilai: 75, aktif: true },
  { nama: "Fauzi", nilai: 60, aktif: false },
  { nama: "Zain", nilai: 95, aktif: true }
];

// Tampilkan santri aktif
// CODE EKSEKUSI  NYA => ........

// Tambah bonus 5 poin untuk yang aktif
// CODE EKSEKUSI  NYA => ........

// Hitung rata-rata nilai aktif
// CODE EKSEKUSI  NYA => ........

// Tampilkan Hasilnya
// CODE EKSEKUSI  NYA => ........ // Bonus
// CODE EKSEKUSI  NYA => ........ // Rata Rata Nilai Aktif
```

Output:

```
[
  { nama: 'Ahmad', nilai: 95, aktif: true },
  { nama: 'Luqman', nilai: 80, aktif: true },
  { nama: 'Zain', nilai: 100, aktif: true }
]
Rata-rata nilai aktif: 91.6
```

---

### 🧩 Study Case Analisis Santri Terbaik

Buat fungsi untuk mencari:

1. Santri dengan nilai tertinggi
2. Santri dengan nilai terendah
3. Jumlah santri aktif
4. Daftar nama santri lulus (nilai ≥ 85)

```js
// CODE EKSEKUSI  NYA => ........

// TAMPILKAN HASILNYA
// CODE EKSEKUSI  NYA => ........
```

---

### 🧠 Study Case  Integrasi Array & Object

> Bayangkan kamu membuat **sistem leaderboard santri terbaik**.

#### 🎯 Tugas:

1. Simpan data **20 santri** dalam array of object (`nama`, `program`, `nilai`, `aktif`).
2. Urutkan dari nilai tertinggi ke terendah.
3. Ambil hanya **5 santri terbaik**.
4. Gunakan `map` untuk menampilkan pesan seperti:

   ```
   #1 Ahmad — Fullstack — 97 poin
   #2 Zain — Frontend — 95 poin
   ...
   ```
5. Gunakan `reduce` untuk menghitung rata-rata 5 besar.

> 💬 *Eksplorasi:*
> Bagaimana kalau leaderboard diurutkan berdasarkan **nilai + tingkat keaktifan**?
> Kamu bisa beri skor tambahan untuk kehadiran, lalu hitung kembali total nilai.

---

---

## 🧩 Mini Project Akhir: “Dashboard Santri Pintar”

### 🎯 Tujuan

Bangun satu program mini menggunakan seluruh konsep di atas.

### 🛠️ Syarat:

* Data minimal 10 santri (`array of object`)
* Setiap santri punya: nama, nilai, program, aktif, kehadiran (0–10)
* Gunakan `map`, `filter`, `reduce`, `find` untuk membuat:

  1. Daftar santri lulus
  2. Rata-rata nilai seluruh santri
  3. Santri dengan kehadiran tertinggi
  4. Jumlah santri aktif
  5. Output leaderboard 3 besar

---

### ✨ Bonus Challenge (EXTRA ADVANCE)

* Tambahkan fitur **pengurutan dinamis** (urut berdasarkan nilai, kehadiran, atau nama).
* Tambahkan properti baru `rank` berdasarkan urutan nilai.
* Buat output hasil akhir seperti ini:

```
🏆 RANKING SANTRI PINTAR
1. Ahmad Fauzi — 97 poin — Hadir 9/10
2. Luqman Hakim — 94 poin — Hadir 8/10
3. Rayhan Nur — 91 poin — Hadir 10/10

Rata-rata nilai: 88.6
Total Santri Aktif: 9
```

---
