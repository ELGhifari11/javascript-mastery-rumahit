 // ===================================================================
//                   MATERI KNOWLEDGE
// ===================================================================


// STUDY CASE DENGAN (createElement())
const buatElemenSimple = (tag, isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

// STUDY CASE DENGAN (createElement()) WITH DEFAULT PARAM
const buatElemenButton = (isi = "KLIK") => {
    const button = document.createElement('button')
    const textNode = document.createTextNode(isi)
    button.appendChild(textNode)
    document.body.appendChild(button)
}

// STUDY CASE DENGAN (Object.entries())
const obj1 = (props = {}) => props // HASIL => { id: 'id1', class: 'class1' }
const obj2 = (props = {}) => Object.entries(props) // HASIL => [ [ 'id', 'id1' ], [ 'class', 'class1' ] ]
const resultObj1 = obj1({ id: "id1", class: "class1" })
const resultObj2 = obj2({ id: "id1", class: "class1" })


// STUDY CASE DENGAN (Object.entries() + map())
const list1 = (props = {}) => Object.entries(props).map((v, i,) => `I:(${i}) V:(${v})`).join()
const list2 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`)
const list3 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`).join('\n')
const resultList1 = list1({ id: "id1", class: "class1" }) // Tanpa array [] pada Param Value nya : I:(0) V:(id,id1),I:(1) V:(class,class1)
const resultList2 = list2({ id: "id1", class: "class1" }) // TANPA JOIN : [ 'I:(0). K:(id) V:(id1)', 'I:(1). K:(class) V:(class1)' ]
const resultList3 = list3({ id: "id1", class: "class1" }) // DENGAN JOIN : I:(0). K:(id) V:(id1) , I:(1). K:(class) V:(class1)

// STUDY CASE DENGAN (startsWith()) 
const cekNama = () => {
    let nama = prompt("Nama Kamu Siapa ?")
    if (nama) {
        // Validasi Jika Value Nama Di awali (muhammad)
        if (nama.startsWith('muhammad') || nama.startsWith('ahmad')) {
            console.log(nama);
            alert(`Hello Brother ${nama} Im Muslim Like You`)
        } else {
            // Langsung Muncul Jika Namanya bukan di awali 
            alert(`Halo ${nama}`)
            console.log(nama);
        }
    }
    return 
}


// STUDY CASE DENGAN (typeof)
const cekTypeData = (value) => console.log(typeof value );

// STUDY CASE DENGAN (substring())
const ambilKarakterKe = () => {
    let value = prompt('Masukan Value')
    let start = prompt('Ambil dari Karakter ke berapa?')
    let end = prompt('Sampe ke Berapa?')
    console.log(value.substring(start,end)); 
}

// STUDY CASE DENGAN (toLowerCase())
const ubahKeHurufKecil = () => {
    let value = prompt("Masukan Text")
    let result = value.toLowerCase()
    buatElemen('h1',result,{id:'hurufKecil',style:"font-size:100px;"})  
}

// STUDY CASE DENGAN (toUpperCase())
const ubahKeHurufBesar = () => {
    let value = prompt("Masukan Text")
    let result = value.toUpperCase()
    buatElemen('h1',result,{id:'hurufBesar',style:"font-size:100px;"})
}

// STUDY CASE DENGAN (Object.assign())



// =====================================================================================================================================================
// =====================================================================================================================================================




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
const pasangEventListn = (elemen, namEvent, handler) => {
    elemen.addEventListener(namEvent, handler)
}
/////////////////////////////////////////////////////////////////

// STEP (Set khusus Untuk Pasang Dataset)
function pasangDataset(elemen, datasetObject = {}) {
  Object.assign(elemen.dataset, datasetObject); // datasetObject misal: { id: '123', role: 'card' }
}
/////////////////////////////////////////////////////////////////


// STEP (Set Khusus Single Attribute)
const buatSatuAttribute = (tag, key, value) => {

    // Validasi Khusus untuk Attribute EVENT LISTENER
    if (key.startsWith('on') && typeof value === 'function') {
        const namaEvent = key.substring(2).toLowerCase();
        pasangEventListn(tag, namaEvent, value)
        return;

    // Validasi Khusus Untuk pasang ATTRIBUTE CLASS
    } else if (key === 'class') {
        pasangClass(tag, value)

    // Validais Khusus Untuk Pasang DATASET
    } else if (key === 'dataset' && typeof value === 'object') {
        pasangDataset(tag,value)
    }
    else {
        // Khusus Untuk ATRIBUT BIASA
        tag.setAttribute(key, value)
    }

}
/////////////////////////////////////////////////////////////////


// STEP (Set Khusus Banyak Attribute)
const tanganiBanyakAttribute = (tag, att = {}) => Object.entries(att).forEach(([k, v]) => buatSatuAttribute(tag, k, v))
/////////////////////////////////////////////////////////////////

// STEP (Set Khusus Untuk pasang Class)
const pasangClass = (tag, className) => tag.className = className

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






//////////////////////////////////////////////////////////////////////////////////////
// RUANG EKSKUSI PEMANGGILAN BERBAGAI FUNCTION YANG SUDAH DI BUAT
//////////////////////////////////////////////////////////////////////////////////////

///////  Custom Handler For Add Event Listner 
const tanyaNama = () => {
    const nama = prompt('SIAPA  KAU?')
    if (nama) {
        alert(`Ouh Anda Adalah si ${nama}`)
    }
}

///////  Custom Handler For Add Event Listner 
const tanyaMauBikinButtonBerapa = () => {
    const total = prompt('Mau Bikin Button Berapa cuy?')

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            buatElemen('button', `Button ${i + 1}`, { id: `id${i + 1}`, class: 'neon-glow-btn', style: 'margin:5px', onclick: () => alert(`SAYA BUTTON KE ${i + 1}`) })
        }
    }
}

///// Custom Manipulasi pada DATASET
buatElemen('div', 'SAMPLE DATA SET', { id: "1", class: 'neon-glow-btn', style: 'margin-right:1195px',dataset:{id:'001',nama:"Nutrisari",price:'1000',category:'Minuman'}})
let id1 = document.getElementById('1')
buatElemen('button',`Id: ${id1.dataset.id}`,{class: 'neon-glow-btn',style: 'margin:5px'})
buatElemen('button',`Nama: ${id1.dataset.nama}`,{class: 'neon-glow-btn',style: 'margin:5px'})
buatElemen('button',`Price: ${id1.dataset.price}`,{class: 'neon-glow-btn',style: 'margin:5px'})
buatElemen('button',`Category: ${id1.dataset.category}`,{class: 'neon-glow-btn',style: 'margin:5px'})
