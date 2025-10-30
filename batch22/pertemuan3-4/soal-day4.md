
## Masukan md ini ke dalam folder day4 nya ya 
***
# SOAL DAY 4

***
## Soal 1
Buat Catatan Yang Rapih Lengkap Dan Mudah Di pahami pada day 3 ini Yang Pada Setiap Sintaksnya ada Penjelasan Detail nya



## Soal 2 
Kerjakan Soal Latihan ini dengan catatan di dalam viscode dari detail kegunaan dan flownya pada masing masing soal
***

### 1. Rekap Absensi Santri Harian

Fungsi: `hitungAbsensi(absensiArr)`

- **Contoh Input:** `["Hadir","Alpa","Izin","Hadir","Hadir"]`
- **Output:** “Hadir: 3 kali, Alpa: 1 kali, Izin: 1 kali. %Hadir: 60%.”
- **Clue:**
    - Validasi array minimal 1 data `do while`
    - Hitung dengan variabel counter dan operator aritmatika
    - Gunakan `for` untuk iterasi, `if` untuk deteksi jenis absensi, `switch` untuk print rekap
    - Tampilkan final dengan `forEach`
    - Return sebagai string deskriptif

***

### 2. Laporan Santri Lulus IT Fundamental

Fungsi: `laporanKelulusan(namaArr, nilaiArr)`

- **Input:** nama = `["Ali","Budi","Cici"]`, nilai = `[78,55,95]`
- **Output:**
“Ali: LULUS (nilai 78)”
“Budi: TIDAK LULUS (nilai 55)”
“Cici: LULUS (nilai 95)”
- **Clue:**
    - Validasi data paralel dengan `do while`
    - Loop dengan `for`
    - Penilaian dengan `if` serta `switch` status
    - Print dengan `forEach`
    - Operator ternary untuk format output

***

### 3. Analisa Hafalan Quran Mingguan

Fungsi: `analisaHafalan(hafalanArr)`

- **Input:** `[10, 8, 14, 15, 12]`
- **Output:**
“Minggu ke-1: 10 ayat, status Cukup. Minggu ke-2: 8 ayat, status Perlu Usaha. ... Rata-rata: 11.8 ayat.”
- **Clue:**
    - Validasi input dengan `while`
    - Loop `for` untuk rekap, `switch` status hasil
    - Operator aritmatika untuk hitung rata-rata
    - Print baris dengan `forEach`
    - Return string

***

### 4. Rekap Usia dan Generasi Santri

Fungsi: `rekapUsia(usiaArr)`

- **Input:** `[11, 16, 22]`
- **Output:**
“Santri 1: Anak-anak (11 th)
Santri 2: Remaja (16 th)
Santri 3: Dewasa (22 th)”
- **Clue:**
    - `do while` validasi tidak ada data negatif
    - Loop `for`
    - Switch label kategori usia
    - Print dengan `forEach`
    - Return sebagai string

***

### 5. Daftar Santri dan Salam Digital

Fungsi: `daftarSalam(namaArr)`

- **Input:** `["Imam","Maya","Rafi"]`
- **Output:**
“Assalamualaikum Imam”, “Assalamualaikum Maya”, “Assalamualaikum Rafi”
- **Clue:**
    - `for` untuk penataan salam
    - `if` untuk deteksi nama pendek dan beri salam unik
    - `while` validasi tidak duplikat
    - `switch` variasi salam jika nama mulai ‘A’
    - Print dengan `forEach`
    - Return string baris-baris

***

### 6. Filter Nilai Santri Digital Class

Fungsi: `filterNilai(namaArr,nilaiArr,batas)`

- **Input:** nama = `["Wahyu","Dina","Umar"]`, nilai = `[92,65,88]`, batas = `80`
- **Output:** “Wahyu \& Umar mendapatkan nilai di atas 80.”
- **Clue:**
    - Loop paralel `for`
    - `while` validasi data
    - `if`, `switch` penentuan peserta
    - Print dengan `forEach`
    - Return string gabungan nama

***

### 7. Rekap Kegiatan Pembinaan IT

Fungsi: `rekapKegiatan(kegiatanArr)`

- **Input:** `["Coding","Ngaji","Coding","Sholat","Ngaji"]`
- **Output:** “Coding 2, Ngaji 2, Sholat 1”
- **Clue:**
    - `do while` validasi minimal 1 kegiatan
    - Loop rekap dan hitung dengan `for`, gunakan switch
    - Print hasil dengan `forEach`
    - Return deskripsi

***

### 8. List Santri Mukim dan Online

Fungsi: `listSantri(statusArr,namaArr)`

- **Input:** status = `["Mukim","Online","Mukim"]`, nama = `["Rini","Ari","Yusuf"]`
- **Output:** “Santri Mukim: Rini, Yusuf | Santri Online: Ari”
- **Clue:**
    - `for` paralel, `if` plus switch klasifikasi
    - `while` validasi min 1 mukim
    - Print dan join dengan `forEach`
    - Return kalimat

