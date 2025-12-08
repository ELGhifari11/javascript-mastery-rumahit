# HARI 13: Bersih-Bersih Kode (Refactoring)

**Selamat Datang di Fase Profesional!** 🧐

12 Hari kita ngebut bikin fitur. Jujur saja, pasti ada kode yang "jorki" (Jorok).
- Variable `x`, `y` yang tidak jelas.
- Fungsi 100 baris yang melakukan segalanya.
- Pengulangan kode (Copy-Paste) di mana-mana.
- Komentar usang yang menyesatkan.

Hari ini kita TIDAK bikin fitur baru.
Kita akan melakukan **Refactoring**: Mengubah struktur kode tanpa mengubah perilakunya (Fitur tetap sama), agar lebih mudah dibaca, ditest, dan dirawat oleh manusia lain (atau diri kamu sendiri di masa depan).

**Target Hari Ini:**
1.  **Principles:** Menerapkan DRY, KISS, dan SRP.
2.  **Practice:** Memecah fungsi raksasa dan menghapus dead code.
3.  **Documentation:** Standarisasi JSDoc.

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. Code Smell (Bau Kode) 👃
Tanda-tanda kodemu perlu mandi:

*   **Duplikasi:** Blok `if-else` yang sama muncul di `login.js` dan `register.js`.
*   **Magic Numbers:** `if (status === 2)`. Apa itu 2? Ganti jadi `const STATUS_SUKSES = 2`.
*   **God Function:** Fungsi yang scroll-nya lebih dari 1 layar monitor. Pecah jadi fungsi-fungsi kecil!
*   **Deep Nesting:** If di dalam If di dalam Loop di dalam If. (Gunung es).

### 2. JSDoc 📖
Standar komentar untuk JavaScript yang dipahami Editor (VS Code).
VS Code bisa membacanya dan memberi saran (Intellisense) yang cerdas.

```javascript
// BURUK
// Fungsi hitung luas
function hitung(p, l) { return p * l; }

// BAGUS (JSDoc)
/**
 * Menghitung luas persegi panjang.
 * @param {number} p - Panjang sisi dalam meter
 * @param {number} l - Lebar sisi dalam meter
 * @returns {number} Hasil luas (m^2)
 */
function hitungLuasPersegi(panjang, lebar) { return panjang * lebar; }
```

**Visualisasi Refactoring Process:**

```mermaid
graph TD
    A[Kode Kotor (Bau)] --> B{Identifikasi Bau}
    B -->|Duplikasi| C[Extract Function (DRY)]
    B -->|Nama Aneh| D[Rename Variable (Readability)]
    B -->|Fungsi Raksasa| E[Split Function (SRP)]
    C --> F[Test Ulang (Jalan?)]
    D --> F
    E --> F
    F -->|Sukses| G[Kode Bersih ✨]
    F -->|Bug Baru| H[Rollback / Debug]
```

