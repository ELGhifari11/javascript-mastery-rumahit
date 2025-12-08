/**
 * ==================================================================================
 * DB: CORE
 * ==================================================================================
 * Berisi Kunci Penyimpanan dan Akses Dasar ke State POS.
 */

export const KUNCI_PENYIMPANAN = {
    PENGGUNA: 'pos_pengguna',
    PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini',
    STATE_POS: 'pos_state'
};

/**
 * Mengambil seluruh data POS (Produk & Transaksi).
 * @returns {Object} Objek berisi array produk dan transaksi
 */
export function ambilStatePOS() {
    const jsonState = localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS);
    if (jsonState) {
        return JSON.parse(jsonState);
    } else {
        return {
            produk: [],
            transaksi: []
        };
    }
}

/**
 * Menyimpan seluruh data POS ke LocalStorage.
 * @param {Object} state - Objek state lengkap
 */
export function simpanStatePOS(state) {
    localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(state));
}
/**
 * Menghapus SELURUH data aplikasi di LocalStorage.
 * Berbahaya! Gunakan dengan hati-hati.
 */
export function hapusSemuaData() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA);
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    localStorage.removeItem(KUNCI_PENYIMPANAN.STATE_POS);
}
