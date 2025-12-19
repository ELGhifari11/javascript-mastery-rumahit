let obj = [
    { nama: "Bambang", alamat: "Bekasi" },
    { nama: "Siti Aminah", alamat: "Jakarta" },
    { nama: "Budi Santoso", alamat: "Surabaya" },
    { nama: "Dewi Lestari", alamat: "Bandung" },
    { nama: "Agus Prasetyo", alamat: "Semarang" },
    { nama: "Rina Wijaya", alamat: "Medan" },
    { nama: "Fajar Nugraha", alamat: "Yogyakarta" },
    { nama: "Sari Indah", alamat: "Makassar" },
    { nama: "Andi Saputra", alamat: "Denpasar" },
    { nama: "Maya Kartika", alamat: "Palembang" }
];

/**
* Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
* @param obj A JavaScript value, usually an object or array, to be converted.
*/
let ubahKeJson = (obj) => JSON.stringify(obj)

/**
* Converts a JavaScript Object Notation (JSON) string into an object.
* @param data A valid JSON string.
*/
let ubahKeJs = (data = '') => JSON.parse(data)

let json = ubahKeJson(obj);
let hasilParse = ubahKeJs(json)

console.log(json); // 
console.log(hasilParse); // 

export {ubahKeJs,ubahKeJson}