<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

# Soal Tugas Day 10 

## Tugas Utama Adalah Untuk Explorasi Dan Memahami Secara Mendasar dan Menyeluruh  

***

# 📝 **CONTOH PROGRAM A: Daftar To-Do**

## **Program Simple dengan CRUD + Spread + Rest + Destructuring**

```javascript
const todoApp = {
    data: [],
    nextId: 1,
    
    // CREATE dengan REST OPERATOR - terima banyak tugas sekaligus
    tambahBanyak: function(...tugas) {  // REST: kumpulkan semua parameter jadi array
        console.log(`Akan menambah ${tugas.length} tugas:`);
        
        tugas.forEach(item => {
            if (item) {
                const todo = {
                    id: this.nextId++,
                    tugas: item,
                    selesai: false
                };
                this.data.push(todo);
                console.log(`✅ "${item}" ditambahkan!`);
            }
        });
    },
    
    // READ dengan DESTRUCTURING
    lihat: function() {
        console.log("\n📋 === TO-DO LIST ===");
        
        if (this.data.length === 0) {
            console.log("Tidak ada tugas.");
            return;
        }
        
        // DESTRUCTURING dalam forEach
        this.data.forEach((item, index) => {
            const { id, tugas, selesai } = item;  // DESTRUCTURING
            const status = selesai ? "✅" : "⭕";
            console.log(`${index + 1}. [${id}] ${tugas} ${status}`);
        });
    },
    
    // UPDATE dengan SPREAD OPERATOR
    edit: function(id, tugasBaru) {
        const index = this.data.findIndex(item => item.id === id);
        
        if (index === -1) {
            console.log(`❌ Tugas ID ${id} tidak ada!`);
            return;
        }
        
        // SPREAD OPERATOR: copy object + update
        this.data[index] = {
            ...this.data[index],  // SPREAD: ambil semua property lama
            tugas: tugasBaru      // timpa dengan data baru
        };
        
        console.log(`✅ Tugas ID ${id} diupdate!`);
    },
    
    // DELETE + return dengan SPREAD OPERATOR
    hapusBanyak: function(...ids) {  // REST: kumpulkan banyak ID
        const dihapus = [];
        
        ids.forEach(id => {
            const index = this.data.findIndex(item => item.id === id);
            if (index !== -1) {
                const { tugas } = this.data[index];  // DESTRUCTURING
                this.data.splice(index, 1);
                dihapus.push(tugas);
            }
        });
        
        // SPREAD OPERATOR: pecah array jadi string
        console.log(`✅ Berhasil hapus: ${dihapus.join(', ')}`);
        return [...dihapus];  // SPREAD: return copy array
    },
    
    // UTILITY dengan SPREAD dan REST
    salin: function(...pilihId) {  // REST: terima banyak ID
        if (pilihId.length === 0) {
            // SPREAD: copy semua data
            return [...this.data];  // SPREAD: return copy array
        }
        
        // Filter dan copy data tertentu
        const dipilih = this.data.filter(item => pilihId.includes(item.id));
        return [...dipilih];  // SPREAD: return copy
    }
};

// Test dengan SPREAD OPERATOR
console.log("🚀 TESTING TO-DO APP");

// REST OPERATOR: kirim banyak parameter sekaligus
todoApp.tambahBanyak("Belajar JavaScript", "Buat program CRUD", "Push ke GitHub");

// DESTRUCTURING: lihat semua
todoApp.lihat();

// SPREAD OPERATOR: edit data
todoApp.edit(2, "Buat program CRUD keren");

// REST OPERATOR: hapus banyak sekaligus
todoApp.hapusBanyak(1, 3);

todoApp.lihat();

// Test salin dengan SPREAD
const backup = todoApp.salin();
console.log("Backup data:", backup);
```


***

# 🍕 **TUGAS ANDA: Program Daftar Makanan**

## **Buat Object dengan Spread + Rest + Destructuring:**

