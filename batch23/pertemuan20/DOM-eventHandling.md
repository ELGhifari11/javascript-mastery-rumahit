# Event Handler di DOM JavaScript - 25 Study Case


### Apa itu Event Handler?
Event handler adalah fungsi yang dijalankan ketika suatu peristiwa (event) terjadi pada elemen DOM. Event dapat berupa klik, input, perubahan nilai, atau berbagai interaksi pengguna lainnya.

### Cara Menambahkan Event Handler

```javascript
// 1. HTML Attribute (Tidak disarankan)
<button onclick="handleClick()">Klik</button>

// 2. DOM Property
element.onclick = function() { };

// 3. addEventListener() (Rekomendasi)
element.addEventListener('click', function() { });
element.addEventListener('click', handleClick);
```

### Event Common
- **Mouse Events**: `click`, `dblclick`, `mouseenter`, `mouseleave`, `mouseover`, `mouseout`, `mousedown`, `mouseup`, `mousemove`
- **Keyboard Events**: `keydown`, `keyup`, `keypress`, `input`
- **Form Events**: `submit`, `change`, `focus`, `blur`, `input`
- **Window Events**: `load`, `unload`, `scroll`, `resize`
- **Touch Events**: `touchstart`, `touchend`, `touchmove`

---

## Study Cases

### Study Case 1: Click Event Dasar

**Deskripsi**: Menampilkan alert ketika tombol diklik.

```javascript
// HTML
<button id="btn1">Klik Saya</button>

// JavaScript
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
  alert('Tombol berhasil diklik!');
});
```

**Output**: Alert muncul saat tombol diklik.

---

### Study Case 2: Counter dengan Click

**Deskripsi**: Membuat counter yang bertambah setiap kali tombol diklik.

```javascript
// HTML
<button id="btn2">Klik</button>
<p id="counter">Count: 0</p>

// JavaScript
let count = 0;
const btn2 = document.getElementById('btn2');
const counter = document.getElementById('counter');

btn2.addEventListener('click', function() {
  count++;
  counter.textContent = `Count: ${count}`;
});
```

---

### Study Case 3: Toggle Class

**Deskripsi**: Menambah/menghapus class saat tombol diklik.

```javascript
// HTML
<button id="btn3">Toggle Dark Mode</button>
<div id="box3" class="light">Box</div>

// CSS
.light { background: white; color: black; }
.dark { background: black; color: white; }

// JavaScript
const btn3 = document.getElementById('btn3');
const box3 = document.getElementById('box3');

btn3.addEventListener('click', function() {
  box3.classList.toggle('dark');
});
```

---

### Study Case 4: Mouse Enter & Leave

**Deskripsi**: Menampilkan/menghilangkan teks saat mouse masuk/keluar.

```javascript
// HTML
<div id="box4">Hover Saya</div>

// CSS
#box4 { width: 200px; height: 100px; background: skyblue; }

// JavaScript
const box4 = document.getElementById('box4');

box4.addEventListener('mouseenter', function() {
  this.textContent = 'Mouse Masuk!';
  this.style.backgroundColor = 'orange';
});

box4.addEventListener('mouseleave', function() {
  this.textContent = 'Hover Saya';
  this.style.backgroundColor = 'skyblue';
});
```

---

### Study Case 5: Form Submit

**Deskripsi**: Menghandle form submission dan mencegah reload halaman.

```javascript
// HTML
<form id="form5">
  <input type="text" id="name5" placeholder="Nama">
  <button type="submit">Submit</button>
  <p id="result5"></p>
</form>

// JavaScript
const form5 = document.getElementById('form5');
const result5 = document.getElementById('result5');

form5.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name5').value;
  result5.textContent = `Halo, ${name}!`;
  form5.reset();
});
```

---

### Study Case 6: Input Event - Live Search

**Deskripsi**: Menampilkan hasil pencarian saat user mengetik.

