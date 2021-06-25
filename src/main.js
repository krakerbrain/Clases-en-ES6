// se importa el modulo

import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

// se declaran variables

let nombreCliente = "Luis Martinez";
let monto = 152;
let deduc = 21;

// se instancian los objetos

let impuesto1 = new Impuesto(monto, deduc);
let cliente1 = new Cliente(nombreCliente, impuesto1);

// se crea mensaje de salida

let msg = `El calculo de impuestos anual del cliente ${cliente1.nombre}, es de: $ ${cliente1.calculoImpuesto()}.`;

console.log(msg);
