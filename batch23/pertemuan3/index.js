
function login(){

    let email = prompt("Masukan Email");
    let pw = prompt("Masukan Password");

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi");
        console.log("Login Gagal");
    } else if(email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil");
    } else {
        alert("Email Atau Password anda salah");
        console.log("Login Gagal");
    }

     
    
}