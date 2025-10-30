<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>


## Array \& Operasi Dasar

### Case 1: Menyimpan Daftar Nama Siswa

```javascript
let daftarSiswa = ["Andi", "Budi", "Citra", "Dina"];
console.log(daftarSiswa[0]); // Output: Andi
console.log(daftarSiswa.length); // Output: 4
```

**Penjelasan**: Array digunakan untuk menyimpan multiple data dengan tipe yang sama dalam satu variabel. Index dimulai dari 0.

**Alasan**: Lebih efisien daripada membuat variabel terpisah untuk setiap siswa.

**Kelebihan**:

- Mudah mengelola data yang sejenis
- Akses data cepat dengan index

**Kekurangan**:

- Index tetap (tidak fleksibel seperti object)
- Harus ingat urutan data


### Case 2: Menambah Item ke Keranjang Belanja

```javascript
let keranjang = ["Apel", "Jeruk"];
keranjang.push("Mangga");
console.log(keranjang); // Output: ["Apel", "Jeruk", "Mangga"]
```

**Penjelasan**: Method `push()` menambahkan element baru di akhir array.

**Alasan**: Simulasi real-world dimana user menambah item ke keranjang.

**Kelebihan**:

- Mudah menambah data baru
- Tidak perlu tau panjang array sebelumnya

**Kekurangan**:

- Hanya bisa menambah di akhir
- Mengubah array original


### Case 3: Menghapus Item Terakhir dari Todo List

```javascript
let todoList = ["Belajar JS", "Makan siang", "Olahraga"];
let itemDihapus = todoList.pop();
console.log(itemDihapus); // Output: "Olahraga"
console.log(todoList); // Output: ["Belajar JS", "Makan siang"]
```

**Penjelasan**: Method `pop()` menghapus dan mengembalikan element terakhir array.

**Alasan**: Berguna untuk menyelesaikan task terakhir dalam todo list.

**Kelebihan**:

- Mudah menghapus item terakhir
- Mengembalikan nilai yang dihapus

**Kekurangan**:

- Hanya bisa hapus dari belakang
- Mengubah array original


### Case 4: Menambah Item di Awal Array Antrian

```javascript
let antrian = ["Budi", "Citra"];
antrian.unshift("Andi");
console.log(antrian); // Output: ["Andi", "Budi", "Citra"]
```

**Penjelasan**: Method `unshift()` menambahkan element baru di awal array.

**Alasan**: Simulasi antrian dimana ada orang yang datang lebih dulu.

**Kelebihan**:

- Bisa menambah di posisi pertama
- Otomatis menggeser element lain

**Kekurangan**:

- Lebih lambat karena harus menggeser semua element
- Mengubah index element lain


### Case 5: Menghapus Item Pertama dari Array

```javascript
let playlist = ["Lagu1", "Lagu2", "Lagu3"];
let laguSelesai = playlist.shift();
console.log(laguSelesai); // Output: "Lagu1"
console.log(playlist); // Output: ["Lagu2", "Lagu3"]
```

**Penjelasan**: Method `shift()` menghapus dan mengembalikan element pertama array.

**Alasan**: Berguna untuk simulasi playlist yang sudah selesai diputar.

**Kelebihan**:

- Mudah menghapus item pertama
- Mengembalikan nilai yang dihapus

**Kekurangan**:

- Harus menggeser semua element
- Performa lebih lambat untuk array besar


### Case 6: Mencari Index Item dalam Array Inventori

```javascript
let inventori = ["Mouse", "Keyboard", "Monitor"];
let indexKeyboard = inventori.indexOf("Keyboard");
console.log(indexKeyboard); // Output: 1
console.log(inventori.indexOf("Speaker")); // Output: -1
```

**Penjelasan**: Method `indexOf()` mencari posisi pertama element dalam array. Mengembalikan -1 jika tidak ditemukan.

**Alasan**: Penting untuk cek apakah item ada dalam inventori.

**Kelebihan**:

- Mudah mencari posisi item
- Memberikan konfirmasi keberadaan item

**Kekurangan**:

- Hanya menemukan kemunculan pertama
- Case sensitive untuk string


### Case 7: Cek Keberadaan Item dengan includes()

