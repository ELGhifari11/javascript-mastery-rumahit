/**
 * ==================================================================================
 * AUTH MODULE (INDEX)
 * ==================================================================================
 * Mengumpulkan semua logika auth (Login, Register, Session) di satu tempat.
 */

import * as Utilitas from '../utils/index.js';
import { prosesMasuk } from './login.js';
import { prosesPendaftaran } from './register.js';
import { keluarkanPengguna } from './session.js';

// Re-export untuk digunakan modul lain
export * from './session.js';

/**
 * Menyiapkan semua Event Listener untuk Auth.
 */
export function inisialisasiAlurAutentikasi() {
    // Tombol Toggle Modal
    const btnShowLogin = document.getElementById('btn-show-login');
    const btnShowReg = document.getElementById('btn-show-register');

    if (btnShowLogin) {
        console.log('Tombol Login ditemukan, memasang listener...');
        btnShowLogin.addEventListener('click', () => {
            console.log('Tombol Login diklik!');
            Utilitas.bukaModal('login-modal');
        });
    } else {
        console.error('Tombol Login TIDAK ditemukan!');
    }

    if (btnShowReg) {
        btnShowReg.addEventListener('click', () => Utilitas.bukaModal('register-modal'));
    }

    // Tombol Close Modal
    document.getElementById('btn-close-login').addEventListener('click', () => Utilitas.tutupModal('login-modal'));
    document.getElementById('btn-close-register').addEventListener('click', () => Utilitas.tutupModal('register-modal'));

    // Link Swap Modal
    document.getElementById('link-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        Utilitas.tutupModal('login-modal');
        Utilitas.bukaModal('register-modal');
    });

    document.getElementById('link-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        Utilitas.tutupModal('register-modal');
        Utilitas.bukaModal('login-modal');
    });

    // Form Submits
    document.getElementById('form-register').addEventListener('submit', prosesPendaftaran);
    document.getElementById('form-login').addEventListener('submit', prosesMasuk);

    // Logout
    document.getElementById('btn-logout').addEventListener('click', keluarkanPengguna);
}
