/**
 * ==================================================================================
 * LIBRARY: STORE (MANAJEMEN DATA)
 * ==================================================================================
 *
 * KONSEP: Wadah Penyimpanan Data Terpusat (Tanpa Class)
 *
 * Mengapa kita butuh ini?
 * Agar data aplikasi (seperti keranjang belanja) bisa diakses dari mana saja
 * dengan mudah dan teratur.
 *
 * Cara Kerjanya:
 * 1. Data: Disimpan dalam satu variabel rahasia.
 * 2. Dengarkan Perubahan: Komponen UI bisa minta dikabari kalau data berubah.
 * 3. Atur Data: Saat kita ubah data, semua yang "mendengarkan" akan dikabari.
 */

/**
 * Membuat wadah penyimpanan data baru.
 * 
 * @param {Object} dataAwal - Data mula-mula yang ingin disimpan
 */
export function buatPenyimpananData(dataAwal = {}) {
    // 1. Simpan data di variabel lokal (Closure / Rahasia)
    let data = dataAwal;

    // 2. Daftar fungsi yang menunggu kabar perubahan (Listeners)
    let daftarPendengar = [];

    /**
     * Mengambil data saat ini (Getter)
     */
    function ambilData() {
        return data;
    }

    /**
     * Mendaftar untuk mendengarkan perubahan (Subscribe)
     * @param {Function} fungsiPendengar - Fungsi yang akan dijalankan saat data berubah
     * @returns {Function} - Fungsi untuk berhenti mendengarkan (Unsubscribe)
     */
    function dengarkanPerubahan(fungsiPendengar) {
        daftarPendengar.push(fungsiPendengar);

        // Return fungsi penghapus (cleanup)
        return () => {
            daftarPendengar = daftarPendengar.filter(f => f !== fungsiPendengar);
        };
    }

    /**
     * Mengubah/Mengupdate data (Setter)
     * @param {Object} dataBaru - Potongan data baru yang mau disimpan
     */
    function aturData(dataBaru) {
        // Gabungkan data lama dengan yang baru
        data = {
            ...data,
            ...dataBaru
        };

        // Kabari semua pendengar bahwa ada data baru
        daftarPendengar.forEach(fungsiPendengar => {
            fungsiPendengar(data);
        });
    }

    // Kembalikan alat-alat untuk mengakses data tersebut
    return {
        ambilData,            // Untuk melihat data
        dengarkanPerubahan,   // Untuk memantau perubahan
        aturData              // Untuk mengubah data
    };
}
