import { buatElemen, formatKeRupiah, potongTeks } from '../utils/index.js';

/**
 * KOMPONEN: KartuProduk
 * ======================
 * Menampilkan kartu produk di katalog.
 * 
 * @param {Object} props
 * @param {Object} props.product - Data produk
 * @param {Function} props.onAddToCart - Fungsi saat tombol diklik
 */
export function KartuProduk({ product, onAddToCart }) {
    const gambar = product.image || 'data:image/svg+xml,...';

    // Gunakan fungsi 'buatElemen' (mirip React.createElement)
    // Struktur: <div class="product-card-simple"> ... </div>
    return buatElemen('div', { className: 'product-card-simple', onClick: () => onAddToCart(product) },

        // Gambar Produk
        buatElemen('img', {
            src: product.image || 'https://via.placeholder.com/150',
            width: 50,
            height: 70,
            onerror: "this.src='https://via.placeholder.com/150'"
        }),

        // Nama Produk
        buatElemen('h4', {}, potongTeks(product.name, 15)),

        // Harga
        buatElemen('div', { className: 'price' }, formatKeRupiah(product.price)),

        // Stok
        buatElemen('div', { className: 'stock' }, `Stock: ${product.stock}`)
    );
}