### 3. Principles 📜
*   **DRY (Don't Repeat Yourself):** Jangan ada kode kembar.
*   **KISS (Keep It Simple, Stupid):** Solusi sederhana lebih baik daripada solusi canggih tapi membingungkan.
*   **SRP (Single Responsibility Principle):** Satu fungsi hanya boleh punya satu alasan untuk berubah (Satu Tugas).

---

## BAGIAN 2: 🏗️ Pembangunan Milestones

### Milestone 1: DRY CSS (`styles.css`)

Cek CSS mu. Apakah ada pola yang berulang?

**Sebelum:**
```css
.btn-login { background: blue; padding: 10px; border-radius: 5px; color: white; }
.btn-beli { background: green; padding: 10px; border-radius: 5px; color: white; }
```

**Sesudah (Utility Class):**
```css
/* Base Class */
.btn { padding: 10px; border-radius: 5px; border: none; cursor: pointer; color: white; font-weight: bold; }

/* Modifier Class */
.btn-blue { background: var(--primary); }
.btn-green { background: var(--success); }

/* Pemakaian: <button class="btn btn-blue"> */
```
*Tugas: Scan `styles.css` kamu dan gabungkan style yang mirip.*

### Milestone 2: Single Responsibility di `main.js`

Cek `js/main.js`. Apakah ada logic bisnis yang nyasar di sana?
`main.js` harusnya cuma "Satpam" yang mengarahkan lalu lintas.

**Audit `main.js`:**
1.  Apakah ada fungsi matematika? -> Pindah ke `utils/math.js`.
2.  Apakah ada manipulasi string? -> Pindah ke `utils/format.js`.
3.  Apakah ada rendering HTML panjang? -> Pindah ke module UI masing-masing.

### Milestone 3: Menambahkan JSDoc

Buka file `js/db/core.js` dan `js/lib/Store.js`.
Tambahkan komentar JSDoc di atas setiap fungsi export.
Ini akan membuat kodemu terasa "Mahal" dan profesional.

**Latihan:**
Buka `js/db/products.js`, tambahkan JSDoc untuk `ambilSemuaProduk`, `tambahProduk`, dll. Jelaskan struktur object produk di param.

### Milestone 4: Hapus Dead Code 💀

Cari kode yang di-comment:
`// console.log("Test")`
`// alert("Coba dulu")`
`// const lama = ...`

HAPUS. Kode bersih adalah kode yang minim sampah. Jangan takut menghapus, kan ada Git (kalau pakai). Kalau manual, yakinlah kalau kode mati itu cuma bikin bingung.

### Milestone 5: Config File ⚙️

Tidakkah aneh URL `https://fakestoreapi.com` ada di tengah-tengah `api.js`?
Bagaimana kalau URL-nya ganti? Kita harus ngorek file logic.

Buat file baru `js/config.js`:
```javascript
export const CONFIG = {
    API_URL: 'https://fakestoreapi.com',
    APP_NAME: 'POS Lite v1.0',
    CURRENCY: 'IDR',
    TAX_RATE: 0.11
};
```

Update `js/api.js`:
`import { CONFIG } from './config.js';`
`const respon = await fetch(CONFIG.API_URL + '/products');`

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| Aplikasi error setelah refactor | Salah hapus kurung tutup `}` atau salah import path setelah pindah file. | Selalu tes aplikasi SETIAP kali selesai refactor 1 fungsi. Jangan refactor seharian baru tes. |
| Fungsi tidak ditemukan | Lupa `export` di file asal atau `import` di file tujuan. | Cek `export const` vs `export default`. Kita sepakat pakai Named Export (`export const`). |
| Variable is not defined | Variable global yang tadinya bisa diakses, sekarang jadi tidak bisa karena pindah scope (module). | Oper variable tersebut sebagai parameter fungsi. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: The Linter (Manual) 🔍
Install ekstensi **ESLint** di VS Code (atau bayangkan kamu adalah Linter).
Baca kodemu baris demi baris.
1.  Indentasi konsisten? (2 spasi vs 4 spasi).
2.  Titik koma (;) konsisten? (Ada atau Tidak, jangan campur).
3.  Nama variabel konsisten? (camelCase untuk JS, kebab-case untuk CSS).

### Tugas 2: Rename Warrior ⚔️
Cari nama variabel singkatan yang jelek: `p`, `u`, `d`, `t`.
Ganti dengan nama jelas: `produk`, `user`, `data`, `transaksi`.
Gunakan fitur **F2 (Rename Symbol)** di VS Code agar aman (mengubanh semua referensi sekaligus).

---

**Evaluasi Hari 13:**
Aplikasi kamu sekarang harusnya terasa sama saja saat dijalankan (karena kita tidak ubah fitur).
TAPI, saat codingnya dibuka, rasanya "Lega" dan "Rapi".
Kamu tidak lagi takut menyentuh kodemu sendiri.

Besok (Hari 14), hari terakhir!
Kita akan **Deploy** aplikasi ini ke internet agar bisa diakses seluruh dunia. 🌍

*Sampai jumpa di Garis Finish (Hari 14)!*
