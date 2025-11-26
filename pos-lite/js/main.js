/**
 * main.js
 * Entry Point aplikasi.
 * Dijalankan saat browser selesai memuat halaman.
 */

import * as Auth from './auth.js';
import * as Pos from './pos.js';
import * as Utils from './utils.js';
import * as Storage from './storage.js';

// Fungsi utama inisialisasi
function initApp() {
    console.log('POSLite App Initializing...');

    // 1. Setup Auth Flow (Event listeners untuk login/register)
    Auth.initAuthFlow();

    // 2. Cek Status Login
    if (Auth.isAuthenticated()) {
        // Jika user sudah login
        const user = Storage.getCurrentUser();
        console.log('User logged in:', user.name);

        // Update UI nama user
        document.getElementById('user-display-name').textContent = user.name;

        // Pindah ke Dashboard
        Utils.switchToMainAppView();

        // Init POS Logic
        Pos.initPosApp();
    } else {
        // Jika belum login
        console.log('User not logged in. Showing welcome screen.');
        Utils.switchToWelcomeView();
    }
}

// Jalankan initApp saat DOM siap
document.addEventListener('DOMContentLoaded', initApp);
