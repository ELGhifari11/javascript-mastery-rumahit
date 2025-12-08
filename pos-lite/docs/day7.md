# HARI 7: Manajemen Inventaris (Create, Update, Delete)

**Selamat Datang Manajer Gudang!** 👔

Menampilkan data (Read) itu baru 25% dari pekerjaan.
Hari ini kita akan menyelesaikan sisa 75%-nya: **Create**, **Update**, dan **Delete** (CUD).
Kita akan membuat Form, Modal (Popup), dan logic penyimpanan yang sesungguhnya.

**Target Utama Hari Ini:**
1.  **Logic:** Membedakan mode *Create* vs *Update*.
2.  **UI:** Membuat Modal Popup yang reusable.
3.  **Security:** Santitasi input user (cegah harga negatif).

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. `event.preventDefault()` 🛑
*Rem Darurat Browser.*

*   **PROBLEM:** Secara alami, kalau tombol `Submit` di form ditekan, browser akan me-refresh halaman untuk mengirim data ke server (perilaku web tahun 1990).
*   **WHY:** Kita adalah SPA (Single Page App). Kita tidak mau refresh! Kita mau proses datanya pakai JS saja.
*   **HOW:**
    ```javascript
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // "Browser, diem! Biar aku yang urus."
        // ... kode simpan data sendiri ...
    });
    ```

### 2. Logic Edit vs Create 🔀
*Satu Form, Dua Nyawa.*

Bagaimana kita tahu user mau Nambah atau Edit? Kita cek **ID**.
*   **Create:** ID belum ada (Kosong/Null).
*   **Edit:** ID sudah ada.

**Visualisasi Alur Simpan:**

```mermaid
graph TD
    A[Klik Tombol Simpan] --> B{Cek ID di Input Hidden}
    B -->|ID Kosong| C[Buat ID Baru (Date.now)]
    C --> D[Panggil Fungsi 'tambahProduk']
    B -->|ID Ada| E[Panggil Fungsi 'perbaruiProduk']
    D --> F[Simpan ke LocalStorage]
    E --> F
    F --> G[Tutup Modal]
    G --> H[Refresh Tabel]
```

### 3. Data Type Coercion 🎭
*Input HTML itu Pembohong.*
Apapun yang kamu ketik di `<input type="number">`, JavaScript menerimanya sebagai **STRING**.
*   Input ketik: `500`
*   JS baca: `"500"`
*   Bahaya: `"500" + 100 = "500100"` (Salah!).
*   Solusi: `Number("500") + 100 = 600` (Benar).

---

## BAGIAN 2: 🧠 Under The Hood (Teori Mendalam)

### Input Sanitization (Membersihkan Sampah) 🧹
User itu tidak bisa dipercaya. Mereka bisa input harga `-1000` atau nama produk kosong.
Validasi harus dilakukan di dua tempat:
1.  **HTML (Frontend Ringan):** Atribut `required`, `min="0"`, `type="number"`.
2.  **JavaScript (Logic Kuat):** `if (harga < 0) return alert('Error')`.

Jangan pernah kirim data mentah ke database tanpa divalidasi. Di sistem asli, validasi terpenting ada di Backend.

---

## BAGIAN 3: 🏗️ Pembangunan Milestones

Kita masih bekerja di `js/products/index.js`.

### Milestone 1: Siapkan Modal (Popup)

Modal adalah elemen yang melayang di atas konten lain.
Tambahkan kode ini di dalam `tampilkanHalamanProduk` (setelah tabel).

```javascript
/* ... di dalam tampilkanHalamanProduk ... */

// MODAL FORM (Tersembunyi Awalnya / style: display none)
// Kita buat manual pakai CSS inline biar gak ribet file css dulu
const modalHtml = buatElemen('div', { 
    id: 'modal-produk', 
    style: 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 1000;' 
},
    buatElemen('div', { style: 'background: white; padding: 20px; border-radius: 8px; width: 400px;' },
        buatElemen('h2', { id: 'modal-title' }, 'Tambah Produk'),
        buatElemen('form', { id: 'form-produk' },
            // Input ID (Hidden - Rahasia)
            buatElemen('input', { type: 'hidden', id: 'input-id' }),
            
            // Nama
            buatElemen('div', { style: 'margin-bottom: 10px;' },
                buatElemen('label', {}, 'Nama Produk'),
                buatElemen('input', { id: 'input-nama', required: true, style: 'width: 100%; padding: 5px;' })
            ),
            // Kategori
            buatElemen('div', { style: 'margin-bottom: 10px;' },
                buatElemen('label', {}, 'Kategori'),
                buatElemen('input', { id: 'input-katedori', style: 'width: 100%; padding: 5px;' })
            ),
            // Harga (Number)
            buatElemen('div', { style: 'margin-bottom: 10px;' },
                buatElemen('label', {}, 'Harga'),
                buatElemen('input', { id: 'input-harga', type: 'number', required: true, style: 'width: 100%; padding: 5px;' })
            ),
            // Stok (Number)
            buatElemen('div', { style: 'margin-bottom: 10px;' },
                buatElemen('label', {}, 'Stok'),
                buatElemen('input', { id: 'input-stok', type: 'number', required: true, style: 'width: 100%; padding: 5px;' })
            ),

            // Tombol Aksi
            buatElemen('div', { style: 'display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;' },
                buatElemen('button', { type: 'button', onClick: tutupModal, style: 'background: #ccc; border: none; padding: 8px 16px; cursor: pointer;' }, 'Batal'),
                buatElemen('button', { type: 'submit', style: 'background: blue; color: white; border: none; padding: 8px 16px; cursor: pointer;' }, 'Simpan')
            )
        )
    )
);

// Tempelkan modal ke container (tapi dia masih display: none)
container.appendChild(modalHtml);
```

