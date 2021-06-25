"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// se exporta el modulo
var Cliente = /*#__PURE__*/ (function () {
  function Cliente(nombre, impuestol) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuestol;
  } // se aplica el getter

  _createClass(Cliente, [
    {
      key: "nombre",
      get: function get() {
        return this._nombre;
      },
      // se aplica el setter
      set: function set(nuevo_nombre) {
        this._nombre = nuevo_nombre;
      },
    },
    {
      key: "impuesto",
      get: function get() {
        return this._impuesto;
      },
      set: function set(nuevo_impuesto) {
        this._impuesto = nuevo_impuesto;
      },
    },
    {
      key: "calculoImpuesto",
      value: function calculoImpuesto() {
        return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21;
      },
    },
  ]);

  return Cliente;
})();

exports["default"] = Cliente;
