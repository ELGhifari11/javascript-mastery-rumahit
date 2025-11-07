/// RECAL SPLICE 

let  arr = ['Array1','Array2','array3','array4']
// console.log(arr); // LENGHT MASIH 4

let hasilSplice = arr.splice(1,1,'JIJI',"909090","9009","data Baru")
//  console.log(hasilSplice); // LENGHT MASIH 

// ==================================================
// MANIPULATION ARRAY WITH ONLY METHOD FOR ARRAY 
// ==================================================

const namaIslami = [
  "Ahmad",
  "Muhammad",
  "Ali",
  "Hassan",
  "Husayn",
  "Umar",
  "Abdullah",
  "Abdurrahman",
  "Yusuf",
  "Ibrahim",
  "Ismail",
  "Idris",
  "Zaid",
  "Bilal",
  "Salman",
  "Anas",
  "Saad",
  "Harun",
  "Luqman",
  "Sulaiman",
  "Zulkifli",
  "Imran",
  "Tariq",
  "Hamzah",
  "Khalid",
  "Amir",
  "Fahri",
  "Rafi",
  "Rayyan",
  "Ammar",
  "Daniyal",
  "Zain",
  "Naufal",
  "Rizky",
  "Farhan",
  "Fadhil",
  "Hakim",
  "Azhar",
  "Ridwan",
  "Ziyad",
  "Mustafa",
  "Nashir",
  "Ikhsan",
  "Ihsan",
  "Syafiq",
  "Aqil",
  "Hilmi",
  "Faiz",
  "Taufiq",
  "Saifullah"
];


// namaIslami.forEach((a,b,c)=> {
//     // console.log(a);
// })

let hasilEdit = []

// namaIslami.forEach((a,b,c) => { // PARAM (1. Value , 2. Index, 3. Array) 
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(`${b+1}. ${c[b]}`);
//     c[b] = a + " SRIT ke " + (b+1);
//     // console.log(`${b+1}. ${namaIslami[b] = a + " SANTRI PIT"};`);
// })

// console.table(namaIslami);


let hasilMap = namaIslami.map((v,i,a)=>{
   if(i % 2 == 0) {
     return v + " RIT"
   } else if (i % 2 != 0) {
     return v + " PIT"
   } 
})


let rit = hasilMap.filter((v)=>{
    return v.includes("RIT");
})

let pit = hasilMap.filter((v)=>{
    return v.includes("PIT");
})


console.group("TABLE DATA ARRAY AWAL");
console.table(namaIslami);
console.groupEnd();

console.group("TABLE DATA ARRAY HASIL MODIFIKASI MAP() ");
console.table(hasilMap);
console.groupEnd();
console.group("TABLE DATA ARRAY HASIL MODIFIKASI FILTER() RIT ");
console.table(rit);
console.groupEnd();
console.group("TABLE DATA ARRAY HASIL MODIFIKASI FILTER() PIT ");
console.table(pit);
console.groupEnd();






