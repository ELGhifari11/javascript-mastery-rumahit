// ===================================================================
//                   MATERI KNOWLEDGE
// ===================================================================


// CREATE ELEMENT
const buatElemenSimple = (tag, isi) => {
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

// console.log("================================================"); console.log(resultList1);
// console.log("================================================"); console.log(resultList2);
// console.log("================================================"); console.log(resultList3);







// ===================================================================
// FLOW STEP BY STEP CUSTOM FUNCTION UNTUK MANIPULASI DOM
// ===================================================================

// STEP (Khusus Untuk Create Elemnent)
const buatTag = (tag) => document.createElement(tag)
/////////////////////////////////////////////////////////////////

// STEP (Khusus Untuk Create Node)
const buatNode = (node) => document.createTextNode(node)
/////////////////////////////////////////////////////////////////


// STEP (Khusus Untuk Add Event Listener)
const buatEventListn = (elemen, namEvent, handler) => {
    elemen.addEventListener(namEvent, handler)
}
/////////////////////////////////////////////////////////////////


// STEP (Set Khusus Single Attribute)
const buatSatuAttribute = (tag, key, value) => {

    // Validasi Khusus untuk Attribute EVENT LISTENER
    if (key.startsWith('on') && typeof value === 'function') {
        const namaEvent = key.substring(2).toLowerCase();
        buatEventListn(tag, namaEvent, value)
        return;

    // Validasi Khusus Untuk set ATTRIBUTE CLASS
    } else if (key === 'class'){
        setClass(tag,value)
    } else {

    // Khusus Untuk ATRIBUT BIASA
        tag.setAttribute(key, value)
    }

}
/////////////////////////////////////////////////////////////////


// STEP (Set Khusus Banyak Attribute)
const tanganiBanyakAttribute = (tag, att = {}) => Object.entries(att).forEach(([k, v]) => buatSatuAttribute(tag, k, v))
/////////////////////////////////////////////////////////////////

// STEP (Set Khusus Untuk Class)
const setClass = (tag,className) => tag.className = className

// STEP (Set Ke Body di HTML)
const addKeBody = (tag) => document.body.appendChild(tag)
/////////////////////////////////////////////////////////////////





// CUSTOM MANIPULASI DALAM MEMBUAT ELEMEN DENGAN BEBRBAGAI DOM
//////////////////////////////////////////////////////
const buatElemen = (tag, node, atributs = {}) => {

    let elemen = buatTag(tag)

    if (node) {
        let text = buatNode(node)
        elemen.appendChild(text)
    }

    if (atributs) {
        tanganiBanyakAttribute(elemen, atributs)
    }

    addKeBody(elemen)
}
/////////////////////////////////////////////////////



// CREATE ELEMENT WITH (TAG,ATTRIBUTE,CHILDREN)









// RUANG EKSKUSI PEMANGGILAN BERBAGAI FUNCTION YANG SUDAH DI BUAT
//////////////////////////////////////////////////////////////////////////////////////

buatElemen('button', 'EL', { id: "1", class: 'neon-glow-btn', style: 'margin:5px', onClick: () => tanyaMauBikinButtonBerapa() })
buatElemen('button', 'ABYAN', { id: "1", class: 'neon-glow-btn', style: 'margin:5px', onClick: () => abyan() })


///////////////////////////////////////
const tanyaNama = () => {
    const nama = prompt('SIAPA  KAU?')
    if (nama) {
        alert(`Ouh Anda Adalah si ${nama}`)
    }
}

/////// STUDY CASE 
const tanyaMauBikinButtonBerapa = () => {
    const total = prompt('Mau Bikin Button Berapa cuy?')

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            buatElemen('button', `Button ${i + 1}`, { id: `id${i + 1}`, class: 'neon-glow-btn', style: 'margin:5px',onclick: ()  => alert(`SAYA BUTTON KE ${i+1}`)  })
        }
    }
}






