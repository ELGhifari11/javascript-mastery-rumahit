/**
 * ==================================================================================
 * POS.JS
 * ==================================================================================
 * File ini adalah OTAK utama dari aplikasi Point of Sale (POS).
 * 
 * Tanggung Jawab Utama:
 * 1. Mengelola Produk (Tambah, Edit, Hapus, Import).
 * 2. Mengelola Keranjang Belanja (Tambah item, Hapus item, Hitung total).
 * 3. Memproses Transaksi (Checkout).
 * 4. Menampilkan Laporan Transaksi.
 * ==================================================================================
 */

import * as Penyimpanan from './storage.js'; // Modul untuk simpan data
import * as Utilitas from './utils.js';      // Modul bantuan umum
import * as API from './api.js';             // Modul koneksi ke internet

// Gambar placeholder jika produk tidak memiliki gambar
const GAMBAR_DEFAULT = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect fill="%23ddd" width="150" height="150"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" dy=".3em" x="50%25" y="50%25" text-anchor="middle"%3EProduct%3C/text%3E%3C/svg%3E';

// Variabel Global untuk menyimpan isi keranjang sementara
// Array ini akan berisi objek item yang dipilih user
let keranjangBelanja = [];


// ==================================================================================
// 1. INISIALISASI POS
// ==================================================================================
/**
 * Fungsi utama yang dipanggil saat Dashboard dimuat.
 * Menyiapkan segala sesuatu agar siap digunakan.
 */
export function inisialisasiAplikasiPOS() {
    // 1. Siapkan navigasi (pindah-pindah tab)
    aturNavigasi();

    // 2. Tampilkan data statistik di halaman Overview
    muatRingkasanDashboard();

    // 3. Siapkan tombol-tombol di halaman Produk
    aturEventProduk();

    // 4. Siapkan tombol-tombol di halaman Kasir (POS)
    aturEventKeranjang();
}

/**
 * Mengatur logika perpindahan Tab (Overview, Products, POS, Reports).
 */
function aturNavigasi() {
    const daftarTab = document.querySelectorAll('.tab-btn');       // Ambil semua tombol tab
    const daftarSeksi = document.querySelectorAll('.content-section'); // Ambil semua halaman konten

    daftarTab.forEach(tab => {
        tab.addEventListener('click', () => {
            const idTarget = tab.getAttribute('data-section'); // Misal: 'products'

            // 1. Update tampilan Tab (tandai yang aktif)
            daftarTab.forEach(tabItem => tabItem.classList.remove('active'));
            tab.classList.add('active');

            // 2. Update tampilan Konten (tampilkan yang dipilih, sembunyikan yang lain)
            daftarSeksi.forEach(seksi => seksi.classList.remove('active'));
            const seksiTarget = document.getElementById(`section-${idTarget}`);
            if (seksiTarget) {
                seksiTarget.classList.add('active');
            }

            // 3. Refresh data sesuai halaman yang dibuka
            if (idTarget === 'products') tampilkanTabelProduk();
            if (idTarget === 'pos') tampilkanKatalogPOS();
            if (idTarget === 'reports') tampilkanLaporan();
            if (idTarget === 'overview') muatRingkasanDashboard();
        });
    });
}


// ==================================================================================
// 2. DASHBOARD OVERVIEW
// ==================================================================================
/**
 * Menghitung dan menampilkan statistik ringkas.
 * - Total Produk
 * - Total Transaksi
 * - Total Pendapatan (Omzet)
 */
function muatRingkasanDashboard() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const daftarTransaksi = Penyimpanan.ambilSemuaTransaksi();

    // Hitung total omzet dengan menjumlahkan totalPrice semua transaksi
    let totalOmzet = 0;
    for (const transaksi of daftarTransaksi) {
        totalOmzet += transaksi.totalPrice;
    }

    // Masukkan angka-angka ke elemen HTML
    document.getElementById('stat-total-products').textContent = daftarProduk.length;
    document.getElementById('stat-total-transactions').textContent = daftarTransaksi.length;
    document.getElementById('stat-total-revenue').textContent = Utilitas.formatKeRupiah(totalOmzet);
}


// ==================================================================================
// 3. MANAJEMEN PRODUK (CRUD)
// ==================================================================================
/**
 * Mengatur event listener untuk tombol-tombol di halaman Produk.
 */
