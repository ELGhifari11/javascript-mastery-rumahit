/**
 * auth.js
 * Mengatur alur pendaftaran (Register), masuk (Login), dan keluar (Logout).
 */

import * as Storage from './storage.js';
import * as Utils from './utils.js';

// --- INITIALIZATION ---

export function initAuthFlow() {
    // Event Listener untuk Tombol di Welcome Screen
    const btnShowLogin = document.getElementById('btn-show-login');
    const btnShowRegister = document.getElementById('btn-show-register');

    if (btnShowLogin) {
        btnShowLogin.addEventListener('click', () => {
            Utils.openModal('login-modal');
        });
    }

    if (btnShowRegister) {
        btnShowRegister.addEventListener('click', () => {
            Utils.openModal('register-modal');
        });
    }

    // Event Listener untuk Tombol Close di Modal
    document.getElementById('btn-close-login').addEventListener('click', () => {
        Utils.closeModal('login-modal');
    });

    document.getElementById('btn-close-register').addEventListener('click', () => {
        Utils.closeModal('register-modal');
    });

    // Event Listener untuk Link Switch antar Modal
    document.getElementById('link-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        Utils.closeModal('login-modal');
        Utils.openModal('register-modal');
    });

    document.getElementById('link-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        Utils.closeModal('register-modal');
        Utils.openModal('login-modal');
    });

    // Event Listener untuk Submit Form
    document.getElementById('form-register').addEventListener('submit', handleRegisterSubmit);
    document.getElementById('form-login').addEventListener('submit', handleLoginSubmit);
    document.getElementById('btn-logout').addEventListener('click', logoutUser);
}

// --- LOGIC HANDLERS ---

function handleRegisterSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil value dari input
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    // Validasi sederhana
    if (password !== confirmPassword) {
        Utils.showNotification('Password dan Confirm Password tidak sama!', 'error');
        return;
    }

    // Cek apakah email sudah terdaftar
    const existingUser = Storage.findUserByEmail(email);
    if (existingUser) {
        Utils.showNotification('Email sudah terdaftar! Silakan login.', 'error');
        return;
    }

    // Buat object user baru
    const newUser = {
        id: Utils.generateId(),
        name: name,
        email: email,
        password: password, // Note: Di real app, password HARUS di-hash!
        createdAt: new Date().toISOString()
    };

    // Simpan ke storage
    Storage.addUser(newUser);

    // Beri notifikasi sukses
    Utils.showNotification('Registrasi berhasil! Silakan login.', 'success');

    // Reset form dan pindah ke login modal
    document.getElementById('form-register').reset();
    Utils.closeModal('register-modal');
    Utils.openModal('login-modal');
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Cari user
    const user = Storage.findUserByEmail(email);

    // Cek validitas
    if (user && user.password === password) {
        // Login sukses
        Storage.setCurrentUser(user);
        Utils.showNotification(`Selamat datang, ${user.name}!`, 'success');

        // Reset form & tutup modal
        document.getElementById('form-login').reset();
        Utils.closeModal('login-modal');

        // Refresh halaman atau update UI agar masuk ke dashboard
        // Kita reload halaman agar state bersih dan initApp berjalan ulang
        window.location.reload();
    } else {
        // Login gagal
        Utils.showNotification('Email atau password salah!', 'error');
    }
}

export function logoutUser() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        Storage.clearCurrentUser();
        window.location.reload(); // Reload ke welcome screen
    }
}

// Cek apakah ada user yang login
export function isAuthenticated() {
    return Storage.getCurrentUser() !== null;
}
