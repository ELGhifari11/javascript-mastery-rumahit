import * as state from "./state.js";
import * as utils from "./utils.js";

export {refs,initUI,renderProduk,renderKeranjang,setTotalBelanja,setPesanRingkasan,setPesanKasir,setPesanPembayaran}

const refs = {
  inputNamaKasir: document.getElementById("namaKasir"),
  pesanKasir: document.getElementById("pesanKasir"),
  daftarProdukElemen: document.getElementById("daftarProduk"),
  ringkasanKeranjang: document.getElementById("ringkasanKeranjang"),
  totalBelanjaElemen: document.getElementById("totalBelanja"),
  inputUangBayar: document.getElementById("uangBayar"),
  pesanPembayaran: document.getElementById("pesanPembayaran"),
  invoiceContent: document.getElementById("invoiceContent"),
  detailContent: document.getElementById("detailContent"),
  inputProductId: document.getElementById("productId"),
  inputProductName: document.getElementById("productName"),
  inputProductPrice: document.getElementById("productPrice"),
  selectPembayaran: document.getElementById("metodeBayar"),
  inputNamaPelanggan: document.getElementById("namaPelanggan"),
  statsContainer: document.getElementById("statistikContainer"),
  logContainer: document.getElementById("logContainer"),
  filterKasir: document.getElementById("filterKasir"),
  filterPelanggan: document.getElementById("filterPelanggan"),
  filterMetode: document.getElementById("filterMetode"),
  filterSearch: document.getElementById("filterSearch"),
  filterReset: document.getElementById("filterReset")
};

const initUI = () => {
  refs.pesanKasir.innerText = "📝✨ Tuliskan nama Anda sebagai kasir agar pelayanan tercatat.";
  refs.ringkasanKeranjang.innerHTML = "<p>Product will be displayed here.</p>";
  refs.totalBelanjaElemen.innerText = "Total: Rp 0";
};

const renderProduk = () => {
  let isi = "";
  for (let i = 0; i < state.daftarProduk.length; i++) {
    const produk = state.daftarProduk[i];
    isi += '<div class="item-produk">';
    isi += '<button class="button-kontrol btn-hapus-produk" data-id="' + produk.id + '">-</button>';
    isi += '<div><h3>' + produk.nama + '</h3><p>' + utils.formatRupiah(produk.harga) + '</p></div>';
    isi += '<button class="button-kontrol btn-tambah-keranjang" data-id="' + produk.id + '">>></button>';
    isi += '</div>';
  }
  refs.daftarProdukElemen.innerHTML = isi;
};

const renderKeranjang = () => {
  if (state.keranjang.length === 0) {
    refs.ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
    refs.totalBelanjaElemen.innerText = "Total: Rp 0";
    return;
  }
  let isi = "";
  for (let i = 0; i < state.keranjang.length; i++) {
    const item = state.keranjang[i];
    const subtotal = item.harga * item.jumlah;
    isi += '<div class="item-keranjang">';
    isi += '<strong>' + item.nama + '</strong>';
    isi += '<p>' + item.jumlah + ' x ' + utils.formatRupiah(item.harga) + '</p>';
    isi += '<p>Total: ' + utils.formatRupiah(subtotal) + '</p>';
    isi += '<div class="kontrol">';
    isi += '<button class="button-kontrol btn-plus" data-id="' + item.id + '">+</button>';
    isi += '<button class="button-kontrol btn-minus" data-id="' + item.id + '">-</button>';
    isi += '</div>';
    isi += '</div>';
  }
  refs.ringkasanKeranjang.innerHTML = isi;
};

const setTotalBelanja = total => {
  refs.totalBelanjaElemen.innerText = "Total: " + utils.formatRupiah(total);
};

const setPesanRingkasan = teks => {
  // optional: bisa tampilkan notifikasi saja
};

const setPesanKasir = teks => {
  refs.pesanKasir.innerText = teks;
};

const setPesanPembayaran = teks => {
  refs.pesanPembayaran.innerText = teks;
};
