/**
 * ==================================================================================
 * AUTH.JS
 * ==================================================================================
 * File ini mengatur segala hal tentang Autentikasi (Login & Register).
 * 
 * Fitur:
 * 1. Mendaftarkan pengguna baru (Register).
 * 2. Masuk ke sistem (Login).
 * 3. Keluar dari sistem (Logout).
 * 4. Mengecek apakah pengguna sedang login.
 * ==================================================================================
 */

import * as Penyimpanan from './storage.js'; // Import modul penyimpanan
import * as Utilitas from './utils.js';      // Import modul bantuan


// ==================================================================================
// 1. INISIALISASI ALUR AUTENTIKASI
// ==================================================================================
/**
 * Menyiapkan semua Event Listener (pendengar klik) untuk tombol-tombol
 * yang berhubungan dengan login dan register.
 * Dijalankan sekali saat aplikasi mulai.
 */
export function inisialisasiAlurAutentikasi() {

    // --- Tombol di Welcome Screen ---
    const tombolTampilkanLogin = document.getElementById('btn-show-login');
    const tombolTampilkanRegister = document.getElementById('btn-show-register');

    // Jika tombol ada, pasang event listener
    if (tombolTampilkanLogin) {
        tombolTampilkanLogin.addEventListener('click', () => {
            Utilitas.bukaModal('login-modal'); // Buka popup login
        });
    }

    if (tombolTampilkanRegister) {
        tombolTampilkanRegister.addEventListener('click', () => {
            Utilitas.bukaModal('register-modal'); // Buka popup register
        });
    }


    // --- Tombol Close (X) di Modal ---
    document.getElementById('btn-close-login').addEventListener('click', () => {
        Utilitas.tutupModal('login-modal');
    });

    document.getElementById('btn-close-register').addEventListener('click', () => {
        Utilitas.tutupModal('register-modal');
    });


    // --- Link Pindah Antar Modal (Login <-> Register) ---
    // Link "Sign up" di modal Login
    document.getElementById('link-to-register').addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link pindah halaman
        Utilitas.tutupModal('login-modal');
        Utilitas.bukaModal('register-modal');
    });

    // Link "Sign in" di modal Register
    document.getElementById('link-to-login').addEventListener('click', (event) => {
        event.preventDefault();
        Utilitas.tutupModal('register-modal');
        Utilitas.bukaModal('login-modal');
    });


    // --- Submit Form ---
    // Saat form register dikirim
    document.getElementById('form-register').addEventListener('submit', prosesPendaftaran);

    // Saat form login dikirim
    document.getElementById('form-login').addEventListener('submit', prosesMasuk);

    // Saat tombol logout diklik
    document.getElementById('btn-logout').addEventListener('click', keluarkanPengguna);
}


// ==================================================================================
// 2. LOGIKA PENDAFTARAN (REGISTER)
// ==================================================================================
/**
 * Memproses data pendaftaran pengguna baru.
 * 
 * @param {Event} event - Event submit form
 */
function prosesPendaftaran(event) {
    event.preventDefault(); // Mencegah halaman reload otomatis

    // 1. Ambil data dari input field
    const nama = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const kataSandi = document.getElementById('reg-password').value;
    const konfirmasiKataSandi = document.getElementById('reg-confirm-password').value;

    // 2. Validasi: Cek apakah password sama
    if (kataSandi !== konfirmasiKataSandi) {
        Utilitas.tampilkanNotifikasi('Password dan Confirm Password tidak sama!', 'error');
        return; // Berhenti di sini
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
        password: kataSandi, // Catatan: Di aplikasi nyata, password WAJIB di-enkripsi!
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


// ==================================================================================
// 3. LOGIKA MASUK (LOGIN)
// ==================================================================================
/**
 * Memproses login pengguna.
 * 
 * @param {Event} event - Event submit form
 */
function prosesMasuk(event) {
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


// ==================================================================================
// 4. LOGIKA KELUAR (LOGOUT)
// ==================================================================================
/**
 * Mengeluarkan pengguna dari sistem.
 * Menggunakan modal konfirmasi kustom.
 */
export async function keluarkanPengguna() {
    // Tampilkan popup konfirmasi (Tunggu user klik Ya/Tidak)
    const dikonfirmasi = await Utilitas.tampilkanKonfirmasi('Apakah Anda yakin ingin logout?', 'Konfirmasi Logout');

    // Jika user klik 'Ya'
    if (dikonfirmasi) {
        Penyimpanan.hapusPenggunaSaatIni(); // Hapus sesi
        window.location.reload();           // Reload ke welcome screen
    }
}


// ==================================================================================
// 5. CEK STATUS LOGIN
// ==================================================================================
/**
 * Mengecek apakah ada user yang sedang login saat ini.
 * 
 * @returns {boolean} TRUE jika sudah login, FALSE jika belum
 */
export function apakahSudahLogin() {
    return Penyimpanan.ambilPenggunaSaatIni() !== null;
}
