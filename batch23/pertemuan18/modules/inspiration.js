import {
  getRandomAyat,
  getRandomHaditsArbain,
  getRandomDoa,
  getRandomAsmaulHusna,
} from './api.js';


// ===============================================================================
const panels = document.querySelectorAll('.panel');
const inspirationPanel = panels[1];
// ===============================================================================



// ===============================================================================
const btnRefresh =
  inspirationPanel && inspirationPanel.querySelector('.btn');
// ===============================================================================



// ===============================================================================
const cards =
  inspirationPanel &&
  inspirationPanel.querySelectorAll('.cards-grid .card');
// ===============================================================================



// ===============================================================================
if (!inspirationPanel || !btnRefresh || !cards || cards.length < 4) {
  console.warn('Elemen inspirasi harian tidak lengkap.');
}
// ===============================================================================



// ===============================================================================
async function handleRefresh() {
  try {
    btnRefresh.textContent = 'Loading...';
    btnRefresh.disabled = true;

    // Ambil semua data (boleh juga satu-satu, tapi ini versi simple pakai Promise.all)
    const [ayatRes, haditsRes, doaRes, husnaRes] = await Promise.all([
      getRandomAyat(),
      getRandomHaditsArbain(),
      getRandomDoa(),
      getRandomAsmaulHusna(),
    ]);

    // Card 1: Ayat Hari Ini
    const ayatCard = cards[0];
    const ayatData = ayatRes.data;
    const infoSurat = ayatData.info.surat;
    const ayat = ayatData.ayat;

    const ayatTitleEl = ayatCard.querySelector('.card-title');
    const ayatMetaEl = ayatCard.querySelector('.card-footer span');
    const ayatArabEl = ayatCard.querySelector('.card-arabic');
    const ayatContentEl = ayatCard.querySelector('.card-content');

    ayatTitleEl.textContent = `${infoSurat.nama.id} • Ayat ${ayat.ayah}`;
    ayatArabEl.textContent = ayat.arab;
    ayatContentEl.textContent = ayat.text;
    ayatMetaEl.textContent = `Juz ${ayat.juz} • Hal. ${ayat.page}`;

    // Card 2: Hadits Arbain
    const haditsCard = cards[1];
    const haditsData = haditsRes.data;

    const haditsTitleEl = haditsCard.querySelector('.card-title');
    const haditsMetaEl = haditsCard.querySelector('.card-meta');
    const haditsArabEl = haditsCard.querySelector('.card-arabic');
    const haditsContentEl = haditsCard.querySelector('.card-content');

    haditsTitleEl.textContent = haditsData.judul;
    haditsMetaEl.textContent = `No. ${haditsData.no} • /hadits/arbain/acak`;
    haditsArabEl.textContent = haditsData.arab;
    haditsContentEl.textContent = haditsData.indo;

    // Card 3: Doa Hari Ini
    const doaCard = cards[2];
    const doaData = doaRes.data;

    const doaTitleEl = doaCard.querySelector('.card-title');
    const doaMetaEl = doaCard.querySelector('.card-meta');
    const doaArabEl = doaCard.querySelector('.card-arabic');
    const doaContentEl = doaCard.querySelector('.card-content');

    doaTitleEl.textContent = doaData.judul;
    doaMetaEl.textContent = 'Source: /doa/acak';
    doaArabEl.textContent = doaData.arab;
    doaContentEl.textContent = doaData.indo;

    // Card 4: Asmaul Husna
    const husnaCard = cards[3];
    const husnaData = husnaRes.data;

    const husnaTitleEl = husnaCard.querySelector('.card-title');
    const husnaMetaEl = husnaCard.querySelector('.card-meta');
    const husnaArabEl = husnaCard.querySelector('.card-arabic');
    const husnaContentEl = husnaCard.querySelector('.card-content');

    husnaTitleEl.textContent = `${husnaData.arab} • ${husnaData.latin}`;
    husnaMetaEl.textContent = 'Source • /husna/acak';
    husnaArabEl.textContent = husnaData.arab;
    husnaContentEl.textContent = husnaData.indo;


  } catch (err) {
    console.error(err);
    alert(err.message || 'Gagal memuat inspirasi harian, coba lagi.');
  } finally {
    btnRefresh.textContent = 'Refresh ACAK';
    btnRefresh.disabled = false;
  }
}
// ===============================================================================



// ===============================================================================
if (btnRefresh) {
  btnRefresh.addEventListener('click', handleRefresh);
}
// ===============================================================================
