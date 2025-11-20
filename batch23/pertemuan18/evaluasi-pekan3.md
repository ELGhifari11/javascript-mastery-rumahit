<div style="font-family: 'Arial', sans-serif;">

<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

# Soal Evaluasi JS **Pekan 3**

## 🌟 <span style="font-family: 'Traditional Arabic', serif;">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>


## Doa Sebelum Menuntut Ilmu
<span style="font-family: 'Traditional Arabic', serif; font-size: 1.2em;">اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا وَعَلِّمْنَا مَا يَنْفَعُنَا وَزِدْنَا عِلْمًا</span>

<p style="font-family: 'Georgia', serif; font-style: italic;">"Ya Allah, manfaatkanlah ilmu yang telah Engkau ajarkan kepada kami, ajarkanlah kami ilmu yang bermanfaat, dan tambahkanlah kami ilmu."</p>

<span style="font-family: 'Traditional Arabic', serif; font-size: 1.2em;">اللّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً</span>

<p style="font-family: 'Georgia', serif; font-style: italic;">"Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau menjadikan kesulitan itu mudah jika Engkau kehendaki."</p>

***

## <span style="font-family: 'Helvetica', sans-serif;">Memorandum of Understanding Evaluasi Mingguan JavaScript – Pekan 3</span>

### <span style="font-family: 'Helvetica', sans-serif;">Perjanjian Integritas Akademik</span>

**Dengan ini saya menyatakan bahwa:**

1. **Waspada  Artificial Intelligence (AI) & Code Copilot:**
    - Hargai pemahaman anda sejauh ini jangan sampai AI yang ambil alih
    - Ingat client percaya pada kemampuan ANDA, bukan AI
    - Bangun kepercayaan dengan kemampuan autentik!
    - AI **BUKAN** joki ujian! Penggunaan akan mudah terdeteksi
    - **WAJIB menonaktifkan extension AI Copilot** sebelum mulai mengerjakan
    
2. **Larangan Kerjasama dan Plagiarisme:**
    - Dilarang keras menyalin atau mengadaptasi kode dari teman sekelas
    - Setiap jawaban harus hasil pemikiran dan implementasi pribadi
    - Diskusi konsep umum diperbolehkan, namun implementasi harus mandiri

**Pelanggaran terhadap MOU ini akan berakibat pada:**

- 📌 Pengurangan nilai signifikan  
- 📌 Evaluasi ulang dengan tingkat kesulitan lebih tinggi  
- 📌 Pembinaan khusus untuk menguatkan integritas akademik

***

## Waktu Deadline
> **Waktu Pengerjaan**: P1 & P2 Kamis 20 November 2025

***

## Struktur Project (WAJIB)

Project ini berbentuk **1 mini–aplikasi**:

> **“Muslim Daily Dashboard — Jadwal Sholat & Inspirasi Ibadah Harian”**  

Struktur folder/file **WAJIB** mengikuti pola berikut:

