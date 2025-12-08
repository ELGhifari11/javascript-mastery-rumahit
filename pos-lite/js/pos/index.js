/**
 * ==================================================================================
 * POS MODULE (CORE)
 * ==================================================================================
 * Jantung aplikasi POS: Katalog, Keranjang, dan Checkout.
 * Menggunakan konsep State Management (Store) & Component.
 */

import { buatPenyimpananData } from '../lib/Store.js';
import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';
import { KartuProduk } from '../components/ProductCard.js';
import { ItemKeranjang } from '../components/CartItem.js';

// 1. Inisialisasi Store (Wadah Data)
const penyimpanan = buatPenyimpananData({
    keranjang: [],
    totalQty: 0,
    totalHarga: 0
});

// 2. Main Initialization Logic
export function inisialisasiPOSFeature() {
    // Dengarkan perubahan data untuk update Tampilan (UI)
    penyimpanan.dengarkanPerubahan((data) => {
        renderKeranjang(data.keranjang);
        updateRingkasanKeranjang(data);
    });

    // Pasang event listener tombol checkout
    const btnCheckout = document.getElementById('btn-checkout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', prosesCheckout);
    }
}

// 3. Logic: Tampilkan Katalog
export function tampilkanKatalogPOS() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const grid = document.getElementById('pos-product-grid');
    grid.innerHTML = '';

    if (daftarProduk.length === 0) {
        grid.innerHTML = '<p class="text-muted">Tidak ada produk tersedia.</p>';
        return;
    }

    daftarProduk.forEach(produk => {
        const elemenKartu = KartuProduk({
            product: produk,
            onAddToCart: (p) => tambahKeKeranjang(p)
        });
        grid.appendChild(elemenKartu);
    });
}

// 4. Logic: Cart Actions
function tambahKeKeranjang(produk) {
    if (produk.stock <= 0) {
        Utilitas.tampilkanNotifikasi('Stok habis!', 'error');
        return;
    }

    const dataLama = penyimpanan.ambilData();
    const keranjangBaru = [...dataLama.keranjang];

    const indexItem = keranjangBaru.findIndex(item => item.productId === produk.id);

    if (indexItem !== -1) {
        // Update Qty
        const itemAda = keranjangBaru[indexItem];
        if (itemAda.qty < produk.stock) {
            keranjangBaru[indexItem] = {
                ...itemAda,
                qty: itemAda.qty + 1,
                subtotal: (itemAda.qty + 1) * itemAda.price
            };
        } else {
            Utilitas.tampilkanNotifikasi('Stok tidak mencukupi!', 'error');
            return;
        }
    } else {
        // Item Baru
        keranjangBaru.push({
            productId: produk.id,
            name: produk.name,
            image: produk.image,
            price: produk.price,
            qty: 1,
            subtotal: produk.price
        });
    }

    hitungDanUpdateState(keranjangBaru);
}

function hapusDariKeranjang(idProduk) {
    const dataLama = penyimpanan.ambilData();
    const keranjangBaru = dataLama.keranjang.filter(item => item.productId !== idProduk);
    hitungDanUpdateState(keranjangBaru);
}

function hitungDanUpdateState(keranjangBaru) {
    const totalQty = keranjangBaru.reduce((acc, item) => acc + item.qty, 0);
    const totalHarga = keranjangBaru.reduce((acc, item) => acc + item.subtotal, 0);

    penyimpanan.aturData({
        keranjang: keranjangBaru,
        totalQty,
        totalHarga
    });
}

// 5. Logic: Render Cart UI
function renderKeranjang(keranjang) {
    const kontainer = document.getElementById('cart-items-container');
    kontainer.innerHTML = '';

    if (keranjang.length === 0) {
        kontainer.innerHTML = '<p class="text-muted text-center mt-4">Cart is empty</p>';
        document.getElementById('btn-checkout').disabled = true;
    } else {
        keranjang.forEach(item => {
            const elemenItem = ItemKeranjang({
                item: item,
                onRemove: (id) => hapusDariKeranjang(id)
            });
            kontainer.appendChild(elemenItem);
        });
        document.getElementById('btn-checkout').disabled = false;
    }
}

function updateRingkasanKeranjang(data) {
    document.getElementById('cart-total-qty').textContent = data.totalQty;
    document.getElementById('cart-total-price').textContent = Utilitas.formatKeRupiah(data.totalHarga);
}

// 6. Logic: Checkout
async function prosesCheckout() {
    const data = penyimpanan.ambilData();
    if (data.keranjang.length === 0) return;

    const dikonfirmasi = await Utilitas.tampilkanKonfirmasi('Proses transaksi ini?', 'Checkout');
    if (!dikonfirmasi) return;

    // Validasi Stok lagi (untuk memastikan)
    for (const item of data.keranjang) {
        const produk = Penyimpanan.cariProdukById(item.productId);
        if (!produk || produk.stock < item.qty) {
            Utilitas.tampilkanNotifikasi('Stok berubah! Mohon refresh.', 'error');
            return;
        }
    }

    // Kurangi Stok di DB
    data.keranjang.forEach(item => {
        const produk = Penyimpanan.cariProdukById(item.productId);
        Penyimpanan.perbaruiProdukById(produk.id, { stock: produk.stock - item.qty });
    });

    // Simpan Transaksi history
    Penyimpanan.tambahTransaksi({
        id: Utilitas.buatIdUnik(),
        items: [...data.keranjang],
        totalQty: data.totalQty,
        totalPrice: data.totalHarga,
        createdAt: new Date().toISOString()
    });

    // Reset keranjang
    penyimpanan.aturData({ keranjang: [], totalQty: 0, totalHarga: 0 });

    // Refresh katalog (biar stok di kartu update)
    tampilkanKatalogPOS();

    Utilitas.tampilkanNotifikasi('Transaksi Berhasil!', 'success');
}
