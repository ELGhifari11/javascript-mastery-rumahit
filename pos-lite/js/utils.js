/**
 * ==================================================================================
 * UTILS.JS
 * ==================================================================================
 * File ini berisi kumpulan fungsi bantuan (helper functions) yang sering digunakan
 * di berbagai bagian aplikasi.
 * 
 * Tujuan:
 * 1. Mencegah pengulangan kode (DRY - Don't Repeat Yourself).
 * 2. Membuat kode utama lebih bersih dan mudah dibaca.
 * 3. Menyediakan fungsi standar untuk format uang, tanggal, dan notifikasi.
 * ==================================================================================
 */

// ==================================================================================
// 1. GENERATOR ID UNIK
// ==================================================================================
/**
 * Membuat ID unik secara acak.
 * Digunakan untuk memberi ID pada produk, transaksi, atau pengguna baru.
 * 
 * @returns {string} ID unik (kombinasi huruf dan angka, 6 karakter)
 */
export function buatIdUnik() {
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Huruf yang mungkin muncul
    const angka = '0123456789';                 // Angka yang mungkin muncul
    const gabungan = karakter + angka;          // Gabungkan keduanya
    let hasil = '';

    // Ulangi sebanyak 6 kali untuk membuat 6 karakter
    for (let indeks = 0; indeks < 6; indeks++) {
        // Pilih karakter acak dari 'gabungan'
        const acak = Math.floor(Math.random() * gabungan.length);
        hasil += gabungan.charAt(acak);
    }

    return hasil; // Contoh output: "A7X9B2"
}


// ==================================================================================
// 2. FORMAT MATA UANG (RUPIAH)
// ==================================================================================
/**
 * Mengubah angka biasa menjadi format Rupiah yang rapi.
 * Contoh: 15000 -> "Rp 15.000"
 * 
 * @param {number} jumlahAngka - Angka yang ingin diformat
 * @returns {string} String dalam format mata uang IDR
 */
export function formatKeRupiah(jumlahAngka) {
    // Intl.NumberFormat adalah fitur bawaan JavaScript untuk format angka
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',      // Mode mata uang
        currency: 'IDR',        // Kode mata uang Rupiah
        minimumFractionDigits: 0 // Tidak menampilkan desimal (koma nol)
    }).format(jumlahAngka);
}


// ==================================================================================
// 3. SISTEM NOTIFIKASI (TOAST)
// ==================================================================================
/**
 * Menampilkan pesan notifikasi kecil (toast) di pojok layar.
 * Berguna untuk memberi feedback ke user (sukses/gagal).
 * 
 * @param {string} pesan - Pesan yang ingin ditampilkan
 * @param {string} tipe - 'success' (hijau), 'error' (merah), atau 'info' (biru)
 */
export function tampilkanNotifikasi(pesan, tipe = 'info') {
    const kontainer = document.getElementById('notification-container');

    // Buat elemen div baru untuk notifikasi
    const notifikasi = document.createElement('div');
    notifikasi.className = `notification ${tipe}`; // Tambahkan class sesuai tipe
    notifikasi.textContent = pesan;

    // Masukkan notifikasi ke dalam container di HTML
    kontainer.appendChild(notifikasi);

    // Pasang timer untuk menghapus notifikasi otomatis setelah 3 detik
    setTimeout(() => {
        notifikasi.remove(); // Hapus elemen dari layar
    }, 3000);
}


// ==================================================================================
// 4. MANAJEMEN MODAL (POPUP)
// ==================================================================================
/**
 * Membuka modal (popup) berdasarkan ID-nya.
 * Caranya dengan menghapus class 'hidden' dari elemen modal.
 * 
 * @param {string} idModal - ID elemen modal di HTML
 */
export function bukaModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden'); // Tampilkan modal
    }
}

