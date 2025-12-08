# HARI 6: Gudang Barang (Product Read)

**Selamat Datang di Gudang!** 📦

Rumah (Layout) sudah jadi. Sekarang saatnya mengisi perabotan.
Halaman "Produk" kita masih kosong.
Hari ini kita akan mengambil data dari Database (Hari 2) dan menampilkannya dalam bentuk Tabel HTML yang rapi.

Di dunia kerja, ini disebut **Data Rendering** atau **Data Binding**.
Skill dasar frontend developer: Array JSON -> HTML UI.

**Target Utama Hari Ini:**
1.  **Logic:** Loop Array `forEach`.
2.  **DOM:** Memahami bahaya & manfaat `innerHTML`.
3.  **UI:** Menangani Empty State (Kondisi data kosong).

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. Looping Array: `forEach` vs `map` 🔄
*Cara menyuruh komputer melakukan hal berulang.*

*   **`forEach` (Pelaksana Tugas)**
    *   **KONSEP:** "Untuk setiap barang, lakukan X". Tidak menghasilkan array baru.
    *   **CONTOH:**
        ```javascript
        const buah = ['Apel', 'Mangga'];
        buah.forEach(b => console.log(b)); // Cuma nge-print
        ```
*   **`map` (Pabrik Ubah Bentuk)**
    *   **KONSEP:** "Untuk setiap barang, UBAH jadi Y, lalu kumpulkan hasil ubahannya". Menghasilkan array baru.
    *   **CONTOH:**
        ```javascript
        const angka = [1, 2];
        const kaliDua = angka.map(x => x * 2); // [2, 4]
        ```

👉 **Kapan pakai mana?**
Untuk mengubah Data menjadi HTML string, `map` lebih cocok.
Untuk membuat Elemen DOM menggunakan `buatElemen` lalu `appendChild`, `forEach` lebih mudah dimengerti pemula. Kita pakai `forEach` dulu.

### 2. Guard Clause 🛡️
*Satpam gerbang.*

*   **PROBLEM:** Codingan menjorok ke dalam (Nested If Hell).
    ```javascript
    if (data) {
        if (data.length > 0) {
            // Logic panjang...
        } else {
            alert("Kosong");
        }
    }
    ```
*   **SOLUTION:** Cek error di awal, usir (return) segera.
    ```javascript
    if (!data || data.length === 0) {
        alert("Kosong");
        return; // STOP DI SINI. Bawahnya gak bakal jalan.
    }
    // Logic panjang sejajar, enak dibaca...
    ```

**Visualisasi Render Flow:**

```mermaid
graph TD
    A[Start Render] --> B{Data Kosong?}
    B -->|Yes| C[Render Pesan 'Data Kosong']
    B -->|No| D[Loop Data (forEach)]
    D --> E[Buat Elemen TR]
    E --> F[Isi kolom TD]
    F --> G[Append ke Table Body]
    G --> D
    G -->|Loop Selesai| H[Tampil di Layar]
```

---

## BAGIAN 2: 🧠 Under The Hood (Teori Mendalam)

### The Danger of `innerHTML` (Cross-Site Scripting / XSS) ☠️

Saat kita menggunakan `container.innerHTML = "..."`, kita memberi kuasa penuh pada string tersebut untuk menjadi kode HTML.

*   **Skenario Serangan:**
    Jika nama produk di database berisi script jahat:
    `Nama: "<img src=x onerror=alert('Hacked!')>"`
    Saat dirender dengan innerHTML, script itu akan berjalan!

*   **Solusi Kita:**
    Kita menggunakan fungsi `buatElemen` yang menggunakan `document.createTextNode` atau `textContent`. Ini otomatis menetralkan script jahat menjadi teks biasa. Aman.

---

## BAGIAN 3: 🏗️ Pembangunan Milestones

Kita akan bekerja di folder `js/products/`. Buat file `js/products/index.js` jika belum ada.

### Milestone 1: Kerangka Halaman Produk (`js/products/index.js`)

Kita butuh tabel kosong yang siap diisi.

**Isi `js/products/index.js`:**

```javascript
import { buatElemen, formatKeRupiah } from '../utils/index.js';
import * as Penyimpanan from '../db/index.js'; // Akses ke DB

/**
 * Fungsi Utama: Merender Halaman Produk ke dalam container
 * Dipanggil oleh layout.js saat tab 'Produk' diklik.
 */
export function tampilkanHalamanProduk() {
    const container = document.getElementById('produk-container');
    if (!container) return; // Guard clause

    container.innerHTML = ''; // Bersihkan isi lama

    // 1. Header & Tombol Tambah
    const header = buatElemen('div', { className: 'action-bar', style: 'margin-bottom: 20px; display: flex; justify-content: space-between;' },
        buatElemen('h3', {}, 'Daftar Barang'),
        buatElemen('button', { 
            className: 'btn-primary',
            style: 'background: green; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;',
            onClick: () => alert("Fitur Tambah Produk hadir di Hari 7!")
        }, '+ Tambah Produk')
    );

    // 2. Tabel (Hanya kerangkanya: Thead & Tbody kosong)
    // Tbody diberi ID unik agar mudah " ditembak" datanya nanti
    const tabel = buatElemen('table', { className: 'data-table', style: 'width: 100%; border-collapse: collapse;' },
        buatElemen('thead', { style: 'background: #f4f4f4; text-align: left;' },
            buatElemen('tr', {},
                buatElemen('th', { style: 'padding: 10px;' }, 'Gambar'),
                buatElemen('th', { style: 'padding: 10px;' }, 'Nama Produk'),
                buatElemen('th', { style: 'padding: 10px;' }, 'Kategori'),
                buatElemen('th', { style: 'padding: 10px;' }, 'Harga'),
                buatElemen('th', { style: 'padding: 10px;' }, 'Stok'),
                buatElemen('th', { style: 'padding: 10px;' }, 'Aksi')
            )
        ),
        buatElemen('tbody', { id: 'products-tbody' }) // KOSONG DULU
    );

    container.appendChild(header);
    container.appendChild(tabel);

    // 3. Panggil fungsi render data
    renderBarisTabel();
}
```

