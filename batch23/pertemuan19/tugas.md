
# 1. Materi Knowledge DOM for Newbie

## 1.1. Apa itu DOM?

* **DOM (Document Object Model)** = cara browser merepresentasikan HTML dalam bentuk **pohon (tree)** object.
* Setiap tag HTML → jadi **node / object** yang bisa diakses dengan JavaScript.

Ilustrasi:

```html
<body>
  <h1>Judul</h1>
  <p>Paragraf</p>
</body>
```

Di JS:

```js
document.body            // <body>...</body>
document.querySelector("h1") // <h1>Judul</h1>
```

---

## 1.2. Alur Kerja DOM yang Harus Mereka Hafal

**Pattern umum saat main DOM:**

1. **Ambil elemen** → `getElementById`, `querySelector`, `querySelectorAll`.
2. **Pasang event listener** → `addEventListener("click", ...)`, `"keyup"`, `"submit"`, dll.
3. **Ubah sesuatu** → teks, style, class, atribut, membuat/menghapus elemen.

Contoh mini:

```html
<h1 id="title">Hello</h1>
<button id="btn">Ganti</button>
<script>
  const title = document.getElementById("title");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    title.innerText = "Judul Baru";
  });
</script>
```

---

## 1.3. Cara Mengambil Elemen

```js
// berdasarkan id
const title = document.getElementById("title");

// CSS selector pertama yang ketemu
const firstParagraph = document.querySelector("p");
const special = document.querySelector(".highlight");

// semua elemen yang match (NodeList)
const items = document.querySelectorAll(".item");
```

---

## 1.4. Mengubah Teks & HTML

```js
const el = document.getElementById("text");

// hanya teks
el.innerText = "Halo santri!";

// bisa teks + tag HTML
el.innerHTML = "<b>Halo</b> santri!";
```

---

## 1.5. Mengubah Style & Class

```js
const box = document.getElementById("box");

// style langsung
box.style.backgroundColor = "black";
box.style.color = "white";

// class (lebih rapi pakai CSS)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");
```

---

## 1.6. Attribute & Data

```js
const img = document.querySelector("img");
img.setAttribute("src", "foto.png");
img.setAttribute("alt", "Foto santri");

// data-*
const btn = document.querySelector("button");
btn.dataset.id = "123";
console.log(btn.dataset.id); // "123"
```

---

## 1.7. Membuat & Menghapus Elemen

```js
const ul = document.getElementById("list");

const li = document.createElement("li");
li.textContent = "Item baru";
ul.appendChild(li);

// hapus
li.remove();
```

---

## 1.8. Event Listener

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Tombol diklik");
});

const input = document.getElementById("name");
input.addEventListener("keyup", function (event) {
  console.log("Ketik:", event.target.value);
});
```

---

**Itu fondasi.**
Selanjutnya kita latih mereka lewat **banyak study case** 👇

---

# 2. 10 Study Case DOM Dasar (Gambaran / Pemanasan)

> Tiap study case sudah ada contoh sintaks sederhana.
> Bisa dipakai sebagai **demo live** / contoh di modul.

---

## 2.1. Ganti Judul Halaman

```html
<h1 id="page-title">Belajar JavaScript</h1>
<button id="btn-change">Ganti Judul</button>

<script>
  const title = document.getElementById("page-title");
  const btn = document.getElementById("btn-change");

  btn.addEventListener("click", () => {
    title.innerText = "Selamat Datang di Kelas DOM!";
  });
</script>
```

---

## 2.2. Live Preview Teks

```html
<input id="name-input" placeholder="Ketik nama..." />
<p>Preview: <span id="name-preview">(belum ada)</span></p>

<script>
  const input = document.getElementById("name-input");
  const preview = document.getElementById("name-preview");

  input.addEventListener("keyup", () => {
    const v = input.value.trim();
    preview.textContent = v === "" ? "(belum ada)" : v;
  });
</script>
```

---

## 2.3. Show / Hide Paragraf

```html
<p id="desc">Ini paragraf yang bisa disembunyikan.</p>
<button id="toggle-btn">Sembunyikan</button>

<script>
  const desc = document.getElementById("desc");
  const btn = document.getElementById("toggle-btn");
  let visible = true;

  btn.addEventListener("click", () => {
    visible = !visible;
    desc.style.display = visible ? "block" : "none";
    btn.innerText = visible ? "Sembunyikan" : "Tampilkan";
  });
