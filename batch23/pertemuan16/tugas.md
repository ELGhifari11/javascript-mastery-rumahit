

# 🧩 Promise & Chaining — Study Case & Challenge

---

## 🟢 EASY LEVEL

### 1. Loading Profil User (Fake Delay)

**Study Case**
Simulasikan loading data profil user dari server selama 2 detik.

```js
function loadUserProfile(username) {
  console.log("⏳ Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Beginner"
        });
      }
    }, 2000);
  });
}

loadUserProfile("ghifari")
  .then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);
  })
  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });
```

**Challenge**

* Tambahkan **console.log** sebelum `loadUserProfile` dipanggil dan sesudah chaining `.then().catch()` untuk mengamati **perilaku async (pending)**.
* Ubah kode supaya data user yang berhasil di-load **disimpan ke `localStorage`** dengan key `"lastUser"` (gunakan `JSON.stringify`).

---

### 2. Promise Cek Koneksi Internet (Simulasi)

**Study Case**
Buat Promise yang mensimulasikan cek internet (random berhasil/gagal).

```js
function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}

checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });
```

**Challenge**

* Jika **berhasil**, simpan status `"online"` ke `localStorage` dengan key `"connection_status"`.
* Jika **gagal**, simpan status `"offline"` ke `localStorage`.
* Buat function `getLastConnectionStatus()` untuk membaca kembali nilai dari `localStorage`.

---

### 3. Konversi Data ke JSON Setelah Resolve

**Study Case**
Setelah promise `resolve` dengan object, convert ke JSON string dalam chaining.

```js
function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "id",
        notifications: true
      });
    }, 500);
  });
}

getSettings()
  .then((settings) => {
    console.log("Object settings:", settings);
    return JSON.stringify(settings);
  })
  .then((settingsJSON) => {
    console.log("Settings dalam JSON:", settingsJSON);
  });
```

**Challenge**

* Simpan `settingsJSON` ke `localStorage` dengan key `"app_settings"`.
* Buat Promise baru `loadSettingsFromLocal()` yang:

  * `resolve` dengan parsing dari `localStorage` (gunakan `JSON.parse`).
  * `reject` jika data tidak ditemukan.

---

### 4. Promise Sederhana Menggunakan `Promise.resolve` dan `Promise.reject`

**Study Case**

```js
const successPromise = Promise.resolve("Data berhasil di-load!");
const failPromise = Promise.reject("Terjadi error saat load data!");

successPromise.then((msg) => console.log("SUCCESS:", msg));

failPromise.catch((err) => console.log("REJECT:", err));
```

**Challenge**

* Buat function `simulateLogin(isSuccess)` yang mengembalikan:

  * `Promise.resolve({ status: "ok", token: "ABC123" })` jika `isSuccess === true`
  * `Promise.reject("Login gagal!")` jika `isSuccess === false`
* Chaining:

  * Jika sukses → simpan `token` ke `localStorage`.
  * Jika gagal → tampilkan error di console.

---

### 5. Membungkus `setTimeout` Jadi Promise (Delay Message)

**Study Case**

```js
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delay ${ms} ms selesai`);
    }, ms);
  });
}

delay(1000)
  .then((msg) => console.log(msg))
  .then(() => delay(500))
  .then((msg) => console.log(msg));
```

**Challenge**

* Buat chaining:

  1. `delay(1000)` → log `"Step 1 selesai"`
  2. `delay(2000)` → log `"Step 2 selesai"`
  3. `delay(500)` → log `"Step 3 selesai"`
* Tambahkan **counter step** ke dalam satu array `steps = []`, lalu di akhir chain, simpan array ini sebagai JSON ke `localStorage`.

---

### 6. Load Data Produk & Hitung Total Harga (Tanpa Server Nyata)

**Study Case**

```js
function loadCart() {
  return new Promise((resolve) => {
    const cart = [
      { name: "Keyboard", price: 150000 },
      { name: "Mouse", price: 50000 },
    ];
    setTimeout(() => resolve(cart), 800);
  });
}

loadCart()
  .then((cart) => {
    console.log("Cart:", cart);
    let total = 0;
    cart.forEach((item) => (total += item.price));
    return total;
  })
  .then((total) => {
    console.log("Total harga:", total);
  });
