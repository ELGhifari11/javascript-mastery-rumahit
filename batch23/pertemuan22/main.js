const tagDiv = document.getElementById('app');
const inputNama = document.getElementById('input-nama')
const tagButton1 = document.getElementById("btn-submit")
const tagMessage1 = document.getElementById("msg-name")

const database = []

/// ================== DEFAULT FUNCTION

function resetInput(namaInput){
    return namaInput.value = ""
}

function displayMessage(namaId,message,color){
    namaId.textContent = message
    namaId.style.color = color
}

const getDateStr = () => new Date().toLocaleDateString("id-ID", { day: "2-digit", month:'2-digit', year:'numeric' });
const getTimeStr = () => new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });


/// LOCAL

function saveToDb(k,v){

    // PARADIGM 1
    // let obj = {};
    // obj[k] = v;

    // PARADIGM 2
    let obj = {
        [k]: v   // ← pakai [] supaya nama key-nya dari isi variabel k
    }
    database.unshift(obj)
}

function saveObjToDb(obj) {
    try {
        if (typeof obj !== "object" || obj === null) {
            throw new TypeError("Data yang diberikan harus berupa objek yang valid.");
        }
        database.unshift(obj);
    } catch (error) {
        console.error("Gagal menyimpan objek ke database:", error.message);
    }

    return database
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function remove(key) {
  localStorage.removeItem(key);
}

/// SESSION 
function saveSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function loadSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

/// ==========================================


// STUDY CASE 1 

function saveUser(name) {
    if(!name){
       return alert("Data belom di isi")
    } else {
        save('users',saveObjToDb({
            "nama" : name,
            "date-create" : `${getTimeStr()} ${getDateStr()} `
        }))
        resetInput(inputNama)
        displayMessage(tagMessage1,`Oke Data "${name}" Tersimpan`,"green")
    }
}

tagButton1.addEventListener('click',function(e){
    e.preventDefault()
    saveUser(inputNama.value.trim())
})