```javascript
const menuMakanan = {
    data: [],
    nextId: 1,
    
    // 1. TUGAS: Buat method tambahBanyak(...makanan) dengan REST OPERATOR
    tambahBanyak: function(/* TUGAS: gunakan ...makanan */) {
        // - Gunakan REST parameter untuk terima banyak makanan sekaligus
        // - Loop dengan forEach
        // - Buat object: { id, nama, harga, tersedia: true }
        // - Push ke array data
        // - Console.log setiap makanan yang ditambahkan
    },
    
    // 2. TUGAS: Buat method lihat() dengan DESTRUCTURING
    lihat: function() {
        // - Console.log header "MENU MAKANAN"
        // - Cek jika kosong
        // - forEach dengan: const { id, nama, harga, tersedia } = item
        // - Tampilkan dengan status tersedia/habis
    },
    
    // 3. TUGAS: Buat method editHarga(updateData) dengan SPREAD OPERATOR
    editHarga: function(updateData) {
        // Parameter: { id: 1, harga: 30000 }
        // - Cari index berdasarkan updateData.id
        // - Update dengan: this.data[index] = { ...this.data[index], harga: updateData.harga }
        // - Console.log berhasil
    },
    
    // 4. TUGAS: Buat method hapusBanyak(...ids) dengan REST + DESTRUCTURING
    hapusBanyak: function(/* TUGAS: gunakan ...ids */) {
        // - Gunakan REST parameter untuk terima banyak ID
        // - Loop setiap ID
        // - Cari index, lalu destructuring: const { nama } = this.data[index]
        // - Splice untuk hapus
        // - Console.log nama yang dihapus
    },
    
    // 5. TUGAS: Buat method salinMenu(...pilihId) dengan SPREAD + REST
    salinMenu: function(/* TUGAS: gunakan ...pilihId */) {
        // - Jika tidak ada pilihId, return [...this.data] (copy semua)
        // - Jika ada pilihId, filter data berdasarkan ID yang dipilih
        // - Return [...filteredData] (copy hasil filter)
    }
};
```


***

## **🔥 Testing yang Harus Dilakukan:**

```javascript
// TUGAS: Jalankan testing ini setelah semua method selesai

console.log("🚀 TESTING MENU MAKANAN");

// 1. REST OPERATOR: tambah banyak makanan sekaligus
menuMakanan.tambahBanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
);

// 2. DESTRUCTURING: lihat semua
menuMakanan.lihat();

// 3. SPREAD OPERATOR: edit harga
menuMakanan.editHarga({ id: 1, harga: 28000 });
menuMakanan.editHarga({ id: 3, harga: 6000 });

// 4. REST + DESTRUCTURING: hapus banyak
menuMakanan.hapusBanyak(2, 4);

// 5. Lihat hasil akhir
menuMakanan.lihat();

// 6. SPREAD: salin menu
const menuBackup = menuMakanan.salinMenu(); // copy semua
const menuPilihan = menuMakanan.salinMenu(1, 3); // copy ID 1 dan 3

console.log("Backup semua menu:", menuBackup);
console.log("Menu pilihan:", menuPilihan);
```


***

## **🎯 Expected Output:**

```
🚀 TESTING MENU MAKANAN
Akan menambah 4 makanan:
✅ "Nasi Goreng" ditambahkan ke menu!
✅ "Mie Ayam" ditambahkan ke menu!
✅ "Es Teh" ditambahkan ke menu!
✅ "Ayam Bakar" ditambahkan ke menu!

🍽️ === MENU MAKANAN ===
1. [ID 1] Nasi Goreng - Rp 25.000 ✅ Tersedia
2. [ID 2] Mie Ayam - Rp 20.000 ✅ Tersedia
3. [ID 3] Es Teh - Rp 5.000 ✅ Tersedia
4. [ID 4] Ayam Bakar - Rp 35.000 ✅ Tersedia

✅ Harga menu ID 1 berhasil diupdate!
✅ Harga menu ID 3 berhasil diupdate!
✅ "Mie Ayam" dihapus!
✅ "Ayam Bakar" dihapus!

🍽️ === MENU MAKANAN ===
1. [ID 1] Nasi Goreng - Rp 28.000 ✅ Tersedia
2. [ID 3] Es Teh - Rp 6.000 ✅ Tersedia
```


***

## **📚 Konsep yang WAJIB Ada:**

### **SPREAD OPERATOR (...) - Memecah/Menyebar:**

- ✅ Copy object: `{ ...oldObject, newProperty }`
- ✅ Copy array: `[...oldArray]`
- ✅ Merge data: `{ ...data1, ...data2 }`


### **REST OPERATOR (...) - Mengumpulkan:**

- ✅ Function parameters: `function(...params)`
- ✅ Destructuring: `const [first, ...rest] = array`
- ✅ Collect multiple arguments jadi array


### **DESTRUCTURING - Extract:**

- ✅ Object: `const { nama, harga } = item`
- ✅ Array: `const [first, second] = array`

**Perbedaan Utama:**

- **SPREAD** = Pecah jadi individual elements ➡️ `...array` jadi `1, 2, 3`
- **REST** = Kumpulkan jadi array ⬅️ `(a, b, c)` jadi `[a, b, c]`

<div style="text-align: center">⁂</div>