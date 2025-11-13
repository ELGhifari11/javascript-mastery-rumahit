// const inputNamaKasir = document.getElementById("namaKasir");
// const pesanKasir = document.getElementById("pesanKasir");
// const daftarProdukElemen = document.getElementById("daftarProduk");
// const ringkasanKeranjang = document.getElementById("ringkasanKeranjang");
// const totalBelanjaElemen = document.getElementById("totalBelanja");
// const pesanRingkasan = document.getElementById("pesanRingkasan");
// const inputUangBayar = document.getElementById("uangBayar");
// const pesanPembayaran = document.getElementById("pesanPembayaran");
// const strukPembelian = document.getElementById("strukPembelian");
// const inputProductId = document.getElementById('productId');
// const inputProductName = document.getElementById('productName');
// const inputProductPrice = document.getElementById('productPrice');
// const selectPembayaran = document.getElementById('metodeBayar');

// const now = new Date();
// const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
// const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

// const teksStrukKosong = "<p>Belum ada struk penjualan.</p>";

// pesanKasir.innerText = "📝✨ Tuliskan nama Anda sebagai kasir agar pelayanan tercatat.";
// ringkasanKeranjang.innerHTML = "<p>Product will be displayed here.</p>";
// totalBelanjaElemen.innerText = "Total: Rp 0";
// strukPembelian.innerHTML = teksStrukKosong;

// function togglePopup(no) {
//     document.getElementById(`popupModal${no}`).classList.toggle("hidden");
// }

// function toggleUangBayar() {
//     if (selectPembayaran.value !== "Tunai") {
//         document.getElementById("inputUangBayar").classList.add("hidden");
//     } else {
//         document.getElementById("inputUangBayar").classList.remove("hidden");
//     }
// }

// const kasir = {
//     nama: ""
// };

// const daftarProduk = [{
//     id: "1",
//     nama: "Chiki",
//     harga: 2000
// }, {
//     id: "2",
//     nama: "Permen",
//     harga: 1000
// }, {
//     id: "3",
//     nama: "Wafer",
//     harga: 3000
// }, {
//     id: "4",
//     nama: "Biskuit",
//     harga: 2500
// }];

// const keranjang = [];

// const dataPenjualan = [];

// // ===================================


// function addProduct() {
//     const id = inputProductId.value.trim();
//     const nama = inputProductName.value.trim();
//     const harga = parseInt(inputProductPrice.value, 10);

//     if (!id || !nama || isNaN(harga) || harga <= 0) {
//         alert("ID, nama, dan harga produk harus diisi dengan benar.");
//         return;
//     }

//     daftarProduk.unshift({ id, nama, harga });
//     tampilkanProduk();
//     togglePopup('1');

//     // Kosongkan input setelah menambahkan produk
//     inputProductId.value = "";
//     inputProductName.value = "";
//     inputProductPrice.value = "";
// }


// function formatRupiah(angka) {
//     return angka.toLocaleString("id-ID", {
//         style: "currency",
//         currency: "IDR"
//     });
// }


// function simpanKasir() {
//     const nama = inputNamaKasir.value.trim();
//     if (nama === "") {
//         pesanKasir.innerText = "Nama kasir belum diisi.";
//         return;
//     }
//     kasir.nama = nama;
//     pesanKasir.innerText = "Assalamualaikum 👋 Kak " + nama + " 😊";
// }

// function hapusProduk(idProduk) {
//     const index = daftarProduk.findIndex(produk => produk.id === idProduk);
//     if (index !== -1) {
//         daftarProduk.splice(index, 1);
//         tampilkanProduk();
//     }
// }

// function tampilkanProduk() {
//     let isi = "";
//     for (let i = 0; i < daftarProduk.length; i++) {
//         const produk = daftarProduk[i];
//         isi += '<div class="item-produk">';
//         isi += '<button class="button-kontrol" onclick="hapusProduk(\'' + produk.id + '\')">-</button>';
//         isi += '<div><h3>' + produk.nama + '</h3><p>' + formatRupiah(produk.harga) + '</p></div>';
//         isi += '<button class="button-kontrol" onclick="tambahKeranjang(\'' + produk.id + '\')">>></button>';
//         isi += '</div>';
//     }
//     daftarProdukElemen.innerHTML = isi;
// }