function aturEventProduk() {
    // Tombol "Add Product"
    document.getElementById('btn-add-product').addEventListener('click', () => {
        tampilkanFormProduk(); // Buka form kosong
    });

    // Tombol "Import Demo"
    const tombolImport = document.getElementById('btn-import-products');
    if (tombolImport) {
        tombolImport.addEventListener('click', prosesImportProduk);
    }

    // Tombol "Cancel" di form
    document.getElementById('btn-cancel-product').addEventListener('click', () => {
        sembunyikanFormProduk();
    });

    // Saat form disubmit (Simpan)
    document.getElementById('form-product').addEventListener('submit', prosesSimpanProduk);
}

/**
 * Menampilkan form input produk.
 * Bisa untuk Mode Tambah (kosong) atau Mode Edit (terisi data).
 * 
 * @param {Object} produk - Data produk jika mode edit (opsional)
 */
function tampilkanFormProduk(produk = null) {
    const kontainerForm = document.getElementById('product-form-container');
    const judulForm = document.getElementById('product-form-title');

    kontainerForm.classList.remove('hidden'); // Munculkan form

    if (produk) {
        // --- MODE EDIT ---
        judulForm.textContent = 'Edit Product';
        // Isi input dengan data produk yang mau diedit
        document.getElementById('prod-id').value = produk.id;
        document.getElementById('prod-name').value = produk.name;
        document.getElementById('prod-category').value = produk.category;
        document.getElementById('prod-image').value = produk.image || '';
        document.getElementById('prod-price').value = produk.price;
        document.getElementById('prod-stock').value = produk.stock;
    } else {
        // --- MODE TAMBAH ---
        judulForm.textContent = 'Add New Product';
        document.getElementById('form-product').reset(); // Kosongkan form
        document.getElementById('prod-id').value = '';   // Pastikan ID kosong
    }
}

/**
 * Menyembunyikan form produk.
 */
function sembunyikanFormProduk() {
    document.getElementById('product-form-container').classList.add('hidden');
    document.getElementById('form-product').reset();
}

/**
 * Logika menyimpan produk (Baik Tambah Baru maupun Update).
 */
function prosesSimpanProduk(event) {
    event.preventDefault(); // Mencegah reload

    // Ambil data dari form
    const id = document.getElementById('prod-id').value;
    const nama = document.getElementById('prod-name').value;
    const kategori = document.getElementById('prod-category').value;
    const urlGambar = document.getElementById('prod-image').value.trim();
    const harga = parseInt(document.getElementById('prod-price').value);
    const stok = parseInt(document.getElementById('prod-stock').value);

    if (id) {
        // --- KASUS UPDATE (ID sudah ada) ---
        const dataUpdate = {
            name: nama,
            category: kategori,
            price: harga,
            stock: stok
        };
        if (urlGambar) dataUpdate.image = urlGambar; // Update gambar hanya jika diisi

        Penyimpanan.perbaruiProdukById(id, dataUpdate);
        Utilitas.tampilkanNotifikasi('Produk berhasil diperbarui!', 'success');
    } else {
        // --- KASUS TAMBAH BARU ---
        const produkBaru = {
            id: Utilitas.buatIdUnik(),
            name: nama,
            image: urlGambar || GAMBAR_DEFAULT,
            category: kategori,
            price: harga,
            stock: stok,
            createdAt: new Date().toISOString()
        };
        Penyimpanan.tambahProduk(produkBaru);
        Utilitas.tampilkanNotifikasi('Produk berhasil ditambahkan!', 'success');
    }

    sembunyikanFormProduk();
    tampilkanTabelProduk(); // Refresh tabel
}

/**
 * Mengambil data produk dari API eksternal (Fitur Import).
 */
