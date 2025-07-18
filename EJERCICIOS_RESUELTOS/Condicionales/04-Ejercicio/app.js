/* 
Pide la edad del usuario e indica si es mayor de edad (18 años o más).
*/

let edad = prompt(`Digita tu edad: `);
edad = Number(edad);
if(edad >= 18){
    console.log(`Tienes ${edad} años y eres Mayor de edad`);
}else{
    console.log(`Tienes ${edad} años y eres Menor de edad`)
}