```javascript
let buahTersedia = ["Apel", "Jeruk", "Pisang"];
console.log(buahTersedia.includes("Apel")); // Output: true
console.log(buahTersedia.includes("Durian")); // Output: false
```

**Penjelasan**: Method `includes()` mengecek apakah array mengandung element tertentu, mengembalikan boolean.

**Alasan**: Lebih mudah untuk cek keberadaan tanpa peduli posisinya.

**Kelebihan**:

- Hasil langsung boolean (true/false)
- Lebih readable daripada indexOf()

**Kekurangan**:

- Tidak memberikan informasi posisi
- Hanya untuk pengecekan sederhana


### Case 8: Menggabungkan Dua Array Tim

```javascript
let timA = ["Player1", "Player2"];
let timB = ["Player3", "Player4"];
let semuaTim = timA.concat(timB);
console.log(semuaTim); // Output: ["Player1", "Player2", "Player3", "Player4"]
```

**Penjelasan**: Method `concat()` menggabungkan dua atau lebih array menjadi array baru.

**Alasan**: Berguna untuk menggabungkan data dari sumber berbeda.

**Kelebihan**:

- Tidak mengubah array original
- Bisa gabung multiple array sekaligus

**Kekurangan**:

- Membuat array baru (memori tambahan)
- Untuk array besar bisa lambat


### Case 9: Memotong Array Berdasarkan Range

```javascript
let angka = [1, 2, 3, 4, 5, 6];
let potongAngka = angka.slice(1, 4);
console.log(potongAngka); // Output: [2, 3, 4]
console.log(angka); // Output: [1, 2, 3, 4, 5, 6] (tidak berubah)
```

**Penjelasan**: Method `slice()` mengambil bagian array dari index start hingga end (tidak termasuk end).

**Alasan**: Berguna untuk pagination atau mengambil data tertentu.

**Kelebihan**:

- Tidak mengubah array original
- Fleksibel dalam menentukan range

**Kekurangan**:

- Harus hafal konsep start dan end index
- Membuat array baru


### Case 10: Mengubah Array Jadi String

```javascript
let hobi = ["Membaca", "Menulis", "Coding"];
let teksHobi = hobi.join(", ");
console.log(teksHobi); // Output: "Membaca, Menulis, Coding"
```

**Penjelasan**: Method `join()` menggabungkan semua element array menjadi string dengan separator.

**Alasan**: Berguna untuk menampilkan list data ke user dalam format readable.

**Kelebihan**:

- Mudah convert array ke string
- Bisa custom separator

**Kekurangan**:

- Kehilangan struktur array
- Semua element jadi string


### Case 11: Membalik Urutan Array

```javascript
let urutan = [1, 2, 3, 4, 5];
urutan.reverse();
console.log(urutan); // Output: [5, 4, 3, 2, 1]
```

**Penjelasan**: Method `reverse()` membalik urutan element dalam array.

**Alasan**: Berguna untuk sorting terbalik atau mengubah urutan tampilan.

**Kelebihan**:

- Mudah membalik urutan
- Operasi cepat

**Kekurangan**:

- Mengubah array original
- Tidak bisa undo tanpa backup


### Case 12: Mengurutkan Array Nama

```javascript
let nama = ["Charlie", "Alice", "Bob"];
nama.sort();
console.log(nama); // Output: ["Alice", "Bob", "Charlie"]
```

**Penjelasan**: Method `sort()` mengurutkan element array secara alfabetis (default) atau sesuai fungsi compare.

**Alasan**: Penting untuk menampilkan data secara terurut kepada user.

**Kelebihan**:

- Mudah mengurutkan data
- Built-in function

**Kekurangan**:

- Default sorting adalah alphabetical (tidak baik untuk angka)
- Mengubah array original


## Array Methods

### Case 13: Menampilkan Semua Produk dengan forEach

```javascript
let produk = ["Laptop", "Mouse", "Keyboard"];
produk.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
});
// Output: 1. Laptop, 2. Mouse, 3. Keyboard
```

**Penjelasan**: Method `forEach()` menjalankan fungsi untuk setiap element array tanpa mengubah array.

