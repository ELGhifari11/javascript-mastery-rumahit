
## Masukan md ini ke dalam folder day3 nya ya 
***
# SOAL DAY 3

***
## Soal 1
Buat Catatan Yang Rapih Lengkap Dan Mudah Di pahami pada day 3 ini Yang Pada Setiap Sintaksnya ada Penjelasan Detail nya



## Soal 2 
Kerjakan Soal Latihan ini dengan catatan di dalam viscode dari detail kegunaan dan flownya pada masing masing soal

## If Else

1. **Cek Waktu Shalat**
Buat fungsi `cekWaktuShalat(jam)` yang menerima angka jam (0-23).
Output: "Waktu Subuh" (4-5), "Dzuhur" (12-13), "Ashar" (15-16), "Maghrib" (18-19), "Isya" (19-20), atau "Bukan waktu shalat".
Clue: gunakan if-else bertingkat, `console.log()`.
2. **Validasi Usia Santri Baru**
Buat fungsi `validasiUsia(usia)` yang menerima angka usia.
Output: "Layak mondok" jika usia 12–18, "Tidak layak mondok" selainnya.
Clue: if-else.
3. **Nilai Akhlak Santri**
Fungsi input angka 0-100, output "Akhlak mulia" jika nilai ≥ 85, "Perlu pembinaan" jika < 85.
Clue: if-else.
4. **Perlengkapan Shalat**
Fungsi menerima 3 boolean: pakaiSarung, pakaiKopiah, bawaSajadah.
Output "Siap shalat" jika semua true, tulis item kurang jika ada false, misal "Belum pakai kopiah".
Clue: if else dengan cek boolean.
5. **Cek Izin Keluar Pondok**
Fungsi input string alasan.
Output "Izin diterima" jika alasan "sakit", "keluarga", "prestasi", else "Izin ditolak".
Clue: lower case string dengan `toLowerCase()`, if-else.

***

## Switch

6. **Jadwal Kegiatan Harian**
Fungsi input angka 1-7 (hari Senin sampai Minggu).
Outputkan nama kegiatan utama pesantren di hari tersebut dengan switch-case.
7. **Menu Kantin Santri**
Input angka 1-5, outputkan menu makanan/minuman (1=Nasi Goreng, ..., 5=Aqua Botol).
Clue: switch.
8. **Kode Kamar Asrama**
Input digit pertama kode kamar, keluar nama asrama dengan switch.
9. **Tingkat Pelanggaran**
Input kode 1-4. Output sanksi sesuai kode: 1=Nasihat, 2=Hafalan Taubat, 3=Kerja Sosial, 4=Skors.
10. **Jabatan Pengurus Pondok**
Input jabatan, output tugas utama jabatan menggunakan switch-case.

***

## For Loop

11. **Daftar Santri Hadir**
Input array nama santri, tampilkan semua nama menggunakan for loop dan console.log.
12. **Total Hafalan Mingguan**
Input array jumlah hafalan ayat per hari (7 hari), output total hafalan minggu itu.
13. **Tabel Jadwal Shalat**
Input array jam dan nama shalat, tampilkan tabel di console: "[Jam] - [Shalat]".
14. **Motivasi Santri**
Input angka N, tampilkan "Semangat Santri!" sebanyak N kali.
15. **Pola Bintang Segitiga**
Input N, tampilkan pola segitiga bintang sisi siku kanan sebanyak N baris.

***

## Operator (Aritmatika, Comparison, Logic)

16. **Hitung Zakat**
Input nominal harta santri, hitung zakat 2.5% jika harta ≥ nisab (misal 85 gram emas).
Output jumlah zakat atau "Belum wajib zakat".
Clue: if, operator aritmatika.
17. **Validasi Login Santri**
Input username dan password, bandingkan dengan data tersimpan, output "Login berhasil" atau "Login gagal".
18. **Capaian Hafalan dan Akhlak**
Input jumlah ayat hafalan dan nilai akhlak.
Output "Lulus" jika hafalan ≥ 10 dan akhlak ≥ 80, "Belum Lulus" jika tidak.
19. **Diskon Buku Kitab**
Input usia dan total belanja.
Diskon 10% jika usia < 18 atau belanja > 1 juta, else tidak diskon.
20. **Validasi Password Kompleks**
Input password, valid jika panjang ≥8, ada huruf kapital, huruf kecil, angka.
Clue: string `.length`, `.match()` regex.

***

## Function Sederhana

21. **Jadwal Kajian Rutin**
Function input nama ustadz dan hari, output "Ngaji bersama [ustadz] setiap hari [hari]".
22. **Hitung Luas dan Keliling Lapangan Pesantren**
Input panjang dan lebar, output {luas, keliling} sebagai object.
23. **Konversi Tahun Hijriyah ke Masehi**
Fungsi input tahun hijriyah, output tahun masehi = hijriyah + 622.
24. **Hitung Total Hafalan**
Input array jumlah hafalan harian (angka). Fungsi mengembalikan total hafalan.
25. **Balikkan Nama Santri**
Input string nama, output string dengan urutan karakter terbalik.
Clue: gunakan `split('')`, `reverse()`, dan `join('')`.

***

## Clue Tambahan

- Gunakan `console.log()` untuk output.
- Gunakan `prompt()` (dom/browser) untuk input jika di web.
- Gunakan `toLowerCase()`, `toUpperCase()`, `.length`, `.match()` untuk string.
- Gunakan switch-case untuk pilihan tetap.
- Gunakan `for` untuk iterasi array sederhana.

***

## Soal 3
Kirimkan Link Repo Spesifik pada folder day 3 nya ya pada di folder Catatan Dan Latihannya 