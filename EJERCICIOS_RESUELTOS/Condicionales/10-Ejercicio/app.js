/* 

Pide una contraseña y verifica si es igual a "Secreta123".
*/

let password = prompt(`Digita un pasword: `);

if(password === `Secreta123`){
    console.log(`Contraseña CORRECTA`)
}else{
    console.log(`Contraseña INCORRECTA`)
}

