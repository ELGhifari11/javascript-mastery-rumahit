# HARI 2: Mengelola Ingatan (Database & LocalStorage)

**Selamat Datang Kembali, Insinyur Data!** 👋

Kemarin kita sudah berhasil membuat tampilan (Frontend). Tapi ada masalah besar: saat browser di-refresh, semua data hilang.
Aplikasi kasir yang lupa barang dagangannya adalah aplikasi yang tidak berguna.

Hari ini, kita akan membuat **Otak** untuk aplikasi kita. Kita akan belajar cara menyimpan data secara permanen di browser pengguna menggunakan **LocalStorage**.
Kita akan membangun sistem database mini yang mirip dengan cara kerja database NoSQL asli (seperti MongoDB).

**Target Utama Hari Ini:**
1.  **Persistence:** Membuat data bertahan hidup walau komputer dimatikan.
2.  **Serialization:** Memahami konversi Object <-> String (JSON).
3.  **Architecture:** Menerapkan *Monolithic State Pattern* untuk memudahkan pengelolaan data.

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. LocalStorage 📦
*Gudang penyimpanan rahasia di dalam browser.*

*   **WHAT:** Penyimpanan key-value sederhana yang ada di setiap browser (Chrome, Firefox, Safari).
*   **KARAKTERISTIK:**
    *   **Persistent:** Data TIDAK hilang walau browser ditutup atau komputer dimatikan.
    *   **String Only:** HANYA bisa menyimpan Teks (Huruf/Angka). Tidak bisa menyimpan Gambar atau Object JS langsung.
    *   **Capacity:** Sekitar 5MB (Cukup untuk ribuan transaksi teks).
    *   **Synchronous:** Operasi baca/tulis memblokir thread utama (hati-hati dengan data jumbo!).

**Visualisasi Memori:**

```mermaid
graph TD
    A[RAM (Variabel JS)] -->|Hilang saat Refresh| B(Volatile Memory)
    C[LocalStorage] -->|Bertahan saat Refresh| D(Persistent Storage)
    C -->|Batas 5MB| D
    
    A -->|JSON.stringify| C
    C -->|JSON.parse| A
```

*   **API PENTING:**
    *   `setItem('kunci', 'nilai')`: Menyimpan data.
    *   `getItem('kunci')`: Mengambil data.
    *   `removeItem('kunci')`: Menghapus data.
    *   `clear()`: Menghapus SEMUANYA (Bahaya!).

### 2. JSON (JavaScript Object Notation) 🧬
*Solusi untuk keterbatasan LocalStorage.*

*   **PROBLEM:** LocalStorage cuma mau menerima Teks. Tapi data kita bentuknya Object `{ nama: 'Kopi', harga: 5000 }`.
*   **SOLUTION:** JSON. Teknik mengubah Object menjadi Teks (Packing) dan sebaliknya (Unpacking).
*   **ANATOMY:**
    ```javascript
    const dataAsli = { nama: "Budi", umur: 20, hobi: ["Makan", "Tidur"] };
    
    // PACKING (Serialization)
    // Object -> String
    const dataPaket = JSON.stringify(dataAsli);
    console.log(dataPaket); 
    // Hasil: '{"nama":"Budi","umur":20,"hobi":["Makan","Tidur"]}'
    // (Bentuknya jadi string panjang, siap masuk LocalStorage)

    // UNPACKING (Deserialization)
    // String -> Object
    const dataBongkar = JSON.parse(dataPaket);
    console.log(dataBongkar.nama); 
    // Hasil: "Budi" (Kembali jadi Object hidup)
    ```

### 3. Try-Catch (Jaring Pengaman) 🕸️
*Jangan biarkan aplikasimu mati konyol.*

*   **WHAT:** Struktur kode untuk menangani error.
*   **WHY:** `JSON.parse` adalah fungsi yang sensitif. Jika kita memaksa dia mem-parse teks yang rusak (misal: "asdfg"), aplikasi akan **CRASH** (Layar putih).
*   **HOW:**
    ```javascript
    try {
        // Area Berbahaya: Coba lakukan hal ini...
        const data = JSON.parse("teks rusak"); 
    } catch (error) {
        // Area Aman: Jika gagal, lari ke sini (jangan mati)
        console.error("Waduh, datanya korup nih:", error);
        // Kita bisa kasih nilai default sebagai gantinya
    }
    ```