```javascript
// HTML
<input type="text" id="search6" placeholder="Cari...">
<ul id="results6"></ul>

// JavaScript
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const search6 = document.getElementById('search6');
const results6 = document.getElementById('results6');

search6.addEventListener('input', function() {
  results6.innerHTML = '';
  const query = this.value.toLowerCase();
  
  fruits.forEach(fruit => {
    if (fruit.toLowerCase().includes(query)) {
      const li = document.createElement('li');
      li.textContent = fruit;
      results6.appendChild(li);
    }
  });
});
```

---

### Study Case 7: Event Delegation

**Deskripsi**: Menghandle event pada multiple elements dengan satu listener.

```javascript
// HTML
<ul id="list7">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// JavaScript
const list7 = document.getElementById('list7');

list7.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.textContent += ' ✓';
  }
});
```

---

### Study Case 8: Double Click

**Deskripsi**: Menghandle double-click untuk menghapus item.

```javascript
// HTML
<div id="container8">
  <div class="item8">Item 1</div>
  <div class="item8">Item 2</div>
  <div class="item8">Item 3</div>
</div>

// JavaScript
const items8 = document.querySelectorAll('.item8');

items8.forEach(item => {
  item.addEventListener('dblclick', function() {
    this.remove();
  });
});
```

---

### Study Case 9: Keyboard Events

**Deskripsi**: Mendeteksi tombol keyboard yang ditekan.

```javascript
// HTML
<input type="text" id="input9" placeholder="Tekan tombol...">
<p id="key-info9">Key: -</p>

// JavaScript
const input9 = document.getElementById('input9');
const keyInfo9 = document.getElementById('key-info9');

input9.addEventListener('keydown', function(e) {
  keyInfo9.textContent = `Key: ${e.key} (Code: ${e.code})`;
});
```

---

### Study Case 10: Enter Key Submit

**Deskripsi**: Submit form ketika user menekan Enter.

```javascript
// HTML
<input type="text" id="input10">
<button id="btn10">Add</button>
<ul id="list10"></ul>

// JavaScript
const input10 = document.getElementById('input10');
const btn10 = document.getElementById('btn10');
const list10 = document.getElementById('list10');

function addItem() {
  if (input10.value.trim()) {
    const li = document.createElement('li');
    li.textContent = input10.value;
    list10.appendChild(li);
    input10.value = '';
  }
}

input10.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addItem();
});

btn10.addEventListener('click', addItem);
```

---

### Study Case 11: Focus & Blur Events

**Deskripsi**: Mengubah style input saat fokus dan blur.

```javascript
// HTML
<input type="text" id="input11" placeholder="Fokus di sini">

// CSS
input:focus { border: 2px solid blue; }
.focused { box-shadow: 0 0 10px rgba(0,0,255,0.5); }

// JavaScript
const input11 = document.getElementById('input11');

input11.addEventListener('focus', function() {
  this.classList.add('focused');
  console.log('Input fokus');
});

input11.addEventListener('blur', function() {
  this.classList.remove('focused');
  console.log('Input blur');
});
```

---

### Study Case 12: Change Event

**Deskripsi**: Mendeteksi perubahan nilai select dropdown.

```javascript
// HTML
<select id="select12">
  <option value="">-- Pilih Warna --</option>
  <option value="red">Merah</option>
  <option value="green">Hijau</option>
  <option value="blue">Biru</option>
</select>
<div id="box12"></div>

// JavaScript
const select12 = document.getElementById('select12');
const box12 = document.getElementById('box12');

select12.addEventListener('change', function() {
  box12.style.backgroundColor = this.value;
  box12.textContent = this.options[this.selectedIndex].text;
});
```

---

### Study Case 13: Checkbox Events

**Deskripsi**: Mengelola multiple checkboxes.

