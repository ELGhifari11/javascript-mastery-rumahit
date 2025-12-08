/**
 * ==================================================================================
 * DB: SESSION
 * ==================================================================================
 * Manajemen sesi login aktif.
 */

import { KUNCI_PENYIMPANAN } from './core.js';

export function setPenggunaSaatIni(pengguna) {
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI, JSON.stringify(pengguna));
}

export function ambilPenggunaSaatIni() {
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    return jsonPengguna ? JSON.parse(jsonPengguna) : null;
}

export function hapusPenggunaSaatIni() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
}
