
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        console.log("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});


// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    21,
    true,
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
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

function logggingNama(nama, alamat, rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

// console.log(logggingNama("Bambang", "jakarta", "09876654321"));



// =======================================

// Deklartif
function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        console.log(typeof a);
        console.log(typeof b);

        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Ekpresif
const f1 = function (angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        console.log(typeof a);
        console.log(typeof b);

        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}
// arrow function
const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;




// LOOPING 
function f3(data) {
    for (start = 0; start < data.length; start++) {
        if (start % 2 != 0) {
            console.log(`${start + 1} Genap >>> ${data[start]}`);
            // console.log((start + 1) + " Genap >>>" + data[start]);
        } else {
            console.log(`${start + 1} Ganjil >>> ${data[start]}`);
        }
    }
}

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)