async function prosesImportProduk() {
    // Minta input jumlah ke user menggunakan Modal Kustom
    const inputBatas = await Utilitas.tampilkanInput('Masukkan jumlah produk yang ingin di-import (Max 20):', '5', 'Import Produk');
    const batas = parseInt(inputBatas);

    // Validasi input
    if (!batas || batas <= 0) return;

    Utilitas.tampilkanNotifikasi('Sedang mengambil data...', 'info');

    // Panggil API
    const produkEksternal = await API.ambilProdukDariAPI(batas);

    if (produkEksternal.length === 0) {
        Utilitas.tampilkanNotifikasi('Gagal mengambil data produk.', 'error');
        return;
    }

    let jumlahImport = 0;

    // Proses setiap produk dari API
    produkEksternal.forEach(produkItem => {
        const produkBaru = {
            id: Utilitas.buatIdUnik(),
            name: produkItem.title,
            image: produkItem.image,
            category: produkItem.category,
            // Konversi harga USD ke IDR (asumsi kurs 15.000)
            price: Math.round(produkItem.price * 15000),
            stock: 50, // Stok default
            createdAt: new Date().toISOString()
        };
        Penyimpanan.tambahProduk(produkBaru);
        jumlahImport++;
    });

    Utilitas.tampilkanNotifikasi(`Berhasil import ${jumlahImport} produk!`, 'success');
    tampilkanTabelProduk();
    muatRingkasanDashboard();
}

/**
 * Merender tabel produk di halaman Products.
 */
