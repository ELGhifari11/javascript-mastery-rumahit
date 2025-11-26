/**
 * ==================================================================================
 * API.JS
 * ==================================================================================
 * File ini bertugas untuk berkomunikasi dengan dunia luar (Server/API).
 * Kita menggunakan teknik 'Fetch API' untuk mengambil data dari internet.
 * 
 * Sumber Data: FakeStoreAPI (https://fakestoreapi.com/)
 * ==================================================================================
 */


// ==================================================================================
// 1. AMBIL DATA PRODUK
// ==================================================================================
/**
 * Mengambil daftar produk dari server FakeStoreAPI.
 * Fungsi ini bersifat ASYNC karena mengambil data dari internet butuh waktu.
 * 
 * @param {number} batas - Jumlah maksimal produk yang ingin diambil (default: 5)
 * @returns {Promise<Array>} Daftar produk dalam bentuk Array
 */
export async function ambilProdukDariAPI(batas = 5) {
    // URL endpoint API yang akan kita tuju
    const urlAPI = `https://fakestoreapi.com/products?limit=${batas}`;

    try {
        console.log(`Sedang mengambil ${batas} produk dari server...`);

        // 'await fetch()' artinya kita tunggu sampai server membalas
        const respons = await fetch(urlAPI);

        // Cek apakah server menjawab dengan sukses (Status 200 OK)
        if (!respons.ok) {
            throw new Error('Gagal mengambil data produk dari server.');
        }

        // Ubah jawaban server (JSON) menjadi objek JavaScript
        const dataProduk = await respons.json();

        return dataProduk; // Kembalikan data ke pemanggil

    } catch (kesalahan) {
        // Jika terjadi error (misal internet mati), kode ini akan dijalankan
        console.error('Terjadi error saat mengambil produk:', kesalahan);
        return []; // Kembalikan array kosong agar aplikasi tidak crash
    }
}
