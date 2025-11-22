# Challenge Study Case DOM

---

## Table of Contents
1. [Challenge 1-5: Basic querySelector & Manipulation](#challenge-1-5-basic-queryselector--manipulation)
2. [Challenge 6-10: Fetch + DOM](#challenge-6-10-fetch--dom)
3. [Challenge 11-15: Events + DOM Manipulation](#challenge-11-15-events--dom-manipulation)

---

## CHALLENGE 1-5: Basic querySelector & Manipulation

---

## Challenge 1: Memahami querySelector - Select Elements
**Level**: 🟢 Very Easy

### 🎯 Learning Goals
- Pahami apa itu querySelector
- Select elemen dari HTML
- Perbedaan querySelector vs querySelectorAll
- Akses properties element

### 📚 Study Case

"Anda membuat halaman web dengan beberapa elemen HTML. Anda ingin bisa 'mengambil' elemen tersebut menggunakan JavaScript untuk dimanipulasi."

```html
<!-- HTML di file index.html -->
<div id="welcome-section">
  <h1>Selamat Datang</h1>
  <p class="description">Ini adalah paragraf pertama</p>
  <p class="description">Ini adalah paragraf kedua</p>
  <button id="action-button">Klik Saya</button>
</div>

<div class="card">Kartu 1</div>
<div class="card">Kartu 2</div>
<div class="card">Kartu 3</div>
```

### ✍️ Task 1.1: Select Element dengan ID

**Penjelasan:**
```javascript
// querySelector untuk SELECT SATU element dengan ID
// Syntax: document.querySelector('#idName')

// Contoh:
const button = document.querySelector('#action-button');
console.log(button);        // Output: <button id="action-button">Klik Saya</button>
console.log(button.textContent); // Output: Klik Saya

// Ini adalah cara mengambil/select elemen dari HTML menggunakan JavaScript
// '#' berarti "cari element dengan ID"
```

**TODO:**
```javascript
// 1. Select element dengan id='welcome-section'
//    Simpan dalam variable bernama 'welcomeSection'
//    Print ke console untuk lihat hasilnya

// 2. Select element dengan id='action-button'
//    Simpan dalam variable bernama 'myButton'
//    Print ke console
```

**⚠️ JAWABAN INCOMPLETE - Ada Error:**
```javascript
// ❌ KODE INI BELUM SEMPURNA - COBA DIPERBAIKI!

const welcomeSection = querySelector('welcome-section');
console.log(welcomeSection);

const myButton = document.querySelector('action-button');
console.log(myButton);
```

**Pertanyaan untuk Kamu:**
1. Ada yang salah dengan query selector pertama, apa itu?
2. Apa simbol yang hilang di kode kedua?
3. Coba perbaiki kedua kode di atas!

---

### ✍️ Task 1.2: Select Element dengan Class

**Penjelasan:**
```javascript
// querySelector untuk select SATU element dengan class
// Syntax: document.querySelector('.className')

// Contoh:
const card = document.querySelector('.card');
console.log(card);        // Output: <div class="card">Kartu 1</div>
// ⚠️ Hanya ambil YANG PERTAMA!

const para = document.querySelector('.description');
console.log(para); // <p class="description">Ini adalah paragraf pertama</p>
// ⚠️ Juga hanya ambil YANG PERTAMA!
```

**TODO:**
```javascript
// 1. Select element pertama dengan class='description'
//    Simpan dalam variable 'firstParagraph'

// 2. Select element pertama dengan class='card'
//    Simpan dalam variable 'firstCard'

// 3. Print keduanya ke console
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ KODE INI INCOMPLETE - FINISH IT!

const firstParagraph = document.querySelector('.description');

const firstCard = // ← FILL THIS!
  
console.log(firstParagraph);
// console.log(firstCard); ← UNCOMMENT & EDIT
```

**Pertanyaan:**
1. Apa yang harus diisi di `firstCard = `?
2. Uncomment dan edit line console.log terakhir
3. Apa perbedaan `.` dan `#` di selector?

---

### ✍️ Task 1.3: Select SEMUA Element dengan querySelectorAll

**Penjelasan:**
```javascript
// querySelectorAll untuk SELECT SEMUA element yang match
// Syntax: document.querySelectorAll('.className')

// Contoh:
const allCards = document.querySelectorAll('.card');
console.log(allCards);     // NodeList(3) [div, div, div]
console.log(allCards.length); // 3

// querySelectorAll mengembalikan "NodeList" (seperti array)
// Bisa di-loop atau diakses dengan index

// Akses individual element
console.log(allCards[0]); // <div class="card">Kartu 1</div>
console.log(allCards[1]); // <div class="card">Kartu 2</div>
console.log(allCards[2]); // <div class="card">Kartu 3</div>
```

**TODO:**
```javascript
// 1. Select SEMUA element dengan class='description'
//    Simpan dalam variable 'allParagraphs'

// 2. Print ke console:
//    - Jumlah paragrap (gunakan .length)
//    - Element pertama (index 0)
//    - Element kedua (index 1)

// 3. Select SEMUA element dengan class='card'
//    Simpan dalam variable 'allCards'
//    Print jumlahnya
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ COBA DULU! INCOMPLETE CODE:

const allParagraphs = // ← SELECT SEMUA .description

console.log(allParagraphs); 
console.log(allParagraphs.length); // Berapa jumlahnya?

console.log(allParagraphs[0]); // Paragraf pertama
console.log(allParagraphs[1]); // ← FIX THIS: Paragraf kedua

const allCards = document.querySelectorAll('.card');
// console.log(allCards.length); ← UNCOMMENT & RUN
```

**Challenge untuk Kamu:**
1. Isi code yang kosong
2. Coba console.log index yang berbeda (0, 1, 2)
3. Apa yang terjadi jika akses index 3? (tidak ada)

---

### ✍️ Task 1.4: Loop Semua Elements

**Penjelasan:**
```javascript
// Untuk melakukan sesuatu ke SEMUA element, gunakan loop
// Method: forEach (yang paling mudah untuk newbie)

const allCards = document.querySelectorAll('.card');

// Loop cara modern (forEach - gunakan ini!)
allCards.forEach(function(card) {
  console.log(card); // Setiap card akan diprint
});

// Atau dengan arrow function (lebih pendek)
allCards.forEach(card => {
  console.log(card);
});
```

**TODO:**
```javascript
// 1. Select SEMUA elements dengan class='card'

// 2. Loop setiap card dan print textContent-nya
//    Expected output:
//    Kartu 1
//    Kartu 2
//    Kartu 3

// 3. Loop SEMUA paragraphs dan print juga
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const allCards = document.querySelectorAll('.card');

// ← BUAT LOOP FOREACH DI SINI
// Gunakan console.log(card.textContent)

const allParagraphs = // ← SELECT SEMUA PARAGRAPHS

// ← BUAT LOOP FOREACH DI SINI JUGA
```

**Challenge:**
1. Coba buat forEach loop (jangan copy-paste!)
2. Jalankan dan lihat console output
3. Apa itu `card` dalam `forEach(card => ...)`? Jelaskan!

---

### ✍️ Task 1.5: Kombinasi - Select dan Loop

**TODO:**
```javascript
// TANTANGAN: Buatkan sesuatu yang lebih kompleks
// 
// 1. Select element dengan id='welcome-section'
// 2. Di dalam element tersebut, select SEMUA elemen dengan tag 'p'
// 3. Loop setiap p dan print textContent-nya
//    Expected output:
//    Ini adalah paragraf pertama
//    Ini adalah paragraf kedua

// Tips: Gunakan "welcomeSection.querySelectorAll('p')"
//       untuk select p yang ada di dalam welcomeSection saja
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const welcomeSection = // ← SELECT WELCOME SECTION

const paragraphs = // ← SELECT SEMUA <p> DI DALAM WELCOME SECTION

// ← BUAT LOOP UNTUK PRINT SETIAP TEXTCONTENT

// Bonus: Coba gunakan querySelector pada element, bukan hanya document!
// Contoh: welcomeSection.querySelectorAll('p')
```

**Tantangan Ekstra:**
1. Buat loop yang print "Paragraf ke-1: ...", "Paragraf ke-2: ..."
2. Gunakan index dari forEach untuk nomor urut
3. Contoh: `forEach((para, index) => { ... })`

---

### 📋 RINGKASAN Challenge 1

| Konsep | Syntax | Hasil |
|--------|--------|-------|
| Select 1 by ID | `querySelector('#id')` | Element atau null |
| Select 1 by Class | `querySelector('.class')` | Element atau null |
| Select ALL | `querySelectorAll('.class')` | NodeList |
| Loop NodeList | `forEach(el => {})` | Iterasi setiap element |

---

## Challenge 2: Mengubah Text di DOM
**Level**: 🟢 Very Easy

### 🎯 Learning Goals
- Ubah text menggunakan textContent
- Ubah HTML menggunakan innerHTML
- Pahami perbedaannya

### 📚 Study Case

"Anda ingin mengubah teks yang ditampilkan di halaman tanpa me-reload halaman."

```html
<div id="message">Hello World</div>
<p id="status">Status: Offline</p>
<div id="content">
  <h2>Heading</h2>
  <p>Paragraph</p>
</div>
```

### ✍️ Task 2.1: Ubah Text dengan textContent

**Penjelasan:**
```javascript
// textContent = mengubah text SAJA
// Jika ada HTML di dalamnya, akan dihapus

const message = document.querySelector('#message');
console.log(message.textContent); // "Hello World"

// Ubah textContent
message.textContent = 'Selamat Datang';
console.log(message.textContent); // "Selamat Datang"

// Di halaman akan berubah dari:
// "Hello World" menjadi "Selamat Datang"
```

**TODO:**
```javascript
// 1. Select element dengan id='message'
// 2. Ubah textContent-nya menjadi "Halo Pemula!"
// 3. Lihat hasilnya di halaman

// 4. Select element dengan id='status'
// 5. Ubah textContent-nya menjadi "Status: Online"

// Verify: Buka browser dan lihat perubahan
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const message = document.querySelector('#message');
message.textContent = // ← ISI DENGAN TEXT BARU

const status = // ← COMPLETE LINE INI
status.textContent = 'Status: Online'; // ← FIX JIKA ADA ERROR

// ← COBA JALANKAN DAN LIHAT PERUBAHAN DI HALAMAN
```

**Challenge untuk Kamu:**
1. Selesaikan code di atas
2. Buka DevTools (F12) dan lihat element berubah
3. Coba ubah text dengan value yang berbeda

---

### ✍️ Task 2.2: Ubah HTML dengan innerHTML

**Penjelasan:**
```javascript
// innerHTML = ubah SEMUA isi, termasuk HTML
// LEBIH POWERFUL dari textContent

const content = document.querySelector('#content');

console.log(content.innerHTML); 
// Output: <h2>Heading</h2><p>Paragraph</p>

// Ubah innerHTML
content.innerHTML = '<h2>New Heading</h2><p>New Paragraph</p>';

// Bahkan bisa tambah element baru
content.innerHTML = '<button>Click Me</button>';

// TAPI HATI-HATI! innerHTML bisa menghapus semua isi sebelumnya
```

**TODO:**
```javascript
// 1. Select element dengan id='content'
// 2. Ubah innerHTML-nya menjadi:
//    <h2>Konten Baru</h2>
//    <p>Ini adalah konten yang diubah</p>
//    <button>Tombol Baru</button>

// 3. Verify di halaman (semuanya harus berubah)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - ADA ERROR!

const content = document.querySelector('#content');

content.innerHTML = '<h2>Konten Baru</h2>
  <p>Ini adalah konten yang diubah</p>
  <button>Tombol Baru</button>';

// ❌ ERROR: Line break di tengah string!
// Harus pakai template literal (backtick) untuk multi-line

// COBA PERBAIKI CODE DI ATAS!
// Tips: Gunakan `` (backtick) alih-alih "" (quotes)
```

**Challenge:**
1. Perbaiki code di atas
2. Apa perbedaan "" dan `` (backtick)?
3. Kapan harus pakai backtick?

---

### ✍️ Task 2.3: textContent vs innerHTML

**Penjelasan:**
```javascript
// Perbedaan penting:

// textContent = text SAJA
const el1 = document.querySelector('#message');
el1.textContent = '<b>Bold</b>';
// Output di halaman: <b>Bold</b> (text biasa, bukan bold)

// innerHTML = text + HTML
const el2 = document.querySelector('#message');
el2.innerHTML = '<b>Bold</b>';
// Output di halaman: Bold (dengan bold formatting)
```

**TODO:**
```javascript
// 1. Select element dengan id='message'

// 2. Set textContent = '<em>Italic</em>'
//    Lihat hasilnya (akan text biasa)

// 3. Set innerHTML = '<em>Italic</em>'
//    Lihat hasilnya (akan italic)

// Perhatikan perbedaannya!
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - FINISH & OBSERVE!

const message = document.querySelector('#message');

// Percobaan 1: textContent
message.textContent = '<em>Italic</em>';
console.log(message); // ← LIHAT DI HALAMAN

// Percobaan 2: innerHTML (UNCOMMENT UNTUK TEST)
// message.innerHTML = '<em>Italic</em>';
// console.log(message); // ← LIHAT PERBEDAANNYA

// PERTANYAAN:
// 1. Apa yang ditampilkan di halaman untuk percobaan 1?
// 2. Apa yang ditampilkan untuk percobaan 2?
// 3. Kapan harus pakai textContent vs innerHTML?
```

**Challenge:**
1. Uncomment percobaan 2 dan lihat perbedaannya
2. Jelaskan perbedaan textContent dan innerHTML
3. Kapan sebaiknya pakai masing-masing?

---

### 📋 RINGKASAN Challenge 2

| Property | Guna | Contoh |
|----------|------|--------|
| textContent | Ubah text SAJA | `el.textContent = 'text'` |
| innerHTML | Ubah text + HTML | `el.innerHTML = '<b>bold</b>'` |
| innerText | Text dengan styling | Jarang digunakan |

---

## Challenge 3: Mengubah CSS dari JavaScript
**Level**: 🟢 Easy

### 🎯 Learning Goals
- Ubah styling menggunakan style property
- Pahami classList untuk manage classes
- Ketahui kapan gunakan mana

### 📚 Study Case

"Anda ingin membuat halaman interaktif yang bisa mengubah warna, ukuran, atau visibility elemen."

```html
<style>
  .active { background: blue; color: white; }
  .hidden { display: none; }
  .highlight { background: yellow; }
</style>

<div id="box">Box Element</div>
<button id="toggle-btn">Toggle Visible</button>
```

### ✍️ Task 3.1: Ubah CSS Inline

**Penjelasan:**
```javascript
// Ubah CSS langsung dari JavaScript menggunakan .style

const box = document.querySelector('#box');

// Ubah background
box.style.backgroundColor = 'blue';

// Ubah text color
box.style.color = 'white';

// Ubah ukuran
box.style.width = '200px';
box.style.height = '100px';

// PENTING: CSS property pakai camelCase!
// background-color → backgroundColor
// font-size → fontSize
// border-radius → borderRadius

// Lihat hasilnya di halaman secara real-time
```

**TODO:**
```javascript
// 1. Select element dengan id='box'
// 2. Ubah style berikut:
//    - backgroundColor = 'green'
//    - color = 'white'
//    - padding = '20px'
//    - borderRadius = '8px'
//    - fontSize = '18px'

// Lihat hasilnya di browser
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const box = document.querySelector('#box');

box.style.backgroundColor = 'green';
box.style.color = 'white';
// ← LANJUTKAN UBAH STYLE YANG LAIN
// Perlu: padding, borderRadius, fontSize

// HINT: Gunakan camelCase untuk property names!
// background-color → backgroundColor
// border-radius → borderRadius
// font-size → fontSize
```

**Challenge:**
1. Selesaikan mengubah 5 style properties
2. Cek halaman untuk lihat perubahan
3. Coba tambahkan 2 style properties lagi sendiri!

---

### ✍️ Task 3.2: Manage Classes dengan classList

**Penjelasan:**
```javascript
// LEBIH BAIK: gunakan CSS classes daripada inline style
// Lebih mudah di-manage dan lebih clean

// classList methods:
// - .add('className')    = tambah class
// - .remove('className') = hapus class
// - .toggle('className') = toggle (add/remove)
// - .contains('className') = check ada atau tidak

const box = document.querySelector('#box');

// Tambah class
box.classList.add('active');
// Element: <div id="box" class="active">Box Element</div>

// Hapus class
box.classList.remove('active');

// Toggle class (jika ada remove, jika tidak ada add)
box.classList.toggle('active');

// Check class
if (box.classList.contains('active')) {
  console.log('Element memiliki class active');
}
```

**TODO:**
```javascript
// 1. Select button dengan id='toggle-btn'

// 2. Select element dengan id='box'

// 3. Buat click handler yang:
//    - Toggle class 'hidden' pada box
//    - Setiap klik tombol, box akan tersembunyi/tampil

// Tips: button.addEventListener('click', function() {
//   box.classList.toggle('hidden');
// });
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - COBA DULU!

const box = document.querySelector('#box');
const button = document.querySelector('#toggle-btn');

button.addEventListener('click', function() {
  // ← TAMBAH CODE DI SINI
  // Gunakan box.classList.toggle('hidden')
});

// SETELAH SELESAI:
// 1. Klik button di halaman
// 2. Box seharusnya tersembunyi/tampil bergantian
// 3. Buka DevTools untuk lihat class berubah
```

**Challenge untuk Kamu:**
1. Selesaikan event listener
2. Klik button dan amati perubahan
3. Buka Inspector (F12) dan lihat class berubah
4. Coba gunakan `.add()` dan `.remove()` alih-alih toggle

---

### ✍️ Task 3.3: Multiple Classes

**Penjelasan:**
```javascript
// Bisa add/remove multiple classes

const element = document.querySelector('div');

// Add multiple
element.classList.add('class1', 'class2', 'class3');

// Remove multiple
element.classList.remove('class1', 'class2');

// Toggle multiple
element.classList.toggle('active');
element.classList.toggle('highlight');

// Result: <div class="class2 class3 active highlight">
```

**TODO:**
```javascript
// 1. Select element dengan id='box'

// 2. Tambahkan 2 classes:
//    - 'active'
//    - 'highlight'

// 3. Lihat hasilnya di browser
//    (background harus biru dan kuning - overlap)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const box = document.querySelector('#box');

// Tambahkan active class
box.classList.add('active');

// ← TAMBAHKAN highlight CLASS DI SINI
// Gunakan: box.classList.add(???)

// BONUS:
// Coba kombinasikan dengan toggle
// Buat button yang toggle KEDUA class sekaligus
// (Hint: bisa lebih dari satu parameter di add())
```

**Challenge Ekstra:**
1. Selesaikan code
2. Coba dengan `.add('active', 'highlight')` - bisa gak?
3. Buat button yang toggle multiple classes

---

### 📋 RINGKASAN Challenge 3

| Method | Guna | Contoh |
|--------|------|--------|
| .style.propertyName | Ubah CSS inline | `el.style.color = 'red'` |
| .classList.add() | Tambah class | `el.classList.add('active')` |
| .classList.remove() | Hapus class | `el.classList.remove('active')` |
| .classList.toggle() | Toggle class | `el.classList.toggle('hidden')` |
| .classList.contains() | Check class | `el.classList.contains('active')` |

**Best Practice:**
- Gunakan classList untuk styling kompleks
- Gunakan .style untuk styling dinamis real-time

---

## Challenge 4: Create & Remove Elements
**Level**: 🟢 Easy

### 🎯 Learning Goals
- Membuat element baru dari JavaScript
- Menambahkan ke DOM
- Menghapus element

### 📚 Study Case

"Anda ingin membuat daftar item yang bisa ditambah dan dihapus secara dinamis."

```html
<div id="container">
  <ul id="list"></ul>
  <button id="add-btn">Add Item</button>
</div>
```

### ✍️ Task 4.1: Membuat Element Baru

**Penjelasan:**
```javascript
// Membuat element baru menggunakan createElement

// Cara 1: createElement
const newDiv = document.createElement('div');
newDiv.textContent = 'Saya adalah div baru';
console.log(newDiv); // <div>Saya adalah div baru</div>

// Tapi element belum ada di halaman!
// Harus di-append ke DOM dulu

// Cara 2: Inline HTML (lebih mudah untuk string)
const htmlString = '<div>Saya adalah div baru</div>';
// Ini hanya string, belum element

// Jadi... bagaimana cara masukkan ke halaman?
// Lihat Task 4.2
```

**TODO:**
```javascript
// 1. Buat element <li> baru

// 2. Set textContent = 'Item Pertama'

// 3. Select element dengan id='list'

// 4. Append element li ke dalam list
//    Gunakan: list.appendChild(newLi)

// Expected: Muncul item dalam list
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const newLi = document.createElement('li');
// ← SET textContent DI SINI

const list = document.querySelector('#list');
// ← APPEND newLi KE list DI SINI

// SETELAH SELESAI:
// Lihat halaman - item harus muncul dalam list
```

**Challenge:**
1. Selesaikan code
2. Buat 3 items sekaligus (dengan 3 createElement)
3. Append semuanya ke list

---

### ✍️ Task 4.2: Append vs Inner HTML

**Penjelasan:**
```javascript
// Ada 2 cara masukkan element ke halaman:

// Cara 1: appendChild (menambah di akhir)
const element = document.createElement('div');
const container = document.querySelector('#container');
container.appendChild(element);

// Cara 2: innerHTML (replace semua isi)
const container = document.querySelector('#container');
container.innerHTML = '<div>Item baru</div>';
// ⚠️ Akan menghapus semua isi sebelumnya!

// Cara 3: insertAdjacentHTML (lebih fleksibel)
container.insertAdjacentHTML('beforeend', '<div>Item baru</div>');
// Tidak akan menghapus isi sebelumnya

// Untuk newbie, gunakan appendChild() saja
```

**TODO:**
```javascript
// 1. Buat 3 element <li>
//    - Item 1
//    - Item 2
//    - Item 3

// 2. Append semuanya ke #list

// 3. Lihat hasilnya (3 item harus muncul)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const list = document.querySelector('#list');

const item1 = document.createElement('li');
item1.textContent = 'Item 1';
list.appendChild(item1);

// ← BUAT item2 DI SINI
// ← BUAT item3 DI SINI
// Pola sama seperti item1!

// SETELAH SELESAI:
// Seharusnya ada 3 items di list
```

**Challenge Bonus:**
1. Gunakan loop `for` untuk buat 5 items!
   ```javascript
   for (let i = 1; i <= 5; i++) {
     // ← CODE DI SINI
   }
   ```
2. Hint: Gunakan `i` dalam textContent

---

### ✍️ Task 4.3: Menghapus Element

**Penjelasan:**
```javascript
// Menghapus element dari DOM

// Cara 1: remove() (paling mudah)
const element = document.querySelector('li');
element.remove(); // Element hilang dari halaman

// Cara 2: removeChild() (old way)
const list = document.querySelector('#list');
const firstItem = list.querySelector('li');
list.removeChild(firstItem);

// Untuk newbie, gunakan .remove() saja
```

**TODO:**
```javascript
// 1. Select element pertama dengan tag 'li'
// 2. Hapus menggunakan .remove()
// 3. Lihat hasilnya (item harus hilang)

// Jika sudah semua di-append di Task 4.2:
// Hanya 2 item yang tersisa
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const firstItem = document.querySelector('li');
// ← HAPUS ELEMENT INI

// CHALLENGE: Hapus SEMUA li sekaligus
// Gunakan querySelectorAll dan forEach!
```

**Challenge Ekstra:**
```javascript
// Hapus semua items sekaligus:
const allItems = document.querySelectorAll('li');
// ← GUNAKAN forEach UNTUK HAPUS SETIAP ITEM
// forEach(item => item.remove())
```

---

### ✍️ Task 4.4: Dynamic Add Items

**Penjelasan:**
```javascript
// Kombinasi: create element + append = dynamic UI

const button = document.querySelector('#add-btn');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  // Setiap klik, tambah item baru
  
  const newLi = document.createElement('li');
  newLi.textContent = 'Item Baru';
  list.appendChild(newLi);
});
```

**TODO:**
```javascript
// 1. Select button dengan id='add-btn'

// 2. Add click event listener

// 3. Di dalam handler, buat element baru:
//    - createElement('li')
//    - textContent = 'Item ' + jumlah item
//    - appendChild ke list

// Tips: Gunakan list.children.length untuk hitung item

// Expected: Setiap klik tombol, item baru ditambah
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const button = document.querySelector('#add-btn');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  const newLi = document.createElement('li');
  
  // ← SET textContent DENGAN "Item " + NOMOR
  // Hint: newLi.textContent = 'Item ' + list.children.length;
  
  // ← APPEND KE list
});

// SETELAH SELESAI:
// Klik button berkali-kali, items harus bertambah
```

**Challenge untuk Kamu:**
1. Gunakan `list.children.length` atau `list.querySelectorAll('li').length`
2. Setiap item harus bernomor: "Item 1", "Item 2", dst
3. Klik 5 kali dan lihat items bertambah

---

### ✍️ Task 4.5: Delete Individual Items

**Penjelasan:**
```javascript
// Menambah delete button di setiap item
// Menggunakan event delegation

const list = document.querySelector('#list');

// Event delegation di list
list.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    // Delete tombol yang di-klik
    e.target.parentElement.remove();
  }
});
```

**TODO:**
```javascript
// 1. Modifikasi Task 4.4:
//    - Setiap item harus punya delete button
//    - Button harus have class='delete-btn'

// 2. Add event listener di list
//    - Jika delete button di-klik
//    - Hapus item tersebut

// Expected: Bisa add dan delete items
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const button = document.querySelector('#add-btn');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  const newLi = document.createElement('li');
  newLi.textContent = 'Item ' + (list.children.length + 1);
  
  // ← TAMBAHKAN DELETE BUTTON DI SINI
  // HINT: newLi.innerHTML = `
  //   Item ${list.children.length + 1}
  //   <button class="delete-btn">Delete</button>
  // `;
  
  list.appendChild(newLi);
});

// ← BUAT EVENT LISTENER UNTUK DELETE BUTTON DI SINI
// HINT: list.addEventListener('click', function(e) { ... })
```

**Challenge Berlapis:**
1. Modifikasi innerHTML untuk include button delete
2. Buat event listener untuk klik di list
3. Check jika target adalah delete-btn
4. Hapus parentElement (item li)
5. Test: Add 3 items, delete salah satu

---

### 📋 RINGKASAN Challenge 4

| Method | Guna | Contoh |
|--------|------|--------|
| createElement() | Buat element baru | `document.createElement('div')` |
| appendChild() | Tambah ke element | `parent.appendChild(child)` |
| remove() | Hapus element | `element.remove()` |
| insertAdjacentHTML() | Insert HTML | `el.insertAdjacentHTML('beforeend', html)` |

---

## Challenge 5: getAttribute & setAttribute
**Level**: 🟢 Easy

### 🎯 Learning Goals
- Baca attributes HTML
- Ubah attributes
- Pahami data-* attributes

### 📚 Study Case

"Anda ingin bekerja dengan attributes HTML seperti id, class, data-*, href, etc."

```html
<a id="link" href="https://google.com" target="_blank">Google</a>
<input type="text" placeholder="Enter name" data-name="username">
<img src="image1.jpg" alt="Image 1" data-id="1">
```

### ✍️ Task 5.1: Baca Attributes dengan getAttribute

**Penjelasan:**
```javascript
// getAttribute = membaca nilai attribute

const link = document.querySelector('#link');

// Baca href
const href = link.getAttribute('href');
console.log(href); // https://google.com

// Baca target
const target = link.getAttribute('target');
console.log(target); // _blank

// Baca attribute yang tidak ada
const fake = link.getAttribute('data-fake');
console.log(fake); // null
```

**TODO:**
```javascript
// 1. Select <a> dengan id='link'

// 2. Baca attributes:
//    - href
//    - target
//    Print ke console

// 3. Select <input>

// 4. Baca attributes:
//    - placeholder
//    - data-name
//    Print ke console

// 5. Select <img>

// 6. Baca attributes:
//    - src
//    - alt
//    - data-id
//    Print ke console
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const link = document.querySelector('#link');
console.log(link.getAttribute('href'));
// ← TAMBAHKAN getAttribute('target')

const input = document.querySelector('input');
// ← BACA placeholder ATTRIBUTE
// ← BACA data-name ATTRIBUTE

const img = document.querySelector('img');
// ← BACA src ATTRIBUTE
// ← BACA alt ATTRIBUTE  
// ← BACA data-id ATTRIBUTE
```

**Challenge:**
1. Selesaikan semua getAttribute calls
2. Jalankan dan lihat console output
3. Apa yang dihasilkan untuk attribute yang tidak ada?

---

### ✍️ Task 5.2: Ubah Attributes dengan setAttribute

**Penjelasan:**
```javascript
// setAttribute = mengubah atau membuat attribute

const link = document.querySelector('#link');

// Ubah href
link.setAttribute('href', 'https://github.com');

// Ubah target
link.setAttribute('target', '_self');

// Buat attribute baru
link.setAttribute('title', 'Go to GitHub');

// Result: <a href="https://github.com" target="_self" title="Go to GitHub">
```

**TODO:**
```javascript
// 1. Select <a> dengan id='link'

// 2. Ubah attributes:
//    - href = 'https://github.com'
//    - target = '_blank'
//    - title = 'Visit GitHub'

// 3. Lihat di halaman (link seharusnya berubah)

// 4. Select <img>

// 5. Ubah attributes:
//    - src = 'image2.jpg'
//    - alt = 'Image 2'

// Verify di halaman
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN & VERIFY!

const link = document.querySelector('#link');
link.setAttribute('href', 'https://github.com');
// ← UBAH target ATTRIBUTE
// ← UBAH title ATTRIBUTE (buat baru)

const img = document.querySelector('img');
// ← UBAH src ATTRIBUTE KE 'image2.jpg'
// ← UBAH alt ATTRIBUTE KE 'Image 2'

// SETELAH SELESAI:
// 1. Lihat di halaman - link dan img harus berubah
// 2. Klik link - apakah ke GitHub?
// 3. Buka Inspector - lihat attributes berubah
```

**Challenge Ekstra:**
1. Gunakan DevTools untuk inspect element
2. Verifikasi bahwa setAttribute benar-benar mengubah attribute
3. Ubah attribute lain dan lihat hasilnya

---

### ✍️ Task 5.3: Menghapus Attributes dengan removeAttribute

**Penjelasan:**
```javascript
// removeAttribute = hapus attribute

const link = document.querySelector('#link');

// Hapus target attribute
link.removeAttribute('target');
// Result: <a href="..." >

// Hapus title
link.removeAttribute('title');
```

**TODO:**
```javascript
// 1. Select <input>

// 2. Hapus placeholder attribute
//    Gunakan: input.removeAttribute('placeholder')

// 3. Verify di halaman (placeholder text hilang)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const input = document.querySelector('input');

// ← HAPUS placeholder ATTRIBUTE

// SETELAH SELESAI:
// Lihat input di halaman
// Placeholder text seharusnya hilang
// Buka Inspector untuk verify
```

**Challenge:**
1. Selesaikan removeAttribute
2. Coba removeAttribute untuk element lain
3. Apa yang terjadi jika remove attribute yang tidak ada?

---

### ✍️ Task 5.4: Data Attributes (data-*)

**Penjelasan:**
```javascript
// data-* attributes = cara menyimpan data custom di HTML

// HTML: <div data-user-id="123" data-username="john">

// Cara 1: getAttribute (umum untuk semua attribute)
const userId = element.getAttribute('data-user-id');
console.log(userId); // "123"

// Cara 2: dataset (special untuk data-*) - LEBIH MUDAH!
const element = document.querySelector('[data-user-id]');
console.log(element.dataset.userId); // "123"
console.log(element.dataset.username); // "john"

// ✨ dataset automatically convert kebab-case ke camelCase
// data-user-id → dataset.userId
// data-user-name → dataset.userName
```

**TODO:**
```javascript
// 1. Select <img> dengan data-id

// 2. Baca data-id menggunakan .dataset
//    Gunakan: img.dataset.id
//    Print ke console

// 3. Ubah nilai menggunakan .dataset
//    Gunakan: img.dataset.id = "999"
//    Verify di halaman (attribute berubah)

// 4. Tambah data baru
//    Gunakan: img.dataset.category = "nature"
//    Verify di halaman (attribute baru muncul)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const img = document.querySelector('img');

// Baca
console.log(img.dataset.id); // ← OUTPUT-NYA APA?

// Ubah
// ← UBAH dataset.id JADI "999"

// Tambah
// ← TAMBAH dataset.category = "nature"

// SETELAH SELESAI:
// 1. Buka Inspector
// 2. Lihat data-id dan data-category berubah/muncul
// 3. Print di console untuk verify
```

**Challenge Berlapis:**
1. Baca data-id dengan dataset
2. Ubah nilainya jadi "999"
3. Tambah data-category baru
4. Inspect di DevTools untuk verify
5. Bonus: Buat 3 data attributes berbeda

---

### 📋 RINGKASAN Challenge 5

| Method | Guna | Contoh |
|--------|------|--------|
| getAttribute() | Baca attribute | `el.getAttribute('href')` |
| setAttribute() | Ubah attribute | `el.setAttribute('href', 'url')` |
| removeAttribute() | Hapus attribute | `el.removeAttribute('href')` |
| dataset | Akses data-* | `el.dataset.userId` |

---

---

# CHALLENGE 6-10: Fetch + DOM

---

## Challenge 6: Fetch Data dari JSON File
**Level**: 🟡 Easy-Medium

### 🎯 Learning Goals
- Pahami async/await
- Fetch data dari file/API
- Handle JSON response
- Try-catch error handling

### 📚 Study Case

"Anda ingin load data dari file eksternal (JSON) dan tampilkan di halaman."

```javascript
// File: data.json
{
  "students": [
    { "id": 1, "name": "John", "age": 20 },
    { "id": 2, "name": "Jane", "age": 21 },
    { "id": 3, "name": "Bob", "age": 22 }
  ]
}
```

```html
<div id="students-container"></div>
```

### ✍️ Task 6.1: Basic Fetch

**Penjelasan:**
```javascript
// Fetch = mengambil data dari URL/file
// Ini adalah cara JavaScript berkomunikasi dengan server

async function loadData() {
  // keyword 'async' = function ini async (bisa pakai await)
  
  try {
    // Fetch file data.json
    const response = await fetch('data.json');
    
    // Convert response ke JSON
    const data = await response.json();
    
    console.log(data);
    // Output: { students: [...] }
  } catch (error) {
    // Jika ada error, tangkap di sini
    console.log('Error:', error);
  }
}

// Panggil function
loadData();
```

**Penjelasan lebih detail:**
```javascript
// fetch() = buat request ke server/file
// await = tunggu response kembali
// .json() = parse response menjadi object
// try-catch = handle error

// Urutan:
// 1. Fetch file
// 2. Tunggu response
// 3. Parse ke JSON
// 4. Use data
// 5. Catch error jika ada
```

**TODO:**
```javascript
// 1. Buat function bernama loadStudents()
// 2. Fetch dari 'data.json'
// 3. Parse response ke JSON
// 4. Console log data untuk check
// 5. Panggil loadStudents()

// Tips:
// async function loadStudents() {
//   try {
//     const response = await fetch('data.json');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }
// loadStudents();
```

**⚠️ JAWABAN INCOMPLETE - ADA SYNTAX ERROR:**
```javascript
// ❌ KODE INI PUNYA SYNTAX ERROR - COBA DIPERBAIKI!

async function loadStudents() {
  try {
    const response = fetch('data.json'); // ❌ LUPA APA?
    const data = response.json(); // ❌ LUPA APA?
    
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

loadStudents();

// PERTANYAAN:
// 1. Apa yang kurang di line 4?
// 2. Apa yang kurang di line 5?
// 3. Keyword apa yang perlu ditambahkan?
// HINT: Kata kunci: "AWAIT"
```

**Challenge untuk Kamu:**
1. Coba jalankan code di atas - apakah error?
2. Apa error message-nya?
3. Tambahkan `await` di mana?
4. Coba jalankan lagi setelah fix

---

### ✍️ Task 6.2: Display Data di DOM

**Penjelasan:**
```javascript
// Setelah fetch data, tampilkan di halaman

async function loadStudents() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    
    // Dapatkan container
    const container = document.querySelector('#students-container');
    
    // Buat HTML string dari data
    let html = '';
    data.students.forEach(student => {
      html += `
        <div class="student">
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
        </div>
      `;
    });
    
    // Insert ke DOM
    container.innerHTML = html;
  } catch (error) {
    console.log('Error:', error);
  }
}

loadStudents();
```

**TODO:**
```javascript
// 1. Modify loadStudents() function:
//    - Select element dengan id='students-container'
//    - Loop setiap student
//    - Buat HTML untuk setiap student:
//      <div class="student-card">
//        <h3>Nama</h3>
//        <p>Age: umur</p>
//        <p>ID: id</p>
//      </div>
//    - Insert ke container dengan innerHTML

// 2. Panggil loadStudents()

// 3. Lihat hasilnya di halaman
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN BAGIAN YANG KOSONG!

async function loadStudents() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    
    const container = document.querySelector('#students-container');
    let html = '';
    
    data.students.forEach(student => {
      // ← BUAT HTML UNTUK SETIAP STUDENT
      // Gunakan template literal dengan ${student.name}, ${student.age}, ${student.id}
      // Format:
      // <div class="student-card">
      //   <h3>${student.name}</h3>
      //   <p>Age: ${student.age}</p>
      //   <p>ID: ${student.id}</p>
      // </div>
    });
    
    // ← INSERT html KE container
    
  } catch (error) {
    console.log('Error:', error);
  }
}

