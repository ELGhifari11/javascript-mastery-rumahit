# 🧾 DOM Cheat Sheet – Ujian Pekan 3  
**Fokus: Dashboard MyQuran (Jadwal Sholat & Inspirasi Ibadah)**  
**Level:** Pemula – Cukup 5 konsep DOM ini saja ✅

---

## 1️⃣ document.querySelector()

**Fungsi:**  
Mengambil elemen HTML supaya bisa diolah dengan JavaScript.

**Bentuk umum:**
```js
const elemen = document.querySelector('selector');
````

**Selector yang sering dipakai:**

* `'#id-elemen'` → berdasarkan **id**
* `'.nama-class'` → berdasarkan **class**
* `'tagname'` → berdasarkan **nama tag** (misal: `'h1'`, `'p'`)

**Contoh di project MyQuran:**

```js
const inputKota = document.querySelector('#input-kota');
const tombolPilih = document.querySelector('#btn-pilih-lokasi');
const cardAyat = document.querySelector('#card-ayat');
```

> Anggap `querySelector` itu seperti **“ambil elemen ini ya, JS!”** 😄

---

## 2️⃣ addEventListener()

**Fungsi:**
Menjalankan kode ketika user melakukan aksi (klik, ketik, dll).

**Bentuk umum:**

```js
elemen.addEventListener('nama-event', () => {
  // kode yang mau dijalankan
});
```

**Event yang kita pakai di ujian ini:**

* `'click'` → saat tombol diklik

**Contoh di project MyQuran:**

```js
tombolPilih.addEventListener('click', () => {
  // 1. Ambil nama kota dari input
  // 2. Panggil API searchCity()
  // 3. Update jadwal sholat di layar
});

const tombolRefresh = document.querySelector('#btn-refresh-inspirasi');
tombolRefresh.addEventListener('click', () => {
  // 1. Panggil API ayat/acak, doa/acak, dst
  // 2. Update card inspirasi
});
```

> `addEventListener` = **“kalau ada kejadian X, tolong jalankan kode ini.”**

---

## 3️⃣ .value

**Fungsi:**
Mengambil atau mengisi **nilai di input form** (seperti `<input>`).

**Bentuk umum:**

```js
const nilai = input.value;     // baca
input.value = 'Something';     // tulis (jarang dipakai di ujian ini)
```

**Contoh di project MyQuran:**

```js
const inputKota = document.querySelector('#input-kota');

tombolPilih.addEventListener('click', () => {
  const keyword = inputKota.value;   // ambil teks yang diketik user
  searchCity(keyword);               // kirim keyword ke API
});
```

> `.value` = isi yang diketik user di input.

---

## 4️⃣ .textContent

**Fungsi:**
Mengubah **teks di dalam elemen HTML** (tanpa HTML tag di dalamnya).

**Bentuk umum:**

```js
elemen.textContent = 'Teks baru';
```

**Contoh di Jadwal Sholat:**

```js
const lokasiEl = document.querySelector('#lokasi-kota');
const tanggalEl = document.querySelector('#tanggal-hari-ini');
const subuhEl   = document.querySelector('#jam-subuh');

lokasiEl.textContent  = `${data.lokasi} — ${data.daerah}`;
tanggalEl.textContent = data.jadwal.tanggal;
subuhEl.textContent   = data.jadwal.subuh;
```

**Contoh di Inspirasi Ibadah:**

```js
const judulAyatEl = document.querySelector('#judul-ayat');
const arabAyatEl  = document.querySelector('#arab-ayat');
const artiAyatEl  = document.querySelector('#arti-ayat');

judulAyatEl.textContent = `${info.surat.nama.id} • Ayat ${ayat.ayah}`;
arabAyatEl.textContent  = ayat.arab;
artiAyatEl.textContent  = ayat.text;
```

> `textContent` = **“tulis teks ini ke dalam elemen tersebut.”**

---

## 5️⃣ .innerHTML

**Fungsi:**
Mengubah isi elemen dengan **HTML baru** (boleh ada tag `<tr>`, `<td>`, `<p>`, dll).

**Bentuk umum:**

```js
elemen.innerHTML = '<p>Ini paragraf</p>';
```

**Dipakai di ujian untuk:**

* Mengisi **tabel jadwal bulanan** (Minggu 1–4)
* Opsi lain: meng-update isi card dalam bentuk HTML

**Contoh tabel bulanan sederhana:**

```js
const tabelMinggu1 = document.querySelector('#tabel-minggu-1');

tabelMinggu1.innerHTML = jadwalMinggu1.map((item) => {
  return `
    <tr>
      <td>${item.tanggal}</td>
      <td>${item.subuh}</td>
      <td>${item.dzuhur}</td>
      <td>${item.ashar}</td>
      <td>${item.maghrib}</td>
      <td>${item.isya}</td>
    </tr>
  `;
}).join('');
```

> `innerHTML` = **“isi ulang seluruh isi elemen ini dengan HTML berikut.”**

---

## 🔁 Mini Alur Data: API → JS → DOM

1. User ketik kota → klik **Pilih Lokasi**
2. JS ambil nilai dengan `.value`
3. JS panggil **API** pakai `fetch` di module `api.js`
4. Dapat data JSON → diolah di JS (pilih field yang dibutuhkan)
5. Data dimasukkan ke elemen pakai:

   * `document.querySelector()` → ambil elemen
   * `.textContent` → isi teks
   * `.innerHTML` → isi tabel / isi card

---

## 🧠 Ingat Rumus Sederhana DOM untuk Ujian Ini

```js
// 1. Ambil elemen
const el = document.querySelector('selector');

// 2. Tambahkan event (kalau butuh)
el.addEventListener('click', () => {
  // 3. Ambil input (kalau perlu)
  const value = input.value;

  // 4. Ambil data (API / perhitungan)
  // 5. Tulis hasil ke layar
  target.textContent = 'hasil';
});
```

> Kalau kalian paham 5 hal ini, insyaaAllah cukup untuk lulus **Evaluasi Pekan 3 (DOM + API + Modular JS)** 💪