### 4. Monolithic State Pattern 🌍
*Satu Cincin untuk Menguasai Semuanya.*

Alih-alih menyebar data di banyak kunci LocalStorage, kita akan menggunakan satu kunci utama.

*   **TRADISIONAL (Terpisah):**
    *   Key `pos_produk`: `[...]`
    *   Key `pos_user`: `[...]`
    *   Key `pos_trx`: `[...]`
    *   *Masalah:* Susah mau backup semua data, harus baca satu-satu.

*   **MODERN (Monolithic):**
    *   Key `pos_state`: `{ produk: [], user: [], trx: [] }`
    *   *Keuntungan:* Backup gampang (cuma backup 1 string), Reset gampang (hapus 1 key), Konsistensi terjamin.

---

## BAGIAN 2: 🧠 Under The Hood (Teori Mendalam)

### Cost of Serialization (Biaya Konversi)
Mengubah Object ke String (`stringify`) dan sebaliknya (`parse`) adalah proses yang **MAHAL** (berat) bagi CPU.
Jika datamu sangat besar (misal 10MB JSON), browser bisa macet (freeze) beberapa milidetik saat melakukan parsing.

*   **Best Practice:**
    1.  Jangan simpan gambar (Base64) di LocalStorage. Itu bikin JSON jadi super gemuk. Simpan URL-nya saja.
    2.  Panggil `getItem` sejarang mungkin. Ambil sekali di awal (load), simpan di variabel, lalu simpan balik (`setItem`) hanya saat ada perubahan (save).

---

## BAGIAN 3: 🏗️ Pembangunan Milestones

Hari ini kita fokus di folder `js/db/`. Folder ini akan jadi "Server Pura-pura" kita.

### Milestone 1: Inti Database (`js/db/core.js`)

File ini bertugas mengurus keluar-masuknya data dari LocalStorage. File lain TIDAK BOLEH memanggil `localStorage` langsung, harus lewat file ini (Encapsulation).

**Buat file `js/db/core.js`:**

```javascript
/**
 * DB: CORE
 * Jantung dari penyimpanan data kita.
 * Berisi konfigurasi Kunci dan fungsi Low-Level.
 */

// Konstanta Kunci Penyimpanan
// Kita pakai awalan 'pos_' biar tidak bentrok dengan aplikasi lain di localhost.
export const KUNCI_PENYIMPANAN = {
    STATE_POS: 'pos_state', // Gudang Utama (Produk, Transaksi, dll)
    PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini' // Sesi Login (Terpisah biar aman)
};

/**
 * Mengambil seluruh data POS (Produk, Transaksi, User)
 * @returns {Object} Object State lengkap
 */
export function ambilStatePOS() {
    try {
        // 1. Ambil dari gudang
        const jsonState = localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS);
        
        // 2. Jika ada isinya, bongkar (parse) dan kembalikan
        if (jsonState) {
            return JSON.parse(jsonState);
        }
    } catch (err) {
        // Jika JSON rusak, kita log errornya dan kembalikan default
        console.error("Database Corrupt, mereset state...", err);
    }
    
    // 3. Jika kosong atau error, kembalikan Data Template Awal (Kosong)
    return {
        produk: [],
        transaksi: [],
        pengguna: [] // List user yang terdaftar
    };
}

/**
 * Menyimpan seluruh data POS ke LocalStorage.
 * Fungsi ini akan menimpa data lama dengan yang baru.
 * @param {Object} state - Object state lengkap yang baru
 */
export function simpanStatePOS(state) {
    try {
        // 1. Packing jadi string
        const stringState = JSON.stringify(state);
        // 2. Simpan
        localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, stringState);
    } catch (err) {
        if (err.name === 'QuotaExceededError') {
             alert("Memori Penuh! Hapus sebagian data.");
        }
        console.error("Gagal menyimpan data:", err);
    }
}

/**
 * Menghapus semua data (FACTORY RESET).
 * Gunakan ini untuk tombol 'Reset Aplikasi'.
 */
export function hapusSemuaData() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.STATE_POS);
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    console.log("Aplikasi di-reset ke pengaturan pabrik.");
}
```

