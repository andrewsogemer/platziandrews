/*
Estructura y uso del condicional Switch

switch(expresion){
    case valor1: 
        codigo a ejecutar
        break;
    case valor2:
        codigo a ejecutar;
        break;
    case valor3:
        Codigo a ejecutar
        break;
    default;
        Otro codigo para el caso defalult
}

*/

//Ejemplo: Como se utilizaria en la vida real

let expr = 'Uvas';

switch(expr){
    case 'Naranjas':
        console.log('Las Naranjas cuestan 20 COP el kilo')
        break;
    case 'Manzanas':
        console.log('Las Manzanas cuestan 15 Cop el Kilo')
        break;
    case 'Papayas':
    case 'Mangos':
        console.log('Las Papayas y los Mangos cuestan 30 Cop el Kilo')
        break;
    default:
        console.log('No se encuntra la fruta elegida')
        break;
}

console.log(
    'Hay algo mas que desees?'
)



