/* 
Descripcion del Programa:

Escribe un programa que pida al usuario un número y muestre si es positivo, negativo o cero.

*/

let numero = prompt('Digite un numero: ');
numero = Number(numero);
console.log(numero);
console.log(typeof numero);

if(numero < 0){
    console.log(`El numero ${numero} es Negativo`)
}else if(numero > 0){
    console.log(`El numero ${numero} es Positivo`)
}else{
    console.log(`El numero es ${numero}`)
}




