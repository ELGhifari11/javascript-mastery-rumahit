
function f1(...datas){
    let object = {}
    if(!datas) {
        for (let i = 0; i < datas.length; i++) {
           object[`data ${i+1}`] = datas[i]
        }
    }
    return object
}

function f2(...datas){
    let object = {}
    datas.forEach((v,i,a)=>{
           object[`${v}`] = v
    })
    return object
}

console.log(f2("Bambang",'Ujang',"asep","Udin"));


let obj1 = {key1:"1"}

obj1['key1'] = "VALUE"

console.log(obj1);