</script>
```

---

## 2.4. Counter Sederhana

```html
<p>Jumlah: <span id="count">0</span></p>
<button id="inc">Tambah</button>

<script>
  const countEl = document.getElementById("count");
  const incBtn = document.getElementById("inc");
  let count = 0;

  incBtn.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
  });
</script>
```

---

## 2.5. Tambah Item ke List

```html
<input id="task-input" placeholder="Tulis tugas..." />
<button id="add-task">Tambah</button>
<ul id="task-list"></ul>

<script>
  const input = document.getElementById("task-input");
  const btn = document.getElementById("add-task");
  const list = document.getElementById("task-list");

  btn.addEventListener("click", () => {
    if (!input.value.trim()) return;
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  });
</script>
```

---

## 2.6. Menu Aktif

```html
<ul id="menu">
  <li class="menu-item">Home</li>
  <li class="menu-item">Artikel</li>
  <li class="menu-item">Kontak</li>
</ul>

<script>
  const menu = document.getElementById("menu");

  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-item")) return;

    document
      .querySelectorAll(".menu-item")
      .forEach((item) => item.classList.remove("active"));

    e.target.classList.add("active");
  });
</script>
```

---

## 2.7. Validasi Input Nama

```html
<input id="nama" placeholder="Nama..." />
<button id="save">Simpan</button>
<p id="error" style="color:red;"></p>
<p id="result"></p>

<script>
  const nama = document.getElementById("nama");
  const save = document.getElementById("save");
  const err = document.getElementById("error");
  const res = document.getElementById("result");

  save.addEventListener("click", () => {
    const value = nama.value.trim();
    if (!value) {
      err.textContent = "Nama tidak boleh kosong.";
      res.textContent = "";
      return;
    }
    err.textContent = "";
    res.textContent = "Hai, " + value + "!";
  });
</script>
```

---

## 2.8. Ganti Gambar dengan Tombol

```html
<img id="photo" src="img1.jpg" width="200" />
<button id="change-photo">Ganti Gambar</button>

<script>
  const photo = document.getElementById("photo");
  const btn = document.getElementById("change-photo");
  let toggle = false;

  btn.addEventListener("click", () => {
    toggle = !toggle;
    photo.src = toggle ? "img2.jpg" : "img1.jpg";
  });
</script>
```

---

## 2.9. Checkbox Menentukan Status

```html
<label>
  <input type="checkbox" id="ready" />
  Saya siap belajar hari ini
</label>
<p id="status"></p>

<script>
  const cb = document.getElementById("ready");
  const status = document.getElementById("status");

  cb.addEventListener("change", () => {
    status.textContent = cb.checked
      ? "Mantap! Kamu siap belajar 💪"
      : "Yuk niatkan dulu.";
  });
</script>
```

---

## 2.10. Tabel dari Array

```html
<table border="1">
  <thead>
    <tr><th>No</th><th>Nama</th><th>Nilai</th></tr>
  </thead>
  <tbody id="tbody"></tbody>
</table>

<script>
  const data = [
    { name: "Ahmad", score: 80 },
    { name: "Bilal", score: 65 },
    { name: "Citra", score: 90 },
  ];

  const tbody = document.getElementById("tbody");

  data.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.name}</td>
      <td>${item.score}</td>
    `;
    tbody.appendChild(tr);
  });
</script>
```

---

# 3. 20 Study Case DOM + Challenge (Tiapp Case Ada Challenge)

> Di sini mulai **lebih terstruktur**.
> Setiap study case = **Deskripsi + Sintaks dasar + Challenge**.
> Kamu bisa kasih ke santri untuk eksplorasi / eksperimen.

---

## 3.1. Counter dengan Pesan Motivasi

**Deskripsi:**
Tombol + counter + pesan motivasi ketika angka tertentu.

```html
<p>Jumlah latihan hari ini: <span id="count">0</span></p>
<button id="btn-plus">Tambah Latihan</button>
<p id="msg"></p>

<script>
  const countEl = document.getElementById("count");
  const btn = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    if (count >= 5) msg.textContent = "Wah, rajin juga! 🔥";
    else msg.textContent = "";
  });
</script>
```

**Challenge:**

* Kalau `count` kelipatan 10 → tampilkan pesan spesial lain.
* Kalau `count` > 30 → ubah warna text count jadi merah.

---

## 3.2. Todo List + Hapus Item