### Milestone 2: Render Data (`js/products/index.js`)

Sekarang kita buat fungsi `renderBarisTabel` untuk mengisi `tbody` tadi.

```javascript
/**
 * Mengambil data dari DB dan merender baris TR
 */
export function renderBarisTabel() {
    const tbody = document.getElementById('products-tbody');
    if (!tbody) return;

    tbody.innerHTML = ''; // Reset baris

    // A. Ambil Data
    const semuaProduk = Penyimpanan.ambilSemuaProduk();

    // B. Cek Kosong (Empty State)
    if (semuaProduk.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 20px; color: #666;">
                    Belum ada produk. Silakan tambah data.
                </td>
            </tr>
        `;
        return;
    }

    // C. Loop & Render
    semuaProduk.forEach(p => {
        const baris = buatElemen('tr', { style: 'border-bottom: 1px solid #ddd;' },
            // 1. Gambar (Handle gambar rusak/kosong dengan placeholder)
            buatElemen('td', { style: 'padding: 10px;' }, 
                buatElemen('img', { src: p.image || 'https://via.placeholder.com/50', width: 50, style: 'border-radius: 4px;' })
            ),
            // 2. Nama
            buatElemen('td', { style: 'padding: 10px;' }, p.name),
            // 3. Kategori
            buatElemen('td', { style: 'padding: 10px;' }, p.category || '-'),
            // 4. Harga (Format Rupiah)
            buatElemen('td', { style: 'padding: 10px; font-weight: bold;' }, formatKeRupiah(p.price)),
            // 5. Stok (Logic Warna warni)
            buatElemen('td', { 
                style: `padding: 10px; color: ${p.stock < 5 ? 'red' : 'black'};`
            }, p.stock),
            // 6. Tombol Aksi
            buatElemen('td', { style: 'padding: 10px;' },
                buatElemen('button', { 
                    className: 'btn-small', 
                    style: 'margin-right: 5px;',
                    onClick: () => alert(`Edit ${p.name}? Besok ya!`)
                }, '✏️'),
                buatElemen('button', { 
                    className: 'btn-small btn-del',
                    style: 'color: red;',
                    onClick: () => alert(`Hapus ${p.name}? Besok ya!`)
                }, '🗑️')
            )
        );

        tbody.appendChild(baris);
    });
}
```

### Milestone 3: Integrasi Layout (`js/layout.js`)

Jangan lupa **un-comment** kode di `js/layout.js` agar fungsi ini dipanggil.

```javascript
/* Di dalam js/layout.js */
import { tampilkanHalamanProduk } from './products/index.js'; // Import fungsi tadi

// ... di dalam event listener ...
if (targetId === 'products') {
    tampilkanHalamanProduk(); // Panggil!
}
```

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| Tabel kosong (Header doang) | `renderBarisTabel` tidak dipanggil, atau DB kosong. | Cek tab Console. Cek isi LocalStorage. |
| Gambar rusak (icon pecah) | URL gambar di DB tidak valid. | Ubah kode render gambar pakai `p.image || 'gambar_default.jpg'` sebagai fallback. |
| Error `appendChild of null` | Elemen `tbody` belum ada di DOM saat fungsi render dipanggil. | Pastikan urutan: Render Struktur DULU -> Append ke Container -> BARU panggil render data. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: Indikator Stok Krisis 🚨
Di kode stok, kita sudah buat warna merah kalau < 5.
Sekarang buat lebih canggih:
- Stok = 0 : Tulis "HABIS" (warna merah tebal).
- Stok < 5 : Warna Orange.
- Stok Aman : Warna Hijau.

### Tugas 2: Pencarian Kilat (Search) 🔍
1.  Tambahkan `<input type="text" id="cari-produk" placeholder="Cari...">` di Header halaman produk.
2.  Pasang event `onKeyup`.
3.  Di dalam event:
    - Ambil nilai input.
    - Filter array `semuaProduk` bedasarkan nama (pakai `.filter()` dan `.includes()`).
    - Panggil ulang render dengan data hasil filter saja.
    *(Ini tantangan sulit! Tapi coba dulu logic-nya).*

---

**Evaluasi Hari 6:**
Jika kamu klik tab "Produk", dan tabel berisi data 3 produk dummy (Latin/Kopi) yang kita buat di Hari 2 muncul...
SELAMAT! Kamu berhasil menghubungkan Otak (DB), Rangka (Layout), dan Wajah (UI Tabel).

Besok (Hari 7), kita akan membuat Form agar tombol "Tambah Produk" dan "Edit" berfungsi beneran. 📝

*Sampai jumpa di Hari 7!*
