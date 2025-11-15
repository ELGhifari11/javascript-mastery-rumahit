

# 🚀 **1. Apa Itu Callback?**

Callback adalah **fungsi yang dikirim sebagai argumen ke fungsi lain**, lalu **dipanggil kembali** (*called back*) di dalam fungsi tersebut.

### 🎯 Intinya:

Callback = “fungsi yang dipanggil belakangan”.

### 🔎 Kenapa perlu callback?

Karena JavaScript itu:

* Single-thread
* Eksekusi baris per baris
* Banyak proses yang **butuh waktu** (misalnya fetch API, delay, animasi, baca file)

Callback membantu kita mengatur:

* Urutan eksekusi
* Tindakan setelah suatu proses selesai

---

# 🧠 **2. Bentuk Callback yang Paling Sering Dipakai**

### ✔️ Contoh dasar

```javascript
function halo(nama) {
  console.log("Halo " + nama);
}

function prosesUser(callback) {
  console.log("Memproses user...");
  callback("Ghifari");
}

prosesUser(halo);
```

✔️ Output:

```
Memproses user...
Halo Ghifari
```

---

# 🎬 **3. Callback Sederhana (LEVEL VERY NEWBIE)**

## 🟦 Study Case 1 — Eksekusi setelah perulangan selesai

```javascript
function ulang(n, callback) {
  for (let i = 1; i <= n; i++) {
    console.log("Hitungan ke " + i);
  }
  callback();
}

ulang(3, () => console.log("Selesai!"));
```

---

## 🟦 Study Case 2 — Validasi data sebelum disimpan

```javascript
function simpanData(data, callback) {
  if (!data.nama) {
    console.log("Nama tidak boleh kosong");
    return;
  }
  callback(data);
}

simpanData({ nama: "Abyan" }, (obj) => {
  console.log("Data berhasil disimpan:", obj);
});
```

---

## 🟦 Study Case 3 — Callback + Array

```javascript
function prosesArray(arr, callback) {
  const hasil = callback(arr);
  console.log("Hasil:", hasil);
}

prosesArray([1, 2, 3], (arr) => arr.map(x => x * 2));
```

---

# 🔥 **4. Callback Asynchronous (LEVEL PEMULA – PENTING BANGET)**

JavaScript sering menggunakan callback dalam proses asynchronous.

## ⏱ Study Case 4 — setTimeout

```javascript
console.log("Mulai");

setTimeout(() => {
  console.log("Ini jalan setelah 2 detik");
}, 2000);

console.log("Selesai");
```

Output:

```
Mulai
Selesai
Ini jalan setelah 2 detik
```

---

## 🌐 Study Case 5 — Fetch Data (Callback di fungsi kita sendiri)

```javascript
function ambilUser(callback) {
  setTimeout(() => {
    callback({ id: 1, nama: "Zahran" });
  }, 1000);
}

ambilUser((user) => console.log("User diterima:", user));
```

---

# 🧩 **5. Callback Hell (Wajib Tahu)**

Callback banyak bersarang = kode menjadi horor.

```javascript
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
```

---

# 📦 **6. LocalStorage (PENJELASAN SUPER JELAS)**

LocalStorage = tempat penyimpanan **di browser**, bersifat **permanen** (tidak hilang walau refresh).

### ✔️ Kapasitas ± 5MB

### ✔️ Tipe data yang disimpan: **STRING**

📌 **Data Object / Array harus diubah ke JSON dulu!**

---

# 🧪 **Cara Pakai LocalStorage**

## ✔️ Simpan

```javascript
localStorage.setItem("nama", "Ghifari");
```

## ✔️ Ambil

```javascript
localStorage.getItem("nama");
```

## ✔️ Hapus 1 item

```javascript
localStorage.removeItem("nama");
```

## ✔️ Bersihkan semua

```javascript
localStorage.clear();
```

---

# 🔥 **7. LocalStorage + JSON (WAJIB UNTUK APLIKASI NYATA)**

