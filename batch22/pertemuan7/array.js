const messageManager = (function () {
    const messages = [];
    const API_URL = 'https://api.fonnte.com/send';
    const API_TOKEN = 'DrYMr6sBfgLLmFGU2RHE';

    const updateDisplay = () => {
        // const display = document.getElementById('tag1');
        // display.innerHTML = messages.length > 0  messages.join('<br>'):'Belom ada list pesan yang dikirim';
    };


    const createFormData = (message) => {
        const formData = new FormData();
        // formData.append('target', phone.replace(/\D/g, ''));
        formData.append('target', "120363404881661878@g.us");
        formData.append('message', message);
        formData.append('countryCode', '62');
        console.log(`Ini Form Data ${formData}`);
        return formData;
    };

    return {
        async sendMessage(message) {
            if (!message) {
                alert('Nomor telepon dan pesan harus diisi!');
                return;
            }
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Authorization': API_TOKEN },
                    body: createFormData(message)
                });

                const responseData = JSON.parse(
                    await response.text()
                )
                const status = responseData.status ? "Succes" : "Failed";
                messages.push(`Pesan ${status} untuk : ${message}`);
                updateDisplay();

            } catch (error) {
                messages.push(`Error -> No: , Message: ${message}`);
                updateDisplay();
            }
        }
    }

})();

let data = "Ini Data";
let data2 = ["Simple Array1", "Simple Array2", "Simple Array3"];

// console.log(typeof data2); 

// for (let start = 0; start < data2.length; start++) {
//     console.log(data2[start]);
// }

let data3 = ["Simple Array1", "Simple Array2", ["Simple Array3", "Simple Array4"]];
// console.log(data3[2][1]); // Simple Array4

let data4 = ["Simple Array1", "Simple Array2", ["Simple Array3", ["Simple Array4", "Simple Array5"]]];
// console.log(data4[2][1][0]); // Simple Array4

// let mobil = ['Avanza', 'Merah', 150000000, ['nos', 'sayap', "center", ['Avanza b1', "avanza  b2", "Avanza b3"]]];
// console.log(mobil[3][3][1]);

// console.table(mobil);

// console.log(Array.isArray(mobil));

function renderArray3(arr) {
    let hasil2 = [];
    if (Array.isArray(arr)) {
        // for (start = 0; start < arr.length; start++) {
        //     if (Array.isArray(arr[start])) {
        //         for (start2 = 0; start2 < arr[start].length; start2++) {
        //             if (Array.isArray(arr[start][start2])) {
        //                 for (start3 = 0; start3 < arr[start][start2].length; start3++) {
        //                     hasil2.push(arr[start][start2][start3]);
        //                 }
        //             } else {
        //                 hasil2.push(arr[start][start2]);
        //             }
        //         }
        //     } else {
        //         hasil2.push(arr[start]);
        //     }
        // }
    } else {
        return "Ini Bukan Array";
    }
    return hasil2;
}

// renderArray3(mobil);
// console.table(renderArray3(mobil));



// console.log(mobil[4][2][0]);

// for (let start = 0; start < mobil.length ; start++) {
//     if (mobil[start] == "xenia") {
//         console.log('xenia ada di index ke ' + start);
//         break;
//         // start += mobil.length;
//         // messageManager.sendMessage("Bos Xenia ada di gerbong " + start + " Coba lo cek");
//     } else {
//         console.log("Bukan Xenia Itumah Mobil "+ mobil[start]);
//     }
// }

// console.log(mobil.indexOf('brio')); // returnnya adalah no index di dalam aray dari value "xenia" 
// console.log(mobil.includes('brio')); 
// // Returnya boolean hanya ngecek ada atau tidaknya kalau nggk ada maka false


// EXAMPLE CASE 1

const products = ["Laptop", "Mouse", "Keyboard","Laptop", "Mouse", "Keyboard","Laptop", "Mouse", "Keyboard","Laptop", "Mouse", "Keyboard",];
// console.table(products); 
// console.log(`1. ${products[0]}`); 
// console.log(`Panjang data dalam array adalah : ${products.length}`);
// for(i=0;i<products.length;i++){
//     console.log(`${i+1}. ${products[i]}`);
// }


// EXAMPLE CASE 2 

let laci = [0,1];
const fruits = ["apel", "jeruk"];
fruits.push("mangga1");
// console.log(fruits.length);

// let fib = [];
for(i=0;i<30;i++){
    laci.push(laci[i] + laci[i+1]);
}
console.table(laci);

// EXAMPLE CASE 3

const colors = ["merah", "hijau", "biru"];
const removedColor = colors.pop();
// console.table(colors);
// console.table(removedColor);



// EXAMPLE CASE 4 

const numbers = [1,2, 3, 4, 5];
// console.log(numbers[3]);

// numbers.forEach(
//     function(item,index,arr) {
//     console.log(`Index ke ${index} pada data Array : ${item}`);
// }
// );

// numbers.forEach(printArray);

// function printArray(item,index,arry) {
//     console.log(arry[index]);
//     console.log(`Index ke ${index} pada data Array : ${item}`);
// }


// Example 5

const cities = ["Jakarta", "Surabaya ", "Bandung"];
// console.log(cities.includes("Surabaya"));
// console.log(cities.includes("Surabaya ")); 


