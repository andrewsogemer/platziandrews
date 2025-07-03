// ========================================
// SISTEMA DE AUTENTICACIÓN MEJORADO
// ========================================

// Clase para manejar usuarios
class Usuario {
    constructor(username, password, nombreCompleto = "") {
        this.username = username;
        this.password = password;
        this.nombreCompleto = nombreCompleto;
        this.fechaRegistro = new Date();
        this.activo = true;
    }

    // Método para validar credenciales
    validarCredenciales(username, password) {
        return this.username === username && this.password === password;
    }

    // Método para obtener información del usuario
    obtenerInfo() {
        return {
            username: this.username,
            nombreCompleto: this.nombreCompleto,
            fechaRegistro: this.fechaRegistro,
            activo: this.activo
        };
    }
}

// Clase para manejar posts/timeline
class Post {
    constructor(username, contenido, fecha = new Date()) {
        this.username = username;
        this.contenido = contenido;
        this.fecha = fecha;
        this.likes = 0;
        this.comentarios = [];
    }

    // Método para dar like
    darLike() {
        this.likes++;
        return this.likes;
    }

    // Método para agregar comentario
    agregarComentario(comentario) {
        this.comentarios.push({
            texto: comentario,
            fecha: new Date()
        });
    }

    // Método para mostrar el post
    mostrarPost() {
        const fechaFormateada = this.fecha.toLocaleDateString('es-ES');
        return `${this.username} - ${fechaFormateada}\n${this.contenido}\n❤️ ${this.likes} likes`;
    }
}

// Clase principal del sistema de autenticación
class SistemaAutenticacion {
    constructor() {
        this.usuarios = [];
        this.posts = [];
        this.usuarioActual = null;
        this.inicializarDatos();
    }

    // Método para inicializar datos de ejemplo
    inicializarDatos() {
        // Agregar usuarios de ejemplo
        this.registrarUsuario("andres", "123", "Andrés García");
        this.registrarUsuario("caro", "456", "Carolina López");
        this.registrarUsuario("mariana", "789", "Mariana Rodríguez");

        // Agregar posts de ejemplo
        this.agregarPost("Estefany", "Me encanta JavaScript");
        this.agregarPost("Oscar", "Bebeloper es lo mejor!");
        this.agregarPost("Mariana", "A mi me gusta más el café que el té");
        this.agregarPost("Andres", "Yo hoy no quiero trabajar");
    }

    // Método para registrar un nuevo usuario
    registrarUsuario(username, password, nombreCompleto = "") {
        // Validar que el usuario no exista
        if (this.buscarUsuario(username)) {
            throw new Error("El usuario ya existe");
        }

        // Validar que la contraseña tenga al menos 3 caracteres
        if (password.length < 3) {
            throw new Error("La contraseña debe tener al menos 3 caracteres");
        }

        const nuevoUsuario = new Usuario(username, password, nombreCompleto);
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    // Método para buscar usuario por username
    buscarUsuario(username) {
        return this.usuarios.find(usuario => usuario.username === username);
    }

    // Método para autenticar usuario
    autenticar(username, password) {
        const usuario = this.buscarUsuario(username);
        
        if (!usuario) {
            return { exito: false, mensaje: "Usuario no encontrado" };
        }

        if (!usuario.activo) {
            return { exito: false, mensaje: "Usuario inactivo" };
        }

        if (usuario.validarCredenciales(username, password)) {
            this.usuarioActual = usuario;
            return { 
                exito: true, 
                mensaje: `¡Bienvenido ${usuario.nombreCompleto || usuario.username}!`,
                usuario: usuario.obtenerInfo()
            };
        } else {
            return { exito: false, mensaje: "Contraseña incorrecta" };
        }
    }

    // Método para cerrar sesión
    cerrarSesion() {
        if (this.usuarioActual) {
            const username = this.usuarioActual.username;
            this.usuarioActual = null;
            return `Sesión cerrada para ${username}`;
        }
        return "No hay sesión activa";
    }

    // Método para agregar un post
    agregarPost(username, contenido) {
        if (!contenido || contenido.trim().length === 0) {
            throw new Error("El contenido del post no puede estar vacío");
        }

        const post = new Post(username, contenido.trim());
        this.posts.push(post);
        return post;
    }

    // Método para obtener todos los posts
    obtenerPosts() {
        return this.posts.map(post => post.mostrarPost());
    }

    // Método para obtener posts de un usuario específico
    obtenerPostsPorUsuario(username) {
        return this.posts
            .filter(post => post.username.toLowerCase() === username.toLowerCase())
            .map(post => post.mostrarPost());
    }

    // Método para dar like a un post
    darLikeAPost(indicePost) {
        if (indicePost >= 0 && indicePost < this.posts.length) {
            return this.posts[indicePost].darLike();
        }
        throw new Error("Post no encontrado");
    }

    // Método para mostrar estadísticas
    mostrarEstadisticas() {
        return {
            totalUsuarios: this.usuarios.length,
            totalPosts: this.posts.length,
            usuarioActual: this.usuarioActual ? this.usuarioActual.username : "Ninguno"
        };
    }
}

// ========================================
// INTERFAZ DE USUARIO MEJORADA
// ========================================

class InterfazUsuario {
    constructor() {
        this.sistema = new SistemaAutenticacion();
    }

