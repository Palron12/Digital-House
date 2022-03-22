/*
Realizar una calculadora
*/

function calculadora(num1, num2) {
  let resultado = {
    sumar: function sumarNumeros(num1, num2) {
      console.log(num1 + num2);
    },

    restar: function restarNumeros(num1, num2) {
      console.log(num1 - num2);
    },

    multiplicar: function multiplicarNumeros(num1, num2) {
      console.log(num1 * num2);
    },

    dividir: function dividirNumeros(num1, num2) {
      console.log(num1 / num2);
    },
  };
console.log(resultado);
};

calculadora(2, 3, sumarNumeros());

// otra manera de hacer la calculadora es asi

function porConsola(numero1 , numero2){
    console.log('La Suma es: ' + (numero1 +numero2));
    console.log('La Resta es: ' + (numero1 +numero2));
    console.log('La Multiplicacion es: ' + (numero1 +numero2));
    console.log('La Division es: ' + (numero1 +numero2));
};

function porPantalla(numero1, numero2){
  console.log('La Suma es: ' + (numero1 +numero2));
    console.log('La Resta es: ' + (numero1 +numero2));
    console.log('La Multiplicacion es: ' + (numero1 +numero2));
    console.log('La Division es: ' + (numero1 +numero2));
};

//la funcion principal es 

function calcu(numero1, numero2, mostrar = false){
  if (mostrar == false){
      porConsola(numero1,numero2);
  }else {
    porPantalla(numero1,numero2);
  };

  return true;

};

calcu (1,4);
calcu(8,5);
calcu(10,20);