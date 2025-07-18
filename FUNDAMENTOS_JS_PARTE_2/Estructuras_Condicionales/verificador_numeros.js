/*
PROGRAMA: Verificador de Números
DESCRIPCIÓN: Pide al usuario un número y muestra si es positivo, negativo o cero
*/

console.log("=== VERIFICADOR DE NÚMEROS ===\n");

// Función principal que verifica el tipo de número
function verificarNumero(numero) {
    // Verificar si el valor es un número válido
    if (isNaN(numero)) {
        return "❌ Error: Por favor, ingresa un número válido";
    }
    
    // Estructura condicional para determinar el tipo de número
    if (numero > 0) {
        return `✅ ${numero} es un número POSITIVO`;
    } else if (numero < 0) {
        return `❌ ${numero} es un número NEGATIVO`;
    } else {
        return `🔵 ${numero} es CERO`;
    }
}

// Función para obtener entrada del usuario (simulada)
function obtenerNumeroUsuario() {
    // En un entorno real, esto sería con prompt() o input HTML
    // Aquí simulamos diferentes entradas para demostrar
    const ejemplos = [5, -3, 0, 10.5, -7.2, "abc", ""];
    
    console.log("Ejemplos de verificación:\n");
    
    ejemplos.forEach((valor, index) => {
        console.log(`Ejemplo ${index + 1}:`);
        console.log(`Entrada: ${valor}`);
        console.log(`Resultado: ${verificarNumero(valor)}`);
        console.log("---");
    });
}

// Función alternativa usando prompt() (para navegador)
function verificarConPrompt() {
    console.log("\n=== VERSIÓN CON PROMPT ===");
    
    // Solicitar entrada al usuario
    const entrada = prompt("Ingresa un número:");
    
    // Verificar si el usuario canceló
    if (entrada === null) {
        console.log("Operación cancelada por el usuario");
        return;
    }
    
    // Verificar si el input está vacío
    if (entrada.trim() === '') {
        console.log("⚠️ Por favor, ingresa un número");
        return;
    }
    
    // Convertir a número y verificar
    const numero = parseFloat(entrada);
    const resultado = verificarNumero(numero);
    
    console.log(`Entrada: ${entrada}`);
    console.log(`Resultado: ${resultado}`);
    
    // Mostrar resultado en alert también
    alert(resultado);
}

// Función para procesar múltiples números
function procesarListaNumeros(numeros) {
    console.log("\n=== PROCESANDO LISTA DE NÚMEROS ===");
    
    numeros.forEach((numero, index) => {
        console.log(`${index + 1}. ${verificarNumero(numero)}`);
    });
}

// Ejecutar ejemplos
obtenerNumeroUsuario();

// Ejemplo con lista de números
const listaNumeros = [15, -8, 0, 3.14, -2.5, 100, -0.1];
procesarListaNumeros(listaNumeros);

// Función para uso interactivo
function iniciarVerificador() {
    console.log("\n=== MODO INTERACTIVO ===");
    console.log("Para usar en navegador, ejecuta: verificarConPrompt()");
    console.log("Para procesar una lista, ejecuta: procesarListaNumeros([1, -5, 0])");
}

// Mostrar instrucciones
iniciarVerificador();

// Exportar funciones para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        verificarNumero,
        obtenerNumeroUsuario,
        verificarConPrompt,
        procesarListaNumeros
    };
} 