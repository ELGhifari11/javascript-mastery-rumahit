<div style="font-family: 'Arial', sans-serif;">

<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

# Soal Evaluasi JS **Pekan 2**

## 🌟 <span style="font-family: 'Traditional Arabic', serif;">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>


## Doa Sebelum Menuntut Ilmu
<span style="font-family: 'Traditional Arabic', serif; font-size: 1.2em;">اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا وَعَلِّمْنَا مَا يَنْفَعُنَا وَزِدْنَا عِلْمًا</span>

<p style="font-family: 'Georgia', serif; font-style: italic;">"Ya Allah, manfaatkanlah ilmu yang telah Engkau ajarkan kepada kami, ajarkanlah kami ilmu yang bermanfaat, dan tambahkanlah kami ilmu."</p>

<span style="font-family: 'Traditional Arabic', serif; font-size: 1.2em;">اللّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً</span>

<p style="font-family: 'Georgia', serif; font-style: italic;">"Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau menjadikan kesulitan itu mudah jika Engkau kehendaki."</p>

***

## <span style="font-family: 'Helvetica', sans-serif;">Memorandum of Understanding (MOU) Evaluasi Mingguan JavaScript</span>

### <span style="font-family: 'Helvetica', sans-serif;">Perjanjian Integritas Akademik</span>

**Dengan ini saya menyatakan bahwa:**

1. **Larangan Penggunaan Artificial Intelligence (AI) & Code Copilot:**
    - 100% harus berdasarkan pemahaman dan kemampuan pribadi
    - Hargai pemahaman anda sejauh ini jangan sampai AI yang ambil alih
    - Ingat client percaya pada kemampuan ANDA, bukan AI
    - Bangun kepercayaan dengan kemampuan autentik!
    - AI BUKAN joki ujian! Penggunaan akan mudah terdeteksi
    - **WAJIB menonaktifkan extension AI Copilot** sebelum mulai mengerjakan
    
2. **Larangan Kerjasama dan Plagiarisme:**
    - Dilarang keras menyalin atau mengadaptasi kode dari teman sekelas
    - Setiap jawaban harus hasil pemikiran dan implementasi pribadi
    - Diskusi konsep umum diperbolehkan, namun implementasi harus mandiri

**Pelanggaran terhadap MOU ini akan berakibat pada:**

- 📌 Pengurangan nilai signifikan
- 📌 Evaluasi ulang dengan tingkat kesulitan lebih tinggi
- 📌 Pembinaan khusus untuk menguatkan integritas akademik

***

## Struktur Folder (Saran)
- 📂 **Evaluasi-JS-pekan2**
  - 📝 **evaluasi-js-pekan2.md** (dokumen ini)
  - 📜 **answers.js** (jawaban fungsi-fungsi)


> _Silakan sesuaikan dengan aturan pengumpulan panitia._

***

# EVALUASI — 15 Soal (Soal Jelas · Perintah Jelas · Hasil Jelas)


---

### 1) Sintaks & Operator
**Fungsi**
```js
function hitungTotal(harga, qty, pajakPct, diskonPct) {}
```
**Tugas:** (harga×qty) → kurangi diskon% → tambah pajak% → hasil akhir (dibulatkan wajar).
**Langkah:** kalikan → diskon → pajak → `return` total.

**Contoh Hasil**
```yaml
soal_1:

  input: { harga: 10000, qty: 3, pajakPct: 11, diskonPct: 10 }

  expected: 29970
```

---

### 2) If/Else – Grading
**Fungsi**
```js
function gradeIfElse(nilai) {}
```
**Tugas:** kembalikan salah satu dari `"A"|"B"|"C"|"D"|"E"`.
**Langkah:** if/else bertingkat: A≥90, B≥80, C≥70, D≥60, else E.

**Contoh Hasil**
```yaml
soal_2:

  input: {nilai: 95} atau  { nilai: 85 } atau { nilai: 75 } atau { nilai: 65 } atau { nilai: 55 } 

  expected: 
  "A" untuk nilai 90-100, 
  "B" untuk nilai 80-89, 
  "C" untuk nilai 70-79, 
  "D" untuk nilai 60-69, 
  "E" untuk nilai 1-59
```

