const inputNamaSantri = document.getElementById("namaSantri");
const inputTargetHafalan = document.getElementById("targetHafalan");
const pesanIdentitas = document.getElementById("pesanIdentitas");

const inputAyatBaru = document.getElementById("ayatBaru");
const inputKesanBaru = document.getElementById("kesanBaru");
const daftarCatatan = document.getElementById("daftarCatatan");
const pesanCatatan = document.getElementById("pesanCatatan");

const daftarAmalanElemen = document.getElementById("daftarAmalan");
const ringkasanAmalan = document.getElementById("ringkasanAmalan");

const inputRenungan = document.getElementById("renunganSantri");
const ringkasanRenungan = document.getElementById("ringkasanRenungan");

pesanIdentitas.innerText = "Isi nama dan target hafalan untuk memulai.";
pesanCatatan.innerText = "Belum ada catatan hafalan.";
ringkasanRenungan.innerText = "Renungan malam akan tampil di sini.";

const identitasSantri = {
    nama: "",
    target: ""
};

const catatanHafalan = [];

const amalanSunnah = [
    { id: "dhuha", nama: "Shalat Dhuha" },
    { id: "rawatib", nama: "Shalat Rawatib" },
    { id: "tilawah", nama: "Tilawah Qur'an" },
    { id: "dzikir", nama: "Dzikir Pagi & Petang" },
    { id: "sedekah", nama: "Sedekah Harian" },
    { id: "murajaah", nama: "Muraja'ah Hafalan" }
];

const amalanDipilih = [];

function simpanIdentitas() {
    const nama = inputNamaSantri.value.trim();
    const target = inputTargetHafalan.value.trim();

    if (nama === "" || target === "") {
        pesanIdentitas.innerText = "Mohon isi nama dan target hafalan terlebih dahulu.";
        return;
    }

    identitasSantri.nama = nama;
    identitasSantri.target = target;

    pesanIdentitas.innerText = "Bismillah, " + nama + " siap mengejar target: " + target + ".";
}

function tambahCatatan() {
    const ayat = inputAyatBaru.value.trim();
    const kesan = inputKesanBaru.value.trim();

    if (ayat === "" || kesan === "") {
        pesanCatatan.innerText = "Tuliskan ayat atau hadits serta kesan singkatnya.";
        return;
    }

    catatanHafalan.push({ ayat: ayat, kesan: kesan });
    inputAyatBaru.value = "";
    inputKesanBaru.value = "";

    pesanCatatan.innerText = "Alhamdulillah, catatan hafalan baru tersimpan.";
    tampilkanCatatan();
}

function tampilkanCatatan() {
    if (catatanHafalan.length === 0) {
        daftarCatatan.innerHTML = "";
        return;
    }

    let isi = "";
    for (let i = 0; i < catatanHafalan.length; i++) {
        const data = catatanHafalan[i];
        isi += '<div class="item"><strong>' + data.ayat + '</strong><br>' + data.kesan + '</div>';
    }

    daftarCatatan.innerHTML = isi;
}

function muatAmalan() {
    let isi = "";
    for (let i = 0; i < amalanSunnah.length; i++) {
        const amalan = amalanSunnah[i];
        const sedangDipilih = amalanDipilih.indexOf(amalan.id) !== -1;
        const kelasAktif = sedangDipilih ? " aktif" : "";
        isi += '<button class="' + kelasAktif.trim() + '" onclick="pilihAmalan(\'' + amalan.id + '\')">' + amalan.nama + '</button>';
    }
    daftarAmalanElemen.innerHTML = isi;
    perbaruiRingkasanAmalan();
}

function pilihAmalan(idAmalan) {
    const posisi = amalanDipilih.indexOf(idAmalan);
    if (posisi === -1) {
        amalanDipilih.push(idAmalan);
    } else {
        amalanDipilih.splice(posisi, 1);
    }
    muatAmalan();
}

function perbaruiRingkasanAmalan() {
    if (amalanDipilih.length === 0) {
        ringkasanAmalan.innerText = "Belum ada amalan sunnah yang dicatat hari ini.";
        return;
    }

    const daftarNama = [];
    for (let i = 0; i < amalanDipilih.length; i++) {
        const idAmalan = amalanDipilih[i];
        for (let j = 0; j < amalanSunnah.length; j++) {
            if (amalanSunnah[j].id === idAmalan) {
                daftarNama.push(amalanSunnah[j].nama);
            }
        }
    }

    ringkasanAmalan.innerText = "Masya Allah, kamu telah melakukan: " + daftarNama.join(", ") + ".";
}

function simpanRenungan() {
    const renungan = inputRenungan.value.trim();
    if (renungan === "") {
        ringkasanRenungan.innerText = "Tuliskan minimal satu kalimat sebagai renungan malam.";
        return;
    }

    const nama = identitasSantri.nama === "" ? "Santri" : identitasSantri.nama;
    ringkasanRenungan.innerHTML = "<strong>Renungan " + nama + ":</strong><br>" + renungan;
    inputRenungan.value = "";
}

muatAmalan();
