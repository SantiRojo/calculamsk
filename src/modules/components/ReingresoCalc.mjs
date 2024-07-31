import { Reingreso } from "../metrics/Reingreso.mjs";
import { Calculator } from "./Calc.mjs";

export class ReingresoCalc extends Calculator {
  constructor() {
    super(new Reingreso());

    //INPUTS

    // Input objetivo
    this.containerObjetivoReingreso = document.createElement('section');
    this.containerObjetivoReingreso.setAttribute('id', 'containerObjetivoReingreso');
    this.containerObjetivoReingreso.classList.add('form-container');

    this.formTitleObjetivoReingreso= document.createElement('h2');
    this.formTitleObjetivoReingreso.classList.add('form-title');
    this.formTitleObjetivoReingreso.classList.add('form-title-objetivo-reingreso');
    this.formTitleObjetivoReingreso.textContent = 'OBJETIVO';

    this.inputContainerObjetivoReingreso = document.createElement('div');
    this.inputContainerObjetivoReingreso.classList.add('input-container');

    this.inputObjetivoReingreso = document.createElement('input');
    this.inputObjetivoReingreso.setAttribute('id', 'inputObjetivoReingreso');
    this.inputObjetivoReingreso.setAttribute('type', 'number');
    this.inputObjetivoReingreso.setAttribute('inputmode', 'numeric');
    this.inputObjetivoReingreso.setAttribute('placeholder', 'Porcentaje de objetivo');

    this.inputObjetivoReingreso.addEventListener('input', () => {
      this.metric.objetivo = parseFloat(this.inputObjetivoReingreso.value).toFixed(2);
      super.validateRequiredVariables(this.metric.objetivo,this.metric.atendidas,this.metric.reingresadas);
    })

    this.inputContainerObjetivoReingreso.appendChild(this.inputObjetivoReingreso);

    this.containerObjetivoReingreso.append(this.formTitleObjetivoReingreso, this.inputContainerObjetivoReingreso);

    // Input atendidas
    this.containerAtendidasReingreso = document.createElement('section');
    this.containerAtendidasReingreso.setAttribute('id', 'containerAtendidasReingreso');
    this.containerAtendidasReingreso.classList.add('form-container');

    this.formTitleAtendidasReingreso = document.createElement('h2');
    this.formTitleAtendidasReingreso.classList.add('form-title');
    this.formTitleAtendidasReingreso.classList.add('form-title-atendidas-reingreso');
    this.formTitleAtendidasReingreso.textContent = 'ATENDIDAS';

    this.inputContainerAtendidasReingreso = document.createElement('div');
    this.inputContainerAtendidasReingreso.classList.add('input-container');

    this.inputAtendidasReingreso = document.createElement('input');
    this.inputAtendidasReingreso.setAttribute('id', 'inputAtendidasReingreso');
    this.inputAtendidasReingreso.setAttribute('type', 'number');
    this.inputAtendidasReingreso.setAttribute('inputmode', 'numeric');
    this.inputAtendidasReingreso.setAttribute('placeholder', 'Cantidad de llamadas atendidas');

    this.inputAtendidasReingreso.addEventListener('input', () => {
      this.metric.atendidas = parseInt(this.inputAtendidasReingreso.value);
      super.validateRequiredVariables(this.metric.objetivo,this.metric.atendidas,this.metric.reingresadas);
    })

    this.inputContainerAtendidasReingreso.appendChild(this.inputAtendidasReingreso);

    this.containerAtendidasReingreso.append(this.formTitleAtendidasReingreso, this.inputContainerAtendidasReingreso);

    // Input reingresadas
    this.containerReingresadas = document.createElement('section');
    this.containerReingresadas.setAttribute('id', 'containerReingresadas');
    this.containerReingresadas.classList.add('form-container');

    this.formTitleReingresadas= document.createElement('h2');
    this.formTitleReingresadas.classList.add('form-title');
    this.formTitleReingresadas.classList.add('form-title-reingresadas');
    this.formTitleReingresadas.textContent = 'REINGRESADAS'

    this.inputContainerReingresadas = document.createElement('div');
    this.inputContainerReingresadas.classList.add('input-container');

    this.inputReingresadas = document.createElement('input');
    this.inputReingresadas.setAttribute('id', 'inputReingresadas');
    this.inputReingresadas.setAttribute('type', 'number');
    this.inputReingresadas.setAttribute('inputmode', 'numeric');
    this.inputReingresadas.setAttribute('placeholder', 'Cantidad de reingresos');

    this.inputReingresadas.addEventListener('input', () => {
      this.metric.reingresadas = parseInt(this.inputReingresadas.value);
      super.validateRequiredVariables(this.metric.objetivo,this.metric.atendidas,this.metric.reingresadas);
    })

    this.inputContainerReingresadas.appendChild(this.inputReingresadas);

    this.containerReingresadas.append(this.formTitleReingresadas, this.inputContainerReingresadas);

    this.inputsContainer.append(this.containerObjetivoReingreso, this.containerAtendidasReingreso, this.containerReingresadas);
  }

}