---

### 3) Switch – Kategori User
**Fungsi**
```js
function kategoriSwitch(kode) {}
```
**Tugas:** "S"→Santri, "M"→Mentor, "A"→Admin, selain itu "Tamu".
**Langkah:** gunakan `switch(kode)` dengan `default`.

**Contoh Hasil**
```yaml
soal_3:

  input: { kode: "M" } atau { kode: "A" } atau { kode: "S" } atau { kode: "X" }

  expected: 
  "Mentor" untuk kode "M", 
  "Admin" untuk kode "A", 
  "Santri" untuk kode "S", 
  "Tamu" untuk kode selain "M", "A", "S"
```

---

### 4) For – Jumlah Bilangan Genap
**Fungsi**
```js
function jumlahGenap(arr) {}
```
**Tugas:** jumlahkan semua bilangan genap di `arr`.
**Langkah:** `for` indeks, cek `n % 2 === 0`, akumulasikan.

**Contoh Hasil**
```yaml
soal_4:

  input: { arr: [1, 2, 3, 4, 6] }

  expected: 12
```

---

### 5) For – Akumulasi Sampai Batas (tanpa while)
**Fungsi**
```js
function akumulasiSampai(batas) {}
```
**Tugas:** jumlah 1+2+3+… hingga **total tidak melebihi** `batas`.
**Langkah:** `for ()` → jika `total + i > batas` maka `break`, selain itu tambahkan.

**Contoh Hasil**
```yaml
soal_5:

  input: { batas: 1000 }

  expected: 1000

```

---

### 6) Fungsi – Deklaratif vs Ekspresi
**Fungsi**
```js
function luasPersegiPanjang(p,l) {}

const luasPersegi = function(s) {};
```
**Tugas:** kembalikan luas bangun sesuai rumus.
**Langkah:** implement 2 gaya fungsi (deklaratif & ekspresi).

**Contoh Hasil**
```yaml
soal_6:

  input: { p: 5, l: 3, s: 4 }

  expected: { luasPersegiPanjang: 15, luasPersegi: 16 }
```


---

### 7) Array Dasar — Immutable
**Fungsi**
```js
function kelolaAntrian(list, aksi) {}
```
**Tugas:** dukung `push/pop/shift/unshift/insert/remove` tanpa memutasi input.
**Langkah:** salin dengan spread/slice, kembalikan array baru sesuai `type`.

**Contoh Hasil**
```yaml
soal_8:

  cases:

    - input: { list: ["Ali"], aksi: { type: "push", payload: "Zaid" } }

      expected: ["Ali", "Zaid"]

    - input: { list: ["Ali","Zaid"], aksi: { type: "remove", index: 0 } }

      expected: ["Zaid"]
```

---

### 9) Map – Kurva Nilai
**Fungsi**
```js
function kurvaNilai(santri, tambah) {}
```
**Tugas:** tambah poin `tambah` untuk setiap nilai siswa.
**Langkah:** `map` → buat objek baru `{nama, nilaiBaru}`.

**Contoh Hasil**
```yaml
soal_9:

  input:
    santri: [ { nama: "Ali", nilai: 70 }, { nama: "Fatimah", nilai: 90 } ]
    tambah: 5

  expected:
    - { nama: "Ali", nilaiBaru: 75 }
    - { nama: "Fatimah", nilaiBaru: 95 }
```

---

### 10) Filter + Find
**Fungsi**
```js
function seleksiDanCari(arr, batas, namaDicari) {}
```
**Tugas:** pilih yang nilai ≥ `batas`, dan cari item bernama `namaDicari`.
**Langkah:** `filter` untuk lulus, `find` untuk temuan (atau `null` jika tidak ada).

**Contoh Hasil**
```yaml
soal_10:

  input:
    arr: [ { nama: "Ali", nilai: 80 }, { nama: "Zaid", nilai: 60 } ]
    batas: 70
    namaDicari: "Ali"

  expected:
    lulus: [ { nama: "Ali", nilai: 80 } ]
    temuan: { nama: "Ali", nilai: 80 }
```

---

