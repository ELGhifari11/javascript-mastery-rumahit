import { buatElemen, formatKeRupiah, potongTeks } from '../utils/index.js';

/**
 * KOMPONEN: ItemKeranjang
 * ===================
 * Menampilkan item di dalam keranjang belanja.
 * 
 * @param {Object} props
 * @param {Object} props.item - Data item keranjang (product + qty)
 * @param {Function} props.onRemove - Fungsi saat tombol hapus diklik
 */
export function ItemKeranjang({ item, onRemove }) {
    return buatElemen('div', { className: 'cart-item' },

        // Info Produk (Kiri)
        buatElemen('div', { className: 'cart-item-info' },
            buatElemen('img', {
                src: item.image || 'https://via.placeholder.com/150',
                width: 50,
                height: 70,
                onerror: "this.src='https://via.placeholder.com/150'"
            }),
            buatElemen('h5', {}, potongTeks(item.name, 20)),
            buatElemen('span', {}, `${item.qty} x ${formatKeRupiah(item.price)}`)
        ),

        // Subtotal & Action (Kanan)
        buatElemen('div', {},
            buatElemen('strong', {}, formatKeRupiah(item.subtotal)),
            buatElemen('button', {
                className: 'btn-sm btn-danger ml-7',
                // Panggil onRemove saat diklik
                onClick: () => onRemove(item.productId)
            }, buatElemen('i', { className: 'fas fa-trash-alt' }))
        )
    );
}