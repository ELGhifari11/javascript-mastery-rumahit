import * as ui from "./modules/ui.js";
import * as utils from "./modules/utils.js";
import * as sales from "./modules/sales.js";

ui.initUI();
ui.renderProduk();
ui.renderKeranjang();
sales.updateStatsUI();
sales.toggleUangBayar();

(() => {
  try {
    const rawPenjualan = localStorage.getItem('pos_dataPenjualan');
    if (rawPenjualan) {
      const arr = JSON.parse(rawPenjualan);
      if (Array.isArray(arr)) state.dataPenjualan.splice(0, state.dataPenjualan.length, ...arr);
    }
    const savedKasir = localStorage.getItem('pos_kasir');
    if (savedKasir) { state.kasir.nama = savedKasir; ui.setPesanKasir("Assalamualaikum 👋 Kak " + savedKasir + " 😊"); }
    sales.updateStatsUI();
  } catch {}
})();

document.getElementById("btnSimpanKasir").addEventListener("click", sales.simpanKasir);
document.getElementById("btnOpenAddProduct").addEventListener("click", () => utils.togglePopup("1"));
document.getElementById("btnSubmitProduct").addEventListener("click", sales.addProduct);
document.getElementById("btnKosongkanKeranjang").addEventListener("click", sales.kosongkanKeranjang);
document.getElementById("metodeBayar").addEventListener("change", sales.toggleUangBayar);
document.getElementById("btnProsesPembayaran").addEventListener("click", sales.prosesPembayaran);

document.addEventListener("click", (e) => {
  if (e.target.matches(".close-btn")) {
    const target = e.target.getAttribute("data-target");
    utils.togglePopup(target);
  }
});

ui.refs.daftarProdukElemen.addEventListener("click", (e) => {
  if (e.target.matches(".btn-hapus-produk")) {
    const id = e.target.getAttribute("data-id");
    sales.hapusProduk(id);
  }
  if (e.target.matches(".btn-tambah-keranjang")) {
    const id = e.target.getAttribute("data-id");
    sales.tambahKeranjang(id);
  }
});

ui.refs.ringkasanKeranjang.addEventListener("click", (e) => {
  if (e.target.matches(".btn-plus")) {
    const id = e.target.getAttribute("data-id");
    sales.ubahJumlah(id, "tambah");
  }
  if (e.target.matches(".btn-minus")) {
    const id = e.target.getAttribute("data-id");
    sales.ubahJumlah(id, "kurang");
  }
});

ui.refs.logContainer.addEventListener("click", (e) => {
  if (e.target.matches(".btn-download-log")) {
    const idx = parseInt(e.target.getAttribute("data-idx"), 10);
    sales.downloadInvoiceFor(idx);
  }
  if (e.target.matches(".btn-detail-log")) {
    const idx = parseInt(e.target.getAttribute("data-idx"), 10);
    sales.showLogDetail(idx);
  }
});

const rerenderLog = () => sales.updateStatsUI();
ui.refs.filterKasir && ui.refs.filterKasir.addEventListener('change', rerenderLog);
ui.refs.filterPelanggan && ui.refs.filterPelanggan.addEventListener('change', rerenderLog);
ui.refs.filterMetode && ui.refs.filterMetode.addEventListener('change', rerenderLog);
ui.refs.filterSearch && ui.refs.filterSearch.addEventListener('input', rerenderLog);
ui.refs.filterReset && ui.refs.filterReset.addEventListener('click', () => {
  if (ui.refs.filterKasir) ui.refs.filterKasir.value = '__ALL__';
  if (ui.refs.filterPelanggan) ui.refs.filterPelanggan.value = '__ALL__';
  if (ui.refs.filterMetode) ui.refs.filterMetode.value = '__ALL__';
  if (ui.refs.filterSearch) ui.refs.filterSearch.value = '';
  sales.updateStatsUI();
});
import * as state from "./modules/state.js";
