/**
 * ==================================================================================
 * UTILS: FORMAT
 * ==================================================================================
 * Alat bantu format teks, angka, tanggal, waktu.
 */

/**
 * Mengubah angka biasa menjadi format Rupiah yang rapi.
 * Contoh: 15000 -> "Rp 15.000"
 */
export function formatKeRupiah(jumlahAngka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(jumlahAngka);
}

/**
 * Memotong teks jika terlalu panjang dan menambahkan "..." di akhir.
 */
export function potongTeks(teks, panjangMaksimal) {
    if (teks.length > panjangMaksimal) {
        return teks.substring(0, panjangMaksimal) + '...';
    }
    return teks;
}

/**
 * Mengubah format tanggal ISO menjadi format Indonesia.
 */
export function formatTanggal(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return tanggal.toLocaleDateString('id-ID', opsi);
}

/**
 * Mengambil jam dan menit saja.
 */
export function formatWaktu(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const opsi = { hour: '2-digit', minute: '2-digit' };
    return tanggal.toLocaleTimeString('id-ID', opsi);
}

/**
 * Format lengkap tanggal dan waktu.
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
