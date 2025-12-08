/**
 * ==================================================================================
 * UTILS: OTHERS
 * ==================================================================================
 * Alat bantu lain-lain yang tidak masuk kategori khusus.
 */

/**
 * Membuat ID unik secara acak.
 * @returns {string} ID unik (kombinasi huruf dan angka, 6 karakter)
 */
export function buatIdUnik() {
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const angka = '0123456789';
    const gabungan = karakter + angka;
    let hasil = '';

    for (let indeks = 0; indeks < 6; indeks++) {
        const acak = Math.floor(Math.random() * gabungan.length);
        hasil += gabungan.charAt(acak);
    }

    return hasil;
}
