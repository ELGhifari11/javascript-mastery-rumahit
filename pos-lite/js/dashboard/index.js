/**
 * ==================================================================================
 * DASHBOARD MODULE
 * ==================================================================================
 * Menangani tampilan halaman Overview (Ringkasan).
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';

export function muatRingkasanDashboard() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const daftarTransaksi = Penyimpanan.ambilSemuaTransaksi();
    let totalOmzet = daftarTransaksi.reduce((sum, t) => sum + t.totalPrice, 0);

    document.getElementById('stat-total-products').textContent = daftarProduk.length;
    document.getElementById('stat-total-transactions').textContent = daftarTransaksi.length;
    document.getElementById('stat-total-revenue').textContent = Utilitas.formatKeRupiah(totalOmzet);
}
