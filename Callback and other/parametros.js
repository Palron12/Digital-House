// Parametros Rest and Spread


function listadoDeFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log('La Frutas son: ' + fruta1);
    console.log('La Frutas son: ' + fruta2);
    console.log('El resto de la frutas son: ' + resto_de_frutas);
};

listadoDeFrutas('Manzana', 'Pera', 'Limon', 'Sandia', 'Uva'); //Tiene varios Parametros

/*El parametro de tipo REST sirve para cuando una funcion no sabes cuantos parametros vas a tener
en la misma, como en el ejemplo, se usa los (...)antes del 3er parametro de la funcion principal 
y esta va a crear un array con todos los demas parametros faltantes, en este casi seria (limon
Sandia y la Uva)*/