```bash
evaluasi-pekan3/
├─ index.html       # Template UI utama (sudah disediakan mentor)
├─ style.css       # Styling utama
├─ main.js         # Entry point (type="module")
└─ modules/
   ├─ api.js
   ├─ prayerSchedule.js
   ├─ inspiration.js
   └─ utils.js
````

**Ketentuan Teknis Wajib:**

* **Dilarang** menulis `<script>` JS langsung di `index.html` selain:

  ```html
  <script type="module" src="./main.js"></script>
  ```

* Semua logika JS ada di:

  * `main.js` (entry point)
  * File-file dalam folder `modules/`

* `index.html` sudah disiapkan sebagai template UI ujian (dashboard MyQuran):

  * Boleh menambah **`id` atau `data-*` attribute** seperlunya
  * **Tidak boleh** merombak desain besar-besaran (layout utama & struktur UI tetap) 

> *Silakan sesuaikan nama folder project dengan aturan pengumpulan panitia.*

---

## 🔗 Ringkasan API yang Digunakan

Seluruh data diambil dari **MyQuran API**. Endpoint utama yang dipakai: 

### Base URL
```JavaScript
const BASE_URL = `https://api.myquran.com/v2/`
```

---

### Endpoint: Pencarian Kota
**URL Lengkap**  
`BASE_URL/sholat/kota/cari/:kota`

**Contoh Permintaan**  
`/sholat/kota/cari/kediri`

***Contoh Response Data:***
``` JSON
{
    "status": true,
    "request": {
        "path": "/sholat/kota/cari/kediri",
        "keyword": "kediri"
    },
    "data": [
        {
            "id": "1609",
            "lokasi": "KAB. KEDIRI"
        },
        {
            "id": "1632",
            "lokasi": "KOTA KEDIRI"
        }
    ]
}
```
---


### Endpoint: Pencarian ID Kota

**URL Lengkap**  
`BASE_URL/sholat/kota/:id`

**Contoh Permintaan**  
`/sholat/kota/1632`

***Contoh Response Data:***
``` JSON
{
    "status": true,
    "request": {
        "path": "/sholat/kota/1632"
    },
    "data": {
        "id": "1632",
        "lokasi": "KOTA KEDIRI"
    }
}
```
----

### Endpoint: Jadwal Sholat Kota Harian

**URL Lengkap**  
`BASE_URL/sholat/jadwal/:kota/:date`

**Format Example**  
1. `/sholat/jadwal/:kota/:tahun/:bulan/:tanggal` 
2. `/sholat/jadwal/:kota/:yyyy-mm-dd`

**Contoh Request:**
1. `/sholat/jadwal/1632/2023/12/25`
2. `/sholat/jadwal/1632/2023-12-25`

***Keterangan:***
- `:kota` diisi dengan angka, 4 digit
- `:tahun` diisi dengan angka, 4 digit
- `:bulan` diisi dengan angka, 1 atau 2 digit.
- `:tanggal` diisi dengan angka, 1 atau 2 digit.

***Contoh Response Data:***
``` JSON
{
    "status": true,
    "request": {
        "path": "/sholat/jadwal/1632/2024/06/23"
    },
    "data": {
        "id": 1632,
        "lokasi": "KOTA KEDIRI",
        "daerah": "JAWA TIMUR",
        "jadwal": {
            "tanggal": "Minggu, 23/06/2024",
            "imsak": "04:13",
            "subuh": "04:23",
            "terbit": "05:41",
            "dhuha": "06:10",
            "dzuhur": "11:38",
            "ashar": "14:57",
            "maghrib": "17:28",
            "isya": "18:42",
            "date": "2024-06-23"
        }
    }
}
```

----

### Endpoint: Jadwal Sholat Kota Bulanan

**URL Lengkap**  
`BASE_URL/sholat/jadwal/:kota/:tahun/:bulan`

**Contoh Permintaan**  
`/sholat/jadwal/1632/2024/06`

**Contoh Response Data:***
``` JSON
{
    "status": true,
    "request": {
        "path": "/sholat/jadwal/1632/2024/06"
    },
    "data": {
        "id": 1632,
        "lokasi": "KOTA KEDIRI",
        "daerah": "JAWA TIMUR",
        "jadwal": [
            {
                "tanggal": "Sabtu, 01/06/2024",
                "imsak": "04:08",
                "subuh": "04:18",
                "terbit": "05:36",
                "dhuha": "06:05",
                "dzuhur": "11:33",
                "ashar": "14:53",
                "maghrib": "17:24",
                "isya": "18:38",
                "date": "2024-06-01"
            },
            ....
````
----

## Endpoint: Ayat Quran Acak

**Contoh Permintaan**  
`BASE_URL/quran/ayat/acak`

**Contoh Response Data:***
``` JSON
{
  "status": true,
  "request": {
    "path": "/quran/ayat/acak"
  },
  "data": {
    "info": {
      "surat": {
        "id": 6,
        "nama": {
          "ar": "الأنعام",
          "id": "Al-An'am"
        },
        "relevasi": "Makkiyyah",
        "ayat_max": 165
      }
    },
    "ayat": {
      "arab": "قُلْ اَرَءَيْتَكُمْ اِنْ اَتٰىكُمْ عَذَابُ اللّٰهِ اَوْ اَتَتْكُمُ السَّاعَةُ اَغَيْرَ اللّٰهِ تَدْعُوْنَۚ اِنْ كُنْتُمْ صٰدِقِيْنَ",
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/829",
      "ayah": "40",
      "hizb": "14",
      "id": "829",
      "juz": "7",
      "latin": "Qul ara'aitakum in atākum ‘ażābullāhi au atatkumus-sā‘atu agairallāhi tad‘ūn(a), in kuntum ṣādiqīn(a).",
      "notes": null,
      "page": "132",
      "surah": "6",
      "text": "Katakanlah (Nabi Muhammad), “Terangkanlah kepadaku (bahwa) jika siksaan Allah sampai kepadamu (di dunia) atau hari Kiamat sampai kepadamu, apakah kamu (tetap) akan menyeru (tuhan) selain Allah, jika kamu (merasa) orang yang benar?”",
      "theme": "228"
    }
  }
}
```

---

## Endpoint: Hadits Arbain Acak

**Contoh Permintaan**  
`BASE_URL/hadits/arbain/acak`

**Contoh Response Data:**
``` JSON
{
  "status": true,
  "request": {
    "path": "/hadits/arbain/acak",
    "id": 11
  },
  "data": {
    "arab": "عَنْ أَبِي مُحَمَّدٍ الحَسَنِ بنِ عَلِيّ بْنِ أَبِيْ طَالِبٍ سِبْطِ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَرَيْحَانَتِهِ رَضِيَ اللهُ عَنْهُمَا قَالَ: حَفِظْتُ مِنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: دَعْ مَا يَرِيْبُكَ إِلَى مَا لاَ يَرِيْبُكَ. رَوَاهُ التِّرْمِذِي وَالنَّسَائِي وَقَالَ التِّرْمِذِيّ: حَدِيْثٌ حَسَنٌ صَحِيْحٌ.",
    "indo": "Dari Abu Muhammad Al Hasan bin ‘Ali bin Abi Thalib radhiyallahu ‘anhuma, cucu kesayangan Rasulullah shallallahu ‘alaihi wa sallam, dia berkata: ‘Aku hafal dari Rasulullah shallallahu ‘alaihi wa sallam: ”Tinggalkanlah sesuatu yang membuatmu ragu, dan kerjakanlah sesuatu yang tidak membuatmu ragu.” (HR. At Tirmidzi dan An Nasa’i. At Tirmidzi berkata: Bahwa hadits ini derajatnya hasan shahih)",
    "judul": "Tinggalkanlah Sesuatu yang Membuatmu Ragu",
    "no": "11"
  }
}
````
## Endpoint: Doa Acak

**Contoh Permintaan**  
`BASE_URL/doa/acak`

**Contoh Response Data:**
``` JSON
{
  "status": true,
  "request": {
    "path": "/doa/acak",
    "id": 10
  },
  "data": {
    "arab": "رَبِّ إِنِّىٓ أَعُوذُ بِكَ أَنْ أَسْـَٔلَكَ مَا لَيْسَ لِى بِهِۦ عِلْمٌ ۖ وَإِلَّا تَغْفِرْ لِى وَتَرْحَمْنِىٓ أَكُن مِّنَ ٱلْخَٰسِرِينَ",
    "indo": "Ya Tuhanku, sesungguhnya aku berlindung kepada Engkau dan memohon kepada Engkau sesuatu yang aku tiada mengetahui (hakikat)nya. Dan sekiranya Engkau tidak memberi ampun kepadaku, dan (tidak) menaruh belas kasihan kepadaku, niscaya aku akan termasuk orang-orang yang merugi.",
    "judul": "Doa Mohon Perlindungan",
    "source": "quran"
  }
}
```
---

## Endpoint: Asmaul Husna Acak 

**Contoh Permintaan**  
`BASE_URL/husna/acak`

**Contoh Response Data:**
``` JSON
{
  "status": true,
  "request": {
    "path": "/husna/acak",
    "id": 18
  },
  "data": {
    "arab": "الْفَتَّاحُ",
    "id": 18,
    "indo": "Yang Maha Pembuka Rahmat",
    "latin": "Al-Fattâhu"
  }
}
```

---


# 🕌 Ujian Evaluasi JavaScript Mastery – Pekan 3



### 🎯 Gambaran Besar Tugas

Kalian diminta membangun:

> **Dashboard Muslim Daily**
> yang menampilkan:
>
> * **Jadwal Sholat Kota tertentu** (harian + bulanan ringkas)
> * **Sholat berikutnya (next prayer)**
> * **Inspirasi harian**:
>
>   * Ayat acak
>   * Hadits Arbain acak
>   * Doa acak
>   * Asmaul Husna acak

UI dasar **sudah disiapkan di `index.html` dan `style.css`**. Tugas utama kalian adalah:

* Menyambungkan UI dengan **API MyQuran**
* Menyusun **struktur file JavaScript modular**
* Melakukan **manipulasi DOM** agar semua data yang tampil **dinamis dari API**

---

## 📌 BAGIAN A – Setup & Modularisasi JavaScript

### A1. Konfigurasi `<script>` Utama

**Tugas:**

1. Pastikan di `index.html` terdapat script berikut sebelum `</body>`:

   ```html
   <script type="module" src="./main.js"></script>
   ```

2. **Tidak boleh** ada script lain (inline / file lain) yang di-`<script>` di dalam `index.html`.

> Semua logika JS harus lewat `main.js` dan module-module di dalam folder `modules/`.

---

### A2. Module `api.js`

**Fungsi utama module ini:**
Menjadi **satu pintu** komunikasi ke API MyQuran.

**Buat file:** `modules/api.js`
Isi dengan fungsi-fungsi berikut:

```js
const BASE_URL = 'https://api.myquran.com/v2/';

export async function searchCity(keyword) {}
export async function getCityById(id) {}
export async function getDailySchedule(cityId, dateString) {}
export async function getMonthlySchedule(cityId, year, month) {}
export async function getRandomAyat() {}
export async function getRandomHaditsArbain() {}
export async function getRandomDoa() {}
export async function getRandomAsmaulHusna() {}
```

**Tugas detail:**

* Setiap fungsi:

  * Melakukan `fetch` ke endpoint yang sesuai
  * Mengecek `res.ok`, kalau tidak → `throw new Error('Pesan yang jelas')`
  * Melakukan `const json = await res.json()`
  * `return json`
* **Tidak** mengembalikan `Response` mentah ke luar module

**Contoh pola (boleh disesuaikan):**

```js
export async function searchCity(keyword) {
  const res = await fetch(`${BASE_URL}sholat/kota/cari/${keyword}`);
  if (!res.ok) throw new Error('Gagal mencari kota');
  return res.json();
}
```

---

### A3. Module `utils.js`

**Buat file:** `modules/utils.js`

Minimal berisi fungsi:

1. `getTodayForApi()`
   👉 Mengembalikan tanggal hari ini format `yyyy-mm-dd` (untuk API).

2. `getTodayForDisplay()`
   👉 Mengembalikan tanggal hari ini format human readable:
   Contoh: `"Kamis, 20/11/2025"`.

3. Fungsi bantu lain (opsional tapi direkomendasikan):

   ```js
   export function padZero(n) {}      // 1 -> "01"
   export function getNextPrayer(jadwalHarian, nowDateObj) {} 
   // mengembalikan nama sholat berikutnya, misal "Dzuhur"
   ```

---

## 🕌 BAGIAN B – Fitur Card “Jadwal Sholat”

Card **Jadwal Sholat** berada di baris pertama (full width) pada UI dashboard. Struktur HTML sudah ada di `index.html`. 

### B1. Module `prayerSchedule.js`

**Buat file:** `modules/prayerSchedule.js`

**Tugas module ini:**

1. **Hubungkan UI Input & Tombol:**

   * Input teks kota: placeholder `Cari kota (contoh: Kediri)…`
   * Tombol `Pilih Lokasi`

2. **Alur saat user klik “Pilih Lokasi”:**

   * Ambil nilai dari input kota → `keyword`
   * Panggil `searchCity(keyword)`
   * Ambil minimal **kota pertama** dari hasil `data` (versi simple)
   * Simpan:

     * `cityId`
     * `lokasi`
   * Panggil `getDailySchedule(cityId, tanggalHariIni)`
   * Update tampilan card harian sesuai data `jadwal`:

     * Ubah tanggal di header:

       * `Hari ini • 00/00/0000` → tanggal hari ini sebenarnya (`getTodayForDisplay()`)
     * Ubah lokasi:

       * `KOTA SAYA — PROVINSI SAYA` → `lokasi` dan `daerah` dari data API harian
     * Ubah isi jam sholat:

       * Imsak, Subuh, Terbit, Dhuha, Dzuhur, Ashar, Maghrib, Isya
         (semua `<div class="prayer-time">…</div>` harus terisi jam asli dari API)

3. **Menentukan “Next Sholat”:**

   * Dari jadwal harian dan jam sekarang:

     * Tentukan sholat apa yang berikutnya (Subuh/Dzuhur/Ashar/Maghrib/Isya)
   * Update:

     * Teks pill `Next`/`Next Sholat`
     * Teks keterangan di bawahnya, minimal menyebut nama sholat berikutnya
       (countdown waktu mundur **bonus**, bukan wajib)

4. **UX minimal:**

   * Saat mencari kota:

     * Boleh menampilkan status kecil: “Mencari kota…” / “Mengambil jadwal…”
   * Saat error (misal kota tidak ditemukan / koneksi gagal):

     * Tampilkan pesan error sederhana (boleh `alert`, boleh teks kecil merah)

---

### B2. Jadwal Bulanan – 4 Minggu

Di bawah jadwal harian, terdapat bagian **Jadwal Bulanan**.
Tugas kalian adalah menjadikan bagian ini **dinamis**.

**Tugas:**

1. Gunakan `getMonthlySchedule(cityId, year, month)` untuk mengambil jadwal 1 bulan penuh.

2. Bagi data tersebut menjadi kurang lebih **4 minggu** (misal per 7 hari).

3. Buat **4 tabel**:

   * Minggu 1
   * Minggu 2
   * Minggu 3
   * Minggu 4

   Masing-masing tabel minimal menampilkan kolom:

   * `Tanggal`
   * `Subuh`
   * `Dzuhur`
   * `Ashar`
   * `Maghrib`
   * `Isya`

4. Kalian boleh:

   * Menghapus tabel dummy yang ada, lalu **generate tabel** dengan JS (`innerHTML`/`DOM createElement`)
   * Atau mengisi tabel yang sudah disediakan mentor secara dinamis

**Output yang diharapkan (gambaran):**

```yaml
minggu_1:
  - { tanggal: "Sabtu, 01/06/2024", subuh: "04:18", dzuhur: "11:33", ashar: "14:53", maghrib: "17:24", isya: "18:38" }
  - { ... }

minggu_2:
  - { ... }
```

(Tampilan tetap berbentuk tabel di UI, bukan YAML.)

---

## 🌙 BAGIAN C – Fitur Card “Inspirasi Ibadah Harian”

Bagian ini adalah card kedua di bawahnya, berisi 4 card kecil:

1. Ayat Hari Ini
2. Hadits Arbain
3. Doa Hari Ini
4. Asmaul Husna

UI sudah ada di `index.html`, lengkap dengan placeholder teks seperti:
`NAMA SURAT • NO AYAT`, `DATA ARABNYA DI SINI`, dll.

### C1. Module `inspiration.js`

**Buat file:** `modules/inspiration.js`

**Tugas:**

1. Ambil referensi tombol **“Refresh ACAK”** di card ini.

2. Saat tombol diklik:

   * Ubah teks tombol menjadi `Loading...` dan disabled (`disabled = true`)

   * Panggil (boleh paralel, boleh satu-satu):

     ```js
     getRandomAyat()
     getRandomHaditsArbain()
     getRandomDoa()
     getRandomAsmaulHusna()
     ```

   * Setelah semua data berhasil:

     * Isi masing-masing card dengan data yang tepat
     * Aktifkan kembali tombol, teks kembali `Refresh ACAK`

3. **Mapping data → UI (minimal):**

   #### Card 1 – Ayat Hari Ini

   Gunakan data dari `quran/ayat/acak`:

   * Judul kecil:

     * `NAMA SURAT • NO AYAT`
       → `info.surat.nama.id` + `ayat.ayah`
   * Teks arab besar:

     * `DATA ARABNYA DI SINI` → `ayat.arab`
   * Terjemah:

     * `DATA ARTINYA DI SINI` → `ayat.text`
   * Footnote:

     * `NO JUZ • NO HALAMAN` → `ayat.juz` dan `ayat.page`

   #### Card 2 – Hadits Arbain

   Data dari `hadits/arbain/acak`:

   * Judul:

     * `judul`
   * Keterangan nomor:

     * `no`
   * Teks arab:

     * `arab`
   * Terjemah:

     * `indo`

   #### Card 3 – Doa Hari Ini

   Data dari `doa/acak`:

   * Judul:

     * `judul`
   * Teks arab:

     * `arab`
   * Terjemah:

     * `indo`

   #### Card 4 – Asmaul Husna

   Data dari `husna/acak`:

   * Judul:

     * `arab` + `latin` (contoh: `الْفَتَّاحُ • Al-Fattāh`)
   * Teks arab besar:

     * `arab`
   * Penjelasan:

     * `indo`

4. **Error handling minimal:**

   * Jika salah satu fetch gagal:

     * Tampilkan pesan error sederhana di panel (boleh 1 teks kecil: “Gagal memuat inspirasi, coba lagi.”)
     * Tombol tetap diaktifkan kembali

---

## 🧠 BAGIAN D – Integrasi di `main.js`

**Buat file:** `main.js`

**Tugas:**

1. Import module-module yang sudah dibuat:

   ```js
   import './modules/prayerSchedule.js';
   import './modules/inspiration.js';
   // import { ... } from './modules/utils.js' jika diperlukan
   ```

2. Jika kalian ingin menyimpan **state global** (misal `cityId` terakhir, kota default, dsb) boleh:

   ```js
   const appState = {
     cityId: null,
     cityName: null,
     // dll...
   };
   ```

   Lalu oper/akses state tersebut dari module lain (opsional).

> Intinya, `main.js` menjadi **pintu masuk**, sedangkan logika utama feature tetap berada di module masing-masing.

---

## ⭐ BAGIAN E – Bonus (Opsional, Nilai Tambah)

Tidak wajib, tapi akan jadi **nilai plus** yang signifikan.

1. **Dropdown Pilihan Kota**

   * Jika `searchCity(keyword)` menghasilkan banyak kota, tampilkan list kota yang bisa dipilih user (bukan otomatis `data[0]`).
   * Contoh: `<select>` berisi `"KOTA KEDIRI"`, `"KAB. KEDIRI"`, dll.

2. **Countdown Real-time “Next Sholat”**

   * Hitung selisih waktu `now` dengan jadwal sholat berikutnya
   * Tampilkan dalam format `HH:MM:SS`
   * Perbarui setiap 1 detik dengan `setInterval`

3. **Local Storage**

   * Simpan `cityId` atau `nama kota` terakhir ke `localStorage`
   * Saat halaman dibuka lagi:

     * Otomatis menggunakan kota terakhir tersebut tanpa perlu search ulang

4. **UX & Error Handling Halus**

   * Alih-alih `alert`, gunakan teks kecil di dalam card (misalnya warna merah lembut)
   * Tampilkan indikator loading kecil di card ketika data sedang diambil

---

## 📏 Kriteria Penilaian

**1) Struktur Project (20%)**

* Struktur folder sesuai ketentuan
* Tidak ada JS inline di `index.html`
* Penggunaan ES Modules (`type="module"`, `import/export`)

**2) Integrasi API & Logika (35%)**

* Endpoint yang ditentukan digunakan dengan benar
* Data dari API tampil dan cocok dengan posisi UI yang seharusnya

**3) Manipulasi DOM & UX (25%)**

* Elemen UI terisi dinamis dari data API
* Interaksi dasar (klik tombol, input kota, refresh acak) berjalan baik
* Error & loading minimal tertangani (tidak “diam saja” saat gagal)

**4) Kerapian Kode & Modular (20%)**

* Nama fungsi & variabel jelas (menggambarkan tugasnya)
* Kode dipisah sesuai tanggung jawab module
* Tidak copy–paste berlebihan, tidak bercampur aduk

---

## ✅ Output Akhir yang Diharapkan

Saat ujian selesai dan project dijalankan di browser:

```yaml
hasil_diharapkan:

  - User bisa mengetik nama kota, klik "Pilih Lokasi"
    → Jadwal sholat hari ini tampil lengkap sesuai kota & tanggal hari ini.

  - Bagian jadwal bulanan menampilkan ringkasan jadwal sholat 1 bulan
    → Dibagi per minggu (4 tabel / 4 blok).

  - Bagian "Next Sholat" menampilkan nama sholat berikutnya.

  - Tombol "Refresh ACAK" pada card Inspirasi Ibadah:
    → Mengambil data baru (Ayat, Hadits Arbain, Doa, Asmaul Husna)
    → Mengubah isi card sesuai data terbaru.
```

---

---

# 🌟 <span style="font-family: 'Traditional Arabic', serif;">مَعَ النَّجَاح فِى الْاِمْتِحَانِ مِنْكُمْ</span> 🌟

---