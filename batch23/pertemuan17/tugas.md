
# 📘 FUNDAMENTAL INTI

## Mengapa Kita Menggunakan async/await, try/catch, fetch(), dan .json()

Pembahasan ini dibuat agar siswa *benar-benar paham alasannya*, bukan hanya sekadar bisa mengetikkan kodenya.

---

# 1. Kenapa Harus Menggunakan `async/await`?

Di JavaScript, proses yang membutuhkan waktu seperti:

* mengambil data dari server
* membaca file
* menunggu timer
* memproses request API
* mengakses database

…tidak bisa dilakukan secara sinkron.
Kalau sinkron, browser akan **freeze**.

Sebelum ada `async/await`, programmer menggunakan:

* **callback** → berpotensi menimbulkan *callback hell*
* **Promise chaining** → lebih rapi, tapi masih melelahkan bila step banyak

Solusinya:

### ⭐ async/await membuat kode asinkron menjadi mudah dibaca

Contoh sederhana:

```js
const data = await ambilData()
```

Kode ini terlihat seperti kode biasa, padahal dia sedang menunggu Promise.

Itulah kenapa **async/await adalah standar modern** di seluruh framework JavaScript (React, Next.js, Vue, Express, dll).

---

# 2. Mengapa Memakai `try/catch`?

`async/await` sangat rapi, namun ada satu masalah:

* Bila terjadi error, kita harus punya cara menangkapnya.

Di Promise, kita menangkap error dengan `.catch()`.
Di `async/await`, error dilempar sebagai exception → sehingga diselesaikan dengan:

```js
try {
  // baris yang mungkin error
} catch(error) {
  // cara menangani error
}
```

### ⭐ try/catch membuat error handling lebih natural

Sehingga alur kode seperti:

1. ambil data
2. baca data
3. validasi
4. transform
5. simpan

…jadi sangat jelas dan rapi.

---

# 3. Mengapa `fetch()`?

Di dunia nyata, aplikasi wajib berkomunikasi dengan **server/API**.

Contoh API:

* `/login`
* `/products`
* `/user/profile`
* `/settings`
* `/score/update`

`fetch()` digunakan untuk:

* GET (mengambil data)
* POST (mengirim data)
* PUT (update)
* DELETE (hapus data)

❎ Dulu harus memakai XMLHttpRequest yang ribet
✔ Sekarang fetch adalah standar modern (native di browser).

`fetch()` mengembalikan **Promise**, sehingga sangat cocok dipakai dengan `async/await`.

---

# 4. Kenapa Harus Pakai `.json()` ?

Server biasanya mengirim data dalam format **JSON**, contoh:

```json
{
  "nama": "Ali",
  "umur": 22
}
```

Tetapi `fetch()` tidak langsung memberikan object.
Fetch memberikan objek **Response**, sehingga kita perlu mem-parse isinya.

Caranya:

```js
const data = await response.json();
```

Hasilnya adalah **object JavaScript**, siap digunakan.

---

# 🧩 25 STUDY CASE + CHALLENGE

(full Bahasa Indonesia – mudah dipahami)

Level:
🟢 Easy (1–8)
🟡 Medium (9–17)
🔴 Advance (18–25)

---

# 🟢 EASY LEVEL

---

## 1. Mengambil Data User Sederhana

**Study Case**

```js
async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}
getUser();
```

**Challenge**

* Tampilkan hanya `nama` dan `umur`.
* Simpan data ke `localStorage` dengan key `"user_1"`.

---

## 2. Menangani Error Ketika API Tidak Ditemukan

```js
async function loadErrorExample() {
  try {
    const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

    if (!res.ok) {
      throw new Error("Halaman tidak ditemukan (404)");
    }

    const data = await res.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

**Challenge**

* Simpan error ke `"last_error"` di localStorage.
* Buat alert sederhana berisi pesan error.

---

## 3. Fetch → json() → Menampilkan Daftar Judul Produk

```js
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  console.log(products.map(p => p.title));
}
```

**Challenge**

* Tampilkan hanya produk yang harganya > 100.
* Simpan daftar harga ke localStorage.

---

## 4. Refactor Callback ke async/await

Callback:

```js
function loadData(callback) {
  setTimeout(() => callback("Data siap"), 1000);
}
```

Async version:

```js
function loadDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data siap"), 1000);
  });
}

