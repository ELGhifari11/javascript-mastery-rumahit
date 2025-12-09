

## 🧩 ROADMAP LATIHAN

Kita pecah jadi 7 bagian:

1. **Dasar: bikin elemen & isi teks**
2. **Parameter fungsi: default value & rest parameter (`...children`)**
3. **Loop object: `Object.entries`**
4. **Destructuring di parameter: `([key, value]) => {}`**
5. **Logika props: event, className, dataset, atribut biasa**
6. **Logika children: string/number, Node, array**
7. **Merangkai ulang: bangun versi sederhana `buatElemen`**

---

## LEVEL 1 — Dasar `document.createElement` & teks

### Potongan kode terkait:

```js
const elemen = document.createElement(tag);
```

### Latihan 1.1

Tanpa pakai fungsi `buatElemen`, buat kode biasa:

> Buat elemen `<button>` dengan teks `"Klik Saya"` dan tempelkan ke `document.body`.

**Target bentuk akhir di DOM:**

```html
<button>Klik Saya</button>
```

### Contoh jawaban:

```js
const btn = document.createElement('button');
const text = document.createTextNode('Klik Saya');
btn.appendChild(text);
document.body.appendChild(btn);
```

> Coba dulu sendiri, lalu bandingkan.

---

## LEVEL 2 — Parameter Fungsi & Default Value

Lihat bagian ini:

```js
export function buatElemen(tag, props = {}, ...children) {
    const elemen = document.createElement(tag);
    // ...
}
```

Di sini ada 2 hal penting:

* `props = {}` → **default parameter**
* `...children` → **rest parameter** (semua argumen sisanya dikumpulkan jadi array)

### Latihan 2.1 — Default Parameter

Buat fungsi:

```js
function sapa(nama = 'Anonim') {
  // isi sendiri
}
```

**Tugas:**

1. Jika dipanggil `sapa('Budi')` → tampil `"Halo Budi"`.
2. Jika dipanggil `sapa()` → tampil `"Halo Anonim"`.

---

### Latihan 2.2 — Rest Parameter (`...args`)

Buat fungsi:

```js
function jumlahkan(...angka) {
  // jumlahkan semua angka
}
```

**Tugas:**

* `jumlahkan(1, 2)` → 3
* `jumlahkan(1, 2, 3, 4)` → 10

**Hints:**

* `angka` di dalam fungsi adalah array.
* Bisa pakai loop atau `.reduce`.

Latihan ini buat kamu nyaman dengan:

```js
(tag, props = {}, ...children)
```

Karena `children` di sana sama seperti `angka` di contoh ini: **array** dari argumen yang tersisa.

---

## LEVEL 3 — `Object.entries` (Memecah Object Jadi Array)

Potongan asli:

```js
Object.entries(props).forEach(([key, value]) => {
  // ...
});
```

`Object.entries({ a: 1, b: 2 })` →
`[ ['a', 1], ['b', 2] ]`

### Latihan 3.1 — Coba `Object.entries`

Buat kode:

```js
const orang = {
  nama: 'Dina',
  umur: 20
};

// gunakan Object.entries di sini
```

**Tugas:**

* Loop dengan `forEach`
* Tampilkan di console:

  * `nama: Dina`
  * `umur: 20`

---

### Latihan 3.2 — Tanpa Destructuring Dulu

Gunakan bentuk seperti ini dulu:

```js
Object.entries(orang).forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  // console.log(`${key}: ${value}`);
});
```

Baru nanti naik level ke destructuring.

---

## LEVEL 4 — Destructuring di Parameter Arrow Function

Di kode asli dipakai bentuk:

```js
.forEach(([key, value]) => { ... })
```

Itu sama saja dengan:

```js
.forEach((pair) => {
  const key = pair[0];
  const value = pair[1];
})
```

### Latihan 4.1 — Ubah ke Destructuring

Dari jawaban Latihan 3.2, ubah:

```js
(entry) => {
  const key = entry[0];
  const value = entry[1];
}
```

Menjadi:

```js
([key, value]) => {
  // pakai key dan value
}
```

**Tugas:**
Pastikan output di console tetap sama seperti sebelumnya.

---

## LEVEL 5 — Logika `props` (Event, className, dataset, atribut biasa)

Bagian penting dari kode:

```js
if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase();
    elemen.addEventListener(namaEvent, value);
} else if (key === 'className') {
    elemen.className = value;
} else if (key === 'dataset' && typeof value === 'object') {
    Object.assign(elemen.dataset, value);
} else {
    elemen.setAttribute(key, value);
}
```

Kita pecah-pisah:

---

### Latihan 5.1 — Event Listener dari Props

Buat fungsi sederhana (belum lengkap seperti aslinya):

