

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
            console.log(`Hasil Array "${namaData}" pada Loop ke ${i+1}`);   
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }
}
// f2("Data Santri")(arr3)


// ================================================
// FUNCTION ADD DATA TO ARRAY
// ================================================

const dataSantri = ['Bambang']
const output = document.getElementById('outputBox');

document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const name = document.getElementById("name").value;
    if (!name) {
        alert("Data Belum Ke Input");
    } else {
        manipulationElementArray(name)
    }
});

function manipulationElementArray(data) {
    togglePopup('1')
    dataSantri.push(data), // PUSH()
    output.innerText = dataSantri
    console.log(`Data ${data} berhasil Di tambahkan ...`);
    togglePopup('1')
}