async function run() {
  const hasil = await loadDataPromise();
  console.log(hasil);
}
```

**Challenge**

* Tambahkan kemungkinan gagal (reject).
* Tangani error dengan try/catch.

---

## 5. Fungsi Delay Menggunakan Promise + Async

```js
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function runStep() {
  console.log("Mulai");
  await delay(1000);
  console.log("Selesai 1 detik");
}
```

**Challenge**

* Buat 3 step berurutan (delay 500, 1500, 2000 ms).
* Simpan waktu selesai ke localStorage.

---

## 6. Fetch Data Cart + Simpan ke localStorage

```js
async function loadCart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const cart = await res.json();
  localStorage.setItem("cart", JSON.stringify(cart));
}
```

**Challenge**

* Ambil kembali cart dari localStorage dan tampilkan.
* Hitung total harga barang.

---

## 7. Validasi Input Menggunakan Try/Catch

```js
async function saveName(name) {
  try {
    if (name.length < 3) throw new Error("Nama terlalu pendek");
    localStorage.setItem("username", name);
    console.log("Nama disimpan");
  } catch(error) {
    console.log(error.message);
  }
}
```

**Challenge**

* Jika error → simpan ke `"error_name"`.
* Jika sukses → tambahkan timestamp.

---

## 8. Filter Data Hasil Fetch

```js
async function getExpensive() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const expensive = products.filter(p => p.price > 300);
  console.log(expensive);
}
```

**Challenge**

* Simpan list produk mahal ke localStorage.
* Urutkan berdasarkan harga (descending).

---

# 🟡 MEDIUM LEVEL

---

## 9. POST: Mengirim Data ke API

```js
async function createUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Santri", age: 20 })
    });

    console.log(await res.json());
  } catch(error) {
    console.log("Gagal:", error);
  }
}
```

**Challenge**

* Tambahkan field “skills”.
* Simpan respons API ke localStorage.

---

## 10. PUT: Update Data

```js
async function updateUser() {
  const res = await fetch("https://dummyjson.com/users/1", {
    method: "PUT",
    body: JSON.stringify({ name: "Nama Baru" })
  });

  console.log(await res.json());
}
```

**Challenge**

* Tambahkan validasi: jika nama kosong → throw error.
* Simpan data hasil update ke localStorage.

---

## 11. DELETE: Menghapus Data

```js
async function deleteUser() {
  const res = await fetch("https://dummyjson.com/users/1", { method: "DELETE" });
  console.log(await res.json());
}
```

**Challenge**

* Jika sukses → tampilkan alert “User terhapus”.
* Simpan log ke localStorage.

---

## 12. Fetch → Transform → Simpan

```js
async function transformProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  const names = products.map(p => p.title.toUpperCase());
  localStorage.setItem("product_names", JSON.stringify(names));
}
```

**Challenge**

* Simpan hanya produk yang rating-nya > 4.5.

---

## 13. Gabungan map + filter + reduce

```js
async function analyzeProducts() {
  const res = await fetch("https://dummyjson.com/products");
  let { products } = await res.json();

  const expensive = products
    .filter(p => p.price > 100)
    .map(p => p.price)
    .reduce((a, b) => a + b);
  
  console.log(expensive);
}
```

**Challenge**

* Simpan total harga tersebut.

---

## 14. Parallel Request (Promise.all)

```js
async function loadDashboard() {
  const [users, products] = await Promise.all([
    fetch("https://dummyjson.com/users").then(r => r.json()),
    fetch("https://dummyjson.com/products").then(r => r.json())
  ]);

  console.log(users, products);
}
```

**Challenge**

* Simpan dashboard ke localStorage.
* Tambahkan timestamp.

---

## 15. Fallback ke localStorage Saat Fetch Gagal

```js
async function loadSettings() {
  try {
    const res = await fetch("/api/settings");
    const settings = await res.json();
    localStorage.setItem("settings", JSON.stringify(settings));
    return settings;
  } catch {
    return JSON.parse(localStorage.getItem("settings") || "{}");
  }
}
```

**Challenge**

* Tambahkan default settings jika keduanya gagal.

---

## 16. Modular: File api.js + app.js

**api.js**

```js
export async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
}
```

**app.js**

```js
import { getUsers } from "./api.js";

async function run() {
  console.log(await getUsers());
}
run();
```

**Challenge**

* Tambahkan fungsi `getProducts()`.

---

## 17. Membuat Middleware Async Sederhana

```js
async function withLog(fn) {
  return async function(...args) {
    console.log("Mulai...");
    const hasil = await fn(...args);
    console.log("Selesai...");
    return hasil;
  }
}

async function ambilData() {
  const res = await fetch("https://dummyjson.com/products/1");
  return res.json();
}

withLog(ambilData)();
```

**Challenge**

* Tambahkan error log bila error terjadi.

---

# 🔴 ADVANCE LEVEL

---

## 18. State Machine (Loading → Success → Error)

```js
async function loadUser() {
  console.log("Status: LOADING");

  try {
    const res = await fetch("https://dummyjson.com/users/1");
    console.log("Status: SUCCESS");
    return res.json();
  } catch {
    console.log("Status: ERROR");
  }
}
```

**Challenge**

* Simpan state ke localStorage.

---

## 19. Retry Logic 3x

```js
async function retry(url, maxTry = 3) {
  for (let i = 1; i <= maxTry; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch {}

    console.log("Percobaan:", i);
  }
  throw new Error("Gagal setelah 3 kali");
}
```

**Challenge**

* Simpan jumlah percobaan ke localStorage.

---

## 20. Pipeline Data Kompleks

```js
async function processData() {
  let res = await fetch("https://dummyjson.com/products");
  let { products } = await res.json();

  products = products
    .map(p => ({ ...p, tag: "diproses" }))
    .filter(p => p.price > 200);

  localStorage.setItem("processed", JSON.stringify(products));
}
```

**Challenge**

* Tambahkan rating score baru (price/10).

---

## 21. Konversi Callback → Promise → Async

**Callback awal**

```js
function task(cb) {
  setTimeout(() => cb("done"), 1000);
}
```

**Refactor async**

```js
function taskPromise() {
  return new Promise(res => setTimeout(() => res("done"), 1000));
}

async function runTask() {
  console.log(await taskPromise());
}
```

**Challenge**

* Tambahkan kemungkinan gagal → reject.

---