```js
function buatButton(props) {
  const btn = document.createElement('button');

  Object.entries(props).forEach(([key, value]) => {
    if (key === 'onClick' && typeof value === 'function') {
      btn.addEventListener('click', value);
    }
  });

  return btn;
}
```

**Tugas:**

1. Panggil:

   ```js
   const tombol = buatButton({
     onClick: () => alert('Diklik!')
   });
   tombol.textContent = 'Klik';
   document.body.appendChild(tombol);
   ```

2. Ubah kondisi `if` jadi lebih fleksibel:

   * Jika `key` mulai dengan `'on'`, ambil event-nya dari nama key:

     * `'onClick'` → `'click'`
     * `'onMouseover'` → `'mouseover'`

Gunakan:

```js
if (key.startsWith('on') && typeof value === 'function') {
  const eventName = key.substring(2).toLowerCase();
  btn.addEventListener(eventName, value);
}
```

---

### Latihan 5.2 — `className` & atribut biasa

Modifikasi `buatButton`:

* Kalau ada `className` → set `btn.className`
* Kalau key lain → `btn.setAttribute(key, value)`

Contoh pemanggilan:

```js
const tombol = buatButton({
  onClick: () => alert('Hai'),
  className: 'btn-utama',
  id: 'tombol-1'
});
```

**Tugas:**
Pastikan di DOM hasilnya kira-kira:

```html
<button id="tombol-1" class="btn-utama">Klik</button>
```

---

### Latihan 5.3 — Dataset

Latihan mini untuk bagian ini:

```js
else if (key === 'dataset' && typeof value === 'object') {
    Object.assign(elemen.dataset, value);
}
```

Buat contoh:

```js
const div = document.createElement('div');
const props = {
  dataset: {
    id: '123',
    role: 'card'
  }
};

Object.assign(div.dataset, props.dataset);

// cek di console
console.log(div.dataset.id);    // '123'
console.log(div.dataset.role);  // 'card'
```

**Tugas:**

* Mengerti bahwa `div.dataset.id` akan muncul sebagai `data-id="123"` di HTML.

---

## LEVEL 6 — Logika Children

Bagian asli:

```js
children.forEach(anak => {
    if (typeof anak === 'string' || typeof anak === 'number') {
        elemen.appendChild(document.createTextNode(anak));
    } else if (anak instanceof Node) {
        elemen.appendChild(anak);
    } else if (Array.isArray(anak)) {
        anak.forEach(c => {
            if (c) elemen.appendChild(c);
        });
    }
});
```

Kita latihan satu-satu.

---

### Latihan 6.1 — Anak String/Number

Buat fungsi kecil:

```js
function appendChildSmart(parent, child) {
  if (typeof child === 'string' || typeof child === 'number') {
    parent.appendChild(document.createTextNode(child));
  }
}
```

**Tugas:**

```js
const div = document.createElement('div');
appendChildSmart(div, 'Halo ');
appendChildSmart(div, 123);
document.body.appendChild(div);
```

Lihat hasilnya: `Halo 123`.

---

### Latihan 6.2 — Anak berupa Node

Tambah kondisi:

```js
else if (child instanceof Node) {
  parent.appendChild(child);
}
```

**Tugas:**

```js
const span = document.createElement('span');
span.textContent = 'Ini Span';

const div = document.createElement('div');
appendChildSmart(div, span);
document.body.appendChild(div);
```

---

### Latihan 6.3 — Anak berupa Array (Nested)

Tambah lagi:

```js
else if (Array.isArray(child)) {
  child.forEach(c => {
    if (c) parent.appendChild(c);
  });
}
```

**Tugas:**

1. Buat array anak:

   ```js
   const span1 = document.createElement('span');
   span1.textContent = 'A';

   const span2 = document.createElement('span');
   span2.textContent = 'B';

   const div = document.createElement('div');
   appendChildSmart(div, [span1, span2]);

   document.body.appendChild(div);
   ```

2. Pastikan `<div>` berisi dua `<span>`.

---

## LEVEL 7 — Merangkai: Bangun Versi Sederhana `buatElemen`

Sekarang kita rangkai semua latihan jadi fungsi mini yang mirip aslinya (tapi versi lebih simpel dulu).

### Latihan 7.1 — Versi Minimal

Coba tulis sendiri:

```js
function buatElemen(tag, props = {}, ...children) {
  const elemen = document.createElement(tag);

  // 1. Tangani props:
  // - onEvent
  // - className
  // - dataset
  // - atribut lain

  // 2. Tangani children:
  // - string/number
  // - Node
  // - Array of Node

  return elemen;
}
```

### Latihan 7.2 — Coba Pakai

Contoh penggunaan:

```js
const tombol = buatElemen(
  'button',
  {
    id: 'btn-1',
    className: 'btn btn-primary',
    onClick: () => alert('Halo dari buatElemen!'),
    dataset: { id: '999', role: 'action' }
  },
  'Klik Aku'
);

document.body.appendChild(tombol);
```

