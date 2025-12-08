# HARI 12: Dunia Luar (Async & API)

**Selamat Datang di Dunia Asynchronous!** 📡

Selama ini, kode kita berjalan "Synchronous" (Berurutan). Baris 1 selesai -> Baris 2 jalan.
Tapi saat kita mengambil data dari Internet (Server), kita tidak tahu kapan data itu sampai. Bisa 1 detik, bisa 10 detik.
Kita tidak boleh membuat aplikasi "Macet" (Freeze) saat menunggu.

Hari ini kita belajar konsep paling penting di Web Development Modern: **Event Loop**, **Promise**, dan **Fetch API**.

**Target Hari Ini:**
1.  **Theory:** Memahami bagaimana JS menangani `blocking code` lewat Event Loop.
2.  **Syntax:** Menggunakan **Async/Await** agar kode terlihat rapi.
3.  **Practice:** Simulasi mengambil data dari API External (FakeStoreAPI).

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. The Event Loop 🎡
*Jantung yang membuat JavaScript Non-Blocking.*

JS itu **Single Threaded** (Cuma punya 1 tangan). Dia cuma bisa kerja satu hal dalam satu waktu.
Tapi kenapa dia bisa download file sambil animasi mouse?
Karena dia punya asisten bernama **Web API** (Browser) dan **Callback Queue**.

**Visualisasi Event Loop:**

```mermaid
graph TD
    A[Call Stack (Meja Kerja)] -->|Ada tugas berat? Fetch/Timeout| B[Web API (Asisten)]
    B -->|Tugas Selesai, taruh hasil| C[Callback Queue (Antrian)]
    
    A -->|Meja kosong?| D{Event Loop Check}
    D -->|Ya| C -->|Pindah ke Meja| A
    D -->|Tidak| A
```

1.  `fetch` masuk Call Stack.
2.  JS: "Waduh lama nih, Browser tolong kerjain ya, aku lanjut baris berikutnya." (Pindah ke Web API).
3.  Browser: "Siap."
4.  JS lanjut jalanin kode UI (Makanya gak macet).
5.  5 detik kemudian, data datang. Browser taruh di Queue.
6.  Saat JS nganggur, Event Loop mindahin data dari Queue ke Call Stack.
7.  Callback `then()` jalan.

### 2. Async / Await 🚦
*Syntactic Sugar (Pemanis Syntax).*

Promise itu ribet kalau pakai `.then()` berantai (Callback Hell).
`async/await` membuat kode Asynchronous terbaca seperti Synchronous.

```javascript
// --- CARA LAMA (Promise Chain) ---
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// --- CARA BARU (Modern) ---
async function ambilData() {
    try {
        const res = await fetch(url); // JS "tunggu" di sini (tapi gak freeze)
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
```

---

## BAGIAN 2: 🏗️ Pembangunan Milestones

Kita akan membuat fitur **Import Demo Produk** yang mengambil data dari internet.

### Milestone 1: Modul API (`js/api.js`)

Kita pisahkan logic network di file khusus.

```javascript
/* js/api.js */

const BASE_URL = 'https://fakestoreapi.com';

/**
 * Mengambil data produk dari FakeStoreAPI
 * Mengembalikan array produk yang sudah diformat sesuai DB kita.
 * @returns {Promise<Array>} Array Produk Lokal
 */
export async function ambilProdukDariInternet() {
    console.log("Menghubungi satelit..."); // Debug
    
    try {
        // 1. Kirim Request
        // await = "Tunggu sampai server bales, baru lanjut ke bawah"
        const respon = await fetch(`${BASE_URL}/products?limit=5`);

        // 2. Cek HTTP Status
        // 200 = OK, 404 = Not Found, 500 = Server Error
        if (!respon.ok) {
            throw new Error(`Gagal fetch: ${respon.status} ${respon.statusText}`);
        }

        // 3. Unboxing Body (JSON Parsing)
        // Ini juga butuh waktu (async)
        const dataMentah = await respon.json();
        
        // 4. Transformasi Data (Mapping)
        // API Luar: { title: "Baju", image: "..." }
        // DB Kita: { name: "Baju", image: "..." }
        // Kita harus "terjemahkan" format datanya.
        const produkSiap = dataMentah.map(item => ({
            id: Date.now() + item.id, // Bikin ID unik (Time + ID Asli)
            name: item.title,
            price: Math.round(item.price * 15000), // Kurs USD to IDR
            category: item.category,
            stock: 20, // Default stok karena API gak kasih info stok
            image: item.image
        }));

        return produkSiap;

    } catch (err) {
        // Tangkap error mati lampu / internet putus di sini
        console.error("Error API:", err);
        throw err; // Lempar ulang biar UI tahu kalau gagal
    }
}
```

