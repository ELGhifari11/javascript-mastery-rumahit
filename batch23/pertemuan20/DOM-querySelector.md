# querySelector di DOM JavaScript

---

## Daftar Isi
1. [Pengenalan querySelector](#pengenalan-queryselector)
2. [Syntax & Basic Selectors](#syntax--basic-selectors)
3. [Advanced Selectors](#advanced-selectors)
4. [querySelector vs querySelectorAll](#queryselector-vs-queryselectorall)
5. [Performance & Best Practice](#performance--best-practice)
6. [Real-world Examples](#real-world-examples)
7. [Common Mistakes](#common-mistakes)

---

## Pengenalan querySelector

### Apa itu querySelector?

`querySelector` adalah method modern di DOM API yang memungkinkan kita untuk **memilih elemen HTML menggunakan CSS selectors**. Method ini mengembalikan **elemen pertama** yang sesuai dengan selector.

```javascript
// Syntax dasar
const element = document.querySelector('selector');
```

### History & Evolusi

```javascript
// Cara lama (Pre-2009)
const el = document.getElementById('id');
const els = document.getElementsByClassName('class');
const els = document.getElementsByTagName('div');

// Cara modern (Post-2010)
const el = document.querySelector('#id');
const els = document.querySelectorAll('.class');
const els = document.querySelectorAll('div');
```

### Browser Support

| Browser | querySelector | querySelectorAll |
|---------|---|---|
| Chrome | ✅ 4+ | ✅ 4+ |
| Firefox | ✅ 3.5+ | ✅ 3.5+ |
| Safari | ✅ 3.1+ | ✅ 3.1+ |
| IE | ✅ 8+ | ✅ 8+ |
| Edge | ✅ All | ✅ All |

**Kesimpulan**: Aman digunakan di semua modern browsers.

---

## Syntax & Basic Selectors

### 1. Element Selector

**Deskripsi**: Memilih elemen berdasarkan nama tag HTML.

```javascript
// HTML
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<div>Div content</div>

// JavaScript
const para = document.querySelector('p');
console.log(para); // <p>Paragraph 1</p> (hanya yang pertama)

const allParas = document.querySelectorAll('p');
console.log(allParas.length); // 2

// Iterasi NodeList
allParas.forEach(p => {
  console.log(p.textContent);
});
```

**Detail Penting**:
- `querySelector('p')` → returns first `<p>` atau `null`
- `querySelectorAll('p')` → returns NodeList semua `<p>`
- NodeList bukan Array, tapi bisa di-iterate dengan forEach
- NodeList live vs static (querySelectorAll adalah static)

---

### 2. ID Selector

**Deskripsi**: Memilih elemen berdasarkan attribute `id`.

```javascript
// HTML
<div id="main-content">Content</div>
<div id="sidebar">Sidebar</div>

// JavaScript - Dengan querySelector
const main = document.querySelector('#main-content');

// Old way (masih valid tapi tidak fleksibel)
const mainOld = document.getElementById('main-content');

// Perbedaan
console.log(main === mainOld); // true, same element

// querySelector lebih fleksibel untuk kombinasi
const idOrClass = document.querySelector('#main-content, .container');
```

**Detail Penting**:
- ID harus unique dalam satu halaman
- `#` prefix untuk ID selector
- querySelector bisa gabung ID dengan selector lain
- getElementById lebih cepat tapi less flexible

---

### 3. Class Selector

**Deskripsi**: Memilih elemen berdasarkan attribute `class`.

```javascript
// HTML
<div class="card">Card 1</div>
<div class="card featured">Card 2</div>
<span class="card">Span card</span>

// JavaScript
// Single class - ambil yang pertama
const card = document.querySelector('.card');
console.log(card); // <div class="card">Card 1</div>

// Ambil semua dengan class 'card'
const allCards = document.querySelectorAll('.card');
console.log(allCards.length); // 3

// Multiple classes - element harus punya SEMUA classes
const featured = document.querySelector('.card.featured');
console.log(featured); // <div class="card featured">Card 2</div>

// Class yang tidak exists
const notFound = document.querySelector('.non-existent');
console.log(notFound); // null
```

**Detail Penting**:
- `.` prefix untuk class selector
- `.class1.class2` = element punya BOTH classes
- `.class1 .class2` = class2 adalah child dari class1 (descendant)
- Satu element bisa punya multiple classes

---

### 4. Attribute Selector

**Deskripsi**: Memilih elemen berdasarkan attributes.

```javascript
// HTML
<input type="text" name="username" required>
<input type="email" name="email" data-validate="true">
<button data-action="save">Save</button>
<a href="https://example.com" target="_blank">Link</a>

// Syntax Basic
// [attribute] = punya attribute
const required = document.querySelector('input[required]');

// [attribute="value"] = attribute dengan value spesifik
const email = document.querySelector('input[type="email"]');

// [attribute^="value"] = attribute dimulai dengan value
const link = document.querySelector('a[href^="https"]');

// [attribute$="value"] = attribute diakhiri dengan value
const action = document.querySelector('[data-action="save"]');

// [attribute*="value"] = attribute mengandung value
const dataEl = document.querySelector('[data-validate]');

// [attribute|="value"] = exact match atau prefix dengan dash
const lang = document.querySelector('[lang|="en"]');

// [attribute~="value"] = whitespace-separated value
const rel = document.querySelector('[rel~="nofollow"]');

// Multiple attributes
const input = document.querySelector('input[type="text"][name="username"]');
```

**Detail Penting**:
```javascript
// Berbagai operator attribute selector:
[attr]           // Element punya attribute
[attr="value"]   // Exact match
[attr^="value"]  // Starts with
[attr$="value"]  // Ends with
[attr*="value"]  // Contains
[attr|="value"]  // Exact atau prefix-dash
[attr~="value"]  // Space-separated word
[attr="val" i]   // Case-insensitive (i flag)
[attr="val" s]   // Case-sensitive (s flag)
```

**Contoh Praktis**:
```javascript
// Cari semua input yang disabled
const disabled = document.querySelectorAll('input[disabled]');

// Cari semua links eksternal
const external = document.querySelectorAll('a[href^="http"]');

// Cari semua data attributes
const withData = document.querySelectorAll('[data-*]');
// Note: [data-*] tidak valid syntax, harus spesifik:
const withDataId = document.querySelectorAll('[data-id]');

// Case insensitive
const email = document.querySelector('input[type="EMAIL" i]');

// Kombinasi multiple attributes
const specific = document.querySelector('input[type="text"][data-required="true"]');
```

---

### 5. Universal Selector

**Deskripsi**: Memilih SEMUA elemen.

```javascript
// HTML
<div>
  <p>Paragraph</p>
  <span>Span</span>
</div>

// Ambil SEMUA elemen
const all = document.querySelectorAll('*');
console.log(all.length); // includes html, head, body, etc

// Kombinasi dengan selector lain
const allInDiv = document.querySelectorAll('div *');
console.log(allInDiv); // semua children dari div

// Reset semua margins
document.querySelectorAll('*').forEach(el => {
  el.style.margin = '0';
});
```

**Detail Penting**:
- `*` adalah wildcard untuk semua elemen
- Boros resources jika digunakan sendirian
- Lebih baik kombinasi dengan selector spesifik

---

## Advanced Selectors

### 1. Pseudo-class Selectors

**Deskripsi**: Select elemen berdasarkan state atau posisi mereka.

```javascript
// HTML
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// :first-child - anak pertama dari parent
const first = document.querySelector('li:first-child');
console.log(first); // <li>Item 1</li>

// :last-child - anak terakhir
const last = document.querySelector('li:last-child');
console.log(last); // <li>Item 3</li>

// :nth-child(n) - anak ke-n (1-indexed)
const second = document.querySelector('li:nth-child(2)');
const third = document.querySelectorAll('li:nth-child(3n)'); // Setiap 3

// :nth-of-type(n) - nth of same type
const firstLi = document.querySelector('li:nth-of-type(1)');

// :only-child - satu-satunya anak
const only = document.querySelector('p:only-child');

// :empty - elemen tanpa children
const empty = document.querySelectorAll('div:empty');

// Pseudo-class dengan input
// :checked - checkbox/radio yang dipilih
const checked = document.querySelectorAll('input:checked');

// :disabled - disabled form elements
const disabled = document.querySelectorAll('input:disabled');

// :enabled - enabled form elements
const enabled = document.querySelectorAll('input:enabled');

// :focus - element dengan focus (hanya saat dipilih)
const focused = document.querySelector(':focus');

// :valid / :invalid - validasi form
const invalid = document.querySelectorAll('input:invalid');

// :not(selector) - elements yang NOT match selector
const notDisabled = document.querySelectorAll('input:not([disabled])');
const notClass = document.querySelectorAll('div:not(.hidden)');

// :is(selector-list) - match any selector dalam list
const heading = document.querySelector(':is(h1, h2, h3, h4, h5, h6)');

// :where(selector-list) - sama seperti :is tapi 0 specificity
const element = document.querySelector(':where(.card, .box)');

// :has(selector) - parent yang memiliki child matching selector
const hasChild = document.querySelector('div:has(> p)'); // div dengan direct p child

// :target - element yang sesuai dengan URL hash
const target = document.querySelector(':target');
```

**Pseudo-class Common Reference**:
```javascript
// Structural
:first-child, :last-child, :nth-child(n)
:first-of-type, :last-of-type, :nth-of-type(n)
:only-child, :only-of-type
:empty

// Form state
:checked, :disabled, :enabled, :focus
:required, :optional
:valid, :invalid
:in-range, :out-of-range

// Functional
:not(selector)
:is(selector-list)
:where(selector-list)
:has(selector)

// User interaction
:hover (dalam JS, tidak bisa diakses directly)
:active
:focus, :focus-visible
:focus-within
```

**Detail Penting**:
```javascript
// :nth-child formula
li:nth-child(2n)     // Even children
li:nth-child(2n+1)   // Odd children
li:nth-child(n+3)    // Dari 3 ke depan
li:nth-child(-n+3)   // 3 pertama

// Kombinasi pseudo-class
const activeChecked = document.querySelector('input[type="checkbox"]:checked:disabled');
```

---

### 2. Pseudo-element Selectors

**⚠️ Catatan**: Pseudo-elements (::before, ::after) **tidak bisa diakses langsung dengan querySelector** karena mereka bukan DOM nodes.

```javascript
// HTML dengan CSS
<style>
  p::before { content: ">> "; }
</style>
<p>Text</p>

// Tidak bisa direct access ::before
const before = document.querySelector('p::before'); // null

// Tapi bisa access element dan manipulate styling
const p = document.querySelector('p');
const beforeContent = window.getComputedStyle(p, '::before').content;
console.log(beforeContent); // "> "

// Manipulate pseudo-element via CSS
p.style.setProperty('--before-content', '"New content"');
```

---

### 3. Combinators

**Deskripsi**: Kombinasi untuk menunjukkan relationship antar elemen.

```javascript
// HTML
<div class="container">
  <h1>Title</h1>
  <p>Paragraph</p>
  <div class="content">
    <span>Nested span</span>
    <p>Nested paragraph</p>
  </div>
</div>

// 1. DESCENDANT COMBINATOR (space) - semua descendants
const allP = document.querySelectorAll('.container p');
// Matches: <p>Paragraph</p> dan <p>Nested paragraph</p>

// 2. CHILD COMBINATOR (>) - direct children only
const directP = document.querySelectorAll('.container > p');
// Matches: <p>Paragraph</p> saja (bukan nested)

// 3. ADJACENT SIBLING COMBINATOR (+) - sibling berikutnya
const afterH1 = document.querySelector('h1 + p');
// Matches: <p>Paragraph</p> (langsung setelah h1)

// 4. GENERAL SIBLING COMBINATOR (~) - semua siblings berikutnya
const siblings = document.querySelectorAll('h1 ~ p');
// Matches: <p>Paragraph</p> dan <p>Nested paragraph</p>

// Kombinasi kompleks
// "Direct p children dari .content yang merupakan descendants dari .container"
const complex = document.querySelectorAll('.container .content > p');

// Real-world: "Semua paragraf yang langsung setelah h1 dan h2"
const afterHeading = document.querySelectorAll('h1 + p, h2 + p');

// "Paragraf yang merupakan sibling dari h1 dan bukan direct child"
const siblingP = document.querySelectorAll('h1 ~ p:not(.container > p)');
```

**Visual Representation**:
```
HTML Structure:
<div class="container">           <!-- .container -->
  <h1>Title</h1>                  <!-- h1 -->
  <p>Paragraph</p>                <!-- 1. h1 + p (adjacent)
                                        2. h1 ~ p (sibling) -->
  <div class="content">            <!-- .container > div -->
    <span>Nested</span>
    <p>Nested paragraph</p>        <!-- .container > p? NO
                                        .container p? YES -->
  </div>
</div>
```

**Detail Combinators**:
```javascript
// A B (Descendant) - B adalah descendants dari A
document.querySelectorAll('.parent p');

// A > B (Child) - B adalah direct children dari A
document.querySelectorAll('.parent > p');

// A + B (Adjacent Sibling) - B adalah sibling langsung setelah A
document.querySelectorAll('h1 + p');

// A ~ B (General Sibling) - B adalah sibling setelah A (bisa ada yang lain)
document.querySelectorAll('h1 ~ .note');
```

---

### 4. Selector List (Comma)

**Deskripsi**: Multiple selectors dengan comma untuk OR logic.

```javascript
// HTML
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p class="lead">Lead paragraph</p>
<p>Normal paragraph</p>

// Select multiple selectors
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

const paragraphs = document.querySelectorAll('p, .lead, [data-paragraph]');

// Kombinasi dengan combinator
const content = document.querySelectorAll(
  '.container > h1,
   .container > p,
   .container .note'
);

// Complex example
const interactive = document.querySelectorAll(
  'button,
   input[type="submit"],
   a[role="button"],
   [data-action]'
);
```

**Detail Penting**:
- Comma adalah logical OR
- Setiap selector diproses terpisah
- Hasil adalah union dari semua matches

---

## querySelector vs querySelectorAll

### Perbedaan Fundamental

```javascript
// HTML
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>

// querySelector - ambil yang PERTAMA
const first = document.querySelector('.card');
console.log(first);           // <div class="card">Card 1</div>
console.log(first instanceof Element); // true

// querySelectorAll - ambil SEMUA
const all = document.querySelectorAll('.card');
console.log(all);             // NodeList(3) [div.card, div.card, div.card]
console.log(all instanceof NodeList); // true
console.log(all.length);      // 3

// Tidak ada element
const none = document.querySelector('.nonexistent');
console.log(none);            // null

const emptyList = document.querySelectorAll('.nonexistent');
console.log(emptyList.length); // 0
console.log(emptyList instanceof NodeList); // true
```

### Return Type Comparison

```javascript
// querySelector returns Element or null
const element = document.querySelector('p');
if (element) {
  element.textContent = 'Changed';
}

// querySelectorAll returns NodeList (always)
const list = document.querySelectorAll('p');
console.log(list.length); // Bisa 0, safe untuk iterate

// Berbeda dari getElementsBy* yang returns HTMLCollection
const htmlCollection = document.getElementsByClassName('card');
const nodeList = document.querySelectorAll('.card');

// Key difference
console.log(htmlCollection instanceof HTMLCollection); // true
console.log(nodeList instanceof NodeList);             // true

// HTMLCollection live, NodeList static
// Add new element dengan class 'card'
const newCard = document.createElement('div');
newCard.className = 'card';
document.body.appendChild(newCard);

console.log(htmlCollection.length);  // Updated! (4)
console.log(nodeList.length);        // Still 3 (static)
```

### Performance Comparison

```javascript
// querySelector LEBIH CEPAT untuk ambil satu element
console.time('querySelector');
const single = document.querySelector('.card');
console.timeEnd('querySelector'); // ~0.1ms

// getElementById PALING CEPAT tapi limited
console.time('getElementById');
const byId = document.getElementById('main');
console.timeEnd('getElementById'); // ~0.05ms

// querySelectorAll LEBIH LAMBAT (tapi fleksibel)
console.time('querySelectorAll');
const multiple = document.querySelectorAll('.card');
console.timeEnd('querySelectorAll'); // ~0.5ms untuk 1000 elements

// Optimization: Scope selector
const container = document.querySelector('.container');
const cards = container.querySelectorAll('.card'); // LEBIH CEPAT
// vs
const cards2 = document.querySelectorAll('.container .card'); // LEBIH LAMBAT
```

### Usage Patterns

```javascript
// Pattern 1: Single element yang pasti ada
const header = document.querySelector('header');
header.style.display = 'none';

// Pattern 2: Single element dengan null check
const modal = document.querySelector('#modal');
if (modal) {
  modal.classList.add('open');
}

// Pattern 3: Multiple elements, iterate
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

// Pattern 4: Multiple dengan filter
const checked = document.querySelectorAll('input[type="checkbox"]:checked');
console.log(checked.length);

// Pattern 5: Scoped selection
const card = document.querySelector('.card');
const button = card.querySelector('button'); // Dalam card
const allButtons = card.querySelectorAll('button'); // Semua dalam card

// Pattern 6: Check jika element exists
if (document.querySelector('.notification')) {
  // Ada notification
} else {
  // Tidak ada
}
```

### Tabel Perbandingan

| Aspek | querySelector | querySelectorAll |
|-------|---|---|
| Return | Element / null | NodeList |
| Count | Pertama saja | Semua |
| Iterate | Direct access | Loop/forEach |
| Kecepatan | Lebih cepat | Lebih lambat |
| Live/Static | N/A | Static |
| Null check | Perlu | Tidak perlu |
| CSS Support | Full | Full |

---

## Performance & Best Practice

### 1. Selector Performance

**Dari tercepat ke terlambat**:

```javascript
// 1. FASTEST - ID selector (O(1) lookup)
const el = document.querySelector('#unique-id');

// 2. FAST - Class selector
const el = document.querySelector('.common-class');

// 3. MEDIUM - Tag name
const el = document.querySelector('div');

// 4. SLOWER - Attribute selector
const el = document.querySelector('[data-type="product"]');

// 5. SLOWER - Pseudo-selectors
const el = document.querySelector('li:nth-child(2n+1)');

// 6. SLOWEST - Complex descendant chains
const el = document.querySelector('.container .wrapper .card p span');

// AVOID - Universal selector
const all = document.querySelectorAll('*'); // Very slow!
```

**Optimized Examples**:

```javascript
// ❌ SLOW - Right-to-left evaluation
const cards = document.querySelectorAll('.container .card .title span');

// ✅ FAST - Start with most specific
const cardTitles = document.querySelectorAll('.card-title');

// ❌ SLOW - Too general
const elements = document.querySelectorAll('p');

// ✅ FAST - Scope within known container
const container = document.querySelector('.content');
const paragraphs = container.querySelectorAll('p');

// ❌ SLOW - Redundant specificity
const el = document.querySelector('body > div > .container > .card');

// ✅ FAST - Direct class
const el = document.querySelector('.card');
```

### 2. Efficient Querying Strategies

```javascript
// Strategy 1: Cache selectors
// ❌ BAD - Multiple queries
document.querySelector('.button').addEventListener('click', fn1);
document.querySelector('.button').addEventListener('click', fn2);
document.querySelector('.button').style.color = 'red';

// ✅ GOOD - Cache reference
const button = document.querySelector('.button');
button.addEventListener('click', fn1);
button.addEventListener('click', fn2);
button.style.color = 'red';

// Strategy 2: Batch updates
// ❌ BAD - Triggers reflow multiple times
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.style.display = 'none'; // Reflow each time
});

// ✅ GOOD - Use class
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.classList.add('hidden'); // Single reflow at end
});

// Strategy 3: Delegate events
// ❌ BAD - Multiple listeners
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', handleClick);
});

// ✅ GOOD - Single delegated listener
document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    handleClick(e);
  }
});

// Strategy 4: Use efficient selectors
// ❌ BAD - Complex chain
const el = document.querySelector('div.container div.content p span');

// ✅ GOOD - Direct selector
const el = document.querySelector('.content span');

// Strategy 5: Scope queries
// ❌ BAD - Global search
const inputs = document.querySelectorAll('input[type="text"]');

// ✅ GOOD - Scoped search
const form = document.querySelector('#myForm');
const inputs = form.querySelectorAll('input[type="text"]');
```

### 3. Avoiding Common Pitfalls

```javascript
// Pitfall 1: Assuming querySelector always returns something
// ❌ BAD
document.querySelector('.missing').style.display = 'none'; // Error!

// ✅ GOOD
const el = document.querySelector('.missing');
if (el) {
  el.style.display = 'none';
}

// Pitfall 2: Modifying live while iterating
// ❌ BAD
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.remove(); // Modifying while iterating
});

// ✅ GOOD - Convert to array first
const items = Array.from(document.querySelectorAll('.item'));
items.forEach(item => {
  item.remove();
});

// Pitfall 3: Not caching NodeList
// ❌ BAD
if (document.querySelectorAll('.error').length > 0) { }
document.querySelectorAll('.error').forEach(...); // Query twice!

// ✅ GOOD
const errors = document.querySelectorAll('.error');
if (errors.length > 0) { }
errors.forEach(...);

// Pitfall 4: Breaking from forEach
// ❌ BAD - Cannot break forEach
document.querySelectorAll('li').forEach(li => {
  if (li.id === 'target') {
    break; // Syntax error!
  }
});

// ✅ GOOD - Use find instead
const target = Array.from(document.querySelectorAll('li')).find(li => 
  li.id === 'target'
);

// Pitfall 5: Forgetting selector prefix
// ❌ BAD
const el = document.querySelector('card'); // Select <card> tag, not class!

// ✅ GOOD
const el = document.querySelector('.card');
```

### 4. Advanced Performance Patterns

```javascript
// Pattern 1: Debounced querySelector
function debouncedQuery(selector, delay = 300) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return document.querySelector(selector);
    }, delay);
  };
}

// Pattern 2: Memoization
const queryMemo = (() => {
  const cache = {};
  return (selector) => {
    if (!cache[selector]) {
      cache[selector] = document.querySelector(selector);
    }
    return cache[selector];
  };
})();

const el1 = queryMemo('.card'); // Query & cache
const el2 = queryMemo('.card'); // Return cached

// Pattern 3: Batch select with multiple conditions
const selectMultiple = (selectors) => {
  return selectors
    .map(selector => document.querySelector(selector))
    .filter(el => el !== null);
};

const elements = selectMultiple(['#header', '.sidebar', '.nonexistent']);

// Pattern 4: Dynamic selector builder
function selectBy(type, value) {
  const selectors = {
    id: () => `#${value}`,
    class: () => `.${value}`,
    attribute: (attr) => `[${attr}="${value}"]`,
    tag: () => value
  };
  
  return document.querySelector(selectors[type]());
}

const header = selectBy('id', 'main');
const card = selectBy('class', 'card');
```

---

## Real-world Examples

### Example 1: Form Validation

```javascript
// HTML
<form id="userForm">
  <input type="text" name="username" required data-validate="username">
  <input type="email" name="email" required>
  <input type="password" name="password" required data-validate="password">
  <button type="submit">Register</button>
</form>

// JavaScript
const form = document.querySelector('#userForm');
const inputs = form.querySelectorAll('input[required]');
const validateInputs = form.querySelectorAll('[data-validate]');

// Validate all
function validateForm() {
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  validateInputs.forEach(input => {
    const rule = input.dataset.validate;
    if (!validateRule(input.value, rule)) {
      input.classList.add('error');
      isValid = false;
    }
  });
  
  return isValid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

// Real-time validation
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value.trim()) {
      input.classList.remove('error');
    }
  });
});
```

### Example 2: Dynamic Table Filter & Sort

```javascript
// HTML
<div class="controls">
  <input type="text" id="searchInput" placeholder="Search...">
  <select id="sortBy">
    <option value="name">Sort by Name</option>
    <option value="price">Sort by Price</option>
  </select>
</div>

<table>
  <thead>
    <tr>
      <th class="sortable" data-field="name">Name</th>
      <th class="sortable" data-field="price">Price</th>
    </tr>
  </thead>
  <tbody id="tableBody"></tbody>
</table>

// JavaScript
const table = document.querySelector('table');
const tbody = document.querySelector('#tableBody');
const searchInput = document.querySelector('#searchInput');
const sortBy = document.querySelector('#sortBy');
const sortHeaders = document.querySelectorAll('.sortable');

let data = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.5 },
  { name: 'Cherry', price: 2.0 }
];

