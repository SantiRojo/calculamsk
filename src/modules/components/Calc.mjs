import { headerSection, appTitle, main, calcsGridContainer, directAccesses } from "../../others/nodes.mjs";

export class Calculator {

  constructor(metric){

    this.metric = metric;
    this.resultData;

    // BACK BUTTON
    this.backBtn = document.createElement('div');
    this.backBtn.setAttribute('id', 'backBtn');
    this.backBtn.classList.add('back-btn');
    this.backBtn.classList.add('fade-in')


    this.backBtnArrow = document.createElement('img');
    this.backBtnArrow.setAttribute('src', './media/icons/arrow-back.png');
    this.backBtnArrow.setAttribute('alt', 'Atrás');
    
    this.backBtn.appendChild(this.backBtnArrow);

    this.backBtn.addEventListener('click', () => {
      appTitle.classList.remove(this.metric.titleStyle)
      appTitle.classList.add('home-title');
      appTitle.innerText = 'CalculaMSK';
      headerSection.removeChild(this.backBtn);
      main.removeChild(this.appContainer);
      main.removeChild(this.calcBtnContainer);
      calcsGridContainer.classList.remove('inactive');
      directAccesses.classList.remove('inactive');

    });

    // APP UI

    // App Container
    this.appContainer = document.createElement('section');
    this.appContainer.classList.add('app-container');
    this.appContainer.classList.add('fade-in');

    // Frontcard
    this.frontCard = document.createElement('form');
    this.frontCard.classList.add('front-card');

    this.appContainer.appendChild(this.frontCard);

    this.inputsContainer = document.createElement('section');
    this.frontCard.appendChild(this.inputsContainer)

    // Backcard
    this.backCard = document.createElement('section');
    this.backCard.classList.add('back-card');

    this.appContainer.appendChild(this.backCard);

    // Result container
    this.resultContainer = document.createElement('section');
    this.resultContainer.classList.add('result-container');

    this.backCard.appendChild(this.resultContainer);

    // Result title container
    this.resultTitleContainer = document.createElement('section');
    this.resultTitleContainer.classList.add('result-title-container');

    this.resultContainer.appendChild(this.resultTitleContainer);

    // Result title
    this.resultTitle = document.createElement('h3');
    this.resultTitle.classList.add('result-title');

    this.resultTitleContainer.appendChild(this.resultTitle);

    // Performancecontainer

    this.performanceContainer = document.createElement('section');
    this.performanceContainer.classList.add('performance-container');

    this.resultContainer.appendChild(this.performanceContainer);

    // Performance
    this.performance = document.createElement('p');
    this.performance.classList.add('performance');
    this.performance.textContent = 'Tu cumplimiento es del:';

    this.performanceContainer.appendChild(this.performance);

    // Percentage container
    this.percentageContainer = document.createElement('div');
    this.percentageContainer.classList.add('percentage-container');

    this.performanceContainer.appendChild(this.percentageContainer);

    // Percentaje
    this.percentage = document.createElement('p');
    this.percentage.classList.add('percentage');

    this.percentageContainer.appendChild(this.percentage);


    // Message container
    this.messageContainer = document.createElement('section');
    this.messageContainer.classList.add('message-container');

    this.resultContainer.appendChild(this.messageContainer);

    // Message
    this.message = document.createElement('p');
    this.message.setAttribute('id', 'message');

    this.messageContainer.appendChild(this.message);

    // Goal message
    this.goalMessage = document.createElement('p');
    this.goalMessage.setAttribute('id', 'goalMessage');

    this.messageContainer.appendChild(this.goalMessage);

    // Calc button container
    this.calcBtnContainer = document.createElement('section');
    this.calcBtnContainer.setAttribute('id', 'calcBtnContainer');
    this.calcBtnContainer.classList.add('inactive');
    this.calcBtnContainer.classList.add('fade-in');

    // Calc button
    this.calcBtn = document.createElement('button');
    this.calcBtn.setAttribute('id', 'calcBtn');
    this.calcBtn.setAttribute('disabled', '');
    this.calcBtn.classList.add('calc-button');
    this.calcBtn.classList.add('button-off');

    this.calcBtnContainer.appendChild(this.calcBtn);

    // Calculate Span
    this.calculateSpan = document.createElement('span');
    this.calculateSpan.setAttribute('id', 'calculateSpan');
    this.calculateSpan.textContent = 'Calcular';

    // Close Span
    this.closeSpan = document.createElement('span');
    this.closeSpan.setAttribute('id', 'closeSpan');
    this.closeSpan.classList.add('inactive')
    this.closeSpan.textContent = 'X';

    this.calcBtn.append(this.calculateSpan, this.closeSpan);

    this.calcBtn.addEventListener('click', () => {
      this.calculate();
      this.metricResultFilter();
      this.animateCard();
      this.animateButton();
      this.applyStyles();
    })

  }

