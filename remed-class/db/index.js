import * as core from "./core.js"
import * as products from "./products.js"

const f1 = () => `
CORE: ${core.f1()}
PRODUCTS: ${products.f1()}
`
export {f1}