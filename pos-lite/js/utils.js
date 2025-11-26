/**
 * utils.js
 * Berisi fungsi-fungsi bantuan (helpers) yang dipakai di banyak tempat.
 * Tujuannya agar kode utama lebih bersih.
 */

// 1. Generate ID unik sederhana (timestamp + random)
export function generateId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const combined = chars + numbers;
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += combined.charAt(Math.floor(Math.random() * combined.length));
    }
    return result;
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

// 8. Singkat Charachter        
export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

// 9. Format Tanggal
export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('id-ID', options);
}

// 10. Format Waktu
export function formatTime(dateString) {
    const date = new Date(dateString);
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('id-ID', options);
}

// 11. Format Tanggal dan Waktu
export function formatDateTime(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('id-ID', options);
}