// function tambahKeranjang(idProduk) {
//     let ditemukan = false;
//     for (let i = 0; i < keranjang.length; i++) {
//         if (keranjang[i].id === idProduk) {
//             keranjang[i].jumlah += 1;
//             ditemukan = true;
//         }
//     }
//     if (!ditemukan) {
//         for (let j = 0; j < daftarProduk.length; j++) {
//             if (daftarProduk[j].id === idProduk) {
//                 keranjang.push({
//                     id: daftarProduk[j].id,
//                     nama: daftarProduk[j].nama,
//                     harga: daftarProduk[j].harga,
//                     jumlah: 1
//                 });
//             }
//         }
//     }
//     tampilkanKeranjang();
// }

// function ubahJumlah(idProduk, aksi) {
//     for (let i = 0; i < keranjang.length; i++) {
//         if (keranjang[i].id === idProduk) {
//             if (aksi === "tambah") {
//                 keranjang[i].jumlah += 1;
//             } else if (aksi === "kurang") {
//                 keranjang[i].jumlah -= 1;
//                 if (keranjang[i].jumlah <= 0) {
//                     keranjang.splice(i, 1);
//                 }
//             }
//         }
//     }
//     tampilkanKeranjang();
// }

// function hitungTotal() {
//     let total = 0;
//     for (let i = 0; i < keranjang.length; i++) {
//         total += keranjang[i].harga * keranjang[i].jumlah;
//     }
//     return total;
// }

// function tampilkanKeranjang() {
//     if (keranjang.length === 0) {
//         ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
//         totalBelanjaElemen.innerText = "Total: Rp 0";
//         return;
//     }

//     let isi = "";
//     for (let i = 0; i < keranjang.length; i++) {
//         const item = keranjang[i];
//         const subtotal = item.harga * item.jumlah;
//         isi += '<div class="item-keranjang">';
//         isi += '<strong>' + item.nama + '</strong>';
//         isi += '<p>' + item.jumlah + ' x ' + formatRupiah(item.harga) + '</p>';
//         isi += '<p>Total: ' + formatRupiah(subtotal) + '</p>';
//         isi += '<div class="kontrol">';
//         isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item.id + '\', \'tambah\')">+</button>';
//         isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item.id + '\', \'kurang\')">-</button>';
//         isi += '</div>';
//         isi += '</div>';
//     }
//     ringkasanKeranjang.innerHTML = isi;

//     const total = hitungTotal();
//     totalBelanjaElemen.innerText = "Total: " + formatRupiah(total);
// }

// function kosongkanKeranjang() {
//     keranjang.length = 0;
//     tampilkanKeranjang();
//     pesanRingkasan.innerText = "Keranjang dikosongkan. Siap melayani pelanggan berikutnya.";
// }

// // function simpanRingkasan() {
// //     if (keranjang.length === 0) {
// //         pesanRingkasan.innerText = "Belum ada data untuk disimpan.";
// //         return;
// //     }
// //     const namaKasir = kasir.nama === "" ? "Kasir" : kasir.nama;
// //     pesanRingkasan.innerText = namaKasir + " mencatat " + keranjang.length + " jenis produk di keranjang.";
// // }

// function prosesPembayaran() {
//     const total = hitungTotal();
//     let kembalian = 0;
//     let uangMasuk = 0;

//     if (selectPembayaran.value === "Tunai") {
//         if (keranjang.length === 0) {
//             pesanPembayaran.innerText = "Tambahkan produk terlebih dahulu.";
//             strukPembelian.innerHTML = teksStrukKosong;
//             return;
//         }

//          uangMasuk = parseInt(inputUangBayar.value, 10);
//         if (isNaN(uangMasuk)) {
//             pesanPembayaran.innerText = "Masukkan angka uang yang diterima.";
//             strukPembelian.innerHTML = teksStrukKosong;
//             return;
//         }

