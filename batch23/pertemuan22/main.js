const tagDiv = document.getElementById('app');
const inputNama = document.getElementById('input-nama')
const tagButton1 = document.getElementById("btn-submit")
const tagMessage1 = document.getElementById("err-msg-name")

const database = []

/// ================== DEFAULT FUNCTION

function resetInput(namaInput){
    return namaInput.value = ""
}

function displayMessage(namaId,message,color){
    namaId.textContent = message
    namaId.style.color = color
}

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

function saveUser(dataUser) {
    if(!dataUser){
       return alert("Data belom di isi")
    } else {
        saveToDb("nama",dataUser)
        save('users',database)
        resetInput(inputNama)
        displayMessage(tagMessage1,"Oke Data Tersimpan","green")
    }
}

tagButton1.addEventListener('click',function(e){
    e.preventDefault()
    saveUser(inputNama.value.trim())
})