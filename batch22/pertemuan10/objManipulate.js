


// // NB => INGAT SEMUA BUILD IN FUNCTION UNTUK MANIPULASI ARRAY 

// // 1. Mendekalrasi sebuah Object {}
// // 2. Mengenali Perbedaan Array [] dan Object {}
// // 3. Mengenali penyebutan  milik Object{} dan Array[] =>  Index,Property,Key,Value,Element
// // 4. Interaksi Spesifik Property pada object {}
// // 5. Interaksi  Spesifik Element pada array []
// // 6. Metode Inisialisasi ulang pada Property {}
// // 7. Metode Inisialisasi ulang pada Element di array []
// // 8. Metode Add new Key + Value Pada Object {} 
// // 9. Metode Add new index + Element Pada array []
// // 10. Metode Deklarasi Nested Array => Array di dalam Array 
// // 11. Metode Deklarasi Nested Object => Object di dalam Object 
// // 12. Delete Spesifik Property 
// // 13. Metode Loop dengan Object 
// // 14. Berbagai Opsi Penamaan Key 
// // 15. Metode Loop dengan Nested Object 
// // 16. Cara Memduplikasi Object Yang ada ke Object Baru 
// // 17. Membuat Object Berisi Property yang Memiliki Function
// // 18. Menerapkan Metode Spread Operator pada array dan Objec
// // 19. Menerapkan Metode Rest Operator pada array dan  Object
// // 20. Melakukan Metode Destructuring Array
// // 21. Melakukan Metode Destructuring Object




// const managePerpus = {

//     pengunjung: [],
//     buku: [],

//     add: function (key, value, type) {
//         if (!type || !['pengunjung', 'buku'].includes(type)) {
//             console.error('❌ Type harus "pengunjung" atau "buku"');
//             return false;
//         } 
//             this[type].push({[key]:value});
//             console.log(`✅ Data ${key} ditambahkan ke ${type}`);
//             return true;
//         },

//     delete: function() { },

//     get: function(type) {
//        if (type === 'all') {
//          return {
//             pengunjung: this.pengunjung,
//             buku: this.buku,
//         };
//        }
//     }
// }

// managePerpus.add("Nama", "Pengunjung 1", "pengunjung");
// managePerpus.add("Alamat", "Bekasi", "pengunjung");
// managePerpus.add("Phone", "089502433722", "pengunjung");

// managePerpus.add("Nama", "Buku 1", "buku");
// managePerpus.add("Alamat", "Bekasi", "buku");
// managePerpus.add("Phone", "089502433722", "buku");

// managePerpus.add("Nama", "Pengunjung 2", "pengunjung");
// managePerpus.add("Alamat", "Bekasi", "pengunjung");
// managePerpus.add("Phone", "089502433722", "pengunjung");

// managePerpus.add("Nama", "Buku 2", "buku");
// managePerpus.add("Alamat", "Bekasi", "buku");
// managePerpus.add("Phone", "089502433722", "buku");

// console.log(manageData.get('all'));

let obj1 = {
    key1 : "Value",
    key2 : "Bambang",
    key3 : function(a,b) {
        return a + b;
    },
    key4 : function(c) {
       return c;
    }
}

// console.log(obj1.key3(30,30));

// console.log(obj1.key4(10));



// Spread (...variabel) Memecah/Menyebar Elemen dari Iterable menjadi elemen individual
// Rest (...variabel) Mengumpulkan Beberapa Elemen menjadi satu array/object 

// SPREAD 
// const arr = [1,2,3];
// console.log(...arr); 
// console.log(`Ini tanpa ... ${arr}`); 

// // REST 
// function collect1(...a){
//     return a;
// }
// function collect2(a){
//     return `Ini Tanpa .... ${a}`;
// }

// console.log(collect1("Parameter 1","Parameter 2"));
// console.log(collect2("Parameter 1","Parameter 2"));



