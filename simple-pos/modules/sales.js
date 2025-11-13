import * as state from "./state.js";
import * as ui from "./ui.js";
import * as utils from "./utils.js";

export { toggleUangBayar, addProduct, simpanKasir, hapusProduk, tambahKeranjang, ubahJumlah, hitungTotal, kosongkanKeranjang, updateStatsUI, hitungStatistik, prosesPembayaran, downloadInvoiceFor, showLogDetail }

const toggleUangBayar = () => {
  if (ui.refs.selectPembayaran.value !== "Tunai") {
    document.getElementById("inputUangBayar").classList.add("hidden");
  } else {
    document.getElementById("inputUangBayar").classList.remove("hidden");
  }
};

const addProduct = () => {
  const id = ui.refs.inputProductId.value.trim();
  const nama = ui.refs.inputProductName.value.trim();
  const harga = parseInt(ui.refs.inputProductPrice.value, 10);
  if (!id || !nama || isNaN(harga) || harga <= 0) {
    utils.showNotif("ID, nama, dan harga produk harus diisi dengan benar.");
    return;
  }
  state.daftarProduk.unshift({ id, nama, harga });
  ui.renderProduk();
  utils.togglePopup("1");
  ui.refs.inputProductId.value = "";
  ui.refs.inputProductName.value = "";
  ui.refs.inputProductPrice.value = "";
};

const simpanKasir = () => {
  const nama = ui.refs.inputNamaKasir.value.trim();
  if (nama === "") {
    ui.setPesanKasir("Nama kasir belum diisi.");
    utils.showNotif("Nama kasir belum diisi.");
    return;
  }
  state.kasir.nama = nama;
  ui.setPesanKasir("Assalamualaikum 👋 Kak " + nama + " 😊");
  try { localStorage.setItem('pos_kasir', nama); } catch {}
};

const hapusProduk = idProduk => {
  const index = state.daftarProduk.findIndex(p => p.id === idProduk);
  if (index !== -1) {
    state.daftarProduk.splice(index, 1);
    ui.renderProduk();    
  }
};

const tambahKeranjang = idProduk => {
  let ditemukan = false;
  for (let i = 0; i < state.keranjang.length; i++) {
    if (state.keranjang[i].id === idProduk) {
      state.keranjang[i].jumlah += 1;
      ditemukan = true;
    }
  }
  if (!ditemukan) {
    for (let j = 0; j < state.daftarProduk.length; j++) {
      if (state.daftarProduk[j].id === idProduk) {
        state.keranjang.push({ id: state.daftarProduk[j].id, nama: state.daftarProduk[j].nama, harga: state.daftarProduk[j].harga, jumlah: 1 });
      }
    }
  }
  ui.renderKeranjang();
  ui.setTotalBelanja(hitungTotal());
};

const ubahJumlah = (idProduk, aksi) => {
  for (let i = 0; i < state.keranjang.length; i++) {
    if (state.keranjang[i].id === idProduk) {
      if (aksi === "tambah") {
        state.keranjang[i].jumlah += 1;
      } else if (aksi === "kurang") {
        state.keranjang[i].jumlah -= 1;
        if (state.keranjang[i].jumlah <= 0) {
          state.keranjang.splice(i, 1);
        }
      }
    }
  }
  ui.renderKeranjang();
  ui.setTotalBelanja(hitungTotal());
};

const hitungTotal = () => {
  let total = 0;
  for (let i = 0; i < state.keranjang.length; i++) {
    total += state.keranjang[i].harga * state.keranjang[i].jumlah;
  }
  return total;
};

const kosongkanKeranjang = () => {
  state.keranjang.length = 0;
  ui.renderKeranjang();
  ui.setTotalBelanja(0);
  ui.setPesanRingkasan("Keranjang dikosongkan. Siap melayani pelanggan berikutnya.");
};

