/**
 * ==================================================================================
 * PRODUCTS MODULE (ADMIN)
 * ==================================================================================
 * Menangani CRUD Produk (Tambah, Edit, Hapus, Import).
 */

import * as Penyimpanan from '../db/index.js';
import * as Utilitas from '../utils/index.js';
import * as API from '../api.js';
import { muatRingkasanDashboard } from '../dashboard/index.js';

const GAMBAR_DEFAULT = 'https://via.placeholder.com/150';

/**
 * Menginisialisasi Event Listener untuk halaman Produk
 */
export function aturEventProduk() {
    const btnAdd = document.getElementById('btn-add-product');
    const btnImport = document.getElementById('btn-import-products');
    const btnCancel = document.getElementById('btn-cancel-product');
    const btnClose = document.getElementById('btn-close-product-modal');
    const formProduct = document.getElementById('form-product');

    if (btnAdd) btnAdd.addEventListener('click', () => tampilkanFormProduk());
    if (btnImport) btnImport.addEventListener('click', prosesImportProduk);
    if (btnCancel) btnCancel.addEventListener('click', sembunyikanFormProduk);
    if (btnClose) btnClose.addEventListener('click', sembunyikanFormProduk);
    if (formProduct) formProduct.addEventListener('submit', prosesSimpanProduk);
}

export function tampilkanTabelProduk() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = '';

    if (daftarProduk.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">No Products</td></tr>';
        return;
    }

    daftarProduk.forEach(p => {
        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td><img src="${p.image || GAMBAR_DEFAULT}" width="50" height="70"></td>
            <td>${Utilitas.potongTeks(p.name, 40)}</td>
            <td>${Utilitas.potongTeks(p.category, 40)}</td>
            <td>${Utilitas.formatKeRupiah(p.price)}</td>
            <td>${p.stock}</td>
            <td>
                <button class="btn btn-sm btn-outline btn-edit" data-id="${p.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger btn-delete" data-id="${p.id}"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tbody.appendChild(baris);
    });

    // Pasang event listener untuk tombol Edit & Delete
    document.querySelectorAll('.btn-edit').forEach(b => {
        b.addEventListener('click', () => {
            const p = Penyimpanan.cariProdukById(b.getAttribute('data-id'));
            if (p) tampilkanFormProduk(p);
        });
    });

    document.querySelectorAll('.btn-delete').forEach(b => {
        b.addEventListener('click', async () => {
            const ok = await Utilitas.tampilkanKonfirmasi('Delete product?', 'Confirm');
            if (ok) {
                Penyimpanan.hapusProdukById(b.getAttribute('data-id'));
                tampilkanTabelProduk();
                muatRingkasanDashboard(); // Update dashboard count
            }
        });
    });
}

function tampilkanFormProduk(produk = null) {
    const judulForm = document.getElementById('product-modal-title');
    Utilitas.bukaModal('product-modal');

    if (produk) {
        judulForm.textContent = 'Edit Product';
        document.getElementById('prod-id').value = produk.id;
        document.getElementById('prod-name').value = produk.name;
        document.getElementById('prod-category').value = produk.category;
        document.getElementById('prod-image').value = produk.image || '';
        document.getElementById('prod-price').value = produk.price;
        document.getElementById('prod-stock').value = produk.stock;
    } else {
        judulForm.textContent = 'Add New Product';
        document.getElementById('form-product').reset();
        document.getElementById('prod-id').value = '';
    }
}

export function sembunyikanFormProduk() {
    Utilitas.tutupModal('product-modal');
    document.getElementById('form-product').reset();
}

function prosesSimpanProduk(event) {
    event.preventDefault();
    const id = document.getElementById('prod-id').value;
    const dataForm = {
        name: document.getElementById('prod-name').value,
        category: document.getElementById('prod-category').value,
        image: document.getElementById('prod-image').value,
        price: parseInt(document.getElementById('prod-price').value),
        stock: parseInt(document.getElementById('prod-stock').value)
    };

    if (id) {
        Penyimpanan.perbaruiProdukById(id, dataForm);
        Utilitas.tampilkanNotifikasi('Product Updated!', 'success');
    } else {
        dataForm.id = Utilitas.buatIdUnik();
        dataForm.createdAt = new Date().toISOString();
        if (!dataForm.image) dataForm.image = GAMBAR_DEFAULT;
        Penyimpanan.tambahProduk(dataForm);
        Utilitas.tampilkanNotifikasi('Product Created!', 'success');
    }

    sembunyikanFormProduk();
    tampilkanTabelProduk();
    muatRingkasanDashboard();
}

async function prosesImportProduk() {
    const inputBatas = await Utilitas.tampilkanInput('Jumlah Import (Max 20):', '5', 'Import Products');
    const batas = parseInt(inputBatas);

    if (!batas || batas <= 0) return;

    Utilitas.tampilkanNotifikasi('Fetching data...', 'info');
    const produkEksternal = await API.ambilProdukDariAPI(batas);

    if (!produkEksternal.length) return;

    produkEksternal.forEach(p => {
        Penyimpanan.tambahProduk({
            id: Utilitas.buatIdUnik(),
            name: p.title,
            image: p.image,
            category: p.category,
            price: Math.round(p.price * 15000), // Kurs kasar USD->IDR
            stock: 50,
            createdAt: new Date().toISOString()
        });
    });

    Utilitas.tampilkanNotifikasi(`Successfully imported ${produkEksternal.length} products!`, 'success');
    tampilkanTabelProduk();
    muatRingkasanDashboard();
}

export async function muatProdukDemoOtomatis() {
    const dataProduk = await API.ambilProdukDariAPI(10);
    dataProduk.forEach(p => {
        Penyimpanan.tambahProduk({
            id: Utilitas.buatIdUnik(),
            name: p.title,
            image: p.image,
            category: p.category,
            price: Math.round(p.price * 15000),
            stock: 50,
            createdAt: new Date().toISOString()
        });
    });
}
