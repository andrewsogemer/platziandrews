// Type Casting y Coercion

// Conversion de tipos explicita

const string = '42';
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);



// Convertir a Flotante

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(stringDecimal);
console.log(typeof stringDecimal);

// Convertir a binario

const binary = '1010';
const decimal = parseInt(binary,2);
console.log(decimal);
console.log(typeof decimal);


// Convercion de tipos implicita

const sum = '5' + 3;
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

// EJERCICIO
console.log('-------')
const numero = '596';
const numeroConvertido = parseInt(numero);
console.log(typeof numero);
console.log(typeof numeroConvertido);