**Tugas:**

* Pastikan:

  * Event click jalan.
  * `class` dan `id` benar.
  * `data-id` dan `data-role` terpasang.
  * Teks `"Klik Aku"` muncul.

---
---


Sip, kita bikin ini **bener-bener keurai** jadi fungsi-fungsi kecil berlevel, sampai akhirnya nyatu lagi jadi versi “gede” `buatElemen` yang kamu tulis di atas.
Tujuan: dari level 1 → level akhir, orang bisa ngikutin alur logika 100%.

Aku pakai nama fungsi yang **jelas & bahasa manusia**, biar kebayang dari namanya aja itu fungsinya apa.

---

## 🎯 Gambaran Besar: Kita Bagi Jadi Beberapa Fungsi

Dari 1 fungsi besar:

```js
export function buatElemen(tag, props = {}, ...children) {
  // ..
}
```

Kita pecah jadi beberapa bagian function :

Kita naik level pelan-pelan 👇

---

## 🔹 LEVEL 1 – Paling Dasar: Bikin Elemen Kosong

### Fungsi Level 1

```js
function buatElemenKosong(tag) {
  const elemen = document.createElement(tag);
  return elemen;
}
```

**Fokus level ini:**
Ngerti dulu bahwa:

* `tag` = `'div'`, `'h1'`, `'button'`, dll.
* `document.createElement(tag)` = bikin elemen HTML kosong.

---

## 🔹 LEVEL 2 – Tambah Props Secara Sederhana

Di level ini: **belum ada event, belum ada dataset, belum ada className spesial.**
Semua props diperlakukan sebagai atribut biasa.

### Fungsi Level 2

```js
function pasangSemuaPropsVersiSederhana(elemen, props = {}) {
  // Kalau props-nya null/undefined, langsung keluar
  if (!props) return;

  Object.entries(props).forEach(([key, value]) => {
    elemen.setAttribute(key, value);
  });
}
```

### Contoh Pakai Level 1 + 2

```js
function buatElemenV1(tag, props = {}) {
  const elemen = buatElemenKosong(tag);
  pasangSemuaPropsVersiSederhana(elemen, props);
  return elemen;
}

// Contoh:
const judul = buatElemenV1('h1', { id: 'judul-utama', title: 'Ini judul' });
judul.textContent = 'Halo Dunia';
document.body.appendChild(judul);
```

---

## 🔹 LEVEL 3 – Pecah: 1 Prop Diproses di Fungsi Khusus

Sekarang kita bikin fungsi yang khusus ngurus **1 pasangan key–value**.

### Fungsi: proses satu prop

```js
function prosesSatuProp(elemen, key, value) {
  elemen.setAttribute(key, value);
}

function pasangSemuaProps(elemen, props = {}) {
  if (!props) return;

  Object.entries(props).forEach(([key, value]) => {
    prosesSatuProp(elemen, key, value);
  });
}
```

Kelebihan pola ini:

* Nanti kalau aturan prop makin rumit (event, dataset, dll), kita cukup ubah **`prosesSatuProp`** saja.

---

## 🔹 LEVEL 4 – Tambah Logika: Event, className, dataset, atribut biasa

Sekarang kita upgrade `prosesSatuProp` pelan-pelan.

### 4.1. Deteksi Event Listener (prop diawali `on`)

```js
function pasangEventListener(elemen, namaEvent, handler) {
  elemen.addEventListener(namaEvent, handler);
}

function prosesSatuProp(elemen, key, value) {
  // A. Event Listener: onClick, onInput, dll
  if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase(); // onClick -> click
    pasangEventListener(elemen, namaEvent, value);
    return;
  }

  // (sisanya nanti diisi)
  elemen.setAttribute(key, value);
}
```

---

### 4.2. Tangani `className` Secara Khusus

```js
function pasangClassName(elemen, className) {
  elemen.className = className;
}

function prosesSatuProp(elemen, key, value) {
  if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase();
    pasangEventListener(elemen, namaEvent, value);
  } else if (key === 'className') {
    pasangClassName(elemen, value);
  } else {
    elemen.setAttribute(key, value);
  }
}
```

---

### 4.3. Tangani `dataset` (data-*)

```js
function pasangDataset(elemen, datasetObject) {
  // datasetObject misal: { id: '123', role: 'card' }
  Object.assign(elemen.dataset, datasetObject);
}

function prosesSatuProp(elemen, key, value) {
  if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase();
    pasangEventListener(elemen, namaEvent, value);
  } else if (key === 'className') {
    pasangClassName(elemen, value);
  } else if (key === 'dataset' && typeof value === 'object') {
    pasangDataset(elemen, value);
  } else {
    elemen.setAttribute(key, value);
  }
}
```