loadStudents();
```

**Challenge:**
1. Lengkapi HTML template di dalam forEach
2. Ubah template menjadi lebih menarik (tambah class CSS)
3. Coba tambah field baru dari student object

---

### ✍️ Task 6.3: Error Handling

**Penjelasan:**
```javascript
// Error bisa terjadi dari:
// 1. File tidak ditemukan (404)
// 2. JSON parsing error
// 3. Network error
// 4. Server error (500, etc)

async function loadStudents() {
  try {
    const response = await fetch('data.json');
    
    // Check jika response OK
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check jika data valid
    if (!data.students || data.students.length === 0) {
      throw new Error('No students found');
    }
    
    // Continue...
  } catch (error) {
    console.log('Error:', error.message);
    
    // Tampilkan error ke user
    const container = document.querySelector('#students-container');
    container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

loadStudents();
```

**TODO:**
```javascript
// 1. Modifikasi loadStudents():
//    - Check response.ok
//    - If not ok, throw error
//    - Check if data.students exists
//    - If not, throw error

// 2. Di catch block:
//    - Select container
//    - Show error message: "Failed to load students"
//    - Use innerHTML dengan style color red

// 3. Test dengan intentional error:
//    - Ubah fetch path jadi 'wrong.json'
//    - Lihat error message muncul

// 4. Ubah kembali ke 'data.json'
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN ERROR HANDLING!

async function loadStudents() {
  try {
    const response = await fetch('data.json');
    
    // ← CHECK if (!response.ok) { throw error }
    
    const data = await response.json();
    
    // ← CHECK if (!data.students) { throw error }
    
    const container = document.querySelector('#students-container');
    let html = '';
    
    data.students.forEach(student => {
      html += `
        <div class="student-card">
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
          <p>ID: ${student.id}</p>
        </div>
      `;
    });
    
    container.innerHTML = html;
  } catch (error) {
    const container = document.querySelector('#students-container');
    // ← SHOW ERROR MESSAGE DI CONTAINER
    // container.innerHTML = ...
  }
}

loadStudents();
```

**Challenge untuk Testing:**
1. Lengkapi error handling
2. Ubah fetch path jadi error (misal 'wrong.json')
3. Lihat error message muncul
4. Coba error dengan menghapus data.students di JSON
5. Ubah kembali semuanya normal

---

### ✍️ Task 6.4: Loading State

**Penjelasan:**
```javascript
// Show loading indicator saat fetch berlangsung

async function loadStudents() {
  const container = document.querySelector('#students-container');
  
  try {
    // Show loading
    container.innerHTML = '<p>Loading...</p>';
    
    const response = await fetch('data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Build HTML...
    let html = '';
    data.students.forEach(student => {
      // ...
    });
    
    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

loadStudents();
```

**TODO:**
```javascript
// 1. Modifikasi loadStudents():
//    - Sebelum fetch, set container.innerHTML = 'Loading...'
//    - After fetch berhasil, set container dengan data
//    - If error, show error message

// 2. Test dengan melihat "Loading..." text muncul sebentar
//    (atau tambahkan setTimeout untuk simulate slow network)

// Bonus:
// setTimeout(() => {
//   loadStudents();
// }, 2000); // Show loading selama 2 detik
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - TAMBAHKAN LOADING STATE!

async function loadStudents() {
  const container = document.querySelector('#students-container');
  
  try {
    // ← SHOW LOADING MESSAGE DI SINI
    // container.innerHTML = '...';
    
    const response = await fetch('data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    let html = '';
    data.students.forEach(student => {
      html += `
        <div class="student-card">
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
        </div>
      `;
    });
    
    container.innerHTML = html;
  } catch (error) {
    // ← ERROR MESSAGE DI SINI
  }
}

loadStudents();
```

**Challenge Ekstra:**
```javascript
// Simulate slow network (delay):
async function loadStudents() {
  const container = document.querySelector('#students-container');
  
  try {
    container.innerHTML = '<p>Loading...</p>';
    
    // ← TAMBAHKAN DELAY 2 DETIK DI SINI
    // Hint: await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await fetch('data.json');
    // ... rest of code
```

---

### 📋 RINGKASAN Challenge 6

| Konsep | Penjelasan |
|--------|-----------|
| async/await | Cara handle asynchronous code |
| fetch() | Get data dari server/file |
| .json() | Parse response ke object |
| try-catch | Error handling |
| response.ok | Check if request successful |

---

## Challenge 7: Fetch dari Public API
**Level**: 🟡 Easy-Medium

### 🎯 Learning Goals
- Fetch dari public API
- Handle API response
- Display data dinamis

### 📚 Study Case

"Anda ingin fetch user data dari JSONPlaceholder API dan display di halaman."

```html
<div id="users-container"></div>
<button id="load-btn">Load Users</button>
```

### ✍️ Task 7.1: Fetch dari JSONPlaceholder

**Penjelasan:**
```javascript
// JSONPlaceholder = fake API untuk testing
// URL: https://jsonplaceholder.typicode.com/users

// Fetch cara sama seperti file JSON, tapi gunakan URL API

async function loadUsers() {
  try {
    // Fetch dari API URL
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data = await response.json();
    console.log(data);
    // Array of user objects
  } catch (error) {
    console.log('Error:', error);
  }
}

loadUsers();
```

**TODO:**
```javascript
// 1. Buat function loadUsers()

// 2. Fetch dari URL:
//    'https://jsonplaceholder.typicode.com/users'

// 3. Parse response ke JSON

// 4. Console log data

// 5. Panggil function

// 6. Lihat di console (harus ada 10 users)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

async function loadUsers() {
  try {
    // ← FETCH DARI API URL
    // const response = ...
    
    // ← PARSE KE JSON
    // const data = ...
    
    console.log(data); // Lihat apa yang di-return
  } catch (error) {
    console.log('Error:', error);
  }
}

loadUsers();

// SETELAH SELESAI:
// 1. Buka Console (F12)
// 2. Lihat data apa yang keluar
// 3. Cek struktur data (properties apa yang ada)
```

**Challenge:**
1. Selesaikan fetch dan parse
2. Console log untuk lihat struktur data
3. Eksplorasi properties user object (name, email, dll)

---

### ✍️ Task 7.2: Display Users di DOM

**Penjelasan:**
```javascript
// Sama seperti Task 6.2, tapi dengan API data

async function loadUsers() {
  const container = document.querySelector('#users-container');
  
  try {
    container.innerHTML = '<p>Loading users...</p>';
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    // Build HTML dari API response
    let html = '';
    data.forEach(user => {
      html += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Company: ${user.company.name}</p>
        </div>
      `;
    });
    
    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

loadUsers();
```

**TODO:**
```javascript
// 1. Modifikasi loadUsers():
//    - Select #users-container
//    - Fetch dari JSONPlaceholder users API
//    - Loop setiap user
//    - Create HTML card:
//      <div class="user-card">
//        <h3>Name</h3>
//        <p>Email: email</p>
//        <p>City: city (dari user.address.city)</p>
//      </div>
//    - Insert ke container

// 2. Panggil loadUsers()

// 3. Lihat user cards di halaman

// Tips: User object structure:
// user.name
// user.email
// user.address.city
// user.phone
```

**⚠️ JAWABAN INCOMPLETE - ADA BUG:**
```javascript
// ❌ INCOMPLETE & ADA BUG - COBA DIPERBAIKI!

async function loadUsers() {
  const container = document.querySelector('#users-container');
  
  try {
    container.innerHTML = '<p>Loading users...</p>';
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    let html = '';
    data.forEach(user => {
      html += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <!-- ← TAMBAHKAN CITY DARI user.address.city -->
          <!-- ← TAMBAHKAN PHONE -->
        </div>
      `;
    });
    
    container.innerHTML = html;
  } catch (error) {
    // ← SHOW ERROR MESSAGE
  }
}

loadUsers();
```

**Challenge:**
1. Lengkapi properties yang hilang (city, phone)
2. Tambah error handling di catch block
3. Coba tambah properties lain (company name, website)

---

### ✍️ Task 7.3: Button Event untuk Load

**Penjelasan:**
```javascript
// Trigger fetch saat button di-klik

const loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', function() {
  loadUsers();
});

// Atau langsung:
document.querySelector('#load-btn').addEventListener('click', loadUsers);
```

**TODO:**
```javascript
// 1. Select button dengan id='load-btn'

// 2. Add click event listener

// 3. Di dalam handler, panggil loadUsers()

// 4. Test: Klik button, users seharusnya load

// HTML sudah ada:
// <button id="load-btn">Load Users</button>
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

// Punya 2 cara - pilih salah satu:

// Cara 1: Pisah variable
const loadBtn = // ← SELECT BUTTON
// ← ADD EVENT LISTENER
// ← DI DALAM, PANGGIL loadUsers()

// Atau Cara 2: Direct
// ← TAMBAHKAN CODE DI SINI
// document.querySelector(...).addEventListener(...)

// SETELAH SELESAI:
// Klik button di halaman
// Users harus load dan tampil
```

**Challenge:**
1. Pilih salah satu cara
2. Test klik button
3. Coba klik berkali-kali
4. Perhatikan loading indicator

---
# LANJUTAN

### ✍️ Task 7.4: Combine Semua Bagian

**Penjelasan:**
```javascript
// Kombinasi:
// 1. Click button
// 2. Fetch data
// 3. Display di DOM
// 4. Handle error
```

**TODO:**
```javascript
// 1. Ada button #load-btn
// 2. Ada container #users-container
// 3. Ada loadUsers() function

// 4. Combine semuanya:
//    - Add click handler ke button
//    - Call loadUsers() saat di-klik
//    - loadUsers() harus:
//      a) Show loading message
//      b) Fetch dari API
//      c) Build HTML dengan user data
//      d) Display ke container
//      e) Handle error

// 5. Test lengkap:
//    - Klik button
//    - Lihat "Loading..." muncul
//    - Lihat users load
//    - Check error handling (ubah URL jadi wrong)
```

**⚠️ JAWABAN INCOMPLETE - MISSING PARTS:**
```javascript
// ❌ INCOMPLETE - ADA BEBERAPA BAGIAN YANG KOSONG!

async function loadUsers() {
  const container = document.querySelector('#users-container');
  
  try {
    // ← STEP 1: SHOW LOADING STATE
    
    // ← STEP 2: FETCH DARI API
    
    // ← STEP 3: CHECK response.ok
    
    // ← STEP 4: PARSE RESPONSE
    
    // ← STEP 5: BUILD HTML
    let html = '';
    // data.forEach(user => {
    //   html += ...
    // })
    
    // ← STEP 6: DISPLAY KE CONTAINER
    
  } catch (error) {
    // ← STEP 7: SHOW ERROR MESSAGE
  }
}

// ← STEP 8: ADD EVENT LISTENER KE BUTTON
// document.querySelector('#load-btn')...
```

**Challenge Berlapis:**
1. Lengkapi semua step yang kosong
2. Test klik button
3. Lihat loading message
4. Verify users ditampilkan
5. Test error handling
6. Coba klik berkali-kali

---

### 📋 RINGKASAN Challenge 7

| Step | Action | Code |
|------|--------|------|
| 1 | Click button | `addEventListener('click')` |
| 2 | Fetch dari API | `fetch(url)` |
| 3 | Parse JSON | `.json()` |
| 4 | Build HTML | `forEach()` loop |
| 5 | Display | `innerHTML = html` |
| 6 | Error handle | `try-catch` |

---

## Challenge 8: Search & Filter dengan Fetch
**Level**: 🟡 Medium

### 🎯 Learning Goals
- Fetch data sekali
- Filter data dari JavaScript
- Re-render DOM

### 📚 Study Case

"Anda ingin fetch users dan bisa search berdasarkan nama."

```html
<input type="text" id="search-input" placeholder="Search users...">
<div id="results-container"></div>
```

### ✍️ Task 8.1: Load Data Sekali, Filter berkali-kali

**Penjelasan:**
```javascript
// Strategy:
// 1. Fetch SEKALI saat page load
// 2. Save data di variable
// 3. Filter saat user search
// 4. Re-render hasil filter

let allUsers = []; // Global variable untuk store data

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    allUsers = await response.json(); // Save ke allUsers
    displayUsers(allUsers); // Display semua
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  let html = '';
  
  users.forEach(user => {
    html += `<div class="user-card"><h3>${user.name}</h3></div>`;
  });
  
  container.innerHTML = html;
}

// Load on page load
loadUsers();
```

**TODO:**
```javascript
// 1. Buat global variable: let allUsers = [];

// 2. Buat loadUsers():
//    - Fetch users
//    - Save ke allUsers
//    - Call displayUsers(allUsers)

// 3. Buat displayUsers(users):
//    - Loop users
//    - Build HTML cards
//    - Insert ke #results-container

// 4. Call loadUsers() saat page load

// 5. Verify: Semua users muncul
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

// let allUsers = []; ← BUAT GLOBAL VARIABLE

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // ← SAVE RESPONSE KE allUsers
    
    // ← CALL displayUsers() DENGAN allUsers
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  let html = '';
  
  users.forEach(user => {
    // ← BUILD HTML UNTUK SETIAP USER
    // Minimal: <div><h3>${user.name}</h3></div>
  });
  
  // ← INSERT html KE container
}

// ← PANGGIL loadUsers() DI SINI

// SETELAH SELESAI:
// Halaman harus menampilkan semua 10 users
```

**Challenge:**
1. Lengkapi semua code yang kosong
2. Pastikan users muncul saat halaman load
3. Buka DevTools console untuk debug jika error

---

### ✍️ Task 8.2: Search Input Filter

**Penjelasan:**
```javascript
// Saat user mengetik di input, filter data

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function() {
  // Dapatkan search term
  const searchTerm = this.value.toLowerCase();
  
  // Filter allUsers
  const filtered = allUsers.filter(user => {
    return user.name.toLowerCase().includes(searchTerm);
  });
  
  // Display hasil filter
  displayUsers(filtered);
});
```

**Penjelasan filter:**
```javascript
// filter() = method untuk select items yang match kondisi

// Contoh:
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// Untuk search:
const searchTerm = 'John';
const results = allUsers.filter(user => {
  return user.name.toLowerCase().includes(searchTerm.toLowerCase());
});
// Hanya user dengan nama mengandung 'John'
```

**TODO:**
```javascript
// 1. Modify code dari Task 8.1

// 2. Add event listener ke #search-input
//    Saat user ketik (input event):
//    - Get value dari input
//    - Convert ke lowercase
//    - Filter allUsers berdasarkan nama
//    - Call displayUsers(filtered)

// 3. Test:
//    - Ketik nama user (misal: "George", "Juanita")
//    - Hasil harus filter langsung

// Tips:
// searchInput.addEventListener('input', function() {
//   const term = this.value.toLowerCase();
//   const filtered = allUsers.filter(user =>
//     user.name.toLowerCase().includes(term)
//   );
//   displayUsers(filtered);
// });
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN SEARCH FEATURE!

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function() {
  // ← GET VALUE DARI INPUT
  // const term = ...
  
  // ← FILTER allUsers BERDASARKAN NAMA
  // const filtered = allUsers.filter(user => ...)
  
  // ← DISPLAY HASIL FILTER
  // displayUsers(filtered);
});

// SETELAH SELESAI:
// 1. Ketik di search input
// 2. Users harus filter real-time
// 3. Cobalah berbagai nama: "Leanne", "Ervin", "Clementine"
```

**Challenge Berlapis:**
1. Lengkapi event listener
2. Test dengan berbagai search terms
3. Apa yang terjadi jika search empty?
4. Coba search dengan case berbeda (uppercase/lowercase)

---

### ✍️ Task 8.3: "No Results" Message

**Penjelasan:**
```javascript
// Jika filter tidak ada hasil, tampilkan pesan

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  
  if (users.length === 0) {
    container.innerHTML = '<p>No users found</p>';
    return;
  }
  
  let html = '';
  users.forEach(user => {
    html += `
      <div class="user-card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
}
```

**TODO:**
```javascript
// 1. Modify displayUsers() function

// 2. Add check:
//    if (users.length === 0) {
//      show "No users found" message
//      return (stop function)
//    }

// 3. Test:
//    - Search dengan term yang tidak ada
//    - Harus tampil "No users found"
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - TAMBAHKAN NO RESULTS CHECK!

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  
  // ← CHECK if users.length === 0
  // if (...) {
  //   container.innerHTML = '<p>No users found</p>';
  //   return;
  // }
  
  let html = '';
  users.forEach(user => {
    html += `
      <div class="user-card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// SETELAH SELESAI:
// Search dengan term yang tidak ada
// Misalnya: "XXXXX" atau "Tidak Ada"
// Harus tampil "No users found" message
```

**Challenge:**
1. Tambahkan empty check
2. Test search dengan term yang tidak ada
3. Verify "No users found" muncul
4. Coba search lagi dengan term yang valid

---

### 📋 RINGKASAN Challenge 8

| Step | Action | Code |
|------|--------|------|
| 1 | Load data | `fetch()` → save `allUsers` |
| 2 | Listen input | `addEventListener('input')` |
| 3 | Filter data | `allUsers.filter()` |
| 4 | Display | `displayUsers(filtered)` |
| 5 | Empty state | `if (users.length === 0)` |

---

## Challenge 9: Multiple Fetch & Combine Data
**Level**: 🟡 Medium

### 🎯 Learning Goals
- Fetch multiple data sources
- Combine results
- Handle multiple errors

### 📚 Study Case

"Anda ingin fetch users AND posts, kemudian combine mereka."

```html
<div id="users-section"></div>
<div id="posts-section"></div>
```

### ✍️ Task 9.1: Fetch Multiple Data Sources

**Penjelasan:**
```javascript
// Cara 1: Fetch sekali setelah sekali (LAMBAT)
async function loadData() {
  try {
    // Fetch users
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await usersResponse.json();
    console.log(user);
    
    // Fetch posts
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log('Error:', error);
  }
}

loadData();
```

**Cara 2: Fetch parallel dengan Promise.all (LEBIH CEPAT)**
```javascript
async function loadData() {
  try {
    // Fetch both at same time
    const [usersRes, postsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    
    const user = await usersRes.json();
    const posts = await postsRes.json();
    
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.log('Error:', error);
  }
}

loadData();
```

**TODO:**
```javascript
// 1. Buat function loadData()

// 2. Fetch 2 API:
//    - User: 'https://jsonplaceholder.typicode.com/users/1'
//    - Posts: 'https://jsonplaceholder.typicode.com/posts?userId=1'

// 3. Use Promise.all untuk fetch parallel

// 4. Parse response ke JSON

// 5. Console log hasilnya

// 6. Call loadData()

// Tips: Gunakan Promise.all() untuk fetch multiple
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - COBA DULU!

async function loadData() {
  try {
    // ← FETCH DENG PROMISE.ALL
    // const [usersRes, postsRes] = await Promise.all([...])
    
    // ← PARSE KEDUA RESPONSE
    // const user = ...
    // const posts = ...
    
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.log('Error:', error);
  }
}

loadData();

// SETELAH SELESAI:
// 1. Buka Console
// 2. Lihat user object dan posts array
// 3. Amati struktur data mereka
```

**Challenge:**
1. Selesaikan Promise.all
2. Console log untuk lihat struktur data
3. Eksplorasi properties user dan posts
4. Bandingkan dengan fetch sekuensial (lebih cepat gak?)

---

### ✍️ Task 9.2: Display User & Posts

**Penjelasan:**
```javascript
// Display user dan posts dari API response

async function loadData() {
  const usersSection = document.querySelector('#users-section');
  const postsSection = document.querySelector('#posts-section');
  
  try {
    usersSection.innerHTML = '<p>Loading...</p>';
    postsSection.innerHTML = '<p>Loading...</p>';
    
    const [usersRes, postsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    
    const user = await usersRes.json();
    const posts = await postsRes.json();
    
    // Display user
    usersSection.innerHTML = `
      <div class="user-card">
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>City: ${user.address.city}</p>
      </div>
    `;
    
    // Display posts
    let postsHtml = '<h3>Posts:</h3>';
    posts.forEach(post => {
      postsHtml += `
        <div class="post-card">
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        </div>
      `;
    });
    postsSection.innerHTML = postsHtml;
    
  } catch (error) {
    usersSection.innerHTML = `<p>Error: ${error.message}</p>`;
    postsSection.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

loadData();
```

**TODO:**
```javascript
// 1. Modifikasi loadData():
//    - Select #users-section & #posts-section
//    - Fetch user dan posts dengan Promise.all
//    - Display user info:
//      <div>
//        <h2>Name</h2>
//        <p>Email: email</p>
//        <p>Phone: phone</p>
//      </div>
//    - Display posts dalam loop:
//      <div>
//        <h4>Title</h4>
//        <p>Body</p>
//      </div>
//    - Handle error untuk kedua section

// 2. Call loadData()

// 3. Lihat user dan posts muncul di halaman
```

**⚠️ JAWABAN INCOMPLETE - MISSING ERROR HANDLING:**
```javascript
// ❌ INCOMPLETE - ADA BAGIAN YANG KOSONG!

async function loadData() {
  const usersSection = document.querySelector('#users-section');
  const postsSection = document.querySelector('#posts-section');
  
  try {
    // ← SHOW LOADING STATE DI KEDUA SECTION
    
    const [usersRes, postsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    
    const user = await usersRes.json();
    const posts = await postsRes.json();
    
    // Display user
    usersSection.innerHTML = `
      <div class="user-card">
        <h2>${user.name}</h2>
        <!-- ← TAMBAHKAN EMAIL, PHONE, CITY -->
      </div>
    `;
    
    // Display posts
    // ← BUILD postsHtml DI SINI
    // let postsHtml = ...
    // posts.forEach(post => { ... })
    
    // ← SET postsSection.innerHTML
    
  } catch (error) {
    // ← SHOW ERROR DI KEDUA SECTION
  }
}

loadData();
```

**Challenge Berlapis:**
1. Lengkapi display user dengan semua properties
2. Loop posts dan build HTML
3. Handle error untuk kedua section
4. Test halaman

---

### ✍️ Task 9.3: Combine Data dari Multiple Sources

**Penjelasan:**
```javascript
// Menggabungkan data dari 2 API menjadi satu tampilan

async function loadUserWithPosts() {
  const container = document.querySelector('#results-container');
  
  try {
    container.innerHTML = '<p>Loading...</p>';
    
    const [userRes, postsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    
    const user = await userRes.json();
    const posts = await postsRes.json();
    
    // Combine data
    let html = `
      <div class="profile">
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <h3>Posts by ${user.name} (${posts.length})</h3>
    `;
    
    posts.forEach(post => {
      html += `
        <div class="post">
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        </div>
      `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
  } catch (error) {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

loadUserWithPosts();
```

**TODO:**
```javascript
// 1. Modifikasi loadData() menjadi satu container
// 2. Combine user info + posts dalam satu tampilan
// 3. Show "Posts by [Name] (X posts)"
// 4. Display semua posts di bawah user info
// 5. Handle error dengan baik
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - COMBINE DATA!

async function loadUserWithPosts() {
  const container = document.querySelector('#results-container');
  
  try {
    // ← SHOW LOADING
    
    // ← FETCH DENG PROMISE.ALL
    
    // ← PARSE RESPONSES
    
    // ← BUILD COMBINED HTML
    // let html = `
    //   <div class="profile">
    //     <h2>${user.name}</h2>
    //     <p>Email: ...</p>
    //     <h3>Posts by ${user.name} (${posts.length})</h3>
    // `
    // posts.forEach(post => { ... })
    // html += '</div>';
    
    // ← SET container.innerHTML
    
  } catch (error) {
    // ← HANDLE ERROR
  }
}

loadUserWithPosts();
```

**Challenge:**
1. Lengkapi combined display
2. Tambahin counter posts
3. Style HTML dengan class CSS
4. Test dan verify

---

### 📋 RINGKASAN Challenge 9

| Konsep | Penjelasan |
|--------|-----------|
| Promise.all() | Fetch multiple parallel |
| Combine data | Merge data dari 2+ sources |
| Error handling | Tangkap error dari semua fetch |

---

## Challenge 10: Search Users dengan Posts
**Level**: 🟡 Medium

### 🎯 Learning Goals
- Fetch data once
- Combine search dari multiple fields
- Re-render combined data

### 📚 Study Case

"Anda ingin fetch users, filter berdasarkan nama, dan tampilkan posts mereka."

```html
<input type="text" id="search-input" placeholder="Search users...">
<div id="results-container"></div>
```

### ✍️ Task 10.1: Load Users & Store

**Penjelasan:**
```javascript
// Load all users dan store di variable

let allUsers = [];

async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    allUsers = await response.json();
    displayUsers(allUsers);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  let html = '';
  
  users.forEach(user => {
    html += `
      <div class="user-card" data-user-id="${user.id}">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

loadUsers();
```

**TODO:**
```javascript
// 1. Buat global variable allUsers = []

// 2. Buat loadUsers():
//    - Fetch dari API
//    - Save ke allUsers
//    - Call displayUsers(allUsers)

// 3. Buat displayUsers(users):
//    - Loop users
//    - Build HTML cards (dengan data-user-id)
//    - Insert ke container

// 4. Call loadUsers() saat page load
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

let allUsers = [];

async function loadUsers() {
  try {
    // ← FETCH USERS
    
    // ← SAVE KE allUsers
    
    // ← CALL displayUsers()
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  
  if (users.length === 0) {
    container.innerHTML = '<p>No users found</p>';
    return;
  }
  
  let html = '';
  users.forEach(user => {
    // ← BUILD CARD DENGAN data-user-id="${user.id}"
    // MINIMAL: <h3>${user.name}</h3>
  });
  
  // ← INSERT KE container
}

loadUsers();

// SETELAH SELESAI:
// Semua 10 users harus tampil
```

**Challenge:**
1. Selesaikan load dan display
2. Verify semua users muncul
3. Check data-user-id ada di HTML

---

### ✍️ Task 10.2: Search Filter

**Penjelasan:**
```javascript
// Filter users saat mengetik

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  
  const filtered = allUsers.filter(user => {
    return user.name.toLowerCase().includes(searchTerm) ||
           user.email.toLowerCase().includes(searchTerm);
  });
  
  displayUsers(filtered);
});
```

**TODO:**
```javascript
// 1. Add event listener ke search input
// 2. Saat user ketik:
//    - Get search term
//    - Filter allUsers berdasarkan name OR email
//    - Call displayUsers(filtered)

// 3. Test:
//    - Ketik nama
//    - Ketik email
//    - Lihat results filter real-time
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - COBA DULU!

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', function() {
  const searchTerm = // ← GET SEARCH TERM
  
  const filtered = allUsers.filter(user => {
    // ← FILTER BERDASARKAN NAME ATAU EMAIL
    // Hint: user.name.toLowerCase().includes(...) ||
    //       user.email.toLowerCase().includes(...)
  });
  
  displayUsers(filtered);
});

// SETELAH SELESAI:
// Test search dengan nama atau email
// Hasil harus filter real-time
```

**Challenge:**
1. Lengkapi search filter
2. Filter berdasarkan name AND email
3. Test dengan berbagai term
4. Coba case-insensitive search

---

### ✍️ Task 10.3: Fetch Posts untuk Searched User

**Penjelasan:**
```javascript
// Saat user klik card, fetch posts user tersebut

const resultsContainer = document.querySelector('#results-container');

resultsContainer.addEventListener('click', async function(e) {
  // Check if clicked on user card
  const card = e.target.closest('.user-card');
  
  if (!card) return;
  
  // Get user ID dari data-user-id
  const userId = card.getAttribute('data-user-id');
  
  try {
    // Fetch posts untuk user ini
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    
    console.log(posts);
  } catch (error) {
    console.log('Error:', error);
  }
});
```

**TODO:**
```javascript
// 1. Add event listener ke results container
// 2. Saat user card di-klik:
//    - Get user ID dari data-user-id attribute
//    - Fetch posts untuk user tersebut
//    - Display posts di bawah atau di modal

// 3. Test:
//    - Klik user card
//    - Lihat posts loading
//    - Verify posts ditampilkan

// Tips: Gunakan event delegation (listener di container)
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - ADD POSTS FEATURE!

const resultsContainer = document.querySelector('#results-container');

resultsContainer.addEventListener('click', async function(e) {
  // ← CHECK IF CLICKED ON .user-card
  // const card = e.target.closest('.user-card');
  // if (!card) return;
  
  // ← GET userId DARI data-user-id
  // const userId = ...
  
  try {
    // ← FETCH POSTS UNTUK USER
    // const response = await fetch(...)
    
    // ← PARSE RESPONSE
    
    // ← DISPLAY POSTS (CONSOLE LOG DULU)
    console.log(posts);
  } catch (error) {
    console.log('Error fetching posts:', error);
  }
});

// SETELAH SELESAI:
// Test klik user card
// Lihat posts di console
// Kemudian display posts di halaman
```

**Challenge Berlapis:**
1. Lengkapi event delegation
2. Fetch posts saat card di-klik
3. Console log untuk verify
4. Display posts di halaman (bonus)

---

### ✍️ Task 10.4: Full Integration

**Penjelasan:**
```javascript
// Kombinasi:
// 1. Load users saat page load
// 2. Search filter users
// 3. Klik user untuk lihat posts
// 4. Display semua dengan baik
```

**TODO:**
```javascript
// 1. Integrate semua functionality:
//    a) Load users
//    b) Display users
//    c) Search filter
//    d) Click to see posts
//    e) Display posts

// 2. Test full flow:
//    - Page load → users muncul
//    - Type search → users filter
//    - Click user → posts load & display

// 3. Handle errors dengan baik
// 4. Show loading states
```

**⚠️ JAWABAN INCOMPLETE - COMPLEX CHALLENGE:**
```javascript
// ❌ INCOMPLETE & CHALLENGE - INTEGRATE SEMUANYA!

let allUsers = [];

async function loadUsers() {
  try {
    // ← FETCH & SAVE
    
    displayUsers(allUsers);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayUsers(users) {
  const container = document.querySelector('#results-container');
  
  // ← BUILD & DISPLAY CARDS
}

// ← SEARCH EVENT LISTENER

// ← POSTS CLICK EVENT LISTENER

loadUsers();

// CHALLENGE:
// Lengkapi semua parts di atas
// Jangan lupa:
// - Data attributes untuk user ID
// - Event delegation
// - Fetch posts saat di-klik
// - Display posts
// - Error handling
```

**Final Challenge:**
1. Lengkapi seluruh code
2. Test: Load → Search → Click
3. Verify semua bekerja
4. Handle edge cases
5. Style dengan CSS bonus

---

### 📋 RINGKASAN Challenge 10

| Feature | Action |
|---------|--------|
| Load | Fetch users saat page load |
| Display | Show users di halaman |
| Search | Filter users by name/email |
| Click | Fetch posts saat user di-klik |
| Show Posts | Display posts di halaman |

---

---

# CHALLENGE 11-15: Events + DOM Manipulation

---

## Challenge 11: Mouse Events (Click, Hover, etc)
**Level**: 🟡 Easy-Medium

### 🎯 Learning Goals
- Pahami berbagai mouse events
- Implement event handlers
- Manipulate DOM based on events

### 📚 Study Case

"Anda ingin membuat interactive elements yang respond terhadap mouse events."

```html
<button id="click-btn">Click Me</button>
<div id="hover-box" class="box">Hover Me</div>
<div id="log-container"></div>
```

### ✍️ Task 11.1: Click Event

**Penjelasan:**
```javascript
// Click event = saat element di-klik

const button = document.querySelector('#click-btn');

button.addEventListener('click', function() {
  console.log('Button clicked!');
  alert('You clicked the button!');
});

// Atau dengan arrow function:
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

**TODO:**
```javascript
// 1. Select button dengan id='click-btn'

// 2. Add click event listener

// 3. Di dalam handler:
//    - console.log('Button clicked!')
//    - Change button text ke 'Clicked!'
//    - Change button backgroundColor ke 'green'

// 4. Test: Klik button di halaman
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const button = document.querySelector('#click-btn');

button.addEventListener('click', function() {
  console.log('Button clicked!');
  
  // ← UBAH BUTTON TEXT
  // this.textContent = ...
  
  // ← UBAH BACKGROUND COLOR
  // this.style.backgroundColor = ...
});

// SETELAH SELESAI:
// Klik button - text dan color harus berubah
```

**Challenge:**
1. Selesaikan click handler
2. Test klik button
3. Coba tambahkan toggle (click lagi untuk revert)

---

### ✍️ Task 11.2: Hover Events (Mouseover & Mouseout)

**Penjelasan:**
```javascript
// Hover = mouseover + mouseout

const box = document.querySelector('#hover-box');

// Saat mouse masuk
box.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
  this.style.transform = 'scale(1.1)';
});

// Saat mouse keluar
box.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
  this.style.transform = '';
});
```

**TODO:**
```javascript
// 1. Select div dengan id='hover-box'

// 2. Add mouseover event:
//    - Change backgroundColor ke 'lightblue'
//    - Change color text ke 'white'

// 3. Add mouseout event:
//    - Revert backgroundColor
//    - Revert color

// 4. Test: Hover box di halaman
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN HOVER!

const box = document.querySelector('#hover-box');

box.addEventListener('mouseover', function() {
  // ← UBAH STYLING SAAT HOVER
  // this.style.backgroundColor = ...
  // this.style.color = ...
});

box.addEventListener('mouseout', function() {
  // ← REVERT STYLING SAAT TIDAK HOVER
  // this.style.backgroundColor = ...
  // this.style.color = ...
});

// SETELAH SELESAI:
// Hover di atas box
// Styling harus berubah saat hover dan revert
```

**Challenge:**
1. Selesaikan hover handlers
2. Test mouseover & mouseout
3. Tambahkan efek lain (scale, opacity, dll)

---

### ✍️ Task 11.3: Event Log

**Penjelasan:**
```javascript
// Log semua event yang terjadi

const logContainer = document.querySelector('#log-container');

function logEvent(eventName) {
  const time = new Date().toLocaleTimeString();
  const logItem = document.createElement('div');
  logItem.textContent = `[${time}] ${eventName}`;
  logContainer.appendChild(logItem);
  
  // Auto scroll ke bottom
  logContainer.scrollTop = logContainer.scrollHeight;
}

const button = document.querySelector('#click-btn');
button.addEventListener('click', () => logEvent('Click'));

const box = document.querySelector('#hover-box');
box.addEventListener('mouseover', () => logEvent('Mouseover'));
box.addEventListener('mouseout', () => logEvent('Mouseout'));
```

**TODO:**
```javascript
// 1. Buat function logEvent(eventName)

// 2. Di dalam function:
//    - Create element <div>
//    - Set textContent = "[time] eventName"
//    - Append ke #log-container

// 3. Add logEvent calls ke semua event handlers:
//    - Click: logEvent('Click')
//    - Mouseover: logEvent('Mouseover')
//    - Mouseout: logEvent('Mouseout')

// 4. Test: Trigger events, lihat log muncul
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - BUAT LOGGING SYSTEM!

const logContainer = document.querySelector('#log-container');

function logEvent(eventName) {
  // ← CREATE LOG ITEM
  // const time = new Date().toLocaleTimeString();
  // const logItem = ...
  
  // ← SET TEXTCONTENT
  
  // ← APPEND KE logContainer
}

const button = document.querySelector('#click-btn');
button.addEventListener('click', function() {
  // ← PANGGIL logEvent('Click')
  
  this.textContent = 'Clicked!';
  this.style.backgroundColor = 'green';
});

const box = document.querySelector('#hover-box');

// ← ADD mouseover EVENT & logEvent
// ← ADD mouseout EVENT & logEvent

// SETELAH SELESAI:
// Trigger events
// Log harus muncul dengan timestamp
```

**Challenge:**
1. Selesaikan logEvent function
2. Add logging ke semua events
3. Test dan lihat log accumulate
4. Bonus: Add clear log button

---

### 📋 RINGKASAN Challenge 11

| Event | Trigger | Code |
|-------|---------|------|
| click | Klik element | `addEventListener('click')` |
| mouseover | Mouse masuk | `addEventListener('mouseover')` |
| mouseout | Mouse keluar | `addEventListener('mouseout')` |
| mouseenter | Mouse masuk (tidak bubble) | `addEventListener('mouseenter')` |
| mouseleave | Mouse keluar (tidak bubble) | `addEventListener('mouseleave')` |

---

## Challenge 12: Form Events & Validation
**Level**: 🟡 Easy-Medium

### 🎯 Learning Goals
- Handle form submission
- Input validation
- Show error messages

### 📚 Study Case

"Anda ingin membuat form dengan validation sebelum submit."

```html
<form id="signup-form">
  <input type="text" id="username" placeholder="Username" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Sign Up</button>
</form>
<div id="error-message"></div>
<div id="success-message"></div>
```

### ✍️ Task 12.1: Form Submit Event

**Penjelasan:**
```javascript
// Saat form di-submit

const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
  // PENTING: Prevent default submit behavior!
  e.preventDefault();
  
  console.log('Form submitted!');
  // Validate form
  // Send data
  // Show success message
});
```

**TODO:**
```javascript
// 1. Select form dengan id='signup-form'

// 2. Add submit event listener

// 3. Di dalam handler:
//    - e.preventDefault() [JANGAN LUPA!]
//    - console.log('Form submitted!')
//    - Get values dari input:
//      username, email, password
//    - console.log mereka

// 4. Test: Submit form, lihat console output
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN FORM SUBMIT!

const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
  // ← PREVENT DEFAULT
  
  // ← GET USERNAME VALUE
  // const username = ...querySelector('#username').value
  
  // ← GET EMAIL VALUE
  
  // ← GET PASSWORD VALUE
  
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
});

// SETELAH SELESAI:
// Submit form
// Lihat input values di console
// Page tidak boleh refresh!
```

**Challenge:**
1. Selesaikan form handler
2. Ambil semua input values
3. Console log mereka
4. Verify e.preventDefault() bekerja (page tidak refresh)

---

### ✍️ Task 12.2: Input Validation

**Penjelasan:**
```javascript
// Validate form inputs sebelum submit

const form = document.querySelector('#signup-form');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  
  // Clear previous errors
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  
  // Validate
  if (username.length < 3) {
    showError('Username must be at least 3 characters');
    return;
  }
  
  if (!email.includes('@')) {
    showError('Invalid email format');
    return;
  }
  
  if (password.length < 6) {
    showError('Password must be at least 6 characters');
    return;
  }
  
  showSuccess('Form submitted successfully!');
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  errorMessage.style.color = 'red';
}

function showSuccess(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  errorMessage.style.color = 'green';
}
```

**TODO:**
```javascript
// 1. Get values dari inputs
// 2. Validate:
//    - Username minimal 3 karakter
//    - Email harus contain '@'
//    - Password minimal 6 karakter

// 3. Jika ada error:
//    - Show error message
//    - return (stop execution)

// 4. Jika semua valid:
//    - Show success message

// 5. Test dengan berbagai input combinations
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - TAMBAHKAN VALIDATION!

const form = document.querySelector('#signup-form');
const errorMsg = document.querySelector('#error-message');
const successMsg = document.querySelector('#success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  
  // Clear previous messages
  errorMsg.textContent = '';
  successMsg.textContent = '';
  
  // ← ADD VALIDATION DI SINI
  // if (username.length < 3) { ... }
  // if (!email.includes('@')) { ... }
  // if (password.length < 6) { ... }
  
  // ← IF ALL VALID, SHOW SUCCESS MESSAGE
});

// SETELAH SELESAI:
// Test: Submit dengan invalid data
// Test: Submit dengan valid data
// Error/success messages harus tampil
```

**Challenge Berlapis:**
1. Lengkapi validation logic
2. Test dengan berbagai input
3. Verify error messages tampil
4. Verify success message saat valid
5. Bonus: Tambah real-time validation (input event)

---

### ✍️ Task 12.3: Clear Form After Submit

**Penjelasan:**
```javascript
// Reset form setelah submit sukses

function showSuccess(message) {
  document.querySelector('#success-message').textContent = message;
  document.querySelector('#success-message').style.display = 'block';
  
  // Clear form
  form.reset(); // Ini harus di function yang bisa access 'form'
}
```

**TODO:**
```javascript
// 1. Setelah validation sukses:
//    - Show success message
//    - Clear form menggunakan form.reset()
//    - Clear error message

// 2. Test:
//    - Submit valid form
//    - Lihat success message
//    - Lihat inputs kosong lagi
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - ADD FORM RESET!

const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  
  // ... validation code ...
  
  if (password.length < 6) {
    // show error
    return;
  }
  
  // SUCCESS - SEKARANG APA?
  // ← SHOW SUCCESS MESSAGE
  // ← CLEAR FORM
  // ← CLEAR ERROR MESSAGE
});

// SETELAH SELESAI:
// Submit valid form
// Form harus clear dan success message tampil
```

**Challenge:**
1. Lengkapi success handler
2. Add form.reset() call
3. Test submit dan verify reset
4. Bonus: Add delay sebelum reset

---

### 📋 RINGKASAN Challenge 12

| Step | Action | Code |
|------|--------|------|
| 1 | Listen submit | `addEventListener('submit')` |
| 2 | Prevent default | `e.preventDefault()` |
| 3 | Get values | `input.value.trim()` |
| 4 | Validate | `if () { return; }` |
| 5 | Show message | `element.textContent = ...` |
| 6 | Reset form | `form.reset()` |

---

## Challenge 13: Keyboard Events
**Level**: 🟡 Easy-Medium

### 🎯 Learning Goals
- Handle keyboard events
- Detect specific keys
- Real-time input handling

### 📚 Study Case

"Anda ingin handle keyboard input untuk search atau shortcut."

```html
<input type="text" id="search-box" placeholder="Search...">
<div id="search-results"></div>
<p id="key-log"></p>
```

### ✍️ Task 13.1: Input Event (Real-time)

**Penjelasan:**
```javascript
// Input event = setiap kali value berubah (lebih baik dari keyup)

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', function() {
  const value = this.value;
  console.log('Current value:', value);
  
  // Filter atau search berdasarkan input
});
```

**TODO:**
```javascript
// 1. Select input dengan id='search-box'

// 2. Add input event listener

// 3. Di dalam handler:
//    - Get value dari input
//    - console.log value
//    - Tampilkan di #search-results

// 4. Test: Type di search box, lihat output real-time
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN!

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', function() {
  // ← GET VALUE DARI INPUT
  
  // ← SHOW DI #search-results
  // document.querySelector('#search-results').textContent = ...
  
  // ← ATAU SHOW LENGTH
  // length: ${value.length}
});

