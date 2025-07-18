/*
Ingresa un carácter y determina si es una letra, número o otro símbolo.

 */

let caracter = prompt(`Digita algun caracter: `);

if(!isNaN(caracter)){
    console.log(`El ${caracter} es un Numero`)
}else if((caracter >= `a` && caracter <= `z`) || (caracter >= `A` && caracter <= `Z`)){
    console.log(`El caracter ${caracter} es una letra`)
}else{
    console.log(`El Caracter ${caracter} es otro simbolo`)
}