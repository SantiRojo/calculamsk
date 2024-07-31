export class Metric {
  constructor(title, titleStyle) {
    this.title = title;
    this.titleStyle = titleStyle;
    this.objetivo;
    this.atendidas;
    this.desempenio;
    this.cumplimiento;
    this.cumplimientoDeseado = 100;
    this.necesario;
    this.datosCumplimientos = [
      {
          result: 'SOBRESALIENTE', 
          styles: 'sobresaliente',
          message: '¡Excelente! 👏🏼',
          compare: () => {
              return this.cumplimiento > 115;
          }
      },
      {
          result: 'ADECUADO',
          styles: 'adecuado',
          message: '¡A seguir así! 🙌🏼',
          compare: () => {
              return this.cumplimiento >= 100 && this.cumplimiento <= 115;
          }
      },
      {
          result: 'A MEJORAR',
          styles: 'a-mejorar',
          message: 'Podés lograrlo 💪🏼',
          compare: () => {
              return this.cumplimiento >= 70 && this.cumplimiento < 100;
          }
      },
      {
          result: 'INADECUADO',
          styles: 'inadecuado',
          message: '¡Manos a la obra!',
          compare: () => {
              return this.cumplimiento < 70;
          }
      },
    ];
  }

  calcularDesempenio(met, ate) {
    return ((met * 100) / ate).toFixed(2)
  }

  calcularCumplimiento() {
    this.cumplimiento = Math.floor((((this.objetivo - this.desempenio) / this.objetivo) + 1) * 100);
  }

  calcularNecesario(met,ate) {

    let inicial = ate;
    let desempenioAcc = this.desempenio;

    for (let i = 0; desempenioAcc > this.objetivo; i++) {
      desempenioAcc = this.calcularDesempenio(met,inicial);

      inicial++;

      this.necesario = i;
    }

  }
}