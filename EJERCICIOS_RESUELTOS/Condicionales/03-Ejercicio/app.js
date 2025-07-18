/*

Solicita un número e indica si es par o impar.

 */

let numero = prompt(`Digita un Numero: `);
numero = Number(numero);
console.log(numero);
console.log(typeof numero);


if(numero % 2 === 0){
    console.log(`El numero que digitaste ${numero} es Par`)
}else{
    console.log(`El numero que digitaste ${numero} es Impar`)
}