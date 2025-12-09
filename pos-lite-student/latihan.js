// CREATE ELEMENT
const buatElemen = (tag,isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

// CREATE ELEMENT WITH DEFAULT PARAM
const buatElemenButton = (isi = "KLIK") => {
    const button = document.createElement('button')
    const textNode = document.createTextNode(isi)
    button.appendChild(textNode)
    document.body.appendChild(button)
}

// REST PARAM
const jumlahkan = (...angka) => angka.reduce((a,b) => a+b)

// OBJECT ENTRIES
const obj1 = (props = {}) => props // HASIL => { id: 'id1', class: 'class1' }
const obj2 = (props = {}) => Object.entries(props) // HASIL => [ [ 'id', 'id1' ], [ 'class', 'class1' ] ]
const resultObj1 = obj1({id:"id1",class:"class1"})
const resultObj2 = obj2({id:"id1",class:"class1"})

// OBJECT ENTRIES WITH FOREACH 
const list1 = (props = {}) => Object.entries(props).map((v,i,) => `I:(${i}) V:(${v})`).join()
const list2 = (props = {}) => Object.entries(props).map(([k,v],i,) => `I:(${i}). K:(${k}) V:(${v})`)
const list3 = (props = {}) => Object.entries(props).map(([k,v],i,) => `I:(${i}). K:(${k}) V:(${v})`).join('\n')
const resultList1 = list1({id:"id1",class:"class1"}) 
const resultList2 = list2({id:"id1",class:"class1"}) // TANPA JOIN : [ '0|id:"id1"', '1|class:"class1"' ]
const resultList3 = list3({id:"id1",class:"class1"}) // DENGAN JOIN : 0|id:"id1" , 1|class:"class1"

console.log("================================================"); console.log(resultList1); 
console.log("================================================"); console.log(resultList2); 
console.log("================================================"); console.log(resultList3); 
