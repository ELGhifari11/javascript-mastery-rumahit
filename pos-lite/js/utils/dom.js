/**
 * ==================================================================================
 * UTILS: DOM
 * ==================================================================================
 * Alat bantu manipulasi DOM (Document Object Model).
 */

/**
 * Fungsi ini meniru cara kerja React.createElement
 * 
 * @param {String} tag - Nama tag HTML (div, span, button, dll)
 * @param {Object} props - Atribut (class, id, event listener)
 * @param  {...any} children - Isi elemen (text atau elemen lain)
 */
export function buatElemen(tag, props = {}, ...children) {
    const element = document.createElement(tag);

    // 1. Pasang Atribut & Event Listener
    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            if (key.startsWith('on') && typeof value === 'function') {
                // Contoh: onClick -> click
                const eventName = key.substring(2).toLowerCase();
                element.addEventListener(eventName, value);
            } else if (key === 'className') {
                // Biar mirip React, pakai className untuk class
                element.className = value;
            } else if (key === 'dataset') {
                // Handle data-* attributes
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                // Atribut biasa (id, src, type, dll)
                element.setAttribute(key, value);
            }
        });
    }

    // 2. Masukkan Anak (Children)
    children.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            // Kalau string/number, jadikan Text Node
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            // Kalau elemen HTML valid, langsung masukkan
            element.appendChild(child);
        } else if (Array.isArray(child)) {
            // Handle jika child adalah array of elements
            child.forEach(nestedChild => {
                if (nestedChild) element.appendChild(nestedChild);
            });
        }
    });

    return element;
}