// SETELAH SELESAI:
// Type di search box
// Output harus update real-time
```

**Challenge:**
1. Selesaikan input event
2. Show value di halaman
3. Show character count
4. Test typing

---

### ✍️ Task 13.2: Keydown & Keyup Events

**Penjelasan:**
```javascript
// Keydown = saat key ditekan
// Keyup = saat key dilepas

const searchBox = document.querySelector('#search-box');
const keyLog = document.querySelector('#key-log');

searchBox.addEventListener('keydown', function(e) {
  console.log('Key pressed:', e.key);
  keyLog.textContent = `Pressed: ${e.key}`;
  
  // Check specific key
  if (e.key === 'Enter') {
    console.log('Enter pressed!');
  }
});

searchBox.addEventListener('keyup', function(e) {
  console.log('Key released:', e.key);
});
```

**TODO:**
```javascript
// 1. Add keydown event listener ke search box

// 2. Log key yang ditekan: e.key

// 3. Check jika key === 'Enter':
//    - console.log('Enter pressed!')
//    - Show message di halaman

// 4. Add keyup event listener

// 5. Test: Tekan berbagai keys, lihat output
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN KEYBOARD EVENTS!

const searchBox = document.querySelector('#search-box');
const keyLog = document.querySelector('#key-log');

searchBox.addEventListener('keydown', function(e) {
  // ← LOG KEY YANG DITEKAN
  // keyLog.textContent = `Pressed: ${e.key}`;
  
  // ← CHECK IF ENTER KEY
  // if (e.key === 'Enter') { ... }
});

