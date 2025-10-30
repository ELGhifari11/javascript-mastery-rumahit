
// Metode Pertama : ......
// Metode Ke dua bagaimana .......
// Metode Ke 3 ........
// Metode Ke 4 ........
// Metode ke 5 .....
// Metode ke 6 .....
// Metode ke 7 




function salamKeBanyak(...nama){
    nama.forEach(function(a,b,c){
        console.log(`Halo Bro ${a}`);
    })
}

 function salamDenganUmur(nama,umur){
    console.log(`Assalamualaikum, ${nama} , Makin Tua ajh lo udah ${umur} ajh`);
}

//  function salamSantai(nama){
//     console.log(`Assalamualaikum, Bro ${nama} , dari mana ajh lo`);
// }

 function subject(...data){
    return [...data]
}

 let yusuf = "Halo Ini Dari File Export.js nieh";


function example1(){
    console.time("1");
    console.timeLog("1");
    setTimeout(() => {
        console.log("Ini akan ke render setelah lima detik");
        console.timeEnd("1");   
    },5000)
}





 export {yusuf as ucup,salamDenganUmur,example1};
 export default subject;



