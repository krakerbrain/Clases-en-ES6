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

// Se exporta el módulo
var Impuesto = /*#__PURE__*/ (function () {
  function Impuesto(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  } // se aplica el getter

  _createClass(Impuesto, [
    {
      key: "monto_bruto_anual",
      get: function get() {
        return this._monto_bruto_anual;
      },
      // se aplica el setter
      set: function set(nuevo_monto) {
        this._monto_bruto_anual = nuevo_monto;
      },
    },
    {
      key: "deducciones",
      get: function get() {
        return this._deducciones;
      },
      set: function set(nuevo_deducciones) {
        this._deducciones = nuevo_deducciones;
      },
    },
  ]);

  return Impuesto;
})();

exports["default"] = Impuesto;