/**
 * Menutup modal (popup) berdasarkan ID-nya.
 * Caranya dengan menambahkan kembali class 'hidden'.
 * 
 * @param {string} idModal - ID elemen modal di HTML
 */
export function tutupModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden'); // Sembunyikan modal
    }
}


// ==================================================================================
// 5. NAVIGASI HALAMAN (SPA - Single Page Application)
// ==================================================================================
/**
 * Berpindah ke tampilan Dashboard Utama.
 * Menyembunyikan Welcome Screen dan menampilkan App Main.
 */
export function pindahKeTampilanUtama() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('app-main').classList.remove('hidden');
}

/**
 * Berpindah ke tampilan Welcome Screen (Login/Register).
 * Menyembunyikan App Main dan menampilkan Welcome Screen.
 */
export function pindahKeTampilanSelamatDatang() {
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}


// ==================================================================================
// 6. MANIPULASI TEKS
// ==================================================================================
/**
 * Memotong teks jika terlalu panjang dan menambahkan "..." di akhir.
 * Contoh: "Produk Sangat Panjang Sekali" -> "Produk Sangat..."
 * 
 * @param {string} teks - Teks asli
 * @param {number} panjangMaksimal - Jumlah karakter maksimal
 * @returns {string} Teks yang sudah dipotong (jika perlu)
 */
export function potongTeks(teks, panjangMaksimal) {
    if (teks.length > panjangMaksimal) {
        return teks.substring(0, panjangMaksimal) + '...';
    }
    return teks; // Kembalikan asli jika tidak terlalu panjang
}


// ==================================================================================
// 7. FORMAT TANGGAL & WAKTU
// ==================================================================================
/**
 * Mengubah format tanggal ISO menjadi format Indonesia.
 * Contoh: "2023-11-26" -> "26/11/2023"
 */
export function formatTanggal(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return tanggal.toLocaleDateString('id-ID', opsi);
}

/**
 * Mengambil jam dan menit saja.
 * Contoh: "14:30"
 */
export function formatWaktu(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { hour: '2-digit', minute: '2-digit' };
    return tanggal.toLocaleTimeString('id-ID', opsi);
}

/**
 * Format lengkap tanggal dan waktu.
 * Contoh: "26/11/2023, 14:30"
 */
export function formatTanggalWaktu(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return tanggal.toLocaleString('id-ID', opsi);
}


// ==================================================================================
// 8. SISTEM MODAL KUSTOM (PENGGANTI ALERT/CONFIRM/PROMPT)
// ==================================================================================

/**
 * Fungsi internal untuk mereset isi modal generic sebelum ditampilkan.
 * Mengembalikan referensi ke elemen-elemen modal agar mudah diisi.
 */
function resetModalGeneric() {
    const modal = document.getElementById('generic-modal');
    const judulEl = document.getElementById('generic-modal-title');
    const pesanEl = document.getElementById('generic-modal-message');
    const wadahInput = document.getElementById('generic-modal-input-container');
    const inputEl = document.getElementById('generic-modal-input');
    const tombolBatal = document.getElementById('btn-generic-cancel');
    const tombolKonfirmasi = document.getElementById('btn-generic-confirm');
    const tombolTutup = document.getElementById('btn-close-generic');

    // Reset konten ke default
    judulEl.textContent = 'Notifikasi';
    pesanEl.textContent = '';
    wadahInput.classList.add('hidden'); // Sembunyikan input
    inputEl.value = '';
    tombolBatal.classList.add('hidden'); // Sembunyikan tombol batal
    tombolKonfirmasi.textContent = 'OK';

    // PENTING: Kita harus menghapus event listener lama agar tidak menumpuk (double click issue).
    // Caranya dengan meng-clone elemen tombol dan menggantinya dengan yang baru.
    const tombolKonfirmasiBaru = tombolKonfirmasi.cloneNode(true);
    tombolKonfirmasi.parentNode.replaceChild(tombolKonfirmasiBaru, tombolKonfirmasi);

    const tombolBatalBaru = tombolBatal.cloneNode(true);
    tombolBatal.parentNode.replaceChild(tombolBatalBaru, tombolBatal);

    const tombolTutupBaru = tombolTutup.cloneNode(true);
    tombolTutup.parentNode.replaceChild(tombolTutupBaru, tombolTutup);

    // Kembalikan elemen-elemen baru ini untuk dipakai fungsi pemanggil
    return {
        modal,
        judulEl,
        pesanEl,
        wadahInput,
        inputEl,
        tombolBatal: tombolBatalBaru,
        tombolKonfirmasi: tombolKonfirmasiBaru,
        tombolTutup: tombolTutupBaru
    };
}

