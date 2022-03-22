/*Cierre del modulo y el ejercion es la consecionario de auto*/

const autos = require("./autos");

/* Primera parte 
Crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades 
que el cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista 
de automóviles importada anteriormente. */

let concesionaria = {
  autos: autos,
/*Segunda parte
 Crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva
 el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null. */
  buscarAuto: function (patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente == patente) {
        return autos[i];
      }
    }
    return null;
  },
/*Tercera Parte
 María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y,
 en caso de encontrar al automóvil, le asigna el estado de vendido.*/ 

  venderAuto: function (patente) {
    if (this.buscarAuto(patente) != null) {
      let index = autos.indexOf(this.buscarAuto(patente));
      autos[index].vendido = true;
    }
  },
  /*Cuarta Parte
   A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos,
   usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no 
  deberían de aparecer los autos que ya fueron vendidos.*/

  autosParaLaVenta: function (autos) {
    return (autos = this.autos.filter(function (autos) {
      return autos.vendido === false;
    }));
  },

  /* Quinta Parte
  pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy 
  seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera
  que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar
  la funcionalidad autosNuevos.*/ 

  autosNuevos: function () {
    temp = this.autosParaLaVenta();
    autos0KM = temp.filter((auto) => auto.km < 100);
    return autos0KM;
  },
 /* Sexta Parte
 María te pide que completes la función listaDeVentas que devuelve una lista que 
 contiene el precio de venta de cada auto vendido. */
 
  listaDeVentas: function () {
   let precio = [];
   let temp = autos.filter((auto) => auto.vendido == true);
   temp.forEach((auto) => precio.push(auto.precio));
   return precio;   
   
  },

  /*Septima Parte
  María te pide que resuelvas la funcionalidad de totalDeVentas, 
  que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas.*/

  totalDeVentas: function () {
    let precios = this.listaDeVentas();
    let total = 0;
    if (!precios.length == 0) {
      total = precios.reduce((ac, precio) => ac + precio);
    }
    return total;
  },
  /*Octava Parte
  Es por esto que María te pide que desarrolles la función puedeComprar que reciba por
   parámetro un auto y una persona y devuelva true si la misma puede comprar el auto. */

  puedeComprar: (auto, persona) => {
    let costoCuota = auto.precio / auto.cuotas;
    if (persona.capacidadDePagoTotal >= auto.precio) {
    if (persona.capacidadDePagoEnCuotas >= costoCuota) {
        return true;
      }
    }
    return false;
  },

  /*Novena Parte
  Hay que escribir la función autosQuePuedeComprar, que recibe una persona y 
  devuelve la lista de autos que puede comprar. */
  
  autosQuePuedeComprar: function(persona){
    let vent = this.autosParaLaVenta();
    let temp = vent.filter((auto) => this.puedeComprar(auto, persona)     );
     return temp;
 },
};