const updateStatsUI = () => {
  const s = hitungStatistik();
  const topKasir = s.topKasir.map(x => `<p>- ${x.kasir} (${x.count} transaksi)</p>`).join("");
  const topPelanggan = s.topPelanggan.map(x => `<p>- ${x.pelanggan} (${x.count} transaksi)</p>`).join("");
  const topProdukChips = s.topProduk.slice(0, 3).map(x => `<span class="chip">${x.produk}<span class="chip-qty">${x.jumlah}</span></span>`).join("");
  ui.refs.statsContainer.innerHTML = `
    <div class="stat-cards">
      <div class="stat-card">
        <span class="stat-label">Total Omzet</span>
        <div class="stat-value">${utils.formatRupiah(s.totalOmzet)}</div>
      </div>
      <div class="stat-card">
        <span class="stat-label">Produk Terlaris</span>
        <div class="chip-list">${topProdukChips || '<span class="chip">-</span>'}</div>
      </div>
    </div>
    <div class="mini-stats">
      <div>
        <br>
        <strong>Kasir Teraktif</strong>
        ${topKasir || '<p>-</p>'}
      </div>
      <div>
      <br>
        <strong>Pelanggan Setia</strong>
        ${topPelanggan || '<p>-</p>'}
      </div>
    </div>
  `;
  updateFilterOptions();
  const filters = getFilters();
  const list = state.dataPenjualan.filter((d) => {
    const byKasir = !filters.kasir || filters.kasir === "__ALL__" || d.kasir === filters.kasir;
    const byPel = !filters.pelanggan || filters.pelanggan === "__ALL__" || d.pelanggan === filters.pelanggan;
    const byMetode = !filters.metode || filters.metode === "__ALL__" || d.payment === filters.metode;
    const q = (filters.q || "").toLowerCase();
    const inText = !q || (d.kasir || "").toLowerCase().includes(q) || (d.pelanggan || "").toLowerCase().includes(q) || (d.penjualan || []).some(it => (it.item || "").toLowerCase().includes(q));
    return byKasir && byPel && byMetode && inText;
  });
  const isiLog = list.map((d, i) => {
    const itemsShort = (d.penjualan || []).slice(0, 2).map(it => `${it.item} (${it.jumlah})`).join(", ");
    return `
      <div class="log-card">
        <div class="log-card-header">${d.date} ${d.time}</div>
        <div class="log-card-body">
          <p>Kasir: ${d.kasir}</p>
          <p>Pelanggan: ${d.pelanggan}</p>
          <p>Metode: ${d.payment}</p>
          <p>Total: ${utils.formatRupiah(d.total)}</p>
          <p>Items: ${itemsShort}${(d.penjualan || []).length > 2 ? '...' : ''}</p>
        </div>
        <div class="log-card-actions">
          <button class="button-kontrol btn-detail-log" data-idx="${state.dataPenjualan.indexOf(d)}">Detail</button>
          <button class="button-kontrol btn-download-log" data-idx="${state.dataPenjualan.indexOf(d)}">PDF</button>
        </div>
      </div>
    `;
  }).join("");
  ui.refs.logContainer.innerHTML = isiLog || "<p>Belum ada transaksi.</p>";
};

const updateFilterOptions = () => {
  const prevKasir = ui.refs.filterKasir ? ui.refs.filterKasir.value : '__ALL__';
  const prevPel = ui.refs.filterPelanggan ? ui.refs.filterPelanggan.value : '__ALL__';
  const prevMet = ui.refs.filterMetode ? ui.refs.filterMetode.value : '__ALL__';
  const kasirSet = Array.from(new Set(state.dataPenjualan.map(d => d.kasir).filter(Boolean)));
  const pelSet = Array.from(new Set(state.dataPenjualan.map(d => d.pelanggan).filter(Boolean)));
  const metodeSet = Array.from(new Set(state.dataPenjualan.map(d => d.payment).filter(Boolean)));
  const build = (opts) => ['__ALL__', ...opts].map(v => `<option value="${v}">${v === '__ALL__' ? 'Semua' : v}</option>`).join('');
  if (ui.refs.filterKasir) {
    ui.refs.filterKasir.innerHTML = build(kasirSet);
    ui.refs.filterKasir.value = kasirSet.includes(prevKasir) ? prevKasir : '__ALL__';
  }
  if (ui.refs.filterPelanggan) {
    ui.refs.filterPelanggan.innerHTML = build(pelSet);
    ui.refs.filterPelanggan.value = pelSet.includes(prevPel) ? prevPel : '__ALL__';
  }
  if (ui.refs.filterMetode) {
    ui.refs.filterMetode.innerHTML = build(metodeSet);
    ui.refs.filterMetode.value = metodeSet.includes(prevMet) ? prevMet : '__ALL__';
  }
};