---

### Milestone 2: Wrapper Produk (`js/db/products.js`)

Kita tidak ingin setiap bagian aplikasi harus mikirin `ambilStatePOS` lalu `state.produk.push`. Terlalu low-level.
Kita buat fungsi khusus (Wrapper) untuk mengelola Produk.

**Buat file `js/db/products.js`:**

```javascript
import { ambilStatePOS, simpanStatePOS } from './core.js';

/**
 * Mengambil hanya daftar produk.
 * @returns {Array} Array of Products
 */
export function ambilSemuaProduk() {
    const state = ambilStatePOS();
    // Safety check: kalau state.produk undefined, kembalikan array kosong
    return state.produk || []; 
}

/**
 * Menambah produk baru ke database.
 * @param {Object} produkBaru - Object produk {id, nama, harga...}
 */
export function tambahProduk(produkBaru) {
    // 1. Ambil State Terkini
    const state = ambilStatePOS();
    
    // 2. Pastikan array produk ada
    if (!state.produk) state.produk = [];
    
    // 3. Masukkan ke paling depan (unshift) biar muncul di atas
    state.produk.unshift(produkBaru);
    
    // 4. Simpan kembali State yang sudah diupdate
    simpanStatePOS(state);
}

/**
 * Mencari produk spesifik berdasarkan ID.
 * @param {String|Number} id 
 */
export function cariProdukById(id) {
    const semua = ambilSemuaProduk();
    // find akan mengembalikan Object produk atau undefined
    return semua.find(p => p.id == id);
}

/**
 * Mengupdate data produk.
 * @param {String} id - ID produk yg mau diedit
 * @param {Object} dataUpdate - Data baru (bisa parsial)
 */
export function perbaruiProdukById(id, dataUpdate) {
    const state = ambilStatePOS();
    
    // Cari indexnya di array
    const index = state.produk.findIndex(p => p.id == id);
    
    if (index !== -1) {
        // Replace data lama dengan gabungan data baru
        // ...state.produk[index] = data lama
        // ...dataUpdate = data baru (menimpa yang lama)
        state.produk[index] = {
            ...state.produk[index],
            ...dataUpdate
        };
        simpanStatePOS(state);
    }
}

/**
 * Menghapus produk.
 * @param {String} id 
 */
export function hapusProdukById(id) {
    const state = ambilStatePOS();
    // Filter: Ambil semua produk yang BUKAN id ini
    state.produk = state.produk.filter(p => p.id != id);
    simpanStatePOS(state);
}
```

---

### Milestone 3: Wrapper Transaksi (`js/db/transactions.js`)

Lakukan hal yang sama untuk Transaksi. Polanya mirip.

**Buat file `js/db/transactions.js`:**

```javascript
import { ambilStatePOS, simpanStatePOS } from './core.js';

export function ambilSemuaTransaksi() {
    const state = ambilStatePOS();
    return state.transaksi || [];
}

export function tambahTransaksi(transaksiBaru) {
    const state = ambilStatePOS();
    if (!state.transaksi) state.transaksi = [];
    
    // Transaksi baru masuk, taruh paling atas
    state.transaksi.unshift(transaksiBaru);
    
    simpanStatePOS(state);
}
```

---

### Milestone 4: Gerbang Database (`js/db/index.js`)

Sama seperti `utils`, kita buat satu pintu masuk.

**Buat file `js/db/index.js`:**

```javascript
// Export semuanya dari core, products, dan transactions
export * from './core.js';
export * from './products.js';
export * from './transactions.js';

// Note: Nanti kita tambah users.js di hari ke-4
```

---

### Milestone 5: Uji Coba Data Seeder (`js/main.js`)

Sekarang saatnya membuktikan "Ingatan" aplikasi kita.
Kita akan buat kode: **Jika database kosong, isi dengan data contoh.**

**Update `js/main.js` (Tambahkan logic ini di dalam/setelah console.log mesin nyala):**

