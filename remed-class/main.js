import * as utils from "./utils/index.js"
import * as db from "./db/index.js"

console.log(utils.f1());
console.log(db.f1());

console.log(utils.f2("Mie Ayam","Teh","Pangsit","Bakso"));



// =========================================

// console.log("Hello World");

// function f1() {
//     for (let index = 0; index == 5 ; index++) {
//          var a = 10 
//         // console.log(a);
//     } 
//     return  a
// }

// function f3() {
//     return "INI F3"
// }

// const f2 = () => {
//     return "INI F2"
// }

// const sapa = (nama) => `Halo ${nama}.`
// const sapa2 = (nama) => "Halo" + nama + "."

// console.log(f2());


// function hitungLuas(p, l) {
//   return p * l;
// }


// const hitungLuas2 = (p, l) => p * l;

// console.log(hitungLuas2(100,10));


// // Gunakan arrow function untuk menghasilkan array baru berisi angka kali 2.
// const angka = [1, 2, 3, 4, 5];

// function kali(arr) {
//    let hasil =  arr.map((v)=> {
//         return v * 2
//     })
//     return hasil
// }

// const kaliDua = angka.map(v => v*2)

// // console.log(kaliDua);

// console.log(kali(angka));



const santri = {id:"01",nama:"Bambang",alamat:"DIY"}

const {alamat,nama,id} = santri // destructuring

console.log(santri.id); // ini manggil langsung

console.log(`
    alamat: ${alamat},
    nama: ${nama}`);
