

# 🧭 **MODUL FINAL: LocalStorage & SessionStorage (Pendekatan Function + Dunia Pendidikan)**

### *JavaScript Mastery — RUMAH IT HUB / LMS PONDOK PROGRAMMER*

### Level: Newbie → Intermediate → Advance

---

# 1. 🎯 TUJUAN PEMBELAJARAN

Setelah mempelajari modul ini, user diharapkan:

✔ Mengenal konsep penyimpanan lokal di browser
✔ Memahami perbedaan LocalStorage & SessionStorage
✔ Mampu menyimpan dan mengambil data menggunakan JavaScript
✔ Terbiasa menggunakan function sebagai pendekatan coding rapi
✔ Bisa membuat mini-database berbasis storage
✔ Bisa membuat fitur pendidikan seperti:
— penyimpanan progres belajar
— bookmark materi
— draft jawaban ujian
— login & register sederhana
— manajemen user
— preferensi UI (mode malam, ukuran font)
— draft form data santri
✔ Memiliki pola pikir programmer: state management, modularitas, deklaratif

---

# 2. 🌟 GRAND WHY (Versi Dunia Pendidikan)

> **“Aplikasi pembelajaran modern harus bisa mengingat user, meskipun browser ditutup.”**

Dalam LMS, fitur-fitur yang sangat penting:

* Progres user tidak hilang
* Draft jawaban ujian tersimpan otomatis
* Mode gelap untuk kenyamanan belajar
* Bookmark materi favorit
* Presensi/histori belajar
* Preferensi belajar (“Bahasa Indonesia / English”)
* Data login sederhana
* Keranjang course (pembelian kelas)

Semua itu **tidak mungkin** berjalan lancar tanpa konsep penyimpanan data lokal.

Storage = *mini database* di sisi browser.

---

# 3. 📚 KONSEP DASAR STORAGE (Mudah Dipahami)

## 3.1 Apa itu Web Storage?

Browser menyediakan tempat untuk menyimpan **data kecil** tanpa server.

### Ada dua jenis:

| Jenis              | Bertahan? | Hilang                                | Cocok Untuk                                |
| ------------------ | --------- | ------------------------------------- | ------------------------------------------ |
| **LocalStorage**   | Ya        | Tidak hilang walaupun browser ditutup | Progress belajar, tema, bookmark           |
| **SessionStorage** | Tidak     | Hilang saat tab browser ditutup       | Ujian sesi, flow pendaftaran, step-by-step |

---

## 3.2 Hanya Bisa Menyimpan Tipe Data String

Karena itu semua data (object/array) harus dikonversi:

### Simpan

```js
JSON.stringify()
```

### Ambil

```js
JSON.parse()
```

---

## 3.3 Method Utama

```js
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
```

Untuk session:

```js
sessionStorage.setItem()
sessionStorage.getItem()
```

---

# 4. ⚙️ Pendekatan Function-Based (Rapi & Scalable)


```js
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function remove(key) {
  localStorage.removeItem(key);
}
```

Untuk session:

```js
function saveSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function loadSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
```

---

# 5. 🧱 TEMPLATE HTML DASAR (untuk semua studycase)


```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Studycase Storage</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .box { padding: 16px; border: 1px solid #ddd; margin-bottom:20px; border-radius:8px; }
    label { font-weight: bold; margin-bottom: 8px; display: block; }
    input, textarea, select { width:100%; padding:8px; margin-bottom:12px; }
    button { padding:10px 14px; cursor:pointer; }
  </style>
</head>
<body>

<h1>Judul Studycase</h1>
<div id="app"></div>

<script src="main.js"></script>
</body>
</html>
```

---

# 6. 🔥 **25 STUDYCASE LENGKAP (Relevan Dunia Pendidikan)**

Semua 100% **function-based** dan **newbie friendly**.

---

# 🟢 **EASY LEVEL (1–8)**

Fondasi untuk memahami penyimpanan sederhana.

---

## **1. STUDYCASE: Menyimpan Nama user**

🔎 *Digunakan di: Profil user / Dashboard Belajar*

### Function

```js
function saveName() {
  const name = document.getElementById("namaInput").value.trim();
  if (!name) return alert("Nama tidak boleh kosong");
  save("nama_user", name);
  renderName();
}

function renderName() {
  document.getElementById("display").innerText = load("nama_user") ?? "-";
}
```

---

## **2. Counter Kunjungan Halaman Modul**

🔎 *Untuk analitik: berapa kali user membuka modul?*

### Function

```js
function increaseVisit() {
  let count = load("visit_count") ?? 0;
  count++;
  save("visit_count", count);
  renderVisit();
}

function renderVisit() {
  document.getElementById("app").innerHTML =
    `<p>Jumlah kunjungan: <b>${load("visit_count")}</b></p>`;
}
```

---

## **3. Dark Mode Untuk Kenyamanan Belajar**

```js
function toggleTheme() {
  const now = load("theme") ?? "light";
  const newTheme = now === "light" ? "dark" : "light";
  save("theme", newTheme);
  applyTheme();
}

function applyTheme() {
  const theme = load("theme");
  document.body.style.background = theme === "dark" ? "#111" : "#fff";
}
```

---

## **4. Auto Draft Jawaban Tugas**

🔎 *Sering dipakai saat user menulis esai atau jawaban panjang*

