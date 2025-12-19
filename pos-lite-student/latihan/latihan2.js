
// Problem Yang Belom Di pahami 
// 1. Looping // STUDYCASE : 10 
// 2. Manipulasi function // STUDYCASE : 3
// 3. DOM // STUDYCASE : 2

// LOOPING +  ARRAY + OBJECT + TEMPLATE LITERAL + INTERPOLASI VARIABEL 
let BanyakData1 = [
    { nama: "Bambang", alamat: "Bekasi" },
    { nama: "Siti Aminah", alamat: "Jakarta" },
    { nama: "Budi Santoso", alamat: "Surabaya" },
    { nama: "Dewi Lestari", alamat: "Bandung" },
    { nama: "Agus Prasetyo", alamat: "Semarang" },
    { nama: "Rina Wijaya", alamat: "Medan" },
    { nama: "Fajar Nugraha", alamat: "Yogyakarta" },
    { nama: "Sari Indah", alamat: "Makassar" },
    { nama: "Andi Saputra", alamat: "Denpasar" },
    { nama: "Maya Kartika", alamat: "Palembang"}
];

let BanyakData5 = [
    { 
        nama: "Bambang", 
        alamat: "Bekasi", 
        umur: 30, 
        pekerjaan: "Software Engineer", 
        email: "bambang@example.com"
    },
    { 
        nama: "Siti Aminah", 
        alamat: "Jakarta", 
        umur: 25, 
        pekerjaan: "Data Analyst", 
        email: "siti@example.com"
    },
    { 
        nama: "Budi Santoso", 
        alamat: "Surabaya", 
        umur: 35, 
        pekerjaan: "Manager", 
        email: "budi@example.com"
    },
    { 
        nama: "Dewi Lestari", 
        alamat: "Bandung", 
        umur: 28, 
        pekerjaan: "Desainer", 
        email: "dewi@example.com"
    },
    { 
        nama: "Agus Prasetyo", 
        alamat: "Semarang", 
        umur: 40, 
        pekerjaan: "Dosen", 
        email: "agus@example.com"
    }
];

let fajar = BanyakData1[6]
let bambang = BanyakData1[0]
// console.log(`Nama: ${fajar.nama}, Alamat ${fajar.alamat}`);
// console.log(`Nama: ${bambang.nama}, Alamat ${bambang.alamat}`);
// console.log("Nama: " + fajar.nama + " Alamat: " + fajar.alamat );

let BanyakData2 = [
  "Bambang tinggal di Bekasi",
  "Siti Aminah tinggal di Jakarta",
  "Budi Santoso tinggal di Surabaya",
  "Dewi Lestari tinggal di Bandung",
  "Agus Prasetyo tinggal di Semarang",
  "Rina Wijaya tinggal di Medan",
  "Fajar Nugraha tinggal di Yogyakarta",
  "Sari Indah tinggal di Makassar",
  "Andi Saputra tinggal di Denpasar",
  "Maya Kartika tinggal di Palembang"
];

let rina = BanyakData2[5]
// console.log(rina);
 

// LOOP WITH FOR
let listingData1 = (data) => {
    for (let i = 0; i < data.length; i++) {
        console.log(`Nama: ${data[i].nama}, Alamat ${data[i].alamat}`);
    }
}

let listingData2 = (data) => {
    data.forEach((v,i,a)=>{
        console.log(`Nama: ${v.nama}, Alamat: ${v.alamat}`);
        
    })
}

// autoListingData 
let listingData3 = (data) => {
    data.forEach(v => {
        let collect = '';
        let result = Object.entries(v) // {key1:"Value1",key2:"Value2"} => [["key","value1"],["key2","value2"]]
        result.forEach(([k,v])=> {
            collect += `${k}: ${v} | `            
        })
        if (collect) {
            console.log(collect);
        }
    })
}

listingData3(BanyakData5)






