/**
 * ==================================================================================
 * MAIN.JS
 * ==================================================================================
 * Ini adalah Pintu Masuk (Entry Point) dari aplikasi kita.
 * File ini yang pertama kali dijalankan saat browser selesai memuat halaman.
 * 
 * Tugasnya:
 * 1. Menghubungkan semua modul (Auth, POS, Utils, Storage).
 * 2. Mengecek apakah pengguna sudah login atau belum.
 * 3. Mengarahkan pengguna ke halaman yang tepat (Login atau Dashboard).
 * ==================================================================================
 */

import * as Autentikasi from './auth.js';
import * as POS from './pos.js';
import * as Utilitas from './utils.js';
import * as Penyimpanan from './storage.js';


// ==================================================================================
// FUNGSI UTAMA (INITIALIZATION)
// ==================================================================================
/**
 * Fungsi ini dijalankan otomatis saat aplikasi dibuka.
 */
function inisialisasiAplikasi() {
    console.log('Memulai Aplikasi POSLite...');

    // 1. Siapkan sistem Autentikasi (Pasang event listener tombol login/register)
    Autentikasi.inisialisasiAlurAutentikasi();

    // 2. Cek Status Login Pengguna
    if (Autentikasi.apakahSudahLogin()) {
        // --- JIKA SUDAH LOGIN ---

        // Ambil data user dari penyimpanan
        const pengguna = Penyimpanan.ambilPenggunaSaatIni();
        console.log(`User terdeteksi: ${pengguna.name}`);

        // Tampilkan nama user di pojok kanan atas
        document.getElementById('user-display-name').textContent = pengguna.name;

        // Pindah tampilan ke Dashboard Utama
        Utilitas.pindahKeTampilanUtama();

        // Jalankan logika utama POS (Produk, Keranjang, dll)
        POS.inisialisasiAplikasiPOS();

    } else {
        // --- JIKA BELUM LOGIN ---
        console.log('User belum login. Menampilkan halaman Welcome.');

        // Pastikan user berada di Welcome Screen
        Utilitas.pindahKeTampilanSelamatDatang();
    }
}

// ==================================================================================
// EVENT LISTENER UTAMA
// ==================================================================================
// Tunggu sampai seluruh HTML selesai dimuat, baru jalankan inisialisasiAplikasi
document.addEventListener('DOMContentLoaded', inisialisasiAplikasi);
