import { Calculator } from "./Calculator.js";

export const tpaInputElements = [
  { 
    tag: 'section',
    attributes: {id: 'inputsTPA',},
    childElements: [
      { 
        tag: 'section',
        attributes: {id: 'containerObjetivoTPA',},
        classes: ["form-container"],
        childElements: [
          {
            tag: 'h2',
            classes: ['form-title', 'form-title-objetivo-tpa'],
            text: 'OBJETIVO',
          },
          {
            tag: 'div',
            classes: ['btns-container'],
            childElements: [
              {
                tag: 'button',
                attributes: {
                  id: 'btnAdecuado',
                },
                classes: ['obj-btn'],
                text: 'Adecuado',
              },
              {
                tag: 'button',
                attributes: {
                  id: 'btnSobresaliente',
                },
                classes: ['obj-btn'],
                text: 'Sobresaliente',
              },
            ],
          }    
        ],
      },
      { 
        tag: 'section',
        attributes: {id: 'containerCumplimientoTPA',},
        classes: ["form-container"],
        childElements: [
          {
            tag: 'h2',
            classes: ['form-title', 'form-title-cumplimiento-tpa'],
            text: 'CUMPLIMIENTO',
          },
          {
            tag: 'div',
            classes: ['input-container'],
            childElements: [
              {
                tag: 'input',
                attributes: {
                  id: 'inputCumplimientoTPA',
                  type: 'number',
                  inputmode: 'numeric',
                  placeholder: 'Ingresa tu % de cumplimiento',
                },
              }
            ]
          }
        ]
      },
      {
        tag: 'section',
        attributes: {id: 'containerAtendidasTPA',},
        classes: ["form-container"],
        childElements: [
          {
            tag: 'h2',
            classes: ['form-title', 'form-title-atendidas-tpa'],
            text: 'ATENDIDAS',
          },
          {
            tag: 'div',
            classes: ['input-container'],
            childElements: [
              {
                tag: 'input',
                attributes: {
                  id: 'inputAtendidasTPA',
                  type: 'number',
                  inputmode: 'numeric',
                  placeholder: 'Cantidad de llamadas atendidas',
                },
              }
            ]
          }
        ]
      }
    ],
  },
];

export class TpaCalculator extends Calculator {
  constructor(tpaInputElements){
    super('Calculadora de TPA', tpaInputElements);
  };
};