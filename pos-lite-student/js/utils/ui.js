import * as utils from './index.js';

// 4. Bikin Tampilan pakai fungsi sakti 'buatElemen'
// Perhatikan betapa bersihnya kode ini dibanding document.createElement biasa!
export const renderSingleKartu = (db = {}) => {
    const kartu = utils.buatElemen('div', { className: 'kartu-produk', style: 'border: 1px solid black; padding: 20px; max-width: 300px; border-radius: 8px;' },
    
    // Header Kartu
    utils.buatElemen('h2', { style: 'color: brown; margin-top: 0;' }, db.nama),
    
    // Badge Kategori
    utils.buatElemen('span', { style: 'background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 12px;' }, db.kategori),
    
    // Harga (p) - kita pakai fungsi formatKeRupiah
    utils.buatElemen('h3', { style: 'color: green;' }, utils.ubahMataUang(db.harga)),
    
    // Tombol (button) dengan Event Listener onClick
    utils.buatElemen('button', {
        className: 'tombol-beli',
        style: 'background: blue; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; width: 100%;',
        // Event Listener (Klik)
        onClick: () => {
            alert(`Kamu membeli ${db.nama} seharga ${utils.ubahMataUang(db.harga)}`);
        }
    }, "Beli Sekarang")
);
return kartu
}