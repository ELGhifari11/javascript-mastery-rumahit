/**
 * ==================================================================================
 * UTILS: UI
 * ==================================================================================
 * Helper UI: Modal, Toast, Alert, Confirm, Prompt.
 */

// --- TOAST NOTIFICATION ---
export function tampilkanNotifikasi(pesan, tipe = 'info') {
    const kontainer = document.getElementById('notification-container');
    const notifikasi = document.createElement('div');
    notifikasi.className = `notification ${tipe}`;
    notifikasi.textContent = pesan;
    kontainer.appendChild(notifikasi);
    setTimeout(() => {
        notifikasi.remove();
    }, 3000);
}

// --- MODAL BASIC ---
export function bukaModal(idModal) {
    console.log(`Mencoba membuka modal: ${idModal}`);
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.error(`Modal dengan ID ${idModal} tidak ditemukan!`);
    }
}

export function tutupModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// --- GENERIC MODAL HELPERS ---
function resetModalGeneric() {
    const modal = document.getElementById('generic-modal');
    const judul = document.getElementById('generic-modal-title');
    const pesan = document.getElementById('generic-modal-message');
    const wadahInput = document.getElementById('generic-modal-input-container');
    const input = document.getElementById('generic-modal-input');
    const tombolBatal = document.getElementById('btn-generic-cancel');
    const tombolKonfirmasi = document.getElementById('btn-generic-confirm');
    const tombolTutup = document.getElementById('btn-close-generic');

    judul.textContent = 'Notifikasi';
    pesan.textContent = '';
    wadahInput.classList.add('hidden');
    input.value = '';
    tombolBatal.classList.add('hidden');
    tombolKonfirmasi.textContent = 'OK';

    const tombolKonfirmasiBaru = tombolKonfirmasi.cloneNode(true);
    tombolKonfirmasi.parentNode.replaceChild(tombolKonfirmasiBaru, tombolKonfirmasi);

    const tombolBatalBaru = tombolBatal.cloneNode(true);
    tombolBatal.parentNode.replaceChild(tombolBatalBaru, tombolBatal);

    const tombolTutupBaru = tombolTutup.cloneNode(true);
    tombolTutup.parentNode.replaceChild(tombolTutupBaru, tombolTutup);

    return {
        modal, judul, pesan, wadahInput, input,
        tombolBatal: tombolBatalBaru,
        tombolKonfirmasi: tombolKonfirmasiBaru,
        tombolTutup: tombolTutupBaru
    };
}

export function tampilkanAlert(pesan, judul = 'Info') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();
        elemen.judul.textContent = judul;
        elemen.pesan.textContent = pesan;
        elemen.tombolKonfirmasi.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai();
        });
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai();
        });
        bukaModal('generic-modal');
    });
}

export function tampilkanKonfirmasi(pesan, judul = 'Konfirmasi') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();
        elemen.judul.textContent = judul;
        elemen.pesan.textContent = pesan;
        elemen.tombolBatal.classList.remove('hidden');
        elemen.tombolKonfirmasi.textContent = 'Ya'; // Ubah teks tombol OK jadi Ya

        elemen.tombolKonfirmasi.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(true);
        });
        elemen.tombolBatal.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(false);
        });
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(false);
        });
        bukaModal('generic-modal');
    });
}

export function tampilkanInput(pesan, nilaiDefault = '', judul = 'Input') {
    return new Promise((selesai) => {
        const elemen = resetModalGeneric();
        elemen.judul.textContent = judul;
        elemen.pesan.textContent = pesan;
        elemen.wadahInput.classList.remove('hidden');
        elemen.input.value = nilaiDefault;
        elemen.tombolBatal.classList.remove('hidden');
        elemen.tombolKonfirmasi.textContent = 'OK';

        elemen.tombolKonfirmasi.addEventListener('click', () => {
            const nilai = elemen.input.value;
            tutupModal('generic-modal');
            selesai(nilai);
        });
        elemen.tombolBatal.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(null);
        });
        elemen.tombolTutup.addEventListener('click', () => {
            tutupModal('generic-modal');
            selesai(null);
        });
        bukaModal('generic-modal');
        elemen.input.focus();
    });
}
