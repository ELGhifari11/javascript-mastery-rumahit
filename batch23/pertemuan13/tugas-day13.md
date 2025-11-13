<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

<div style="font-family: 'Arial', sans-serif;">

# Soal Tugas Day 1 Pekan 2 Bulan 2 

### 1. Export dan Import Fungsi

### **Soal 1: Kasir Warung**

**Tugas:** Buat sistem kasir sederhana untuk menghitung total belanja

**Contoh Pattern (Kalkulator Matematika):**

```javascript
// math.js
export default function tambahAngka(angka1, angka2) {
    return angka1 + angka2;
}

// app.js  
import tambahAngka from './math.js';
console.log(tambahAngka(5, 3)); // Output: 8
```

**Yang Harus Dikerjakan:**

- `kasir.js` - berisi function untuk menghitung total dari array harga
- `main.js` - import function dan test
- **Requirement:** Export DEFAULT function `hitungTotal`, gunakan `reduce()`
- **Test data:** `[15000, 25000, 8000, 12000]` → Expected: `60000`

***

### **Soal 2: Data Mahasiswa**

**Tugas:** Buat pengolah data mahasiswa untuk mengambil informasi spesifik

**Contoh Pattern (Data Pegawai):**

```javascript
// pegawai.js
export const ambilNamaPegawai = (pegawai) => pegawai.nama;
export const ambilGaji = (pegawai) => pegawai.gaji;

// app.js
import { ambilNamaPegawai, ambilGaji } from './pegawai.js';
const karyawan = {nama: "Budi", gaji: 5000000};
console.log(ambilNamaPegawai(karyawan)); // "Budi"
```

**Yang Harus Dikerjakan:**

- `mahasiswa.js` - export NAMED functions: `ambilNama`, `ambilNIM`, `ambilJurusan`
- `main.js` - import dan test ketiga function
- **Test data:** `{nama: "Sari Dewi", nim: "2024001", jurusan: "Informatika", ipk: 3.8}`

***

### **Soal 3: Sistem Poin Game**

**Tugas:** Buat kalkulator poin game dengan konstanta batas

**Contoh Pattern (Kalkulator Suhu):**

```javascript
// suhu.js
export default function konversiCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
export const TITIK_BEKU = 0;
export const TITIK_DIDIH = 100;

// app.js
import konversi, { TITIK_BEKU } from './suhu.js';
console.log(konversi(32)); // 0
console.log("Titik beku:", TITIK_BEKU); // 0
```

**Yang Harus Dikerjakan:**

- `game.js` - DEFAULT export function `hitungTotalPoin`, NAMED exports konstanta
- **Requirement:** `POIN_MAKSIMAL = 1000`, `POIN_BONUS = 50`
- **Test data:** `[200, 150, 300, 180, 120]` → Expected: `950`

***

### **Soal 4: Kontak WhatsApp**

**Tugas:** Buat pengolah kontak dengan import alias

**Contoh Pattern (Data Alamat):**

```javascript
// alamat.js
export const bagi = (alamatLengkap) => alamatLengkap.split(', ');
export const satukan = (jalan, kota) => jalan + ', ' + kota;

// rumah.js
import { bagi as pecahAlamat, satukan as gabungAlamat } from './alamat.js';
console.log(pecahAlamat("Jl. Merdeka, Jakarta")); // ["Jl. Merdeka", "Jakarta"]
```

**Yang Harus Dikerjakan:**

- `kontak.js` - export functions `pisah`, `gabung`
- `whatsapp.js` - import dengan alias: `pisah as pisahNamaKontak`, `gabung as gabungDataKontak`
- **Test:** Pisah nama, gabung dengan data telepon

***

### **Soal 5: Perpustakaan Pribadi**

**Tugas:** Buat utilitas untuk koleksi buku dengan export object

**Contoh Pattern (Utilitas Mobil):**

```javascript
// mobil.js
export default {
    hitungBBM: (jarak, konsumsi) => jarak / konsumsi,
    cariMerek: (daftarMobil, merek) => daftarMobil.find(m => m.merek === merek),
    mobilMewah: (daftarMobil) => daftarMobil.filter(m => m.harga > 500000000)
};

// garage.js
import mobilUtils from './mobil.js';
console.log(mobilUtils.hitungBBM(100, 15)); // 6.67
```

**Yang Harus Dikerjakan:**

- `buku.js` - export DEFAULT object dengan 3 function
- Functions: `hitungJumlah`, `cariBuku`, `bukuTebal`
- **Test:** Array buku dengan properti judul, pengarang, halaman

