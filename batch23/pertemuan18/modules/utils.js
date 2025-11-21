// modules/utils.js

export function padZero(num) {
  return num.toString().padStart(2, '0');
}

export function getTodayForApi() {
  const now = new Date();
  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1); // 0-11 -> 1-12
  const date = padZero(now.getDate());
  return `${year}-${month}-${date}`;
}

export function getTodayForDisplay() {
  const now = new Date();
  const hariIndo = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  const hari = hariIndo[now.getDay()];
  const tanggal = padZero(now.getDate());
  const bulan = padZero(now.getMonth() + 1);
  const tahun = now.getFullYear();

  return `${hari}, ${tanggal}/${bulan}/${tahun}`;
}

function toMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

export function getNextPrayerName(jadwal) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const list = [
    { key: 'subuh', label: 'Subuh' },
    { key: 'dzuhur', label: 'Dzuhur' },
    { key: 'ashar', label: 'Ashar' },
    { key: 'maghrib', label: 'Maghrib' },
    { key: 'isya', label: 'Isya' },
  ];

  for (const item of list) {
    const jam = jadwal[item.key];
    if (!jam) continue;
    const menitSholat = toMinutes(jam);
    if (menitSholat > nowMinutes) {
      return { name: item.label, time: jam };
    }
  }

  return { name: 'Subuh', time: jadwal.subuh };
}
