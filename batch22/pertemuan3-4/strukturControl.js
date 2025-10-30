
// function penilaian(nilai){
//     if(nilai >= 90){
//         console.log("Jenius");
//     } else if(nilai >= 70) {
//         console.log('Pintar');
//     } else if (nilai >= 50) {
//         console.log('Kurang');
//     } else {
//         console.log("Anda Tidak Lulus");
//     }
// }

function penilaian(nilai) {
    if (nilai >= 90) {
        console.log('Pintar');
    } else if (nilai >= 70) {
        console.log('Standart');
    } else if (nilai >= 50) {
        console.log('Kurang');
    } else if (nilai >= 1)
        console.log("Anda Tidak Lulus");
    else {
        console.log("Nilai Tidak Valid");
    }
}
// penilaian(50);

let harga = 0;

// function pesanMenu(pesanan){
//     switch (pesanan) {
//         case '1':
//         case 'satu':
//             harga = 10000;
//             document.getElementById("tag11").innerHTML = "Harga Nasi Goreng: 10000";
//             break;
//         case "2":
//             harga = 15000;
//             document.getElementById("tag11").innerHTML = "Harga Nasi Pecel: 15000";
//             break;
//         case "3":
//             harga = 12000;
//             document.getElementById("tag11").innerHTML = "Harga Mie Ayam: 12000";
//             break;
//         case "4":
//             harga = 13000;
//             document.getElementById("tag11").innerHTML = "Harga Mie Goreng: 13000";
//             break;
//         case "5":
//             harga = 14000;
//             document.getElementById("tag11").innerHTML = "Harga Ayam Goreng: 14000";
//             break;
//         case "6":
//             harga = 16000;
//             document.getElementById("tag11").innerHTML = "Harga Ayam Pecel: 16000";
//             break;
//         default:
//             document.getElementById("tag11").innerHTML = "Harga Tidak Tersedia";
//             break;
//     }
//     document.getElementById("tag12").innerHTML = harga;
//     return harga;
// }



let dataSantri = [
    "bambang",
    "budi",
    "caca",
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]

// Hitung panjang Array
// let end = ;
// console.log(dataSantri[5]);



// for(let start = 1; start > dataSantri.length; start++){
//     console.log("Test");
// //    console.log( start + '.' + dataSantri[start]);
// }

// for(let start = 0; start < dataSantri.length; start++){
//    console.log( (start+1) + '.' + dataSantri[start]);
// }



// for(let i = 5; i >= 1; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// let tinggi = 7;
// for(let i = 1; i <= tinggi; i++){
//    let baris = "";
//    for(let j = 1; j <= tinggi - i; j++){
//     baris += " ";
//    }
//    for(let k = 1; k <= 2 * i; k++){
//     baris += "*";
//    }
//    console.log(baris);
// }




function garisVertical(p, n = 5) {
    for (let i = 0; i < n; i++) {
        let baris = "";
        for (let k = 0; k < 5; k++) {
            for (let j = 0; j < p && j % 2 === 0; j++) {
                baris += "*";
            }
            baris += "   ";
            // baris += "---";
        }
        console.log(baris);
    }
}

// garisVertical(17,8);

console.log('    ');
console.log('====================== ');
console.log('    ');



function garisHorizontal(jumlah = 6, tinggi = 8) {
    for (let i = 0; i < tinggi; i++) {
        let row = "";
        for (let j = 0; j < jumlah; j++) {
            row += (i % 2 === 0 ? "*" : " ") + " ";
        }
        console.log(row);
    }
}

// garisHorizontal(11, 10);

console.log('    ');
console.log('====================== ');
console.log('    ');


function kotak(size = 11) {
    let v = 0;
    while (v < size) {
        let row = "";
        for (let j = 0; j < size; j++) {
            if (v == 0 || v == size - 1) {
                row += (j % 2 === 0 ? "__" : " ");
            } else if (j == 0 || j == size - 1) {
                row += (v % 2 === 0 ? "|        " : " ");
            } else {
                row += " ";
            }
        }
        v++;
        console.log(row);
    }
}
// kotak(15);


function jamPasir(height) {
    for (let i = height; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < height - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }

    for (let i = 2; i <= height; i++) {
        let row = "";
        for (let j = 0; j < height - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }

}

// jamPasir(7);


function e() {
    for (let i = 0; i < 10; i++) {
        let row = "";
        for (j = 0; j <= 18; j++) {
            if (i === 0 || i === 1 || i === 4 || i === 5 || i === 8 || i === 9) {
                row += "*";
            } 
        }
        console.log(row);
    }
}

e();


console.log('    ');
console.log('====================== ');
console.log('    ');

function L() {
    for (let i = 0; i < 9; i++) {
        if (i >= 7 && i <= 9) {
            console.log("******************");
        } else {
            console.log("***");
        }
    }
}

// L();

let m = 100;















