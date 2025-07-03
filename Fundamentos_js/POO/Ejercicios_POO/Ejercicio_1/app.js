/* Sistema de Gestion de biblioteca  */

const biblioteca = {
    direccion: {
        calle: "Avenida Circunvalar 10 -25",
        ciudad: "Bogbota",
        localidad: "Centro",
        codigoPostal: "111611"
    },
    horario :{
        diasLaborales:{
            lunes: "08:00 - 18:00",
            martes: "09:00 - 18:00",
            miercoles: "08:00 - 17:00",
            jueves: "09:00 - 16:00",
            viernes: "08:00 - 18:00"
        },
        finDeSemana:{
            sabado: "10:00 - 16:00",
            domingo: "10:00 - 13:00",
            festivo: "No hay servicio"
        }
    },
    libros: [
        {
            titulo: "El Quijote",
            autor:"Miguel de Cervantes",
            genero: "Novela",
            disponible: true,
            ubicacion: "Seccion A - Estante 1"
        },
        {
            titulo: "Cien Años de Soledad",
            autor: "Gabriel Garcia Marquez",
            genero: "Realismo Magico",
            disponible: false,
            ubicacion: "Seccion B - Estante 3"
        },
        {
            titulo: "Pedro Paramo",
            autor: "Juan Rulfo",
            genero: "Novela Ficcion",
            disponible: true,
            ubicacion: "Seccion C - Estante 7"
        }
    ],
    personal:{
        director:{
            nombre: "Juan Camilo Mejia",
            cargo: "Director Biblioteca",
            aniosExperiencia: 10,
            telefono: 2316789
        },
        bibliotecarios: [
            {
                nombre: 
            }
        ]
    }
}