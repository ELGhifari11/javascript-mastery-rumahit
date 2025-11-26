/**
 * utils.js
 * Berisi fungsi-fungsi bantuan (helpers) yang dipakai di banyak tempat.
 * Tujuannya agar kode utama lebih bersih.
 */

// 1. Generate ID unik sederhana (timestamp + random)
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// 2. Format angka ke format mata uang (Rupiah)
export function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// 3. Menampilkan notifikasi (Toast)
export function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');

    // Buat elemen notifikasi
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = message;

    // Masukkan ke container
    container.appendChild(notif);

    // Hapus otomatis setelah 3 detik
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// 4. Buka Modal
export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// 5. Tutup Modal
export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 6. Pindah ke Tampilan Utama (Dashboard)
export function switchToMainAppView() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('app-main').classList.remove('hidden');
}

// 7. Pindah ke Tampilan Welcome (Logout)
export function switchToWelcomeView() {
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}
