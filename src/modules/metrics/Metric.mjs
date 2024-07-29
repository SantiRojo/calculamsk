export class Metric {
  constructor() {
    this.objetivo;
    this.atendidas;
    this.desempenio;
    this.cumplimiento;
    this.cumplimientoDeseado = 100;
    this.necesario = 0;
  }

  calcularDesempenio(met, ate) {
    return Number(((met * 100) / ate).toFixed(2))
  }

  calcularCumplimiento() {
    return Number(((((this.objetivo - this.desempenio) / this.objetivo) + 1) * 100).toFixed(0));
  }

  calcularNecesario(met,ate) {
    let inicial = ate;
    let desempenioAcc = this.desempenio;

    for (let i = 0; desempenioAcc >= this.objetivo; i++) {
      desempenioAcc = this.calcularDesempenio(met,inicial);

      inicial++;

      this.necesario = i;
    }

  }

  saludar(){
    console.log('Hola!')
  }
}