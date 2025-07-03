// ========================================
// EJEMPLO 1: Clase Persona (Básica)
// ========================================
console.log("=== EJEMPLO 1: Clase Persona ===");

class Persona {
    // Constructor: método especial que se ejecuta al crear una instancia
    constructor(nombre, edad, ciudad) {
        // this hace referencia a la instancia que se está creando
        this.nombre = nombre;  // Propiedad nombre
        this.edad = edad;      // Propiedad edad
        this.ciudad = ciudad;  // Propiedad ciudad
    }
    
    // Método: función que pertenece a la clase
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    
    // Método para obtener información completa
    obtenerInfo() {
        return `${this.nombre} - ${this.edad} años - ${this.ciudad}`;
    }
}

// Crear instancias (objetos) de la clase Persona
const persona1 = new Persona("Ana", 25, "Madrid");
const persona2 = new Persona("Carlos", 30, "Barcelona");

console.log(persona1.saludar());
console.log(persona2.obtenerInfo());
console.log("");

// ========================================
// EJEMPLO 2: Clase Coche (Con métodos más complejos)
// ========================================
console.log("=== EJEMPLO 2: Clase Coche ===");

class Coche {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.encendido = false;  // Estado inicial
        this.velocidad = 0;      // Estado inicial
    }
    
    // Método para encender el coche
    encender() {
        if (!this.encendido) {
            this.encendido = true;
            return `${this.marca} ${this.modelo} se ha encendido`;
        } else {
            return "El coche ya está encendido";
        }
    }
    
    // Método para apagar el coche
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            this.velocidad = 0;
            return `${this.marca} ${this.modelo} se ha apagado`;
        } else {
            return "El coche ya está apagado";
        }
    }
    
    // Método para acelerar
    acelerar(cantidad) {
        if (this.encendido) {
            this.velocidad += cantidad;
            return `Velocidad actual: ${this.velocidad} km/h`;
        } else {
            return "No puedes acelerar, el coche está apagado";
        }
    }
    
    // Método para obtener información del coche
    getInfo() {
        return `${this.marca} ${this.modelo} (${this.año}) - Color: ${this.color}`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 2020, "Azul");
console.log(miCoche.getInfo());
console.log(miCoche.encender());
console.log(miCoche.acelerar(50));
console.log(miCoche.apagar());
console.log("");

// ========================================
// EJEMPLO 3: Clase Libro (Con getters y setters)
// ========================================
console.log("=== EJEMPLO 3: Clase Libro ===");

class Libro {
    constructor(titulo, autor, año, precio) {
        this._titulo = titulo;    // _ indica propiedad "privada"
        this._autor = autor;
        this._año = año;
        this._precio = precio;
        this._disponible = true;  // Estado inicial
    }
    
    // Getter: permite obtener el valor de una propiedad
    get titulo() {
        return this._titulo;
    }
    
    // Setter: permite modificar el valor de una propiedad
    set titulo(nuevoTitulo) {
        if (nuevoTitulo.length > 0) {
            this._titulo = nuevoTitulo;
        } else {
            console.log("El título no puede estar vacío");
        }
    }
    
    get precio() {
        return this._precio;
    }
    
    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo");
        }
    }
    
    // Método para prestar el libro
    prestar() {
        if (this._disponible) {
            this._disponible = false;
            return `El libro "${this._titulo}" ha sido prestado`;
        } else {
            return `El libro "${this._titulo}" no está disponible`;
        }
    }
    
    // Método para devolver el libro
    devolver() {
        if (!this._disponible) {
            this._disponible = true;
            return `El libro "${this._titulo}" ha sido devuelto`;
        } else {
            return `El libro "${this._titulo}" ya está disponible`;
        }
    }
    
    // Método para mostrar información
    mostrarInfo() {
        const estado = this._disponible ? "Disponible" : "Prestado";
        return `${this._titulo} - ${this._autor} (${this._año}) - $${this._precio} - ${estado}`;
    }
}

const libro1 = new Libro("Don Quijote", "Miguel de Cervantes", 1605, 25.99);
console.log(libro1.mostrarInfo());
console.log(libro1.prestar());
console.log(libro1.mostrarInfo());
console.log(libro1.devolver());
console.log("");

// ========================================
// EJEMPLO 4: Clase Calculadora (Con métodos estáticos)
// ========================================
console.log("=== EJEMPLO 4: Clase Calculadora ===");

class Calculadora {
    constructor() {
        this.historial = [];  // Array para guardar operaciones
    }
    
    // Método estático: no necesita instancia, se llama directamente desde la clase
    static sumar(a, b) {
        return a + b;
    }
    
