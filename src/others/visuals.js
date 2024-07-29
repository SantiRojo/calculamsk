const validarVariables = (input1, input2, input3) => {

  if ( !(input1)  || !(input2) || !(input3) ) {

      calcButton.setAttribute('disabled', true);
      calcButton.classList.add('button-off')
      calcButton.classList.remove('button-on');
      console.log('if');

  } else {
      calcButton.removeAttribute('disabled');
      calcButton.classList.add('button-on');
      calcButton.classList.remove('button-off');
      console.log('else')
  }

  console.log('Se ejecutó la función');
  console.log(input1, input2, input3);
}

const animar = () => {
    
  frontCard.classList.toggle('front-card-rotate');
  backCard.classList.toggle('back-card-rotate');
  calcularSpan.classList.toggle('inactive');
  cerrarSpan.classList.toggle('inactive');
  calcButton.classList.toggle('cerrar');

};

const aplicarEstilos = () => {

  resultTitleContainer.classList.toggle(resultadoMetrica[0].estilos);
  resultTitle.innerText = resultadoMetrica[0].resultado;
  percentageContainer.classList.toggle(resultadoMetrica[0].estilos);
  percentage.innerText = `${cumplimiento}%`;
  message.innerText = resultadoMetrica[0].mensaje;
};

// Renders

const renderHome = () => {
  backBtn.classList.add('inactive');
  appTitle.innerHTML = 'CalculaMSK';
  appTitle.classList.remove('tpa-title');
  appTitle.classList.remove('derivaciones-title');
  appTitle.classList.remove('nps-title');
  appTitle.classList.remove('reingreso-title');
  appTitle.classList.add('home-title');

  calcsGridContainer.classList.remove('inactive');
  directAccesses.classList.remove('inactive');

  appContainer.classList.add('inactive');
  calcButton.classList.add('inactive');
}

const renderCalcTPA = () => {
  backBtn.classList.remove('inactive');
  appTitle.innerHTML = 'Calculadora de TPA';
  appTitle.classList.remove('home-title');
  appTitle.classList.add('tpa-title');

  calcsGridContainer.classList.add('inactive');
  directAccesses.classList.add('inactive');

  appContainer.classList.remove('inactive');
  inputsTPA.classList.remove('inactive');
  calcButton.classList.remove('inactive');

  inputsDerivaciones.classList.add('inactive');
  inputsNPS.classList.add('inactive');
  inputsReingreso.classList.add('inactive');
}

const renderCalcDerivaciones = () => {
  backBtn.classList.remove('inactive');
  appTitle.innerHTML = 'Calculadora de Derivaciones';
  appTitle.classList.remove('home-title');
  appTitle.classList.add('derivaciones-title');

  calcsGridContainer.classList.add('inactive');
  directAccesses.classList.add('inactive');

  appContainer.classList.remove('inactive');
  inputsDerivaciones.classList.remove('inactive');
  calcButton.classList.remove('inactive');

  inputsTPA.classList.add('inactive');
  inputsNPS.classList.add('inactive');
  inputsReingreso.classList.add('inactive');
}

const renderCalcNPS = () => {
  backBtn.classList.remove('inactive');
  appTitle.innerHTML = 'Calculadora de NPS';
  appTitle.classList.remove('home-title');
  appTitle.classList.add('nps-title');

  calcsGridContainer.classList.add('inactive');
  directAccesses.classList.add('inactive');

  appContainer.classList.remove('inactive');
  inputsNPS.classList.remove('inactive');
  calcButton.classList.remove('inactive');

  inputsTPA.classList.add('inactive');
  inputsDerivaciones.classList.add('inactive');
  inputsReingreso.classList.add('inactive');
}

const renderCalcReingreso = () => {
  backBtn.classList.remove('inactive');
  appTitle.innerHTML = 'Calculadora de Reingreso';
  appTitle.classList.remove('home-title');
  appTitle.classList.add('reingreso-title');

  calcsGridContainer.classList.add('inactive');
  directAccesses.classList.add('inactive');

  appContainer.classList.remove('inactive');
  inputsReingreso.classList.remove('inactive');
  calcButton.classList.remove('inactive');

  inputsTPA.classList.add('inactive');
  inputsDerivaciones.classList.add('inactive');
  inputsNPS.classList.add('inactive');
}