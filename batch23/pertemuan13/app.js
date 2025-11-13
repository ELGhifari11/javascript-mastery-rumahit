import {add as tambah,text as kata} from './modules/script1.js'
import namaBebasDariDeafult, {multiply as kali,textScript2A} from './modules/script2.js'
import {min as kurang} from './modules/script3.js'
import * as script4 from './modules/script4.js'

const tagDiv1 = document.getElementById('tagDiv1')

console.log(kata);
console.log(namaBebasDariDeafult());
console.log(textScript2A());
console.log(script4.d);

function mengisiTag(a,b) {
    let isi = ''

    let resultAdd = tambah(a,b);
    let resultmultiply = kali(a,b);
    let resultMin = kurang(a,b);

    // console.log(`hasil: ${a} + ${b} = ${resultAdd}`);
    // console.log(`hasil: ${a} x ${b} = ${resultmultiply}`);
    // console.log(`hasil: ${a} - ${b} = ${resultMin}`);
    // console.log(`===================`);

    isi += `<h3>hasil: ${a} + ${b} = ${resultAdd}</h3>`
    isi += `<h3>hasil: ${a} x ${b} = ${resultmultiply}</h3>`
    isi += `<h3>hasil: ${a} - ${b} = ${resultMin}</h3>`
    isi += `<h3>====================</h3>`

    return isi
}



tagDiv1.innerHTML +=  mengisiTag(100,900)
tagDiv1.innerHTML +=  mengisiTag(100,800)
tagDiv1.innerHTML +=  mengisiTag(100,700)
tagDiv1.innerHTML +=  mengisiTag(100,600)
tagDiv1.innerHTML +=  mengisiTag(100,500)



