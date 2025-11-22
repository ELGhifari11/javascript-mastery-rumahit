# 🛑 Event.preventDefault() - Fundamental Guide

## 📚 Table of Contents
- [Apa itu preventDefault()?](#-apa-itu-preventdefault)
- [Kapan Digunakan?](#-kapan-digunakan)
- [Cara Kerja](#-cara-kerja)
- [Implementasi Praktis](#-implementasi-praktis)
- [Best Practices](#-best-practices)
- [Common Mistakes](#-common-mistakes)

## 🎯 Apa itu preventDefault()?

### Definisi
`preventDefault()` adalah method pada JavaScript Event object yang **mencegah perilaku default (default behavior)** dari sebuah event agar tidak terjadi.

```javascript
event.preventDefault();
```

### Analogi Sederhana
Bayangkan Anda di restoran cepat saji:

- **Perilaku Default**: Pesan → Bayar → Dapat Makanan → Makan
- **`preventDefault()`**: Pesan → **Batalkan pembayaran** → Negosiasi ulang

## ⚡ Kapan Digunakan?

### Event Events yang Memiliki Default Behavior

| Event | Default Behavior | Dengan preventDefault() |
|-------|------------------|------------------------|
| `submit` form | Halaman refresh/redirect | Tetap di halaman sama |
| `click` pada `<a href="">` | Navigasi ke URL | Tidak navigasi |
| `contextmenu` (right-click) | Muncul context menu | Tidak muncul menu |
| `keydown` di form | Submit saat Enter | Tidak submit |
| `dragstart` | Mulai drag operation | Tidak mulai drag |

### Use Cases Utama

```javascript
// 1. Form handling tanpa page refresh
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // AJAX request here
});

// 2. Custom link behavior
link.addEventListener('click', (e) => {
    e.preventDefault();
    // Show modal instead of navigation
});

// 3. Preventing right-click menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // Show custom context menu
});
```

## 🔧 Cara Kerja

### Event Flow Browser
```
User Action → Browser Event → Default Behavior → Your Code
```

**Dengan preventDefault():**
```
User Action → Browser Event → Your Code (preventDefault()) → ❌ Default Behavior DIBATALKAN
```

### Contoh Visual Flow

```javascript
document.getElementById('myLink').addEventListener('click', function(event) {
    console.log('1. Event triggered');
    
    event.preventDefault();  // 🛑 STOP di sini!
    
    console.log('2. Custom logic executed');
    // Browser TIDAK akan navigasi ke href
});

// Output:
// 1. Event triggered
// 2. Custom logic executed
// ❌ NAVIGASI DICEGAH
```

## 💻 Implementasi Praktis

### 1. Basic Form Prevention
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic preventDefault</title>
</head>
<body>
    <form id="basicForm">
        <input type="text" placeholder="Enter something">
        <button type="submit">Submit</button>
    </form>

    <script>
        const form = document.getElementById('basicForm');
        
        form.addEventListener('submit', function(event) {
            // 🛑 Mencegah form submission default
            event.preventDefault();
            
            console.log('Form dicegah dari refresh!');
            alert('Form tidak refresh halaman!');
        });
    </script>
</body>
</html>
```

### 2. Link Navigation Control
```html
<a href="https://google.com" id="customLink">
    Click me! (Tidak akan ke Google)
</a>

<script>
    document.getElementById('customLink').addEventListener('click', function(e) {
        e.preventDefault(); // 🛑 Mencegah navigasi
        
        console.log('URL target:', this.href);
        alert(`Navigasi ke ${this.href} dicegah!`);
        
        // Bisa redirect manual jika needed
        // window.location.href = this.href;
    });
</script>
```

### 3. Right-Click Prevention
```html
<div id="protectedArea">
    Klik kanan di sini tidak akan muncul menu context
</div>

<script>
    document.getElementById('protectedArea').addEventListener('contextmenu', function(e) {
        e.preventDefault(); // 🛑 Mencegah context menu
        
        alert('Right-click dicegah di area ini!');
    });
</script>
```

## 🚀 Real-World Examples

### Example 1: Form dengan Validasi
```javascript
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 🛑 Stop form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validasi custom
    if (!isValidEmail(email)) {
        showError('Email tidak valid!');
        return;
    }
    
    if (password.length < 6) {
        showError('Password minimal 6 karakter!');
        return;
    }
    
    // Jika valid, kirim via AJAX
    submitViaAJAX({ email, password });
});

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
```

### Example 2: Confirm Before Navigation
```javascript
document.querySelectorAll('a[data-confirm]').forEach(link => {
    link.addEventListener('click', function(event) {
        // 🛑 Mencegah navigasi sementara
        event.preventDefault();
        
        const message = this.getAttribute('data-confirm');
        const targetUrl = this.href;
        
        if (confirm(message)) {
            // User setuju, lanjutkan navigasi
            window.location.href = targetUrl;
        } else {
            // User batal, tetap di halaman ini
            console.log('Navigasi dibatalkan user');
        }
    });
});
```

### Example 3: Custom File Upload
```javascript
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault(); // 🛑 Allow drop
    this.classList.add('dragover');
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault(); // 🛑 Prevent file from opening in browser
    
    const files = event.dataTransfer.files;
    handleFiles(files);
    this.classList.remove('dragover');
});
```

## ✅ Best Practices

### 1. **Gunakan di Event Listener yang Tepat**
```javascript
// ✅ BENAR - di submit event untuk form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form data
});

