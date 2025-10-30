
let Welcome = "Hello World";
// document.getElementById('tag1').innerHTML = Welcome;
// console.log(Welcome);


// ======================================================================


let code1 = 100 / 0;
// console.warn("Division by zero is " + code1);


// ======================================================================


let code2 = 0 / 0;
// console.error(" Division zero by zero is " + code2);


// ======================================================================



// console.info("Info: " + Welcome);


// ======================================================================


let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" }
];
// console.table(userData);


// ======================================================================


let userAge = 24;
// console.assert(userAge >= 18, "User age validation failed because user is under 18");


// ======================================================================


let apiResponse = {
    statusCode: 200,
    responseTime: '1.2s',
    payloadSize: '52KB'
};

// console.group('API Response Debug');
// console.log('Status Code:', apiResponse.statusCode);
// console.log('Response Time:', apiResponse.responseTime);
// console.log('Payload Size:', apiResponse.payloadSize);
// console.groupEnd();


// ======================================================================


// confirm('Coba Login lagi?');
// console.count('cobalagi');

// confirm('Coba yang ke-2?');
// console.count('cobalagi');

// confirm('Coba yang ke-3?');
// console.count('cobalagi');

// confirm('Coba yang ke-4?');
// console.count('cobalagi');
// alert('Kamu Salah terus, Akun di blokir');
// console.countReset('cobalagi'); 


// ======================================================================


// console.group('Database Query Performance');
// console.log("Start Time >>");
// console.time("databaseQuery");
// console.timeLog("databaseQuery");
// setTimeout(() => {
//     console.log("End Time >>");
//     console.timeEnd("databaseQuery");
//     console.groupEnd();
// }, 2000);


// ======================================================================


// let userName = prompt("Enter Nama:");
// if(userName){
// let textElement = document.getElementById('tag1');
// confirm("Is this your name: " + userName + "?");
// console.log("User confirmed name is " + userName);
// textElement.innerHTML  = "Hello " + userName;
// } else {
//     let textElement = document.getElementById('tag1');
//     textElement.innerHTML  = "Anda gk Ngisi Nama";
// }

// document.getElementById('tag1').innerHTML = "1. Log <br> 2. Info <br> 3. Warn <br> 4. Error <br> 5. Assertion <br> 6. Table <br> 7. Time - TimeLog - TimeEnd <br> 8. Count - countReset <br> 9. Group - GroupEnd <br> 10. alert <br> 11. confirm <br> 12. prompt <br> 13. document.getElementById('id').innerHTML <br> <br> Mengirim Link Repo Hasil Catatan + Latihannya masing masing";


// Deklarasi Memulai Perhitungan Waktu
// console.time('label1'); 
// console.log('Info Time Terkini >>');
// console.timeLog('label1');
// console.log('Info Time Terkini >>');
// console.timeLog('label1');
// console.log('Info Time Terkini >>');
// console.timeLog('label1');
// console.log('Info Time Terkini >>');
// console.timeLog('label1');
// console.log('Waktu Selesai >>');
// console.timeEnd('label1');


// function coba() {
// let nama = prompt("Kau siapa?");
//     if (nama){
//         document.getElementById('tag1').innerHTML = "Hello " + nama;
//     } else{
//         document.getElementById('tag1').innerHTML = "Anda gk Ngisi Nama";
//     }
// }

