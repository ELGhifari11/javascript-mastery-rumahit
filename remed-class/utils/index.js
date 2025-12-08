import * as dom from "./dom.js"
import * as format from "./format.js"

const f1 = () => `
DOM: ${dom.f1()}
FORMAT: ${format.f1()}
`
const f2 = (menuUtama,...pelengkap) => format.masak(menuUtama,pelengkap)

export {f1,f2}
