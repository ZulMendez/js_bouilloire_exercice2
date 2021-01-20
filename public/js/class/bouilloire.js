let bouilloire = {
    eau: "vide",
    temperature: 0,
}

import {remplir} from '../function/remplir.js'
import {chauffer} from '../function/chauffer.js'

remplir(bouilloire);
chauffer(bouilloire);
console.log(bouilloire);