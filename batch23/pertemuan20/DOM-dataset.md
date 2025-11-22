# 📚 DOM Dataset Manipulation - Knowledge Base

## 📋 Daftar Isi
- [Konsep Dasar Dataset](#-konsep-dasar-dataset)
- [Implementasi Dataset](#-implementasi-dataset)
- [Kebutuhan dan Manfaat Dataset](#-kebutuhan-dan-manfaat-dataset)
- [Perbandingan: Dengan vs Tanpa Dataset](#-perbandingan-dengan-vs-tanpa-dataset)
- [Best Practices](#-best-practices)
- [Studi Kasus Nyata](#-studi-kasus-nyata)

## 🎯 Konsep Dasar Dataset

### Apa itu Dataset?
Dataset adalah mekanisme dalam HTML5 untuk menyimpan data kustom pada elemen HTML menggunakan atribut `data-*`.

```html
<!-- Contoh atribut dataset -->
<div data-product-id="P001" 
     data-price="1500000" 
     data-stock="5"
     data-category="elektronik">
    Laptop Gaming
</div>
```

### Karakteristik Dataset
- **Prefix**: Selalu diawali dengan `data-`
- **Naming**: Menggunakan camelCase dalam JavaScript
- **Nilai**: Selalu string (konversi manual untuk tipe lain)
- **Akses**: Via JavaScript `element.dataset.property`

## 💻 Implementasi Dataset

### 1. Deklarasi di HTML
```html
<!-- Basic dataset -->
<div id="product" 
     data-id="123" 
     data-name="Laptop" 
     data-price="1500000"
     data-in-stock="true"
     data-category="electronics">
</div>

<!-- Complex data -->
<div data-user='{"id":1,"name":"John","age":25}' 
     data-tags="laptop,gaming,electronics">
</div>
```

### 2. Akses Dataset di JavaScript
```javascript
// Mengakses dataset
const product = document.getElementById('product');

// Akses individual property
console.log(product.dataset.id);        // "123"
console.log(product.dataset.name);      // "Laptop"
console.log(product.dataset.price);     // "1500000"

// Akses semua dataset
console.log(product.dataset);
// {id: "123", name: "Laptop", price: "1500000", inStock: "true", category: "electronics"}

// Konversi tipe data
const price = parseInt(product.dataset.price);
const inStock = product.dataset.inStock === "true";
```

### 3. Manipulasi Dataset
```javascript
const element = document.getElementById('product');

// Update nilai
element.dataset.price = "1600000";
element.dataset.stock = "10";

// Tambah dataset baru
element.dataset.discount = "15";

// Hapus dataset
delete element.dataset.category;

// Check existence
if ('discount' in element.dataset) {
    console.log('Discount available');
}
```

## 🚀 Kebutuhan dan Manfaat Dataset

### Mengapa Dataset Diperlukan?

#### 1. **Pemisahan Concern yang Jelas**
```html
<!-- TANPA Dataset - Data tercampur -->
<div class="product">
    <span class="price">1500000</span>
    <span class="stock">5</span>
</div>

<!-- DENGAN Dataset - Terpisah jelas -->
<div class="product" data-price="1500000" data-stock="5">
    <span class="price">Rp 1.500.000</span>
    <span class="stock">5 unit tersedia</span>
</div>
```

#### 2. **Structured Data untuk JavaScript**
```javascript
// TANPA dataset - parsing manual rentan error
function getPriceWithoutDataset() {
    const priceText = document.querySelector('.price').textContent;
    return parseInt(priceText.replace(/[^\d]/g, '')); // Ribet!
}

// DENGAN dataset - akses langsung
function getPriceWithDataset() {
    return parseInt(product.dataset.price); // Mudah!
}
```

#### 3. **Single Source of Truth**
```javascript
// Data konsisten antara backend (dataset) dan frontend (tampilan)
function updateProductPrice(newPrice) {
    // Update dataset (source of truth)
    product.dataset.price = newPrice.toString();
    
    // Update tampilan
    product.querySelector('.price').textContent = formatCurrency(newPrice);
}
```

### Manfaat Utama Dataset

| Benefit | Description | Example |
|---------|-------------|---------|
| **Performance** | Akses data cepat tanpa parsing | `element.dataset.id` vs `element.textContent` |
| **Maintainability** | Kode lebih bersih dan terorganisir | Data terpusat di satu tempat |
| **Reliability** | Data terstruktur dan konsisten | Tidak bergantung format tampilan |
| **Flexibility** | Mudah diupdate secara dinamis | `element.dataset.status = "sold"` |

## ⚖️ Perbandingan: Dengan vs Tanpa Dataset

### Scenario: E-commerce Product System

#### Dengan Dataset ✅
```html
<div class="product" 
     data-id="P001" 
     data-price="1500000" 
     data-stock="5"
     data-category="electronics">
    <h3>Laptop Gaming</h3>
    <p class="price">Rp 1.500.000</p>
    <p class="stock">5 unit tersedia</p>
</div>

<script>
function handlePurchase(productElement) {
    // Akses data langsung - MUDAH
    const price = parseInt(productElement.dataset.price);
    const stock = parseInt(productElement.dataset.stock);
    
    if (stock > 0) {
        const newStock = stock - 1;
        productElement.dataset.stock = newStock.toString();
        updateDisplay(productElement);
    }
}
</script>
```

#### Tanpa Dataset ❌
```html
<div class="product">
    <h3>Laptop Gaming</h3>
    <p class="price">Rp 1.500.000</p>
    <p class="stock">5 unit tersedia</p>
</div>

<script>
function handlePurchase(productElement) {
    // Parsing manual - RIBET dan RENTAN ERROR
    const priceText = productElement.querySelector('.price').textContent;
    const stockText = productElement.querySelector('.stock').textContent;
    
    const price = parseInt(priceText.replace(/[^\d]/g, ''));
    const stock = parseInt(stockText.match(/\d+/)[0]);
    
    if (stock > 0) {
        const newStock = stock - 1;
        // Hanya update tampilan, data asli hilang
        productElement.querySelector('.stock').textContent = 
            `${newStock} unit tersedia`;
    }
}
</script>
```

### Performance Comparison

| Operation | Dengan Dataset | Tanpa Dataset |
|-----------|----------------|---------------|
| Akses data | O(1) - Langsung | O(n) - Query + Parsing |
| Update data | Instant | Butuh parsing ulang |
| Memory usage | Efficient | Inefficient |
| Code complexity | Simple | Complex |

## 🏆 Best Practices

### 1. **Gunakan untuk Data, Bukan Style**
```html
<!-- ✅ BENAR -->
<div data-user-id="123" data-role="admin">John Doe</div>

<!-- ❌ SALAH -->
<div data-color="red" data-font-size="large">Text</div>
<!-- Gunakan CSS class instead -->
```

### 2. **Structured Data untuk Complex Objects**
```html
<!-- Untuk simple data -->
<div data-product-id="P001" data-price="1500000"></div>

<!-- Untuk complex data -->
<div data-user='{"id":1,"name":"John","preferences":{"theme":"dark"}}'></div>

<script>
// Parse complex data
const user = JSON.parse(element.dataset.user);
console.log(user.preferences.theme); // "dark"
</script>
```

### 3. **Consistent Naming Convention**
```html
<!-- ✅ Konsisten -->
<div data-product-id="P001" 
     data-product-name="Laptop"
     data-product-price="1500000">

<!-- ❌ Tidak konsisten -->
<div data-productId="P001" 
     data-product_name="Laptop"
     data-product-price="1500000">
```

### 4. **Type Conversion Handling**
```javascript
// Always convert types
const element = document.getElementById('product');

// String to Number
const price = Number(element.dataset.price);
const stock = parseInt(element.dataset.stock);

// String to Boolean
const isAvailable = element.dataset.available === "true";
const hasDiscount = Boolean(element.dataset.discount);

// String to Object
const config = JSON.parse(element.dataset.config || "{}");
```

## 🔧 Studi Kasus Nyata

### 1. **E-commerce Shopping Cart**
```html
<div class="product-card" 
     data-product-id="P001"
     data-name="Laptop Gaming"
     data-price="15000000"
     data-stock="15"
     data-category="electronics"
     data-weight="2.5"
     data-seller="TechStore"
     data-discount="10">
     
    <h3>💻 Laptop Gaming</h3>
    <p class="display-price">Rp 15.000.000</p>
    <p class="display-stock">15 unit tersedia</p>
    
    <button onclick="addToCart(this)">Add to Cart</button>
</div>

<script>
function addToCart(button) {
    const productCard = button.parentElement;
    const dataset = productCard.dataset;
    
    // Akses data terstruktur
    const cartItem = {
        id: dataset.productId,
        name: dataset.name,
        price: parseInt(dataset.price),
        discount: parseInt(dataset.discount),
        weight: parseFloat(dataset.weight),
        seller: dataset.seller
    };
    
    // Kalkulasi harga final
    const finalPrice = cartItem.price * (1 - cartItem.discount / 100);
    
    // Update UI
    updateCartUI(cartItem, finalPrice);
}
</script>
```

### 2. **Dynamic Form Validation**
```html
<form>
    <input type="email" 
           data-required="true" 
           data-min-length="5"
           data-max-length="50"
           data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
           placeholder="Email">
    
    <input type="number" 
           data-required="true"
           data-min="18" 
           data-max="100"
           placeholder="Age">
</form>

<script>
function validateField(input) {
    const rules = input.dataset;
    
    if (rules.required === "true" && !input.value) {
        return "Field is required";
    }
    
    if (rules.min && input.value < parseInt(rules.min)) {
        return `Minimum value is ${rules.min}`;
    }
    
    // ... validasi lainnya
}
</script>
```

### 3. **Interactive UI Components**
```html
<div class="tab-container">
    <div class="tab" data-tab-id="home" data-tab-active="true">Home</div>
    <div class="tab" data-tab-id="profile" data-tab-active="false">Profile</div>
    <div class="tab" data-tab-id="settings" data-tab-active="false">Settings</div>
</div>

<script>
function switchTab(clickedTab) {
    // Reset semua tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.dataset.tabActive = "false";
    });
    
    // Aktifkan tab yang diklik
    clickedTab.dataset.tabActive = "true";
    
    // Tampilkan content sesuai tab
    showTabContent(clickedTab.dataset.tabId);
}
</script>
```

## 📊 Kesimpulan

### Kapan Harus Menggunakan Dataset?
- ✅ **Data yang perlu diakses JavaScript**
- ✅ **Informasi konfigurasi komponen**
- ✅ **State management sederhana**
- ✅ **Passing data ke event handlers**

### Kapan Menghindari Dataset?
- ❌ **Data sensitive** (visible di HTML)
- ❌ **Large datasets** (gunakan storage lain)
- ❌ **Styling information** (gunakan CSS classes)
- ❌ **Frequently changing data** (gunakan state management)

### Ringkasan Keuntungan
1. **🎯 Clean Separation**: Data vs Presentation
2. **⚡ Performance**: Akses data langsung
3. **🔧 Maintainability**: Kode lebih terorganisir
4. **🛡️ Reliability**: Data terstruktur dan konsisten
5. **🚀 Productivity**: Development lebih cepat

---

**📌 Remember**: Dataset adalah jembatan sempurna antara HTML presentation dan JavaScript logic. Gunakan secara bijak untuk membangun aplikasi web yang robust dan maintainable!