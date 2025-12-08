# HARI 10: Laporan & Analitik (Reports Dashboard)

**Selamat Datang di Ruang Rapat!** 📈

Data transaksi sudah menumpuk di Database (Hari 9).
Sekarang saatnya mengubah "Sampah Data" menjadi "Informasi Berharga" (Knowledge).
Kita akan menggunakan Array Manipulation tingkat dewa untuk menghitung Omzet, Terlaris, dan Export data.

**Target Hari Ini:**
1.  **Logic:** Menguasai `Array.reduce` untuk menghitung total.
2.  **UI:** Membuat Tabel Laporan Riwayat Transaksi.
3.  **Feature:** Membuat fitur **Download CSV** (Export ke Excel).

---

## BAGIAN 1: 🔬 Anatomi Syntax (Fundamental Knowledge)

### 1. `Array.reduce` 🧮
*Mesin penggiling Ajaib.*

*   **WHAT:** Mengubah sebongkah Array `[A, B, C]` menjadi SATU benda (Angka, Object, Bebas).
*   **ANALOGI:**
    *   `map`: Potong 5 jeruk -> jadi 5 irisan jeruk.
    *   `reduce`: Blender 5 jeruk -> jadi 1 gelas jus.
*   **ANATOMY:**
    ```javascript
    const struk = [1000, 2000, 5000];
    
    // (Accumulator, CurrentValue)
    const total = struk.reduce((wadah, nilaiSekarang) => {
        return wadah + nilaiSekarang;
    }, 0); // 0 adalah nilai awal wadah
    // Hasil: 8000
    ```

### 2. CSV (Comma Separated Values) 📄
*Format Excel Paling Primitif.*

Excel sebenarnya bisa membaca file teks biasa asalkan dipisahkan koma.
*   Contoh Isi:
    ```
    Tanggal,Kasir,Total
    2025-01-01,Budi,50000
    2025-01-02,Siti,30000
    ```
Kita bisa membuat string seperti itu di JS, lalu menyuruh browser mendownloadnya sebagai file `.csv` menggunakan teknik **Blob**.

**Visualisasi Data Pipeline:**

```mermaid
graph LR
    A[Raw Database (JSON)] --> B(Filter: Bulan Ini)
    B --> C(Map: Format Tabel)
    C --> D[Render HTML Table]
    
    B --> E(Reduce: Hitung Total)
    E --> F[Display Omzet]
    
    B --> G(Map: Format string CSV)
    G --> H[Download File.csv]
```

---

## BAGIAN 2: 🧠 Under The Hood (Teori Mendalam)

### Client-Side Exporting (Blob Object) 📦

Biasanya, download file itu tugas Server.
Tapi dengan HTML5, browser bisa membuat "File Virtual" di dalam memori RAM.
*   **Blob (Binary Large Object):** Gumpalan data mentah.
*   **URL.createObjectURL(blob):** Browser membuat link sementara `blob:http://localhost/...`.
*   Link ini kalau diklik, browser menganggapnya download file dari server, padahal dari RAM sendiri. Magic!

---

## BAGIAN 3: 🏗️ Pembangunan Milestones

Kita bekerja di folder `js/reports/`. Buat `js/reports/index.js`.

### Milestone 1: Fungsi Statistik & Render (`js/reports/index.js`)

Kita butuh fungsi untuk menghitung total omzet dari semua data transaksi.

