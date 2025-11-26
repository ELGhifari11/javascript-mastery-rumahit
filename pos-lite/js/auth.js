/**
 * auth.js
 * Mengatur alur pendaftaran (Register), masuk (Login), dan keluar (Logout).
 */

import * as Penyimpanan from './storage.js';
import * as Utilitas from './utils.js';

// --- INISIALISASI ---

export function inisialisasiAlurAutentikasi() {
    // Event Listener untuk Tombol di Welcome Screen
    const tombolTampilkanLogin = document.getElementById('btn-show-login');
    const tombolTampilkanRegister = document.getElementById('btn-show-register');

    if (tombolTampilkanLogin) {
        tombolTampilkanLogin.addEventListener('click', () => {
            Utilitas.bukaModal('login-modal');
        });
    }

    if (tombolTampilkanRegister) {
        tombolTampilkanRegister.addEventListener('click', () => {
            Utilitas.bukaModal('register-modal');
        });
    }

    // Event Listener untuk Tombol Close di Modal
    document.getElementById('btn-close-login').addEventListener('click', () => {
        Utilitas.tutupModal('login-modal');
    });

    document.getElementById('btn-close-register').addEventListener('click', () => {
        Utilitas.tutupModal('register-modal');
    });

    // Event Listener untuk Link Switch antar Modal
    document.getElementById('link-to-register').addEventListener('click', (event) => {
        event.preventDefault();
        Utilitas.tutupModal('login-modal');
        Utilitas.bukaModal('register-modal');
    });

    document.getElementById('link-to-login').addEventListener('click', (event) => {
        event.preventDefault();
        Utilitas.tutupModal('register-modal');
        Utilitas.bukaModal('login-modal');
    });

    // Event Listener untuk Submit Form
    document.getElementById('form-register').addEventListener('submit', prosesPendaftaran);
    document.getElementById('form-login').addEventListener('submit', prosesMasuk);
    document.getElementById('btn-logout').addEventListener('click', keluarkanPengguna);
}

// --- HANDLER LOGIKA ---

function prosesPendaftaran(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil value dari input
    const nama = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const kataSandi = document.getElementById('reg-password').value;
    const konfirmasiKataSandi = document.getElementById('reg-confirm-password').value;

    // Validasi sederhana
    if (kataSandi !== konfirmasiKataSandi) {
        Utilitas.tampilkanNotifikasi('Password dan Confirm Password tidak sama!', 'error');
        return;
    }

    // Cek apakah email sudah terdaftar
    const penggunaYangAda = Penyimpanan.cariPenggunaByEmail(email);
    if (penggunaYangAda) {
        Utilitas.tampilkanNotifikasi('Email sudah terdaftar! Silakan login.', 'error');
        return;
    }

    // Buat object pengguna baru
    const penggunaBaru = {
        id: Utilitas.buatIdUnik(),
        name: nama,
        email: email,
        password: kataSandi, // Note: Di real app, password HARUS di-hash!
        createdAt: new Date().toISOString()
    };

    // Simpan ke storage
    Penyimpanan.tambahPengguna(penggunaBaru);

    // Beri notifikasi sukses
    Utilitas.tampilkanNotifikasi('Registrasi berhasil! Silakan login.', 'success');

    // Reset form dan pindah ke login modal
    document.getElementById('form-register').reset();
    Utilitas.tutupModal('register-modal');
    Utilitas.bukaModal('login-modal');
}

function prosesMasuk(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const kataSandi = document.getElementById('login-password').value;

    // Cari pengguna
    const pengguna = Penyimpanan.cariPenggunaByEmail(email);

    // Cek validitas
    if (pengguna && pengguna.password === kataSandi) {
        // Login sukses
        Penyimpanan.setPenggunaSaatIni(pengguna);
        Utilitas.tampilkanNotifikasi(`Selamat datang, ${pengguna.name}!`, 'success');

        // Reset form & tutup modal
        document.getElementById('form-login').reset();
        Utilitas.tutupModal('login-modal');

        // Refresh halaman atau update UI agar masuk ke dashboard
        // Kita reload halaman agar state bersih dan inisialisasiAplikasi berjalan ulang
        window.location.reload();
    } else {
        // Login gagal
        Utilitas.tampilkanNotifikasi('Email atau password salah!', 'error');
    }
}

export async function keluarkanPengguna() {
    const confirmed = await Utilitas.showConfirm('Apakah Anda yakin ingin logout?', 'Konfirmasi Logout');
    if (confirmed) {
        Penyimpanan.hapusPenggunaSaatIni();
        window.location.reload(); // Reload ke welcome screen
    }
}

// Cek apakah ada pengguna yang login
export function apakahSudahLogin() {
    return Penyimpanan.ambilPenggunaSaatIni() !== null;
}