**Alasan**: Ideal untuk menampilkan data atau melakukan aksi pada setiap item.

**Kelebihan**:

- Kode lebih bersih daripada for loop
- Mudah akses index dan value

**Kekurangan**:

- Tidak bisa return value
- Tidak bisa break atau continue


### Case 14: Mengubah Harga Produk dengan Diskon

```javascript
let hargaAsli = [100000, 50000, 25000];
let hargaDiskon = hargaAsli.map(function(harga) {
    return harga * 0.8; // diskon 20%
});
console.log(hargaDiskon); // Output: [80000, 40000, 20000]
```

**Penjelasan**: Method `map()` membuat array baru dengan hasil transformasi setiap element.

**Alasan**: Perfect untuk mengubah format data tanpa mengubah data original.

**Kelebihan**:

- Tidak mengubah array original
- Mudah transform data

**Kekurangan**:

- Membuat array baru (memori ekstra)
- Harus return value di callback


### Case 15: Filter Nilai Ujian yang Lulus

```javascript
let nilaiUjian = [85, 60, 75, 90, 55];
let nilaiLulus = nilaiUjian.filter(function(nilai) {
    return nilai >= 70;
});
console.log(nilaiLulus); // Output: [85, 75, 90]
```

**Penjelasan**: Method `filter()` membuat array baru berisi element yang memenuhi kondisi.

**Alasan**: Berguna untuk mendapatkan data yang sesuai kriteria tertentu.

**Kelebihan**:

- Tidak mengubah array original
- Sintaks mudah dipahami

**Kekurangan**:

- Membuat array baru
- Performa lambat untuk array sangat besar


### Case 16: Menghitung Total Penjualan dengan reduce

```javascript
let penjualan = [150000, 200000, 100000, 300000];
let totalPenjualan = penjualan.reduce(function(total, nilai) {
    return total + nilai;
}, 0);
console.log(totalPenjualan); // Output: 750000
```

**Penjelasan**: Method `reduce()` mengurangi array menjadi single value dengan mengakumulasi hasil.

**Alasan**: Perfect untuk operasi matematika seperti sum, average, atau aggregasi data.

**Kelebihan**:

- Sangat powerful untuk aggregasi
- Bisa return tipe data apapun

**Kekurangan**:

- Konsep agak sulit untuk pemula
- Perlu initial value untuk safety


### Case 17: Mencari Produk Berdasarkan ID

```javascript
let produk = [
    {id: 1, nama: "Laptop"},
    {id: 2, nama: "Mouse"},
    {id: 3, nama: "Keyboard"}
];
let produkDicari = produk.find(function(item) {
    return item.id === 2;
});
console.log(produkDicari); // Output: {id: 2, nama: "Mouse"}
```

**Penjelasan**: Method `find()` mengembalikan element pertama yang memenuhi kondisi.

**Alasan**: Berguna untuk pencarian data spesifik dalam array object.

**Kelebihan**:

- Langsung return element yang dicari
- Stop searching setelah ketemu

**Kekurangan**:

- Hanya return hasil pertama
- Return undefined jika tidak ketemu


### Case 18: Cek Apakah Ada Nilai Negatif

```javascript
let saldo = [100000, -50000, 200000];
let adaNegatif = saldo.some(function(nilai) {
    return nilai < 0;
});
console.log(adaNegatif); // Output: true
```

**Penjelasan**: Method `some()` mengecek apakah minimal ada satu element yang memenuhi kondisi.

**Alasan**: Berguna untuk validasi data atau pengecekan kondisi tertentu.

**Kelebihan**:

- Efisien (stop saat ketemu true)
- Return boolean yang jelas

**Kekurangan**:

- Hanya return true/false
- Tidak memberikan info element mana yang memenuhi


### Case 19: Validasi Semua Input Required

```javascript
let inputForm = ["John", "john@email.com", "password123"];
let semuaTerisi = inputForm.every(function(input) {
    return input.length > 0;
});
console.log(semuaTerisi); // Output: true
```

**Penjelasan**: Method `every()` mengecek apakah semua element memenuhi kondisi.

**Alasan**: Perfect untuk validasi form atau memastikan semua data lengkap.

