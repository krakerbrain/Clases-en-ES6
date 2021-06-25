// se exporta el modulo

export default class Cliente {
  constructor(nombre, impuestol) {
    this._nombre = nombre;
    this._impuesto = impuestol;
  }
  // se aplica el getter
  get nombre() {
    return this._nombre;
  }
  get impuesto() {
    return this._impuesto;
  }
  // se aplica el setter
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  set impuesto(nuevo_impuesto) {
    this._impuesto = nuevo_impuesto;
  }
  calculoImpuesto() {
    return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21;
  }
}
