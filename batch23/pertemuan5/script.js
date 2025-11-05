
// SCOPER AND ALL THINGS 

var a = 10 // GLOBAL SCOPE
// rewrite 
a = 67

// Default VAR (Jika tidak di sebut deklarasinya)
namavar = 90
// Bukti bahwa redeclare tidak terjadi error (ciri khas si var)
var namavar = 90

// redeclare
var a = 90

// console.log(` >>>> ${a}`);

function funvar() {
    // FUNCTION SCOPE
    var a = "100" 
    // a = "100" 
}
// console.log(` >>>>2 ${a}`);
// funvar()
// console.log(` >>>>3 ${a}`);

var x = "SAYA V"

function scopeFun() {
    var x = "SAYA Y"
    if(true){
        console.log(`IN IF 1 ${x}`);
        var x = "SAYA X";
        console.log(`IN IF 2 ${x}`);
    }
    console.log(`OUT IF ${x}`);
}

// scopeFun()
// console.log(x);


let cvb;
const fghjk = 90;

function dfg(){
    var lop = 100
    var lop = "Loop 2"
    if(true){
        var lop = true
        var lop = 'Loop 4'
    } 
    
    return
}
console.log(">>>>>> " + dfg());


