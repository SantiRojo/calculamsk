import { TPA } from "./modules/metrics/Tpa.mjs";
import { Derivaciones } from "./modules/metrics/Derivaciones.mjs";
import { NPS } from "./modules/metrics/Nps.mjs";
import { Reingreso } from "./modules/metrics/Reingreso.mjs";

const tpa = new TPA();
tpa.cumplimiento = 98;
tpa.cumplimientoDeseado = 100;
tpa.atendidas = 83;
console.log(tpa.cumplimiento);
console.log(tpa.cumplimientoDeseado);
console.log(tpa.atendidas);
tpa.calcularNecesario();
console.log(tpa.necesario);

const derivaciones = new Derivaciones();
derivaciones.objetivo = 21;
derivaciones.atendidas = 86;
derivaciones.derivadas = 30;
/* derivaciones.calcular();
console.log(
  derivaciones.objetivo,
  derivaciones.desempenio,
  derivaciones.cumplimiento,
  derivaciones.necesario
) */

const nps = new NPS();
nps.promotores = 9;
nps.neutros = 0;
nps.detractores = 3;
nps.desempenio = nps.calcularDesempenio(nps.promotores);
console.log(nps.desempenio);
nps.cumplimiento = nps.calcularCumplimiento();
console.log(nps.cumplimiento)
nps.calcularNecesario();
console.log(nps.necesario);


const reingreso = new Reingreso();
reingreso.objetivo = 13;
reingreso.atendidas = 50;
reingreso.reingresadas = 10;
reingreso.desempenio = reingreso.calcularDesempenio(reingreso.reingresadas,reingreso.atendidas);
console.log(reingreso.desempenio);
reingreso.cumplimiento = reingreso.calcularCumplimiento();
console.log(reingreso.cumplimiento)
reingreso.calcularNecesario(reingreso.reingresadas,reingreso.atendidas);
console.log(reingreso.necesario);
