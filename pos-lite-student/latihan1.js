// CREATE ELEMENT
const buatElemen = (tag, isi) => {
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

// OBJECT ENTRIES
const obj1 = (props = {}) => props // HASIL => { id: 'id1', class: 'class1' }
const obj2 = (props = {}) => Object.entries(props) // HASIL => [ [ 'id', 'id1' ], [ 'class', 'class1' ] ]
const resultObj1 = obj1({ id: "id1", class: "class1" })
const resultObj2 = obj2({ id: "id1", class: "class1" })

// OBJECT ENTRIES WITH FOREACH 
const list1 = (props = {}) => Object.entries(props).map((v, i,) => `I:(${i}) V:(${v})`).join()
const list2 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`)
const list3 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`).join('\n')
const resultList1 = list1({ id: "id1", class: "class1" }) // Tanpa array [] pada Param Value nya : I:(0) V:(id,id1),I:(1) V:(class,class1)
const resultList2 = list2({ id: "id1", class: "class1" }) // TANPA JOIN : [ 'I:(0). K:(id) V:(id1)', 'I:(1). K:(class) V:(class1)' ]
const resultList3 = list3({ id: "id1", class: "class1" }) // DENGAN JOIN : I:(0). K:(id) V:(id1) , I:(1). K:(class) V:(class1)

console.log("================================================"); console.log(resultList1);
console.log("================================================"); console.log(resultList2);
console.log("================================================"); console.log(resultList3);

// CREATE ELEMENT WITH ATRIBUT
const buatElemen2 = (tag, node, atributs = {}) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)
    Object.entries(atributs).forEach(([k, v]) => {
        elemen.setAttribute(k, v)
    })
    document.body.appendChild(elemen)
}

buatElemen2('h1', "BAMBANG NGODING", { id: "tagH1", class: "class1", style: "font-size:70px" })
buatElemen2('h1', "BAMBANG TIDUR", { id: "tagH2", class: "class2", style: "font-size:70px" })
buatElemen2('h1', "BAMBANG MAKAN", { id: "tagH3", class: "class3", style: "font-size:70px" })
buatElemen2('h1', "BAMBANG BAB", { id: "tagH4", class: "class1", style: "font-size:70px" })


const hide = (tag) => document.getElementById(tag).setAttribute('class', "hide")
const unHide = (tag) => document.getElementById(tag).setAttribute('class', "display")

buatElemen2('button','NANYA',{ id: "btn", class: "class3", style: "font-size:70px"})

// if (prompt('ngoding') == "iya") {
//     unHide('tagH1')
// } else {
//     hide('tagH1')
// }




// REST PARAM
const jumlahkan = (...angka) => angka.reduce((a, b) => a + b)

// CREATE ELEMENT WITH (TAG,ATTRIBUTE,CHILDREN)