searchBox.addEventListener('keyup', function(e) {
  // ← LOG KEY YANG DILEPAS
});

// SETELAH SELESAI:
// Type di search box
// Log harus tampil untuk keydown & keyup
// Enter key harus special handling
```

**Challenge:**
1. Selesaikan keydown & keyup handlers
2. Test berbagai keys
3. Verify Enter key special handling
4. Log e.key untuk berbagai keys

---

### ✍️ Task 13.3: Keyboard Shortcuts

**Penjelasan:**
```javascript
// Detect kombinasi keys (Ctrl+S, Cmd+Enter, dll)

document.addEventListener('keydown', function(e) {
  // Ctrl+S
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Ctrl+S pressed!');
  }
  
  // Cmd+Enter (Mac)
  if (e.metaKey && e.key === 'Enter') {
    e.preventDefault();
    console.log('Cmd+Enter pressed!');
  }
  
  // Ctrl+Enter (Windows/Linux)
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    console.log('Ctrl+Enter pressed!');
  }
});
```

**TODO:**
```javascript
// 1. Add keydown listener ke document (global)

// 2. Check kombinasi keys:
//    - Ctrl+S: console.log('Save!')
//    - Ctrl+Enter: console.log('Submit!')

// 3. Di setiap handler:
//    - e.preventDefault()
//    - Show message

