


function createCounter(start) {
  let count = start;
  return function(end = 0,s1) {
    for (let i = 0; i < end; i++) {
        count++;
    }
    return count;
}
}

let start10 = createCounter(10);
console.log(start10(5));
// console.log(createCounter(23)(10,90)); 




const gudang = (function() {
  let barang = [];
  return {
    tambah: function(item) { barang.push(item); },
    tampil: function() { return barang.join(', '); },
    kurang: function(item) {
      let index = barang.indexOf(item);
      if (index !== -1) {
        barang.splice(index, );
      }
    }
  }
})();

gudang.tambah("Buku1");
gudang.tambah("Pensil1");
gudang.tambah("Penghapus1");
gudang.tambah("Pensil2");

console.log(gudang.tampil()); 
gudang.kurang('Pensil1'); 
console.log(gudang.tampil()); 


let dataDataArray = [
    'Budi',
     20,
    'Jakarta'
];

let dataDataObject = {
    nama: 'Budi',
    umur: 20,
    alamat: 'Jakarta'
};

// console.log(dataDataArray[2]);
// console.log(dataDataObject.alamat);