const sistemKaryawan = {
    // Data dasar
    namaPerusahaan: "PT. Coding Indonesia",
    alamat: "Jl. JavaScript No. 123",
    
    // Array untuk data
    daftarKaryawan: [],
    departemen: ["IT", "Marketing", "HRD", "Finance"],
    
    // Setting
    pengaturan: {
        "gaji-pokok": 5000000,
        "tunjangan-hari": 200000
    },
    
    // Auto ID
    nextId: 1,
    
    // ===== CRUD METHODS =====
    
    // CREATE - Tambah karyawan
    tambahKaryawan: function(nama, departemen, gaji) {
        // Validasi
        if (!nama || !departemen) {
            console.log("❌ Nama dan departemen harus diisi!");
            return false;
        }
        
        // Buat karyawan baru
        const karyawanBaru = {
            id: this.nextId++,
            nama: nama,
            departemen: departemen,
            gaji: gaji || this.pengaturan["gaji-pokok"],
            status: "Aktif",
            tanggalMasuk: new Date().toLocaleDateString('id-ID')
        };
        
        // Tambah ke array
        this.daftarKaryawan.push(karyawanBaru);
        console.log(`✅ Karyawan ${nama} berhasil ditambahkan dengan ID: ${karyawanBaru.id}`);
        return karyawanBaru;
    },
    
    // READ - Lihat semua karyawan
    lihatSemuaKaryawan: function() {
        console.log(`\n👥 === DAFTAR KARYAWAN ${this.namaPerusahaan} ===`);
        
        if (this.daftarKaryawan.length === 0) {
            console.log("Belum ada karyawan yang terdaftar.");
            return [];
        }
        
        // Loop dengan destructuring
        this.daftarKaryawan.forEach((karyawan, index) => {
            const { id, nama, departemen, gaji, status } = karyawan;
            console.log(`${index + 1}. [ID:${id}] ${nama} - ${departemen} - Rp ${gaji.toLocaleString()} - ${status}`);
        });
        
        return this.daftarKaryawan;
    },
    
    // READ - Cari karyawan
    cariKaryawan: function(keyword) {
        const hasil = this.daftarKaryawan.filter(karyawan => {
            if (typeof keyword === 'number') {
                return karyawan.id === keyword;
            } else {
                return karyawan.nama.toLowerCase().includes(keyword.toLowerCase()) ||
                       karyawan.departemen.toLowerCase().includes(keyword.toLowerCase());
            }
        });
        
        if (hasil.length === 0) {
            console.log(`❌ Karyawan dengan keyword "${keyword}" tidak ditemukan.`);
            return [];
        }
        
        console.log(`🔍 Ditemukan ${hasil.length} karyawan:`);
        hasil.forEach(({ id, nama, departemen, status }) => {
            console.log(`- [ID:${id}] ${nama} - ${departemen} (${status})`);
        });
        
        return hasil;
    },
    
    // UPDATE - Edit karyawan
    editKaryawan: function(id, updateData) {
        const index = this.daftarKaryawan.findIndex(karyawan => karyawan.id === id);
        
        if (index === -1) {
            console.log(`❌ Karyawan dengan ID ${id} tidak ditemukan.`);
            return false;
        }
        
        // Update dengan spread operator
        this.daftarKaryawan[index] = {
            ...this.daftarKaryawan[index],
            ...updateData
        };
        
        console.log(`✅ Karyawan ID ${id} berhasil diupdate.`);
        return this.daftarKaryawan[index];
    },
    
    // DELETE - Hapus karyawan
    hapusKaryawan: function(id) {
        const index = this.daftarKaryawan.findIndex(karyawan => karyawan.id === id);
        
        if (index === -1) {
            console.log(`❌ Karyawan dengan ID ${id} tidak ditemukan.`);
            return false;
        }
        
        const karyawanDihapus = this.daftarKaryawan[index];
        this.daftarKaryawan.splice(index, 1);
        
        console.log(`✅ Karyawan "${karyawanDihapus.nama}" berhasil dihapus.`);
        return karyawanDihapus;
    },
    
    // UTILITY - Statistik sederhana
    getStatistik: function() {
        const total = this.daftarKaryawan.length;
        const aktif = this.daftarKaryawan.filter(k => k.status === "Aktif").length;
        
        console.log("\n📊 === STATISTIK KARYAWAN ===");
        console.log(`Total Karyawan: ${total}`);
        console.log(`Karyawan Aktif: ${aktif}`);
        console.log(`Karyawan Non-Aktif: ${total - aktif}`);
        
        return { total, aktif, nonAktif: total - aktif };
    }
};

// ===== TESTING PROGRAM A =====
console.log("🚀 TESTING SISTEM KARYAWAN");

// CREATE
sistemKaryawan.tambahKaryawan("Alice Johnson", "IT", 8000000);
sistemKaryawan.tambahKaryawan("Bob Smith", "Marketing", 6000000);
sistemKaryawan.tambahKaryawan("Carol Wilson", "HRD");

// READ
sistemKaryawan.lihatSemuaKaryawan();
sistemKaryawan.cariKaryawan("Alice");
sistemKaryawan.cariKaryawan(1);

// UPDATE
sistemKaryawan.editKaryawan(2, { gaji: 6500000, status: "Aktif" });

// DELETE
sistemKaryawan.hapusKaryawan(3);

// STATISTIK
sistemKaryawan.getStatistik();
