/// ====================================================
/// SIMPLE STUDY CASE MANIPULATION ARRAY + OBJECT
/// =====================================================

const inputNamaKasir = document.getElementById('namaKasir')
const helloKasir = document.getElementById('pesanKasir')
const tagDaftarProduk = document.getElementById('daftarProduk')
const inputProductId = document.getElementById('productId')
const inputProductName = document.getElementById('productName')
const inputProductHarga = document.getElementById('productPrice')

const daftarProduk = [
    { id: "001", nama: "Beras 1kg", harga: 15000 },
    { id: "002", nama: "Teh", harga: 8000 },
    { id: "003", nama: "Gula", harga: 5000 },
];

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID",{
        style: "currency",
        currency : "IDR"
    });
}

function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

const kasir = {
    nama: ""
};

/// ==========================================

function simpanKasir() {
    // Masukan Value Ke Variabel dari Element HTML pada ID Tertentu
    let namaKasir = inputNamaKasir.value.trim()
    // Validasi Kalau Kosong Value dari namaKasir di Kasih Peringatan
    if (namaKasir === "") {
        // Dengan Alert Peringatanya
        alert("Nama kasir belum diisi.");
        return;
    }
    // Manipulasi Object: Overwrite/Refill/Edit Value Object
    kasir.nama = namaKasir;
    // Masukan Value Ke Element HTML pada ID Tertentu dengan Inner Text 
    helloKasir.innerText = "Assalamualaikum 👋 Kak " + kasir.nama + " 😊";
}

function tampilkanProduk() {
    let isi = "";
    for (let i = 0; i < daftarProduk.length; i++) {
        const item = daftarProduk[i]
        isi += '<div class="item-produk">';
        isi += '<button class="button-kontrol" onclick="hapusProduk(\'' + item.id + '\')">-</button>';
        isi += '<div><h3>' + item.nama + '</h3><p>' + formatRupiah(item.harga) + '</p></div>';
        isi += '<button class="button-kontrol" onclick="tambahKeranjang(\'' + item.id + '\')">>></button>';
        isi += '</div>';
    }
    tagDaftarProduk.innerHTML = isi
}

function hapusProduk(itemId) {
    const index = daftarProduk.findIndex((a,b,c)=> {
        return a.id === itemId
    });

    if (index !== -1) {
        daftarProduk.splice(index, 1);
        tampilkanProduk();
    }
}

function tambahKeranjang(itemId) {
    console.log(itemId);
}

function addProduct(){
    let idItem = inputProductId.value.trim()
    let nameItem = inputProductName.value.trim()
    let priceItem = parseInt(inputProductHarga.value,10)

     if (!idItem || !nameItem || isNaN(priceItem) || priceItem <= 0) {
        alert("ID, nama, dan harga produk harus diisi dengan benar.");
        return;
    }

    daftarProduk.unshift({ id: idItem, nama: nameItem, harga: priceItem })
    
    console.table(daftarProduk);
    
    tampilkanProduk();
    togglePopup('1')

    inputProductId.value = "";
    inputProductName.value = "";
    inputProductHarga.value = "";
}

tampilkanProduk()


