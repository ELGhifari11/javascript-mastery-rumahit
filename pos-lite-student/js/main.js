// 1. Import alat yang sudah kita buat dari 'Lobby' (index.js)
// Perhatikan kita pakai relative path './'
import * as utils from './utils/index.js';
import * as db from './db/index.js';

console.log("Mesin POS Lite dinyalakan..."); // Cek di Console Browser (F12)

console.table(db.myProduct); // [{}]


// 2. Ambil wadah dari index.html
const wadahAplikasi = document.getElementById('aplikasi');

// Style yang lebih rapi
const styleContainer = 'display: flex; align-items: start; flex-wrap: wrap; gap: 20px; padding:10px';
wadahAplikasi.setAttribute('style',styleContainer)

// 3. Data Bohongan (Dummy) untuk tes
const produkTest = {
    nama: "Kopi Susu Gula Aren",
    harga: 18000,
    kategori: "Minuman",
};

// 4. Bikin Tampilan pakai fungsi sakti 'buatElemen'
// Perhatikan betapa bersihnya kode ini dibanding document.createElement biasa!
const renderBanyakKartu = (db) => db.forEach(v => wadahAplikasi.appendChild(utils.renderSingleKartu(v)))

wadahAplikasi.appendChild(renderBanyakKartu(db.myProduct))