// Render table
function render(items) {
  tbody.innerHTML = items.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>$${item.price}</td>
    </tr>
  `).join('');
}

// Search handler
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  render(filtered);
});

// Sort handler
sortBy.addEventListener('change', (e) => {
  const field = e.target.value;
  const sorted = [...data].sort((a, b) =>
    typeof a[field] === 'string'
      ? a[field].localeCompare(b[field])
      : a[field] - b[field]
  );
  render(sorted);
});

// Click header untuk sort
sortHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const field = header.dataset.field;
    const sorted = [...data].sort((a, b) =>
      a[field] > b[field] ? 1 : -1
    );
    render(sorted);
  });
});

// Initial render
render(data);
```

### Example 3: Interactive UI Components

```javascript
// HTML
<div class="accordion" id="myAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button">Section 1</button>
    </h2>
    <div class="accordion-content">Content 1</div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button">Section 2</button>
    </h2>
    <div class="accordion-content">Content 2</div>
  </div>
</div>

// JavaScript
const accordion = document.querySelector('#myAccordion');
const buttons = accordion.querySelectorAll('.accordion-button');
const contents = accordion.querySelectorAll('.accordion-content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Close all
    contents.forEach(content => {
      content.classList.remove('active');
    });
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Open clicked
    contents[index].classList.add('active');
    button.classList.add('active');
  });
});

// Keyboard support
accordion.addEventListener('keydown', (e) => {
  const activeButton = document.querySelector('.accordion-button.active');
  const buttonArray = Array.from(buttons);
  const currentIndex = buttonArray.indexOf(e.target);
  
  if (e.key === 'ArrowDown') {
    const nextIndex = (currentIndex + 1) % buttons.length;
    buttons[nextIndex].click();
    buttons[nextIndex].focus();
  } else if (e.key === 'ArrowUp') {
    const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    buttons[prevIndex].click();
    buttons[prevIndex].focus();
  }
});
```

### Example 4: Dynamic List Management

```javascript
// HTML
<div id="todoApp">
  <input type="text" id="todoInput" placeholder="Add task...">
  <button id="addBtn">Add</button>
  <ul id="todoList"></ul>
</div>

// JavaScript
const app = document.querySelector('#todoApp');
const input = app.querySelector('#todoInput');
const addBtn = app.querySelector('#addBtn');
const list = app.querySelector('#todoList');

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const value = input.value.trim();
  if (!value) return;
  
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${value}</span>
    <button class="delete-btn">×</button>
  `;
  
  // Add delete handler
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
  
  list.appendChild(li);
  input.value = '';
  input.focus();
}

