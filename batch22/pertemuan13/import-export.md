

```js
// math.js
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

// app.js
import { tambah, kurang } from './math.js';
console.log(tambah(5, 3)); // 8
console.log(kurang(5, 3)); // 2
```


***

### 2. Export Default

```js
// greet.js
export default function greet(nama) {
  console.log(`Halo, ${nama}!`);
}

// app.js
import greet from './greet.js';
greet('Budi'); // Halo, Budi!
```


***

### 3. Import Semua sebagai Object

```js
// utils.js
export function hello() { console.log("Hello!"); }
export function bye() { console.log("Bye!"); }

// app.js
import * as utils from './utils.js';
utils.hello(); // Hello!
utils.bye();   // Bye!
```


***

### 4. Export Sebelum Deklarasi

```js
// config.js
export let months = ['Jan', 'Feb', 'Mar'];
export const VERSION = '1.0.0';
export class App {}
```


***

### 5. Export Mandiri

```js
// say.js
function hi(user) { console.log(`Hello, ${user}`); }
function bye(user) { console.log(`Bye, ${user}`); }
export { hi, bye };

// main.js
import { hi, bye } from './say.js';
hi('Dika');   // Hello, Dika
bye('Dika');  // Bye, Dika
```


***

### 6. Import dengan Alias

```js
// say.js
export function hi(user) { console.log(`Hello, ${user}`); }
export function bye(user) { console.log(`Bye, ${user}`); }

// main.js
import { hi as salam, bye as pamit } from './say.js';
salam('Rina');
pamit('Rina');
```


***

### 7. Export dengan Alias

```js
// say.js
function hi(user) { console.log(`Hello, ${user}`); }
function bye(user) { console.log(`Bye, ${user}`); }
export { hi as salam, bye as pamit };

// main.js
import * as say from './say.js';
say.salam('Dani');
say.pamit('Dani');
```


***

### 8. Export Default Class

```js
// user.js
export default class User {
  constructor(name) { this.name = name; }
}

// main.js
import User from './user.js';
const u = new User('Indra');
console.log(u.name); // Indra
```


***

### 9. Re-Export dari Modul Lain

```js
// helpers.js
export function login() { /* kode login */ }
export function logout() { /* kode logout */ }

// index.js
export { login, logout } from './helpers.js';

// app.js
import { login, logout } from './index.js';
```


***

### 10. Dynamic Import (import())

```js
// heavy.js
export function bigFeature() { console.log("Big Feature!"); }

// app.js
button.onclick = async () => {
  let { bigFeature } = await import('./heavy.js');
  bigFeature();
};
```


***