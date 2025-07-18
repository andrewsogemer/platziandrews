/*
Ingresa una nota entre 0 y 10 e imprime si es insuficiente, aceptable, buena, o excelente.
*/

let nota = prompt(`Ingresa una nota entre 0 y 10`);
if(nota >= 0 && nota <=5.9){
    console.log(`Tu nota de ${nota} es INSUFICIENTE`)
}else if(nota >= 6 && nota <= 7){
    console.log(`Tu nota de ${nota} es ACEPTABLE`)
}else if(nota >= 7 && nota < 9 ){
    console.log(`Tu nota de ${nota} es BUENA`);
}else{
    console.log(`Tu nota de ${nota} es EXCELENTE`)
}