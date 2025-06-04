//Funciones Puras   

//side effects
//1. Modificar variables globales
//2. Modificar parametros de entrada
//3. Realizar llamados a APIs externas
//4. Imprimir algo en la consola
//5. Manipular el DOM
//6. Acceder a la fecha y hora actual



//Funciones Impuras

//1. Modificar variables globales
//2. Modificar parametros de entrada    

function suma(a,b){
    return a + b;
}

// funciones impuras
let total = 0;

function sumWithSideEffects(a,b){
    total += a + b;
    return total;
}

sumWithSideEffects(1,2);
sumWithSideEffects(3,4);

console.log(total);