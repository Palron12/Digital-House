/*
Mostrar todo los numeros impares
*/

function esImpar(num1, num2){
    for (let i = num1; i < num2; i++) {
        if (i % 2 != 0) {
            console.log ('Los numeros impares son: ' + i);
    }
};
}
esImpar(10,20);

//realizar por la prueba por HTML.