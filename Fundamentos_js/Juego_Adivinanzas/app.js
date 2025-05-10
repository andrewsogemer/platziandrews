/* Adivine el numero secreto */

const numeroSecreto = Math.floor(Math.random () * 10 + 1)

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 1 al 10'));
// console.log(`El numero secreto es: ${numeroSecreto}`)
// console.log(`El numero de jugadordor es ${numeroJugador} `)

if(numeroJugador === numeroSecreto){
    console.log('!Felicitaciones Adivinaste el numero Secreto')
}else if(numeroJugador < numeroSecreto){
    console.log('El numero es menor al numero secreto.. Intentalo de Nuevo !!')
}else{
    console.log('El numero es mayor al numero secreto.. Intentalo de Nuevo !! ')
}