**Kelebihan**:

- Mudah validasi semua element
- Stop saat ketemu false (efisien)

**Kekurangan**:

- Hanya return boolean
- Tidak tau element mana yang gagal


### Case 20: Mencari Index Student Berdasarkan Nama

```javascript
let students = ["Alice", "Bob", "Charlie", "Alice"];
let indexAlice = students.findIndex(function(nama) {
    return nama === "Alice";
});
console.log(indexAlice); // Output: 0
```

**Penjelasan**: Method `findIndex()` mengembalikan index element pertama yang memenuhi kondisi.

**Alasan**: Berguna saat butuh posisi element untuk operasi lebih lanjut.

**Kelebihan**:

- Return index untuk manipulasi lebih lanjut
- Lebih fleksibel dari indexOf untuk kondisi kompleks

**Kekurangan**:

- Hanya return index pertama
- Return -1 jika tidak ketemu


### Case 21: Flatten Array Kategori Produk

```javascript
let kategori = [["Laptop", "PC"], ["Mouse", "Keyboard"], ["Speaker"]];
let semuaProduk = kategori.flat();
console.log(semuaProduk); // Output: ["Laptop", "PC", "Mouse", "Keyboard", "Speaker"]
```

**Penjelasan**: Method `flat()` meratakan nested array menjadi satu level.

**Alasan**: Berguna saat data tersimpan dalam struktur nested tapi butuh array flat.

**Kelebihan**:

- Mudah flatten nested array
- Bisa set depth level

**Kekurangan**:

- Tidak tersedia di browser lama
- Kehilangan struktur grouping original


### Case 22: Transform dan Flatten Data Sekaligus

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.flatMap(function(num) {
    return [num, num * 2];
});
console.log(doubled); // Output: [1, 2, 2, 4, 3, 6]
```

**Penjelasan**: Method `flatMap()` kombinasi `map()` dan `flat()`, transform kemudian flatten.

**Alasan**: Efisien saat butuh transform data yang menghasilkan array.

**Kelebihan**:

- Gabungan dua operasi sekaligus
- Lebih efisien dari map().flat()

**Kekurangan**:

- Konsep agak kompleks untuk pemula
- Tidak tersedia di browser lama


### Case 23: Copy Array dengan Spread Operator

```javascript
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3]
console.log(copiedArray); // Output: [1, 2, 3, 4]
```

**Penjelasan**: Spread operator (...) membuat shallow copy array baru.

**Alasan**: Penting untuk avoid mutation pada array original.

**Kelebihan**:

- Sintaks singkat dan modern
- Tidak mengubah array original

**Kekurangan**:

- Hanya shallow copy (masalah untuk nested object)
- Sintaks baru, mungkin bingung untuk pemula


### Case 24: Menggabung Array dengan Spread

```javascript
let buah = ["Apel", "Jeruk"];
let sayur = ["Wortel", "Bayam"];
let belanja = [...buah, ...sayur, "Susu"];
console.log(belanja); // Output: ["Apel", "Jeruk", "Wortel", "Bayam", "Susu"]
```

**Penjelasan**: Spread operator bisa digunakan untuk menggabungkan array dengan sintaks yang bersih.

**Alasan**: Alternative modern dari concat() yang lebih fleksibel.

**Kelebihan**:

- Sintaks bersih dan readable
- Bisa insert element di tengah

**Kekurangan**:

- Membuat array baru (memori tambahan)
- Perlu pemahaman ES6


### Case 25: Destructuring Array untuk Multiple Assignment

```javascript
let koordinat = [10, 20, 30];
let [x, y, z] = koordinat;
console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30
```

**Penjelasan**: Destructuring assignment memungkinkan ekstrak nilai array ke variabel terpisah.

**Alasan**: Sintaks yang elegant untuk assign multiple values sekaligus.

**Kelebihan**:

- Kode lebih bersih dan readable
- Bisa skip element dengan comma

**Kekurangan**:

- Konsep baru untuk pemula
- Harus sesuai urutan array

***

Study case ini dirancang progresif dari konsep dasar hingga modern ES6 features, membantu siswa memahami array secara komprehensif sambil melihat aplikasi real-world nya.

