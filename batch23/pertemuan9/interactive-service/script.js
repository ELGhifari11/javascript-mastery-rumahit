const inputNamaKasir = document.getElementById("namaKasir");
const pesanKasir = document.getElementById("pesanKasir");
const daftarProdukElemen = document.getElementById("daftarProduk");
const ringkasanKeranjang = document.getElementById("ringkasanKeranjang");
const totalBelanjaElemen = document.getElementById("totalBelanja");
const pesanRingkasan = document.getElementById("pesanRingkasan");
const inputUangBayar = document.getElementById("uangBayar");
const pesanPembayaran = document.getElementById("pesanPembayaran");
const strukPembelian = document.getElementById("strukPembelian");

pesanKasir.innerText = "Tuliskan nama kasir agar pelayanan tercatat.";
ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
totalBelanjaElemen.innerText = "Total: Rp 0";
pesanRingkasan.innerText = "Belum ada ringkasan yang disimpan.";
pesanPembayaran.innerText = "Masukkan jumlah uang yang diterima.";
strukPembelian.innerHTML = "";

const kasir = {
    nama: ""
};

const daftarProduk = [
    { id: "beras", nama: "Beras Santri 1kg", harga: 15000 },
    { id: "gula", nama: "Gula Aren 500gr", harga: 12000 },
    { id: "teh", nama: "Teh Wangi Pesantren", harga: 8000 },
    { id: "madu", nama: "Madu Murni 250ml", harga: 25000 },
    { id: "roti", nama: "Roti Manis", harga: 6000 }
];

const keranjang = [];

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID");
}

function simpanKasir() {
    const nama = inputNamaKasir.value.trim();
    if (nama === "") {
        pesanKasir.innerText = "Nama kasir belum diisi.";
        return;
    }
    kasir.nama = nama;
    pesanKasir.innerText = "Assalamualaikum, Kasir " + nama + ". Silakan layani pelanggan dengan ramah.";
}

function tampilkanProduk() {
    let isi = "";
    for (let i = 0; i < daftarProduk.length; i++) {
        const produk = daftarProduk[i];
        isi += '<div class="item-produk">';
        isi += '<div><h3>' + produk.nama + '</h3><p>Rp ' + formatRupiah(produk.harga) + '</p></div>';
        isi += '<button onclick="tambahKeranjang(\'' + produk.id + '\')">Tambah</button>';
        isi += '</div>';
    }
    daftarProdukElemen.innerHTML = isi;
}

function tambahKeranjang(idProduk) {
    let ditemukan = false;
    for (let i = 0; i < keranjang.length; i++) {
        if (keranjang[i].id === idProduk) {
            keranjang[i].jumlah += 1;
            ditemukan = true;
        }
    }
    if (!ditemukan) {
        for (let j = 0; j < daftarProduk.length; j++) {
            if (daftarProduk[j].id === idProduk) {
                keranjang.push({
                    id: daftarProduk[j].id,
                    nama: daftarProduk[j].nama,
                    harga: daftarProduk[j].harga,
                    jumlah: 1
                });
            }
        }
    }
    tampilkanKeranjang();
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

function hitungTotal() {
    let total = 0;
    for (let i = 0; i < keranjang.length; i++) {
        total += keranjang[i].harga * keranjang[i].jumlah;
    }
    return total;
}

function tampilkanKeranjang() {
    if (keranjang.length === 0) {
        ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
        totalBelanjaElemen.innerText = "Total: Rp 0";
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
        isi += '<button onclick="ubahJumlah(\'' + item.id + '\', \'tambah\')">+1</button>';
        isi += '<button onclick="ubahJumlah(\'' + item.id + '\', \'kurang\')">-1</button>';
        isi += '</div>';
        isi += '</div>';
    }
    ringkasanKeranjang.innerHTML = isi;

    const total = hitungTotal();
    totalBelanjaElemen.innerText = "Total: Rp " + formatRupiah(total);
}

function kosongkanKeranjang() {
    keranjang.length = 0;
    tampilkanKeranjang();
    pesanRingkasan.innerText = "Keranjang dikosongkan. Siap melayani pelanggan berikutnya.";
}

function simpanRingkasan() {
    if (keranjang.length === 0) {
        pesanRingkasan.innerText = "Belum ada data untuk disimpan.";
        return;
    }
    const namaKasir = kasir.nama === "" ? "Kasir" : kasir.nama;
    pesanRingkasan.innerText = namaKasir + " mencatat " + keranjang.length + " jenis produk di keranjang.";
}

function prosesPembayaran() {
    const total = hitungTotal();
    if (keranjang.length === 0) {
        pesanPembayaran.innerText = "Tambahkan produk terlebih dahulu.";
        strukPembelian.innerHTML = "";
        return;
    }

    const uangMasuk = parseInt(inputUangBayar.value, 10);
    if (isNaN(uangMasuk)) {
        pesanPembayaran.innerText = "Masukkan angka uang yang diterima.";
        strukPembelian.innerHTML = "";
        return;
    }

    if (uangMasuk < total) {
        const selisih = total - uangMasuk;
        pesanPembayaran.innerText = "Uang kurang Rp " + formatRupiah(selisih) + ".";
        strukPembelian.innerHTML = "";
        return;
    }

    const kembalian = uangMasuk - total;
    pesanPembayaran.innerText = "Transaksi selesai. Kembalian Rp " + formatRupiah(kembalian) + ".";

    let isiStruk = "<strong>Struk Penjualan</strong>";
    const namaKasir = kasir.nama === "" ? "Belum dicatat" : kasir.nama;
    isiStruk += "<p>Kasir: " + namaKasir + "</p>";
    isiStruk += "<p>Daftar produk:</p>";
    for (let i = 0; i < keranjang.length; i++) {
        const item = keranjang[i];
        const subtotal = item.harga * item.jumlah;
        isiStruk += '<p>- ' + item.nama + ' (' + item.jumlah + ' x Rp ' + formatRupiah(item.harga) + ') = Rp ' + formatRupiah(subtotal) + '</p>';
    }
    isiStruk += "<p>Total: Rp " + formatRupiah(total) + "</p>";
    isiStruk += "<p>Uang diterima: Rp " + formatRupiah(uangMasuk) + "</p>";
    isiStruk += "<p>Kembalian: Rp " + formatRupiah(kembalian) + "</p>";

    strukPembelian.innerHTML = isiStruk;

    keranjang.length = 0;
    tampilkanKeranjang();
    inputUangBayar.value = "";
}

tampilkanProduk();