```

**Challenge**

* Ubah study case supaya:

  * Cart di-`JSON.stringify` lalu disimpan ke `localStorage` dengan key `"cart_data"`.
  * Buat Promise baru `loadCartFromLocal()` yang baca dari `localStorage` dan hitung ulang totalnya.

---

### 7. Validasi Input Dengan Reject

**Study Case**

```js
function saveUsername(username) {
  return new Promise((resolve, reject) => {
    if (!username || username.length < 3) {
      reject("Username minimal 3 karakter!");
    } else {
      localStorage.setItem("username", username);
      resolve(`Username "${username}" berhasil disimpan.`);
    }
  });
}

saveUsername("ab")
  .then((msg) => console.log("SUCCESS:", msg))
  .catch((err) => console.error("REJECT:", err));
```

**Challenge**

* Ubah chaining:

  * Jika SUCCESS → panggil Promise lain `loadUserProfile(username)` (boleh pakai dari Study Case #1).
  * Jika REJECT → simpan pesan error ke `localStorage` dengan key `"last_error"`.

---

### 8. Menyimpan History Aktivitas ke localStorage

**Study Case**

```js
function logActivity(activity) {
  return new Promise((resolve) => {
    const now = new Date().toISOString();
    const logItem = { activity, time: now };

    const existing = JSON.parse(localStorage.getItem("activity_logs") || "[]");
    existing.push(logItem);
    localStorage.setItem("activity_logs", JSON.stringify(existing));

    resolve(logItem);
  });
}

logActivity("User membuka dashboard")
  .then((logItem) => {
    console.log("Aktivitas tercatat:", logItem);
  });
```

**Challenge**

* Buat chaining:

  * Setelah `logActivity`, lanjutkan `.then()` kedua yang mengambil semua `activity_logs` dari `localStorage` dan menampilkannya.
* Tambahkan skenario error: jika proses penyimpanan gagal (simulasikan dengan `reject("Gagal menyimpan aktivitas")` dalam kondisi tertentu).

---

## 🟡 MEDIUM LEVEL

### 9. Modular: `api.js` + `app.js` (Fake Fetch User)

**Study Case**
Bayangkan kamu punya dua modul:

* `api.js`
* `app.js`

`api.js`:

```js
// api.js
export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject("User ID tidak boleh kosong");
      } else {
        resolve({
          id,
          name: "User-" + id,
          role: "student"
        });
      }
    }, 1000);
  });
}
```

`app.js`:

```js
// app.js
import { fetchUser } from "./api.js";

fetchUser(1)
  .then((user) => {
    console.log("User berhasil di-load:", user);
    return JSON.stringify(user);
  })
  .then((userJSON) => {
    localStorage.setItem("last_user", userJSON);
  })
  .catch((err) => console.error("Terjadi error:", err));
```

**Challenge**

* Tambah fungsi baru di `api.js`: `fetchUserCourses(userId)` yang mengembalikan Promise daftar course.
* Di `app.js`, chaining:

  * `fetchUser(1)` → `then(fetchUserCourses)` → simpan hasil course ke `localStorage` sebagai JSON.

---

### 10. Promise Chain: Login → Fetch Profile → Save to localStorage

**Study Case**

```js
function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@mail.com" && password === "123456") {
        resolve({ token: "TOKEN_ABC", userId: 10 });
      } else {
        reject("Email atau password salah!");
      }
    }, 1000);
  });
}

function fetchProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) {
        reject("Token tidak valid!");
      } else {
        resolve({ name: "Santri", level: "Intermediate" });
      }
    }, 1000);
  });
}

login("test@mail.com", "123456")
  .then((session) => {
    console.log("Login berhasil:", session);
    return fetchProfile(session.token);
  })
  .then((profile) => {
    console.log("Profil:", profile);
  })
  .catch((err) => {
    console.error("Error pada chain:", err);
  });
```

**Challenge**

* Tambahkan `.then()` setelah profil didapat untuk:

  * Menggabungkan data session + profile menjadi satu object.
  * Simpan object tersebut ke `localStorage` sebagai `"session_profile"`.
* Simulasikan error dengan mengubah password → amati jalur **REJECT**.

---

### 11. Chaining Transform JSON → Object → Filter

**Study Case**

```js
const rawJSON = `
[
  { "name": "HTML", "completed": true },
  { "name": "CSS", "completed": false },
  { "name": "JavaScript", "completed": true }
]
`;

function loadModules() {
  return Promise.resolve(rawJSON);
}

