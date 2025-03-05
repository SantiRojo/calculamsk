import { Metric } from "./Metric.mjs";

export class NPS extends Metric {
  constructor() {
    super('NPS', 'nps-title');
    this.objetivo = 65;
    this.promotores;
    this.neutros;
    this.detractores;
  }

  calcularDesempenio(prom) {
    let qEncuestas = prom + this.neutros + this.detractores;
    return (((prom - this.detractores) / qEncuestas) * 100).toFixed(2);
  }

  calcularCumplimiento() {
    return ((this.desempenio / this.objetivo) * 100).toFixed(2);
  }

  calcularNecesario() {
    let inicial = this.promotores;
    let desempenioAcc = this.desempenio;

    for (let i = 0; !(desempenioAcc >= this.objetivo); i++) {
      desempenioAcc = this.calcularDesempenio(inicial);

      inicial++;
      this.necesario = i;
    }
  }
}
