/*
Estructura de datos
Guarda valores de una forma particular =>  key/value
propiedad = valor

1. nombre objeto {
    Propiedades y valores de las propiedades
    propiedad: valor,
    propiedad: valor,
    propiedad:valor

    Metodos: 
}
*/

const persona = {
    edad: 14,
    nombre: "Jhon",
    apellido: "Gomez",
    estatura: 1.81,
    direccion: {
        calle: "Av Insurgentes 187",
        ciudad: "CDMX",
    },
    saludar(){
        console.log(`Hola, mi nombre es: ${persona.nombre}`)
    },
};

console.log(persona)
persona.saludar();


persona.telefono = "555-555-5555";
console.log(persona.telefono)

persona.despedir = () =>{
    console.log("Adios")
};

persona.despedir();

delete persona.telefono;

// Ejemplo de un objeto más complejo: Una biblioteca
const biblioteca = {
    nombre: "Biblioteca Central",
    direccion: {
        calle: "Av. Reforma 123",
        colonia: "Centro",
        ciudad: "Ciudad de México",
        codigoPostal: "06000"
    },
    horario: {
        diasLaborales: {
            lunes: "9:00 - 18:00",
            martes: "9:00 - 18:00",
            miercoles: "9:00 - 18:00",
            jueves: "9:00 - 18:00",
            viernes: "9:00 - 18:00"
        },
        finDeSemana: {
            sabado: "10:00 - 14:00",
            domingo: "Cerrado"
        }
    },
    libros: [
        {
            titulo: "El Quijote",
            autor: "Miguel de Cervantes",
            genero: "Novela",
            disponible: true,
            ubicacion: "Sección A - Estante 1"
        },
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo mágico",
            disponible: false,
            ubicacion: "Sección B - Estante 3"
        }
    ],
    personal: {
        director: {
            nombre: "Ana Martínez",
            cargo: "Directora",
            añosExperiencia: 15
        },
        bibliotecarios: [
            {
                nombre: "Carlos Rodríguez",
                especialidad: "Literatura clásica",
                turno: "Matutino"
            },
            {
                nombre: "Laura Sánchez",
                especialidad: "Ciencias",
                turno: "Vespertino"
            }
        ]
    },
    // Métodos de la biblioteca
    mostrarInformacion() {
        console.log(`Bienvenido a ${this.nombre}`);
        console.log(`Ubicada en: ${this.direccion.calle}, ${this.direccion.ciudad}`);
    },
    buscarLibro(titulo) {
        const libroEncontrado = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (libroEncontrado) {
            console.log(`Libro encontrado: ${libroEncontrado.titulo} por ${libroEncontrado.autor}`);
            console.log(`Disponible: ${libroEncontrado.disponible ? 'Sí' : 'No'}`);
            console.log(`Ubicación: ${libroEncontrado.ubicacion}`);
        } else {
            console.log('Libro no encontrado en la biblioteca');
        }
    },
    mostrarHorario(dia) {
        if (this.horario.diasLaborales[dia]) {
            console.log(`Horario del ${dia}: ${this.horario.diasLaborales[dia]}`);
        } else if (this.horario.finDeSemana[dia]) {
            console.log(`Horario del ${dia}: ${this.horario.finDeSemana[dia]}`);
        } else {
            console.log('Día no válido');
        }
    },
    agregarLibro(nuevoLibro) {
        this.libros.push(nuevoLibro);
        console.log(`Libro "${nuevoLibro.titulo}" agregado exitosamente`);
    }
};

// Ejemplos de uso:
console.log("\n=== Ejemplo de uso de la biblioteca ===");
biblioteca.mostrarInformacion();
console.log("\nBuscando un libro:");
biblioteca.buscarLibro("El Quijote");
console.log("\nConsultando horario:");
biblioteca.mostrarHorario("lunes");
console.log("\nAgregando nuevo libro:");
biblioteca.agregarLibro({
    titulo: "Don Juan Tenorio",
    autor: "José Zorrilla",
    genero: "Teatro",
    disponible: true,
    ubicacion: "Sección C - Estante 2"
});

