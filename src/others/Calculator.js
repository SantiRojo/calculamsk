import { headerSection, appTitle, main, calcsGridContainer, directAccesses } from "./nodes.js";

export class Calculator {

  constructor(title,inputsArray) {
    this.title = title;
    this.var1;
    this.var2;
    this.var3;
    this.fulfillment;
    this.inputsArray = inputsArray;
    this._results = [
      {
          result: 'SOBRESALIENTE', 
          styles: 'sobresaliente',
          message: '¡Excelente! 👏🏼',
          compare: () => {
              return this.fulfillment > 115;
          }
      },
      {
          result: 'ADECUADO',
          styles: 'adecuado',
          message: '¡A seguir así! 🙌🏼',
          compare: () => {
              return this.fulfillment >= 100 && this.fulfillment <= 115;
          }
      },
      {
          result: 'A MEJORAR',
          styles: 'a-mejorar',
          message: 'Podés lograrlo 💪🏼',
          compare: () => {
              return this.fulfillment >= 70 && this.fulfillment < 100;
          }
      },
      {
          result: 'INADECUADO',
          styles: 'inadecuado',
          message: '¡Manos a la obra!',
          compare: () => {
              return this.fulfillment < 70;
          }
      },
    ];
  };

  filterMetricResult() {
    return this._results.filter(result => result.compare());
  }

  
  showCalc() {
    appTitle.innerText = this.title;

    calcsGridContainer.classList.add('inactive');
    directAccesses.classList.add('inactive');

    // BACK BUTTON
    const backBtn = document.createElement('div');
    backBtn.setAttribute('id', 'backBtn');
    backBtn.classList.add('back-btn');

    const backBtnArrow = document.createElement('img');
    backBtnArrow.setAttribute('src', './media/icons/arrow-back.png');
    backBtnArrow.setAttribute('alt', 'Atrás');
    
    backBtn.appendChild(backBtnArrow);
    headerSection.insertBefore(backBtn, headerSection.firstChild);

    backBtn.addEventListener('click', () => {
      appTitle.innerText = 'CalculaMSK';
      headerSection.removeChild(backBtn);
      main.removeChild(calcBtnContainer);
      main.removeChild(appContainer);
      calcsGridContainer.classList.remove('inactive');
      directAccesses.classList.remove('inactive');
    });

    // APP CONTAINER
    const appContainer = document.createElement('section');
    appContainer.classList.add('app-container');

    // FRONT CARD
    const frontCard = document.createElement('form');
    frontCard.classList.add('front-card');

    // BACK CARD
    const backCard = document.createElement('section');
    backCard.classList.add('back-card');

    //Result
    const resultContainer = document.createElement('section');
    resultContainer.classList.add('result-container');

    const resultTitleContainer = document.createElement('section');
    resultTitleContainer.classList.add('result-title-container');

    const resultTitle = document.createElement('h3');
    resultTitle.classList.add('result-title');
    resultTitleContainer.appendChild(resultTitle);

    // Performance
    const performanceContainer = document.createElement('section');
    performanceContainer.classList.add('performance-container');

    const performance = document.createElement('p');
    performance.innerText = 'Tu desempeño es del:';
    performance.classList.add('performance');
    const percentageContainer = document.createElement('div');
    percentageContainer.classList.add('percentage-container');

    const percentage = document.createElement('p');
    percentage.classList.add('perfentage');
    percentageContainer.appendChild(percentage);

    performanceContainer.append(performance,percentageContainer);

    // Message
    const messageContainer = document.createElement('section');
    messageContainer.classList.add('message-container');

    const message = document.createElement('p');
    message.setAttribute('id', 'message');
    const goalMessage = document.createElement('p');
    goalMessage.setAttribute('id', 'goalMessage');

    messageContainer.append(message,goalMessage);


    resultContainer.append(resultTitleContainer, performanceContainer, messageContainer);


    backCard.appendChild(resultContainer);

    appContainer.append(frontCard, backCard);


    // CALC BUTTON

    const calcBtnContainer = document.createElement('section');
    calcBtnContainer.setAttribute('id', 'calcBtnContainer');

    const calcButton = document.createElement('button');
    calcButton.setAttribute('id', 'calcButton');
    calcButton.setAttribute('disabled', '');
    calcButton.classList.add('calc-button', 'button-off');

    const calculateSpan = document.createElement('span');
    calculateSpan.setAttribute('id', 'calculateSpan');
    calculateSpan.innerText = 'Calcular';

    const closeSpan = document.createElement('span');
    closeSpan.setAttribute('id', 'closedSpan');
    closeSpan.innerText = 'X';
    closeSpan.classList.add('inactive');

    calcButton.append(calculateSpan, closeSpan);

    calcBtnContainer.appendChild(calcButton);

    main.append(appContainer,calcBtnContainer);

  };

  aplyStyles() {
    resultTitleContainer.classList.toggle(resultadoMetrica[0].styles);
    resultTitle.innerText = resultadoMetrica[0].result;
    percentageContainer.classList.toggle(resultadoMetrica[0].styles);
    percentage.innerText = `${cumplimiento}%`;
    message.innerText = resultadoMetrica[0].message;
  }

  animateCard() {
    frontCard.classList.toggle('front-card-rotate');
    backCard.classList.toggle('back-card-rotate');
    calculateSpan.classList.toggle('inactive');
    closeSpan.classList.toggle('inactive');
    calcButton.classList.toggle('close');
  }
  
  animateButton() {
    frontCard.classList.toggle('front-card-rotate');
    backCard.classList.toggle('back-card-rotate');
    calculateSpan.classList.toggle('inactive');
    closeSpan.classList.toggle('inactive');
    calcButton.classList.toggle('close');
  };

  createInputElements(inputsArray, parentNode = document.querySelector('.front-card')) {
      constinputsArray = inputsArray;
      
      inputsArray.forEach(el => {
      const newNode = document.createElement(el.tag);
  
      // Attributes
      if (el.attributes) {
        for (const [attribute, value] of Object.entries(el.attributes)) {
          newNode.setAttribute(attribute, value);
        };
      };
  
      // Classes
      if (el.classes) {
        el.classes.forEach(cl => {
          newNode.classList.add(cl);
        })
      }
  
      // Inner text
      if (el.text) {
        newNode.innerText = el.text;
      }
  
      // Childs
      if (el.childElements) {
        createInputElements(el.childElements, newNode);
      }
  
      parentNode.appendChild(newNode);
    });
  };

}



 



