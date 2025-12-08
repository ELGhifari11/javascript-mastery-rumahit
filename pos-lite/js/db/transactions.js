/**
 * ==================================================================================
 * DB: TRANSACTIONS
 * ==================================================================================
 * Helper untuk riwayat transaksi.
 */

import { ambilStatePOS, simpanStatePOS } from './core.js';

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
