# HARI 11: Kosmetik & UX (UI Polish)

**Selamat Datang di Klinik Kecantikan!** 💅

Aplikasi kita sudah berfungsi 100%. Tapi rasanya "kaku".
Pas Login, cuma pakai `alert()`.
Pas bayar, cuma `alert()`.
Tampilannya biru-hitam membosankan.

Hari ini kita tingkatkan **User Experience (UX)**.
Pengguna yang senang -> Kasir yang cepat -> Bisnis lancar.

**Target Hari Ini:**
1.  **UX:** Mengganti `alert()` kasar dengan **Toast Notification** yang elegan.
2.  **CSS:** Menggunakan **CSS Custom Properties (Variables)** untuk kemudahan tema (Dark Mode ready).
3.  **Feedback:** Menambahkan **Loading State** (Indikator bulat berputar) saat proses berat.

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. `setTimeout` & `setInterval` ⏱️
*Mesin Waktu JavaScript.*

*   **WHAT:** Menunda eksekusi kode.
*   **WHY:** Toast notifikasi harus hilang otomatis setelah 3 detik.
*   **ANATOMY:**
    ```javascript
    const timerId = setTimeout(() => {
        console.log("Boom!"); // Meledak setelah 3 detik
    }, 3000); // 3000 ms = 3 detik
    
    // Kalau berubah pikiran:
    clearTimeout(timerId); // Gak jadi meledak
    ```

### 2. CSS Variables (`:root`) 🎨
*Ganti satu, berubah semua.*

*   **PROBLEM:** Warna biru `#007bff` tersebar di 50 tempat di CSS. Kalau bos minta ganti jadi Ungu, kita mati kutu.
*   **SOLUTION:** Definisikan di atas, pakai di bawah.
    ```css
    :root {
        --warna-utama: #007bff;
        --jarak-standar: 20px;
    }
    
    button { background: var(--warna-utama); }
    h1 { color: var(--warna-utama); }
    ```

**Visualisasi Render Style:**

```mermaid
graph TD
    A[:root (Global Var)] --> B[Komponen Tombol]
    A --> C[Komponen Header]
    A --> D[Komponen Card]
    
    E[Dark Mode Class] -.->|Override| A
    
    style A fill:#f9f,stroke:#333
    style E fill:#000,color:#fff
```

---

## BAGIAN 2: 🏗️ Pembangunan Milestones

### Milestone 1: CSS Variables (`styles.css`)

Kita standarisaikan warna aplikasi kita. Buka `styles.css` dan tambahkan di paling atas.

```css
:root {
    /* Palette Warna - Konsisten */
    --primary: #4a90e2; /* Biru Laut */
    --primary-dark: #357abd;
    --secondary: #50e3c2; /* Tosca */
    --danger: #e74c3c; /* Merah */
    --success: #2ecc71; /* Hijau */
    --dark: #2c3e50; /* Hitam Kebiruan */
    --light: #ecf0f1; /* Abu Terang */
    
    /* Spacing & Sizes */
    --radius-sm: 4px;
    --radius-md: 8px;
    --padding-std: 1rem;
    
    /* Font */
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    font-family: var(--font-main);
    background-color: var(--light);
    color: var(--dark);
    margin: 0;
}

/* Update class lama agar pakai variabel */
.btn-primary {
    background: var(--primary);
    color: white;
    border-radius: var(--radius-sm);
    /* ... */
}
.btn-primary:hover {
    background: var(--primary-dark);
}
```

### Milestone 2: Membuat Komponen Toast (`js/utils/ui.js`)

Kita lupakan `alert()`. Kita buat notifikasi kecil yang muncul di pojok kanan bawah lalu hilang sendiri.
Buat file baru `js/utils/ui.js`. Export di `js/utils/index.js`.

