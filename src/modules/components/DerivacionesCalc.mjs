import { Derivaciones } from "../metrics/Derivaciones.mjs";
import { Calculator } from "./Calc.mjs";

export class DerivacionesCalc extends Calculator {
  constructor() {
    super(new Derivaciones());

    //INPUTS

    // Input objetivo
    this.containerObjetivoDerivaciones = document.createElement('section');
    this.containerObjetivoDerivaciones.setAttribute('id', 'containerObjetivoDerivaciones');
    this.containerObjetivoDerivaciones.classList.add('form-container');

    this.formTitleObjetivoDerivaciones= document.createElement('h2');
    this.formTitleObjetivoDerivaciones.classList.add('form-title');
    this.formTitleObjetivoDerivaciones.classList.add('form-title-objetivo-derivaciones');
    this.formTitleObjetivoDerivaciones.textContent = 'OBJETIVO';

    this.inputContainerObjetivoDerivaciones = document.createElement('div');
    this.inputContainerObjetivoDerivaciones.classList.add('input-container');

    this.inputObjetivoDerivaciones = document.createElement('input');
    this.inputObjetivoDerivaciones.setAttribute('id', 'inputObjetivoDerivaciones');
    this.inputObjetivoDerivaciones.setAttribute('type', 'number');
    this.inputObjetivoDerivaciones.setAttribute('inputmode', 'numeric');
    this.inputObjetivoDerivaciones.setAttribute('placeholder', 'Porcentaje de objetivo');

    this.inputObjetivoDerivaciones.addEventListener('input',() => {
        this.metric.objetivo = parseFloat(this.inputObjetivoDerivaciones.value);
        super.validateRequiredVariables(this.metric.inputObjetivoDerivaciones,this.metric.inputAtendidasDerivaciones,this.metric.derivadas);
        console.log(this.metric.objetivo, this.metric.atendidas, this.metric.derivadas)
    })

    this.inputContainerObjetivoDerivaciones.appendChild(this.inputObjetivoDerivaciones);

    this.containerObjetivoDerivaciones.append(this.formTitleObjetivoDerivaciones, this.inputContainerObjetivoDerivaciones);

    // Input atendidas
    this.containerAtendidasDerivaciones = document.createElement('section');
    this.containerAtendidasDerivaciones.setAttribute('id', 'containerAtendidasDerivaciones');
    this.containerAtendidasDerivaciones.classList.add('form-container');

    this.formTitleAtendidasDerivaciones= document.createElement('h2');
    this.formTitleAtendidasDerivaciones.classList.add('form-title');
    this.formTitleAtendidasDerivaciones.classList.add('form-title-atendidas-derivaciones');
    this.formTitleAtendidasDerivaciones.textContent = 'ATENDIDAS';

    this.inputContainerAtendidasDerivaciones = document.createElement('div');
    this.inputContainerAtendidasDerivaciones.classList.add('input-container');

    this.inputAtendidasDerivaciones = document.createElement('input');
    this.inputAtendidasDerivaciones.setAttribute('id', 'inputAtendidasDerivaciones');
    this.inputAtendidasDerivaciones.setAttribute('type', 'number');
    this.inputAtendidasDerivaciones.setAttribute('inputmode', 'numeric');
    this.inputAtendidasDerivaciones.setAttribute('placeholder', 'Cantidad de llamadas atendidas');

    this.inputAtendidasDerivaciones.addEventListener('input', () => {
      this.metric.atendidas = parseInt(this.inputAtendidasDerivaciones.value);
      super.validateRequiredVariables(this.metric.inputObjetivoDerivaciones,this.metric.inputAtendidasDerivaciones,this.metric.derivadas);
      console.log(this.metric.objetivo, this.metric.atendidas, this.metric.derivadas)
    })

    this.inputContainerAtendidasDerivaciones.appendChild(this.inputAtendidasDerivaciones);

    this.containerAtendidasDerivaciones.append(this.formTitleAtendidasDerivaciones, this.inputContainerAtendidasDerivaciones);

    // Input derivadas
    this.containerDerivadas = document.createElement('section');
    this.containerDerivadas.setAttribute('id', 'containerDerivadas');
    this.containerDerivadas.classList.add('form-container');

    this.formTitleDerivadas= document.createElement('h2');
    this.formTitleDerivadas.classList.add('form-title');
    this.formTitleDerivadas.classList.add('form-title-derivadas');
    this.formTitleDerivadas.textContent = 'DERIVADAS';

    this.inputContainerDerivadas = document.createElement('div');
    this.inputContainerDerivadas.classList.add('input-container');

    this.inputDerivadas = document.createElement('input');
    this.inputDerivadas.setAttribute('id', 'inputDerivadas');
    this.inputDerivadas.setAttribute('type', 'number');
    this.inputDerivadas.setAttribute('inputmode', 'numeric');
    this.inputDerivadas.setAttribute('placeholder', 'Cantidad de derivaciones');

    this.inputDerivadas.addEventListener('input', () => {
      this.metric.derivadas = parseInt(this.inputDerivadas.value);
      super.validateRequiredVariables(this.metric.objetivo,this.metric.atendidas,this.metric.derivadas);
      console.log(this.metric.objetivo, this.metric.atendidas, this.metric.derivadas)
    })

    this.inputContainerDerivadas.appendChild(this.inputDerivadas);

    this.containerDerivadas.append(this.formTitleDerivadas, this.inputContainerDerivadas);

    this.inputsContainer.append(this.containerObjetivoDerivaciones, this.containerAtendidasDerivaciones, this.containerDerivadas);
  }

}