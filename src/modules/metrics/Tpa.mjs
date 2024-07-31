import { Metric } from "./Metric.mjs";

export class TPA extends Metric {
  constructor() {
    super('TPA', 'tpa-title');
    this.meta;
  }

  calcularNecesario() {
    this.necesario = Math.round((this.atendidas * this.cumplimientoDeseado) / this.cumplimiento) - this.atendidas;
  }
}