```javascript
// HTML
<label><input type="checkbox" value="JS"> JavaScript</label>
<label><input type="checkbox" value="Python"> Python</label>
<label><input type="checkbox" value="Java"> Java</label>
<p id="selected13">Selected: </p>

// JavaScript
const checkboxes13 = document.querySelectorAll('input[type="checkbox"]');
const selected13 = document.getElementById('selected13');

checkboxes13.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const selected = Array.from(checkboxes13)
      .filter(cb => cb.checked)
      .map(cb => cb.value)
      .join(', ');
    selected13.textContent = `Selected: ${selected || 'None'}`;
  });
});
```

---

### Study Case 14: Radio Button

**Deskripsi**: Menghandle radio button untuk pilihan eksklusif.

```javascript
// HTML
<label><input type="radio" name="size" value="S"> Small</label>
<label><input type="radio" name="size" value="M"> Medium</label>
<label><input type="radio" name="size" value="L"> Large</label>
<p id="size-info14">Selected: -</p>

// JavaScript
const radios14 = document.querySelectorAll('input[name="size"]');
const sizeInfo14 = document.getElementById('size-info14');

radios14.forEach(radio => {
  radio.addEventListener('change', function() {
    sizeInfo14.textContent = `Selected: ${this.value}`;
  });
});
```

---

### Study Case 15: Window Resize Event

**Deskripsi**: Mendeteksi perubahan ukuran window.

```javascript
// HTML
<p id="window-info15">Width: - | Height: -</p>

// JavaScript
const windowInfo15 = document.getElementById('window-info15');

window.addEventListener('resize', function() {
  windowInfo15.textContent = 
    `Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`;
});

// Trigger once on load
window.dispatchEvent(new Event('resize'));
```

---

### Study Case 16: Scroll Event

**Deskripsi**: Mendeteksi scroll dan menampilkan progress.

```javascript
// HTML
<div id="scroll-progress16"></div>
<div style="height: 2000px;">
  <p>Scroll down...</p>
</div>

// CSS
#scroll-progress16 {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: blue;
}

// JavaScript
window.addEventListener('scroll', function() {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-progress16').style.width = scrolled + '%';
});
```

---

### Study Case 17: Mouse Move & Position

**Deskripsi**: Menampilkan posisi mouse real-time.

```javascript
// HTML
<div id="mouse-track17">Move mouse here</div>
<p id="mouse-pos17">X: - | Y: -</p>

// JavaScript
const track17 = document.getElementById('mouse-track17');
const pos17 = document.getElementById('mouse-pos17');

track17.addEventListener('mousemove', function(e) {
  pos17.textContent = `X: ${e.clientX}px | Y: ${e.clientY}px`;
});
```

---

### Study Case 18: Drag & Drop Dasar

**Deskripsi**: Implementasi drag dan drop sederhana.

```javascript
// HTML
<div id="draggable18" draggable="true">Drag Me</div>
<div id="drop-zone18">Drop Here</div>

// CSS
#draggable18 { width: 100px; height: 50px; background: orange; cursor: move; }
#drop-zone18 { width: 300px; height: 200px; background: lightgray; margin-top: 20px; }

// JavaScript
const draggable18 = document.getElementById('draggable18');
const dropZone18 = document.getElementById('drop-zone18');

draggable18.addEventListener('dragstart', function(e) {
  e.dataTransfer.effectAllowed = 'move';
});

dropZone18.addEventListener('dragover', function(e) {
  e.preventDefault();
  this.style.background = 'lightblue';
});

dropZone18.addEventListener('drop', function(e) {
  e.preventDefault();
  this.appendChild(draggable18);
});

dropZone18.addEventListener('dragleave', function() {
  this.style.background = 'lightgray';
});
```

---

### Study Case 19: Validasi Form Real-time

**Deskripsi**: Validasi input email saat user mengetik.