### Milestone 2: Fungsi Buka Tutup Modal

Tambahkan fungsi-fungsi ini di file yang sama.

```javascript
/**
 * Membuka Modal
 * Bisa mode kosong (Tambah) atau terisi (Edit)
 */
function bukaModal(produkEdit = null) {
    const modal = document.getElementById('modal-produk');
    const form = document.getElementById('form-produk');
    const judul = document.getElementById('modal-title');
    
    // Munculkan (Ubah display jadi flex biar di tengah)
    modal.style.display = 'flex';

    if (produkEdit) {
        // MODE EDIT: Isi form dengan data lama
        judul.textContent = 'Edit Produk';
        document.getElementById('input-id').value = produkEdit.id;
        document.getElementById('input-nama').value = produkEdit.name;
        document.getElementById('input-katedori').value = produkEdit.category || '';
        document.getElementById('input-harga').value = produkEdit.price;
        document.getElementById('input-stok').value = produkEdit.stock;
    } else {
        // MODE TAMBAH: Bersihkan form
        judul.textContent = 'Tambah Produk Baru';
        form.reset(); 
        document.getElementById('input-id').value = ''; // Pastikan ID kosong
    }
}

function tutupModal() {
    document.getElementById('modal-produk').style.display = 'none';
}
```

*Jangan lupa update tombol "Tambah Produk" di Milestone 1 Day 6 agar memanggil `bukaModal()`!*

### Milestone 3: Handle Submit (Data Saving)

Kaitkan event submit form.

```javascript
/* Tambahkan ini di renderHalamanProduk */
document.getElementById('form-produk').addEventListener('submit', prosesSimpan);


/* Logic Simpan */
function prosesSimpan(e) {
    e.preventDefault(); // Stop refresh!

    // 1. Ambil Data
    const id = document.getElementById('input-id').value;
    const dataForm = {
        name: document.getElementById('input-nama').value,
        category: document.getElementById('input-katedori').value,
        // INGAT: Convert ke Number!
        price: Number(document.getElementById('input-harga').value),
        stock: Number(document.getElementById('input-stok').value),
    };

    if (id) {
        // === UPDATE (Karena ID ada isinya) ===
        Penyimpanan.perbaruiProdukById(id, dataForm);
        alert("Berhasil diperbarui!");
    } else {
        // === CREATE (Karena ID kosong) ===
        dataForm.id = Date.now(); // Generate ID Unik pakai waktu sekarang
        dataForm.image = 'https://via.placeholder.com/150'; // Default gambar
        Penyimpanan.tambahProduk(dataForm);
        alert("Berhasil ditambahkan!");
    }

    tutupModal();
    renderBarisTabel(); // REFRESH TABEL OTOMATIS!
}
```

### Milestone 4: Hapus & Edit

Koneksikan tombol di tabel yang kita buat kemarin.

```javascript
/* Di renderBarisTabel -> tombol edit onClick */
onClick: () => bukaModal(p) // Kirim object produk 'p' ke modal

/* Di renderBarisTabel -> tombol delete onClick */
onClick: () => {
    if (confirm(`Yakin hapus ${p.name}?`)) {
        Penyimpanan.hapusProdukById(p.id);
        renderBarisTabel(); // Refresh tabel
    }
}
```

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| Harga jadi string seperti "50001000" | Lupa convert `Number(input.value)`. | Tambahkan `Number()` atau `parseInt()` saat mengambil value. |
| Modal tidak muncul | CSS `display` masih `none`. | Cek fungsi `bukaModal` apakah sudah set `display = 'flex'`. |
| Tombol Edit error | Parameter `p` (produk) tidak terkirim ke `bukaModal`. | Pastikan arrow function di onClick benar: `() => bukaModal(p)`. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: Validasi Harga Negatif 🛡️
Di fungsi `prosesSimpan`, cek `dataForm.price`.
Jika `< 0`, munculkan alert "Harga tidak boleh minus!" dan hentikan proses (return false). Jangan sampai data tersimpan.

### Tugas 2: Close on Overlay Click 🖱️
Sekarang modal cuma bisa ditutup pakai tombol "Batal".
Buat logic: Jika user klik area gelap di luar kotak putih (overlay), modal juga tertutup.
`modal.addEventListener('click', (e) => { if (e.target === modal) tutupModal(); })`

---

**Evaluasi Hari 7:**
1.  Klik Tambah -> Isi Form -> Simpan. Apakah muncul di tabel?
2.  Klik Edit -> Ubah Nama -> Simpan. Apakah nama di tabel berubah?
3.  Klik Hapus -> OK. Apakah hilang?
4.  Refresh browser. Apakah perubahan tadi menetap? (Berkat DB Hari 2).

Jika semua YA, selamat! Kamu sudah menguasai Skill **CRUD** (Create, Read, Update, Delete). Ini adalah skill wajib 90% pekerjaan programmer.

Besok (Hari 8), kita masuk ke fitur paling seru: **KASIR (Point of Sale)**. Kita akan jualan! 🛒

*Sampai jumpa di Hari 8!*
