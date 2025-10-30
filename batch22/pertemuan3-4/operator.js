

// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// And more ...


// Arithmetic Operators
// + | - | * | / | % | ** | ++ | --

// let a = 10;
// let b = 5; 
// b = a * b * 100 / 90;

// let q = 625;
// let w = 1;
// document.getElementById('tag1').innerHTML = w;

// function increment(){
//     w*=2;
//     document.getElementById('tag1').innerHTML = w;
// }

// function decrement() {
//     w--;
//     document.getElementById('tag1').innerHTML = w;
// }

// function reset(){
//     w = 0;
//     document.getElementById('tag1').innerHTML = w;
// }

// function add(a1, a2){
//     a1 = parseInt(a1);
//     a2 = parseInt(a2);
//     let result = a1 + a2;
//     document.getElementById('tag1').innerHTML = "Pertambahan: " + a1 + " + " + a2 + " = " + result;
// }


// function multiply(a1, a2){
//     a1 = parseInt(a1);
//     a2 = parseInt(a2);
//     let result = a1 * a2;
//     document.getElementById('tag1').innerHTML = "Perkalian: " + a1 + " X " + a2 + " = " + result;
// }




// console.log(w ** 3);
// console.log(q * w);
// console.log(w);


// Assignment Operators Comparasion =======
// `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

let cond1 = 11;
let cond2 = 10;
let cond3 = true;
let cond4 = false;

// console.log(true == true);
// console.log(17 == 17);
// console.log(17>5 == 17>4);
// console.log(5*5 !== 24);



// console.log(cond1 === cond2);

// if(cond1 === 10){
//     document.getElementById('tag1').innerHTML = "INI 10 nieh";
// } else{
//     document.getElementById('tag1').innerHTML = "INI bukan 10";
// }


// let a = 10;
// a += 25;

// function cekUmur(umur){
//     umur = parseInt(umur);
//     if (umur % 2 === 0){
//         document.getElementById('tag11').innerHTML = "Genap";
//     } else{
//         document.getElementById('tag11').innerHTML = "Ganjil";
//     }
// }

//   function cekUmur(umur){
//     umur = parseInt(umur);
//     if (umur !== 17){
//         document.getElementById('tag11').innerHTML = "Diterima";
//     } else{
//         document.getElementById('tag11').innerHTML = "Ditolak";
//     }
// }

// !== X ===
// console.log( (17>18) !== (25==25));

// console.log((false) !== (false));

// != / Not 
// jika false != false maka false
// jka true != false maka true 
// jika true != true maka false

// == / && / And
// jika false == false maka true
// jika true == false maka false
// jika true == true maka true

// console.log(true && true);   
// console.log((17>9) && (6<7));   
// console.log(true && false);  
// console.log(false && true);  
// console.log(false && false); 

// || / Or 
// jika true || true maka true
// jika true || false maka true
// jika false || true maka true
// jika false || false maka false

// console.log(true || true);
// console.log(false || true || (2*2 == 4) || 4);  
// console.log(false || true);  // true
// console.log(false || false); // false

// function cekNama(nama){
//     if(nama == "l" || nama == "L" || nama == "EL") {
//         document.getElementById('tag11').innerHTML = "Selamata Datang L";
//     } else {
//         document.getElementById('tag11').innerHTML = "Anda Bukan L";
//     }
// }

function cekNama(nama){
    let def = "Anda Tidak Mengisi Nama";
    document.getElementById('tag11').innerHTML = nama ?? def;
}

let nama = "Bambang";
let nama2;
let cond5 = false;
let z = "Deafult 1";
let c = "Default 2";
// console.log(nama ?? z);
let m = "EL";
console.log((m == "L" || m == "l" || m == "EL") ? "Selamat Datang L":"Anda Bukan L");

// console.log(!true);  // false
// console.log(!false); // true


// let value = null;
// let defaultValue = "default";
// console.log(value ?? defaultValue); // "default"

// let zero = 0;
// console.log(zero ?? defaultValue); // 0 (because 0 is not null or undefined)