```javascript
// HTML
<input type="email" id="email19" placeholder="Email">
<span id="error19"></span>

// CSS
.error { color: red; }
.valid { color: green; }

// JavaScript
const email19 = document.getElementById('email19');
const error19 = document.getElementById('error19');

email19.addEventListener('input', function() {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
  
  if (this.value === '') {
    error19.textContent = '';
    error19.className = '';
  } else if (isValid) {
    error19.textContent = '✓ Email valid';
    error19.className = 'valid';
  } else {
    error19.textContent = '✗ Email tidak valid';
    error19.className = 'error';
  }
});
```

---

### Study Case 20: Event Listener Remove

**Deskripsi**: Menambah dan menghapus event listener.

```javascript
// HTML
<button id="btn20-add">Add Listener</button>
<button id="btn20-remove">Remove Listener</button>
<p id="log20">Log: -</p>

// JavaScript
const log20 = document.getElementById('log20');
const btnAdd20 = document.getElementById('btn20-add');
const btnRemove20 = document.getElementById('btn20-remove');

function handleClick() {
  log20.textContent = `Clicked at ${new Date().toLocaleTimeString()}`;
}

btnAdd20.addEventListener('click', function() {
  btnAdd20.addEventListener('click', handleClick);
  log20.textContent = 'Listener added';
});

btnRemove20.addEventListener('click', function() {
  btnAdd20.removeEventListener('click', handleClick);
  log20.textContent = 'Listener removed';
});
```

---

### Study Case 21: Event Bubbling

**Deskripsi**: Mendemonstrasikan event bubbling.

```javascript
// HTML
<div id="parent21">
  Parent
  <div id="child21">Child</div>
</div>
<p id="log21">Log: -</p>

// CSS
#parent21 { background: lightblue; padding: 20px; }
#child21 { background: lightcoral; padding: 10px; }

// JavaScript
const parent21 = document.getElementById('parent21');
const child21 = document.getElementById('child21');
const log21 = document.getElementById('log21');

parent21.addEventListener('click', function() {
  log21.textContent += ' Parent clicked |';
});

child21.addEventListener('click', function(e) {
  log21.textContent += ' Child clicked |';
});
```

---

### Study Case 22: Event Capturing

**Deskripsi**: Menggunakan event capturing phase.

```javascript
// HTML
<div id="outer22">
  Outer
  <div id="inner22">Inner</div>
</div>
<p id="order22">Order: -</p>

// JavaScript
const outer22 = document.getElementById('outer22');
const inner22 = document.getElementById('inner22');
const order22 = document.getElementById('order22');
let sequence = [];

outer22.addEventListener('click', function() {
  sequence.push('Outer (capturing)');
  order22.textContent = sequence.join(' → ');
}, true); // true = capturing phase

inner22.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent bubbling
  sequence.push('Inner (target)');
  order22.textContent = sequence.join(' → ');
});
```

---

### Study Case 23: Custom Events

**Deskripsi**: Membuat dan memicu custom event.

```javascript
// HTML
<button id="btn23">Trigger Custom Event</button>
<p id="log23">Log: -</p>

// JavaScript
const btn23 = document.getElementById('btn23');
const log23 = document.getElementById('log23');

// Buat custom event
const customEvent = new CustomEvent('myEvent', {
  detail: { message: 'Custom event triggered!' }
});

// Listener untuk custom event
document.addEventListener('myEvent', function(e) {
  log23.textContent = e.detail.message;
});

// Trigger custom event
btn23.addEventListener('click', function() {
  document.dispatchEvent(customEvent);
});
```

---

### Study Case 24: Debounce pada Scroll

**Deskripsi**: Mengoptimalkan scroll event dengan debounce.

```javascript
// HTML
<p id="scroll-log24">Scroll events: 0</p>
<div style="height: 2000px;">Content</div>

// JavaScript
let scrollCount = 0;
let debounceTimer;
const scrollLog24 = document.getElementById('scroll-log24');

function debounce(func, delay) {
  return function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
  };
}

const handleScroll = debounce(function() {
  scrollCount++;
  scrollLog24.textContent = `Scroll events: ${scrollCount}`;
}, 500);

window.addEventListener('scroll', handleScroll);
```

