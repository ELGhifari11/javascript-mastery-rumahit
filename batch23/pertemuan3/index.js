
function login(){

    let email = prompt("Masukan Email")
    let pw = prompt("Masukan Password")

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi")
        console.log("Login Gagal")
    } else if (email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil")
    } else {
        alert("Email Atau Password anda salah")
        console.log("Login Gagal")
    }
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

// Contoh pemanggilan fungsi
// cekAksesPengguna('aktif', 'admin');
// cekAksesPengguna('nonaktif', 'moderator');
// cekAksesPengguna('banned', 'user');
// cekAksesPengguna('guest', 'user');
