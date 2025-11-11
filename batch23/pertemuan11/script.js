/// ====================================================
/// SIMPLE STUDY CASE MANIPULATION ARRAY + OBJECT
/// =====================================================

const inputNamaKasir = document.getElementById('namaKasir')
const helloKasir = document.getElementById('pesanKasir')
const tagDaftarProduk = document.getElementById('daftarProduk')
const inputProductId = document.getElementById('productId')
const inputProductName = document.getElementById('productName')
const inputProductHarga = document.getElementById('productPrice')
const tagRingkasanKeranjang = document.getElementById("ringkasanKeranjang")     
const tagTotalBelanja = document.getElementById("totalBelanja")  
const tagPesanRingkasan = document.getElementById("pesanRingkasan");


helloKasir.innerText = "📝✨ Tuliskan nama Anda sebagai kasir agar pelayanan tercatat."

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

const keranjang = []

function kosongkanKeranjang() {
    keranjang.length = 0;
    tampilkanKeranjang();
    tagPesanRingkasan.innerText = "Keranjang dikosongkan. Siap melayani pelanggan berikutnya.";
}

/// ==========================================

function simpanNamaKasir() {
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
    let ditemukan = false;
    for (let i = 0; i < keranjang.length; i++) {
        if (keranjang[i].id === itemId) {
            keranjang[i].jumlah += 1;
            ditemukan = true;
            console.table(keranjang);

        }
    }
    if (!ditemukan) {
        for (let j = 0; j < daftarProduk.length; j++) {
            if (daftarProduk[j].id === itemId) {
                keranjang.push({
                    id: daftarProduk[j].id,
                    nama: daftarProduk[j].nama,
                    harga: daftarProduk[j].harga,
                    jumlah: 1
                });
            }
        }
        console.table(keranjang);
    }
    tampilkanKeranjang();
}

function hitungTotal() {
    let total = 0;
    for (let i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga * keranjang[i].jumlah;
    }
    return total;
}

function ubahJumlah(idProduk, aksi) {
    for (let i = 0; i < keranjang.length; i++) {
        if (keranjang[i].id === idProduk) {
            if (aksi === "tambah") {
                keranjang[i].jumlah += 1;
            } else if (aksi === "kurang") {
                keranjang[i].jumlah -= 1;
                if (keranjang[i].jumlah <= 0) {
                    keranjang.splice(i, 1);
                }
            }
        }
    }
    tampilkanKeranjang();
}


function tampilkanKeranjang(){
     if (keranjang.length === 0) {
        tagRingkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
        tagTotalBelanja.innerText = "Total: Rp 0";
        return;
    }

    let isi = "";
    for (let i = 0; i < keranjang.length; i++) {
        const item = keranjang[i];
        const subtotal = item.harga * item.jumlah;
        isi += '<div class="item-keranjang">';
        isi += '<strong>' + item.nama + '</strong>';
        isi += '<span>Jumlah: ' + item.jumlah + ' x Rp ' + formatRupiah(item.harga) + '</span>';
        isi += '<p>Subtotal: Rp ' + formatRupiah(subtotal) + '</p>';
        isi += '<div class="kontrol">';
        isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item.id + '\', \'tambah\')">+</button>';
        isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item.id + '\', \'kurang\')">-</button>';
        isi += '</div>';
        isi += '</div>';
    }

    tagRingkasanKeranjang.innerHTML = isi;
    const total = hitungTotal();

    tagTotalBelanja.innerText = "Total: " + formatRupiah(total);

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
tampilkanKeranjang()