  validateRequiredVariables(var1, var2, var3) {
    if ((var1 || (var1 == 0)) && (var2 || (var2 == 0)) && (var3 || (var3 == 0)) ) {

      this.calcBtn.removeAttribute('disabled');
      this.calcBtn.classList.add('button-on');
      this.calcBtn.classList.remove('button-off');
      
  } else {

      console.log('else')
      this.calcBtn.setAttribute('disabled', true);
      this.calcBtn.classList.add('button-off')
      this.calcBtn.classList.remove('button-on');
  }
  }

  showCalc() {

    appTitle.classList.remove('home-title')
    appTitle.classList.add('fade-in')
    appTitle.classList.add(this.metric.titleStyle)
    appTitle.textContent = `Calculadora de ${this.metric.title}`;

    calcsGridContainer.classList.add('fade-in');
    calcsGridContainer.classList.add('inactive');
    directAccesses.classList.add('fade-in');
    directAccesses.classList.add('inactive');


    headerSection.insertBefore(this.backBtn, headerSection.firstChild);

    main.append(this.appContainer, this.calcBtnContainer);

  }

  metricResultFilter() {
    this.resultData = this.metric.datosCumplimientos.filter(result => result.compare());
  }

  applyStyles() {
    setTimeout(() => {
      this.resultTitleContainer.classList.toggle(this.resultData[0].styles);
      this.resultTitle.textContent = this.resultData[0].result;
      this.percentageContainer.classList.toggle(this.resultData[0].styles);
      this.percentage.textContent = `${this.metric.cumplimiento}%`;
      this.message.textContent = this.resultData[0].message;
    },300)
  }

  animateCard() {
    this.frontCard.classList.toggle('front-card-rotate');
    this.backCard.classList.toggle('back-card-rotate');
  }

  animateButton() {
    this.calculateSpan.classList.toggle('inactive');
    this.closeSpan.classList.toggle('inactive');
    this.calcBtn.classList.toggle('close');
  };

  calculate() {

    switch (this.metric.title) {

      case 'TPA':

        if (this.metric.cumplimiento < this.metric.cumplimientoDeseado) {

          this.metric.calcularNecesario();
          this.goalMessage.textContent = `Sumá ${this.metric.necesario} llamadas para estar en ${this.metric.meta}`;

        } else {

          this.goalMessage.textContent = 'Estás en objetivo';

        }
        break;

      case 'Derivaciones':

        this.metric.desempenio = this.metric.calcularDesempenio(this.metric.derivadas, this.metric.atendidas);
        this.metric.calcularCumplimiento(this.metric.derivadas, this.metric.atendidas);

        if (this.metric.cumplimiento < this.metric.cumplimientoDeseado) {
          this.metric.calcularNecesario(this.metric.derivadas, this.metric.atendidas);
          this.goalMessage.textContent = `Sumá ${this.metric.necesario} llamadas para estar en objetivo`;
        } else {
          this.goalMessage.textContent = 'Estás en objetivo';
        }
        break;
      
      case 'NPS':

        this.metric.desempenio = this.metric.calcularDesempenio(this.metric.promotores)

        console.log(this.metric.desempenio)

        this.metric.cumplimiento = Math.floor(this.metric.calcularCumplimiento());

        console.log(this.metric.cumplimiento)

        if (this.metric.desempenio < this.metric.objetivo) {
          this.metric.calcularNecesario()

          this.goalMessage.textContent = `Sumá ${this.metric.necesario} promotores para estar en objetivo`;
        } else {
          this.goalMessage.textContent = 'Estás en objetivo';
        }
        break; 

      case 'Reingreso':

        this.metric.desempenio = this.metric.calcularDesempenio(this.metric.reingresadas, this.metric.atendidas);
        this.metric.calcularCumplimiento(this.metric.reingresadas, this.metric.atendidas);

        if (this.metric.cumplimiento < this.metric.cumplimientoDeseado) {
          this.metric.calcularNecesario(this.metric.reingresadas, this.metric.atendidas);
          this.goalMessage.textContent = `Sumá ${this.metric.necesario} llamadas para estar en objetivo`;
        } else {
          this.goalMessage.textContent = 'Estás en objetivo';
        }
        break;
        
    } 
    
  }

}