/**
 * Menampilkan pesan Alert (hanya tombol OK).
 * Pengganti native `alert()`.
 * 
 * @param {string} pesan - Pesan yang ditampilkan
 * @param {string} judul - Judul modal (opsional)
 * @returns {Promise<void>} Promise yang selesai saat user klik OK
 */
export function tampilkanAlert(pesan, judul = 'Info') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();

        // Isi konten
        elemen.judulEl.textContent = judul;
        elemen.pesanEl.textContent = pesan;

        // Event saat tombol OK diklik
        elemen.tombolKonfirmasi.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(); // Beritahu pemanggil bahwa user sudah klik OK
        });

        // Event saat tombol X diklik
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai();
        });

        bukaModal('generic-modal');
    });
}

/**
 * Menampilkan pesan Konfirmasi (Ya / Tidak).
 * Pengganti native `confirm()`.
 * 
 * @param {string} pesan - Pertanyaan untuk user
 * @param {string} judul - Judul modal
 * @returns {Promise<boolean>} TRUE jika klik Ya, FALSE jika klik Batal
 */
export function tampilkanKonfirmasi(pesan, judul = 'Konfirmasi') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();

        elemen.judulEl.textContent = judul;
        elemen.pesanEl.textContent = pesan;

        // Tampilkan tombol batal
        elemen.tombolBatal.classList.remove('hidden');
        elemen.tombolKonfirmasi.textContent = 'Ya'; // Ubah teks tombol OK jadi Ya

        // Jika klik Ya
        elemen.tombolKonfirmasi.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(true); // Kirim TRUE
        });

        // Jika klik Batal
        elemen.tombolBatal.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(false); // Kirim FALSE
        });

        // Jika klik X
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(false); // Kirim FALSE
        });

        bukaModal('generic-modal');
    });
}

/**
 * Menampilkan Input Dialog (User mengetik sesuatu).
 * Pengganti native `prompt()`.
 * 
 * @param {string} pesan - Instruksi untuk user
 * @param {string} nilaiDefault - Nilai awal input
 * @param {string} judul - Judul modal
 * @returns {Promise<string|null>} Teks input user, atau NULL jika batal
 */
export function tampilkanInput(pesan, nilaiDefault = '', judul = 'Input') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();

        elemen.judulEl.textContent = judul;
        elemen.pesanEl.textContent = pesan;

        // Tampilkan input field
        elemen.wadahInput.classList.remove('hidden');
        elemen.inputEl.value = nilaiDefault;

        // Tampilkan tombol batal
        elemen.tombolBatal.classList.remove('hidden');
        elemen.tombolKonfirmasi.textContent = 'OK';

        // Jika klik OK
        elemen.tombolKonfirmasi.addEventListener('click', () => {
            const nilai = elemen.inputEl.value;
            tutupModal('generic-modal');
            selesai(nilai); // Kirim teks yang diketik
        });

        // Jika klik Batal
        elemen.tombolBatal.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(null); // Kirim NULL
        });

        // Jika klik X
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(null);
        });

        bukaModal('generic-modal');

        // Fokus otomatis ke input agar user langsung bisa ketik
        elemen.inputEl.focus();
    });
}