***

## 🔥 **LEVEL MEDIUM (6-10)**

### **Soal 6: Toko Online Sederhana**

**Tugas:** Buat sistem pencarian produk dengan re-export

**Contoh Pattern (Pencarian Film):**

```javascript
// film/cari.js
export const cariFilm = (daftarFilm, genre) => daftarFilm.find(f => f.genre === genre);

// film/index.js
export { cariFilm } from './cari.js';

// bioskop.js
import { cariFilm } from './film/index.js';
const hasil = cariFilm([{judul: "Avatar", genre: "Action"}], "Action");
```

**Yang Harus Dikerjakan:**

- Struktur: `toko/pencarian.js` → `toko/index.js` → `main.js`
- Function `cariProduk` dengan re-export pattern
- **Test:** Cari produk dengan keyword "laptop"

***

### **Soal 7: Restoran Menu**

**Tugas:** Buat sistem sorting menu dengan re-export dan rename

**Contoh Pattern (Urutkan Nilai):**

```javascript
// nilai/urutkan.js
export const proses = (daftarNilai) => daftarNilai.sort((a, b) => b - a);

// nilai/index.js  
export { proses as urutkanTertinggi } from './urutkan.js';

// sekolah.js
import { urutkanTertinggi } from './nilai/index.js';
console.log(urutkanTertinggi([80, 90, 75])); // [90, 80, 75]
```

**Yang Harus Dikerjakan:**

- `menu/urutkan.js` export generic function `proses`
- `menu/index.js` re-export sebagai `urutkanBerdasarkanHarga`
- **Test:** Sort menu berdasarkan harga termurah

***

### **Soal 8: Validasi Formulir**

**Tugas:** Buat validator dengan namespace import

**Contoh Pattern (Cek Cuaca):**

```javascript
// cuaca.js
export const cekHujan = (kondisi) => kondisi === "hujan";
export const cekPanas = (suhu) => suhu > 30;
export const cekAngin = (kecepatan) => kecepatan > 20;

// ramalan.js
import * as Cuaca from './cuaca.js';
console.log(Cuaca.cekPanas(35)); // true
console.log(Cuaca.cekHujan("cerah")); // false
```

**Yang Harus Dikerjakan:**

- `validator.js` export: `cekEmail`, `cekTelepon`, `cekUsia`
- `form.js` import dengan namespace: `import * as Validator`
- **Test:** Email "@", telepon "08", usia >= 17

***

### **Soal 9: Counter Kunjungan Website**

**Tugas:** Buat counter dengan closure dan mixed import

**Contoh Pattern (Generator ID):**

```javascript
// id.js
export default function buatGeneratorID() {
    let counter = 1000;
    return function() {
        return "ID-" + (++counter);
    };
}
export const PREFIX = "ID";
export const START_NUMBER = 1000;

// sistem.js
import buatGenerator from './id.js';
import { PREFIX } from './id.js';
import { START_NUMBER as mulaiDari } from './id.js';
```

**Yang Harus Dikerjakan:**

- `counter.js` DEFAULT export closure + NAMED constants
- `website.js` import dengan 3 style berbeda
- **Test:** Counter bertambah setiap pemanggilan

***

### **Soal 10: Absensi Sekolah**

**Tugas:** Buat sistem absensi dengan re-export chain

**Contoh Pattern (Status Pemesanan):**

```javascript
// pesanan/update.js
export const ubahStatus = (pesanan) => ({...pesanan, status: "diproses"});

// pesanan/index.js
export { ubahStatus } from './update.js';

// toko/kelola.js  
export { ubahStatus as prosesOrder } from '../pesanan/index.js';

// main.js
import { prosesOrder } from './toko/kelola.js';
```

**Yang Harus Dikerjakan:**

- Chain: `absensi/catat.js` → `absensi/index.js` → `sekolah/kelas.js` → `main.js`
- Function tambahkan `{status: "hadir", waktu: "08:00"}`

***

## 🚀 **LEVEL ADVANCED (11-15)**

### **Soal 11: Pengelola Keuangan Rumah Tangga**

**Tugas:** Buat kalkulator keuangan dengan wildcard export

**Contoh Pattern (Utilitas Teks):**