```html
<h2>Todo List</h2>
<input id="todo-input" placeholder="Tugas baru..." />
<button id="todo-add">Tambah</button>
<ul id="todo-list"></ul>

<script>
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("todo-add");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Hapus";
    delBtn.addEventListener("click", () => li.remove());

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  });
</script>
```

**Challenge:**

* Kalau `li` diklik (bukan tombol Hapus) → toggle class `done` (teks dicoret).
* Tambah info jumlah tugas total & tugas yang sudah selesai.

---

## 3.3. Live Search Nama Santri

```html
<h2>Daftar Santri</h2>
<input id="search" placeholder="Cari..." />
<ul id="santri-list">
  <li>Ahmad</li>
  <li>Bilal</li>
  <li>Citra</li>
  <li>Diandra</li>
  <li>Fadhli</li>
</ul>
<p id="info"></p>

<script>
  const search = document.getElementById("search");
  const list = document.getElementById("santri-list");
  const info = document.getElementById("info");

  search.addEventListener("keyup", () => {
    const q = search.value.toLowerCase();
    let countShown = 0;

    list.querySelectorAll("li").forEach((li) => {
      const name = li.textContent.toLowerCase();
      const match = name.includes(q);
      li.style.display = match ? "list-item" : "none";
      if (match) countShown++;
    });

    info.textContent =
      countShown === 0 ? "Tidak ada santri ditemukan" : `Ditemukan ${countShown} santri`;
  });
</script>
```

**Challenge:**

* Highlight teks yang cocok dengan `<mark>` (butuh `innerHTML`).
* Tambahkan data santri lebih banyak dan biarkan mereka eksplorasi.

---

## 3.4. Tab Navigasi Konten

```html
<div id="tabs">
  <button data-tab="profil">Profil</button>
  <button data-tab="kelas">Kelas</button>
  <button data-tab="kontak">Kontak</button>
</div>

<div id="tab-content">
  <div data-tab-content="profil">Ini Profil.</div>
  <div data-tab-content="kelas" style="display:none;">Ini info kelas.</div>
  <div data-tab-content="kontak" style="display:none;">Ini kontak.</div>
</div>

<script>
  const tabs = document.getElementById("tabs");
  const contents = document.querySelectorAll("[data-tab-content]");

  tabs.addEventListener("click", (e) => {
    const tab = e.target.dataset.tab;
    if (!tab) return;

    contents.forEach((c) => {
      c.style.display = c.dataset.tabContent === tab ? "block" : "none";
    });
  });
</script>
```

**Challenge:**

* Tambah class `active` pada tab yang dipilih.
* Pisahkan styling di CSS, jangan inline.

---

## 3.5. FAQ Accordion

```html
<div class="faq">
  <div class="question">Apa itu DOM?</div>
  <div class="answer" style="display:none;">DOM adalah representasi HTML di JS.</div>
</div>
<div class="faq">
  <div class="question">Apa itu Event?</div>
  <div class="answer" style="display:none;">Event adalah aksi (click, keyup, dll).</div>
</div>

<script>
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const q = faq.querySelector(".question");
    const a = faq.querySelector(".answer");

    q.addEventListener("click", () => {
      const isVisible = a.style.display === "block";
      a.style.display = isVisible ? "none" : "block";
    });
  });
</script>
```

**Challenge:**

* Hanya 1 FAQ yang boleh terbuka dalam satu waktu.
* Tambah icon `+` / `-` yang berubah tergantung open/close.

---

## 3.6. Rating Bintang (Versi Lengkap)

```html
<div id="rating">
  <span class="star" data-value="1">★</span>
  <span class="star" data-value="2">★</span>
  <span class="star" data-value="3">★</span>
  <span class="star" data-value="4">★</span>
  <span class="star" data-value="5">★</span>
</div>
<p id="rating-text">Belum ada rating.</p>

<script>
  const rating = document.getElementById("rating");
  const ratingText = document.getElementById("rating-text");
  let current = 0;

  function setActive(r) {
    rating.querySelectorAll(".star").forEach((star) => {
      const value = Number(star.dataset.value);
      star.classList.toggle("active", value <= r);
    });
  }

  rating.addEventListener("click", (e) => {
    if (!e.target.classList.contains("star")) return;
    current = Number(e.target.dataset.value);
    setActive(current);
    ratingText.textContent = `Rating: ${current}/5`;
  });
</script>
```

**Challenge:**

