/*

Pide dos números y una operación (+, -, *, /) y muestra el resultado.

*/

let numero_1 = Number(prompt(`Digita Numero: `));
let numero_2 = Number(prompt(`Digita Numero: `))
let operacion = prompt('Digita la Operacion "+ , - , * , / ": ');

if(operacion === `+`){
    console.log(`La suma de ${numero_1} y ${numero_2} es: `, numero_1 + numero_2)
}else if(operacion === `-`){
    console.log(`La resta de ${numero_1} y ${numero_2} es: ` , numero_1 - numero_2)
}else if(operacion === `*`){
    console.log(`La multiplicacion de ${numero_1} y ${numero_2} es: ` , numero_1 * numero_2)
}else if(operacion === `/`){
    console.log(`La division de ${numero_1} y ${numero_2} es: ` , numero_1 / numero_2)
}else{
    console.log(`Elige una Operacion Gracias`)
}