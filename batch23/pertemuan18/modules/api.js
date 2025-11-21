// modules/api.js
const BASE_URL = 'https://api.myquran.com/v2/';



// ===============================================================================
async function getJson(url, errorMessage) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(errorMessage || 'Gagal mengambil data dari server');
  }
  const data = await res.json();
  return data;
}
// ===============================================================================



// ===============================================================================
export async function searchCity(keyword) {
  if (!keyword) {
    throw new Error('Keyword kota kosong');
  }
  const url = `${BASE_URL}sholat/kota/cari/${keyword}`;
  return getJson(url, 'Gagal mencari kota');
}
// ===============================================================================



// ===============================================================================

export async function getDailySchedule(cityId, dateString) {
  const url = `${BASE_URL}sholat/jadwal/${cityId}/${dateString}`;
  return getJson(url, 'Gagal mengambil jadwal harian');
}
// ===============================================================================



// ===============================================================================
export async function getMonthlySchedule(cityId, year, month) {
  const url = `${BASE_URL}sholat/jadwal/${cityId}/${year}/${month}`;
  return getJson(url, 'Gagal mengambil jadwal bulanan');
}
// ===============================================================================



// ===============================================================================
export async function getRandomAyat() {
  const url = `${BASE_URL}quran/ayat/acak`;
  return getJson(url, 'Gagal mengambil ayat acak');
}
// ===============================================================================



// ===============================================================================
export async function getRandomHaditsArbain() {
  const url = `${BASE_URL}hadits/arbain/acak`;
  return getJson(url, 'Gagal mengambil hadits acak');
}
// ===============================================================================



// ===============================================================================
export async function getRandomDoa() {
  const url = `${BASE_URL}doa/acak`;
  return getJson(url, 'Gagal mengambil doa acak');
}
// ===============================================================================



// ===============================================================================
export async function getRandomAsmaulHusna() {
  const url = `${BASE_URL}husna/acak`;
  return getJson(url, 'Gagal mengambil Asmaul Husna acak');
}
// ===============================================================================
