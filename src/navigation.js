window.addEventListener('load', () => {
  location.hash = '#home';
})
window.addEventListener('DOMContentLoaded', navigator);
window.addEventListener('hashchange', navigator);

function navigator() {
  console.log({ location });

  if (location.hash.startsWith('#calculadora-de-tpa')) {
    calcTPA();
  } else if (location.hash.startsWith('#calculadora-de-derivaciones')) {
    calcDerivaciones();
  } else if (location.hash.startsWith('#calculadora-de-nps')) {
    calcNPS();
  } else if (location.hash.startsWith('#calculadora-de-reingreso')) {
    calcReingreso();
  } else {
    home();
  }
};

function home() {
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
};

function calcTPA() {
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

};

function calcDerivaciones() {
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
};

function calcNPS() {
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

function calcReingreso() {
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