## ✔️ JSON.stringify → Ubah Object jadi string

## ✔️ JSON.parse → Ubah string jadi Object

---

# 🟩 Study Case LocalStorage 1 — Simpan Object User

```javascript
const user = {
  nama: "Yusril",
  role: "Programmer",
  level: 1
};

localStorage.setItem("user", JSON.stringify(user));
```

Ambil:

```javascript
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.nama);
```

---

# 🟩 Study Case LocalStorage 2 — Simpan Array

```javascript
const tasks = ["belajar js", "makan", "tidur"];
localStorage.setItem("tasks", JSON.stringify(tasks));
```

Ambil:

```javascript
const t = JSON.parse(localStorage.getItem("tasks"));
console.log(t);
```

---

# 🟩 Study Case LocalStorage 3 — Push data baru ke array di LocalStorage

```javascript
function tambahTask(task) {
  let data = JSON.parse(localStorage.getItem("tasks")) || [];
  data.push(task);
  localStorage.setItem("tasks", JSON.stringify(data));
}

tambahTask("ngoding");
```

---

# 🟩 Study Case LocalStorage 4 — Hapus item di array localStorage (pakai splice)

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.splice(1, 1);  // hapus index ke 1
localStorage.setItem("tasks", JSON.stringify(tasks));
```

---

# 🟩 Study Case LocalStorage 5 — Update item array

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks[0] = "belajar JavaScript dasar";
localStorage.setItem("tasks", JSON.stringify(tasks));
```

---

# 🟩 Study Case LocalStorage 6 — Menyimpan Data Absensi

```javascript
function absen(nama) {
  let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
  absensi.push({
    nama,
    waktu: new Date().toISOString()
  });
  localStorage.setItem("absensi", JSON.stringify(absensi));
}

absen("Fadhli");
```

---

# 🟩 Study Case LocalStorage 7 — Filtering Data dari Penyimpanan

```javascript
let absensi = JSON.parse(localStorage.getItem("absensi"));
let hariIni = absensi.filter(a => a.nama === "Fadhli");
console.log(hariIni);
```

---

# 🟩 Study Case LocalStorage 8 — Mencari Data dengan find()

```javascript
let absensi = JSON.parse(localStorage.getItem("absensi"));
let found = absensi.find(a => a.nama === "Fadhli");
console.log(found);
```

---

# 🟩 Study Case LocalStorage 9 — Reduce untuk total pertemuan

```javascript
let absensi = JSON.parse(localStorage.getItem("absensi"));

let total = absensi.reduce((acc, curr) => {
  acc[curr.nama] = (acc[curr.nama] || 0) + 1;
  return acc;
}, {});

console.log(total);
```

---

# 🟩 Study Case LocalStorage 10 — Penggunaan di Aplikasi Mini To-Do

```javascript
function loadTodo() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

function saveTodo(list) {
  localStorage.setItem("todo", JSON.stringify(list));
}

function addTodo(text) {
  const list = loadTodo();
  list.push({ text, done: false });
  saveTodo(list);
}

addTodo("Belajar Callback");
```

---

# 🧠 Callback + LocalStorage (DIGABUNGKAN)

## 🟧 Study Case — Simpan data hanya jika valid, lalu tampilkan

```javascript
function validasi(data, callback) {
  if (!data.nama) return console.log("data tidak valid");
  callback(data);
}

function simpanKeLS(obj) {
  let daftar = JSON.parse(localStorage.getItem("daftar")) || [];
  daftar.push(obj);
  localStorage.setItem("daftar", JSON.stringify(daftar));
  console.log("Data berhasil disimpan");
}

validasi({ nama: "Rayhan", nilai: 88 }, simpanKeLS);
```

---

# 🧠 Study Case Besar — Absensi Santri (Full JSON Manipulation)

