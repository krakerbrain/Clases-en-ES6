// Se exporta el módulo

export default class Impuesto {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  // se aplica el getter
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  get deducciones() {
    return this._deducciones;
  }
  // se aplica el setter
  set monto_bruto_anual(nuevo_monto) {
    this._monto_bruto_anual = nuevo_monto;
  }
  set deducciones(nuevo_deducciones) {
    this._deducciones = nuevo_deducciones;
  }
}
