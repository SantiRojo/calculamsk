import { Metric } from "./Metric.mjs";

export class TPA extends Metric {
  constructor() {
    super();
  }

  calcularNecesario() {
    this.necesario = Math.round((this.atendidas * this.cumplimientoDeseado) / this.cumplimiento) - this.atendidas;
  }
}

