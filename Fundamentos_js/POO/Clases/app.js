class Persona {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} mi edad es ${this.edad} y mi email es ${this.email}`);
    }
}

const persona1 = new Persona("Juan", 20, "juan@gmail.com");
persona1.saludar();