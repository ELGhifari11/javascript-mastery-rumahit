/**
 * pos.js
 * Berisi logika utama Dashboard POS:
 * - CRUD Produk
 * - Cart & Transaksi
 * - Laporan
 * - Integrasi API
 */

import * as Storage from './storage.js';
import * as Utils from './utils.js';
import * as Api from './api.js';

// State lokal untuk Cart (keranjang belanja sementara)
let cart = [];

// --- INITIALIZATION ---

export function initPosApp() {
    // 1. Setup Navigasi Sidebar
    setupNavigation();

    // 2. Load Data Awal Dashboard
    loadDashboardOverview();

    // 3. Setup Event Listeners untuk Produk
    setupProductEvents();

    // 4. Setup Event Listeners untuk Cart
    setupCartEvents();
}

function setupNavigation() {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-section');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(`section-${targetId}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Refresh data based on section
            if (targetId === 'products') renderProductTable();
            if (targetId === 'pos') renderPosCatalog();
            if (targetId === 'reports') renderReports();
            if (targetId === 'overview') loadDashboardOverview();
        });
    });
}

// --- DASHBOARD OVERVIEW ---

function loadDashboardOverview() {
    const products = Storage.getAllProducts();
    const transactions = Storage.getAllTransactions();

    // Hitung total omzet
    let totalRevenue = 0;
    for (const trx of transactions) {
        totalRevenue += trx.totalPrice;
    }

    // Update UI
    document.getElementById('stat-total-products').textContent = products.length;
    document.getElementById('stat-total-transactions').textContent = transactions.length;
    document.getElementById('stat-total-revenue').textContent = Utils.formatCurrency(totalRevenue);
}


// --- PRODUCT MANAGEMENT (CRUD) ---

function setupProductEvents() {
    // Tombol Add Product
    document.getElementById('btn-add-product').addEventListener('click', () => {
        showProductForm(); // Mode tambah (kosong)
    });

    // Tombol Import Product (New)
    const btnImport = document.getElementById('btn-import-products');
    if (btnImport) {
        btnImport.addEventListener('click', handleImportProducts);
    }

    // Tombol Cancel Form
    document.getElementById('btn-cancel-product').addEventListener('click', () => {
        hideProductForm();
    });

    // Submit Form Product
    document.getElementById('form-product').addEventListener('submit', handleProductSubmit);
}

function showProductForm(product = null) {
    const container = document.getElementById('product-form-container');
    const title = document.getElementById('product-form-title');

    container.classList.remove('hidden');

    if (product) {
        // Mode Edit
        title.textContent = 'Edit Product';
        document.getElementById('prod-id').value = product.id;
        document.getElementById('prod-name').value = product.name;
        document.getElementById('prod-category').value = product.category;
        document.getElementById('prod-price').value = product.price;
        document.getElementById('prod-stock').value = product.stock;
    } else {
        // Mode Add
        title.textContent = 'Add New Product';
        document.getElementById('form-product').reset();
        document.getElementById('prod-id').value = '';
    }
}

function hideProductForm() {
    document.getElementById('product-form-container').classList.add('hidden');
    document.getElementById('form-product').reset();
}

function handleProductSubmit(e) {
    e.preventDefault();

    const id = document.getElementById('prod-id').value;
    const name = document.getElementById('prod-name').value;
    const category = document.getElementById('prod-category').value;
    const price = parseInt(document.getElementById('prod-price').value);
    const stock = parseInt(document.getElementById('prod-stock').value);

    if (id) {
        // Update Existing
        Storage.updateProductById(id, { name, category, price, stock });
        Utils.showNotification('Produk berhasil diperbarui!', 'success');
    } else {
        // Create New
        const newProduct = {
            id: Utils.generateId(),
            name, category, price, stock,
            createdAt: new Date().toISOString()
        };
        Storage.addProduct(newProduct);
        Utils.showNotification('Produk berhasil ditambahkan!', 'success');
    }

    hideProductForm();
    renderProductTable();
}

async function handleImportProducts() {
    const limitInput = prompt('Masukkan jumlah produk yang ingin di-import (Max 20):', '5');
    const limit = parseInt(limitInput);

    if (!limit || limit <= 0) return;

    Utils.showNotification('Sedang mengambil data...', 'info');

    const externalProducts = await Api.fetchProducts(limit);

    if (externalProducts.length === 0) {
        Utils.showNotification('Gagal mengambil data produk.', 'error');
        return;
    }

    let count = 0;
    externalProducts.forEach(p => {
        const newProduct = {
            id: Utils.generateId(),
            name: p.title,
            category: p.category,
            price: Math.round(p.price * 15000), // Konversi USD ke IDR kasar
            stock: 50, // Default stock
            createdAt: new Date().toISOString()
        };
        Storage.addProduct(newProduct);
        count++;
    });

    Utils.showNotification(`Berhasil import ${count} produk!`, 'success');
    renderProductTable();
    loadDashboardOverview(); // Update stats
}