```javascript
/* js/reports/index.js */
import { buatElemen, formatKeRupiah, formatTanggalWaktu } from '../utils/index.js';
import { ambilSemuaTransaksi } from '../db/index.js';

export function tampilkanLaporan() {
    const container = document.getElementById('laporan-container');
    if (!container) return; // Guard

    container.innerHTML = ''; // Reset UI
    const semuaTransaksi = ambilSemuaTransaksi(); // Ambil dari DB

    // --- LOGIC STATISTIK (Reduce) ---
    const totalOmzet = semuaTransaksi.reduce((acc, trx) => acc + trx.total, 0);
    const totalTransaksi = semuaTransaksi.length;
    // Hitung Item Terjual (Nested Loop / Reduce inside Reduce)
    const totalItem = semuaTransaksi.reduce((acc, trx) => {
        const itemDiNota = trx.items.reduce((subAcc, item) => subAcc + item.qty, 0);
        return acc + itemDiNota;
    }, 0);

    // --- UI BAGIAN 1: KARTU STATISTIK ---
    const statsContainer = buatElemen('div', { style: 'display: flex; gap: 20px; margin-bottom: 20px;' },
        buatKartuStat("Total Transaksi", totalTransaksi + " Nota", "#9b59b6"),
        buatKartuStat("Total Omzet", formatKeRupiah(totalOmzet), "#2ecc71"),
        buatKartuStat("Item Terjual", totalItem + " Pcs", "#e67e22")
    );

    // --- UI BAGIAN 2: TOMBOL EXPORT ---
    const btnExport = buatElemen('button', {
        className: 'btn-success',
        style: 'margin-bottom: 10px; padding: 10px; background: #27ae60; color: white; border: none; cursor: pointer; border-radius: 4px;',
        onClick: () => downloadCSV(semuaTransaksi)
    }, '📥 Download Laporan Excel (CSV)');

    // --- UI BAGIAN 3: TABEL RIWAYAT ---
    const tableContainer = buatElemen('div', { style: 'overflow-x: auto; background: white; padding: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-radius: 8px;' });
    const table = buatElemen('table', { className: 'data-table', style: 'width: 100%; border-collapse: collapse;' },
        buatElemen('thead', { style: 'background: #f8f9fa; border-bottom: 2px solid #ddd;' },
            buatElemen('tr', {},
                buatElemen('th', { style: 'padding: 12px; text-align: left;' }, 'ID'),
                buatElemen('th', { style: 'padding: 12px; text-align: left;' }, 'Tanggal'),
                buatElemen('th', { style: 'padding: 12px; text-align: left;' }, 'Kasir'),
                buatElemen('th', { style: 'padding: 12px; text-align: left;' }, 'Total'),
                buatElemen('th', { style: 'padding: 12px; text-align: left;' }, 'Aksi')
            )
        ),
        buatElemen('tbody', { id: 'laporan-tbody' })
    );
    
    tableContainer.appendChild(table);

    // RAKIT
    container.appendChild(statsContainer);
    container.appendChild(btnExport);
    container.appendChild(tableContainer);

    renderBarisLaporan(semuaTransaksi);
}

function buatKartuStat(judul, nilai, warna) {
    return buatElemen('div', { 
        style: `flex: 1; padding: 20px; background: white; border-left: 5px solid ${warna}; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-radius: 4px;` 
    },
        buatElemen('h4', { style: 'margin: 0 0 5px 0; color: #7f8c8d; font-size: 14px; text-transform: uppercase;' }, judul),
        buatElemen('h2', { style: 'margin: 0; color: #2c3e50;' }, nilai)
    );
}
```

### Milestone 2: Render Tabel Detail

Kita urutkan dari yang terbaru (Descending).