loadModules()
  .then((jsonString) => JSON.parse(jsonString))
  .then((modules) => {
    const completed = modules.filter((m) => m.completed);
    console.log("Modules selesai:", completed);
    return completed;
  });
```

**Challenge**

* Simpan daftar module yang sudah selesai ke `localStorage` dengan key `"completed_modules"`.
* Tambahkan kemungkinan REJECT jika parsing JSON gagal (misalnya: `try/catch` di dalam Promise).

---

### 12. Error Propagation di Promise Chaining

**Study Case**

```js
function step1() {
  return Promise.resolve("Step 1 OK");
}

function step2() {
  return Promise.reject("Step 2 GAGAL");
}

function step3() {
  return Promise.resolve("Step 3 OK");
}

step1()
  .then((msg) => {
    console.log(msg);
    return step2();
  })
  .then((msg) => {
    console.log(msg); // tidak akan jalan
    return step3();
  })
  .catch((err) => {
    console.error("Terjadi error di chain:", err);
  });
```

**Challenge**

* Ubah chain sehingga:

  * Jika `step2` gagal, kamu **tetap lanjut** ke `step3` dengan cara menangkap error di tengah (bukan hanya di akhir).
* Simpan informasi error ke `localStorage` dengan key `"last_step_error"`.

---

### 13. Menyimpan Daftar Todo Asinkron

**Study Case**

```js
function saveTodos(todos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      resolve(todos);
    }, 700);
  });
}

function loadTodos() {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem("todos");
    if (!data) {
      reject("Belum ada todos tersimpan.");
    } else {
      resolve(JSON.parse(data));
    }
  });
}

const todosAwal = [
  { title: "Belajar Promise", done: false },
  { title: "Ngaji malam", done: false },
];

saveTodos(todosAwal)
  .then(() => loadTodos())
  .then((todos) => console.log("Todos:", todos))
  .catch((err) => console.error(err));
```

**Challenge**

* Tambahkan chaining lagi untuk:

  * Menandai todo pertama sebagai `done: true`.
  * Simpan kembali ke `localStorage` sebagai update.

---

### 14. Simulasi Fetch API Dengan Random Error

**Study Case**

```js
function fakeFetch(url) {
  console.log("Request ke:", url);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.4;
      if (ok) {
        resolve({ status: 200, data: { message: "OK", url } });
      } else {
        reject({ status: 500, message: "Server error" });
      }
    }, 1200);
  });
}

fakeFetch("/api/profile")
  .then((response) => {
    console.log("SUCCESS:", response);
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });
```

**Challenge**

* Tambahkan `.then()` kedua:

  * Hanya jika status 200 → simpan `response.data` ke `localStorage`.
* Tambahkan `.finally()` untuk log `"Request selesai (berhasil/gagal)"`.

---

### 15. Chain: Load Settings → Merge Dengan Default

**Study Case**

```js
const defaultSettings = {
  theme: "light",
  language: "id",
  fontSize: 14,
};

function loadUserSettings() {
  return new Promise((resolve) => {
    const data = localStorage.getItem("user_settings");
    resolve(data ? JSON.parse(data) : null);
  });
}

loadUserSettings()
  .then((userSettings) => {
    const merged = { ...defaultSettings, ...userSettings };
    console.log("Settings final:", merged);
    return merged;
  });
```

**Challenge**

* Tambahkan chain:

  * Simpan `merged` kembali ke `localStorage` sebagai `"merged_settings"`.
* Buat kemungkinan REJECT jika data user_settings ternyata bukan JSON valid.

---

### 16. Multiple Async Langkah dengan `return` di Tiap `.then()`

**Study Case**

```js
function stepLogin() {
  return Promise.resolve({ token: "XYZ", userId: 1 });
}

function stepGetProfile(user) {
  return Promise.resolve({ ...user, name: "Santri A" });
}

function stepGetPermissions(profile) {
  return Promise.resolve({ ...profile, canEdit: true, canDelete: false });
}

stepLogin()
  .then((session) => {
    console.log("Session:", session);
    return stepGetProfile(session);
  })
  .then((profile) => {
    console.log("Profile:", profile);
    return stepGetPermissions(profile);
  })
  .then((fullData) => {
    console.log("Full data:", fullData);
  });
