import { NPS } from "../metrics/Nps.mjs";
import { Calculator } from "./Calc.mjs";

export class NpsCalc extends Calculator {
  constructor() {
    super(new NPS());
    //INPUTS

    // Input promotores
    this.containerPromotores = document.createElement('section');
    this.containerPromotores.setAttribute('id', 'containerPromotores');
    this.containerPromotores.classList.add('form-container');

    this.formTitlePromotores = document.createElement('h2');
    this.formTitlePromotores.classList.add('form-title');
    this.formTitlePromotores.classList.add('form-title-promotores');
    this.formTitlePromotores.textContent = 'PROMOTORES';

    this.inputContainerPromotores = document.createElement('div');
    this.inputContainerPromotores.classList.add('input-container');

    this.inputPromotores = document.createElement('input');
    this.inputPromotores.setAttribute('id', 'inputPromotores');
    this.inputPromotores.setAttribute('type', 'number');
    this.inputPromotores.setAttribute('inputmode', 'numeric');
    this.inputPromotores.setAttribute('placeholder', 'Cantidad de promotores');

    this.inputPromotores.addEventListener('input', () => {
      this.metric.promotores = parseInt(this.inputPromotores.value);
      super.validateRequiredVariables(this.metric.promotores, this.metric.neutros, this.metric.detractores);
    });

    this.inputContainerPromotores.appendChild(this.inputPromotores);

    this.containerPromotores.append(this.formTitlePromotores, this.inputContainerPromotores);

    // Input neutros
    this.containerNeutros = document.createElement('section');
    this.containerNeutros.setAttribute('id', 'containerNeutros');
    this.containerNeutros.classList.add('form-container');

    this.formTitleNeutros= document.createElement('h2');
    this.formTitleNeutros.classList.add('form-title');
    this.formTitleNeutros.classList.add('form-title-neutros');
    this.formTitleNeutros.textContent = 'NEUTROS';

    this.inputContainerNeutros = document.createElement('div');
    this.inputContainerNeutros.classList.add('input-container');

    this.inputNeutros = document.createElement('input');
    this.inputNeutros.setAttribute('id', 'inputNeutros');
    this.inputNeutros.setAttribute('type', 'number');
    this.inputNeutros.setAttribute('inputmode', 'numeric');
    this.inputNeutros.setAttribute('placeholder', 'Cantidad de neutros');

    this.inputNeutros.addEventListener('input', () => {
      this.metric.neutros = parseInt(this.inputNeutros.value);
      super.validateRequiredVariables(this.metric.promotores, this.metric.neutros, this.metric.detractores);
    });

    this.inputContainerNeutros.appendChild(this.inputNeutros);

    this.containerNeutros.append(this.formTitleNeutros, this.inputContainerNeutros);

    // Input detractores
    this.containerDetractores = document.createElement('section');
    this.containerDetractores.setAttribute('id', 'containerDetractores');
    this.containerDetractores.classList.add('form-container');

    this.formTitleDetractores = document.createElement('h2');
    this.formTitleDetractores.classList.add('form-title');
    this.formTitleDetractores.classList.add('form-title-detractores');
    this.formTitleDetractores.textContent = 'DETRACTORES';

    this.inputContainerDetractores = document.createElement('div');
    this.inputContainerDetractores.classList.add('input-container');

    this.inputDetractores = document.createElement('input');
    this.inputDetractores.setAttribute('id', 'inputDetractores');
    this.inputDetractores.setAttribute('type', 'number');
    this.inputDetractores.setAttribute('inputmode', 'numeric');
    this.inputDetractores.setAttribute('placeholder', 'Cantidad de detractores');

    this.inputDetractores.addEventListener('input', () => {
      this.metric.detractores = parseInt(this.inputDetractores.value);
      super.validateRequiredVariables(this.metric.promotores, this.metric.neutros, this.metric.detractores);
    });

    this.inputContainerDetractores.appendChild(this.inputDetractores);

    this.containerDetractores.append(this.formTitleDetractores, this.inputContainerDetractores);

    this.inputsContainer.append(this.containerPromotores, this.containerNeutros, this.containerDetractores);
  }

  
}