import { Metric } from "./Metric.mjs";

export class NPS extends Metric {
  constructor() {
    super();
    this.objetivo = 60;
    this.promotores;
    this.neutros;
    this.detractores;
  }

  calcularDesempenio(promotores) {
    let qEncuestas = promotores + this.neutros + this.detractores;
    return (((promotores - this.detractores) / qEncuestas) * 100).toFixed(2);
  }

  calcularCumplimiento() {
    return ((this.desempenio / this.objetivo) * 100).toFixed(0);
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
