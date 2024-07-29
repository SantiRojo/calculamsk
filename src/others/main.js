import { tpaInputElements, TpaCalculator } from "./TpaCalculator.js";
import { tpaCalcItem } from "./nodes.js";

let objetivo;
let desempenio;
let cumplimiento;
let cumplimientoDeseado;

let promotores;
let neutros;
let detractores;

let atendidas;

let derivadas;
let reingresadas;

let resultadoMetrica;




const tpaCalculator = new TpaCalculator(tpaInputElements);

tpaCalcItem.addEventListener('click', () => {
  tpaCalculator.showCalc();
  tpaCalculator.createInputElements()
});




/* const filtrarResultadoMetrica = () => {
  return resultados.filter(result => result.compararCumplimiento());
}

const ejecutarTPA = () => {

  validarVariables(objetivo, cumplimiento, atendidas);

  btnAdecuado.addEventListener('click', (e) => {
    e.preventDefault();
    btnAdecuado.classList.add('selected');
    btnSobresaliente.classList.remove('selected');
    objetivo = 100;
    cumplimientoDeseado = 'adecuado';
    validarVariables(objetivo, cumplimiento, atendidas);
  });

  btnSobresaliente.addEventListener('click', (e) => {
    e.preventDefault();
    btnSobresaliente.classList.add('selected');
    btnAdecuado.classList.remove('selected');
    objetivo = 115;
    cumplimientoDeseado = 'sobresaliente';
    validarVariables(objetivo, cumplimiento, atendidas);
  });

  inputCumplimientoTPA.addEventListener('input', () => {
    cumplimiento = parseInt(inputCumplimientoTPA.value)
    validarVariables(objetivo, cumplimiento, atendidas);
  });

  inputAtendidasTPA.addEventListener('input', () => {
    atendidas = parseInt(inputAtendidasTPA.value);
    validarVariables(objetivo, cumplimiento, atendidas);
  });

  calcButton.addEventListener('click', calcularTpa);
} */