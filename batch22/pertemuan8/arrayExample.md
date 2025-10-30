<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>


## **Tingkat Easy (Kasus 1-8)**

### **Kasus 1: Membuat dan Mengakses Array Dasar**

```javascript
// Membuat array produk elektronik
const products = ["Laptop", "Mouse", "Keyboard"];
console.log(products[0]); // Output: Laptop
console.log(products.length); // Output: 3
```

**Konsep**: Pemahaman dasar struktur array dan pengaksesan elemen menggunakan indeks.

### **Kasus 2: Menambah Elemen dengan push()**

```javascript
const fruits = ["apel", "jeruk"];
fruits.push("mangga");
console.log(fruits); // Output: ["apel", "jeruk", "mangga"]
```

**Konsep**: Penggunaan method `push()` untuk menambahkan elemen di akhir array.[^7]

### **Kasus 3: Menghapus Elemen dengan pop()**

```javascript
const colors = ["merah", "hijau", "biru"];
const removedColor = colors.pop();
console.log(colors); // Output: ["merah", "hijau"]
console.log(removedColor); // Output: "biru"
```

**Konsep**: Implementasi method `pop()` untuk menghapus dan mengembalikan elemen terakhir.[^7]

### **Kasus 4: Iterasi Sederhana dengan forEach()**

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2);
});
// Output: 2, 4, 6, 8, 10
```

**Konsep**: Penggunaan `forEach()` untuk melakukan iterasi pada setiap elemen array.[^7]

### **Kasus 5: Pencarian dengan includes()**

```javascript
const cities = ["Jakarta", "Surabaya", "Bandung"];
console.log(cities.includes("Surabaya")); // Output: true
console.log(cities.includes("Medan")); // Output: false
```

**Konsep**: Method `includes()` untuk memeriksa keberadaan elemen dalam array.

### **Kasus 6: Menambah di Awal dengan unshift()**

```javascript
const tasks = ["Coding", "Testing"];
tasks.unshift("Planning");
console.log(tasks); // Output: ["Planning", "Coding", "Testing"]
```

**Konsep**: Penggunaan `unshift()` untuk menambahkan elemen di awal array.[^7]

### **Kasus 7: Menghapus dari Awal dengan shift()**

```javascript
const queue = ["Pertama", "Kedua", "Ketiga"];
const firstItem = queue.shift();
console.log(firstItem); // Output: "Pertama"
console.log(queue); // Output: ["Kedua", "Ketiga"]
```

**Konsep**: Method `shift()` untuk menghapus elemen pertama array.[^7]

### **Kasus 8: Mencari Indeks dengan indexOf()**

```javascript
const animals = ["kucing", "anjing", "kelinci"];
console.log(animals.indexOf("anjing")); // Output: 1
console.log(animals.indexOf("hamster")); // Output: -1
```

**Konsep**: Penggunaan `indexOf()` untuk menemukan posisi elemen dalam array.

## **Tingkat Medium (Kasus 9-16)**

### **Kasus 9: Transformasi Data dengan map()**

```javascript
const prices = [10000, 15000, 20000];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Output: [9000, 13500, 18000]
```

**Konsep**: Method `map()` untuk membuat array baru dengan mentransformasi setiap elemen.[^6][^7]

### **Kasus 10: Filtering Data dengan filter()**

```javascript
const ages = [17, 25, 30, 16, 22];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [25, 30, 22]
```

**Konsep**: Penggunaan `filter()` untuk membuat array baru berisi elemen yang memenuhi kondisi.[^7]

### **Kasus 11: Pencarian dengan find()**

```javascript
const students = [
    {name: "Ali", grade: 85},
    {name: "Budi", grade: 92},
    {name: "Citra", grade: 78}
];
const topStudent = students.find(student => student.grade > 90);
console.log(topStudent); // Output: {name: "Budi", grade: 92}
```

**Konsep**: Method `find()` untuk menemukan elemen pertama yang memenuhi kondisi.

### **Kasus 12: Penggabungan Array dengan concat()**

```javascript
const vegetables = ["wortel", "brokoli"];
const fruits = ["apel", "pisang"];
const groceries = vegetables.concat(fruits);
console.log(groceries); // Output: ["wortel", "brokoli", "apel", "pisang"]
```

**Konsep**: Penggunaan `concat()` untuk menggabungkan beberapa array.[^9]

### **Kasus 13: Slice untuk Mengambil Bagian Array**

```javascript
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const firstQuarter = months.slice(0, 3);
console.log(firstQuarter); // Output: ["Jan", "Feb", "Mar"]
console.log(months); // Array asli tidak berubah
```

**Konsep**: Method `slice()` untuk mengambil sebagian array tanpa mengubah array asli.[^9]

### **Kasus 14: Splice untuk Modifikasi Array**

```javascript
const hobbies = ["membaca", "menulis", "berlari"];
hobbies.splice(1, 1, "berenang", "bersepeda");
console.log(hobbies); // Output: ["membaca", "berenang", "bersepeda", "berlari"]
```

**Konsep**: Penggunaan `splice()` untuk menambah, menghapus, atau mengganti elemen.

### **Kasus 15: Pengurutan dengan sort()**

```javascript
const scores = [85, 92, 78, 96, 88];
scores.sort((a, b) => b - a); // Descending
console.log(scores); // Output: [96, 92, 88, 85, 78]
```

**Konsep**: Method `sort()` dengan custom comparison function.[^7]

### **Kasus 16: Validasi dengan every() dan some()**

```javascript
const scores = [85, 92, 78, 96, 88];
const allPassed = scores.every(score => score >= 75);
const someExcellent = scores.some(score => score >= 95);
console.log(allPassed); // Output: true
console.log(someExcellent); // Output: true
```

**Konsep**: Penggunaan `every()` dan `some()` untuk validasi kondisi pada array.

## **Tingkat Hard (Kasus 17-21)**

### **Kasus 17: Reduce untuk Akumulasi Data**

```javascript
const transactions = [
    {type: "income", amount: 5000000},
    {type: "expense", amount: 2000000},
    {type: "income", amount: 3000000},
    {type: "expense", amount: 1500000}
];

