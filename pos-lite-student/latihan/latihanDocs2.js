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
        } else if (error.message.includes('is not valid JSON')) {
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
// console.log(json);
let err1 = json += 'Test'
// console.log(err1);
let err2 = json.substring(190)

// console.log(err2);

// ubahKeJs(err2) // 
// console.log("INI KODE LAIN HARUS JALAN MAU NGGK MAU");

let text = [
    "Muhammad", "Ahmad", "Hamzah", "Khalid", "Zaid", "Ali", "Faris", "Yusuf", 
    "Hasan", "Zayn", "Anwar", "Jamal", "Arkan", "Fathan", "Gibran", "Izzam", 
    "Rayyan", "Aaban", "Aadil", "Aafiya", "Aahil", "Aalam", "Aalee", "Aalim", 
    "Aamil", "Aamir", "Aaqib", "Aaqil", "Aarif", "Aariz", "Aashif", "Aashir", 
    "Aasif", "Aasim", "Aatif", "Aazim", "Aban", "Abbas", "Abbud", "Abdul Aleem", 
    "Abdul Ali", "Abdul Alim", "Abdul Aliyy", "Abdul Awwal", "Abdul Azeez", 
    "Abdul Azim", "Abdul Aziz", "Abdul Baari", "Abdul Baasit", "Abdul Badee", 
    "Abdul Badi", "Abdul Baith", "Abdul Baqi", "Abdul Bari", "Abdul Barr", 
    "Abdul Baseer", "Abdul Basir", "Abdul Basit", "Abdul Batin", "Abdul Fattah", 
    "Abdul Ghafaar", "Abdul Ghaffar", "Abdul Ghafoor", "Abdul Ghafur", 
    "Abdul Ghani", "Abdul Hadi", "Abdul Hafeez", "Abdul Hafiz", "Abdul Hakam", 
    "Abdul Hakeem", "Abdul Hayy", "Abdul Jabaar", "Abdul Jabbar", "Abdul Jaleel", 
    "Abdul Jalil", "Abdul Jawwad", "Abdul Kabir", "Abdul Kareem", "Abdul Karim", 
    "Abdul Khabir", "Abdul Khaliq", "Abdul Lateef", "Abdul Latif", "Abdul Maajid", 
    "Abdul Maalik", "Abdul Majeed", "Abdul Majid", "Abdul Malik", "Abdul Mani", 
    "Abdul Mannan", "Abdul Mateen", "Abdul Matin", "Abdul Mubdee", "Abdul Mubdi", 
    "Abdul Mueed", "Abdul Mujib", "Abdul Mumin", "Abdul Munim", "Abdul Muntaqim", 
    "Abdul Muqaddim", "Abdul Muqeet", "Abdul Muqsit", "Abdul Muqtadir", 
    "Abdul Musawwir", "Abdul Mutaal", "Abdul Muti", "Abdul Muzanni", "Abdul Nafi", 
    "Abdul Naseer", "Abdul Nasir", "Abdul Nasser", "Abdul Noor", "Abdul Nur", 
    "Abdul Qaadir", "Abdul Qadeer", "Abdul Qadir", "Abdul Qahaar", "Abdul Qahhar", 
    "Abdul Qawi", "Abdul Qayyum", "Abdul Razzaq", "Abdul Sabur", "Abdul Salam", 
    "Abdul Samad", "Abdul Sami", "Abdul Sattar", "Abdul Shahid", "Abdul Shakur", 
    "Abdul Tawwab", "Abdul Waali", "Abdul Wadud", "Abdul Wahhab", "Abdul Wahid", 
    "Abdul Wajid", "Abdul Wakil", "Abdul Wali", "Abdul Waliy", "Abdul Warith", 
    "Abdul Wasi", "Abdul Zahir", "Adam", "Adeeb", "Adham", "Adil", "Adnan", 
    "Afif", "Afkar", "Aflah", "Afnan", "Afzal", "Ahad", "Akhtar", "Akif", 
    "Akmal", "Akram", "Al Fatih", "Alauddin", "Alif", "Alim", "Amin", "Amir", 
    "Amjad", "Ammar", "Amri", "Anas", "Aniq", "Arfan", "Arif", "Arkhan", 
    "Arsalan", "Arsyad", "Asa", "Asad", "Asadullah", "Ashraf", "Asif", "Asim", 
    "Aslam", "Asyraf", "Ata", "Athar", "Athif", "Atif", "Atiq", "Aufa", "Aufar", 
    "Aydan", "Azhar", "Azka", "Baasyir", "Badar", "Barizun", "Baslan", "Bilal", 
    "Daiyan", "Eshan", "Fayez", "Ghaisan", "Hazan", "Izzan", "Jabran", "Kaysan", 
    "Luthfan", "Maheer", "Nayel", "Raif", "Razan", "Syakir", "Tsaqif", "Yasir", 
    "Zayyan", "Ziyad", "Azfar", "Haikal", "Khalish", "Nadhir", "Rafif", "Sakha", 
    "Tameem", "Yahya", "Zidan", "Fazlan", "Aryan", "Ilhan", "Laith", "Zuhair", 
    "Aqil", "Naufal", "Syarif", "Yuvan", "Faishal", "Anzar", "Kamil", "Zhafran", 
    "Muadz", "Altair", "Rumi", "Reyhan", "Adamir", "Ibrahim", "Ismail", "Ishaaq", 
    "Zakariya", "Idris", "Harun", "Musa", "Isa", "Yunus", "Hud", "Shaleh", 
    "Dzulkifli", "Sulaiman", "Ilyasa", "Ya'qub", "Ilyas", "Nuh", "Ayub", "Khidr", 
    "Qasim", "Salman", "Thalhah", "Thariq", "Tayyib", "Thabit", "Uwais", "Usman", 
    "Zubair", "Zaki", "Zulfikar", "Zunaid", "Yusran", "Zakiuddin", "Hayyan", 
    "Dzaky", "Rais", "Rasyid", "Munir", "Labib", "Iman", "Wafi", "Zamil", 
    "Taufan", "Fawwaz", "Mikaeel", "Rafiq", "Nadim", "Junaid", "Kamran", "Kaif", 
    "Kiyan", "Huzaifa", "Irfan", "Izhaan", "Irtaza", "Izaan"
    // ... dan seterusnya hingga mencapai 500 nama.
];

const islam = (nama) => {
    if (text.includes(nama)) {
        return `Nama ${nama} Pasti Kamu Muslim`;

    } else {
        return `Nama ${nama} Berarti agama kamu apa ya?`;
    }
}

let hasil = islam("Abdul Mujib")
console.log(hasil);

// --------------------------

localStorage.setItem('kunci1','INI ISI DARI KUNCI SATU')
localStorage.setItem('kunci2','INI ISI DARI KUNCI DUA')