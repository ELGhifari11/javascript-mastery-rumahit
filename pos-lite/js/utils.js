/**
 * utils.js
 * Berisi fungsi-fungsi bantuan (helpers) yang dipakai di banyak tempat.
 * Tujuannya agar kode utama lebih bersih.
 */

// 1. Buat ID unik sederhana (timestamp + random)
export function buatIdUnik() {
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const angka = '0123456789';
    const gabungan = karakter + angka;
    let hasil = '';
    for (let indeks = 0; indeks < 6; indeks++) {
        hasil += gabungan.charAt(Math.floor(Math.random() * gabungan.length));
    }
    return hasil;
}

// 2. Format angka ke format mata uang (Rupiah)
export function formatKeRupiah(jumlahAngka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(jumlahAngka);
}

// 3. Menampilkan notifikasi (Toast)
export function tampilkanNotifikasi(pesan, tipe = 'info') {
    const kontainer = document.getElementById('notification-container');

    // Buat elemen notifikasi
    const notifikasi = document.createElement('div');
    notifikasi.className = `notification ${tipe}`;
    notifikasi.textContent = pesan;

    // Masukkan ke container
    kontainer.appendChild(notifikasi);

    // Hapus otomatis setelah 3 detik
    setTimeout(() => {
        notifikasi.remove();
    }, 3000);
}

// 4. Buka Modal
export function bukaModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// 5. Tutup Modal
export function tutupModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 6. Pindah ke Tampilan Utama (Dashboard)
export function pindahKeTampilanUtama() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('app-main').classList.remove('hidden');
}

// 7. Pindah ke Tampilan Welcome (Logout)
export function pindahKeTampilanSelamatDatang() {
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// 8. Potong Teks        
export function potongTeks(teks, panjangMaksimal) {
    if (teks.length > panjangMaksimal) {
        return teks.substring(0, panjangMaksimal) + '...';
    }
    return teks;
}

// 9. Format Tanggal
export function formatTanggal(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return tanggal.toLocaleDateString('id-ID', opsi);
}

// 10. Format Waktu
export function formatWaktu(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { hour: '2-digit', minute: '2-digit' };
    return tanggal.toLocaleTimeString('id-ID', opsi);
}

// 11. Format Tanggal dan Waktu
export function formatTanggalWaktu(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return tanggal.toLocaleString('id-ID', opsi);
}

// --- CUSTOM MODAL SYSTEM (Alert, Confirm, Prompt) ---

let modalResolver = null;

function resetGenericModal() {
    const modal = document.getElementById('generic-modal');
    const titleEl = document.getElementById('generic-modal-title');
    const messageEl = document.getElementById('generic-modal-message');
    const inputContainer = document.getElementById('generic-modal-input-container');
    const inputEl = document.getElementById('generic-modal-input');
    const btnCancel = document.getElementById('btn-generic-cancel');
    const btnConfirm = document.getElementById('btn-generic-confirm');

    titleEl.textContent = 'Notification';
    messageEl.textContent = '';
    inputContainer.classList.add('hidden');
    inputEl.value = '';
    btnCancel.classList.add('hidden');
    btnConfirm.textContent = 'OK';

    // Remove old event listeners to prevent stacking
    const newBtnConfirm = btnConfirm.cloneNode(true);
    btnConfirm.parentNode.replaceChild(newBtnConfirm, btnConfirm);

    const newBtnCancel = btnCancel.cloneNode(true);
    btnCancel.parentNode.replaceChild(newBtnCancel, btnCancel);

    const newBtnClose = document.getElementById('btn-close-generic').cloneNode(true);
    document.getElementById('btn-close-generic').parentNode.replaceChild(newBtnClose, document.getElementById('btn-close-generic'));

    return { modal, titleEl, messageEl, inputContainer, inputEl, btnCancel: newBtnCancel, btnConfirm: newBtnConfirm, btnClose: newBtnClose };
}

export function showAlert(message, title = 'Info') {
    return new Promise((resolve) => {
        const els = resetGenericModal();

        els.titleEl.textContent = title;
        els.messageEl.textContent = message;

        els.btnConfirm.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve();
        });

        els.btnClose.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve();
        });

        bukaModal('generic-modal');
    });
}

export function showConfirm(message, title = 'Konfirmasi') {
    return new Promise((resolve) => {
        const els = resetGenericModal();

        els.titleEl.textContent = title;
        els.messageEl.textContent = message;
        els.btnCancel.classList.remove('hidden');
        els.btnConfirm.textContent = 'Ya';

        els.btnConfirm.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve(true);
        });

        els.btnCancel.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve(false);
        });

        els.btnClose.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve(false);
        });

        bukaModal('generic-modal');
    });
}

export function showPrompt(message, defaultValue = '', title = 'Input') {
    return new Promise((resolve) => {
        const els = resetGenericModal();

        els.titleEl.textContent = title;
        els.messageEl.textContent = message;
        els.inputContainer.classList.remove('hidden');
        els.inputEl.value = defaultValue;
        els.btnCancel.classList.remove('hidden');
        els.btnConfirm.textContent = 'OK';

        els.btnConfirm.addEventListener('click', () => {
            const val = els.inputEl.value;
            tutupModal('generic-modal');
            resolve(val);
        });

        els.btnCancel.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve(null);
        });

        els.btnClose.addEventListener('click', () => {
            tutupModal('generic-modal');
            resolve(null);
        });

        bukaModal('generic-modal');
        els.inputEl.focus();
    });
}
