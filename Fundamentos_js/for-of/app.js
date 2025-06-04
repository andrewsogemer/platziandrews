/* FOR OF => POR CADA ELEMENTO DE CIERTA COSA, solo se ejecuta en elementos iterables arrays o strings
Estructura

for of arrays, strings [algo]

for(variable of objeto){
    codigo a ejecutar
}
*/

let canasta = ['manzana', 'pera','mango', 'mora','durazno', 'uvas'];
for(frutas of canasta){
    console.log(frutas);
}