Sekarang `prosesSatuProp` sudah sama logikanya dengan function besar aslinya, tapi **lebih terurai**.

---

## 🔹 LEVEL 5 – Pecah Logika Children (Isi Elemen)

Bagian asli:

```js
children.forEach(anak => {
  if (typeof anak === 'string' || typeof anak === 'number') {
    elemen.appendChild(document.createTextNode(anak));
  } else if (anak instanceof Node) {
    elemen.appendChild(anak);
  } else if (Array.isArray(anak)) {
    anak.forEach(c => {
      if (c) elemen.appendChild(c);
    });
  }
});
```

Kita pecah jadi:

1. `pasangChildren(elemen, children)`
2. `pasangSatuChild(elemen, child)`
3. (opsional) `buatTextNodeDariPrimitive(value)`

---

### 5.1. Fungsi untuk 1 child

```js
function pasangSatuChild(elemen, child) {
  // 1. Kalau string atau number -> text node
  if (typeof child === 'string' || typeof child === 'number') {
    const textNode = document.createTextNode(child);
    elemen.appendChild(textNode);
  }
  // 2. Kalau sudah Node (elemen HTML)
  else if (child instanceof Node) {
    elemen.appendChild(child);
  }
  // 3. Kalau Array (nested children)
  else if (Array.isArray(child)) {
    child.forEach(c => {
      if (c) pasangSatuChild(elemen, c);
    });
  }
}
```

> Catatan: untuk array, kita panggil lagi `pasangSatuChild`, jadi sifatnya **rekursif sederhana**.

---

### 5.2. Fungsi untuk semua children

```js
function pasangChildren(elemen, children = []) {
  children.forEach(child => {
    pasangSatuChild(elemen, child);
  });
}
```

---

## 🔹 LEVEL 6 – Fungsi Final `buatElemen` yang Hanya Orkestrasi

Sekarang semua “otak berat” sudah dipindah ke fungsi-fungsi kecil.

Fungsi final bisa super bersih:

```js
export function buatElemen(tag, props = {}, ...children) {
  // 1. Buat elemen kosong
  const elemen = buatElemenKosong(tag);

  // 2. Pasang props (atribut, event, className, dataset)
  pasangSemuaProps(elemen, props);

  // 3. Pasang isi/anak-anaknya
  pasangChildren(elemen, children);

  // 4. Kembalikan elemen utuh
  return elemen;
}
```

---

## 🔁 KUMPULAN KODE LENGKAP (VERSI TERURAI)

Ini seluruh versi yang sudah dipecah:

```js
// LEVEL 1: bikin elemen kosong
function buatElemenKosong(tag) {
  const elemen = document.createElement(tag);
  return elemen;
}

// ---- PROPS HANDLING ----

function pasangEventListener(elemen, namaEvent, handler) {
  elemen.addEventListener(namaEvent, handler);
}

function pasangClassName(elemen, className) {
  elemen.className = className;
}

function pasangDataset(elemen, datasetObject) {
  Object.assign(elemen.dataset, datasetObject);
}

function pasangAtributBiasa(elemen, key, value) {
  elemen.setAttribute(key, value);
}

// Proses 1 prop
function prosesSatuProp(elemen, key, value) {
  // A. Event: onClick, onInput, onChange, dst
  if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase();
    pasangEventListener(elemen, namaEvent, value);
  } 
  // B. className -> elemen.className
  else if (key === 'className') {
    pasangClassName(elemen, value);
  } 
  // C. dataset -> elemen.dataset.***
  else if (key === 'dataset' && typeof value === 'object') {
    pasangDataset(elemen, value);
  } 
  // D. atribut biasa
  else {
    pasangAtributBiasa(elemen, key, value);
  }
}

function pasangSemuaProps(elemen, props = {}) {
  if (!props) return;

  Object.entries(props).forEach(([key, value]) => {
    prosesSatuProp(elemen, key, value);
  });
}

// ---- CHILDREN HANDLING ----

function pasangSatuChild(elemen, child) {
  if (typeof child === 'string' || typeof child === 'number') {
    const textNode = document.createTextNode(child);
    elemen.appendChild(textNode);
  } else if (child instanceof Node) {
    elemen.appendChild(child);
  } else if (Array.isArray(child)) {
    child.forEach(c => {
      if (c) pasangSatuChild(elemen, c);
    });
  }
}

function pasangChildren(elemen, children = []) {
  children.forEach(child => {
    pasangSatuChild(elemen, child);
  });
}

// ---- FUNGSI FINAL ----

export function buatElemen(tag, props = {}, ...children) {
  const elemen = buatElemenKosong(tag);
  pasangSemuaProps(elemen, props);
  pasangChildren(elemen, children);
  return elemen;
}
```
---