const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income" 
        ? acc + transaction.amount 
        : acc - transaction.amount;
}, 0);
console.log(balance); // Output: 4500000
```

**Konsep**: Penggunaan `reduce()` untuk akumulasi dan perhitungan kompleks.[^9]

### **Kasus 18: Flattening Array Nested**

```javascript
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.reduce((acc, current) => acc.concat(current), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Atau menggunakan flat() (ES2019)
const flattenedModern = nestedArrays.flat();
console.log(flattenedModern); // Output: [1, 2, 3, 4, 5, 6]
```

**Konsep**: Teknik flattening array menggunakan `reduce()` dan `flat()`.

### **Kasus 19: Grouping Data Kompleks**

```javascript
const employees = [
    {name: "Ali", department: "IT", salary: 8000000},
    {name: "Budi", department: "HR", salary: 6000000},
    {name: "Citra", department: "IT", salary: 9000000},
    {name: "Dinda", department: "Finance", salary: 7000000}
];

const groupedByDept = employees.reduce((acc, employee) => {
    const dept = employee.department;
    if (!acc[dept]) {
        acc[dept] = [];
    }
    acc[dept].push(employee);
    return acc;
}, {});
console.log(groupedByDept);
```

**Konsep**: Pengelompokan data menggunakan `reduce()` untuk struktur data kompleks.

### **Kasus 20: Chain Methods untuk Data Processing**

```javascript
const salesData = [
    {product: "Laptop", price: 15000000, quantity: 2},
    {product: "Mouse", price: 250000, quantity: 5},
    {product: "Keyboard", price: 750000, quantity: 3},
    {product: "Monitor", price: 3000000, quantity: 1}
];

const totalHighValueSales = salesData
    .map(item => ({...item, total: item.price * item.quantity}))
    .filter(item => item.total > 1000000)
    .reduce((sum, item) => sum + item.total, 0);

console.log(totalHighValueSales); // Output: 32250000
```

**Konsep**: Method chaining untuk pemrosesan data yang kompleks dan efisien.

### **Kasus 21: Custom Sorting dengan Multiple Criteria**

```javascript
const students = [
    {name: "Ali", grade: 85, attendance: 95},
    {name: "Budi", grade: 85, attendance: 90},
    {name: "Citra", grade: 92, attendance: 88},
    {name: "Dinda", grade: 78, attendance: 98}
];

students.sort((a, b) => {
    if (a.grade !== b.grade) {
        return b.grade - a.grade; // Sort by grade descending
    }
    return b.attendance - a.attendance; // Then by attendance descending
});
console.log(students);
```

**Konsept**: Pengurutan multi-kriteria menggunakan custom comparison function.

## **Tingkat Very Hard (Kasus 22-25)**

### **Kasus 22: Implementasi Cache dengan Array Methods**

```javascript
class DataCache {
    constructor(maxSize = 5) {
        this.cache = [];
        this.maxSize = maxSize;
    }
    
    add(key, value) {
        const existingIndex = this.cache.findIndex(item => item.key === key);
        
        if (existingIndex !== -1) {
            // Update existing item
            this.cache[existingIndex] = {key, value, timestamp: Date.now()};
        } else {
            // Add new item
            this.cache.unshift({key, value, timestamp: Date.now()});
            
            // Remove oldest if cache is full
            if (this.cache.length > this.maxSize) {
                this.cache.pop();
            }
        }
    }
    
    get(key) {
        const item = this.cache.find(item => item.key === key);
        return item ? item.value : null;
    }
    
    getStats() {
        return {
            size: this.cache.length,
            oldestTimestamp: Math.min(...this.cache.map(item => item.timestamp)),
            newestTimestamp: Math.max(...this.cache.map(item => item.timestamp))
        };
    }
}
```

**Konsep**: Implementasi struktur data cache menggunakan kombinasi multiple array methods.

### **Kasus 23: Advanced Data Analytics**

```javascript
const salesData = [
    {date: "2024-01-15", region: "Jakarta", product: "Laptop", sales: 15, revenue: 225000000},
    {date: "2024-01-15", region: "Surabaya", product: "Laptop", sales: 8, revenue: 120000000},
    {date: "2024-01-16", region: "Jakarta", product: "Mouse", sales: 25, revenue: 6250000},
    // ... more data
];

function analyzePerformance(data) {
    const analysis = data.reduce((acc, record) => {
        const region = record.region;
        const product = record.product;
        
        // Initialize region if not exists
        if (!acc.byRegion[region]) {
            acc.byRegion[region] = {totalSales: 0, totalRevenue: 0, products: {}};
        }
        
        // Initialize product if not exists
        if (!acc.byProduct[product]) {
            acc.byProduct[product] = {totalSales: 0, totalRevenue: 0, regions: {}};
        }
        
        // Aggregate data
        acc.byRegion[region].totalSales += record.sales;
        acc.byRegion[region].totalRevenue += record.revenue;
        acc.byProduct[product].totalSales += record.sales;
        acc.byProduct[product].totalRevenue += record.revenue;
        
        acc.grandTotal.sales += record.sales;
        acc.grandTotal.revenue += record.revenue;
        
        return acc;
    }, {
        byRegion: {},
        byProduct: {},
        grandTotal: {sales: 0, revenue: 0}
    });
    
    // Find top performers
    const topRegion = Object.entries(analysis.byRegion)
        .sort(([,a], [,b]) => b.totalRevenue - a.totalRevenue);
    
    const topProduct = Object.entries(analysis.byProduct)
        .sort(([,a], [,b]) => b.totalRevenue - a.totalRevenue);
    
    return {
        ...analysis,
        insights: {
            topRegion: topRegion,
            topProduct: topProduct,
            avgRevenuePerSale: analysis.grandTotal.revenue / analysis.grandTotal.sales
        }
    };
}
```

**Konsep**: Analisis data kompleks menggunakan kombinasi `reduce()`, sorting, dan manipulasi objek.

### **Kasus 24: Array-based State Management**

```javascript
class StateManager {
    constructor() {
        this.states = [];
        this.currentIndex = -1;
        this.maxHistory = 10;
    }
    
    setState(newState) {
        // Remove future states if we're not at the latest state
        if (this.currentIndex < this.states.length - 1) {
            this.states = this.states.slice(0, this.currentIndex + 1);
        }
        
        // Add new state
        this.states.push({...newState, timestamp: Date.now()});
        this.currentIndex++;
        
        // Maintain max history
        if (this.states.length > this.maxHistory) {
            this.states.shift();
            this.currentIndex--;
        }
    }
    
    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.getCurrentState();
        }
        return null;
    }
    
    redo() {
        if (this.currentIndex < this.states.length - 1) {
            this.currentIndex++;
            return this.getCurrentState();
        }
        return null;
    }
    
    getCurrentState() {
        return this.currentIndex >= 0 ? {...this.states[this.currentIndex]} : null;
    }
    
    getHistory() {
        return this.states
            .slice(0, this.currentIndex + 1)
            .map((state, index) => ({
                ...state,
                isCurrent: index === this.currentIndex
            }));
    }
    
    canUndo() {
        return this.currentIndex > 0;
    }
    
    canRedo() {
        return this.currentIndex < this.states.length - 1;
    }
}
```

**Konsep**: Implementasi state management dengan undo/redo functionality menggunakan array operations.

### **Kasus 25: Performance Monitoring dan Optimization**

```javascript
class ArrayPerformanceMonitor {
    constructor() {
        this.operations = [];
    }
    
