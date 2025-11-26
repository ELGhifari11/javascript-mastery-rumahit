/**
 * storage.js
 * Berisi semua logika untuk menyimpan dan mengambil data dari localStorage.
 * Bertindak sebagai "Database" sederhana.
 */

const KUNCI_PENYIMPANAN = {
    PENGGUNA: 'pos_pengguna',
    PENGGUNA_SAAT_INI: 'pos_pengguna_saat_ini',
    STATE_POS: 'pos_state'
};

// --- MANAJEMEN PENGGUNA ---

// Ambil semua pengguna
export function ambilSemuaPengguna() {
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA);
    return jsonPengguna ? JSON.parse(jsonPengguna) : [];
}

// Simpan semua pengguna (timpa data)
export function simpanSemuaPengguna(daftarPengguna) {
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA, JSON.stringify(daftarPengguna));
}

// Cari pengguna berdasarkan email
export function cariPenggunaByEmail(email) {
    const daftarPengguna = ambilSemuaPengguna();
    return daftarPengguna.find(pengguna => pengguna.email === email);
}

// Tambah pengguna baru
export function tambahPengguna(pengguna) {
    const daftarPengguna = ambilSemuaPengguna();
    daftarPengguna.push(pengguna);
    simpanSemuaPengguna(daftarPengguna);
}

// Set pengguna yang sedang login
export function setPenggunaSaatIni(pengguna) {
    localStorage.setItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI, JSON.stringify(pengguna));
}

// Ambil pengguna yang sedang login
export function ambilPenggunaSaatIni() {
    const jsonPengguna = localStorage.getItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
    return jsonPengguna ? JSON.parse(jsonPengguna) : null;
}

// Hapus sesi pengguna (Logout)
export function hapusPenggunaSaatIni() {
    localStorage.removeItem(KUNCI_PENYIMPANAN.PENGGUNA_SAAT_INI);
}

// --- STATE POS (PRODUK & TRANSAKSI) ---

// Ambil state POS (jika kosong, return struktur default)
export function ambilStatePOS() {
    const jsonState = localStorage.getItem(KUNCI_PENYIMPANAN.STATE_POS);
    if (jsonState) {
        return JSON.parse(jsonState);
    } else {
        // State default jika belum ada data
        return {
            produk: [],
            transaksi: []
        };
    }
}

// Simpan state POS
export function simpanStatePOS(state) {
    localStorage.setItem(KUNCI_PENYIMPANAN.STATE_POS, JSON.stringify(state));
}

// --- HELPER PRODUK ---

export function ambilSemuaProduk() {
    const state = ambilStatePOS();
    return state.produk || [];
}

export function simpanSemuaProduk(daftarProduk) {
    const state = ambilStatePOS();
    state.produk = daftarProduk || [];
    simpanStatePOS(state);
}

export function cariProdukById(id) {
    const daftarProduk = ambilSemuaProduk();
    return daftarProduk.find(produk => produk.id === id);
}

export function tambahProduk(produk) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];
    state.produk.push(produk);
    simpanStatePOS(state);
}

export function perbaruiProdukById(id, dataBaru) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];
    const indeks = state.produk.findIndex(produk => produk.id === id);

    if (indeks !== -1) {
        // Gabungkan data lama dengan data baru
        state.produk[indeks] = { ...state.produk[indeks], ...dataBaru };
        simpanStatePOS(state);
        return true;
    }
    return false;
}

export function hapusProdukById(id) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];
    const panjangAwal = state.produk.length;

    // Filter produk yang ID-nya BUKAN id yang mau dihapus
    state.produk = state.produk.filter(produk => produk.id !== id);

    simpanStatePOS(state);
    return state.produk.length < panjangAwal; // Return true jika ada yang terhapus
}

// --- HELPER TRANSAKSI ---

export function ambilSemuaTransaksi() {
    const state = ambilStatePOS();
    return state.transaksi || [];
}

export function tambahTransaksi(transaksi) {
    const state = ambilStatePOS();
    if (!state.transaksi) state.transaksi = [];
    state.transaksi.push(transaksi);
    simpanStatePOS(state);
}
