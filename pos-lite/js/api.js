/**
 * api.js
 * Bertanggung jawab mengambil data dari API publik (Fetch API).
 * Contoh: Mengambil kurs mata uang sederhana.
 */

// URL API Publik (Exchange Rate API - Free)

// Fetch Produk dari FakeStoreAPI
export async function fetchProducts(limit = 5) {
    const url = `https://fakestoreapi.com/products?limit=${limit}`;
    try {
        console.log(`Fetching ${limit} products from FakeStoreAPI...`);
        const response = await fetch(url);

        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        return data; // Array of products
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
