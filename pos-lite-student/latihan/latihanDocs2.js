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
]

/**
* Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
* @param obj A JavaScript value, usually an object or array, to be converted.
*/
let ubahKeJson = (obj) => JSON.stringify(obj)

/**
* Converts a JavaScript Object Notation (JSON) string into an object.
* @param data A valid JSON string.
*/
let ubahKeJs = (data = '') => {
    try {
        let result = JSON.parse(data)
        console.log('EKSEKUSI BERHASIL');
        return result
    } catch (error) {
        console.error(error.message);
        if (error.message.includes('Unexpected non-whitespace character after JSON')) {
            console.error(`ERROR 001 => Penyebabnya: Format JSON ganda atau terdapat karakter sampah setelah objek utama.`);
        } else if (error.message.includes('is not valid JSON') ) {
            console.error("ERROR 002 => Penyebabnya: Format JSON rusak: Terdapat kesalahan penulisan simbol atau karakter ilegal.");
        } else if (error.message.includes('Unexpected token')) {
            console.error("ERROR 003 => Penyebabnya: Data bukan JSON: Kamuy mengirim format HTML/Teks mungkin ya. Cek data yang kamu kirim.");   
        }
        else {
            console.error('error baru belom dikenali');
        }
    }
}

// -----------------------------------------

let json = ubahKeJson(obj)
let err1 = json += 'Test'
let err2 = json.substring(5)
ubahKeJs(err2) // 
console.log("INI KODE LAIN HARUS JALAN MAU NGGK MAU");
