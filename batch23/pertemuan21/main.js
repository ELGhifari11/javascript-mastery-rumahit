const myform1 = document.getElementById('myform1')
e.preventDefault();

// NAMA
const inputNama = document.getElementById('input-nama') 
const errMsgInputNama = document.getElementById('err-msg-name')

// EMAIL
const inputMail = document.getElementById('input-email')
myform1.addEventListener('submit',function(e){
    const errMsgInputNama = document.getElementById('err-msg-email')

    let nama = inputNama.value.trim()

    if(!nama){
        errMsgInputNama.textContent = `Form nama belum di isi`
        errMsgInputNama.style.color = "red"
        inputNama.style.borderColor = 'red'
    } else if(nama.length < 6) {
        errMsgInputNama.textContent = `Nama kurang dari 6 karakter`
        errMsgInputNama.style.color = "red"
    } else{
        errMsgInputNama.textContent = `Ok nama valid`
        errMsgInputNama.style.color = "green"
        inputNama.style.borderColor = '#4a90e2'
    }
})