* Tambahkan hover (on `mouseover` dan `mouseout`).
* Tambahkan keterangan: 1 = Buruk, 5 = Luar biasa.

---

## 3.7. Image Gallery + Caption

```html
<img id="main-img" src="img1.jpg" alt="Gambar 1" width="300" />
<p id="caption">Gambar 1</p>

<div id="thumbs">
  <img class="thumb" src="img1.jpg" data-caption="Gambar 1" width="80" />
  <img class="thumb" src="img2.jpg" data-caption="Gambar 2" width="80" />
  <img class="thumb" src="img3.jpg" data-caption="Gambar 3" width="80" />
</div>

<script>
  const mainImg = document.getElementById("main-img");
  const caption = document.getElementById("caption");
  const thumbs = document.getElementById("thumbs");

  thumbs.addEventListener("click", (e) => {
    if (!e.target.classList.contains("thumb")) return;

    mainImg.src = e.target.src;
    caption.textContent = e.target.dataset.caption;
  });
</script>
```

**Challenge:**

* Tambah class `active-thumb` pada thumbnail yang terpilih.
* Tambah transisi fade pada gambar utama.

---

## 3.8. Dark Mode / Light Mode + Simpan ke localStorage (opsional)

```html
<button id="theme-btn">Pakai Dark Mode</button>
<h1>Halaman Belajar JS</h1>

<script>
  const btn = document.getElementById("theme-btn");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      btn.textContent = "Pakai Light Mode";
    } else {
      document.body.classList.remove("dark");
      btn.textContent = "Pakai Dark Mode";
    }
  }

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    const theme = isDark ? "dark" : "light";
    applyTheme(theme);
  });
</script>
```

**Challenge:**

* Simpan tema di `localStorage` dan load saat halaman di-refresh.
* Tambah ikon 🌙 / ☀️.

---

## 3.9. Form Pendaftaran Multi Field + Ringkasan

```html
<form id="reg-form">
  <input id="reg-name" placeholder="Nama" /><br />
  <input id="reg-email" placeholder="Email" /><br />
  <select id="reg-class">
    <option value="">Pilih kelas...</option>
    <option value="JS">JavaScript</option>
    <option value="PHP">PHP</option>
  </select><br />
  <button type="submit">Daftar</button>
</form>

<p id="reg-error" style="color:red;"></p>
<p id="reg-summary"></p>

<script>
  const form = document.getElementById("reg-form");
  const err = document.getElementById("reg-error");
  const summary = document.getElementById("reg-summary");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const kelas = document.getElementById("reg-class").value;

    if (!name || !email || !kelas) {
      err.textContent = "Semua field wajib diisi.";
      summary.textContent = "";
      return;
    }

    err.textContent = "";
    summary.textContent = `Nama: ${name}, Email: ${email}, Kelas: ${kelas}`;
  });
</script>
```

**Challenge:**

* Validasi email sederhana (cek `@` dan `.`).
* Tambah pesan error spesifik per field.

---

## 3.10. Toast Notification Sederhana

```html
<button id="show-toast">Tampilkan Notifikasi</button>
<div id="toast-container"></div>

<script>
  const btn = document.getElementById("show-toast");
  const container = document.getElementById("toast-container");

  btn.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Data tersimpan!";

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });
</script>
```

**Challenge:**

* Tambahkan tombol `✕` di setiap toast untuk menutup manual.
* Tambahkan type toast: sukses / error / info (warna berbeda).

---

## 3.11. Multi-Step Form (Step 1 → Step 2 → Review)

> Skeleton saja, biar santri isi logika detail.

```html
<div id="step-1">
  <h3>Step 1: Data Diri</h3>
  <input id="s1-name" placeholder="Nama" />
  <button id="to-step-2">Lanjut</button>
</div>

<div id="step-2" style="display:none;">
  <h3>Step 2: Info Tambahan</h3>
  <input id="s2-age" placeholder="Umur" />
  <button id="back-step-1">Kembali</button>
  <button id="to-step-3">Lanjut</button>
</div>

<div id="step-3" style="display:none;">
  <h3>Review</h3>
  <p id="review"></p>
  <button id="submit-all">Submit</button>
</div>

<script>
  // ambil semua elemen, atur show/hide step
  // isi sendiri oleh santri: pindah step, validasi, tampilkan review
</script>
```

**Challenge:**

* Isi logika:

  * Validasi tiap step sebelum pindah.
  * Tampilkan data dari step 1 & 2 di step 3.
