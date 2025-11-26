/**
 * pos.js
 * Berisi logika utama Dashboard POS:
 * - CRUD Produk
 * - Keranjang & Transaksi
 * - Laporan
 * - Integrasi API
 */

import * as Penyimpanan from './storage.js';
import * as Utilitas from './utils.js';
import * as API from './api.js';

// State lokal untuk keranjang belanja sementara
let keranjangBelanja = [];

// --- INISIALISASI ---

export function inisialisasiAplikasiPOS() {
    // 1. Setup Navigasi Sidebar
    aturNavigasi();

    // 2. Load Data Awal Dashboard
    muatRingkasanDashboard();

    // 3. Setup Event Listeners untuk Produk
    aturEventProduk();

    // 4. Setup Event Listeners untuk Keranjang
    aturEventKeranjang();
}

function aturNavigasi() {
    // Tab navigation
    const daftarTab = document.querySelectorAll('.tab-btn');
    const daftarSeksi = document.querySelectorAll('.content-section');

    daftarTab.forEach(tab => {
        tab.addEventListener('click', () => {
            const idTarget = tab.getAttribute('data-section');

            // Update active tab
            daftarTab.forEach(tabItem => tabItem.classList.remove('active'));
            tab.classList.add('active');

            // Update active section
            daftarSeksi.forEach(seksi => seksi.classList.remove('active'));
            const seksiTarget = document.getElementById(`section-${idTarget}`);
            if (seksiTarget) {
                seksiTarget.classList.add('active');
            }

            // Refresh data berdasarkan section
            if (idTarget === 'products') tampilkanTabelProduk();
            if (idTarget === 'pos') tampilkanKatalogPOS();
            if (idTarget === 'reports') tampilkanLaporan();
            if (idTarget === 'overview') muatRingkasanDashboard();
        });
    });
}

// --- RINGKASAN DASHBOARD ---

function muatRingkasanDashboard() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const daftarTransaksi = Penyimpanan.ambilSemuaTransaksi();

    // Hitung total omzet
    let totalOmzet = 0;
    for (const transaksi of daftarTransaksi) {
        totalOmzet += transaksi.totalPrice;
    }

    // Update UI
    document.getElementById('stat-total-products').textContent = daftarProduk.length;
    document.getElementById('stat-total-transactions').textContent = daftarTransaksi.length;
    document.getElementById('stat-total-revenue').textContent = Utilitas.formatKeRupiah(totalOmzet);
}


// --- MANAJEMEN PRODUK (CRUD) ---

function aturEventProduk() {
    // Tombol Tambah Produk
    document.getElementById('btn-add-product').addEventListener('click', () => {
        tampilkanFormProduk(); // Mode tambah (kosong)
    });

    // Tombol Import Produk (Baru)
    const tombolImport = document.getElementById('btn-import-products');
    if (tombolImport) {
        tombolImport.addEventListener('click', prosesImportProduk);
    }

    // Tombol Batal Form
    document.getElementById('btn-cancel-product').addEventListener('click', () => {
        sembunyikanFormProduk();
    });

    // Submit Form Produk
    document.getElementById('form-product').addEventListener('submit', prosesSimpanProduk);
}

function tampilkanFormProduk(produk = null) {
    const kontainerForm = document.getElementById('product-form-container');
    const judulForm = document.getElementById('product-form-title');

    kontainerForm.classList.remove('hidden');

    if (produk) {
        // Mode Edit
        judulForm.textContent = 'Edit Product';
        document.getElementById('prod-id').value = produk.id;
        document.getElementById('prod-name').value = produk.name;
        document.getElementById('prod-category').value = produk.category;
        document.getElementById('prod-price').value = produk.price;
        document.getElementById('prod-stock').value = produk.stock;
    } else {
        // Mode Tambah
        judulForm.textContent = 'Add New Product';
        document.getElementById('form-product').reset();
        document.getElementById('prod-id').value = '';
    }
}

function sembunyikanFormProduk() {
    document.getElementById('product-form-container').classList.add('hidden');
    document.getElementById('form-product').reset();
}

function prosesSimpanProduk(event) {
    event.preventDefault();

    const id = document.getElementById('prod-id').value;
    const nama = document.getElementById('prod-name').value;
    const kategori = document.getElementById('prod-category').value;
    const harga = parseInt(document.getElementById('prod-price').value);
    const stok = parseInt(document.getElementById('prod-stock').value);

    if (id) {
        // Update yang sudah ada
        Penyimpanan.perbaruiProdukById(id, { name: nama, category: kategori, price: harga, stock: stok });
        Utilitas.tampilkanNotifikasi('Produk berhasil diperbarui!', 'success');
    } else {
        // Buat Baru
        const produkBaru = {
            id: Utilitas.buatIdUnik(),
            name: nama,
            category: kategori,
            price: harga,
            stock: stok,
            createdAt: new Date().toISOString()
        };
        Penyimpanan.tambahProduk(produkBaru);
        Utilitas.tampilkanNotifikasi('Produk berhasil ditambahkan!', 'success');
    }

    sembunyikanFormProduk();
    tampilkanTabelProduk();
}

