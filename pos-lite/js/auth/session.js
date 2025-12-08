/**
 * ==================================================================================
 * AUTH: SESSION
 * ==================================================================================
 * Menangani sesi login dan logout.
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';

/**
 * Mengeluarkan pengguna dari sistem.
 */
export async function keluarkanPengguna() {
    const dikonfirmasi = await Utilitas.tampilkanKonfirmasi('Apakah Anda yakin ingin logout?', 'Konfirmasi Logout');
    if (dikonfirmasi) {
        Penyimpanan.hapusPenggunaSaatIni();
        window.location.reload();
    }
}

/**
 * Mengecek apakah ada user yang sedang login saat ini.
 * @returns {boolean} TRUE jika sudah login
 */
export function apakahSudahLogin() {
    return Penyimpanan.ambilPenggunaSaatIni() !== null;
}
