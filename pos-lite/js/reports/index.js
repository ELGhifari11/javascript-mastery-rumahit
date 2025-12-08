/**
 * ==================================================================================
 * REPORTS MODULE
 * ==================================================================================
 * Menangani tampilan Riwayat Transaksi.
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';

export function tampilkanLaporan() {
    const tr = Penyimpanan.ambilSemuaTransaksi();
    const tbody = document.getElementById('transactions-tbody');
    tbody.innerHTML = '';

    if (!tr.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">No Transactions</td></tr>';
        return;
    }

    // Tampilkan data urut dari yang terbaru (reverse)
    const dataTerbalik = [...tr].reverse();

    dataTerbalik.forEach(t => {
        const row = document.createElement('tr');
        const items = t.items.map(i => `${i.name} (${i.qty})`).join(', ');

        row.innerHTML = `
            <td>${Utilitas.formatTanggalWaktu(t.createdAt)}</td>
            <td><small>${t.id}</small></td>
            <td>${items}</td>
            <td><strong>${Utilitas.formatKeRupiah(t.totalPrice)}</strong></td>
        `;
        tbody.appendChild(row);
    });
}