---

### Study Case 25: Form Auto-save

**Deskripsi**: Auto-save form data ke localStorage saat user mengetik.

```javascript
// HTML
<form id="form25">
  <input type="text" id="name25" placeholder="Nama">
  <textarea id="notes25" placeholder="Catatan"></textarea>
  <button type="submit">Simpan</button>
  <p id="status25">Auto-save: -</p>
</form>

// JavaScript
const form25 = document.getElementById('form25');
const name25 = document.getElementById('name25');
const notes25 = document.getElementById('notes25');
const status25 = document.getElementById('status25');
let saveTimer;

// Load data from localStorage
function loadData() {
  const saved = JSON.parse(localStorage.getItem('formData25') || '{}');
  if (saved.name) name25.value = saved.name;
  if (saved.notes) notes25.value = saved.notes;
}

// Save data to localStorage
function saveData() {
  const data = {
    name: name25.value,
    notes: notes25.value
  };
  localStorage.setItem('formData25', JSON.stringify(data));
  status25.textContent = `Auto-save: Tersimpan pada ${new Date().toLocaleTimeString()}`;
}

// Debounced save
function handleInput() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveData, 1000);
  status25.textContent = 'Auto-save: Menyimpan...';
}

name25.addEventListener('input', handleInput);
notes25.addEventListener('input', handleInput);

form25.addEventListener('submit', function(e) {
  e.preventDefault();
  saveData();
  alert('Form berhasil disimpan!');
});

// Load on page load
loadData();
```

---

## Best Practice

### 1. Gunakan `addEventListener`
```javascript
// ✓ Good
element.addEventListener('click', handleClick);

// ✗ Avoid
element.onclick = handleClick;
```

### 2. Manfaatkan Event Delegation
```javascript
// ✓ Good - Skalabel
parent.addEventListener('click', function(e) {
  if (e.target.matches('.item')) {
    // Handle item click
  }
});

// ✗ Avoid - Boros memory
items.forEach(item => {
  item.addEventListener('click', handleClick);
});
```

### 3. Gunakan `e.preventDefault()` Saat Diperlukan
```javascript
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Cegah default submit behavior
  // Handle custom submission
});
```

### 4. Hapus Event Listener jika Tidak Digunakan
```javascript
function handleClick() { }

element.addEventListener('click', handleClick);
// Nanti jika tidak perlu lagi:
element.removeEventListener('click', handleClick);
```

### 5. Gunakan `this` dalam Arrow Function Hati-hati
```javascript
// ✓ Good - ini mereferensikan element
element.addEventListener('click', function() {
  console.log(this); // element
});

// ✗ Problem - ini mereferensikan context luar
element.addEventListener('click', () => {
  console.log(this); // window/global object
});
```

### 6. Optimalkan Event Handlers Berat
```javascript
// Gunakan debounce untuk event yang sering trigger
const debounce = (func, delay) => {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), delay);
  };
};

window.addEventListener('resize', debounce(handleResize, 250));
```

### 7. Manfaatkan Event Delegation Keys
```javascript
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') { }
  if (e.key === 'Escape') { }
  if (e.ctrlKey && e.key === 's') { }
});
```

---

## Ringkasan Tabel Event Handler

| No | Tipe Event | Event Name | Use Case |
|----|-----------|-----------|----------|
| 1 | Mouse | `click` | Klik tombol |
| 2 | Mouse | `dblclick` | Double-click |
| 3 | Mouse | `mouseenter`/`mouseleave` | Hover effect |
| 4 | Keyboard | `keydown`/`keyup` | Deteksi tombol |
| 5 | Form | `submit` | Submit form |
| 6 | Form | `change` | Perubahan value |
| 7 | Form | `input` | Real-time input |
| 8 | Form | `focus`/`blur` | Focus/blur input |
| 9 | Window | `resize` | Perubahan ukuran |
| 10 | Window | `scroll` | Scroll halaman |

---