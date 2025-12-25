
import { ambilStatePOS, simpanStatePOS } from './core.js';


export const myProduct = [
    {
        nama: "Kopi Susu Gula Aren",
        harga: 18000,
        kategori: "Minuman",
    },
    {
        nama: "Es Teh Manis",
        harga: 8000,
        kategori: "Minuman",
    },
    {
        nama: "Air Mineral",
        harga: 5000,
        kategori: "Minuman",
    },
    // --- Produk Minuman Baru ---
    {
        nama: "Jus Alpukat",
        harga: 22000,
        kategori: "Minuman",
    },
    {
        nama: "Kopi Hitam Americano",
        harga: 15000,
        kategori: "Minuman",
    },
    // ---------------------------

    {
        nama: "Nasi Goreng Spesial",
        harga: 25000,
        kategori: "Makanan",
    },
    {
        nama: "Mie Ayam Bakso",
        harga: 20000,
        kategori: "Makanan",
    },
    // --- Produk Makanan Baru ---
    {
        nama: "Sate Ayam Lengkap",
        harga: 35000,
        kategori: "Makanan",
    },
    {
        nama: "Capcay Kuah Seafood",
        harga: 30000,
        kategori: "Makanan",
    },
    // ---------------------------
    
    {
        nama: "Roti Bakar Coklat",
        harga: 15000,
        kategori: "Snack",
    },
    {
        nama: "Kentang Goreng",
        harga: 12000,
        kategori: "Snack",
    },
    // --- Produk Snack Baru ---
    {
        nama: "Pisang Goreng Keju",
        harga: 18000,
        kategori: "Snack",
    },
    {
        nama: "Tahu Crispy",
        harga: 10000,
        kategori: "Snack",
    },
    // ---------------------------
];



/**
 * Mengambil hanya daftar produk.
 * @returns {Array} Array of Products
 */
export function ambilSemuaProduk() {
    const state = ambilStatePOS();
    // Safety check: kalau state.produk undefined, kembalikan array kosong
    return state.produk || []; 
}

/**
 * Menambah produk baru ke database.
 * @param {Object} produkBaru - Object produk {id, nama, harga...}
 */
export function tambahProduk(produkBaru) {
    // 1. Ambil State Terkini
    const state = ambilStatePOS();
    
    // 2. Pastikan array produk ada
    if (!state.produk) state.produk = [];
    
    // 3. Masukkan ke paling depan (unshift) biar muncul di atas
    state.produk.unshift(produkBaru);
    
    // 4. Simpan kembali State yang sudah diupdate
    simpanStatePOS(state);
}

/**
 * Mencari produk spesifik berdasarkan ID.
 * @param {String|Number} id 
 */
export function cariProdukById(id) {
    const semua = ambilSemuaProduk();
    // find akan mengembalikan Object produk atau undefined
    return semua.find(p => p.id == id);
}

/**
 * Mengupdate data produk.
 * @param {String} id - ID produk yg mau diedit
 * @param {Object} dataUpdate - Data baru (bisa parsial)
 */
export function perbaruiProdukById(id, dataUpdate) {
    const state = ambilStatePOS();
    
    // Cari indexnya di array
    const index = state.produk.findIndex(p => p.id == id);
    
    if (index !== -1) {
        // Replace data lama dengan gabungan data baru
        // ...state.produk[index] = data lama
        // ...dataUpdate = data baru (menimpa yang lama)
        state.produk[index] = {
            ...state.produk[index],
            ...dataUpdate
        };
        simpanStatePOS(state);
    }
}

/**
 * Menghapus produk.
 * @param {String} id 
 */
export function hapusProdukById(id) {
    const state = ambilStatePOS();
    // Filter: Ambil semua produk yang BUKAN id ini
    state.produk = state.produk.filter(p => p.id != id);
    simpanStatePOS(state);
}