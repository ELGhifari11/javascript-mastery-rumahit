/**
 * ==================================================================================
 * LAYOUT.JS
 * ==================================================================================
 * Mengatur navigasi antar tab (Overview, Products, POS, Reports).
 */

import { tampilkanTabelProduk } from './products/index.js';
import { tampilkanKatalogPOS } from './pos/index.js';
import { tampilkanLaporan } from './reports/index.js';
import { muatRingkasanDashboard } from './dashboard/index.js';

/**
 * Menginisialisasi Event Listener untuk Tab Navigasi.
 */
export function inisialisasiNavigasi() {
    const daftarTab = document.querySelectorAll('.tab-btn');
    const daftarSeksi = document.querySelectorAll('.content-section');

    daftarTab.forEach(tab => {
        tab.addEventListener('click', () => {
            const idTarget = tab.getAttribute('data-section');

            // Update UI Tab Active
            daftarTab.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update UI Content
            daftarSeksi.forEach(s => s.classList.remove('active'));
            const seksiTarget = document.getElementById(`section-${idTarget}`);
            if (seksiTarget) seksiTarget.classList.add('active');

            // Conditional Rendering / Refreshing
            // Kita panggil fungsi render dari masing-masing modul
            if (idTarget === 'products') tampilkanTabelProduk();
            if (idTarget === 'pos') tampilkanKatalogPOS();
            if (idTarget === 'reports') tampilkanLaporan();
            if (idTarget === 'overview') muatRingkasanDashboard();
        });
    });
}
