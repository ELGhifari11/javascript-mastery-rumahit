/**
 * ==================================================================================
 * AUTH: REGISTER
 * ==================================================================================
 * Menangani logika "Sign Up" / Pendaftaran.
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';

/**
 * Memproses data pendaftaran pengguna baru.
 * @param {Event} event - Event submit form
 */
export function prosesPendaftaran(event) {
    event.preventDefault();

    // 1. Ambil data dari input field
    const nama = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const kataSandi = document.getElementById('reg-password').value;
    const konfirmasiKataSandi = document.getElementById('reg-confirm-password').value;

    // 2. Validasi: Cek apakah password sama
    if (kataSandi !== konfirmasiKataSandi) {
        Utilitas.tampilkanNotifikasi('Password dan Confirm Password tidak sama!', 'error');
        return;
    }

    // 3. Validasi: Cek apakah email sudah dipakai
    const penggunaYangAda = Penyimpanan.cariPenggunaByEmail(email);
    if (penggunaYangAda) {
        Utilitas.tampilkanNotifikasi('Email sudah terdaftar! Silakan login.', 'error');
        return;
    }

    // 4. Buat objek pengguna baru
    const penggunaBaru = {
        id: Utilitas.buatIdUnik(),
        name: nama,
        email: email,
        password: kataSandi,
        createdAt: new Date().toISOString()
    };

    // 5. Simpan ke LocalStorage
    Penyimpanan.tambahPengguna(penggunaBaru);

    // 6. Beri feedback sukses
    Utilitas.tampilkanNotifikasi('Registrasi berhasil! Silakan login.', 'success');

    // 7. Bersihkan form dan pindah ke login
    document.getElementById('form-register').reset();
    Utilitas.tutupModal('register-modal');
    Utilitas.bukaModal('login-modal');
}
