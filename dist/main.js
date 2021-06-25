"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// se importa el modulo
// se declaran variables
var nombreCliente = "Luis Martinez";
var monto = 152;
var deduc = 21; // se instancian los objetos

var impuesto1 = new _impuestos["default"](monto, deduc);
var cliente1 = new _cliente["default"](nombreCliente, impuesto1); // se crea mensaje de salida

var msg = "El calculo de impuestos anual del cliente ".concat(cliente1.nombre, ", es de: $ ").concat(cliente1.calculoImpuesto(), ".");
console.log(msg);