// Event delegation untuk semua delete buttons
list.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    e.target.parentElement.remove();
  }
});

// Double-click untuk edit
list.addEventListener('dblclick', (e) => {
  if (e.target.matches('span')) {
    const span = e.target;
    const input = document.createElement('input');
    input.value = span.textContent;
    
    span.replaceWith(input);
    input.focus();
    
    input.addEventListener('blur', () => {
      span.textContent = input.value || 'Untitled';
      input.replaceWith(span);
    });
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    });
  }
});
```

### Example 5: Responsive Navigation

```javascript
// HTML
<nav class="navbar">
  <button class="menu-toggle">☰</button>
  <ul class="nav-menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

// JavaScript
const navbar = document.querySelector('.navbar');
const menuToggle = navbar.querySelector('.menu-toggle');
const navMenu = navbar.querySelector('.nav-menu');
const navLinks = navMenu.querySelectorAll('a');

// Toggle menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu saat link diklik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Close menu saat ESC ditekan
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Close menu saat click outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Responsive adjustment
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
```

---

## Common Mistakes

### Mistake 1: Not Checking for null

```javascript
// ❌ WRONG
document.querySelector('#modal').style.display = 'none'; // Error if not found!

// ✅ CORRECT
const modal = document.querySelector('#modal');
if (modal) {
  modal.style.display = 'none';
}

