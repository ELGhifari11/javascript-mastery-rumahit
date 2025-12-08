/**
 * ==================================================================================
 * UTILS: NAV
 * ==================================================================================
 * Helper navigasi halaman (SPA switcher).
 */

export function pindahKeTampilanUtama() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('app-main').classList.remove('hidden');
}

export function pindahKeTampilanSelamatDatang() {
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}