```javascript
// teks/format.js
export const kapital = (str) => str.toUpperCase();
export const kecil = (str) => str.toLowerCase();

// teks/hitung.js
export const jumlahKata = (str) => str.split(' ').length;
export const jumlahHuruf = (str) => str.length;

// teks/index.js
export * from './format.js';
export * from './hitung.js';

// editor.js
import { kapital, kecil, jumlahKata } from './teks/index.js';
```

**Yang Harus Dikerjakan:**

- Struktur: `keuangan/pendapatan.js`, `keuangan/pengeluaran.js`, `keuangan/index.js`
- `index.js` gunakan wildcard export untuk semua
- **Test:** Hitung total pendapatan vs pengeluaran

***

### **Soal 12: Editor Foto Sederhana**

**Tugas:** Buat photo editor dengan mixed wildcard + named re-export

**Contoh Pattern (Pengolah Audio):**

```javascript
// audio/efek.js
export const bass = (audio) => ({...audio, bass: +10});
export const treble = (audio) => ({...audio, treble: +5});
export default function fadeIn(audio) { return {...audio, fade: "in"}; }

// audio/index.js
export * from './efek.js';
export { default as tambahFade } from './efek.js';

// studio.js
import { bass, treble, tambahFade } from './audio/index.js';
```

**Yang Harus Dikerjakan:**

- `foto/filter.js` multiple named + 1 default export
- `foto/index.js` wildcard + named re-export dengan alias
- **Test:** Edit array foto dengan berbagai filter

***

### **Soal 13: Booking Lapangan Futsal**

**Tugas:** Buat sistem booking dengan complex alias chain

**Contoh Pattern (Status Barang):**

```javascript
// barang/cek.js
export const periksaStok = (barang, jumlah) => barang.stok >= jumlah;

// barang/index.js
export { periksaStok as cekKetersediaan } from './cek.js';

// toko/inventori.js  
export { cekKetersediaan as validasiStok } from '../barang/index.js';

// kasir.js
export { validasiStok as cekBarang } from './toko/inventori.js';
```

**Yang Harus Dikerjakan:**

- Chain 4+ level dengan alias berbeda setiap level
- Function cek ketersediaan jadwal
- **Track:** `cekJadwal` → `cekSlot` → `cariWaktu` → `booking`

***

### **Soal 14: Kasir Minimarket**

**Tugas:** Buat sistem kasir dengan namespace + re-export combo

**Contoh Pattern (Pengolah Data):**

```javascript
// hitung/operasi.js
export const tambah = (a, b) => a + b;
export const kali = (a, b) => a * b;

// hitung/index.js
import * as Matematika from './operasi.js';
export { Matematika };
export * from './operasi.js';
export { tambah as plus } from './operasi.js';

// kalkulator.js
import { Matematika, kali, plus } from './hitung/index.js';
// Bisa pakai: Matematika.tambah() atau langsung plus()
```

**Yang Harus Dikerjakan:**

- Multiple calculation modules dengan namespace import
- Kombinasi: namespace access + direct import
- **Functions:** subtotal, pajak, diskon, kembalian

***

### **Soal 15: E-Learning Platform**

**Tugas:** Ultimate challenge - buat mini platform belajar online

**Contoh Structure (Sistem Perpustakaan):**

```javascript
// perpus/buku/katalog.js
export const tambahBuku = (buku) => ({...buku, id: Date.now()});

// perpus/anggota/profil.js  
export default function buatAnggota(nama) { return {nama, pinjaman: []}; }

// perpus/pinjam/transaksi.js
export const pinjamBuku = (anggota, buku) => ({
    ...anggota, 
    pinjaman: [...anggota.pinjaman, buku]
});
```

**Yang Harus Dikerjakan:**

- Struktur: `platform/siswa/`, `platform/kursus/`, `platform/nilai/`
- ✅ 8+ files dengan complex dependencies
- ✅ SEMUA pattern: default, named, wildcard, namespace, alias, chains
- ✅ Demo workflow: daftar → enroll → nilai → report
- **Expected:** Complete e-learning system berjalan tanpa error

***

## 🎯 **Panduan Pengerjaan**

**Pattern Reference:**

- **Default:** `export default function` → `import namaFunction from`
- **Named:** `export const` → `import { namaFunction } from`
- **Mixed:** Kombinasi default + named dalam satu file
- **Alias:** `import { nama as alias } from`
- **Namespace:** `import * as Nama from`
- **Re-export:** `export { function } from './file.js'`
- **Wildcard:** `export * from './file.js'`

**Setiap contoh menggunakan pattern yang sama tapi context berbeda - tidak memberikan jawaban langsung!** 🎯