async function prosesImportProduk() {
    const inputBatas = prompt('Masukkan jumlah produk yang ingin di-import (Max 20):', '5');
    const batas = parseInt(inputBatas);

    if (!batas || batas <= 0) return;

    Utilitas.tampilkanNotifikasi('Sedang mengambil data...', 'info');

    const produkEksternal = await API.ambilProdukDariAPI(batas);

    if (produkEksternal.length === 0) {
        Utilitas.tampilkanNotifikasi('Gagal mengambil data produk.', 'error');
        return;
    }

    let jumlahImport = 0;

    produkEksternal.forEach(produkItem => {
        const produkBaru = {
            id: Utilitas.buatIdUnik(),
            name: produkItem.title,
            image: produkItem.image,
            category: produkItem.category,
            price: Math.round(produkItem.price * 15000), // Konversi USD ke IDR kasar
            stock: 50, // Default stock
            createdAt: new Date().toISOString()
        };
        Penyimpanan.tambahProduk(produkBaru);
        jumlahImport++;
    });

    Utilitas.tampilkanNotifikasi(`Berhasil import ${jumlahImport} produk!`, 'success');
    tampilkanTabelProduk();
    muatRingkasanDashboard(); // Update statistik
}

function tampilkanTabelProduk() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = '';

    if (daftarProduk.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada produk.</td></tr>';
        return;
    }

    daftarProduk.forEach(produk => {
        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td><img  src="${produk.image}" width="50"></td>
            <td>${Utilitas.potongTeks(produk.name, 40)}</td>
            <td>${Utilitas.potongTeks(produk.category, 40)}</td>
            <td>${Utilitas.formatKeRupiah(produk.price)}</td>
            <td>${produk.stock}</td>
            <td>
                <button class="btn btn-sm btn-outline btn-edit" data-id="${produk.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger btn-delete" data-id="${produk.id}"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tbody.appendChild(baris);
    });

    // Pasang event listener untuk tombol dinamis
    document.querySelectorAll('.btn-edit').forEach(tombol => {
        tombol.addEventListener('click', () => {
            const id = tombol.getAttribute('data-id');
            const produk = Penyimpanan.cariProdukById(id);
            if (produk) tampilkanFormProduk(produk);
        });
    });

    document.querySelectorAll('.btn-delete').forEach(tombol => {
        tombol.addEventListener('click', () => {
            const id = tombol.getAttribute('data-id');
            if (confirm('Yakin ingin menghapus produk ini?')) {
                Penyimpanan.hapusProdukById(id);
                tampilkanTabelProduk();
                Utilitas.tampilkanNotifikasi('Produk dihapus.', 'info');
            }
        });
    });
}

// --- KERANJANG & TRANSAKSI (POS) ---

function aturEventKeranjang() {
    document.getElementById('btn-checkout').addEventListener('click', prosesCheckout);
}

function tampilkanKatalogPOS() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const grid = document.getElementById('pos-product-grid');
    grid.innerHTML = '';

    if (daftarProduk.length === 0) {
        grid.innerHTML = '<p class="text-muted">Tidak ada produk tersedia.</p>';
        return;
    }

    daftarProduk.forEach(produk => {
        const kartu = document.createElement('div');
        kartu.className = 'product-card-simple';
        kartu.innerHTML = `
            <img src="${produk.image}" width="50">
            <h4>${Utilitas.potongTeks(produk.name, 15)}</h4>
            <div class="price">${Utilitas.formatKeRupiah(produk.price)}</div>
            <div class="stock">Stock: ${produk.stock}</div>
        `;

        // Klik kartu untuk tambah ke keranjang
        kartu.addEventListener('click', () => {
            if (produk.stock > 0) {
                tambahKeKeranjang(produk);
            } else {
                Utilitas.tampilkanNotifikasi('Stok habis!', 'error');
            }
        });

        grid.appendChild(kartu);
    });
}

function tambahKeKeranjang(produk) {
    // Cek apakah produk sudah ada di keranjang
    const itemYangAda = keranjangBelanja.find(item => item.productId === produk.id);

    if (itemYangAda) {
        // Cek stok sebelum menambah
        if (itemYangAda.qty < produk.stock) {
            itemYangAda.qty++;
            itemYangAda.subtotal = itemYangAda.qty * itemYangAda.price;
        } else {
            Utilitas.tampilkanNotifikasi('Stok tidak mencukupi!', 'error');
            return;
        }
    } else {
        // Tambah item baru
        keranjangBelanja.push({
            productId: produk.id,
            name: produk.name,
            image: produk.image,
            price: produk.price,
            qty: 1,
            subtotal: produk.price
        });
    }

    tampilkanKeranjang();
}