* Optional: simpan data sementara di objek JS / localStorage.

---

## 3.12. Dashboard Nilai Mini + Sort

```html
<table border="1">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th id="th-score">Nilai ▲</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody id="score-body"></tbody>
</table>

<script>
  let ascending = true;
  let scores = [
    { name: "Ahmad", score: 80 },
    { name: "Bilal", score: 60 },
    { name: "Citra", score: 90 },
  ];

  const tbody = document.getElementById("score-body");
  const thScore = document.getElementById("th-score");

  function render() {
    tbody.innerHTML = "";
    scores.forEach((item, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${item.name}</td>
        <td>${item.score}</td>
        <td>${item.score >= 70 ? "Lulus" : "Belum"}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  thScore.addEventListener("click", () => {
    ascending = !ascending;
    scores.sort((a, b) =>
      ascending ? a.score - b.score : b.score - a.score
    );
    render();
  });

  render();
</script>
```

**Challenge:**

* Tambah menampilkan rata-rata nilai di bawah tabel.
* Tambah filter: tombol `Tampilkan yang Lulus saja`.

---

## 3.13. Live Clock + Greeting

```html
<h2 id="clock"></h2>
<p id="greeting"></p>

<script>
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");

  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${h}:${m}:${s}`;

    let text = "";
    if (h >= 5 && h < 11) text = "Selamat pagi!";
    else if (h >= 11 && h < 15) text = "Selamat siang!";
    else if (h >= 15 && h < 18) text = "Selamat sore!";
    else text = "Selamat malam!";

    greeting.textContent = text;
  }

  setInterval(updateClock, 1000);
  updateClock();
</script>
```

**Challenge:**

* Tambah input nama → greeting jadi `Selamat pagi, [Nama]!`.
* Ubah background warna sesuai waktu.

---

## 3.14. Dropdown Menu + Click Outside Close

```html
<button id="menu-btn">Menu ▼</button>
<div id="dropdown" style="display:none;">
  <a href="#">Profil</a><br />
  <a href="#">Kelas</a><br />
  <a href="#">Logout</a>
</div>

<script>
  const btn = document.getElementById("menu-btn");
  const dropdown = document.getElementById("dropdown");

  btn.addEventListener("click", () => {
    const visible = dropdown.style.display === "block";
    dropdown.style.display = visible ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (e.target === btn || dropdown.contains(e.target)) return;
    dropdown.style.display = "none";
  });
</script>
```

**Challenge:**

* Tambah animasi slide (CSS).
* Tambah icon di tombol yang berubah (▼ / ▲).

---

## 3.15. Finance Tracker Sederhana

```html
<input id="desc" placeholder="Deskripsi" />
<input id="amount" type="number" placeholder="Jumlah" />
<select id="type">
  <option value="income">Pemasukan</option>
  <option value="expense">Pengeluaran</option>
</select>
<button id="add-trans">Tambah</button>

<table border="1">
  <thead>
    <tr><th>Deskripsi</th><th>Jumlah</th><th>Jenis</th></tr>
  </thead>
  <tbody id="trans-body"></tbody>
</table>

<p id="balance"></p>

