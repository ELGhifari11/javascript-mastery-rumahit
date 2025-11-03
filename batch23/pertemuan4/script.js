
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const output = document.getElementById("outputBox");
    output.innerText += `Halo, ${name}! Umur kamu ${age} tahun. \n`;

    togglePopup("1")

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

function f2() {
    console.log('Test');
    togglePopup("2")
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

// FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    f4(document.getElementById("nama").value, document.getElementById("alamat").value)
    togglePopup("2")
});

// function f4(nama = "Empty Name", alamat = "Empty Alamat") {
//     togglePopup("2")
//     const output = document.getElementById("outputBox");
//     output.innerText += `Halo, ${nama}! Asala kamu di ${alamat} ya?.`;
// }

function logggingNama(nama, alamat,rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

console.log(logggingNama("Bambang", "jakarta","09876654321"));



