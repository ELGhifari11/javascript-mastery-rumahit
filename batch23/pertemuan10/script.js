
// =============================
// DESTRUCTURING
// =============================

const tag1 = document.getElementById("tag1")
const tag2 = document.getElementById("tag2")

let dataSantri = ["Santri1","Sntri2","Santri3","Santri4","Santri5"]

let dataSantri2 = {
    nama : "santri Obj 1",
    nama2 : "santri Obj 2",
    nama3 : "santri Obj 3",
    nama4 : "santri Obj 4",
    nama5 : "santri Obj 4",
}

let [san1, , , ,san5] = dataSantri

let {nama : namaAwal,nama2,nama3,nama4,nama5} = dataSantri2

tag1.innerHTML += `<h1>${san1}</h1>`
// tag1.innerHTML += `<h1>${san2}</h1>`
// tag1.innerHTML += `<h1>${san3}</h1>`
// tag1.innerHTML += `<h1>${san4}</h1>`
tag1.innerHTML += `<h1>${san5}</h1>`

tag1.innerHTML += `<h1>${namaAwal}</h1>`
tag1.innerHTML += `<h1>${nama2}</h1>`
tag1.innerHTML += `<h1>${nama3}</h1>`
tag1.innerHTML += `<h1>${nama4}</h1>`
tag1.innerHTML += `<h1>${nama5}</h1>`

tag2.innerHTML += `<h1>DATA 1</h1>`
tag2.innerHTML += `<h1>DATA 2</h1>`



// =============================
// SPREAD OPERATOR
// =============================

let exampleSpread1 = [10,20,30,40,50]
let exampleSpread2 = [60,70,80,90,100]

let exampleSpread3 = [...exampleSpread1,...exampleSpread2]

console.log('INI EXAMPLE SPREAD 3 >>>>>');
console.table(exampleSpread3);

let exampleSpread4 = {id: "001",email : "email@GMAIL.COM"}
let exampleSpread5 = {...exampleSpread4,pw : "0987654321"}
console.table(exampleSpread5);


// =============================
// REST OPERATOR
// =============================

function fRest(...items) {
    tag2.innerText = items
    return items
}

console.table(fRest("Item 1","Item 2","Item 3","Item 4","Item 5"));