    // Método para mostrar menú principal
    mostrarMenu() {
        console.log("\n=== SISTEMA DE AUTENTICACIÓN ===");
        console.log("1. Iniciar sesión");
        console.log("2. Registrarse");
        console.log("3. Ver timeline");
        console.log("4. Agregar post");
        console.log("5. Ver estadísticas");
        console.log("6. Cerrar sesión");
        console.log("7. Salir");
        console.log("================================");
    }

    // Método para iniciar sesión
    iniciarSesion() {
        console.log("\n--- INICIAR SESIÓN ---");
        const username = prompt("Ingrese su nombre de usuario:");
        const password = prompt("Ingrese su contraseña:");

        if (!username || !password) {
            alert("Por favor complete todos los campos");
            return;
        }

        const resultado = this.sistema.autenticar(username, password);
        
        if (resultado.exito) {
            alert(resultado.mensaje);
            console.log("✅ " + resultado.mensaje);
        } else {
            alert("❌ " + resultado.mensaje);
            console.log("❌ " + resultado.mensaje);
        }
    }

    // Método para registrarse
    registrarse() {
        console.log("\n--- REGISTRARSE ---");
        const username = prompt("Ingrese su nombre de usuario:");
        const password = prompt("Ingrese su contraseña:");
        const nombreCompleto = prompt("Ingrese su nombre completo (opcional):");

        if (!username || !password) {
            alert("Por favor complete los campos obligatorios");
            return;
        }

        try {
            this.sistema.registrarUsuario(username, password, nombreCompleto);
            alert("✅ Usuario registrado exitosamente");
            console.log("✅ Usuario registrado:", username);
        } catch (error) {
            alert("❌ Error: " + error.message);
            console.log("❌ Error:", error.message);
        }
    }

    // Método para ver timeline
    verTimeline() {
        console.log("\n--- TIMELINE ---");
        const posts = this.sistema.obtenerPosts();
        
        if (posts.length === 0) {
            console.log("No hay posts disponibles");
            return;
        }

        posts.forEach((post, index) => {
            console.log(`\n[${index + 1}] ${post}`);
        });
    }

    // Método para agregar post
    agregarPost() {
        if (!this.sistema.usuarioActual) {
            alert("Debe iniciar sesión para agregar un post");
            return;
        }

        console.log("\n--- AGREGAR POST ---");
        const contenido = prompt("Escriba su post:");

        if (!contenido || contenido.trim().length === 0) {
            alert("El contenido no puede estar vacío");
            return;
        }

        try {
            const post = this.sistema.agregarPost(this.sistema.usuarioActual.username, contenido);
            alert("✅ Post agregado exitosamente");
            console.log("✅ Post agregado:", post.mostrarPost());
        } catch (error) {
            alert("❌ Error: " + error.message);
            console.log("❌ Error:", error.message);
        }
    }

    // Método para mostrar estadísticas
    mostrarEstadisticas() {
        console.log("\n--- ESTADÍSTICAS ---");
        const stats = this.sistema.mostrarEstadisticas();
        console.log(`Total de usuarios: ${stats.totalUsuarios}`);
        console.log(`Total de posts: ${stats.totalPosts}`);
        console.log(`Usuario actual: ${stats.usuarioActual}`);
    }

    // Método para cerrar sesión
    cerrarSesion() {
        const mensaje = this.sistema.cerrarSesion();
        alert(mensaje);
        console.log("🔒 " + mensaje);
    }

    // Método principal para ejecutar la aplicación
    ejecutar() {
        let continuar = true;

        while (continuar) {
            this.mostrarMenu();
            const opcion = prompt("Seleccione una opción (1-7):");

            switch (opcion) {
                case "1":
                    this.iniciarSesion();
                    break;
                case "2":
                    this.registrarse();
                    break;
                case "3":
                    this.verTimeline();
                    break;
                case "4":
                    this.agregarPost();
                    break;
                case "5":
                    this.mostrarEstadisticas();
                    break;
                case "6":
                    this.cerrarSesion();
                    break;
                case "7":
                    continuar = false;
                    alert("¡Hasta luego!");
                    console.log("👋 ¡Hasta luego!");
                    break;
                default:
                    alert("Opción no válida");
                    console.log("❌ Opción no válida");
            }
        }
    }
}

// ========================================
// EJECUCIÓN DEL PROGRAMA
// ========================================

// Comentar la siguiente línea si quieres usar el menú interactivo
// const interfaz = new InterfazUsuario();
// interfaz.ejecutar();

// Versión simplificada para demostración (como el código original)
console.log("=== DEMOSTRACIÓN DEL SISTEMA MEJORADO ===");

const sistema = new SistemaAutenticacion();

// Simular login como en el código original
const username = prompt("Ingrese su nombre de usuario:");
const password = prompt("Ingrese su contraseña:");

const resultado = sistema.autenticar(username, password);

if (resultado.exito) {
    alert(resultado.mensaje);
    console.log("✅ " + resultado.mensaje);
    console.log("\n--- TIMELINE ---");
    sistema.obtenerPosts().forEach(post => {
        console.log(post);
    });
} else {
    alert("❌ " + resultado.mensaje);
    console.log("❌ " + resultado.mensaje);
} 