```js
function saveDraft() {
  const text = document.getElementById("draft").value;
  save("draft_tugas", text);
}

function loadDraft() {
  document.getElementById("draft").value = load("draft_tugas") ?? "";
}
```

---

## **5. Preferensi Bahasa Belajar (ID/EN)**

```js
function saveLang() {
  const value = document.getElementById("lang").value;
  save("bahasa", value);
  renderLang();
}

function renderLang() {
  document.getElementById("selected").innerText = load("bahasa") ?? "ID";
}
```

---

## **6. To-do Belajar (List Tugas Harian user)**

```js
function addTodo() {
  const text = document.getElementById("todo").value.trim();
  if (!text) return;

  const todos = load("todo_list") ?? [];
  todos.push(text);
  save("todo_list", todos);
  renderTodo();
}

function renderTodo() {
  const todos = load("todo_list") ?? [];
  document.getElementById("list").innerHTML =
    todos.map(t => `<li>${t}</li>`).join("");
}
```

---

## **7. Penyesuaian Ukuran Font (Ramai digunakan di LMS)**

```js
function saveFont() {
  save("font_size", document.getElementById("font").value);
  applyFont();
}

function applyFont() {
  document.body.style.fontSize = load("font_size") ?? "16px";
}
```

---

## **8. Form Validation + Restore (Form Biodata user)**

```js
function saveForm() {
  save("form_user", {
    nama: document.getElementById("f_name").value,
    email: document.getElementById("f_email").value
  });
}

function loadForm() {
  const d = load("form_user");
  if (!d) return;
  document.getElementById("f_name").value = d.nama;
  document.getElementById("f_email").value = d.email;
}
```

---

# 🟡 **MEDIUM LEVEL (9–17)**

Sekarang mulai membuat fitur LMS nyata.

---

## **9. Keranjang Kelas (Add to Cart Course)**

```js
function addCourse(name, price) {
  const cart = load("kelas_cart") ?? [];
  cart.push({ name, price });
  save("kelas_cart", cart);
  renderCart();
}
```

---

## **10. Progres Modul Belajar**

```js
function addProgress() {
  let p = load("progress_modul") ?? 0;
  p++;
  save("progress_modul", p);
  renderProgress();
}
```

---

## **11. Filter Kategori Materi**

```js
function saveFilter() {
  save("filter_materi", document.getElementById("filt").value);
  renderFilter();
}
```

---

## **12. Riwayat Pencarian Materi**

```js
function addSearch() {
  const q = document.getElementById("search").value.trim();
  if (!q) return;

  const hist = load("history_materi") ?? [];
  hist.unshift(q);
  save("history_materi", hist);
  renderHistory();
}
```

---

## **13. Step Ujian (SessionStorage)**

```js
function nextStep() {
  let s = loadSession("ujian_step") ?? 1;
  s++;
  saveSession("ujian_step", s);
  renderStep();
}
```

---

## **14. Theme + Layout Manager (UI Belajar)**

Mengelola dua state: theme & layout grid/list.

---

## **15. Bookmark Materi**

```js
function bookmarkMateri(id) {
  const list = load("bookmark") ?? [];
  list.push(id);
  save("bookmark", list);
}
```

---

## **16. Multi Step Form Pendaftaran user**

Step-by-step, tiap step disimpan.

---

## **17. Activity Log (Catatan Aktivitas user)**

```js
function logActivity(text) {
  const logs = load("aktivitas") ?? [];
  logs.push({ text, time: new Date().toISOString() });
  save("aktivitas", logs);
}
```

---

# 🔴 **ADVANCE LEVEL (18–25)**

Fitur ini mendekati sistem LMS mini.

---

## **18. Register user (Database Mini)**

```js
function registeruser() {
  const user = {
    username: document.getElementById("user").value,
    password: document.getElementById("pass").value,
  };

  const users = load("db_user") ?? [];
  users.push(user);

  save("db_user", users);

  alert("Registrasi sukses!");
}
```

---

## **19. Login user**

```js
function loginuser() {
  const username = document.getElementById("l_user").value;
  const pass = document.getElementById("l_pass").value;

  const users = load("db_user") ?? [];
  const found = users.find(u => u.username === username && u.password === pass);

  if (!found) return alert("Login salah.");

  save("user_login", found);
}
```

---

## **20. Manajemen user (CRUD)**

* tambah user
* update data
* hapus user
* render daftar user

Semua berbasis LocalStorage.

---

## **21. Manajemen Kelas / Pelajaran (CRUD Produk Pendidikan)**

Structure:

```js
{ id, namaKelas, durasi, harga }
```

---

## **22. Simulasi Token Sesi Ujian**

```js
function createExamToken(user) {
  saveSession("token_ujian", {
    user,
    expired: Date.now() + 30 * 60 * 1000 // 30 menit
  });
}
```

---

## **23. Dashboard Personal (Berbasis Role user/Guru)**

Render halaman berdasarkan:

```js
load("user_login")
```

---

## **24. Manajemen Preferensi Halaman**

State disimpan:

* “sidebar terbuka / tertutup”
* “tampilan list / grid”
* “mode belajar fokus / normal”

---

## **25. Backup & Restore Database LMS**

### Backup

```js
function backupAll() {
  const data = JSON.stringify(localStorage);
  console.log("Backup:", data);
}
```

### Restore

```js
function restoreAll(jsonString) {
  const data = JSON.parse(jsonString);
  Object.keys(data).forEach(k => {
    localStorage.setItem(k, data[k]);
  });
}
```