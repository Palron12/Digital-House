
/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi se muestra el resultado.
*/ 

//Inizializo mis variables
let suma = 0;
let contador = 0;

//uso el bucle Do While

do {
    let numero = parseInt(prompt('Ingrese un nuemro hasta que coloques un numero negativo',0));

    if (isNaN(numero)){
        numero = 0;
    }else if (numero >= 0){
        suma = suma + numero;
        
        contador++;
    }
    console.log(suma);
    console.log (contador);

}while(numero >=0);

console.log ('La suma total de toda la suma: ' + suma);
console.log ('La media de todos los numeros es: ' + (sume/contador));

//Este ejercicio se prueba en el navegador recuerda crear el html y colocar el scrip del ejercicio
//no funciona por la terminal ni por node...