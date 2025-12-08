/**
 * ==================================================================================
 * MAIN.JS
 * ==================================================================================
 * Pintu Masuk (Entry Point) Aplikasi.
 * Menyatukan semua fitur modular: Auth, Dashboard, Products, POS, Reports, Layout.
 */

import * as Autentikasi from './auth/index.js';
import * as Penyimpanan from './db/index.js';
import * as Utilitas from './utils/index.js';
import { inisialisasiNavigasi } from './layout.js';
import { muatRingkasanDashboard } from './dashboard/index.js';
import { aturEventProduk, sembunyikanFormProduk, muatProdukDemoOtomatis, tampilkanTabelProduk } from './products/index.js';
import { inisialisasiPOSFeature, tampilkanKatalogPOS } from './pos/index.js';

function inisialisasiAplikasi() {
    console.log('Memulai Aplikasi POSLite...');

    // 1. Siapkan Autentikasi
    Autentikasi.inisialisasiAlurAutentikasi();

    // Event Listener untuk Tombol Reset Data
    const btnReset = document.getElementById('btn-reset-app');
    if (btnReset) {
        btnReset.addEventListener('click', async () => {
            const konfirmasi = await Utilitas.tampilkanKonfirmasi(
                'Apakah Anda yakin ingin menghapus SEMUA data? Ini tidak bisa dibatalkan.',
                'Reset Aplikasi'
            );

            if (konfirmasi) {
                Penyimpanan.hapusSemuaData();
                Utilitas.tampilkanAlert('Data berhasil dihapus. Halaman akan dimuat ulang.');
                window.location.reload();
            }
        });
    }

    // 2. Cek Login
    if (Autentikasi.apakahSudahLogin()) {
        const pengguna = Penyimpanan.ambilPenggunaSaatIni();
        document.getElementById('user-display-name').textContent = pengguna.name;

        // Pindah ke Dashboard
        Utilitas.pindahKeTampilanUtama();

        // 3. Inisialisasi Fitur-Fitur
        inisialisasiNavigasi();
        inisialisasiPOSFeature();
        aturEventProduk();

        // 4. Muat Data Awal
        // Cek jika produk kosong, muat demo data otomatis
        const produkAda = Penyimpanan.ambilSemuaProduk();
        if (produkAda.length === 0) {
            muatProdukDemoOtomatis().then(() => {
                muatRingkasanDashboard();
                tampilkanTabelProduk(); // Refresh table admin if active
            });
        } else {
            muatRingkasanDashboard();
            tampilkanTabelProduk();
        }

    } else {
        Utilitas.pindahKeTampilanSelamatDatang();
    }
}

document.addEventListener('DOMContentLoaded', inisialisasiAplikasi);
