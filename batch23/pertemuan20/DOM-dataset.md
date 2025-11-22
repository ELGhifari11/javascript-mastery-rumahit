# Manipulasi Dataset pada DOM

## Pengertian Dataset

Dataset adalah mekanisme dalam HTML5 yang memungkinkan kita menyimpan data kustom pada elemen HTML menggunakan atribut `data-*`. Data ini dapat diakses dan dimanipulasi melalui JavaScript dengan properti `dataset`.

## Sintaks Dasar

### 1. Atribut Data di HTML

```html
<!-- Format: data-nama-properti -->
<div id="produk" 
     data-product-id="101" 
     data-category="elektronik" 
     data-price="1500000" 
     data-stock="5">
    Laptop Gaming
</div>
```

### 2. Mengakses Dataset di JavaScript

```javascript
const produk = document.getElementById('produk');

// Mengakses nilai dataset
console.log(produk.dataset.productId);    // "101"
console.log(produk.dataset.category);     // "elektronik"
console.log(produk.dataset.price);        // "1500000"

// Mengakses semua dataset
console.log(produk.dataset);
// Output: DOMStringMap {productId: "101", category: "elektronik", price: "1500000", stock: "5"}
```

## Konversi Nama Atribut

Ada perbedaan penamaan antara HTML dan JavaScript:

| HTML Attribute | JavaScript Property |
|----------------|---------------------|
| `data-product-id` | `dataset.productId` |
| `data-category` | `dataset.category` |
| `data-user-name` | `dataset.userName` |

**Aturan konversi:**
- Hilangkan prefix `data-`
- Ubah format kebab-case menjadi camelCase

## Operasi Manipulasi Dataset

### 1. Membaca Data

```javascript
const element = document.querySelector('.produk');

// Membaca nilai spesifik
const id = element.dataset.productId;
const kategori = element.dataset.category;

// Mengecek keberadaan data
if (element.dataset.productId) {
    console.log('Data product-id ada');
}

// Iterasi melalui semua dataset
for (let key in element.dataset) {
    console.log(`${key}: ${element.dataset[key]}`);
}
```

### 2. Mengubah Data

```javascript
// Mengubah nilai existing
element.dataset.price = "1600000";
element.dataset.stock = "3";

// Data akan otomatis terupdate di HTML
```

### 3. Menambahkan Data Baru

```javascript
// Menambahkan dataset baru
element.dataset.discount = "10";
element.dataset.rating = "4.5";

// Hasil di HTML: data-discount="10" data-rating="4.5"
```

### 4. Menghapus Data

```javascript
// Menghapus dataset
delete element.dataset.discount;
delete element.dataset.rating;
```

## Contoh Praktis

### Contoh 1: Sistem Keranjang Belanja

```html
<div class="product" 
     data-id="P001" 
     data-name="Laptop" 
     data-price="8000000" 
     data-stock="10">
    <h3>Laptop Gaming</h3>
    <p>Rp 8.000.000</p>
    <button onclick="addToCart(this)">Tambah ke Keranjang</button>
</div>
```

```javascript
function addToCart(button) {
    const product = button.parentElement;
    const productData = product.dataset;
    
    const cartItem = {
        id: productData.id,
        name: productData.name,
        price: parseInt(productData.price),
        quantity: 1
    };
    
    // Kurangi stok
    let stock = parseInt(productData.stock);
    if (stock > 0) {
        product.dataset.stock = (stock - 1).toString();
        updateStockDisplay(product);
    }
    
    console.log('Ditambahkan ke keranjang:', cartItem);
}

function updateStockDisplay(product) {
    const stock = product.dataset.stock;
    product.querySelector('p:nth-child(2)').textContent = `Stok: ${stock}`;
}
```

### Contoh 2: Sistem Tab dengan Dataset

```html
<div class="tabs">
    <button class="tab-btn active" data-tab="tab1">Tab 1</button>
    <button class="tab-btn" data-tab="tab2">Tab 2</button>
    <button class="tab-btn" data-tab="tab3">Tab 3</button>
</div>

<div class="tab-content" data-tab="tab1" style="display: block;">
    Konten Tab 1
</div>
<div class="tab-content" data-tab="tab2" style="display: none;">
    Konten Tab 2
</div>
<div class="tab-content" data-tab="tab3" style="display: none;">
    Konten Tab 3
</div>
```

```javascript
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Sembunyikan semua konten tab
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Nonaktifkan semua tombol
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Tampilkan konten tab yang dipilih
        document.querySelector(`.tab-content[data-tab="${tabId}"]`).style.display = 'block';
        this.classList.add('active');
    });
});
```

## Tipe Data Dataset

Dataset selalu menyimpan nilai sebagai string. Untuk tipe data lain, perlu konversi:

```javascript
const element = document.getElementById('data-element');

// Konversi tipe data
const numberData = parseInt(element.dataset.numberValue);
const floatData = parseFloat(element.dataset.floatValue);
const booleanData = element.dataset.booleanValue === 'true';
const jsonData = JSON.parse(element.dataset.jsonValue);

// Menyimpan tipe data kompleks
element.dataset.complexData = JSON.stringify({ name: "John", age: 30 });
```

## Best Practices

### 1. Gunakan untuk Data Simple
```javascript
// ✅ Baik untuk data simple
element.dataset.userId = "123";
element.dataset.role = "admin";

// ❌ Hindari untuk data kompleks
element.dataset.userData = JSON.stringify(largeObject); // Tidak disarankan
```

### 2. Validasi Data
```javascript
function validateProductData(element) {
    const data = element.dataset;
    
    if (!data.productId || !data.price) {
        console.error('Data produk tidak lengkap');
        return false;
    }
    
    if (isNaN(parseInt(data.price))) {
        console.error('Harga harus angka');
        return false;
    }
    
    return true;
}
```

### 3. Performance Considerations
```javascript
// ❌ Tidak efisien - terlalu banyak akses dataset
for (let i = 0; i < 1000; i++) {
    element.dataset.counter = i;
}

// ✅ Lebih efisien
let counter = parseInt(element.dataset.counter);
for (let i = 0; i < 1000; i++) {
    counter++;
}
element.dataset.counter = counter;
```

## Keuntungan Menggunakan Dataset

1. **Semantik** - Memisahkan data dari presentasi
2. **Akses Mudah** - API yang sederhana dan intuitif
3. **Type Safety** - Nama properti otomatis divalidasi
4. **Browser Support** - Didukung semua browser modern
5. **No Pollution** - Tidak mencemari namespace atribut standar