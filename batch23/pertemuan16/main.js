
// console.log('Proses Start');

// setTimeout(() => {
//   console.log("Wah Proses Anda Selesai 111");
// },1000)

// function test(){
//   console.log("test Log");
// }

// setTimeout(()=> {},900)

// setTimeout(() => {
//   console.log("Wah Proses Anda Selesai 333");
// },3000)

// console.log('Proses sedang berjalan');

// console.log("Apa lgh yang bisa di bantu");
// 


// const janji = new Promise(function (resolve, reject) {
//   let jika = false
//   setTimeout(() => {
//     if (jika) {
//       resolve('(RESOLVE: BERHASIL)')
//     } else {
//       reject('(REJECT : GAGAL)')
//     }
//   }, 2000)
// })

// janji
// .then((hasilJanji)=>{
//    console.log(`INI DI THEN ${hasilJanji}`);
// })
// .then(()=>{
//    console.log(`INI DI THEN 2`);
// })
// .then(()=>{
//    console.log(`INI DI THEN 3`);
// })
// .catch((alasanDitolak)=>{
//   console.log(`INI DI CATCH ${alasanDitolak}`);
// })  


function eksekusi1(){
  return new Promise(function(resolve,reject){
    setTimeout(()=> resolve(' Ini Eksekusi 1') ,1000)
  })
  
}
function eksekusi2(data){
  return new Promise(function(resolve,reject){
    setTimeout(()=> resolve(data + " Ini Eksekusi 2"),1000)
  })
}

eksekusi1()
.then(eksekusi2)
.then(function name(params) {
  
})
.catch((e)=>{
  console.log("Ini Catch" + e);
  
})