/*
PROGRAMA: Verificador de Contraseña
DESCRIPCIÓN: Pide al usuario una contraseña y verifica si es igual a "Secreta123"
*/

// Versión para navegador (prompt)
function verificarConPrompt() {
    const claveCorrecta = "Secreta123";
    const entrada = prompt("Introduce la contraseña:");
    if (entrada === null) {
        alert("Operación cancelada");
        return;
    }
    if (entrada === claveCorrecta) {
        alert("✅ Contraseña correcta. ¡Bienvenido!");
    } else {
        alert("❌ Contraseña incorrecta.");
    }
}

// Versión para Node.js (requiere el paquete 'readline-sync')
function verificarConsola() {
    const claveCorrecta = "Secreta123";
    let readline;
    try {
        readline = require('readline-sync');
    } catch (e) {
        console.log("Este método solo funciona en Node.js con 'readline-sync' instalado.");
        return;
    }
    const entrada = readline.question('Introduce la contraseña: ');
    if (entrada === claveCorrecta) {
        console.log("✅ Contraseña correcta. ¡Bienvenido!");
    } else {
        console.log("❌ Contraseña incorrecta.");
    }
}

// Instrucciones de uso
console.log("=== VERIFICADOR DE CONTRASEÑA ===");
console.log("Para usar en navegador, ejecuta: verificarConPrompt()");
console.log("Para usar en Node.js, ejecuta: verificarConsola() (requiere 'readline-sync')");

// Exportar funciones para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        verificarConPrompt,
        verificarConsola
    };
} 