const animar = () => {
    
  frontCard.classList.toggle('front-card-rotate');
  backCard.classList.toggle('back-card-rotate');
  calcularSpan.classList.toggle('inactive');
  cerrarSpan.classList.toggle('inactive');
  calcButton.classList.toggle('cerrar');

}

const aplicarEstilos = () => {

  containerTituloCard.classList.toggle(resultadoMetrica[0].estilos);
  tituloCard.innerText = resultadoMetrica[0].resultado;
  containerPorcentajeCard.classList.toggle(resultadoMetrica[0].estilos);
  porcentajeCard.innerText = `${cumplimiento}%`;
  mensajeObjetivo.innerText = resultadoMetrica[0].mensaje;

}