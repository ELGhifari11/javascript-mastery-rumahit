/**
 * ==================================================================================
 * STORAGE.JS
 * ==================================================================================
 * File ini bertugas sebagai "Database Sederhana" untuk aplikasi kita.
 * 
 * Karena kita belum menggunakan database server (seperti MySQL/PostgreSQL),
 * kita memanfaatkan fitur browser bernama "LocalStorage".
 * 
 * LocalStorage memungkinkan kita menyimpan data di browser pengguna
 * sehingga data tidak hilang saat halaman di-refresh atau browser ditutup.
 * ==================================================================================
 */

// Kunci (Key) yang digunakan untuk menyimpan data di LocalStorage
const KUNCI_PENYIMPANAN = {
    PENGGUNA: 'pos_pengguna',           // Untuk menyimpan daftar user terdaftar
    PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini', // Untuk menyimpan user yang sedang login
    STATE_POS: 'pos_state'              // Untuk menyimpan data produk dan transaksi
};


// ==================================================================================
// 1. MANAJEMEN PENGGUNA (USER)
// ==================================================================================

/**
 * Mengambil daftar semua pengguna yang terdaftar dari LocalStorage.
 * 
 * @returns {Array} Array berisi objek pengguna. Kosong [] jika belum ada data.
 */
export function ambilSemuaPengguna() {
    // Ambil string JSON dari LocalStorage
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA);

    // Jika ada datanya, ubah dari String JSON kembali ke Objek JavaScript (JSON.parse)
    // Jika tidak ada (null), kembalikan array kosong []
    return jsonPengguna ? JSON.parse(jsonPengguna) : [];
}

/**
 * Menyimpan daftar pengguna ke LocalStorage.
 * Hati-hati: Ini akan menimpa data lama dengan data baru.
 * 
 * @param {Array} daftarPengguna - Array berisi objek pengguna
 */
export function simpanSemuaPengguna(daftarPengguna) {
    // Ubah Objek JavaScript menjadi String JSON (JSON.stringify) sebelum disimpan
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA, JSON.stringify(daftarPengguna));
}

/**
 * Mencari pengguna berdasarkan alamat email.
 * Digunakan saat Login atau Register (cek duplikat).
 * 
 * @param {string} email - Email yang dicari
 * @returns {Object|undefined} Objek pengguna jika ketemu, undefined jika tidak
 */
export function cariPenggunaByEmail(email) {
    const daftarPengguna = ambilSemuaPengguna();
    // .find() adalah fungsi bawaan Array untuk mencari satu item yang cocok
    return daftarPengguna.find(pengguna => pengguna.email === email);
}

/**
 * Menambahkan pengguna baru ke database.
 * 
 * @param {Object} pengguna - Objek pengguna baru
 */
export function tambahPengguna(pengguna) {
    const daftarPengguna = ambilSemuaPengguna(); // Ambil data lama
    daftarPengguna.push(pengguna);               // Tambahkan data baru
    simpanSemuaPengguna(daftarPengguna);         // Simpan kembali
}


// ==================================================================================
// 2. MANAJEMEN SESI (LOGIN/LOGOUT)
// ==================================================================================

/**
 * Menyimpan data pengguna yang sedang login saat ini.
 * 
 * @param {Object} pengguna - Data pengguna yang berhasil login
 */
export function setPenggunaSaatIni(pengguna) {
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI, JSON.stringify(pengguna));
}

/**
 * Mengambil data pengguna yang sedang login (jika ada).
 * 
 * @returns {Object|null} Objek pengguna, atau null jika belum login
 */
export function ambilPenggunaSaatIni() {
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    return jsonPengguna ? JSON.parse(jsonPengguna) : null;
}

/**
 * Menghapus data sesi login (Logout).
 */
export function hapusPenggunaSaatIni() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
}


// ==================================================================================
// 3. STATE POS (DATABASE UTAMA: PRODUK & TRANSAKSI)
// ==================================================================================

/**
 * Mengambil seluruh data POS (Produk & Transaksi).
 * Jika belum ada data sama sekali, akan mengembalikan struktur default.
 * 
 * @returns {Object} Objek berisi array produk dan transaksi
 */
export function ambilStatePOS() {
    const jsonState = localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS);

    if (jsonState) {
        return JSON.parse(jsonState);
    } else {
        // Struktur data awal jika aplikasi baru pertama kali dijalankan
        return {
            produk: [],
            transaksi: []
        };
    }
}

/**
 * Menyimpan seluruh data POS ke LocalStorage.
 * 
 * @param {Object} state - Objek state lengkap
 */
export function simpanStatePOS(state) {
    localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(state));
}


// ==================================================================================
// 4. HELPER PRODUK (CRUD)
// ==================================================================================

/**
 * Mengambil daftar semua produk.
 */
export function ambilSemuaProduk() {
    const state = ambilStatePOS();
    return state.produk || []; // Pastikan selalu mengembalikan array
}

/**
 * Mencari satu produk berdasarkan ID-nya.
 */
export function cariProdukById(id) {
    const daftarProduk = ambilSemuaProduk();
    return daftarProduk.find(produk => produk.id === id);
}

/**
 * Menambahkan produk baru.
 */
export function tambahProduk(produk) {
    const state = ambilStatePOS();

    // Jaga-jaga jika state.produk belum ada (undefined)
    if (!state.produk) state.produk = [];

    state.produk.push(produk);
    simpanStatePOS(state); // Simpan perubahan
}

/**
 * Memperbarui data produk yang sudah ada.
 * 
 * @param {string} id - ID produk yang mau diedit
 * @param {Object} dataBaru - Data perubahan (misal: nama baru, harga baru)
 * @returns {boolean} True jika berhasil, False jika produk tidak ditemukan
 */
export function perbaruiProdukById(id, dataBaru) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];

    // Cari posisi index produk di dalam array
    const indeks = state.produk.findIndex(produk => produk.id === id);

    if (indeks !== -1) {
        // Update data: Gabungkan data lama dengan data baru
        // Operator ... (spread) berguna untuk meng-copy properti objek
        state.produk[indeks] = { ...state.produk[indeks], ...dataBaru };

        simpanStatePOS(state);
        return true;
    }
    return false; // Produk tidak ketemu
}

/**
 * Menghapus produk berdasarkan ID.
 */
export function hapusProdukById(id) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];

    const panjangAwal = state.produk.length;

    // Cara menghapus di Array: Filter item yang ID-nya TIDAK sama dengan ID yang dihapus
    // Hasilnya adalah array baru tanpa item tersebut
    state.produk = state.produk.filter(produk => produk.id !== id);

    simpanStatePOS(state);

    // Cek apakah panjang array berkurang (artinya ada yang terhapus)
    return state.produk.length < panjangAwal;
}


// ==================================================================================
// 5. HELPER TRANSAKSI
// ==================================================================================

/**
 * Mengambil daftar semua riwayat transaksi.
 */
export function ambilSemuaTransaksi() {
    const state = ambilStatePOS();
    return state.transaksi || [];
}

/**
 * Menyimpan transaksi baru.
 */
export function tambahTransaksi(transaksi) {
    const state = ambilStatePOS();
    if (!state.transaksi) state.transaksi = [];

    state.transaksi.push(transaksi);
    simpanStatePOS(state);
}
