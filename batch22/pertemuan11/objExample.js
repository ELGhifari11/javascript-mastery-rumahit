
function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return `${day}${month}${year}`
}

// function restF(...params) {
//     console.log(`Kamu memasukan Params sebanyak: ${params.length}`);
    
//     return `Ini Params: ${params}`
// }

// console.log(restF('Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1','Isi 1'));


const todoApp = {

    data: [],

    nextId: 1,

    defaultId: `RIT${getDate()}`,

    tambahBanyak:function(...tugas) {
        console.time("F(Tambah Banyak)");
        console.timeLog("F(Tambah Banyak)");
        console.log(`Akan menambah ${tugas.length} \n`);
        tugas.forEach((item) => {         
            if (item) {
                // console.log("Jalan Di If f(Tambah Banyak)");
                const todo = {
                    id: `${this.defaultId}${this.nextId++}`,
                    tugas: item,
                    selesai: false
                };
                this.data.push(todo);
                console.log(`✅ "${item}" ditambahkan! \n`);
            } else {
                console.log("Jalan Di Else f(Tambah Banyak) \n");
            }
        });
        console.timeEnd("F(Tambah Banyak)");
        return "Tambah Banyak Done";
    },

    lihat: function () {
        console.log("\n📋 === TO-DO LIST ===");

        if (this.data.length === 0) {
            console.log("Tidak ada tugas.");
            return;
        }

        this.data.forEach((item, index) => {
            const { id, tugas, selesai } = item;
            const status = selesai ? "✅" : "⭕";
            console.log(`${index + 1}. [${id}] ${tugas} ${status}`);
        });
    },

    edit: function (id, tugasBaru) {
        const index = this.data.findIndex(item => item.id === id);

        if (index === -1) {
            console.log(`❌ Tugas ID ${id} tidak ada!`);
            return;
        }

        this.data[index] = {
            ...this.data[index],
            tugas: tugasBaru
        };
        console.log(`✅ Tugas ID ${id} diupdate!`);
    },

    hapusBanyak: function (...ids) {
        console.log("Anda Akan Menghapus ID >>>");
        console.log(ids);
        const dihapus = [];

        ids.forEach((value,idx, array,) => {
            const index = this.data.findIndex(item => item.id === value);
            console.log("Ketemu data Di hapus index => " + index);
            if (index !== -1) {
                const { tugas } = this.data[idx];
                console.log("Ketemu data Di hapus Tugas => " + tugas);
                this.data.splice(index, 1);
                dihapus.push(tugas);
            }
        });

        console.log(`✅ Berhasil hapus: ${dihapus.join(', ')}`);
        return [...dihapus];

        return "Done Hapus"
    },

    salin: function (...pilihId) {        
        if (pilihId.length === -1 ) {
           console.log("ID yang anda cari tidak ada");  
        }
        const dipilih = this.data.filter(item => pilihId.includes(item.id));
        return [...dipilih];
    }
};

let salinData = [];

todoApp.tambahBanyak(`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,`Tugas ke-${todoApp.nextId++}`,);
console.table(todoApp.data);
let hasilSalin = todoApp.salin('RIT1309202520','RIT1309202518','RIT1309202516','RIT1309202514','RIT1309202512');
console.table(salinData);
// salinData.push(...hasilSalin)
// console.table(salinData);






// console.table(todoApp.data);
// todoApp.hapusBanyak('RIT1309202512','RIT1309202514','RIT1309202516','RIT1309202518','RIT1309202520',);
// console.table(todoApp.data);


// console.log(todoApp.tambahBanyak(`Tugas ${todoApp.nextId++}`,`Tugas ${todoApp.nextId++}`,`Tugas ${todoApp.nextId++}`,`Tugas ${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,`Tugas${todoApp.nextId++}`,));
// console.table(todoApp.data);



// console.log("🚀 TESTING TO-DO APP");

// todoApp.tambahBanyak("Belajar JavaScript", "Buat program CRUD", "Push ke GitHub");

// todoApp.lihat();

// todoApp.edit(2, "Buat program CRUD keren");

// todoApp.hapusBanyak(1, 3);

// todoApp.lihat();

// const backup = todoApp.salin();
// console.log("Backup data:", backup);