const getFilters = () => {
  return {
    kasir: ui.refs.filterKasir ? ui.refs.filterKasir.value : '__ALL__',
    pelanggan: ui.refs.filterPelanggan ? ui.refs.filterPelanggan.value : '__ALL__',
    metode: ui.refs.filterMetode ? ui.refs.filterMetode.value : '__ALL__',
    q: ui.refs.filterSearch ? ui.refs.filterSearch.value : ''
  };
};

const hitungStatistik = () => {
  const countBy = (arr, key) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const k = arr[i][key] || "-";
      map.set(k, (map.get(k) || 0) + 1);
    }
    return Array.from(map.entries()).map(([k, v]) => ({ key: k, count: v }));
  };
  const kasirCounts = countBy(state.dataPenjualan, "kasir").sort((a, b) => b.count - a.count).map(x => ({ kasir: x.key, count: x.count }));
  const pelangganCounts = countBy(state.dataPenjualan, "pelanggan").sort((a, b) => b.count - a.count).map(x => ({ pelanggan: x.key, count: x.count }));
  const produkMap = new Map();
  for (let i = 0; i < state.dataPenjualan.length; i++) {
    const penj = state.dataPenjualan[i].penjualan || [];
    for (let j = 0; j < penj.length; j++) {
      const p = penj[j];
      const curr = produkMap.get(p.item) || 0;
      produkMap.set(p.item, curr + p.jumlah);
    }
  }
  const topProduk = Array.from(produkMap.entries()).map(([produk, jumlah]) => ({ produk, jumlah })).sort((a, b) => b.jumlah - a.jumlah);
  let totalOmzet = 0;
  for (let i = 0; i < state.dataPenjualan.length; i++) totalOmzet += state.dataPenjualan[i].total || 0;
  return { topKasir: kasirCounts, topPelanggan: pelangganCounts, topProduk, totalOmzet };
};

const prosesPembayaran = () => {
  const total = hitungTotal();
  let kembalian = 0;
  let uangMasuk = 0;
  if (ui.refs.selectPembayaran.value === "Tunai") {
    if (state.keranjang.length === 0) {
      ui.setPesanPembayaran("Tambahkan produk terlebih dahulu.");
      utils.showNotif("Keranjang masih kosong.");
      return;
    }
    uangMasuk = parseInt(ui.refs.inputUangBayar.value, 10);
    if (isNaN(uangMasuk)) {
      ui.setPesanPembayaran("Masukkan angka uang yang diterima.");
      utils.showNotif("Masukkan angka uang yang diterima.");
      return;
    }
    if (uangMasuk < total) {
      const selisih = total - uangMasuk;
      ui.setPesanPembayaran("Uang kurang " + utils.formatRupiah(selisih) + ".");
      utils.showNotif("Uang kurang " + utils.formatRupiah(selisih) + ".");
      return;
    }
    kembalian = uangMasuk - total;
  } else {
    uangMasuk = total;
    kembalian = 0;
  }
  ui.setPesanPembayaran("Transaksi selesai. Kembalian " + utils.formatRupiah(kembalian) + ".");
  const namaKasir = state.kasir.nama;
  const namaPelanggan = (ui.refs.inputNamaPelanggan.value || "-").trim();
  let isiStruk = "<strong>Struk Penjualan</strong>";
  isiStruk += "<p>" + utils.getDateStr() + " - " + utils.getTimeStr() + "</p>";
  isiStruk += "<p>Kasir: " + namaKasir + "</p>";
  isiStruk += "<p>Pelanggan: " + namaPelanggan + "</p>";
  isiStruk += "<p>Pembayaran: " + ui.refs.selectPembayaran.value + "</p>";
  isiStruk += "<br>";
  isiStruk += "<p>Daftar produk:</p>";
  const listItem = [];
  for (let i = 0; i < state.keranjang.length; i++) {
    const item = state.keranjang[i];
    const subtotal = item.harga * item.jumlah;
    listItem.push({ item: item.nama, harga: item.harga, jumlah: item.jumlah });
    isiStruk += '<p>- ' + item.nama + ' (' + item.jumlah + ') = ' + utils.formatRupiah(subtotal) + '</p>';
  }
  state.dataPenjualan.unshift({ kasir: namaKasir, pelanggan: namaPelanggan, date: utils.getDateStr(), time: utils.getTimeStr(), total: total, payment: ui.refs.selectPembayaran.value, penjualan: listItem });
  try { localStorage.setItem('pos_dataPenjualan', JSON.stringify(state.dataPenjualan)); } catch {}
  let str = "<br>";
  str += "<p>Total: " + utils.formatRupiah(total) + "</p>";
  str += "<p>Uang diterima: " + utils.formatRupiah(uangMasuk) + "</p>";
  str += "<p>Kembalian: " + utils.formatRupiah(kembalian) + "</p>";
  ui.refs.invoiceContent.innerHTML = isiStruk + str;
  const btnDownload = document.createElement("button");
  btnDownload.innerText = "Download PDF";
  btnDownload.style.marginTop = "10px";
  btnDownload.onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let yPos = 10;
    doc.setFontSize(16);
    doc.text("Struk Penjualan", 10, yPos);
    yPos += 10;
    doc.text(utils.getDateStr() + " - " + utils.getTimeStr(), 10, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text("Kasir: " + namaKasir, 10, yPos);
    yPos += 10;
    doc.text("Pelanggan: " + namaPelanggan, 10, yPos);
    yPos += 10;
    doc.text("Pembayaran: " + ui.refs.selectPembayaran.value, 10, yPos);
    yPos += 10;
    doc.text("Daftar produk:", 10, yPos);
    yPos += 6;
    listItem.forEach(item => {
      const totalItem = item.harga * item.jumlah;
      doc.text(`- ${item.item} ${utils.formatRupiah(item.harga)}  (${item.jumlah}) = ${utils.formatRupiah(totalItem)}`, 10, yPos);
      yPos += 6;
    });
    yPos += 4;
    doc.text("Total: " + utils.formatRupiah(total), 10, yPos);
    yPos += 6;
    doc.text("Uang diterima: " + utils.formatRupiah(uangMasuk), 10, yPos);
    yPos += 6;
    doc.text("Kembalian: " + utils.formatRupiah(kembalian), 10, yPos);
    doc.save("struk_penjualan.pdf");
  };
  const existingBtn = ui.refs.invoiceContent.querySelector("button");
  if (existingBtn) existingBtn.remove();
  ui.refs.invoiceContent.appendChild(btnDownload);
  utils.togglePopup("invoice");
  state.keranjang.length = 0;
  ui.renderKeranjang();
  ui.setTotalBelanja(0);
  ui.refs.inputUangBayar.value = "";
  updateStatsUI();

};

