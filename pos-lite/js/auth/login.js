/**
 * ==================================================================================
 * AUTH: LOGIN
 * ==================================================================================
 * Menangani logika "Sign In".
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';

/**
 * Memproses login pengguna.
 * @param {Event} event - Event submit form
 */
export function prosesMasuk(event) {
    event.preventDefault();

    // 1. Ambil data input
    const email = document.getElementById('login-email').value;
    const kataSandi = document.getElementById('login-password').value;

    // 2. Cari data pengguna di penyimpanan
    const pengguna = Penyimpanan.cariPenggunaByEmail(email);

    // 3. Cek kecocokan email dan password
    if (pengguna && pengguna.password === kataSandi) {
        // SUKSES: Simpan sesi login
        Penyimpanan.setPenggunaSaatIni(pengguna);
        Utilitas.tampilkanNotifikasi(`Selamat datang, ${pengguna.name}!`, 'success');

        // Reset form & tutup modal
        document.getElementById('form-login').reset();
        Utilitas.tutupModal('login-modal');

        // Reload halaman agar aplikasi masuk ke mode Dashboard
        window.location.reload();
    } else {
        // GAGAL
        Utilitas.tampilkanNotifikasi('Email atau password salah!', 'error');
    }
}
