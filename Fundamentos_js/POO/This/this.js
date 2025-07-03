/*
This es una palabra reservada que se utiliza para referirse al objeto que está siendo creado. y la vamos a estar utilizando con clases

this.nombre = "Juan";
this.edad = 20;
this.email = "juan@gmail.com";

this --- objeto  --- class

*/

class Persona {
    constructor(nombre, edada){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Juan", 20);
persona1.saludar(); 