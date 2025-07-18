/* 
Pide dos números al usuario y muestra cuál es el mayor o si son iguales.

*/

let numero_1 = prompt(`Digite un numero: `);
numero_1 = Number(numero_1);
let numero_2 = prompt(`Digite un numero: `);
numero_2 = Number(numero_2);
console.log(numero_1);
console.log(typeof numero_1);
console.log(numero_2);
console.log(typeof numero_2);

if(numero_1 > numero_2){
    console.log(`El numero ${numero_1} es mayor que ${numero_2}`)
}else if(numero_2 > numero_1){
    console.log(`El numero ${numero_2} es mayor que el numero ${numero_1}`)
}else{
    console.log(`Los numeros ${numero_1} y ${numero_2} son iguales`);
}

