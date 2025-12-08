/**
 * ==================================================================================
 * DB: USERS
 * ==================================================================================
 * Manajemen data pengguna (Register/Login lookup).
 */

import { KUNCI_PENYIMPANAN } from './core.js';

/**
 * Mengambil daftar semua pengguna.
 */
export function ambilSemuaPengguna() {
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA);
    return jsonPengguna ? JSON.parse(jsonPengguna) : [];
}

/**
 * Menyimpan daftar pengguna.
 */
export function simpanSemuaPengguna(daftarPengguna) {
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA, JSON.stringify(daftarPengguna));
}

/**
 * Mencari pengguna berdasarkan email.
 */
export function cariPenggunaByEmail(email) {
    const daftarPengguna = ambilSemuaPengguna();
    return daftarPengguna.find(pengguna => pengguna.email === email);
}

/**
 * Menambahkan pengguna baru.
 */
export function tambahPengguna(pengguna) {
    const daftarPengguna = ambilSemuaPengguna();
    daftarPengguna.push(pengguna);
    simpanSemuaPengguna(daftarPengguna);
}
