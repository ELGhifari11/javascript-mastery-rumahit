/**
 * FUNGSI: buatElemen
 * Tugas: Membuat elemen HTML lewat JavaScript dengan rapi (mirip React).
 * 
 * Parameter:
 * 1. tag      : Nama elemen (misal: 'div', 'h1', 'button')
 * 2. props    : Properti/Atribut (misal: { id: 'judul', className: 'teks-biru' })
 * 3. ...children : Isi elemen (bisa teks, bisa elemen lain) -> Ditangkap jadi Array
 */
export function buatElemen(tag, props = {}, ...children) {
    // 1. Buat elemen kosong dulu
    const elemen = document.createElement(tag);

    // 2. Pasang atributnya (jika ada)
    if (props) {
        // Object.entries mengubah { a: 1, b: 2 } menjadi [ ['a', 1], ['b', 2] ]
        // Tujuannya agar bisa kita loop satu-satu
        Object.entries(props).forEach(([key, value]) => {
            
            // A. Cek apakah ini Event Listener? (Diawali kata 'on', misal: onClick)
            if (key.startsWith('on') && typeof value === 'function') {
                // Hapus kata 'on', lalu kecilkan hurufnya (onClick -> click)
                const namaEvent = key.substring(2).toLowerCase();
                elemen.addEventListener(namaEvent, value);
            } 
            // B. Cek apakah ini Class? (Biar mirip React kita pakai className)
            else if (key === 'className') {
                elemen.className = value;
            } 
            // C. Handle Dataset (data-id, data-role, dll)
            else if (key === 'dataset' && typeof value === 'object') {
                Object.assign(elemen.dataset, value);
            }
            // D. Sisanya adalah atribut biasa (id, src, type, placeholder)
            else {
                elemen.setAttribute(key, value);
            }
        });
    }

    // 3. Masukkan isinya (Anak-anaknya)
    children.forEach(anak => {
        // Jika anaknya cuma teks atau angka (Basic Primitive)
        if (typeof anak === 'string' || typeof anak === 'number') {
            elemen.appendChild(document.createTextNode(anak));
        } 
        // Jika anaknya adalah Element HTML juga (Node)
        else if (anak instanceof Node) {
            elemen.appendChild(anak);
        }
        // Jika anaknya adalah Array (Nested Children)
        else if (Array.isArray(anak)) {
            anak.forEach(c => {
                if (c) elemen.appendChild(c);
            });
        }
    });

    // 4. Kembalikan elemen yang sudah jadi
    return elemen;
}