import { TpaCalc } from "./modules/components/TpaCalc.mjs"
import { DerivacionesCalc } from "./modules/components/DerivacionesCalc.mjs"
import { NpsCalc } from "./modules/components/NpsCalc.mjs";

import { derivacionesCalcItem, npsCalcItem, reingresoCalcItem, tpaCalcItem } from "./others/nodes.mjs";
import { ReingresoCalc } from "./modules/components/ReingresoCalc.mjs";



tpaCalcItem.addEventListener('click', () => {
  const tpaCalc = new TpaCalc();
  tpaCalc.showCalc();
})

derivacionesCalcItem.addEventListener('click', () => {
  const derivacionesCalc = new DerivacionesCalc();
  derivacionesCalc.showCalc();
})

npsCalcItem.addEventListener('click', () => {
  const npsCalc = new NpsCalc();
  npsCalc.showCalc();
})

reingresoCalcItem.addEventListener('click', () => {
  const reingresoCalc = new ReingresoCalc();
  reingresoCalc.showCalc();
})