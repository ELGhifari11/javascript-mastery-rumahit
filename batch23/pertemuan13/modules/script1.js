
export function add(a, b) {
    return a + b
}

export const text = "INI SAYA NYOBA AJH"

export function formatRupiah(angka, negara) {
    switch (negara) {
        // Asia
        case 'ID':
            return angka.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
            });
        case 'JP':
            return angka.toLocaleString("ja-JP", {
                style: "currency",
                currency: "JPY"
            });
        case 'KR':
            return angka.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW"
            });
        case 'TH':
            return angka.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB"
            });
        case 'IN':
            return angka.toLocaleString("hi-IN", {
                style: "currency",
                currency: "INR"
            });

        // Eropa
        case 'JR':
            return angka.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            });
        case 'Prancis':
            return angka.toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR"
            });
        case 'Inggris':
            return angka.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP"
            });

        // Middle East
        case 'Saudi Arabia':
            return angka.toLocaleString("ar-SA", {
                style: "currency",
                currency: "SAR"
            });
        case 'Uni Emirat Arab':
            return angka.toLocaleString("ar-AE", {
                style: "currency",
                currency: "AED"
            });

        default:
            return angka.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
            });
    }
}