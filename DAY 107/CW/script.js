
import {a} from "./module.js"

console.log(a)

import { named as renamed } from "./module.js"

renamed()

import x from "./module.js"

console.log(x)

import * as all from "./module.js"

console.log(all)