// ❌ SALAH - di click event untuk submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Tidak efektif!
    // Masih bisa submit dengan Enter key
});
```

### 2. **Early Return Pattern**
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validasi early return
    if (!isFormValid()) {
        showValidationErrors();
        return; // Stop execution
    }
    
    // Process valid form
    processFormData();
});
```

### 3. **Conditional Prevention**
```javascript
form.addEventListener('submit', (e) => {
    // Hanya prevent jika kondisi tertentu
    if (needsCustomValidation()) {
        e.preventDefault();
        handleCustomValidation();
    }
    // Else, biarkan default behavior
});
```

### 4. **Multiple Event Handlers**
```javascript
// Handler 1 - Validation
form.addEventListener('submit', (e) => {
    if (!isValid) {
        e.preventDefault();
        showErrors();
    }
});

// Handler 2 - Analytics
form.addEventListener('submit', (e) => {
    // Masih dieksekusi meski sebelumnya di-prevent
    logFormSubmission();
});
```

## ❌ Common Mistakes

### 1. **Lupa preventDefault()**
```javascript
// ❌ SALAH - Form akan refresh
form.addEventListener('submit', () => {
    console.log('Form akan submit dan halaman refresh!');
});

// ✅ BENAR
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form dicegah dari refresh');
});
```

### 2. **preventDefault() di Tempat Salah**
```javascript
// ❌ Tidak efektif
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Masih bisa submit dengan Enter key!
});

// ✅ Lebih efektif
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Menangkap semua submission methods
});
```

### 3. **Return False vs preventDefault()**
```javascript
// ❌ Old school (tidak recommended)
link.addEventListener('click', () => {
    // ... some code
    return false; // Hanya work di certain cases
});

// ✅ Modern approach
link.addEventListener('click', (e) => {
    e.preventDefault();
    // ... some code
});
```

## 🆚 preventDefault() vs stopPropagation()

### Perbedaan Fundamental

| Method | Purpose | Effect |
|--------|---------|--------|
| `preventDefault()` | Mencegah **default behavior** browser | Behavior default dibatalkan |
| `stopPropagation()` | Menghentikan **event bubbling** | Event tidak naik ke parent elements |

### Contoh Perbedaan
```html
<div id="parent">
    <a href="https://google.com" id="child">
        Click me!
    </a>
</div>

<script>
    document.getElementById('parent').addEventListener('click', () => {
        console.log('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', (e) => {
        // 🛑 Hanya prevent default behavior
        e.preventDefault(); 
        console.log('Child clicked - navigation prevented');
        // "Parent clicked" MASIH muncul
    });

    document.getElementById('child').addEventListener('click', (e) => {
        // 🛑 Hanya stop propagation
        e.stopPropagation();
        console.log('Child clicked - propagation stopped');
        // "Parent clicked" TIDAK muncul
        // Tapi browser tetap navigasi ke Google!
    });
</script>
```

## 📋 Cheat Sheet

### Quick Reference
```javascript
// ✅ Form handling
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form data
});

// ✅ Link customization  
link.addEventListener('click', (e) => {
    e.preventDefault();
    // Custom navigation logic
});

// ✅ Right-click prevention
element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // Custom context menu
});

// ✅ Drag & drop
element.addEventListener('dragover', (e) => {
    e.preventDefault();
    // Allow dropping
});
```

### Do's and Don'ts

**✅ DO:**
- Gunakan untuk custom form handling
- Gunakan untuk confirmasi sebelum navigation
- Gunakan untuk single page applications
- Gunakan di event yang tepat (submit, bukan click)

**❌ DON'T:**
- Jangan overuse di semua event
- Jangan lupa return setelah validasi gagal
- Jangan gunakan untuk styling (gunakan CSS)
- Jangan block default behavior tanpa reason yang jelas

## 🎓 Kesimpulan

### Inti preventDefault():
> **"Stop the browser from doing what it normally would do, so I can do something better!"**

### Key Takeaways:
1. **Purpose**: Mencegah default behavior browser
2. **Use Case**: Custom form handling, SPA navigation, event customization
3. **Timing**: Dipanggil di dalam event handler
4. **Effect**: Hanya mempengaruhi default behavior, tidak mempengaruhi event propagation

### Final Thought:
`preventDefault()` adalah **gatekeeper** antara user interaction dan browser behavior - gunakan dengan bijak untuk menciptakan better user experience! 