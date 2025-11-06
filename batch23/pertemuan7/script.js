

// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

// Closure - Switch - IF with Operator - Hoisting - Comparasion & Logical - Looping - 


// EXAMPLE OF AN ARRAY OBJECT

let f1 = function () {
    return "INI F1"
}

let arr = ['String 1', 100]

let arr2 = ['String', 10, true, f1(), arr, ["Array1", "Array2"]] // 
let arr3 = ['Fulan PIT', 'Andi', "Bambang PIT", "Asep", "Udin PIT"] // 




function f2(namaData) {
    console.log(`Oke Array "${namaData}" Akan Di Eksekusi`);
    return function (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Hasil Array "${namaData}" pada Loop ke ${i + 1}`);
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }
}
// f2("Data Santri")(arr3)


// ================================================
// FUNCTION MANIPULATION DATA TO ARRAY
// ================================================

let dataSantri = []
const output = document.getElementById('outputBox');

function deleteFisrtArray() {
    dataSantri.shift() // >>> SHIFT() (Delete Only First Element in Array)
    output.innerText = dataSantri
}

function deleteLastArray() {
    dataSantri.pop() // >>> POP() (Delete only Last Element in Array)
    output.innerText = dataSantri
}

document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")

    const name = document.getElementById("name").value;
    const option = document.getElementById('option').value;

    if (!name || !option) {
        alert("Sa;ah satu Data Belum Ke Input");
    } else {
        manipulationElementArray(name, option)
    }
});

function manipulationElementArray(data, option) {
    togglePopup('1')
    switch (option) {
        case "pop":
            dataSantri.push(data), // >>>>>> PUSH() (Add New Element in Last Index)
                output.innerText = dataSantri
            break;
        case "unshift":
            dataSantri.unshift(data), // >>>>>> SHIFT() (Add New Element in Fisrt Index)
                output.innerText = dataSantri
            break;
        default:
            break;
    }
    console.log(`Data "${data}" berhasil Di tambahkan dengan metode "${option}" ....`);
    console.log(dataSantri);
    togglePopup('1')
}





