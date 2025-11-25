const tagDiv = document.getElementById('app');
const inputNama = document.getElementById('input-nama')
const tagButton1 = document.getElementById("btn-submit")
const tagMessage1 = document.getElementById("err-msg-name")

// const database = []

/// ================== DEFAULT FUNCTION

function resetInput(namaInput){
    return namaInput.value = ""
}

function displayMessage(){

}

/// LOCAL

function saveToDb(key,v){
    let obj = {
        "key" : v
    }
    database.unshift({})
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
        // saveToDb("user",dataUser)
        save('users',dataUser)
        resetInput(inputNama)
        tagMessage1.textContent = "Oke Data Tersimpan"
        tagMessage1.style.color = "green"
        
    }
}

tagButton1.addEventListener('click',function(e){
    e.preventDefault()
    saveUser(inputNama.value.trim())
})