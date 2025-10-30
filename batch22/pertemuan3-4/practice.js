



let dataHasil = [];
// let resultElement = document.getElementById('tag11');

function calculator() {

    let next = true;

    do {
        // INPUT OPERATOR DAN NILAI 
        let operasi = prompt("Masukkan Operasi (+, -, *, /)");
        let v1 = Number(prompt("Masukkan Nilai 1"));
        let v2 = Number(prompt("Masukkan Nilai 2"));
        let hasil;

        if (isNaN(v1) || isNaN(v2)) {
            alert("Nilai Tidak Valid");
        } else if (operasi === "/" && (v2 === 0 || v1 === 0)) {
            alert("Pembagian Dengan 0 Tidak Diperbolehkan");
        } else {
            // EKSEKUSI OPERASI 
            switch (operasi) {
                case "+":
                    hasil = v1 + v2;
                    break;
                case "-":
                    hasil = v1 - v2;
                    break;
                case "*":
                    hasil = v1 * v2;
                    break;
                case "/":
                    hasil = v1 / v2;
                    break;
                default:
                    alert("Operasi Tidak Valid");
                    continue; // Skip storing invalid operations
            }

            // MENYIMPAN HASIL OPERASI
            if (hasil !== undefined) {
                dataHasil.push("Hasil dari : " + v1 + " " + operasi + " " + v2 + " = " + hasil);
            }
        }
        next = confirm("Apakah Ingin Lakukan Operasi Lagi?");
    } while (next);

    if (dataHasil.length > 0) {
        resultElement.innerHTML = dataHasil.join("<br>");
    } else {
        resultElement.innerHTML = "Tidak Ada Hasil";
    }
}

function reset() {
    dataHasil = [];
    resultElement.innerHTML = "";
}


function example1(nama = "Bambang"){
    let a = 10;
    let b = 20;
    let c = a + b;
    let hasil = "Ini A = " + a + " Ini B = " + b + " Ini C = " + c;
    return 'Hello ' + nama + " Anda Kurang Beruntung";
}

// console.log(example1());

let example2 = function example2(nama = "Name is empty"){
    let a = 10;
    let b = 20;
    let c = a + b;
    let win = false;
    let hasil = "Ini A = " + a + " Ini B = " + b + " Ini C = " + c;
    return win ? "Anda Menang" : `Hello ${nama} Anda Kurang Beruntung In Function Example 2`;
}

// console.log(example2('This Is my name'));

const example3 = (nama) => `Hello ${nama}`;

console.log(example3("Ujang"));
