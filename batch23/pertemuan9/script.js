// ==================================================
// ==================================================

//   MANIPULATION OBJECT WITH ONLY METHOD FOR OBJECT

// ==================================================
// ==================================================

let dataSantri = {
    nama: "Bambang",
    "umur": 90,
    alamat: "Yogyakarta",
    wa: 6289512345678,
    fullData: (passwordData) => {
        if (passwordData == "pw") {
            return `Ok You Can Access My Full Data:
        Nama : ${dataSantri['nama']}
        Umur : ${dataSantri.umur}
        Alamat : ${dataSantri['alamat']}
        WA : ${dataSantri.wa}`
        } else {
            return "Password Salah"
        }
    },
    dataArr: [
        {
            data1: "Contoh data 1",
            data2: "Contoh data 2"
        },
        {
            data1a: "Contoh data 1A",
            data2a: "Contoh data 2A"
        },
        {
            data1b: "Contoh data 1B",
            data2b: "Contoh data 2B"
        }
    ]
}
// console.log(dataSantri.fullData("pw"));

// console.log(dataSantri.dataArr[2].data2b);


const santri = {
  id: 101,
  nama: "Ahmad Fauzi",
  usia: 17,
  jenisKelamin: "Laki-laki",
  asalDaerah: "Yogyakarta",
  program: "Fullstack Web Development",
  nilaiRataRata: 88.5,
  aktif: true,
  tanggalDaftar: "2025-02-15",
  hobi: ["Membaca", "Ngoding", "Olahraga"]
};

santri.nilaiRataRata = 100
santri["nilaiRataRata"] = 95
santri['namaAyah'] = "Bambang"
delete santri.jenisKelamin

if(santri['nilaiRataRata'] > 75 ) {
    santri['status'] = "Lulus"
} 

// console.log(santri["nilaiRataRata"]);

for (let key in santri) {
    console.log(`Pada Key => "${key}" Valuenya => "${santri[key]}"`);
    
}