function tampilkanTabelProduk() {
    const daftarProduk = Penyimpanan.ambilSemuaProduk();
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = ''; // Bersihkan isi tabel lama

    if (daftarProduk.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada produk.</td></tr>';
        return;
    }

    // Loop setiap produk dan buat baris tabel
    daftarProduk.forEach(produk => {
        const baris = document.createElement('tr');
        const gambarProduk = produk.image || GAMBAR_DEFAULT;

        baris.innerHTML = `
            <td><img src="${gambarProduk}" width="50" height="70" onerror="this.src='${GAMBAR_DEFAULT}'"></td>
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

    // --- Pasang Event Listener untuk Tombol Edit & Delete ---

    // Tombol Edit
    document.querySelectorAll('.btn-edit').forEach(tombol => {
        tombol.addEventListener('click', () => {
            const id = tombol.getAttribute('data-id');
            const produk = Penyimpanan.cariProdukById(id);
            if (produk) tampilkanFormProduk(produk);
        });
    });

    // Tombol Delete
    document.querySelectorAll('.btn-delete').forEach(tombol => {
        tombol.addEventListener('click', async () => {
            const id = tombol.getAttribute('data-id');
            // Konfirmasi hapus dengan Modal Kustom
            const dikonfirmasi = await Utilitas.tampilkanKonfirmasi('Yakin ingin menghapus produk ini?', 'Hapus Produk');

            if (dikonfirmasi) {
                Penyimpanan.hapusProdukById(id);
                tampilkanTabelProduk(); // Refresh tabel
                Utilitas.tampilkanNotifikasi('Produk dihapus.', 'info');
            }
        });
    });
}


// ==================================================================================
// 4. SISTEM KASIR (POS) & KERANJANG
// ==================================================================================
/**
 * Mengatur event listener di halaman POS.
 */
function aturEventKeranjang() {
    document.getElementById('btn-checkout').addEventListener('click', prosesCheckout);
}

/**
 * Menampilkan katalog produk dalam bentuk kartu (Grid) di halaman POS.
 */
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
        const gambarProduk = produk.image || GAMBAR_DEFAULT;
        kartu.className = 'product-card-simple';

        kartu.innerHTML = `
            <img src="${gambarProduk}" width="50" height="70" onerror="this.src='${GAMBAR_DEFAULT}'">
            <h4>${Utilitas.potongTeks(produk.name, 15)}</h4>
            <div class="price">${Utilitas.formatKeRupiah(produk.price)}</div>
            <div class="stock">Stock: ${produk.stock}</div>
        `;

        // Saat kartu diklik, tambah ke keranjang
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

/**
 * Menambahkan produk ke keranjang belanja.
 * Jika sudah ada, jumlahnya (qty) ditambah.
 */
function tambahKeKeranjang(produk) {
    // Cek apakah produk sudah ada di keranjang
    const itemYangAda = keranjangBelanja.find(item => item.productId === produk.id);

    if (itemYangAda) {
        // Jika ada, cek stok dulu
        if (itemYangAda.qty < produk.stock) {
            itemYangAda.qty++;
            itemYangAda.subtotal = itemYangAda.qty * itemYangAda.price;
        } else {
            Utilitas.tampilkanNotifikasi('Stok tidak mencukupi!', 'error');
            return;
        }
    } else {
        // Jika belum ada, masukkan sebagai item baru
        keranjangBelanja.push({
            productId: produk.id,
            name: produk.name,
            image: produk.image,
            price: produk.price,
            qty: 1,
            subtotal: produk.price
        });
    }

    tampilkanKeranjang(); // Update tampilan keranjang
}

/**
 * Menghapus item dari keranjang.
 */
function hapusDariKeranjang(idProduk) {
    keranjangBelanja = keranjangBelanja.filter(item => item.productId !== idProduk);
    tampilkanKeranjang();
}

/**
 * Merender daftar item di keranjang belanja (sebelah kanan).
 */
function tampilkanKeranjang() {
    const kontainer = document.getElementById('cart-items-container');
    kontainer.innerHTML = '';

    let totalJumlah = 0;
    let totalHarga = 0;

    if (keranjangBelanja.length === 0) {
        kontainer.innerHTML = '<p class="text-muted text-center mt-4">Cart is empty</p>';
        document.getElementById('btn-checkout').disabled = true; // Matikan tombol checkout
    } else {
        keranjangBelanja.forEach(item => {
            totalJumlah += item.qty;
            totalHarga += item.subtotal;

            const div = document.createElement('div');
            const gambarItem = item.image || GAMBAR_DEFAULT;
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <img src="${gambarItem}" width="50" height="70" onerror="this.src='${GAMBAR_DEFAULT}'">
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
        document.getElementById('btn-checkout').disabled = false; // Hidupkan tombol checkout
    }

    // Update Ringkasan Total
    document.getElementById('cart-total-qty').textContent = totalJumlah;
    document.getElementById('cart-total-price').textContent = Utilitas.formatKeRupiah(totalHarga);

    // Pasang event listener untuk tombol hapus (X)
    document.querySelectorAll('.btn-remove-cart').forEach(tombol => {
        tombol.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            hapusDariKeranjang(id);
        });
    });
}

/**
 * Memproses transaksi akhir (Checkout).
 * Mengurangi stok dan menyimpan riwayat transaksi.
 */
async function prosesCheckout() {
    if (keranjangBelanja.length === 0) return;

    // Konfirmasi user
    const dikonfirmasi = await Utilitas.tampilkanKonfirmasi('Proses transaksi ini?', 'Konfirmasi Checkout');
    if (!dikonfirmasi) return;

    // 1. Validasi Stok Terakhir (Penting!)
    let adaKesalahanStok = false;
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

    // 2. Kurangi Stok di Database
    keranjangBelanja.forEach(item => {
        const produk = Penyimpanan.cariProdukById(item.productId);
        const stokBaru = produk.stock - item.qty;
        Penyimpanan.perbaruiProdukById(produk.id, { stock: stokBaru });
    });

    // 3. Simpan Data Transaksi
    const totalJumlah = keranjangBelanja.reduce((jumlah, item) => jumlah + item.qty, 0);
    const totalHarga = keranjangBelanja.reduce((jumlah, item) => jumlah + item.subtotal, 0);

    const transaksi = {
        id: Utilitas.buatIdUnik(),
        items: [...keranjangBelanja], // Salin array keranjang agar tidak ikut terhapus
        totalQty: totalJumlah,
        totalPrice: totalHarga,
        createdAt: new Date().toISOString()
    };

    Penyimpanan.tambahTransaksi(transaksi);

    // 4. Reset & Bersihkan
    keranjangBelanja = [];
    tampilkanKeranjang();
    tampilkanKatalogPOS(); // Refresh stok di katalog
    Utilitas.tampilkanNotifikasi('Transaksi Berhasil!', 'success');
}


// ==================================================================================
// 5. LAPORAN TRANSAKSI
// ==================================================================================
/**
 * Menampilkan riwayat transaksi di halaman Reports.
 */
function tampilkanLaporan() {
    const daftarTransaksi = Penyimpanan.ambilSemuaTransaksi();
    const tbody = document.getElementById('transactions-tbody');
    tbody.innerHTML = '';

    if (daftarTransaksi.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Belum ada transaksi.</td></tr>';
        return;
    }

    // Urutkan dari yang terbaru (reverse)
    const transaksiTerurut = daftarTransaksi.slice().reverse();

    transaksiTerurut.forEach(transaksi => {
        const tanggal = Utilitas.formatTanggalWaktu(transaksi.createdAt);
        // Gabungkan nama item jadi satu string
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