function renderProductTable() {
    const products = Storage.getAllProducts();
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = '';

    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada produk.</td></tr>';
        return;
    }

    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${Utils.formatCurrency(p.price)}</td>
            <td>${p.stock}</td>
            <td>
                <button class="btn btn-sm btn-outline btn-edit" data-id="${p.id}">Edit</button>
                <button class="btn btn-sm btn-danger btn-delete" data-id="${p.id}">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Pasang event listener untuk tombol dinamis
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const product = Storage.findProductById(id);
            if (product) showProductForm(product);
        });
    });

    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (confirm('Yakin ingin menghapus produk ini?')) {
                Storage.deleteProductById(id);
                renderProductTable();
                Utils.showNotification('Produk dihapus.', 'info');
            }
        });
    });
}

// --- CART & TRANSACTION (POS) ---

function setupCartEvents() {
    document.getElementById('btn-checkout').addEventListener('click', handleCheckout);
}

function renderPosCatalog() {
    const products = Storage.getAllProducts();
    const grid = document.getElementById('pos-product-grid');
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p class="text-muted">Tidak ada produk tersedia.</p>';
        return;
    }

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card-simple';
        card.innerHTML = `
            <h4>${p.name}</h4>
            <div class="price">${Utils.formatCurrency(p.price)}</div>
            <div class="stock">Stock: ${p.stock}</div>
        `;

        // Klik card untuk tambah ke cart
        card.addEventListener('click', () => {
            if (p.stock > 0) {
                addToCart(p);
            } else {
                Utils.showNotification('Stok habis!', 'error');
            }
        });

        grid.appendChild(card);
    });
}

function addToCart(product) {
    // Cek apakah produk sudah ada di cart
    const existingItem = cart.find(item => item.productId === product.id);

    if (existingItem) {
        // Cek stok sebelum nambah
        if (existingItem.qty < product.stock) {
            existingItem.qty++;
            existingItem.subtotal = existingItem.qty * existingItem.price;
        } else {
            Utils.showNotification('Stok tidak mencukupi!', 'error');
            return;
        }
    } else {
        // Tambah item baru
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            qty: 1,
            subtotal: product.price
        });
    }

    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    let totalQty = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p class="text-muted text-center mt-4">Cart is empty</p>';
        document.getElementById('btn-checkout').disabled = true;
    } else {
        cart.forEach(item => {
            totalQty += item.qty;
            totalPrice += item.subtotal;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <span>${item.qty} x ${Utils.formatCurrency(item.price)}</span>
                </div>
                <div>
                    <strong>${Utils.formatCurrency(item.subtotal)}</strong>
                    <button class="btn-sm btn-danger ml-2 btn-remove-cart" data-id="${item.productId}">&times;</button>
                </div>
            `;
            container.appendChild(div);
        });
        document.getElementById('btn-checkout').disabled = false;
    }

    // Update Summary
    document.getElementById('cart-total-qty').textContent = totalQty;
    document.getElementById('cart-total-price').textContent = Utils.formatCurrency(totalPrice);

    // Event listener remove
    document.querySelectorAll('.btn-remove-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            removeFromCart(id);
        });
    });
}

function handleCheckout() {
    if (cart.length === 0) return;

    if (!confirm('Proses transaksi ini?')) return;

    // 1. Kurangi stok produk
    let stockError = false;

    // Kita harus validasi stok lagi untuk keamanan
    for (const item of cart) {
        const product = Storage.findProductById(item.productId);
        if (!product || product.stock < item.qty) {
            stockError = true;
            break;
        }
    }

    if (stockError) {
        Utils.showNotification('Terjadi kesalahan stok. Mohon refresh.', 'error');
        return;
    }

    // Update stok di storage
    cart.forEach(item => {
        const product = Storage.findProductById(item.productId);
        const newStock = product.stock - item.qty;
        Storage.updateProductById(product.id, { stock: newStock });
    });

    // 2. Simpan Transaksi
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.subtotal, 0);

    const transaction = {
        id: Utils.generateId(),
        items: [...cart], // Copy array
        totalQty,
        totalPrice,
        createdAt: new Date().toISOString()
    };

    Storage.addTransaction(transaction);

    // 3. Reset Cart & UI
    cart = [];
    renderCart();
    renderPosCatalog(); // Refresh stok di katalog
    Utils.showNotification('Transaksi Berhasil!', 'success');
}

// --- REPORTS ---

function renderReports() {
    const transactions = Storage.getAllTransactions();
    const tbody = document.getElementById('transactions-tbody');
    tbody.innerHTML = '';

    if (transactions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Belum ada transaksi.</td></tr>';
        return;
    }

    // Urutkan dari yang terbaru
    const sortedTrx = transactions.slice().reverse();

    sortedTrx.forEach(trx => {
        const date = new Date(trx.createdAt).toLocaleString();
        const itemNames = trx.items.map(i => `${i.name} (${i.qty})`).join(', ');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${date}</td>
            <td><small>${trx.id}</small></td>
            <td>${itemNames}</td>
            <td><strong>${Utils.formatCurrency(trx.totalPrice)}</strong></td>
        `;
        tbody.appendChild(tr);
    });
}