```javascript
import { ambilSemuaProduk, tambahProduk } from './db/index.js';
// ... import utils lainnya ...

// ... kode UI hari 1 boleh dihapus/komentar ...

// LOGIC DATA SEEDER (Data Awal)
// 1. Cek isi gudang sekarang
const produkAda = ambilSemuaProduk();

// 2. Jika kosong melompong (0 barang)
if (produkAda.length === 0) {
    console.log("Database kosong. Melakukan Seeding data awal...");
    
    // 3. Masukkan 3 Produk Contoh
    tambahProduk({
        id: 1,
        name: "Espresso",
        price: 15000,
        category: "Coffee",
        stock: 100,
        image: "https://via.placeholder.com/150"
    });
    
    tambahProduk({
        id: 2,
        name: "Latte",
        price: 20000,
        category: "Coffee",
        stock: 50,
        image: "https://via.placeholder.com/150"
    });
    
     tambahProduk({
        id: 3,
        name: "Croissant",
        price: 12000,
        category: "Bakery",
        stock: 20,
        image: "https://via.placeholder.com/150"
    });
    
    console.log("Seeding Selesai! Refresh halaman untuk melihat hasil.");
} else {
    console.log(`Database siap. Ditemukan ${produkAda.length} produk.`);
    // Tampilkan data di console dulu untuk verifikasi
    console.table(produkAda);
}
```

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| `SyntaxError: Unexpected token ... in JSON at position 0` | String JSON di LocalStorage korup (rusak). Mungkin terpotong atau kosong. | Gunakan `localStorage.clear()` di console lalu refresh. `try-catch` di kode kita sudah menangani ini sebenarnya. |
| Data tidak tersimpan setelah refresh | Lupa memanggil fungsi `simpanStatePOS()`. | Pastikan setiap fungsi `tambah` atau `update` diakhiri dengan `simpanStatePOS`. |
| `QuotaExceededError` | LocalStorage penuh (biasanya 5MB). | Cek apakah ada loop yang memasukkan data jutaan kali? Hapus data lama. |
| ID Produk Kembar | Menggunakan ID manual (1, 2, 3) dan menabrak yang sudah ada. | Gunakan `Date.now()` untuk ID unik sederhana. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: The Inspector 🕵️
1.  Jalankan aplikasi. Pastikan "Seeding Selesai" muncul di Console.
2.  Buka **DevTools** (F12) -> Tab **Application** -> Menu **LocalStorage**.
3.  Cari key `pos_state`.
4.  Copy semua value-nya. Paste di notepad. Lihatlah bentuk JSON aslinya.
    *   Bentuknya seperti: `{"produk":[{"id":3,"name":"Croissant"...}],"transaksi":[],"pengguna":[]}`
5.  Coba **Hapus** key `pos_state` (klik kanan -> delete) dari DevTools.
6.  Refresh halaman. Apa yang terjadi? (Harusnya Seeding jalan lagi).

### Tugas 2: Data Corruption Test 🧪
1.  Di tab **LocalStorage**, edit value `pos_state`.
2.  Hapus kurung kurawal pembuka `{` di awal teks. (Ini membuat JSON rusak/invalid).
3.  Refresh halaman.
4.  Cek Console. Apakah error "Database Corrupt" muncul? (Berkat `try-catch` di `ambilStatePOS`).
5.  Apakah aplikasi tetap jalan (tidak blank putih)?

### Tugas 3: The Resetter 🔴
1.  Buat tombol "RESET DB" sementara di `index.html` atau lewat `main.js`.
2.  Jika diklik, panggil `hapusSemuaData()` dari `db/core.js` lalu `location.reload()`.
3.  Coba klik tombolnya. Pastikan LocalStorage bersih kembali.

---

**Evaluasi Hari 2:**
Jika kamu bisa melihat data JSON di LocalStorage browser dan data tersebut tetap ada setelah refresh, selamat!
Aplikasi kamu sekarang punya "Otak" jangka panjang.

Besok (Hari 3), kita akan belajar **State Management** agar UI bisa otomatis berubah saat Data berubah, tanpa perlu refresh halaman manual. 🧠

*Sampai jumpa di Hari 3!*