***

### 9. Nilai Tertinggi Ujian Tahfidz/IT

Fungsi: `nilaiTertinggi(namaArr, nilaiArr)`

- **Input:** `["Ana","Udin","Kiki"]`, `[77,95,80]`
- **Output:** “Nilai tertinggi Kiki: 95”
- **Clue:**
    - `for` mencari max
    - `while` validasi panjang
    - `if`, `switch` berikan simbol ‘*’ untuk nilai sempurna
    - Print dengan `forEach`
    - Return string

***

### 10. Filter NIS Santri Valid

Fungsi: `filterNIS(nisArr)`

- **Input:** `["123456","765432","1234"]`
- **Output:** “NIS valid: 123456, 765432; NIS invalid: 1234”
- **Clue:**
    - `do while` validasi min length
    - `for` pada data
    - `if`, `switch` classify valid/invalid
    - Output forEach
    - Return string

***

### 11. Akumulasi Partisipasi Kegiatan Mingguan

Fungsi: `totalKegiatan(partArr)`

- **Input:** `[2,3,4,1]`
- **Output:** “Total partisipasi: 10 kali, rata-rata 2.5/hari, max 4, min 1”
- **Clue:**
    - Penjumlahan + for
    - Min/max dengan if/switch
    - `do while` validasi jam minimal
    - Cetak dengan forEach
    - Operator aritmatika
    - Return string

***

### 12. Statistik Jam Belajar IT/Madrasah

Fungsi: `statJam(jamArr)`

- **Input:** `[3,6,2,5]`
- **Output:** “Jam belajar terbanyak 6, tersedikit 2, rata-rata 4”
- **Clue:**
    - `for` loop jumlah
    - `if` min/max
    - `do while` validasi
    - Output forEach
    - Return string

***

### 13. Selisih Hafalan Quran Mingguan

Fungsi: `selisihHafalan(hafalanArr)`

- **Input:** `[5,10,15,12]`
- **Output:** “Minggu 1-2: naik 5 ayat, 2-3: naik 5 ayat, 3-4: turun 3 ayat”
- **Clue:**
    - Loop for dengan pengurangan
    - Switch jika naik/turun
    - Validasi do while
    - Output forEach
    - Return string

***

### 14. Format Guru Berdasarkan Gender

Fungsi: `formatGuru(namaArr,genderArr)`

- **Input:** `["Ahmad","Fatimah"]`, `["L","P"]`
- **Output:** “Ustadz Ahmad; Ustadzah Fatimah”
- **Clue:**
    - for loop paralel
    - switch gender
    - while validasi
    - Output forEach
    - Return string

***

### 15. Rekap Santri Tamat Qur’an

Fungsi: `rekapTamat(khatamArr)`

- **Input:** `[28,30,35,30,29]`
- **Output:** “3 santri telah khatam 30 juz”
- **Clue:**
    - forEach loop
    - if, switch
    - do while validasi
    - Output string

***

### 16. Status Nilai Ujian IT/Madrasah

Fungsi: `statusNilai(nilaiArr)`

- **Input:** `[80,60,75,55]`
- **Output:**
“80: Baik, 60: Cukup, 75: Cukup, 55: Kurang”
- **Clue:**
    - for, forEach
    - if, switch
    - Validasi minimal 1 data dengan do while
    - Return string

***

### 17. Hari Izin/Sakit Mingguan

Fungsi: `hariIzinSakit(statusArr)`

- **Input:** `["Hadir","Izin","Sakit","Hadir","Izin"]`
- **Output:** “Santri izin/sakit pada hari ke-2,3,5”
- **Clue:**
    - for, while
    - if, switch
    - Output string

***

### 18. Validasi NIS

Fungsi: `validasiNIS(nisArr)`

- **Input:** `["123456","654321","54321"]`
- **Output:** “NIS valid: 123456, 654321; NIS invalid: 54321”
- **Clue:**
    - for, if/switch
    - Validasi dengan do while
    - Output string

***

### 19. Kelompokkan Kegiatan Harian

Fungsi: `kelompokKegiatan(arrKegiatan)`

- **Input:** `["Sholat","Ngaji","Olahraga","Coding","Ngaji"]`
- **Output:**
“Ngaji: 2 kali; Sholat: 1 kali; Olahraga: 1 kali; Coding: 1 kali”
- **Clue:**
    - for, switch
    - if
    - Output forEach
    - Return string

***

### 20. Angka Paling Sering Muncul pada Ujian

Fungsi: `angkaSeringMuncul(angkaArr)`

- **Input:** `[1,2,2,3,1,2]`
- **Output:** “Angka 2 muncul paling sering, sebanyak 3 kali”
- **Clue:**
    - forEach cari frekuensi
    - for cari max
    - switch jika frekuensi sama
    - Output string

***

## Soal 3
Kirimkan Link Spesifik Folder pada Reponya ya, Spesifik pada folder day 4 nya ya yag ada isi folder Catatan Dan Latihannya 