// 4. Test: Press kombinasi, lihat output

// Tips: e.ctrlKey, e.shiftKey, e.altKey, e.metaKey
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - KEYBOARD SHORTCUTS!

document.addEventListener('keydown', function(e) {
  // ← CHECK CTRL+S
  // if (e.ctrlKey && e.key === 's') {
  //   e.preventDefault();
  //   console.log('Save!');
  // }
  
  // ← CHECK CTRL+ENTER
  // if (e.ctrlKey && e.key === 'Enter') {
  //   ...
  // }
});

// SETELAH SELESAI:
// Test Ctrl+S
// Test Ctrl+Enter
// Messages harus tampil
```

**Challenge:**
1. Lengkapi keyboard shortcuts
2. Test Ctrl+S dan Ctrl+Enter
3. Verify messages tampil
4. Bonus: Add visual feedback saat shortcut triggered

---

### 📋 RINGKASAN Challenge 13

| Event | Trigger | Properties |
|-------|---------|------------|
| input | Value berubah | `e.target.value` |
| keydown | Key ditekan | `e.key`, `e.ctrlKey`, `e.shiftKey` |
| keyup | Key dilepas | `e.key` |
| keypress | Deprecated | Jangan gunakan |

---

## Challenge 14: Event Delegation
**Level**: 🟡 Medium

### 🎯 Learning Goals
- Pahami event delegation
- Listener pada parent, handle child
- Efficient event handling

### 📚 Study Case

"Anda memiliki banyak items yang bisa di-click, tapi tidak ingin attach listener ke setiap item."

```html
<ul id="item-list">
  <li class="item">Item 1 <button class="delete-btn">×</button></li>
  <li class="item">Item 2 <button class="delete-btn">×</button></li>
  <li class="item">Item 3 <button class="delete-btn">×</button></li>
