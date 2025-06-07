// Creación de arrays
const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'pera', 'plátano'];
const mixto = [1, 'texto', true, { nombre: 'Juan' }];

// Métodos de modificación
// push() - Añade elementos al final
numeros.push(6);
// Ejemplos detallados del método push()
console.log('\n--- Ejemplos del método push() ---');

// Ejemplo 1: Push con números
const numerosPush = [1, 2, 3];
console.log('Array original:', numerosPush);
numerosPush.push(4);
console.log('Después de push(4):', numerosPush);
numerosPush.push(5, 6, 7); // Puedes agregar múltiples elementos
console.log('Después de push(5, 6, 7):', numerosPush);

// Ejemplo 2: Push con strings
const frutasPush = ['manzana', 'pera'];
console.log('\nArray de frutas original:', frutasPush);
frutasPush.push('plátano');
console.log('Después de push("plátano"):', frutasPush);

// Ejemplo 3: Push con objetos
const personasPush = [
    { nombre: 'Juan', edad: 25 }
];
console.log('\nArray de personas original:', personasPush);
personasPush.push({ nombre: 'María', edad: 30 });
console.log('Después de push({nombre: "María", edad: 30}):', personasPush);

// Ejemplo 4: Push con arrays
const arraysPush = [[1, 2], [3, 4]];
console.log('\nArray de arrays original:', arraysPush);
arraysPush.push([5, 6]);
console.log('Después de push([5, 6]):', arraysPush);

// Ejemplo 5: Push con diferentes tipos de datos
const mixtoPush = [1, 'texto'];
console.log('\nArray mixto original:', mixtoPush);
mixtoPush.push(true, { id: 1 }, [7, 8]);
console.log('Después de push múltiples tipos:', mixtoPush);

// Ejemplo 6: Push y su valor de retorno
const numerosRetorno = [1, 2, 3];
const nuevaLongitud = numerosRetorno.push(4, 5);
console.log('\nNueva longitud del array después de push:', nuevaLongitud);
console.log('Array final:', numerosRetorno);
console.log('Después de push:', numeros);


// pop() - Elimina el último elemento
numeros.pop();
console.log('Después de pop:', numeros);

// unshift() - Añade elementos al inicio
numeros.unshift(0);
console.log('Después de unshift:', numeros);

// shift() - Elimina el primer elemento
numeros.shift();
console.log('Después de shift:', numeros);

// splice() - Modifica el array eliminando o añadiendo elementos
numeros.splice(2, 0, 'nuevo');
console.log('Después de splice:', numeros);

// Métodos de transformación
// map() - Transforma cada elemento
const dobles = numeros.map(num => num * 2);
console.log('Array con map:', dobles);

// filter() - Filtra elementos
const pares = numeros.filter(num => num % 2 === 0);
console.log('Array con filter:', pares);

// reduce() - Reduce el array a un solo valor
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log('Suma con reduce:', suma);

// Métodos de búsqueda
// find() - Encuentra el primer elemento que cumple la condición
const mayorQue3 = numeros.find(num => num > 3);
console.log('Primer número mayor que 3:', mayorQue3);

// includes() - Verifica si existe un elemento
console.log('¿Incluye el número 3?:', numeros.includes(3));

// indexOf() - Encuentra el índice de un elemento
console.log('Índice del número 3:', numeros.indexOf(3));

// Métodos de ordenamiento
// sort() - Ordena el array
const desordenado = [5, 3, 1, 4, 2];
desordenado.sort();
console.log('Array ordenado:', desordenado);

// reverse() - Invierte el orden
desordenado.reverse();
console.log('Array invertido:', desordenado);

// Métodos de concatenación
// concat() - Une arrays
const array1 = [1, 2];
const array2 = [3, 4];
const concatenado = array1.concat(array2);
console.log('Arrays concatenados:', concatenado);

// Métodos de extracción
// slice() - Extrae una porción del array
const subArray = numeros.slice(1, 3);
console.log('Subarray:', subArray);

// Propiedades
console.log('Longitud del array:', numeros.length);

// Métodos de iteración
// forEach() - Itera sobre cada elemento
numeros.forEach((num, index) => {
    console.log(`Elemento ${index}: ${num}`);
});

// every() - Verifica si todos los elementos cumplen una condición
const todosPositivos = numeros.every(num => num > 0);
console.log('¿Todos son positivos?:', todosPositivos);

// some() - Verifica si algún elemento cumple una condición
const algunoNegativo = numeros.some(num => num < 0);
console.log('¿Alguno es negativo?:', algunoNegativo);

// join() - Convierte el array en string
const stringNumeros = numeros.join('-');
console.log('Array como string:', stringNumeros);

// toString() - Convierte el array en string
console.log('Array como string (toString):', numeros.toString());

// Ejemplos de suma de elementos de un array
const numerosParaSumar = [10, 20, 30, 40, 50];

// Método 1: Usando reduce
const sumaConReduce = numerosParaSumar.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log('Suma usando reduce:', sumaConReduce);

// Método 2: Usando forEach
let sumaConForEach = 0;
numerosParaSumar.forEach(numero => {
    sumaConForEach += numero;
});
console.log('Suma usando forEach:', sumaConForEach);

// Método 3: Usando for...of
let sumaConForOf = 0;
for (const numero of numerosParaSumar) {
    sumaConForOf += numero;
}
console.log('Suma usando for...of:', sumaConForOf);

// Método 4: Usando un bucle for tradicional
let sumaConFor = 0;
for (let i = 0; i < numerosParaSumar.length; i++) {
    sumaConFor += numerosParaSumar[i];
}
console.log('Suma usando for tradicional:', sumaConFor);

// Ejemplos claros del método reduce()
console.log('\n--- Ejemplos del método reduce() ---');

// Ejemplo 1: Suma simple de números
const precios = [100, 200, 300, 400, 500];
const sumaTotal = precios.reduce((total, precio) => total + precio, 0);
console.log('Array de precios:', precios);
console.log('Suma total de precios:', sumaTotal);

// Ejemplo 2: Concatenar strings
const palabras = ['Hola', ' ', 'mundo', '!'];
const frase = palabras.reduce((texto, palabra) => texto + palabra, '');
console.log('\nArray de palabras:', palabras);
console.log('Frase concatenada:', frase);

// Ejemplo 3: Encontrar el número más grande
const numerosReduce = [5, 8, 2, 10, 3];
const maximo = numerosReduce.reduce((max, numero) => numero > max ? numero : max, numerosReduce[0]);
console.log('\nArray de números:', numerosReduce);
console.log('Número más grande:', maximo);

// Ejemplo 4: Contar elementos
const frutasReduce = ['manzana', 'pera', 'manzana', 'plátano', 'manzana'];
const conteoFrutas = frutasReduce.reduce((contador, fruta) => {
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
}, {});
console.log('\nArray de frutas:', frutasReduce);
console.log('Conteo de frutas:', conteoFrutas);