function hapusDariKeranjang(idProduk) {
    keranjangBelanja = keranjangBelanja.filter(item => item.productId !== idProduk);
    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    const kontainer = document.getElementById('cart-items-container');
    kontainer.innerHTML = '';

    let totalJumlah = 0;
    let totalHarga = 0;

    if (keranjangBelanja.length === 0) {
        kontainer.innerHTML = '<p class="text-muted text-center mt-4">Cart is empty</p>';
        document.getElementById('btn-checkout').disabled = true;
    } else {
        keranjangBelanja.forEach(item => {
            totalJumlah += item.qty;
            totalHarga += item.subtotal;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.image}" width="50">
                    <h5>${Utilitas.potongTeks(item.name, 20)}</h5>
                    <span>${item.qty} x ${Utilitas.formatKeRupiah(item.price)}</span>
                </div>
                <div>
                    <strong>${Utilitas.formatKeRupiah(item.subtotal)}</strong>
                    <button class="btn-sm btn-danger ml-2 btn-remove-cart" data-id="${item.productId}">&times;</button>
                </div>
            `;
            kontainer.appendChild(div);
        });
        document.getElementById('btn-checkout').disabled = false;
    }

    // Update Ringkasan
    document.getElementById('cart-total-qty').textContent = totalJumlah;
    document.getElementById('cart-total-price').textContent = Utilitas.formatKeRupiah(totalHarga);

    // Event listener hapus
    document.querySelectorAll('.btn-remove-cart').forEach(tombol => {
        tombol.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            hapusDariKeranjang(id);
        });
    });
}

function prosesCheckout() {
    if (keranjangBelanja.length === 0) return;

    if (!confirm('Proses transaksi ini?')) return;

    // 1. Kurangi stok produk
    let adaKesalahanStok = false;

    // Kita harus validasi stok lagi untuk keamanan
    for (const item of keranjangBelanja) {
        const produk = Penyimpanan.cariProdukById(item.productId);
        if (!produk || produk.stock < item.qty) {
            adaKesalahanStok = true;
            break;
        }
    }

    if (adaKesalahanStok) {
        Utilitas.tampilkanNotifikasi('Terjadi kesalahan stok. Mohon refresh.', 'error');
        return;
    }

    // Update stok di penyimpanan
    keranjangBelanja.forEach(item => {
        const produk = Penyimpanan.cariProdukById(item.productId);
        const stokBaru = produk.stock - item.qty;
        Penyimpanan.perbaruiProdukById(produk.id, { stock: stokBaru });
    });

    // 2. Simpan Transaksi
    const totalJumlah = keranjangBelanja.reduce((jumlah, item) => jumlah + item.qty, 0);
    const totalHarga = keranjangBelanja.reduce((jumlah, item) => jumlah + item.subtotal, 0);

    const transaksi = {
        id: Utilitas.buatIdUnik(),
        items: [...keranjangBelanja], // Copy array
        totalQty: totalJumlah,
        totalPrice: totalHarga,
        createdAt: new Date().toISOString()
    };

    Penyimpanan.tambahTransaksi(transaksi);

    // 3. Reset Keranjang & UI
    keranjangBelanja = [];
    tampilkanKeranjang();
    tampilkanKatalogPOS(); // Refresh stok di katalog
    Utilitas.tampilkanNotifikasi('Transaksi Berhasil!', 'success');
}

// --- LAPORAN ---

function tampilkanLaporan() {
    const daftarTransaksi = Penyimpanan.ambilSemuaTransaksi();
    const tbody = document.getElementById('transactions-tbody');
    tbody.innerHTML = '';

    if (daftarTransaksi.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Belum ada transaksi.</td></tr>';
        return;
    }

    // Urutkan dari yang terbaru
    const transaksiTerurut = daftarTransaksi.slice().reverse();

    transaksiTerurut.forEach(transaksi => {
        const tanggal = Utilitas.formatTanggalWaktu(transaksi.createdAt);
        const namaNamaItem = transaksi.items.map(item => `${item.name} (${item.qty})`).join(', ');

        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td>${tanggal}</td>
            <td><small>${transaksi.id}</small></td>
            <td>${namaNamaItem}</td>
            <td><strong>${Utilitas.formatKeRupiah(transaksi.totalPrice)}</strong></td>
        `;
        tbody.appendChild(baris);
    });
}
