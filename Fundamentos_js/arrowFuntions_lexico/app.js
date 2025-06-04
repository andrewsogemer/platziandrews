// Arrow Function

const saludo = function (nombre){
    return `Hola , ${nombre}`
}

// Arrow Function con return ex-plicito

const nuevoSaludo1 = (nombre) => {
    return `Hola , ${nombre}`
}

//funcion con return implicito

const nuevoSaludo  = (nombre) => `Hola , ${nombre}`;


// Lexical Binding

const funcionalCaracter = {
    name: 'Uncle Ben',
    mensajeTradicionalFuncion: function(message){
        console.log(`${this.name} says: ${message}`)
    }
}

// Nueva arrow function para saludar
const saludarPersona = (nombre, hora) => {
    const saludo = hora < 12 ? 'Buenos días' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';
    return `${saludo}, ${nombre}!`;
};

// Ejemplo de uso
console.log(saludarPersona('Carlos', 15)); // Mostrará: "Buenas tardes, Carlos!"