//         if (uangMasuk < total) {
//             const selisih = total - uangMasuk;
//             pesanPembayaran.innerText = "Uang kurang " + formatRupiah(selisih) + ".";
//             strukPembelian.innerHTML = teksStrukKosong;
//             return;
//         }

//         kembalian = uangMasuk - total;
//     } else {
//         uangMasuk = total;
//         kembalian = 0;
//     }

//     pesanPembayaran.innerText = "Transaksi selesai. Kembalian " + formatRupiah(kembalian) + ".";
//     let isiStruk = "<strong>Struk Penjualan</strong>";
//     const namaKasir = kasir.nama === "" ? "Empty Name" : kasir.nama;
//     isiStruk += "<p>" + tanggal + " - " + jam + "</p>";
//     isiStruk += "<p>Kasir: " + namaKasir + "</p>";
//     isiStruk += "<p>Pembayaran: " + selectPembayaran.value + "</p>";
//     isiStruk += "<br>"
//     isiStruk += "<p>Daftar produk:</p>";
//     const listItem = []
//     for (let i = 0; i < keranjang.length; i++) {
//         const item = keranjang[i];
//         const subtotal = item.harga * item.jumlah;
//         listItem.unshift({ item: item.nama, harga: item.harga, jumlah: item.jumlah, total: formatRupiah(subtotal) })
//         isiStruk += '<p>- ' + item.nama + ' (' + item.jumlah + ') = ' + formatRupiah(subtotal) + '</p>';
//     }
//     dataPenjualan.unshift({ kasir : namaKasir, date: tanggal, time: jam, total : total, payment : selectPembayaran.value, penjualan : {...listItem} })
//     console.table(dataPenjualan);
//     isiStruk += "<br>"
//     isiStruk += "<p>Total: " + formatRupiah(total) + "</p>";
//     isiStruk += "<p>Uang diterima: " + formatRupiah(uangMasuk) + "</p>";
//     isiStruk += "<p>Kembalian: " + formatRupiah(kembalian) + "</p>";

//     strukPembelian.innerHTML = isiStruk;

//     // Tambahkan tombol download PDF
//     const btnDownload = document.createElement('button');
//     btnDownload.innerText = "Download PDF";
//     btnDownload.style.marginTop = "10px";
//     btnDownload.onclick = () => {
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();
//         let yPos = 10;

//         doc.setFontSize(16);
//         doc.text("Struk Penjualan", 10, yPos);
//         yPos += 10;

//         const now = new Date();
//         const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
//         const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
//         doc.text(`${dateStr} - ${timeStr}`, 10, yPos);
//         yPos += 10;

//         doc.setFontSize(12);
//         doc.text("Kasir: " + namaKasir, 10, yPos);
//         yPos += 10;
//         doc.text("Pembayaran: " + selectPembayaran.value, 10, yPos);
//         yPos += 10;

//         doc.text("Daftar produk:", 10, yPos);
//         yPos += 6;

//         listItem.forEach(item => {
//             doc.text(`- ${item.item} ${formatRupiah(item.harga)}  (${item.jumlah}) = ${formatRupiah(item.total)}`, 10, yPos);
//             yPos += 6;
//         });

//         yPos += 4;
//         doc.text("Total: " + formatRupiah(total), 10, yPos);
//         yPos += 6;
//         doc.text("Uang diterima: " + formatRupiah(uangMasuk), 10, yPos);
//         yPos += 6;
//         doc.text("Kembalian: " + formatRupiah(kembalian), 10, yPos);

//         doc.save("struk_penjualan.pdf");
//     };

//     // Hapus tombol lama jika ada sebelumnya
//     const existingBtn = strukPembelian.querySelector('button');
//     if (existingBtn) existingBtn.remove();

//     strukPembelian.appendChild(btnDownload);

//     keranjang.length = 0;
//     tampilkanKeranjang();
//     inputUangBayar.value = "";
// }


// tampilkanProduk();
