/**
 * FUNGSI: formatKeRupiah
 * Tugas: Mengubah angka polosan 15000 jadi string cantik "Rp 15.000"
 */
export function ubahMataUang(nominal,kodeNegara = 'id-ID',kodeUang = 'IDR') {
    // Intl adalah fitur bawaan browser yang canggih untuk format bahasa
    return new Intl.NumberFormat(kodeNegara, {
        style: 'currency',  // Gaya mata uang
        currency: kodeUang,    // Mata uang Rupiah
        minimumFractionDigits: 0 // Tidak usah pakau ,00 di belakang (ribet)
    }).format(nominal);
}

export const formatDurasi = (detik) => {
    const formatter = new Intl.NumberFormat('id-ID'); // untuk format angka

    const jam = Math.floor(detik / 3600);
    const menit = Math.floor((detik % 3600) / 60);
    const detikSisa = detik % 60;

    return `${formatter.format(jam)} jam ${formatter.format(menit)} menit ${formatter.format(detikSisa)} detik`;
};


