/**
 * storage.js
 * Berisi semua logika untuk menyimpan dan mengambil data dari localStorage.
 * Bertindak sebagai "Database" sederhana.
 */

const KEYS = {
    USERS: 'pos_users',
    CURRENT_USER: 'pos_current_user',
    POS_STATE: 'pos_state'
};

// --- USER MANAGEMENT ---

// Ambil semua user
export function getAllUsers() {
    const usersJson = localStorage.getItem(KEYS.USERS);
    return usersJson ? JSON.parse(usersJson) : [];
}

// Simpan semua user (overwrite)
export function saveAllUsers(users) {
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));
}

// Cari user berdasarkan email
export function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(user => user.email === email);
}

// Tambah user baru
export function addUser(user) {
    const users = getAllUsers();
    users.push(user);
    saveAllUsers(users);
}

// Set user yang sedang login
export function setCurrentUser(user) {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
}

// Ambil user yang sedang login
export function getCurrentUser() {
    const userJson = localStorage.getItem(KEYS.CURRENT_USER);
    return userJson ? JSON.parse(userJson) : null;
}

// Hapus sesi user (Logout)
export function clearCurrentUser() {
    localStorage.removeItem(KEYS.CURRENT_USER);
}

// --- POS STATE (PRODUCTS & TRANSACTIONS) ---

// Ambil state POS (jika kosong, return default structure)
export function getPosState() {
    const stateJson = localStorage.getItem(KEYS.POS_STATE);
    if (stateJson) {
        return JSON.parse(stateJson);
    } else {
        // Default state jika belum ada data
        return {
            products: [],
            transactions: []
        };
    }
}

// Simpan state POS
export function savePosState(state) {
    localStorage.setItem(KEYS.POS_STATE, JSON.stringify(state));
}

// --- PRODUCT HELPERS ---

export function getAllProducts() {
    const state = getPosState();
    return state.products;
}

export function saveAllProducts(products) {
    const state = getPosState();
    state.products = products;
    savePosState(state);
}

export function findProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === id);
}

export function addProduct(product) {
    const state = getPosState();
    state.products.push(product);
    savePosState(state);
}

export function updateProductById(id, updatedData) {
    const state = getPosState();
    const index = state.products.findIndex(p => p.id === id);

    if (index !== -1) {
        // Gabungkan data lama dengan data baru
        state.products[index] = { ...state.products[index], ...updatedData };
        savePosState(state);
        return true;
    }
    return false;
}

export function deleteProductById(id) {
    const state = getPosState();
    const initialLength = state.products.length;

    // Filter produk yang ID-nya BUKAN id yang mau dihapus
    state.products = state.products.filter(p => p.id !== id);

    savePosState(state);
    return state.products.length < initialLength; // Return true jika ada yang terhapus
}

// --- TRANSACTION HELPERS ---

export function getAllTransactions() {
    const state = getPosState();
    return state.transactions;
}

export function addTransaction(transaction) {
    const state = getPosState();
    state.transactions.push(transaction);
    savePosState(state);
}
