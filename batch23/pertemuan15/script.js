
function sapaNama(nama,f1){
    let a = f1("INI PARAM");
    return `Halo ${nama}, ${a}`
}

function terimakasih1(){
    console.log("Terimakasih 1 Ya..");
}

function terimakasih2(){
    console.log("Terimakasih 2 Ya..");
}
function terimakasih3(param){
    return param
}

// console.log(sapaNama("Nama",terimakasih3));
console.log(sapaNama("Nama",terimakasih3));