</ul>
<button id="add-btn">Add Item</button>
```

### ✍️ Task 14.1: Basic Event Delegation

**Penjelasan:**
```javascript
// Listener di parent, handle click di child

const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', function(e) {
  // e.target = element yang di-klik
  // e.currentTarget = element dengan listener (itemList)
  
  console.log('Clicked:', e.target);
});
```

**TODO:**
```javascript
// 1. Select #item-list

// 2. Add click event listener ke list (parent)

// 3. Di handler:
//    - Log e.target (element yang di-klik)
//    - Log e.target.textContent

// 4. Test: Klik berbagai bagian dalam list,
//    lihat apa yang di-klik
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - BASIC DELEGATION!

const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', function(e) {
  // ← LOG WHAT WAS CLICKED
  console.log('Clicked:', e.target);
  // ← LOG TEXTCONTENT
});

// SETELAH SELESAI:
// Click berbagai elements dalam list
// Console harus show apa yang di-klik
```

**Challenge:**
1. Selesaikan delegation listener
2. Test klik item, button, text, dll
3. Understand e.target vs e.currentTarget

---

### ✍️ Task 14.2: Target Specific Elements

**Penjelasan:**
```javascript
// Check e.target untuk specific class/element

const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', function(e) {
  // Check if clicked on delete button
  if (e.target.classList.contains('delete-btn')) {
    const item = e.target.parentElement;
    item.remove();
  }
  
  // Check if clicked on item
  if (e.target.classList.contains('item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});
```

**TODO:**
```javascript
// 1. Add click listener ke #item-list

// 2. Check jika clicked on .delete-btn:
//    - Get parent element (li)
//    - Delete item

// 3. Check jika clicked on .item:
//    - Log item text

// 4. Test:
//    - Click item → log message
//    - Click delete button → item dihapus
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - TARGET SPECIFIC ELEMENTS!

const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', function(e) {
  // ← CHECK IF CLICKED ON .delete-btn
  // if (e.target.classList.contains('delete-btn')) {
  //   ...remove item...
  // }
  
  // ← CHECK IF CLICKED ON .item
  // if (e.target.classList.contains('item')) {
  //   ...log message...
  // }
});