```javascript
function tambahAbsensi(nama, callback) {
  const absensi = JSON.parse(localStorage.getItem("absensi")) || [];
  const data = {
    id: absensi.length + 1,
    nama,
    waktu: new Date().toLocaleString()
  };

  callback(absensi, data);
}

function simpan(absensi, dataBaru) {
  absensi.push(dataBaru);
  localStorage.setItem("absensi", JSON.stringify(absensi));
  console.log("Absensi masuk:", dataBaru);
}

tambahAbsensi("Ikhya", simpan);
```

---

# 📝 **Latihan Soal (50 Soal)**

Format: campuran easy → medium → advance

## 🟢 **EASY (15 soal)**

1. Apa itu callback dalam JavaScript? Berikan contoh paling sederhana.
2. Buat fungsi `sapaUser(callback)` lalu panggil callback yang mencetak “Halo Santri!”.
3. Buat contoh callback yang menambah dua angka.
4. Jelaskan kenapa kita harus pakai `JSON.stringify` di localStorage.
5. Simpan string “Belajar JS” ke localStorage.
6. Ambil data tersebut dari localStorage.
7. Simpan array `[1,2,3]` ke localStorage.
8. Ambil dan tampilkan kembali array tersebut.
9. Apa itu JSON?
10. Buat object santri (`nama`, `kelas`, `nilai`) dan simpan ke localStorage.
11. Buat callback yang memvalidasi input tidak kosong.
12. Buat fungsi `tunda(callback)` yang menjalankan callback setelah 1 detik.
13. Buat fungsi yang menerima array dan callback untuk mengalikan setiap item.
14. Buat fungsi hapus item localStorage.
15. Ambil semua key di localStorage (hint: `Object.keys(localStorage)`)

---

## 🟡 **MEDIUM (20 soal)**

16. Buat program absensi memakai callback validasi + penyimpanan localStorage.
17. Buat to-do list sederhana (add, list).
18. Buat fungsi edit item to-do pada indeks tertentu.
19. Buat fungsi hapus item to-do.
20. Buat fitur mencari to-do tertentu memakai `find()`.
21. Buat fitur filter to-do yang sudah selesai.
22. Buat fitur hitung total to-do menggunakan `reduce()`.
23. Buat program yang menyimpan history login user.
24. Buat program yang menyimpan pengunjung halaman (count).
25. Buat fungsi yang menjalankan callback hanya jika angka genap.
26. Buat program yang menyimpan nilai ujian per santri.
27. Buat fitur melihat nilai santri tertentu.
28. Buat fitur update nilai santri.
29. Buat fitur hapus santri.
30. Buat fitur ranking nilai (sorting).
31. Simpan data ranking di localStorage.
32. Buat fitur filter santri nilai < 50.
33. Buat fitur cari nama santri yang mengandung kata tertentu.
34. Buat fungsi yang menerima callback sukses dan callback gagal.
35. Implementasikan callback hell dalam login → ambil data → tampilkan UI.

---

## 🔵 **ADVANCE (15 soal)**

36. Buat mini app Absensi Mingguan lengkap CRUD + localStorage.
37. Buat app Catatan Harian dengan timestamp.
38. Buat app Kasir sederhana dengan cart + total harga.
39. Buat app penyimpanan riwayat transaksi.
40. Buat app kalkulator yang history-nya disimpan ke localStorage.
41. Buat fungsi `pipeline` (memakai beberapa callback berurutan).
42. Buat fitur import/export data JSON.
43. Buat fitur backup localStorage ke file JSON.
44. Buat app challenge latihan coding (soal + jawaban user).
45. Buat app kuis mini (random soal dari array).
46. Buat fitur pengingat waktu belajar (timer + callback).
47. Buat app CRUD barang + pencarian + filtering.
48. Buat fitur rekap nilai dari banyak object → simpan ke localStorage.
49. Buat app leaderboard (rank dinamis memakai reduce + sort).
50. Buat app login sederhana (tanpa backend) menggunakan localStorage sebagai database.

---