```javascript
function renderBarisLaporan(data) {
    const tbody = document.getElementById('laporan-tbody');
    
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" align="center" style="padding: 20px;">Belum ada riwayat transaksi.</td></tr>';
        return;
    }

    // Sort: Paling baru di atas (Compare ID karena ID = Timestamp, praktis!)
    const dataUrut = [...data].sort((a, b) => b.id - a.id);

    dataUrut.forEach(trx => {
        const tr = buatElemen('tr', { style: 'border-bottom: 1px solid #eee;' },
            buatElemen('td', { style: 'padding: 10px; font-family: monospace; color: #666;' }, `#${String(trx.id).slice(-4)}`),
            buatElemen('td', { style: 'padding: 10px;' }, formatTanggalWaktu(trx.date)), // Pakai fungsi utils yg dibuat di Day 1 (tambahin kalau belum)
            buatElemen('td', { style: 'padding: 10px;' }, trx.cashier),
            buatElemen('td', { style: 'padding: 10px; font-weight: bold;' }, formatKeRupiah(trx.total)),
            buatElemen('td', { style: 'padding: 10px;' }, 
                buatElemen('button', { 
                    className: 'btn-small',
                    style: 'cursor: pointer; background: #3498db; color: white; border: none; padding: 4px 8px; border-radius: 4px;',
                    onClick: () => alert("Detail Item:\n" + trx.items.map(i => `- ${i.name} x${i.qty} (${formatKeRupiah(i.price)})`).join('\n'))
                }, 'Detail')
            )
        );
        tbody.appendChild(tr);
    });
}
```
*Note: Jika `formatTanggalWaktu` belum ada di `js/utils/format.js`, buatlah sederhana: `new Date(iso).toLocaleString()`.

### Milestone 3: Fitur Export CSV (Magic!) 🧙‍♂️

```javascript
function downloadCSV(data) {
    if (!data || data.length === 0) return alert("Data kosong, mau download angin?");

    // 1. Header CSV
    const headers = ["ID Transaksi", "Waktu", "Kasir", "Total Belanja", "Bayar", "Kembali", "Rincian Barang"];
    
    // 2. Map Data ke String CSV
    const barisData = data.map(trx => {
        // Gabungkan item jadi satu string: "Kopi(2) | Roti(1)"
        // Kita replace koma di nama barang biar gak ngerusak CSV
        const rincian = trx.items.map(i => `${i.name.replace(/,/g, '')}(${i.qty})`).join(' | ');
        const waktuBersih = new Date(trx.date).toLocaleString().replace(/,/g, ''); // Hapus koma tanggal

        return [
            trx.id,
            waktuBersih,
            trx.cashier,
            trx.total,
            trx.paid,
            trx.change,
            rincian
        ].join(","); // Pisahkan kolom dengan koma
    });

    // 3. Gabung Header + Isi dengan Enter (\n)
    const csvContent = [headers.join(","), ...barisData].join("\n");

    // 4. Bikin Blob & Download Link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    // Elemen hantu (Hidden Link)
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Laporan_POS_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    
    // Bersihkan
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Hapus memori blob
}
```

### Milestone 4: Hubungkan Layout

Buka `js/layout.js`, tambahkan logika untuk tab `reports`.

```javascript
import { tampilkanLaporan } from './reports/index.js';

// ...
if (targetId === 'reports') {
    tampilkanLaporan();
}
```

---

## BAGIAN 4: 🛠️ Troubleshooting (Masalah Umum)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| File CSV berantakan di Excel | Region setting komputer kamu pakai titik koma `;` bukan koma `,`. | Excel Indonesia sering gitu. Solusi: Gunakan Google Sheets untuk buka CSV (pasti rapi). |
| Total Omzet salah (String concat) | `acc + trx.total` menjadi `"1000" + "2000" = "10002000"`. | Pastikan `trx.total` disimpan sebagai Number di DB. |
| `formatTanggalWaktu` not defined | Lupa buat fungsi helpernya. | Buat di utils atau pakai `new Date().toLocaleString()` langsung. |

---

## BAGIAN 5: 💪 Tugas Pembiasaan (Level Up)

### Tugas 1: Filter Tanggal 📅
Tambahkan `<input type="date">` di header laporan.
Beri event listener `change`.
Saat user pilih tanggal, filter array `semuaTransaksi` agar hanya menyisakan transaksi yg tanggalnya cocok.
Lalu panggil `renderBarisLaporan(filteredData)` dan update kartu statistik juga.

### Tugas 2: Profit Calculator 💰
Ini butuh perubahan Database Produk. Tambahkan kolom `modal` (harga beli) di produk.
Saat transaksi, simpan juga total modal.
Di laporan, hitung `Profit = Omzet - Total_Modal`.
Tampilkan di kartu statistik baru berwarna biru.

---

**Evaluasi Hari 10:**
Buka Tab laporan.
Lihat apakah angkanya masuk akal?
Download CSV, buka di Spreadsheet.
Jika kamu bisa melihat data penjualanmu di Excel, kamu sudah siap melaporkan hasil tokomu ke investor (atau dosen)!

Besok (Hari 11), kita akan memoles tampilan UI agar tidak kaku (Toast Message, Loading Spinner). 💅

*Sampai jumpa di Hari 11!*
