/**
 * main.js
 * Entry Point aplikasi.
 * Dijalankan saat browser selesai memuat halaman.
 */

import * as Autentikasi from './auth.js';
import * as POS from './pos.js';
import * as Utilitas from './utils.js';
import * as Penyimpanan from './storage.js';

// Fungsi utama inisialisasi
function inisialisasiAplikasi() {
    console.log('POSLite App Initializing...');

    // 1. Setup Alur Autentikasi (Event listeners untuk login/register)
    Autentikasi.inisialisasiAlurAutentikasi();

    // 2. Cek Status Login
    if (Autentikasi.apakahSudahLogin()) {
        // Jika pengguna sudah login
        const pengguna = Penyimpanan.ambilPenggunaSaatIni();
        console.log('User logged in:', pengguna.name);

        // Update UI nama pengguna
        document.getElementById('user-display-name').textContent = pengguna.name;

        // Pindah ke Dashboard
        Utilitas.pindahKeTampilanUtama();

        // Inisialisasi Logika POS
        POS.inisialisasiAplikasiPOS();
    } else {
        // Jika belum login
        console.log('User not logged in. Showing welcome screen.');
        Utilitas.pindahKeTampilanSelamatDatang();
    }
}

// Jalankan inisialisasiAplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', inisialisasiAplikasi);