### 11) Reduce + Rest
**Fungsi**
```js
function analitikNilai(...nilai) {}
```
**Tugas:** kembalikan `{ total, rata }` dari argumen angka tak terbatas.
**Langkah:** jumlah dengan `reduce`, bagi panjang (0 jika kosong).

**Contoh Hasil**
```yaml
soal_11:

  input: { nilai: [80, 90, 70, 100] }

  expected: { total: 340, rata: 85 }
```

---

### 12) Object – Akses Dinamis (Immutable)
**Fungsi**
```js
function setGetDynamic(obj, key, value) {}
```
**Tugas:** set `obj[key]=value` pada objek baru dan kembalikan nilainya.
**Langkah:** `objBaru = { ...obj, [key]: value }` → `return { value: objBaru[key], obj: objBaru }`.

**Contoh Hasil**
```yaml
soal_12:

  input: { obj: { nama: "Ali" }, key: "kelas", value: "A" }

  expected:
    value: "A"
    obj: { nama: "Ali", kelas: "A" }
```

---

### 13) Destructuring (Nested)
**Fungsi**
```js
function ambilDataSantri(s) {}
```
**Tugas:** hasil `"Nama (usia) - telp"`.
**Langkah:** ambil `nama`, `profil.usia`, `profil.kontak.telp` via destructuring.

**Contoh Hasil**
```yaml
soal_13:

  input:

    s:
      nama: "Ali"
      profil: { usia: 17, kontak: { telp: "0812" } }

  expected: "Ali (17) - 0812"
```

---

### 14) Spread & Rest
**Fungsi**
```js
function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {}
```
**Tugas:** gabungkan 2 objek & jumlahkan angka `...nilaiTambahan`.
**Langkah:** `profilGabung={...admin,...asrama}`; `totalTambahan=reduce(rest)`.

**Contoh Hasil**
```yaml
soal_14:

  input:
    admin: { nama: "Ali" }
    asrama: { kamar: "B12" }
    nilaiTambahan: [10, 20, 30]

  expected:
    profilGabung: { nama: "Ali", kamar: "B12" }
    totalTambahan: 60
```

---

### 15) Integrasi Ringkas (Program • Modul • Santri)
**Fungsi**
```js
function laporanProgram(pondok) {}
```
**Tugas:** render laporan sederhana (maks 1 tingkat submodul).
**Langkah:**
- Tulis nama pondok
- Untuk tiap program: tulis nama & mentor (contoh mentor: **Mas EL**)
- Tampilkan modul + submodul (1 tingkat)
- Untuk tiap santri:
  - `rata = sum(nilai)/jumlah` (reduce)
  - `hadirPct = (jumlah true / total) * 100`
  - `if/else`: `statusNilai` (≥75 **Lulus** / selain itu **Tidak Lulus**)
  - `if/else`: `statusHadir` (≥75% **Rajin** / selain itu **Kurang Rajin**)
- Urutkan santri desc oleh `rata`
- Satukan menjadi string multiline dan `return`

**Contoh Hasil**
```yaml
soal_15:

  input:

    pondok:
      nama: "Pondok IT Indonesia"
      program:
        - nama: "JavaScript Mastery"
          mentor: { nama: "Mas EL", email: "el@pondok.id" }
          modul:
            - judul: "Array & Method"
              submodul:
                - { judul: "map" }
                - { judul: "filter" }
          santri:
            - { nama: "Ali", nilai: [80, 75, 90], kehadiran: [true, false, true, true] }
            - { nama: "Fatimah", nilai: [95, 85, 100], kehadiran: [true, true, true, true] }


  expected: 

    === PONDOK IT INDONESIA ===
    - Program: JavaScript Mastery
      Mentor: Mas EL (el@pondok.id)
      Modul:
        - Array & Method
          - map
          - filter
      Santri:
        - Fatimah — Nilai: 93.3 | Hadir: 100% | Status: Lulus & Rajin
        - Ali     — Nilai: 81.6 | Hadir: 75%  | Status: Lulus & Rajin
```

***

***
# 🌟 <span style="font-family: 'Traditional Arabic', serif;">مَعَ النَّجَاح فِى الْاِمْتِحَانِ مِنْكُمْ</span> 🌟
***


</div>
