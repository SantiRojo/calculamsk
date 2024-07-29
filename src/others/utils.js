// Cálculo de desempeño
// En el caso de NPS: val1 = promotores, val2 = neutros y val3 = detractores
// En el caso de derivaciones y reingreso: val1 = llamadas atendidas y val2 = llamadas derivadas o reingresadas
const calcularDesempenio = (val1, val2, val3) => {
  
  if ( val3 ) {
    // Cálculo desempeño NPS
    let qEncuestas = val1 + val2 + val3;
    return (((val1 - val3) / qEncuestas) * 100).toFixed(2);
    
  } else {
    // Cálculo desempeño derivaciones y reingreso
    return ((val2 * 100) / val1).toFixed(2);
  }
  
};

// Cálculos de cumplimiento

const calcularCumplimiento = (desempenio, objetivo, metrica) => {
  
  if (metrica === "nps") {

    return ((desempenio / objetivo) * 100).toFixed(0);

  } else {

    return ((((objetivo - desempenio) / objetivo) + 1) * 100).toFixed(0);

  }

};


// Cálculo de necesarios
const calcularNecesarioNps = (promotores, neutros,detractores, desempenio) => {

  let inicial = promotores;
  let desempenioAcc = desempenio;
  let necesario;

  for (let i = 0; !(desempenioAcc >= objetivo); i++) {
  
      desempenioAcc = calcularDesempenio(inicial, neutros, detractores);
      
      inicial++;
      
      necesario = i;
      
    }
    
    return necesario; 

};

const calcularNecesarioReingreso = (atendidas, reingresadas, objetivo, desempenio) => {
let inicial = atendidas;
let desempenioAcc = desempenio;
let necesario;

for (let i = 0; desempenioAcc > objetivo; i++) {
  
  desempenioAcc = calcularDesempenio(inicial, reingresadas);
  
  inicial++;
  
  necesario = i;
  
}

return necesario;

}


const calcularNecesarioDerivaciones = (atendidas, derivadas, objetivo, desempenio) => {
let inicial = atendidas;
let desempenioAcc = desempenio;
let necesario;

for (let i = 0; desempenioAcc > objetivo; i++) {
  
  desempenioAcc = calcularDesempenio(inicial, derivadas);
  
  inicial++;
  
  necesario = i;
  
}

return necesario;

};


const calcularNecesarioTpa = (atendidas, cumplimiento, objetivo) => {

return Math.round((atendidas*objetivo) / cumplimiento) - atendidas;

}

// Calcular 

const calcularTpa = () => {

  if (cumplimiento < objetivo) {
    llamadasASumar = calcularNecesarioTpa(atendidas, cumplimiento, objetivo);

    mensajeObjetivo.innerText = `Sumá ${llamadasASumar} llamadas para estar en ${cumplimientoDeseado}`;
  } else {
      mensajeObjetivo.innerText = 'Estás en objetivo';
  }

  resultadoMetrica = filtrarResultadoMetrica();

  animar();

  setTimeout(aplicarEstilos,300);
}

