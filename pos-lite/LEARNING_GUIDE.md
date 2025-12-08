# 🎓 Panduan Remedial JS & Persiapan React: POS Lite

Selamat datang di materi remedial sekaligus akselerasi ke React JS. Kita akan membedah aplikasi **POS Lite** yang telah di-refactor menggunakan konsep-konsep modern.

## 🎯 Tujuan Pembelajaran
Project ini bukan sekadar aplikasi kasir biasa. Struktur kodenya sengaja dirancang menyerupai cara kerja **React JS**, namun tetap menggunakan **Vanilla JavaScript**. 

Goal utamanya adalah agar kalian paham:
1.  **State Management**: Bagaimana data dikelola terpusat (Store) dan UI bereaksi otomatis (Reactivity).
2.  **Component-Based UI**: Memecah tampilan menjadi bagian-bagian kecil yang bisa digunakan ulang.
3.  **Declarative vs Imperative**: Pergeseran dari "menyuruh browser" menjadi "mendeskripsikan tampilan".

---

## 📂 Struktur Project Baru

```text
pos-lite/
├── index.html              # Kerangka utama
├── styles.css              # Styling
├── js/
│   ├── main.js             # Pintu masuk aplikasi
│   ├── layout.js           # [BARU] Logika navigasi antar halaman
│   ├── auth/               # [BARU] Folder Autentikasi (Login/Register)
│   ├── dashboard/          # [BARU] Folder Dashboard (Statistik)
│   ├── products/           # [BARU] Folder Produk (CRUD Admin)
│   ├── pos/                # [BARU] Folder Kasir (Logika Belanja)
│   ├── reports/            # [BARU] Folder Laporan
│   ├── db/                 # [BARU] Folder Database (Users, Products, etc)
│   ├── api.js              # Fetch Data Eksternal
│   ├── utils/              # [BARU] Folder Utilitas (DOM, Format, UI, etc)
│   └── lib/
│       └── Store.js        # Sistem State Management
```

---

## 🧠 Konsep 1: State Management (The "Store")

Di kelas basic, kalian mungkin biasa menyimpan data di variabel global atau langsung baca-tulis DOM.
Di React, data disebut **State**. Jika State berubah, UI **harus** berubah automatis.

Kita membuat tiruan _Redux / React Context_ di file `js/lib/Store.js`.

**Analogi:**
- **Store**: Papan pengumuman di tengah kelas.
- **Subscriber (Component)**: Siswa yang melihat papan.
- **Action**: Guru menulis pengumuman baru.
- **Reactivity**: Saat guru menulis, semua siswa otomatis membaca info baru tersebut.

### Cara Pakai di `pos.js`:

```javascript
// 1. Bikin Store
const store = new Store({ total: 0 });

// 2. Subscribe (Dengarkan perubahan)
store.subscribe((state) => {
    console.log("Total berubah jadi:", state.total);
    document.getElementById('total-text').textContent = state.total;
});

// 3. Ubah State
store.setState({ total: 5000 }); 
// Otomatis console.log jalan & teks di layar berubah!
```

---

## 🧩 Konsep 2: Component-Based UI

Di React, kita tidak menulis HTML string panjang-panjang (`innerHTML = '<div>...</div>'`). Kita membuat **Komponen**.

Di `js/utils.js`, kita membuat helper ajaib bernama `el()` yang meniru fungsi `React.createElement()`.

**Perbandingan:**

**Cara Lama ("String Soup"):**
```javascript
div.innerHTML = `
  <div class="card" onclick="beli()">
    <h3>${produk.nama}</h3>
  </div>
`;
// Masalah: Susah pasang event listener yang kompleks, rawan XSS, tidak rapi.
```

**Cara Baru (Component Style):**
```javascript
// js/components/ProductCard.js
export function ProductCard({ produk, onBeli }) {
    return el('div', { className: 'card', onClick: onBeli }, 
        el('h3', {}, produk.nama)
    );
}

// Penggunaan:
const kartu = ProductCard({ produk: data, onBeli: () => ... });
parent.appendChild(kartu);
```

---

## 🚀 Langkah Demi Langkah (A-Z)

### Langkah 1: Pahami `js/utils.js`
Lihat fungsi `el()`. Ini adalah pondasi kita membuat elemen HTML dengan Javascript secara rapi. Pahami bagaimana ia menerima `tag`, `props`, dan `children`.

### Langkah 2: Pahami `js/lib/Store.js`
Ini adalah jantung reaktivitas. Pelajari pola **Observer Pattern** (subscribe/notify). Ini konsep kunci di hampir semua framework modern (React, Vue, Svelte).

### Langkah 3: Bedah `js/components/`
Lihat bagaimana `ProductCard.js` dan `CartItem.js` hanya fokus mereturn elemen UI berdasarkan data (props) yang diterima. Mereka "bodoh" (stateless), tidak tahu menahu soal database atau logic rumit.

### Langkah 4: Pahami Komponen UI
Lihat `js/components/`. Kita membuat fungsi untuk membuat elemen HTML (mirip React Component):
- `KartuProduk({ product })`: Membuat tampilan kartu produk.
- `ItemKeranjang({ item })`: Membuat tampilan baris item di keranjang.
Mereka menggunakan helper `buatElemen` dari `js/utils/dom.js` agar kodenya lebih rapi daripada `document.createElement` manual yang panjang.

### Langkah 5: Rakit di `js/pos/index.js`
Logic utama kasir sekarang ada di `js/pos/index.js`. Di sini kita gabungkan semuanya:
1.  Inisialisasi `Store`.
2.  `store.subscribe()` untuk me-render ulang keranjang.

### Langkah 6: Pahami State Management (Manajemen Data)
Lihat `js/lib/Store.js`. Kita menggunakan **Factory Function** dengan **Closure** (bukan Class) untuk membuat "Wadah Data".
- `buatPenyimpananData(dataAwal)`: Membuat kotak penyimpanan baru.
- `data`: Variabel rahasia (private) yang menyimpan data.
- `dengarkanPerubahan`: Cara komponen mendaftar agar dikabari kalau data berubah.
- `aturData`: Cara mengubah data. Saat data berubah, semua yang "mendengarkan" akan dipanggil.


---

## ⚠️ Tantangan & Latihan

Untuk memastikan kalian paham sebelum masuk React:

1.  **Coba buat komponen baru**: `BadgeStok.js` yang menampilkan label "Stok Habis" (merah) atau "Tersedia" (hijau), lalu pakai di dalam `ProductCard`.
2.  **Tambahkan State baru**: Coba tambahkan `diskon` di Store, dan hitung total harga setelah diskon.

Selamat belajar! Ini adalah jembatan emas menuju React JS. Kuasai pola ini, dan React akan terasa sangat mudah.