```

**Challenge**

* Tambahkan satu step lagi: `stepSaveToLocal(fullData)` yang mengembalikan Promise untuk menyimpan ke `localStorage`.
* Simulasikan error di salah satu step dan lihat bagaimana chain berhenti.

---

### 17. Modular: `storage.js` & `auth.js`

**Study Case**

`storage.js`:

```js
// storage.js
export function saveJSON(key, data) {
  return new Promise((resolve) => {
    localStorage.setItem(key, JSON.stringify(data));
    resolve(true);
  });
}

export function loadJSON(key) {
  return new Promise((resolve, reject) => {
    const raw = localStorage.getItem(key);
    if (!raw) {
      reject(`Data dengan key "${key}" tidak ada.`);
    } else {
      resolve(JSON.parse(raw));
    }
  });
}
```

`auth.js`:

```js
// auth.js
import { saveJSON, loadJSON } from "./storage.js";

export function fakeLogin(username) {
  return new Promise((resolve, reject) => {
    if (!username) reject("Username kosong");
    else resolve({ username, token: "ABC123" });
  });
}

fakeLogin("santri")
  .then((session) => saveJSON("session", session))
  .then(() => loadJSON("session"))
  .then((session) => console.log("Session dari storage:", session))
  .catch((err) => console.error("Error:", err));
```

**Challenge**

* Tambahkan `logout()` di `auth.js`:

  * Menghapus session dari `localStorage` di dalam Promise.
* Jika `logout` dipanggil tapi belum ada session, Promise harus `reject`.

---

## 🔴 ADVANCE LEVEL

### 18. `Promise.all` untuk Memuat Banyak Resource Sekaligus

**Study Case**

```js
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Santri" });
}

function fetchCourses() {
  return Promise.resolve(["JS Dasar", "JS Lanjutan"]);
}

function fetchNotifications() {
  return Promise.resolve([{ id: 1, text: "Selamat datang!" }]);
}

Promise.all([fetchUser(), fetchCourses(), fetchNotifications()])
  .then(([user, courses, notifications]) => {
    const dashboardData = { user, courses, notifications };
    console.log("Dashboard data:", dashboardData);
  })
  .catch((err) => console.error("Error salah satu request:", err));
```

**Challenge**

* Simpan `dashboardData` ke `localStorage` sebagai `"dashboard_cache"`.
* Ubah salah satu fungsi `fetch*` menjadi kemungkinan `reject` → amati efeknya di `Promise.all`.

---

### 19. `Promise.race` untuk Timeout Request

**Study Case**

```js
function fakeFetchSlow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data diterima (slow)");
    }, 3000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request timeout!");
    }, ms);
  });
}

Promise.race([fakeFetchSlow(), timeout(2000)])
  .then((result) => console.log("SUCCESS:", result))
  .catch((err) => console.error("REJECT:", err));
```

**Challenge**

* Jika timeout terjadi, simpan status `"timeout"` ke `localStorage`.
* Jika berhasil, simpan data received ke `localStorage`.
* Buat versi modular: misal `network.js` berisi `timeout` dan `fakeFetchSlow`.

---

### 20. Pipeline Data: Fetch → Bersihkan → Mapping → Simpan

**Study Case**

```js
function fetchRawStudents() {
  return Promise.resolve([
    { name: "Ali ", score: "90" },
    { name: "Budi", score: " 80" },
  ]);
}

fetchRawStudents()
  .then((students) => {
    // trim nama dan score
    return students.map((s) => ({
      name: s.name.trim(),
      score: Number(s.score.trim()),
    }));
  })
  .then((students) => {
    console.log("Setelah dibersihkan:", students);
    return students.filter((s) => s.score >= 85);
  })
  .then((topStudents) => {
    console.log("Top students:", topStudents);
  });
```

**Challenge**

* Tambahkan langkah chaining terakhir untuk simpan `topStudents` ke `localStorage` sebagai `"top_students"`.
* Jika tidak ada yang score >= 85, buat chain masuk ke jalur `reject` dengan pesan `"Belum ada top students"`.

---

### 21. Konversi Callback ke Promise (Refactor)

**Study Case (callback style)**

```js
// versi lama (callback)
function getDataCallback(done) {
  setTimeout(() => {
    done({ message: "Data dari callback" });
  }, 1000);
}
```

**Tugas Study Case**: ubah menjadi versi Promise:

```js
function getDataPromise() {
  // tulis versi Promise di sini
}
```

**Challenge**

* Implementasikan `getDataPromise()` yang:

  * `resolve` dengan data object.
  * Mampu `reject` kalau kita kirim parameter `shouldFail = true`.
* Buat chaining:

  * `.then()` pertama → log data.
  * `.then()` kedua → simpan ke `localStorage`.
  * `.catch()` → simpan pesan error ke `localStorage`.

---

### 22. Sistem Notifikasi Bertingkat dengan Promise Chain

**Study Case**

```js
function notifyEmail(user) {
  return new Promise((resolve) => {
    console.log("Mengirim email ke:", user.email);
    setTimeout(() => resolve("Email terkirim"), 500);
  });
}

