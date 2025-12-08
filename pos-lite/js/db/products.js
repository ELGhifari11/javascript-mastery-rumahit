/**
 * ==================================================================================
 * DB: PRODUCTS
 * ==================================================================================
 * Helper CRUD untuk data Produk.
 */

import { ambilStatePOS, simpanStatePOS } from './core.js';

export function ambilSemuaProduk() {
    const state = ambilStatePOS();
    return state.produk || [];
}

export function cariProdukById(id) {
    const daftarProduk = ambilSemuaProduk();
    return daftarProduk.find(produk => produk.id === id);
}

export function tambahProduk(produk) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];
    state.produk.unshift(produk);
    simpanStatePOS(state);
}

export function perbaruiProdukById(id, dataBaru) {
    const state = ambilStatePOS();
    if (!state.produk) state.produk = [];

    const indeks = state.produk.findIndex(produk => produk.id === id);

    if (indeks !== -1) {
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
    state.produk = state.produk.filter(produk => produk.id !== id);
    simpanStatePOS(state);

    return state.produk.length < panjangAwal;
}