// ✅ ALTERNATIVE - Nullish coalescing
const modal = document.querySelector('#modal');
modal?.classList.remove('hidden');
```

### Mistake 2: Confusing Similar Methods

```javascript
// ❌ WRONG - querySelector returns single, tidak array
const items = document.querySelector('.item'); // Single element!
items.forEach(item => { }); // Error!

// ✅ CORRECT
const items = document.querySelectorAll('.item'); // NodeList
items.forEach(item => { });

// ❌ WRONG - getElementById tidak bisa kombinasi
const el = document.querySelector('#main .card'); // Works
const el = document.getElementById('main .card'); // Doesn't work

// ✅ CORRECT use of each
const el = document.querySelector('#main .card'); // querySelector
const el = document.getElementById('main'); // getElementById
```

### Mistake 3: Modifying DOM During Iteration

```javascript
// ❌ WRONG
document.querySelectorAll('.old').forEach(el => {
  el.className = 'new'; // If iterating live collection, can skip elements
});

// ✅ CORRECT - Convert to array
Array.from(document.querySelectorAll('.old')).forEach(el => {
  el.className = 'new';
});

// ❌ WRONG - Remove during forEach
document.querySelectorAll('.item').forEach(item => {
  if (item.matches('.delete')) {
    item.remove(); // Can cause issues
  }
});

