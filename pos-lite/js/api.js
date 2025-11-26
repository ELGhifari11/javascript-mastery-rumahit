/**
 * api.js
 * Bertanggung jawab mengambil data dari API publik (Fetch API).
 * Contoh: Mengambil produk dari FakeStoreAPI.
 */

// Ambil produk dari FakeStoreAPI
export async function ambilProdukDariAPI(batas = 5) {
    const urlAPI = `https://fakestoreapi.com/products?limit=${batas}`;
    try {
        console.log(`Mengambil ${batas} produk dari FakeStoreAPI...`);
        const respons = await fetch(urlAPI);

        if (!respons.ok) throw new Error('Gagal mengambil data produk');

        const dataProduk = await respons.json();
        return dataProduk; // Array berisi produk
    } catch (kesalahan) {
        console.error('Error saat mengambil produk:', kesalahan);
        return [];
    }
}
