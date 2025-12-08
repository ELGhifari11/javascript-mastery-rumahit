
const f1 = () => "INI F1 dari Format.js -----"

function masak(menuUtama, ...pelengkap) {
    return `
Menu Utama: ${menuUtama}
Pelengkap: ${pelengkap}
    `
}

export {f1,masak}