const downloadInvoiceFor = (idx) => {
  const d = state.dataPenjualan[idx];
  if (!d) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let yPos = 10;
  doc.setFontSize(16);
  doc.text("Struk Penjualan", 10, yPos);
  yPos += 10;
  doc.text(`${d.date} - ${d.time}`, 10, yPos);
  yPos += 10;
  doc.setFontSize(12);
  doc.text("Kasir: " + d.kasir, 10, yPos); yPos += 10;
  doc.text("Pelanggan: " + d.pelanggan, 10, yPos); yPos += 10;
  doc.text("Pembayaran: " + d.payment, 10, yPos); yPos += 10;
  doc.text("Daftar produk:", 10, yPos); yPos += 6;
  (d.penjualan || []).forEach(item => {
    const totalItem = item.harga * item.jumlah;
    doc.text(`- ${item.item} ${utils.formatRupiah(item.harga)}  (${item.jumlah}) = ${utils.formatRupiah(totalItem)}`, 10, yPos);
    yPos += 6;
  });
  yPos += 4;
  doc.text("Total: " + utils.formatRupiah(d.total), 10, yPos); yPos += 6;
  doc.save(`invoice_${idx + 1}.pdf`);
};

const showLogDetail = (idx) => {
  const d = state.dataPenjualan[idx];
  if (!d) return;
  let html = `<strong>Detail Transaksi</strong>`;
  html += `<p>${d.date} - ${d.time}</p>`;
  html += `<p>Kasir: ${d.kasir}</p>`;
  html += `<p>Pelanggan: ${d.pelanggan}</p>`;
  html += `<p>Pembayaran: ${d.payment}</p>`;
  html += `<br><p>Daftar produk:</p>`;
  (d.penjualan || []).forEach(item => {
    const subtotal = item.harga * item.jumlah;
    html += `<p>- ${item.item} (${item.jumlah}) = ${utils.formatRupiah(subtotal)}</p>`;
  });
  html += `<br><p>Total: ${utils.formatRupiah(d.total)}</p>`;
  ui.refs.detailContent.innerHTML = html;
  utils.togglePopup('detail');
};
