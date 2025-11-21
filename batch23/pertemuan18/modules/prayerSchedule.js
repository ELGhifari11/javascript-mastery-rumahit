// modules/prayerSchedule.js
import {
  searchCity,
  getDailySchedule,
  getMonthlySchedule,
} from './api.js';
import {
  getTodayForApi,
  getTodayForDisplay,
  getNextPrayerName,
} from './utils.js';


// ===============================================================================
const inputKota =
  document.querySelector('#input-kota') ||
  document.querySelector('.search-row input');

const btnPilihLokasi =
  document.querySelector('#btn-pilih-lokasi') ||
  document.querySelector('.search-row .btn');

const headerTanggalAtas =
  document.querySelector('#header-tanggal-atas') ||
  document.querySelector('.today-info .date');

const headerLokasiAtasStrong =
  document.querySelector('#header-lokasi-atas') ||
  document.querySelector('.today-info .location strong');

const headerTanggalBawah =
  document.querySelector('#header-tanggal-bawah') ||
  document.querySelector('.prayer-header-main');

const headerLokasiBawah =
  document.querySelector('#header-lokasi-bawah') ||
  document.querySelector('.prayer-header-sub');

const nextPrayerText =
  document.querySelector('#next-prayer-text') ||
  document.querySelector('.prayer-header .pill h2');

const sourcePill =
  document.querySelectorAll('.prayer-header .pill')[1];

const prayerTimeEls = document.querySelectorAll(
  '.prayer-list .prayer-time'
);

const monthListEl = document.querySelector('.month-list');

const PRAYER_FIELDS = [
  'imsak',
  'subuh',
  'terbit',
  'dhuha',
  'dzuhur',
  'ashar',
  'maghrib',
  'isya',
];

const state = {
  cityId: null,
  lokasi: null,
  daerah: null,
};

async function handlePilihLokasi() {
  try {
    const keyword = inputKota.value.trim();
    if (!keyword) {
      alert('Masukkan nama kota terlebih dahulu');
      return;
    }

    btnPilihLokasi.textContent = 'Loading...';
    btnPilihLokasi.disabled = true;

    const cityResult = await searchCity(keyword);
    if (!cityResult.status || cityResult.data.length === 0) {
      alert('Kota tidak ditemukan');
      return;
    }

    const kota = cityResult.data[0];
    state.cityId = kota.id;
    state.lokasi = kota.lokasi;

    const todayApi = getTodayForApi();
    const dailyData = await getDailySchedule(state.cityId, todayApi);

    const jadwal = dailyData.data.jadwal;
    state.daerah = dailyData.data.daerah;

    const todayDisplay = getTodayForDisplay();

    if (headerTanggalAtas) {
      headerTanggalAtas.textContent = todayDisplay;
    }

    if (headerLokasiAtasStrong) {
      headerLokasiAtasStrong.textContent = state.lokasi;
    }

    if (headerTanggalBawah) {
      headerTanggalBawah.textContent = jadwal.tanggal;
    }

    if (headerLokasiBawah) {
      headerLokasiBawah.textContent = `${state.lokasi} — ${state.daerah} • Jadwal harian`;
    }

    if (sourcePill) {
      sourcePill.textContent = `Source: /sholat/jadwal/${state.cityId}/${todayApi}`;
    }

    PRAYER_FIELDS.forEach((field, index) => {
      const el = prayerTimeEls[index];
      if (!el) return;
      el.textContent = jadwal[field] || '00:00';
    });

    const next = getNextPrayerName(jadwal);
    if (nextPrayerText) {
      nextPrayerText.textContent = `Sholat berikutnya: ${next.name} pada ${next.time}`;
    }

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    const monthlyData = await getMonthlySchedule(
      state.cityId,
      year,
      month
    );

    const listJadwal = monthlyData.data.jadwal;

    if (monthListEl && Array.isArray(listJadwal)) {
      // Header
      let html = `
        <div class="month-row header">
          <div>Tanggal</div>
          <div>Subuh</div>
          <div>Dzuhur</div>
          <div>Ashar</div>
          <div>Maghrib</div>
          <div>Isya</div>
        </div>
      `;

      listJadwal.forEach((item) => {
        html += `
          <div class="month-row">
            <div class="month-date">${item.tanggal}</div>
            <div class="month-time">${item.subuh}</div>
            <div class="month-time">${item.dzuhur}</div>
            <div class="month-time">${item.ashar}</div>
            <div class="month-time">${item.maghrib}</div>
            <div class="month-time">${item.isya}</div>
          </div>
        `;
      });

      monthListEl.innerHTML = html;
    }
  } catch (err) {
    console.error(err);
    alert(err.message || 'Terjadi kesalahan saat mengambil data');
  } finally {
    btnPilihLokasi.textContent = 'Pilih Lokasi';
    btnPilihLokasi.disabled = false;
  }
}

if (btnPilihLokasi) {
  btnPilihLokasi.addEventListener('click', handlePilihLokasi);
}
