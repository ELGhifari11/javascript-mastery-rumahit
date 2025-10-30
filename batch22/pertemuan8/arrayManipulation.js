

const hobbies = ["membaca", "menulis", "berlari"];
const products = ["Laptop", "Mouse", "Keyboard"];

// console.table(products);

hobbies.unshift('New Item of Shift');
hobbies.splice(1,2);
// console.table(hobbies);

// console.log(products[0]);
// console.log(products.length);

// products[0] = "Edit Laptop";

// console.table(products);

// example case forEach 1 - Closure


// products.forEach(function(a,b,c){
//     // c[b] = `Edit ke 2 ${a}`;
//     // products[b] = `edit ${products[0]}` 
//     // console.table(c);
// });

// console.table(products);

// example case forEach 2 - Basic Function

// hobbies.forEach(ubahData);

// function ubahData(a,b,c){
//     hobbies[b] = `Edit ${a}`;
// }

// console.table(hobbies);


// example of PUSH

// products.forEach(function(a,b,c){
//     c.push(`Edit pake push ${a}`);
// })
// console.table(products);


// Example of POP
// console.table(hobbies);
// let dataDel = [];

// hobbies.forEach(function(a,b,c){
//     c.shift()
//     dataDel.push(c.pop());
//     c.shift()
// });

// console.table(hobbies);

// console.table(dataDel);

// hobbies.unshift('Add Item 1','Add Item 2',"Add item 3")
// hobbies.shift();

// console.table(hobbies);
// console.table(dataDel);


// EXAMPLE OF MAP ARRAY

// let hargaAsli = [100000, 50000, 25000];

// // let resultForEch = []

// let aritmatika = 0;
// let exForEach = hargaAsli.forEach(function(a,b,c){
//     aritmatika += a;
// });

let exMap = hargaAsli.map(function(a,b,c) {
    return a * 2;
});

// // console.log(aritmatika);
// console.log(exMap);


// console.log(hargaDiskon);


// console.table({
//     Tugas:"Silahkan Explorasi Metode Metode ini",
//     Tugas_1:"Inisialisai Ulang Array By Index",
//     Tugas_2:"Pahami .push()" ,
//     Tugas_3:"Pahami .pop()",
//     Tugas_4:"Pahami .shift()",
//     Tugas_5:"Pahami .unshift()",
//     Tugas_6:"Pahami .splice()",
//     Tugas_7:"Pahami .slice()",
//     Tugas_8:"Pahami .map()",
//     Tugas_9:"Pahami .forEach()",
//     Tugas_10:"Pahami .indexOf()",
//     Tugas_11:"Pahami .includes()",
//     Tugas_12:"Pahami .concat()",
//     Tugas_13:"Pahami .join()",
//     Tugas_14:"Pahami .reverse()",
//     Tugas_15:"Pahami .sort()",
//     Tugas_16:"Pahami .filter()",
//     Tugas_17:"Pahami .reduce()",
//     Tugas_18:"Pahami .find()",
//     Tugas_19:"Pahami .some()",
//     Tugas_20:"Pahami .every()",
//     Tugas_21:"Pahami .findIndex()",
//     Tugas_22:"Pahami .flat()",
//     Tugas_23:"Pahami .flatMap()",
//     Tugas_24:"Pahami Spread [...buah, ...sayur,]",
//     Tugas_25:"Pahami Destructuring Array",
// })



// let [x,y,z,v,b] = koordinat;
// console.log(x); 
// console.log(y); 
// console.log(z);
// console.log(v);
// console.log(b);


// let penjulan = [5,4,3,2,1,6,15];
// let totalPenjualan = penjulan.reduce(function(a,b,c,d) {
//     console.log(`Index: ${c}, Value Terbaru: ${a}, Element/Item: ${b}, Array => ${d} `);
//     let hasil = a + b;
//     return hasil;
// },90);

// console.log(totalPenjualan);

// Case 24: Menggabung Array dengan Spread

let buah = ["Apel", "Jeruk","Array3","Array4"];
let sayur = ["Wortel", "Bayam"];
let belanja = [...buah, ,"Susu",...sayur];

console.table(belanja);
