/* 
Escribe un programa que indique si un número es múltiplo de 3, 5, ambos o ninguno.

*/

let numero = Number(prompt(`Ingresa un numero`));

if(numero % 3 === 0 && numero % 5 === 0){
    console.log(`El numero ${numero} es multiplo de 3 y 5`)
}else if(numero % 3 === 0){
    console.log(`El numero ${numero} es multiplo de 3`);
}else if(numero % 5 === 0){
    console.log(`El numero ${numero} es multiplo de 5`)
}else{
    console.log(`El numero ${numero} no es multiplo de 3 ni 5`)
}

