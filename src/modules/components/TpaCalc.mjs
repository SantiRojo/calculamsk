import { TPA } from "../metrics/Tpa.mjs";
import { Calculator } from "./Calc.mjs";

export class TpaCalc extends Calculator {
  constructor() {
    super(new TPA());

    //INPUTS

    // Input objetivo
    this.containerObjetivoTpa = document.createElement('section');
    this.containerObjetivoTpa.setAttribute('id', 'containerObjetivoTPA');
    this.containerObjetivoTpa.classList.add('form-container');

    this.formTitleObjetivoTpa= document.createElement('h2');
    this.formTitleObjetivoTpa.classList.add('form-title');
    this.formTitleObjetivoTpa.classList.add('form-title-objetivo-tpa');
    this.formTitleObjetivoTpa.textContent = 'OBJETIVO';

    this.btnsContainer = document.createElement('div');
    this.btnsContainer.classList.add('btns-container');

    this.btnAdencuado = document.createElement('button');
    this.btnAdencuado.classList.add('obj-btn');
    this.btnAdencuado.textContent = 'Adecuado';

    this.btnAdencuado.addEventListener('click', (event) => {
      event.preventDefault();
      this.btnAdencuado.classList.add('selected');
      this.btnSobresaliente.classList.remove('selected');
      this.metric.cumplimientoDeseado = 100;
      this.metric.meta = 'adecuado';
      super.validateRequiredVariables(this.metric.cumplimiento,this.metric.cumplimientoDeseado,this.metric.atendidas);
    })

    this.btnSobresaliente = document.createElement('button');
    this.btnSobresaliente.classList.add('obj-btn')
    this.btnSobresaliente.textContent = 'Sobresaliente';

    this.btnSobresaliente.addEventListener('click', (event) => {
      event.preventDefault();
      this.btnSobresaliente.classList.add('selected');
      this.btnAdencuado.classList.remove('selected');
      this.metric.cumplimientoDeseado = 115;
      this.metric.meta = 'sobresaliente';
      super.validateRequiredVariables(this.metric.cumplimiento,this.metric.cumplimientoDeseado,this.metric.atendidas);
    })

    this.btnsContainer.append(this.btnAdencuado, this.btnSobresaliente);

    this.containerObjetivoTpa.append(this.formTitleObjetivoTpa, this.btnsContainer);

    // Input cumplimiento
    this.containerCumplimientoTpa = document.createElement('section');
    this.containerCumplimientoTpa.setAttribute('id', 'containerCumplimientoTPA');
    this.containerCumplimientoTpa.classList.add('form-container');

    this.formTitleCumplimientoTpa= document.createElement('h2');
    this.formTitleCumplimientoTpa.classList.add('form-title');
    this.formTitleCumplimientoTpa.classList.add('form-title-cumplimiento-tpa');
    this.formTitleCumplimientoTpa.textContent = 'CUMPLIMIENTO';

    this.inputContainerCumplimientoTpa = document.createElement('div');
    this.inputContainerCumplimientoTpa.classList.add('input-container');

    this.inputCumplimientoTpa = document.createElement('input');
    this.inputCumplimientoTpa.setAttribute('id', 'inputCumplimientoTPA');
    this.inputCumplimientoTpa.setAttribute('type', 'number');
    this.inputCumplimientoTpa.setAttribute('inputmode', 'numeric');
    this.inputCumplimientoTpa.setAttribute('placeholder', 'Porcentaje de cumplimiento');

    this.inputCumplimientoTpa.addEventListener('input', () => {
      this.metric.cumplimiento = Math.floor(this.inputCumplimientoTpa.value);
      super.validateRequiredVariables(this.metric.cumplimiento,this.metric.cumplimientoDeseado,this.metric.atendidas);
    })

    this.inputContainerCumplimientoTpa.appendChild(this.inputCumplimientoTpa);

    this.containerCumplimientoTpa.append(this.formTitleCumplimientoTpa, this.inputContainerCumplimientoTpa);

    // Input atendidas
    this.containerAtendidasTpa = document.createElement('section');
    this.containerAtendidasTpa.setAttribute('id', 'containerAtendidasTPA');
    this.containerAtendidasTpa.classList.add('form-container');

    this.formTitleAtendidasTpa= document.createElement('h2');
    this.formTitleAtendidasTpa.classList.add('form-title');
    this.formTitleAtendidasTpa.classList.add('form-title-atendidas-tpa');
    this.formTitleAtendidasTpa.textContent = 'ATENDIDAS';

    this.inputContainerAtendidasTpa = document.createElement('div');
    this.inputContainerAtendidasTpa.classList.add('input-container');

    this.inputAtendidasTpa = document.createElement('input');
    this.inputAtendidasTpa.setAttribute('id', 'inputAtendidasTPA');
    this.inputAtendidasTpa.setAttribute('type', 'number');
    this.inputAtendidasTpa.setAttribute('inputmode', 'numeric');
    this.inputAtendidasTpa.setAttribute('placeholder', 'Cantidad de llamadas atendidas');

    this.inputAtendidasTpa.addEventListener('input', () => {
      this.metric.atendidas = parseInt(this.inputAtendidasTpa.value);
      super.validateRequiredVariables(this.metric.cumplimiento,this.metric.cumplimientoDeseado,this.metric.atendidas);
    })

    this.inputContainerAtendidasTpa.appendChild(this.inputAtendidasTpa);

    this.containerAtendidasTpa.append(this.formTitleAtendidasTpa, this.inputContainerAtendidasTpa);

    this.inputsContainer.append(this.containerObjetivoTpa, this.containerCumplimientoTpa, this.containerAtendidasTpa);
  }
}