### Milestone 2: Tombol Import di Produk

Di `js/products/index.js`, kita pasang tombol sakti.

```javascript
import { ambilProdukDariInternet } from '../api.js';
import { tambahProduk } from '../db/index.js';
import { tampilkanNotifikasi, setTombolLoading } from '../utils/index.js'; // Pakai utils UI kemarin

// ... Di render header ...
buatElemen('button', {
    className: 'btn-info', // Style warna biru muda (tambah di css ya)
    style: 'background: #17a2b8; color: white; padding: 10px; border: none; border-radius: 4px; margin-right: 10px;',
    onClick: handleImportData // Panggil fungsi di bawah
}, '🌐 Import Demo Data');

// ... Logic Handler ...
async function handleImportData(e) {
    const tombol = e.target;
    
    // 1. UI Loading State
    setTombolLoading(tombol, true, '🌐 Import Demo Data');

    try {
        // 2. Panggil API (Proses lama...)
        const produkBaru = await ambilProdukDariInternet();
        
        // 3. Simpan ke DB satu per satu
        produkBaru.forEach(p => tambahProduk(p));

        tampilkanNotifikasi(`Berhasil import ${produkBaru.length} produk!`, 'success');
        
        // 4. Refresh Tabel
        renderBarisTabel();

    } catch (error) {
        tampilkanNotifikasi("Gagal import data. Cek koneksi internet!", 'error');
    } finally {
        // 5. Reset Tombol (Apapun yg terjadi, tombol harus balik normal)
        setTombolLoading(tombol, false);
    }
}
```

### Milestone 3: Simulasi Delay (Networking Buatan)

Bagaimana jika internet user lambat? Kita harus tes UX kita.
Di `js/utils/misc.js` (atau utils index), buat fungsi `delay`.

```javascript
/**
 * Menahan waktu selama X milidetik.
 * await delay(2000) -> diem 2 detik.
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

Gunakan di `handleImportData`:
```javascript
// ...
await delay(2000); // Pura-pura lemot 2 detik
const produkBaru = await ambilProdukDariInternet();
// ...
```
Lihat apakah tombol berubah jadi "Loading..." selama 2 detik? Jika ya, UX kamu bagus.

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| `SyntaxError: await is only valid in async function` | Lupa nulis `async` di depan nama fungsi. | Tambahkan `async function nama() {...}`. |
| `Uncaught (in promise) Error` | Promise gagal tapi tidak ada `try-catch`. | Bungkus kode await dengan blok `try { ... } catch (e) { ... }`. |
| Data `undefined` setelah fetch | Lupa `await` saat `.json()`. | Parsing JSON itu asinkronus juga. Pakai `await response.json()`. |
| CORS Error (Merah di Console) | API memblokir akses dari localhost/file. | Gunakan FakeStoreAPI (mereka mengizinkan CORS). |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: Error Handling 404 🚫
Ubah URL di `api.js` jadi `'https://fakestoreapi.com/produk_salah'`.
Coba klik tombol import.
Harusnya yang muncul adalah Notifikasi Merah "Gagal fetch: 404", BUKAN aplikasi crash layar putih.

### Tugas 2: Currency Converter Live 💱
Daripada dikali 15000 manual, coba fetch juga API kurs rupiah gratisan (cari 'free currency api' atau 'frankfurter.app').
Gunakan nilai kurs itu untuk menghitung harga produk.
*Ini tantangan Async berantai: Fetch Kurs -> Tunggu -> Fetch Produk -> Hitung.*

---

**Evaluasi Hari 12:**
Kamu sudah melangkah keluar dari "Kotak Pasir" browser.
Aplikasi kamu sekarang bisa berkomunikasi dengan dunia luar.
Inilah dasar dari **Frontend Engineer** sesungguhnya: Mengelola data yang tidak pasti (Async).

Besok (Hari 13), kita berhenti ngoding fitur baru.
Kita akan **Refactoring**. Kita rapikan semua kode yang berantakan selama 12 hari ini agar siap kerja. 🧹

*Sampai jumpa di Hari 13!*