// ✅ CORRECT - Collect then remove
const toDelete = document.querySelectorAll('.item.delete');
toDelete.forEach(item => item.remove());
```

### Mistake 4: Wrong Selector Syntax

```javascript
// ❌ WRONG SYNTAX
document.querySelector('card'); // Selects <card> tag!
document.querySelector('my-class'); // Selects <my-class> tag!
document.querySelector('.my class'); // Invalid - space in class
document.querySelector('#my id'); // Invalid - space in id

// ✅ CORRECT SYNTAX
document.querySelector('.card'); // Class selector
document.querySelector('#myId'); // ID selector
document.querySelector('[data-type="card"]'); // Attribute selector
document.querySelector('.my-class'); // Hyphenated class
```

### Mistake 5: Not Scoping Queries

```javascript
// ❌ SLOW - Global search
const inputs = document.querySelectorAll('input[type="text"]');

// ✅ FAST - Scoped search
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[type="text"]');

// ❌ WRONG - Looking in wrong scope
const cards = document.querySelectorAll('.card');
const button = document.querySelector('button'); // Global, not in cards!

// ✅ CORRECT - Scope within card
const cards = document.querySelectorAll('.card');
const buttons = cards[0].querySelector('button'); // Within first card
```

### Mistake 6: Assuming Static NodeList

```javascript
// ❌ WRONG - NodeList doesn't update when DOM changes
const items = document.querySelectorAll('.item');
console.log(items.length); // 3