<script>
  const desc = document.getElementById("desc");
  const amount = document.getElementById("amount");
  const type = document.getElementById("type");
  const body = document.getElementById("trans-body");
  const balanceEl = document.getElementById("balance");

  let balance = 0;

  function updateBalance() {
    balanceEl.textContent = "Saldo: " + balance;
  }

  document.getElementById("add-trans").addEventListener("click", () => {
    const d = desc.value.trim();
    const a = Number(amount.value);
    const t = type.value;

    if (!d || !a) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${d}</td><td>${a}</td><td>${t}</td>`;
    body.appendChild(tr);

    balance += t === "income" ? a : -a;
    updateBalance();

    desc.value = "";
    amount.value = "";
  });

  updateBalance();
</script>
```

**Challenge:**

* Tambah kolom “Hapus” untuk menghapus transaksi dan update saldo.
* Jika saldo < 0, warna saldo jadi merah + tampilkan peringatan.

---

## 3.16. Modal / Popup

```html
<button id="open-modal">Buka Info</button>

<div id="modal" style="display:none;">
  <div id="modal-content">
    <p>Ini informasi penting.</p>
    <button id="close-modal">Tutup</button>
  </div>
</div>

<script>
  const openBtn = document.getElementById("open-modal");
  const closeBtn = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
</script>
```

**Challenge:**

* Tambah animasi muncul/hilang.
* Buat modal reusable untuk berbagai pesan (isi teks lewat JS).

---

## 3.17. Aktivitas Log (Activity Logger)

```html
<button id="btn-login">Login</button>
<button id="btn-open">Buka Halaman</button>
<button id="btn-logout">Logout</button>

<ul id="log-list"></ul>

<script>
  const logList = document.getElementById("log-list");

  function addLog(text) {
    const li = document.createElement("li");
    li.textContent = new Date().toLocaleTimeString() + " - " + text;
    logList.appendChild(li);
  }

  document.getElementById("btn-login").addEventListener("click", () => {
    addLog("User login");
  });
  document.getElementById("btn-open").addEventListener("click", () => {
    addLog("User membuka halaman");
  });
  document.getElementById("btn-logout").addEventListener("click", () => {
    addLog("User logout");
  });
</script>
```

**Challenge:**

* Tambah tombol `Clear Log`.
* Optional: simpan log di `localStorage` dan load saat reload.

---

## 3.18. Simple “Student Detail Modal” dari Tabel

```html
<table border="1">
  <thead>
    <tr><th>Nama</th><th>Aksi</th></tr>
  </thead>
  <tbody id="student-body"></tbody>
</table>

<div id="student-modal" style="display:none;">
  <div>
    <p id="student-detail"></p>
    <button id="close-student">Tutup</button>
  </div>
</div>

<script>
  const students = [
    { name: "Ahmad", kelas: "JS Dasar" },
    { name: "Bilal", kelas: "JS Lanjutan" },
  ];

  const body = document.getElementById("student-body");
  const modal = document.getElementById("student-modal");
  const detail = document.getElementById("student-detail");

  students.forEach((s, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}</td>
      <td><button data-i="${i}" class="btn-detail">Detail</button></td>
    `;
    body.appendChild(tr);
  });

  body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-detail")) return;
    const i = Number(e.target.dataset.i);
    const s = students[i];
    detail.textContent = `Nama: ${s.name}, Kelas: ${s.kelas}`;
    modal.style.display = "block";
  });

  document.getElementById("close-student").addEventListener("click", () => {
    modal.style.display = "none";
  });
</script>
```

**Challenge:**

* Tambah properti lain (status, nilai).
* Tambah efek blur pada background saat modal terbuka.

---

## 3.19. Keyboard Shortcuts

```html
<p>Tekan keyboard: A, B, atau C</p>
<p id="key-info"></p>

<script>
  const info = document.getElementById("key-info");

  document.addEventListener("keydown", (e) => {
    if (["a", "b", "c"].includes(e.key.toLowerCase())) {
      info.textContent = "Kamu menekan: " + e.key.toUpperCase();
    }
  });
</script>
```

**Challenge:**

* Definisikan shortcut:

  * `Ctrl + S` → tampilkan pesan “Simulasi Save”.
  * `Esc` → reset pesan.

---

## 3.20. Mini “Student Dashboard” (Search + Filter)

```html
<input id="search-name" placeholder="Cari nama..." />
<select id="filter-status">
  <option value="">Semua status</option>
  <option value="aktif">Aktif</option>
  <option value="lulus">Lulus</option>
</select>

<table border="1">
  <thead>
    <tr><th>Nama</th><th>Status</th></tr>
  </thead>
  <tbody id="student-tbody"></tbody>
</table>

<script>
  const data = [
    { name: "Ahmad", status: "aktif" },
    { name: "Bilal", status: "lulus" },
    { name: "Citra", status: "aktif" },
  ];

  const tbody = document.getElementById("student-tbody");
  const searchName = document.getElementById("search-name");
  const filterStatus = document.getElementById("filter-status");

  function render() {
    const q = searchName.value.toLowerCase();
    const status = filterStatus.value;

    tbody.innerHTML = "";

    data
      .filter((s) =>
        s.name.toLowerCase().includes(q) &&
        (status === "" || s.status === status)
      )
      .forEach((s) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${s.name}</td><td>${s.status}</td>`;
        tbody.appendChild(tr);
      });
  }

  searchName.addEventListener("keyup", render);
  filterStatus.addEventListener("change", render);

  render();
</script>
```

**Challenge:**

* Tambah filter kelas (misalnya `JS Basic`, `JS Advance`).
* Tambah badge warna berbeda untuk tiap status.
