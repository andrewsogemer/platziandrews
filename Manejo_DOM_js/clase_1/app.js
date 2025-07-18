// ============================================
// EJEMPLOS BÁSICOS DE MANIPULACIÓN DEL DOM
// ============================================

console.log("🚀 Iniciando ejemplos de manipulación del DOM");

// ============================================
// 1. SELECCIÓN Y MODIFICACIÓN DE ELEMENTOS
// ============================================

/**
 * MÉTODOS DE SELECCIÓN:
 * - getElementById(): Selecciona por ID (más rápido)
 * - querySelector(): Selecciona el primer elemento que coincida con el selector CSS
 * - querySelectorAll(): Selecciona todos los elementos que coincidan
 * - getElementsByClassName(): Selecciona por clase
 * - getElementsByTagName(): Selecciona por etiqueta
 */

function cambiarTexto() {
    // Selección por ID
    const parrafo = document.getElementById('parrafo1');
    
    // Modificación del contenido
    parrafo.textContent = '¡Texto modificado con JavaScript!';
    parrafo.style.color = 'blue';
    parrafo.style.fontWeight = 'bold';
    
    console.log('✅ Texto cambiado exitosamente');
}

function cambiarColor() {
    // Selección con querySelector
    const parrafo = document.querySelector('#parrafo1');
    
    // Array de colores para alternar
    const colores = ['red', 'green', 'purple', 'orange', 'blue'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    parrafo.style.color = colorAleatorio;
    parrafo.textContent = `Color cambiado a: ${colorAleatorio}`;
    
    console.log('🎨 Color cambiado a:', colorAleatorio);
}

// ============================================
// 2. CREACIÓN Y ELIMINACIÓN DE ELEMENTOS
// ============================================

let contadorElementos = 0;

function agregarElemento() {
    // Crear un nuevo elemento
    const nuevoElemento = document.createElement('div');
    
    // Agregar contenido y clases
    nuevoElemento.textContent = `Elemento dinámico #${++contadorElementos}`;
    nuevoElemento.className = 'list-item';
    
    // Agregar atributos
    nuevoElemento.setAttribute('data-id', contadorElementos);
    nuevoElemento.setAttribute('title', `Elemento creado el ${new Date().toLocaleTimeString()}`);
    
    // Insertar en el DOM
    const contenedor = document.getElementById('lista-dinamica');
    contenedor.appendChild(nuevoElemento);
    
    console.log('➕ Elemento agregado:', nuevoElemento);
}

function eliminarElemento() {
    const contenedor = document.getElementById('lista-dinamica');
    const elementos = contenedor.querySelectorAll('.list-item');
    
    if (elementos.length > 0) {
        // Eliminar el último elemento
        const ultimoElemento = elementos[elementos.length - 1];
        contenedor.removeChild(ultimoElemento);
        contadorElementos--;
        
        console.log('➖ Elemento eliminado');
    } else {
        console.log('⚠️ No hay elementos para eliminar');
    }
}

// ============================================
// 3. MANIPULACIÓN DE CLASES CSS
// ============================================

function agregarClase() {
    const elemento = document.getElementById('elemento-clases');
    
    // Agregar una clase
    elemento.classList.add('highlight');
    
    console.log('✨ Clase "highlight" agregada');
}

function quitarClase() {
    const elemento = document.getElementById('elemento-clases');
    
    // Quitar una clase
    elemento.classList.remove('highlight');
    
    console.log('🗑️ Clase "highlight" removida');
}

function toggleClase() {
    const elemento = document.getElementById('elemento-clases');
    
    // Alternar una clase (agregar si no existe, quitar si existe)
    elemento.classList.toggle('highlight');
    
    const tieneClase = elemento.classList.contains('highlight');
    console.log('🔄 Clase alternada. Tiene highlight:', tieneClase);
}

// ============================================
// 4. EVENTOS DEL DOM
// ============================================

// Agregar eventos cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM completamente cargado');
    
    // Evento de clic
    const areaEvento = document.getElementById('area-evento');
    const infoEvento = document.getElementById('info-evento');
    
    areaEvento.addEventListener('click', function(evento) {
        infoEvento.textContent = `Clic en: ${evento.target.tagName} - Coordenadas: (${evento.clientX}, ${evento.clientY})`;
        infoEvento.style.color = 'green';
        
        console.log('🖱️ Evento de clic detectado:', evento);
    });
    
    // Evento de mouseover
    areaEvento.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e3f2fd';
        console.log('🖱️ Mouse sobre el área');
    });
    
    // Evento de mouseout
    areaEvento.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        console.log('🖱️ Mouse fuera del área');
    });
    
    // Evento de doble clic
    areaEvento.addEventListener('dblclick', function() {
        infoEvento.textContent = '¡Doble clic detectado!';
        infoEvento.style.color = 'red';
        console.log('🖱️ Doble clic detectado');
    });
});