// Add new item
const newItem = document.createElement('div');
newItem.className = 'item';
document.body.appendChild(newItem);

console.log(items.length); // Still 3! (static)

// ✅ CORRECT - Re-query if DOM changes
let items = document.querySelectorAll('.item');
console.log(items.length); // 3

const newItem = document.createElement('div');
newItem.className = 'item';
document.body.appendChild(newItem);

items = document.querySelectorAll('.item'); // Re-query
console.log(items.length); // 4
```

---

## Advanced Topics

### 1. querySelector di Event Target

```javascript
// HTML
<ul id="list">
  <li>
    <button>Click</button>
    <span>Item 1</span>
  </li>
  <li>
    <button>Click</button>
    <span>Item 2</span>
  </li>
</ul>

// JavaScript - Event delegation dengan querySelector
document.querySelector('#list').addEventListener('click', (e) => {
  // Cari parent li dari target
  const li = e.target.closest('li');
  
  if (li) {
    // Query dalam li
    const span = li.querySelector('span');
    console.log(span.textContent);
  }
});

// Element.closest() - traverse up the DOM
document.addEventListener('click', (e) => {
  if (e.target.closest('button[data-action]')) {
    const button = e.target.closest('button');
    console.log(button.dataset.action);
  }
});

// Element.matches() - check if element matches selector
document.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    e.target.closest('li').remove();
  }
});
```

### 2. querySelector dengan Conditional Logic

```javascript
// HTML
<div class="card" data-type="featured">Featured</div>
<div class="card" data-type="regular">Regular</div>