```javascript
/* js/utils/ui.js */
import { buatElemen } from './dom.js';

export function tampilkanNotifikasi(pesan, jenis = 'info') {
    // 1. Cek Wadah Notif (Singleton container)
    let container = document.getElementById('notif-container');
    if (!container) {
        container = buatElemen('div', { 
            id: 'notif-container',
            style: 'position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 9999;' 
        });
        document.body.appendChild(container);
    }

    // 2. Tentukan Warna
    let warnaBg = '#333';
    if (jenis === 'success') warnaBg = 'var(--success)'; // Pakai var CSS tadi
    if (jenis === 'error') warnaBg = 'var(--danger)';

    // 3. Buat Elemen Toast
    const toast = buatElemen('div', {
        className: 'toast-message',
        style: `
            background: ${warnaBg}; color: white; padding: 12px 20px; border-radius: 4px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); min-width: 250px; 
            transform: translateX(100%); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
            opacity: 0; display: flex; justify-content: space-between; align-items: center;
        `
    }, 
        buatElemen('span', {}, pesan),
        buatElemen('button', { 
            onClick: () => hapusToast(toast),
            style: 'background: none; border: none; color: white; cursor: pointer; font-size: 16px; margin-left: 10px;'
        }, '✕')
    );

    container.appendChild(toast);

    // 4. Animasi Masuk (Slide In)
    // RequestAnimationFrame memastikan DOM ready sebelum animasi
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    });

    // 5. Animasi Keluar (Auto Remove)
    const timer = setTimeout(() => {
        hapusToast(toast);
    }, 3000); // 3 DETIK MUNCUL

    // Helper Hapus
    function hapusToast(el) {
        el.style.transform = 'translateX(100%)';
        el.style.opacity = '0';
        clearTimeout(timer); // Bersihkan timer biar gak error
        setTimeout(() => el.remove(), 300); // Hapus DOM setelah animasi CSS selesai
    }
}
```

### Milestone 3: Implementasi Toast di Login & POS

Ganti semua `alert(...)` di kodinganmu!

**Contoh di `js/auth/login.js`:**
```javascript
import { tampilkanNotifikasi } from '../utils/index.js';

// ...
if (sukses) {
    tampilkanNotifikasi(`Selamat datang, ${user.nama}!`, 'success');
} else {
    tampilkanNotifikasi('Password salah, Bro!', 'error');
}
```

**Contoh di `js/pos/index.js` (Keranjang):**
```javascript
if (stokKurang) {
    tampilkanNotifikasi('Stok barang habis!', 'error');
} else {
    tampilkanNotifikasi('Barang masuk keranjang', 'success');
}
```

### Milestone 4: Loading Spinner (UX Wait) ⏳

Saat Login atau Transaksi, kadang prosesnya butuh 1-2 detik (apalagi nanti kalau pakai Internet/API).
User butuh kepastian bahwa aplikasi sedang bekerja.

Tambahkan di `styles.css`:
```css
.spinner {
    border: 3px solid rgba(255, 255, 255, 0.3);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-left-color: white;
    animation: putar 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
}

@keyframes putar {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

Lalu gunakan di tombol login saat diklik:
```javascript
// Function helper di utils/ui.js
export function setTombolLoading(btn, isLoading, teksSemula = 'Simpan') {
    if (isLoading) {
        btn.dataset.teksemula = btn.textContent; // Simpan teks asli
        btn.innerHTML = '<span class="spinner"></span> Loading...';
        btn.disabled = true;
    } else {
        btn.innerHTML = btn.dataset.teksemula || teksSemula;
        btn.disabled = false;
    }
}

// Cara pakai di Login:
setTombolLoading(btnSubmit, true);
// ... proses ...
setTombolLoading(btnSubmit, false);
```

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| Toast menumpuk berantakan | Container tidak `flex-direction: column` atau z-index ketutupan. | Cek CSS inline di `js/utils/ui.js`. |
| Variable CSS tidak berubah | Salah nama variabel (Case Sensitive). `--Primary` beda dengan `--primary`. | Cek ejaan di `:root`. |
| Spinner aneh (gepeng) | `box-sizing: border-box` belum diset global. | Tambahkan `* { box-sizing: border-box; }` di awal CSS. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: The Dark Mode 🌑
Definisikan variable warna yang berbeda di dalam media query:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --light: #1a1a1a;
        --dark: #ecf0f1;
        /* Balik logika warna lainnya */
    }
}
```
Atau buat class `.dark-mode` di body dan toggle class itu pakai tombol di header.

### Tugas 2: Stacked Toasts
Jika user klik spam tombol error, toast akan muncul banyak berderet ke atas.
Batasi maksimal 3 toast. Jika ada toast ke-4, hapus toast paling lama (pertama) sebelum nambah baru.
Hint: `container.children.length > 3`.

---

**Evaluasi Hari 11:**
Aplikasi sekarang terasa "Licin" (Smooth).
Tidak ada pop-up kasar `alert` yang memblokir layar.
Warna konsisten.
Tombol memberikan feedback loading.

Besok (Hari 12), kita akan mencoba keluar dari zona nyaman LocalStorage dan mencoba berkomunikasi dengan Dunia Luar (**API & Fetch**). 🌐

*Sampai jumpa di Hari 12!*