// ============================================
// 5. FORMULARIOS Y VALIDACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('mi-formulario');
    const mensajeFormulario = document.getElementById('mensaje-formulario');
    
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el envío por defecto
        evento.preventDefault();
        
        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Validación básica
        if (nombre === '') {
            mostrarMensaje('Por favor ingresa tu nombre', 'error');
            return;
        }
        
        if (email === '' || !email.includes('@')) {
            mostrarMensaje('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Si todo está bien
        mostrarMensaje(`¡Formulario enviado! Nombre: ${nombre}, Email: ${email}`, 'exito');
        
        // Limpiar formulario
        formulario.reset();
        
        console.log('📝 Formulario enviado:', { nombre, email });
    });
    
    function mostrarMensaje(texto, tipo) {
        mensajeFormulario.textContent = texto;
        mensajeFormulario.style.color = tipo === 'error' ? 'red' : 'green';
        mensajeFormulario.style.fontWeight = 'bold';
    }
});

// ============================================
// 6. NAVEGACIÓN DEL DOM
// ============================================

function navegarDOM() {
    const contenedor = document.getElementById('navegacion');
    const infoNavegacion = document.getElementById('info-navegacion');
    
    let informacion = '<h4>Información de Navegación del DOM:</h4>';
    
    // Navegación hacia abajo (hijos)
    const parrafo = contenedor.querySelector('p');
    informacion += `<p><strong>Párrafo padre:</strong> ${parrafo.textContent}</p>`;
    
    const lista = contenedor.querySelector('ul');
    const elementosLista = lista.children;
    informacion += `<p><strong>Elementos de la lista:</strong> ${elementosLista.length}</p>`;
    
    // Navegación hacia arriba (padres)
    const primerLi = lista.firstElementChild;
    const padreDelLi = primerLi.parentElement;
    informacion += `<p><strong>Padre del primer li:</strong> ${padreDelLi.tagName}</p>`;
    
    // Navegación lateral (hermanos)
    const span = contenedor.querySelector('span');
    const hermanoAnterior = span.previousElementSibling;
    const hermanoSiguiente = span.nextElementSibling;
    
    informacion += `<p><strong>Hermano anterior del span:</strong> ${hermanoAnterior ? hermanoAnterior.tagName : 'Ninguno'}</p>`;
    informacion += `<p><strong>Hermano siguiente del span:</strong> ${hermanoSiguiente ? hermanoSiguiente.tagName : 'Ninguno'}</p>`;
    
    // Información del nodo
    informacion += `<p><strong>Tipo de nodo del contenedor:</strong> ${contenedor.nodeType}</p>`;
    informacion += `<p><strong>Número de hijos directos:</strong> ${contenedor.children.length}</p>`;
    
    infoNavegacion.innerHTML = informacion;
    
    console.log('🧭 Navegación del DOM completada');
}

// ============================================
// 7. EJEMPLOS ADICIONALES DE MANIPULACIÓN
// ============================================

// Ejemplo: Modificar atributos
function modificarAtributos() {
    const imagen = document.createElement('img');
    imagen.src = 'https://via.placeholder.com/150';
    imagen.alt = 'Imagen de ejemplo';
    imagen.title = 'Imagen creada dinámicamente';
    
    console.log('🖼️ Atributos de imagen:', {
        src: imagen.src,
        alt: imagen.alt,
        title: imagen.title
    });
}

// Ejemplo: Trabajar con datasets
function usarDataAttributes() {
    const elemento = document.createElement('div');
    elemento.dataset.usuarioId = '12345';
    elemento.dataset.rol = 'admin';
    elemento.dataset.fechaCreacion = new Date().toISOString();
    
    console.log('📊 Datasets:', elemento.dataset);
}

// Ejemplo: Clonar elementos
function clonarElemento() {
    const original = document.querySelector('.list-item');
    if (original) {
        const clon = original.cloneNode(true);
        clon.textContent = 'Elemento clonado';
        document.body.appendChild(clon);
        
        console.log('🔄 Elemento clonado');
    }
}

// Ejemplo: Reemplazar elementos
function reemplazarElemento() {
    const elementoViejo = document.querySelector('.list-item');
    if (elementoViejo) {
        const elementoNuevo = document.createElement('div');
        elementoNuevo.textContent = 'Elemento reemplazado';
        elementoNuevo.className = 'list-item';
        
        elementoViejo.parentNode.replaceChild(elementoNuevo, elementoViejo);
        
        console.log('🔄 Elemento reemplazado');
    }
}