// Complex selector dengan conditions
const featured = document.querySelector('.card[data-type="featured"]');

// Using :is() for multiple conditions
const heading = document.querySelector(':is(h1, h2, h3)');

// Using :not() untuk exclude
const visibleCards = document.querySelectorAll('.card:not([hidden])');

// Combining selectors
const activeButtons = document.querySelectorAll(
  'button:not(:disabled):not(.hidden)'
);
```

### 3. Performance Testing

```javascript
// Measure query performance
function measureQuery(selector, iterations = 1000) {
  console.time(selector);
  for (let i = 0; i < iterations; i++) {
    document.querySelector(selector);
  }
  console.timeEnd(selector);
}

measureQuery('#unique');           // ~0.1ms
measureQuery('.common');           // ~0.5ms
measureQuery('div');               // ~1ms
measureQuery('.container p span'); // ~5ms

// Compare approaches
const results = {};

console.time('Global query');
for (let i = 0; i < 100; i++) {
  document.querySelectorAll('.item');
}
console.timeEnd('Global query'); // ~50ms

console.time('Scoped query');
const container = document.querySelector('.container');
for (let i = 0; i < 100; i++) {
  container.querySelectorAll('.item');
}
console.timeEnd('Scoped query'); // ~5ms (10x faster!)
```

### 4. Custom Helper Functions

```javascript
// Helper: Safe querySelector dengan fallback
function safeQuery(selector, fallback = null) {
  try {
    return document.querySelector(selector) || fallback;
  } catch (e) {
    console.error(`Invalid selector: ${selector}`, e);
    return fallback;
  }
}