// SETALAH SELESAI:
// Click item text → log message
// Click delete button → item disappears
```

**Challenge:**
1. Lengkapi check conditions
2. Test click item dan button
3. Verify delete works
4. Bonus: Add confirmation before delete

---

### ✍️ Task 14.3: Add Items & Delegation Still Works

**Penjelasan:**
```javascript
// Event delegation works untuk dynamically added items juga!

const addBtn = document.querySelector('#add-btn');
const itemList = document.querySelector('#item-list');
let itemCount = 3;

addBtn.addEventListener('click', function() {
  itemCount++;
  
  const newItem = document.createElement('li');
  newItem.className = 'item';
  newItem.innerHTML = `
    Item ${itemCount}
    <button class="delete-btn">×</button>
  `;
  
  itemList.appendChild(newItem);
  
  // NEW ITEMS TIDAK PERLU ATTACH LISTENER!
  // Event delegation dari parent itemList masih work!
});
```

**TODO:**
```javascript
// 1. Add listener ke #add-btn

// 2. Saat klik:
//    - Create new <li> element
//    - Add class='item'
//    - innerHTML = Item X + delete button
//    - Append ke itemList

// 3. Test:
//    - Click add button
//    - New item muncul
//    - Delete button dari item baru juga work!

// Tips: Event delegation automatic handle new items!
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - ADD ITEMS & DELEGATION!

const addBtn = document.querySelector('#add-btn');
const itemList = document.querySelector('#item-list');
let itemCount = 3;

addBtn.addEventListener('click', function() {
  itemCount++;
  
  // ← CREATE NEW LI ELEMENT
  // const newItem = document.createElement('li');
  
  // ← SET CLASS & INNERHTML
  // newItem.className = 'item';
  // newItem.innerHTML = ...
  
  // ← APPEND KE ITEMLIST
});

// JANGAN LUPA: itemList listener sudah ada dari Task 14.2!
// New items akan automatic di-handle oleh delegation

// SETELAH SELESAI:
// Add items
// Click delete di item baru
// Harus work tanpa tambahan listener!
```

**Challenge Berlapis:**
1. Lengkapi add item function
2. Create proper HTML structure
3. Test add dan delete items
4. Verify delegation works untuk new items
5. Bonus: Add unique IDs ke setiap item

---

### 📋 RINGKASAN Challenge 14

| Konsep | Penjelasan |
|--------|-----------|
| Event Delegation | Listener di parent, handle di child |
| e.target | Element yang di-klik |
| e.currentTarget | Element dengan listener |
| classList.contains() | Check jika ada class |
| Dynamic items | Automatic handled oleh delegation |

---

## Challenge 15: Combine Events + DOM
**Level**: 🟡 Medium

### 🎯 Learning Goals
- Combine multiple events
- Complex interactions
- Real-world scenario

### 📚 Study Case

"Anda membuat todo app dengan add, delete, complete, dan filter."

```html
<div id="todo-app">
  <input type="text" id="todo-input" placeholder="Add todo...">
  <button id="add-btn">Add</button>
  
  <div id="filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="active">Active</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
  </div>
  
  <ul id="todo-list"></ul>
  <p id="todo-count"></p>
