function doble(num1) {
  return num1 * 2;
}
function triple(num2) {
  return num2 * 3;
}
function aplicarCallback(num1, doble) {
  return doble(num1);
}
function aplicarCallback(num2, triple) {
  return triple(num2);
}

//Calculadora con callback

function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  return numero1 / numero2;
}

function calculadora(numero1, numero2, suma) {
  return suma(numero1, numero2);
}

/*Pasar un callback reloaded*/

let urlCompletas = procesar(["www.google.com", "www.yahoo.com"], agregarHttp);
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoDeElmentos = procesar(
  ["www.google.com", "www.yahoo.com"],
  largoString
);
console.log(largoDeElmentos); // imprime [ 14, 13 ]

function agregarHttp(url) {
  return "http://" + url;
}

function procesar(unArray, callback) {
  let sitiosWeb = [];
  for (let i = 0; i < unArray.length; i++) {
    // Se ejecuta la función callback enviando el elemento actual como parámetro
    sitiosWeb.push(callback(unArray[i]));
  }
  return sitiosWeb;
}

let sitioWebCompleto = (unArray, callback) => procesar(unArray, callback);

console.log(
  sitioWebCompleto(
    ["www.yahoo.com", "www.google.com", "www.git.com"],
    agregarHttp
  )
);