const header = safeQuery('header', document.body);

// Helper: Collect query results
function queryAll(selector, processor) {
  const results = document.querySelectorAll(selector);
  return processor ? Array.from(results).map(processor) : results;
}

const texts = queryAll('.item', el => el.textContent);

// Helper: Conditional query
function queryIf(condition, trueSelector, falseSelector) {
  const selector = condition ? trueSelector : falseSelector;
  return document.querySelector(selector);
}

const element = queryIf(
  window.innerWidth > 768,
  '.desktop-menu',
  '.mobile-menu'
);

// Helper: Query with timeout
async function queryAsync(selector, timeout = 5000) {
  const startTime = Date.now();
  
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(checkInterval);
        resolve(el);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(checkInterval);
        resolve(null);
      }
    }, 100);
  });
}

const lazyElement = await queryAsync('.dynamic-element');
```

---

## Kesimpulan

### Kapan Menggunakan Apa

```javascript
// getElementById - Ketika hanya perlu query by ID
document.getElementById('main'); // Fastest

// querySelector - Ketika perlu CSS selector flexibility untuk single element
document.querySelector('#main');
document.querySelector('.card');
document.querySelector('[data-id="123"]');

// querySelectorAll - Ketika perlu multiple elements
document.querySelectorAll('.item');
document.querySelectorAll('input:checked');

// Scope queries - Ketika perlu query dalam specific context
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

// Event delegation - Ketika many similar elements dengan event
element.addEventListener('click', (e) => {
  if (e.target.matches('.button')) { }
});

// closest() - Ketika perlu traverse up DOM tree
const item = e.target.closest('li');

// matches() - Ketika perlu check if element matches selector
if (e.target.matches('.delete-btn')) { }
```

### Best Practices Summary

1. **Always check for null** dari querySelector
2. **Cache selectors** jika digunakan multiple times
3. **Use specific selectors** daripada complex chains
4. **Scope queries** dalam known containers
5. **Use event delegation** untuk multiple elements
6. **Prefer class names** daripada element tags
7. **Convert NodeList to Array** jika perlu array methods
8. **Measure performance** untuk kritical queries
9. **Use modern CSS selectors** (`:is()`, `:where()`, `:has()`)
10. **Combine dengan Events** untuk interactive UIs

---