</div>
```

### ✍️ Task 15.1: Add Todo

**Penjelasan:**
```javascript
// Add todo saat button di-klik atau Enter di-tekan

let todos = [];

const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

// Click button
addBtn.addEventListener('click', addTodo);

// Or press Enter
todoInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const text = todoInput.value.trim();
  
  if (text === '') {
    alert('Please enter a todo!');
    return;
  }
  
  const todo = {
    id: Date.now(),
    text: text,
    completed: false
  };
  
  todos.push(todo);
  todoInput.value = '';
  
  displayTodos(todos);
}

function displayTodos(todosToDisplay) {
  todoList.innerHTML = '';
  
  todosToDisplay.forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'todo completed' : 'todo';
    li.dataset.todoId = todo.id;
    # LANJUTAN Challenge 15

    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''}>
      <span>${todo.text}</span>
      <button class="delete-btn">Delete</button>
    `;
    
    todoList.appendChild(li);
  });
  
  updateTodoCount();
}

function updateTodoCount() {
  const active = todos.filter(t => !t.completed).length;
  document.querySelector('#todo-count').textContent = 
    `Active: ${active} | Total: ${todos.length}`;
}
```

**TODO:**
```javascript
// 1. Buat global array: let todos = [];

// 2. Buat function addTodo():
//    - Get value dari input
//    - Validate (tidak boleh empty)
//    - Create todo object dengan: id, text, completed
//    - Push ke todos array
//    - Clear input
//    - Call displayTodos()

// 3. Buat function displayTodos(todosToDisplay):
//    - Clear todoList innerHTML
//    - Loop todos
//    - Create li untuk setiap todo
//    - Set data-todo-id attribute
//    - Build HTML dengan checkbox, text, delete button
//    - Append ke todoList

// 4. Add event listeners:
//    - Click #add-btn → addTodo()
//    - Keydown Enter di input → addTodo()

// 5. Test: Add beberapa todos
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - SELESAIKAN ADD TODO!

let todos = [];

const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', function(e) {
  // ← CHECK IF ENTER KEY
  // if (e.key === 'Enter') {
  //   addTodo();
  // }
});

function addTodo() {
  // ← GET & TRIM INPUT VALUE
  
  // ← VALIDATE (tidak boleh empty)
  
  // ← CREATE TODO OBJECT
  // const todo = { id: ..., text: ..., completed: ... };
  
  // ← PUSH KE todos ARRAY
  
  // ← CLEAR INPUT
  
  // ← DISPLAY TODOS
}

function displayTodos(todosToDisplay) {
  // ← CLEAR todoList.innerHTML
  
  todosToDisplay.forEach(todo => {
    // ← CREATE LI ELEMENT
    
    // ← SET CLASSNAME & data-todo-id
    
    // ← BUILD HTML WITH CHECKBOX, TEXT, DELETE BUTTON
    
    // ← APPEND KE todoList
  });
  
  updateTodoCount();
}

function updateTodoCount() {
  // ← CALCULATE ACTIVE TODOS
  // const active = todos.filter(t => !t.completed).length;
  
  // ← UPDATE #todo-count TEXT
}

// SETELAH SELESAI:
// Click add button atau press Enter
// Todos harus ditambah dan ditampilkan
```

**Challenge:**
1. Lengkapi semua functions
2. Test add todo dengan button
3. Test add todo dengan Enter key
4. Verify todo count update

---

### ✍️ Task 15.2: Delete & Complete Todo

**Penjelasan:**
```javascript
// Event delegation untuk delete dan complete

const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(e) {
  // Get todo item
  const todoItem = e.target.closest('.todo');
  
  if (!todoItem) return;
  
  const todoId = parseInt(todoItem.dataset.todoId);
  
  // Delete button
  if (e.target.classList.contains('delete-btn')) {
    todos = todos.filter(t => t.id !== todoId);
    displayTodos(todos);
  }
  
  // Checkbox
  if (e.target.type === 'checkbox') {
    const todo = todos.find(t => t.id === todoId);
    todo.completed = !todo.completed;
    displayTodos(todos);
  }
});
```

**TODO:**
```javascript
// 1. Add click listener ke #todo-list (event delegation)

// 2. Get closest .todo element

// 3. Get todo id dari data-todo-id

// 4. If delete button clicked:
//    - Filter out todo dari todos array
//    - Display updated todos

// 5. If checkbox clicked:
//    - Find todo by id
//    - Toggle completed property
//    - Display todos

// 6. Test:
//    - Click delete → todo dihapus
//    - Click checkbox → todo ditandai selesai
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - DELETE & COMPLETE!

const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(e) {
  // ← GET CLOSEST .todo ELEMENT
  // const todoItem = e.target.closest('.todo');
  
  // ← IF NO todoItem, RETURN
  
  // ← GET todoId FROM data-todo-id
  
  // ← IF DELETE BUTTON
  // if (e.target.classList.contains('delete-btn')) {
  //   todos = todos.filter(...);
  //   displayTodos(todos);
  // }
  
  // ← IF CHECKBOX
  // if (e.target.type === 'checkbox') {
  //   const todo = todos.find(...);
  //   todo.completed = !todo.completed;
  //   displayTodos(todos);
  // }
});

// SETELAH SELESAI:
// Click delete button
// Click checkbox
// Todos harus di-update dan di-display
```

**Challenge Berlapis:**
1. Lengkapi event delegation
2. Test delete functionality
3. Test complete (checkbox) functionality
4. Verify completed todos punya class 'completed'
5. Bonus: Add strikethrough CSS untuk completed todos

---

### ✍️ Task 15.3: Filter Todos

**Penjelasan:**
```javascript
// Filter todos berdasarkan status

const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class dari semua buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    
    // Add active class ke button yang di-klik
    this.classList.add('active');
    
    // Update current filter
    currentFilter = this.dataset.filter;
    
    // Filter dan display todos
    const filtered = filterTodos(todos, currentFilter);
    displayTodos(filtered);
  });
});

function filterTodos(todosArray, filter) {
  switch(filter) {
    case 'active':
      return todosArray.filter(t => !t.completed);
    case 'completed':
      return todosArray.filter(t => t.completed);
    default:
      return todosArray;
  }
}
```

**TODO:**
```javascript
// 1. Select .filter-btn buttons

// 2. Add click listener ke setiap button

// 3. Di handler:
//    - Remove 'active' class dari semua buttons
//    - Add 'active' class ke button yang di-klik
//    - Get filter type dari data-filter
//    - Filter todos
//    - Display filtered todos

// 4. Buat function filterTodos(array, filter):
//    - if filter === 'active': return uncompleted todos
//    - if filter === 'completed': return completed todos
//    - else: return all todos

// 5. Test: Click different filters
```

**⚠️ JAWABAN INCOMPLETE:**
```javascript
// ❌ INCOMPLETE - FILTER TODOS!

const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // ← REMOVE 'active' CLASS DARI SEMUA BUTTONS
    
    // ← ADD 'active' CLASS KE this BUTTON
    
    // ← GET FILTER TYPE DARI data-filter
    // currentFilter = ...
    
    // ← FILTER TODOS
    // const filtered = filterTodos(todos, currentFilter);
    
    // ← DISPLAY FILTERED
  });
});

function filterTodos(todosArray, filter) {
  // ← SWITCH CASE UNTUK 'active', 'completed', 'all'
}

// SETELAH SELESAI:
// Click "Active" filter
// Click "Completed" filter
// Click "All" filter
// Todos harus filter dan display sesuai
```

**Challenge:**
1. Lengkapi filter functionality
2. Test all 3 filters
3. Verify active/inactive buttons styling
4. Verify correct todos ditampilkan per filter

---

### ✍️ Task 15.4: Full Integration

**Penjelasan:**
```javascript
// Combine semua functionality menjadi full app

// Flow:
// 1. Add todo → displayed dengan all filter
// 2. Click checkbox → mark complete, count update, filter still work
// 3. Click delete → remove todo
// 4. Switch filter → show correct todos
```

**TODO:**
```javascript
// 1. Integrasikan semua parts:
//    - Add todo
//    - Display todos
//    - Delete todo
//    - Complete todo
//    - Filter todos
//    - Update count

// 2. Test full flow:
//    - Add 5 todos
//    - Complete beberapa
//    - Delete beberapa
//    - Filter by all/active/completed
//    - Check count updates

// 3. Edge cases:
//    - Add empty todo
//    - Delete semua todos
//    - Filter dengan empty todos
```

**⚠️ JAWABAN INCOMPLETE - FULL APP:**
```javascript
// ❌ FULL APP - MISSING PARTS!

let todos = [];
let currentFilter = 'all';

// ← GETTERS
const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');

// ← EVENT LISTENERS
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTodo();
});

todoList.addEventListener('click', function(e) {
  // ← DELETE & COMPLETE LOGIC
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // ← FILTER LOGIC
  });
});

// ← FUNCTIONS
function addTodo() { /* ... */ }
function displayTodos(todosToDisplay) { /* ... */ }
function updateTodoCount() { /* ... */ }
function filterTodos(array, filter) { /* ... */ }

// SETELAH SELESAI:
// Full todo app harus work sempurna!
// Coba semua fitur:
// - Add todos
// - Complete todos
// - Delete todos
// - Filter todos
// - Check counts
```

**Final Challenge:**
1. Lengkapi full app dengan semua parts
2. Test semua functionality lengkap
3. Test edge cases
4. Bonus: Add localStorage untuk persist todos
5. Bonus: Add edit todo functionality

---

### 📋 RINGKASAN Challenge 15

| Feature | Implementation |
|---------|-----------------|
| Add | Button click + Enter key |
| Display | Loop array, build HTML |
| Delete | Event delegation + filter |
| Complete | Event delegation + toggle |
| Filter | Switch case + re-display |
| Count | Calculate + update |

---

---

## 🎓 COMPLETE ROADMAP SUMMARY

### Challenges 1-5: DOM Basics
- ✅ querySelector & querySelectorAll
- ✅ Modify text (textContent, innerHTML)
- ✅ Manipulate CSS (style, classList)
- ✅ Create & remove elements
- ✅ Get & set attributes

### Challenges 6-10: Fetch & API
- ✅ Fetch from JSON files
- ✅ Fetch from public API
- ✅ Parse & display data
- ✅ Error handling
- ✅ Search & filter combined data

### Challenges 11-15: Events & Interactions
- ✅ Mouse events
- ✅ Form validation
- ✅ Keyboard events
- ✅ Event delegation
- ✅ Real-world todo app

---

## 📚 BONUS CHALLENGES

### B1: Advanced DOM - Nested Elements
```javascript
// Select nested elements
const parent = document.querySelector('.parent');
const child = parent.querySelector('.child');
const grandchild = child.closest('.ancestor');
```

### B2: Performance - Event Delegation vs Direct
```javascript
// Compare 1000 items with listeners vs delegation
// Delegation is much faster!
```

### B3: Error Boundaries
```javascript
// Handle errors gracefully di fetch & DOM manipulation
```

### B4: Storage - localStorage
```javascript
// Persist data ke browser storage
localStorage.setItem('key', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('key'));
```

### B5: Timing - setTimeout & setInterval
```javascript
// Delay operations
setTimeout(() => { /* ... */ }, 1000);

// Repeat operations
setInterval(() => { /* ... */ }, 1000);
```

---

## 🚀 NEXT STEPS

1. **Finish all 15 challenges** - Jangan lompat-lompat!
2. **Do BONUS challenges** - Leveling up your skills
3. **Build real projects** - Combine semua yang sudah dipelajari
4. **Learn async/await deeply** - Sudah disentuh, perlu lebih dalam
5. **Explore libraries** - React, Vue, Svelte

---

## 📝 TIPS

1. **Type code yourself** - Don't copy-paste!
2. **Understand each part** - Bukan hanya execute
3. **Experiment** - Try different variations
4. **Debug** - Gunakan DevTools secara maksimal
5. **Test thoroughly** - Test semua edge cases

---

## 🎯 LEARNING OUTCOMES

Setelah complete semua challenges, Anda bisa:

✅ Select & manipulate DOM elements  
✅ Handle user interactions (clicks, keyboard, form)  
✅ Fetch data dari API  
✅ Display & filter data dynamically  
✅ Build interactive web applications  
✅ Write clean, maintainable code  
✅ Debug dengan DevTools  
✅ Handle errors gracefully  

---
**Start dari Challenge 1 dan jangan loncat!**

Setiap challenge dirancang untuk build pada pembelajaran sebelumnya.