function notifySMS(user) {
  return new Promise((resolve, reject) => {
    if (!user.phone) {
      reject("Nomor HP tidak tersedia");
    } else {
      console.log("Mengirim SMS ke:", user.phone);
      setTimeout(() => resolve("SMS terkirim"), 500);
    }
  });
}

const user = { email: "user@mail.com", phone: "" };

notifyEmail(user)
  .then((res) => {
    console.log(res);
    return notifySMS(user);
  })
  .then((res) => console.log(res))
  .catch((err) => console.error("Notifikasi error:", err));
```

**Challenge**

* Jika SMS gagal, simpan log error ke `localStorage`.
* Tambahkan `notifyInApp(user)` (notifikasi di app) yang tetap dipanggil walaupun SMS gagal (gunakan penanganan error di tengah chain).

---

### 23. Recovery Strategy di Tengah Chain

**Study Case**

```js
function fetchConfig() {
  return Promise.reject("Server config sedang down");
}

function useDefaultConfig() {
  return Promise.resolve({ theme: "dark", language: "id" });
}

fetchConfig()
  .catch((err) => {
    console.warn("Gagal fetch config:", err);
    // RECOVERY: pakai default
    return useDefaultConfig();
  })
  .then((config) => {
    console.log("Config yang dipakai:", config);
  });
```

**Challenge**

* Setelah config final (apapun sumbernya), simpan ke `localStorage` sebagai `"active_config"`.
* Simulasikan versi modular: `configService.js` yang menyediakan kedua fungsi di atas.

---

### 24. Chain Panjang: Onboarding User Baru

**Study Case**
Alur (semua async dengan Promise):

1. `createAccount(dataUser)`
2. `sendWelcomeEmail(user)`
3. `createDefaultSettings(userId)`
4. `saveOnboardingStatus(userId)`

Contoh kerangka:

```js
function createAccount(dataUser) {
  return Promise.resolve({ id: 1, ...dataUser });
}

function sendWelcomeEmail(user) {
  return Promise.resolve(`Email selamat datang dikirim ke ${user.email}`);
}

function createDefaultSettings(userId) {
  return Promise.resolve({ userId, theme: "dark", language: "id" });
}

function saveOnboardingStatus(userId) {
  return Promise.resolve({ userId, status: "completed" });
}

// chaining di sini
```

**Challenge**

* Lengkapi chaining:

  * Buat object `onboardingSummary` yang berisi:

    * user
    * emailMessage
    * settings
    * status
  * Simpan ke `localStorage` sebagai `"onboarding_summary"`.
* Simulasikan REJECT di salah satu step untuk melihat efeknya.

---

### 25. Mini “State Machine” dengan Promise dan JSON

**Study Case**
Kita punya state proses:

```js
const processStates = {
  INIT: "INIT",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

function startProcess() {
  return Promise.resolve({ state: processStates.INIT });
}

function loadData(prev) {
  return new Promise((resolve, reject) => {
    const isOk = Math.random() > 0.3;
    if (!isOk) {
      reject({ ...prev, state: processStates.ERROR, error: "Gagal load data" });
    } else {
      resolve({
        ...prev,
        state: processStates.SUCCESS,
        data: { message: "Data siap dipakai" },
      });
    }
  });
}

startProcess()
  .then((ctx) => {
    console.log("State awal:", ctx.state);
    return { ...ctx, state: processStates.LOADING };
  })
  .then((ctx) => loadData(ctx))
  .then((ctx) => {
    console.log("State akhir:", ctx.state);
    console.log("Context:", ctx);
  })
  .catch((ctx) => {
    console.log("State ERROR:", ctx.state);
    console.log("Context error:", ctx);
  });
```

**Challenge**

* Simpan `ctx` akhir (SUCCESS atau ERROR) ke `localStorage` sebagai `"last_process_state"`.
* Ubah sehingga `startProcess()` membaca state sebelumnya dari `localStorage` jika ada, lalu melanjutkan proses.

---
