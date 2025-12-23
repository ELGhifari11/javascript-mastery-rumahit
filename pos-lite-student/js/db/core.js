/**
 * DB: CORE
 * Jantung dari penyimpanan data kita.
 * Berisi konfigurasi Kunci dan fungsi Low-Level.
 */


// Konstanta Kunci Penyimpanan
// Kita pakai awalan 'pos_' biar tidak bentrok dengan aplikasi lain di localhost.
export const KUNCI_PENYIMPANAN = {
    STATE_POS: 'pos_state', // Gudang Utama (Produk, Transaksi, dll)
    PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini' // Sesi Login (Terpisah biar aman)
};


/**
 * Mengambil seluruh data POS (Produk, Transaksi, User)
 * @returns {Object} Object State lengkap
 */
export function ambilStatePOS() {
    try {
        // 1. Ambil dari gudang
        const jsonState = localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS);
        
        // 2. Jika ada isinya, bongkar (parse) dan kembalikan
        if (jsonState) {
            return JSON.parse(jsonState);
        }

    } catch (err) {
        // Jika JSON rusak, kita log errornya dan kembalikan default
        console.error("Database Corrupt, mereset state...", err.message);
    }
    
    // 3. Jika kosong atau error, kembalikan Data Template Awal (Kosong)
    return {
        produk: [],
        transaksi: [],
        pengguna: [] // List user yang terdaftar
    };
}

/**
 * Menyimpan seluruh data POS ke LocalStorage.
 * Fungsi ini akan menimpa data lama dengan yang baru.
 * @param {Object} state - Object state lengkap yang baru
 */
export function simpanStatePOS(state) {
    try {
        // 1. Packing jadi string
        const stringState = JSON.stringify(state);
        // 2. Simpan
        localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, stringState);
    } catch (err) {
        if (err.name === 'QuotaExceededError') {
             alert("Memori Penuh! Hapus sebagian data.");
        }
        console.error("Gagal menyimpan data:", err);
    }
}

/**
 * Menghapus semua data (FACTORY RESET).
 * Gunakan ini untuk tombol 'Reset Aplikasi'.
 */
export function hapusSemuaData() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.STATE_POS);
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    console.log("Aplikasi di-reset ke pengaturan pabrik.");
}