    static restar(a, b) {
        return a - b;
    }
    
    static multiplicar(a, b) {
        return a * b;
    }
    
    static dividir(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: División por cero";
        }
    }
    
    // Método de instancia: necesita una instancia para funcionar
    calcular(operacion, a, b) {
        let resultado;
        
        switch(operacion) {
            case '+':
                resultado = Calculadora.sumar(a, b);
                break;
            case '-':
                resultado = Calculadora.restar(a, b);
                break;
            case '*':
                resultado = Calculadora.multiplicar(a, b);
                break;
            case '/':
                resultado = Calculadora.dividir(a, b);
                break;
            default:
                resultado = "Operación no válida";
        }
        
        // Guardar en historial
        this.historial.push(`${a} ${operacion} ${b} = ${resultado}`);
        return resultado;
    }
    
    // Método para ver historial
    verHistorial() {
        return this.historial;
    }
    
    // Método para limpiar historial
    limpiarHistorial() {
        this.historial = [];
        return "Historial limpiado";
    }
}

// Usar métodos estáticos sin crear instancia
console.log("Suma estática:", Calculadora.sumar(10, 5));
console.log("Multiplicación estática:", Calculadora.multiplicar(4, 3));

// Crear instancia para usar métodos de instancia
const miCalculadora = new Calculadora();
console.log("Resultado:", miCalculadora.calcular('+', 15, 7));
console.log("Resultado:", miCalculadora.calcular('*', 6, 8));
console.log("Historial:", miCalculadora.verHistorial());
console.log("");

// ========================================
// EJEMPLO 5: Clase Banco (Con herencia básica)
// ========================================
console.log("=== EJEMPLO 5: Clase Banco con Herencia ===");

// Clase padre
class Cuenta {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numeroCuenta = this.generarNumeroCuenta();
    }
    
    generarNumeroCuenta() {
        return Math.floor(Math.random() * 1000000) + 100000;
    }
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            return `Depósito de $${cantidad}. Saldo actual: $${this.saldo}`;
        } else {
            return "La cantidad debe ser mayor a 0";
        }
    }
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return `Retiro de $${cantidad}. Saldo actual: $${this.saldo}`;
        } else {
            return "Fondos insuficientes o cantidad inválida";
        }
    }
    
    consultarSaldo() {
        return `Saldo de ${this.titular}: $${this.saldo}`;
    }
}

// Clase hija que hereda de Cuenta
class CuentaCorriente extends Cuenta {
    constructor(titular, saldoInicial = 0, limiteCredito = 1000) {
        super(titular, saldoInicial);  // Llamar al constructor de la clase padre
        this.limiteCredito = limiteCredito;
        this.tipo = "Corriente";
    }
    
    // Sobrescribir el método retirar para permitir sobregiro
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= (this.saldo + this.limiteCredito)) {
            this.saldo -= cantidad;
            return `Retiro de $${cantidad}. Saldo actual: $${this.saldo}`;
        } else {
            return "Excede el límite de crédito disponible";
        }
    }
    
    // Método específico de cuenta corriente
    consultarLimiteCredito() {
        return `Límite de crédito: $${this.limiteCredito}`;
    }
}

// Clase hija para cuenta de ahorros
class CuentaAhorros extends Cuenta {
    constructor(titular, saldoInicial = 0, tasaInteres = 0.02) {
        super(titular, saldoInicial);
        this.tasaInteres = tasaInteres;
        this.tipo = "Ahorros";
    }
    
    // Método específico para calcular intereses
    calcularIntereses() {
        const intereses = this.saldo * this.tasaInteres;
        this.saldo += intereses;
        return `Intereses generados: $${intereses.toFixed(2)}. Nuevo saldo: $${this.saldo.toFixed(2)}`;
    }
    
    // Método específico de cuenta de ahorros
    consultarTasaInteres() {
        return `Tasa de interés: ${(this.tasaInteres * 100).toFixed(2)}%`;
    }
}

// Crear instancias de diferentes tipos de cuenta
const cuentaCorriente = new CuentaCorriente("María García", 500, 2000);
const cuentaAhorros = new CuentaAhorros("Juan Pérez", 1000, 0.03);

console.log(cuentaCorriente.consultarSaldo());
console.log(cuentaCorriente.consultarLimiteCredito());
console.log(cuentaCorriente.retirar(800));
console.log(cuentaCorriente.consultarSaldo());

console.log(cuentaAhorros.consultarSaldo());
console.log(cuentaAhorros.consultarTasaInteres());
console.log(cuentaAhorros.calcularIntereses());
console.log(cuentaAhorros.consultarSaldo()); 