// ============================================
// 8. UTILIDADES Y MEJORES PRÁCTICAS
// ============================================

// Función para crear elementos de forma más eficiente
function crearElementoEficiente(tag, contenido, clases = [], atributos = {}) {
    const elemento = document.createElement(tag);
    elemento.textContent = contenido;
    
    // Agregar clases
    if (clases.length > 0) {
        elemento.classList.add(...clases);
    }
    
    // Agregar atributos
    Object.entries(atributos).forEach(([key, value]) => {
        elemento.setAttribute(key, value);
    });
    
    return elemento;
}

// Función para limpiar contenido de forma segura
function limpiarContenidoSeguro(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Función para verificar si un elemento existe
function elementoExiste(selector) {
    return document.querySelector(selector) !== null;
}

// Función para obtener elementos de forma segura
function obtenerElementoSeguro(selector) {
    const elemento = document.querySelector(selector);
    if (!elemento) {
        console.warn(`⚠️ Elemento no encontrado: ${selector}`);
        return null;
    }
    return elemento;
}

// ============================================
// INICIALIZACIÓN Y DEMOSTRACIÓN
// ============================================

// Ejecutar algunos ejemplos cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Ejemplos de manipulación del DOM listos');
    
    // Crear algunos elementos de ejemplo usando nuestras utilidades
    const ejemploElemento = crearElementoEficiente(
        'div', 
        'Elemento creado con utilidad', 
        ['list-item'], 
        { 'data-ejemplo': 'true' }
    );
    
    // Verificar si existen elementos
    console.log('Elemento existe:', elementoExiste('#parrafo1'));
    
    // Obtener elemento de forma segura
    const elementoSeguro = obtenerElementoSeguro('#parrafo1');
    if (elementoSeguro) {
        console.log('✅ Elemento obtenido de forma segura');
    }
});

console.log('📚 Todos los ejemplos de manipulación del DOM han sido cargados');


/* 
📚 Explicación de los Ejemplos de Manipulación del DOM
1. Selección y Modificación de Elementos
getElementById(): Método más rápido para seleccionar por ID
querySelector(): Selecciona el primer elemento que coincida con un selector CSS
textContent: Modifica el contenido de texto de un elemento
style: Permite modificar estilos CSS directamente
2. Creación y Eliminación de Elementos
createElement(): Crea nuevos elementos HTML
appendChild(): Agrega elementos al DOM
removeChild(): Elimina elementos del DOM
setAttribute(): Agrega atributos personalizados
3. Manipulación de Clases CSS
classList.add(): Agrega clases CSS
classList.remove(): Quita clases CSS
classList.toggle(): Alterna clases (agrega si no existe, quita si existe)
classList.contains(): Verifica si un elemento tiene una clase
4. Eventos del DOM
addEventListener(): Agrega eventos a elementos
Eventos comunes: click, mouseover, mouseout, dblclick
preventDefault(): Previene el comportamiento por defecto
event.target: Accede al elemento que disparó el evento
5. Formularios y Validación
Validación de campos: Verificación de contenido y formato
form.reset(): Limpia formularios
Manejo de eventos submit: Procesa envío de formularios
6. Navegación del DOM
parentElement: Accede al elemento padre
children: Obtiene elementos hijos
nextElementSibling: Elemento hermano siguiente
previousElementSibling: Elemento hermano anterior
7. Ejemplos Adicionales
Modificación de atributos: src, alt, title
Data attributes: Almacenamiento de datos personalizados
Clonación: cloneNode()
Reemplazo: replaceChild()
8. Utilidades y Mejores Prácticas
Funciones helper: Creación eficiente de elementos
Verificación segura: Comprobar existencia de elementos
Limpieza segura: Eliminar contenido sin errores
🚀 Cómo usar estos ejemplos:
Abre el archivo index.html en tu navegador
Abre la consola del navegador (F12) para ver los logs
Interactúa con los botones para ver cada ejemplo en acción
Experimenta modificando el código para aprender más
💡 Conceptos Clave del DOM:
DOM: Representación en memoria de la estructura HTML
Nodos: Cada elemento, texto, comentario es un nodo
Árbol DOM: Estructura jerárquica padre-hijo
Manipulación: Cambiar, agregar, eliminar elementos dinámicamente
Estos ejemplos te darán una base sólida para entender cómo manipular el DOM en JavaScript. ¡Puedes experimentar con cada función y ver cómo funciona en tiempo real!



*/