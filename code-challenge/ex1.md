Sip, kita bedah pelan-pelan ya, baris demi baris, dan kita pakai contoh `nums = [7, 8, 6, 7, 9]`, `k = 3` biar kebayang.

---

## 1. Deklarasi fungsi

```js
function containsNearbyDuplicate(nums, k) {
```

Artinya: kita buat fungsi bernama **`containsNearbyDuplicate`**
yang menerima:

* `nums` → array angka, misal `[7, 8, 6, 7, 9]`
* `k` → jarak maksimum indeks yang diizinkan, misal `3`

---

## 2. Bikin struktur data untuk menyimpan indeks terakhir

```js
  const lastIndex = new Map();
```

* `Map` di sini seperti **kamus**:

  * **key**   = nilai di array (`7`, `8`, `6`, dst.)
  * **value** = indeks terakhir tempat nilai itu muncul (`0`, `1`, `2`, dst.)

Contoh nanti isinya bisa jadi seperti:

* setelah beberapa langkah: `7 → 0`, `8 → 1`, `6 → 2`, dst.

---

## 3. Loop melalui seluruh elemen array

```js
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
```

* Kita pakai `for` untuk keliling semua indeks `i` dari `0` sampai `nums.length - 1`.
* `val` = nilai pada indeks `i`.

Dengan contoh `nums = [7, 8, 6, 7, 9]`:

* `i = 0` → `val = 7`
* `i = 1` → `val = 8`
* `i = 2` → `val = 6`
* `i = 3` → `val = 7`
* `i = 4` → `val = 9`

---

## 4. Cek apakah nilai ini **sudah pernah muncul**

```js
    if (lastIndex.has(val)) {
      const prevIndex = lastIndex.get(val);
```

* `lastIndex.has(val)` → tanya ke `Map`:
  *“Apakah nilai `val` ini sudah pernah disimpan sebelumnya?”*
* Kalau **sudah**, berarti kita pernah melihat nilai yang sama di indeks lain.
* `prevIndex` = indeks sebelumnya (yang terakhir tercatat) untuk nilai itu.

### Jalankan dengan contoh:

### 🔹 Iterasi 1: `i = 0`, `val = 7`

* `lastIndex` masih kosong → `lastIndex.has(7)` = `false`
* Bagian `if` dilewati (tidak masuk)

### 🔹 Iterasi 2: `i = 1`, `val = 8`

* `lastIndex` = `{ 7 → 0 }`
* `lastIndex.has(8)` = `false`
* Tidak masuk `if`

### 🔹 Iterasi 3: `i = 2`, `val = 6`

* `lastIndex` = `{ 7 → 0, 8 → 1 }`
* `lastIndex.has(6)` = `false`
* Tidak masuk `if`

### 🔹 Iterasi 4: `i = 3`, `val = 7`

* `lastIndex` = `{ 7 → 0, 8 → 1, 6 → 2 }`
* `lastIndex.has(7)` = `true` → artinya **7 sudah pernah muncul**.
* Maka:

  ```js
  const prevIndex = lastIndex.get(7); // prevIndex = 0
  ```

---

## 5. Cek jarak indeks dengan `k`

```js
      if (i - prevIndex <= k) {
        return true;
      }
```

Masih di dalam `if (lastIndex.has(val)) { ... }`.

* Kita hitung selisih indeks sekarang (`i`) dengan indeks sebelumnya (`prevIndex`).
* Kalau selisihnya **kurang dari atau sama dengan `k`**, berarti:

  * ada **dua elemen sama**
  * jarak indeks mereka **tidak lebih besar dari `k`**
    → kondisi soal terpenuhi → langsung `return true`.

### Lanjut contoh:

Saat `i = 3`, `val = 7`:

* `prevIndex = 0`
* `i - prevIndex = 3 - 0 = 3`
* `k = 3` → `3 <= 3` → **benar**

Maka:

```js
return true;
```

Fungsi **langsung berhenti** dan mengembalikan `true`.

---

## 6. Kalau belum memenuhi, update indeks terakhir

Baris ini *di luar* `if (lastIndex.has(val))` tapi masih di dalam loop:

```js
    lastIndex.set(val, i);
```

Artinya: apapun yang terjadi,

* kita **update** indeks terakhir untuk nilai `val` dengan `i` saat ini.
* kalau sebelumnya belum ada → jadi nambah entry baru
* kalau sudah ada → indeks lama diganti dengan yang baru

Contoh awal iterasi:

* Setelah `i = 0`, `val = 7`
  → `lastIndex.set(7, 0)` → map = `{ 7 → 0 }`

* Setelah `i = 1`, `val = 8`
  → `lastIndex.set(8, 1)` → map = `{ 7 → 0, 8 → 1 }`

* Setelah `i = 2`, `val = 6`
  → map = `{ 7 → 0, 8 → 1, 6 → 2 }`

Kalau pun saat `i = 3` jaraknya ternyata > k, kita tetap update:

```js
lastIndex.set(7, 3); // jadi indeks terakhir 7 sekarang 3, bukan 0 lagi
```

---

## 7. Kalau loop selesai tanpa menemukan pasangan valid

```js
  }

  // kalau sudah selesai loop dan tidak ketemu
  return false;
}
```

* Kalau kita sudah mengecek **semua elemen** dan **tidak pernah** ada kasus
  `i - prevIndex <= k` untuk nilai yang sama,
* Berarti **tidak ada** duplikat yang jarak indeksnya ≤ `k`.

Jadi kita kembalikan `false`.

---