    benchmark(arraySize, operation) {
        const testArray = Array.from({length: arraySize}, (_, i) => i);
        const iterations = Math.max(1, Math.floor(10000 / arraySize));
        
        const results = [];
        
        for (let i = 0; i < iterations; i++) {
            const start = performance.now();
            operation(testArray);
            const end = performance.now();
            results.push(end - start);
        }
        
        const analysis = {
            arraySize,
            iterations,
            avgTime: results.reduce((sum, time) => sum + time, 0) / results.length,
            minTime: Math.min(...results),
            maxTime: Math.max(...results),
            medianTime: results.sort((a, b) => a - b)[Math.floor(results.length / 2)]
        };
        
        this.operations.push({
            timestamp: Date.now(),
            operationName: operation.name || 'anonymous',
            ...analysis
        });
        
        return analysis;
    }
    
    compareOperations(arraySize) {
        const operations = {
            forEach: (arr) => arr.forEach(x => x * 2),
            map: (arr) => arr.map(x => x * 2),
            forLoop: (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] * 2;
                }
            },
            filter: (arr) => arr.filter(x => x % 2 === 0),
            find: (arr) => arr.find(x => x === arraySize / 2)
        };
        
        const results = Object.entries(operations).map(([name, op]) => {
            Object.defineProperty(op, 'name', {value: name});
            return this.benchmark(arraySize, op);
        });
        
        return results.sort((a, b) => a.avgTime - b.avgTime);
    }
    
    getOptimizationRecommendations() {
        return this.operations
            .filter(op => op.avgTime > 1) // Focus on operations > 1ms
            .sort((a, b) => b.avgTime - a.avgTime)
            .slice(0, 5)
            .map(op => ({
                operation: op.operationName,
                issue: `Average execution time: ${op.avgTime.toFixed(3)}ms`,
                recommendation: this.getRecommendation(op)
            }));
    }
    
    getRecommendation(operation) {
        if (operation.operationName.includes('find') && operation.arraySize > 1000) {
            return "Consider using binary search for sorted arrays or indexing for frequent lookups";
        }
        if (operation.operationName.includes('filter') && operation.arraySize > 5000) {
            return "Consider pre-filtering data or using more specific conditions";
        }
        if (operation.operationName.includes('map') && operation.avgTime > 5) {
            return "Consider chunking large arrays or using web workers for heavy computations";
        }
        return "Monitor performance and consider algorithmic improvements";
    }
}
```

<div style="text-align: center">⁂</div>