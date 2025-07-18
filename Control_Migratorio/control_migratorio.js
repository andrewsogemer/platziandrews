// ============================================
// SISTEMA DE CONTROL MIGRATORIO
// ============================================

class ControlMigratorio {
    constructor() {
        this.personas = [];
        this.movimientos = [];
        this.configuracion = {
            paisOrigen: 'México',
            puntoControl: 'Aeropuerto Internacional',
            usuario: 'Admin',
            fechaSistema: new Date().toISOString().slice(0, 16)
        };
        this.init();
    }

    init() {
        this.cargarDatos();
        this.actualizarDashboard();
        this.setupEventListeners();
        console.log('🚀 Sistema de Control Migratorio inicializado');
    }

    setupEventListeners() {
        // Formulario de registro
        const registroForm = document.getElementById('registroForm');
        if (registroForm) {
            registroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.registrarPersona();
            });
        }

        // Configurar fecha del sistema
        const fechaSistema = document.getElementById('fechaSistema');
        if (fechaSistema) {
            fechaSistema.value = this.configuracion.fechaSistema;
        }
    }

    // ============================================
    // GESTIÓN DE DATOS
    // ============================================

    cargarDatos() {
        // Cargar datos del localStorage
        const personasGuardadas = localStorage.getItem('personas');
        const movimientosGuardados = localStorage.getItem('movimientos');
        const configGuardada = localStorage.getItem('configuracion');

        if (personasGuardadas) {
            this.personas = JSON.parse(personasGuardadas);
        }

        if (movimientosGuardados) {
            this.movimientos = JSON.parse(movimientosGuardados);
        }

        if (configGuardada) {
            this.configuracion = { ...this.configuracion, ...JSON.parse(configGuardada) };
        }

        // Si no hay datos, crear algunos de ejemplo
        if (this.personas.length === 0) {
            this.crearDatosEjemplo();
        }
    }

    guardarDatos() {
        localStorage.setItem('personas', JSON.stringify(this.personas));
        localStorage.setItem('movimientos', JSON.stringify(this.movimientos));
        localStorage.setItem('configuracion', JSON.stringify(this.configuracion));
    }

    crearDatosEjemplo() {
        const personasEjemplo = [
            {
                id: 1,
                nombre: 'Juan Carlos Pérez',
                documento: 'ABC123456',
                tipoDocumento: 'pasaporte',
                nacionalidad: 'España',
                fechaNacimiento: '1985-03-15',
                genero: 'masculino',
                telefono: '+34 123 456 789',
                email: 'juan.perez@email.com',
                direccion: 'Calle Mayor 123, Madrid',
                motivoViaje: 'turismo',
                duracionEstancia: '15 días',
                observaciones: 'Primera visita al país',
                fechaRegistro: new Date().toISOString(),
                estado: 'entrada'
            },
            {
                id: 2,
                nombre: 'María González',
                documento: 'XYZ789012',
                tipoDocumento: 'dni',
                nacionalidad: 'Argentina',
                fechaNacimiento: '1990-07-22',
                genero: 'femenino',
                telefono: '+54 11 1234 5678',
                email: 'maria.gonzalez@email.com',
                direccion: 'Av. Corrientes 456, Buenos Aires',
                motivoViaje: 'negocios',
                duracionEstancia: '30 días',
                observaciones: 'Viaje de trabajo',
                fechaRegistro: new Date().toISOString(),
                estado: 'salida'
            },
            {
                id: 3,
                nombre: 'Carlos Silva',
                documento: 'DEF456789',
                tipoDocumento: 'visa',
                nacionalidad: 'Brasil',
                fechaNacimiento: '1988-11-08',
                genero: 'masculino',
                telefono: '+55 11 98765 4321',
                email: 'carlos.silva@email.com',
                direccion: 'Rua das Flores 789, São Paulo',
                motivoViaje: 'estudios',
                duracionEstancia: '6 meses',
                observaciones: 'Estudiante de intercambio',
                fechaRegistro: new Date().toISOString(),
                estado: 'pendiente'
            }
        ];

        const movimientosEjemplo = [
            {
                id: 1,
                personaId: 1,
                tipo: 'entrada',
                fecha: new Date().toISOString(),
                observaciones: 'Entrada por aeropuerto'
            },
            {
                id: 2,
                personaId: 2,
                tipo: 'salida',
                fecha: new Date().toISOString(),
                observaciones: 'Salida por aeropuerto'
            }
        ];

        this.personas = personasEjemplo;
        this.movimientos = movimientosEjemplo;
        this.guardarDatos();
    }

    // ============================================
    // GESTIÓN DE PERSONAS
    // ============================================

    registrarPersona() {
        const formData = this.obtenerDatosFormulario();
        
        if (!this.validarDatosPersona(formData)) {
            return;
        }

        const nuevaPersona = {
            id: this.generarId(),
            ...formData,
            fechaRegistro: new Date().toISOString(),
            estado: 'pendiente'
        };

        this.personas.push(nuevaPersona);
        this.guardarDatos();
        this.actualizarDashboard();
        this.mostrarAlerta('Persona registrada exitosamente', 'success');
        this.limpiarFormulario();
    }

    obtenerDatosFormulario() {
        return {
            nombre: document.getElementById('nombre').value,
            documento: document.getElementById('documento').value,
            tipoDocumento: document.getElementById('tipoDocumento').value,
            nacionalidad: document.getElementById('nacionalidad').value,
            fechaNacimiento: document.getElementById('fechaNacimiento').value,
            genero: document.getElementById('genero').value,
            telefono: document.getElementById('telefono').value,
            email: document.getElementById('email').value,
            direccion: document.getElementById('direccion').value,
            motivoViaje: document.getElementById('motivoViaje').value,
            duracionEstancia: document.getElementById('duracionEstancia').value,
            observaciones: document.getElementById('observaciones').value
        };
    }

    validarDatosPersona(datos) {
        const camposRequeridos = ['nombre', 'documento', 'tipoDocumento', 'nacionalidad', 'fechaNacimiento', 'genero', 'motivoViaje'];
        
        for (const campo of camposRequeridos) {
            if (!datos[campo]) {
                this.mostrarAlerta(`El campo ${campo} es requerido`, 'danger');
                return false;
            }
        }

        // Verificar si el documento ya existe
        const documentoExiste = this.personas.find(p => p.documento === datos.documento);
        if (documentoExiste) {
            this.mostrarAlerta('Ya existe una persona con este documento', 'danger');
            return false;
        }

        return true;
    }

    registrarEntrada() {
        const formData = this.obtenerDatosFormulario();
        
        if (!this.validarDatosPersona(formData)) {
            return;
        }

        // Buscar si la persona ya existe
        let persona = this.personas.find(p => p.documento === formData.documento);
        
        if (!persona) {
            // Crear nueva persona
            persona = {
                id: this.generarId(),
                ...formData,
                fechaRegistro: new Date().toISOString(),
                estado: 'entrada'
            };
            this.personas.push(persona);
        } else {
            // Actualizar estado
            persona.estado = 'entrada';
        }

        // Registrar movimiento
        const movimiento = {
            id: this.generarId(),
            personaId: persona.id,
            tipo: 'entrada',
            fecha: new Date().toISOString(),
            observaciones: formData.observaciones || 'Entrada registrada'
        };

        this.movimientos.push(movimiento);
        this.guardarDatos();
        this.actualizarDashboard();
        this.mostrarAlerta('Entrada registrada exitosamente', 'success');
        this.limpiarFormulario();
    }

    registrarSalida() {
        const documento = document.getElementById('documento').value;
        
        if (!documento) {
            this.mostrarAlerta('Debe ingresar un número de documento', 'danger');
            return;
        }

        const persona = this.personas.find(p => p.documento === documento);
        
        if (!persona) {
            this.mostrarAlerta('No se encontró una persona con este documento', 'danger');
            return;
        }

        persona.estado = 'salida';

        // Registrar movimiento
        const movimiento = {
            id: this.generarId(),
            personaId: persona.id,
            tipo: 'salida',
            fecha: new Date().toISOString(),
            observaciones: document.getElementById('observaciones').value || 'Salida registrada'
        };

        this.movimientos.push(movimiento);
        this.guardarDatos();
        this.actualizarDashboard();
        this.mostrarAlerta('Salida registrada exitosamente', 'success');
        this.limpiarFormulario();
    }

    // ============================================
    // DASHBOARD
    // ============================================

    actualizarDashboard() {
        this.actualizarEstadisticas();
        this.actualizarTablaDashboard();
    }

    actualizarEstadisticas() {
        const hoy = new Date().toDateString();
        
        const totalPersonas = this.personas.length;
        const entradasHoy = this.movimientos.filter(m => 
            m.tipo === 'entrada' && new Date(m.fecha).toDateString() === hoy
        ).length;
        const salidasHoy = this.movimientos.filter(m => 
            m.tipo === 'salida' && new Date(m.fecha).toDateString() === hoy
        ).length;
        const pendientes = this.personas.filter(p => p.estado === 'pendiente').length;

        document.getElementById('totalPersonas').textContent = totalPersonas;
        document.getElementById('entradasHoy').textContent = entradasHoy;
        document.getElementById('salidasHoy').textContent = salidasHoy;
        document.getElementById('pendientes').textContent = pendientes;
    }

    actualizarTablaDashboard() {
        const tabla = document.getElementById('dashboardTable');
        if (!tabla) return;

        tabla.innerHTML = '';

        this.personas.forEach(persona => {
            const ultimoMovimiento = this.obtenerUltimoMovimiento(persona.id);
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${persona.nombre}</td>
                <td>${persona.documento}</td>
                <td>${persona.nacionalidad}</td>
                <td><span class="status-badge status-${persona.estado}">${persona.estado}</span></td>
                <td>${ultimoMovimiento ? this.formatearFecha(ultimoMovimiento.fecha) : 'Sin movimientos'}</td>
                <td>
                    <button class="btn btn-primary" onclick="verDetalles(${persona.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-warning" onclick="editarPersona(${persona.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger" onclick="eliminarPersona(${persona.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            
            tabla.appendChild(row);
        });
    }

    // ============================================
    // BÚSQUEDA
    // ============================================

    searchPersonas() {
        const termino = document.getElementById('searchInput').value.toLowerCase();
        const resultados = this.personas.filter(persona => 
            persona.nombre.toLowerCase().includes(termino) ||
            persona.documento.toLowerCase().includes(termino) ||
            persona.nacionalidad.toLowerCase().includes(termino)
        );

        this.mostrarResultadosBusqueda(resultados);
    }

    mostrarResultadosBusqueda(personas) {
        const tabla = document.getElementById('searchTable');
        if (!tabla) return;

        tabla.innerHTML = '';

        personas.forEach(persona => {
            const ultimoMovimiento = this.obtenerUltimoMovimiento(persona.id);
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${persona.nombre}</td>
                <td>${persona.documento}</td>
                <td>${persona.nacionalidad}</td>
                <td><span class="status-badge status-${persona.estado}">${persona.estado}</span></td>
                <td>${ultimoMovimiento ? this.formatearFecha(ultimoMovimiento.fecha) : 'Sin movimientos'}</td>
                <td>
                    <button class="btn btn-primary" onclick="verDetalles(${persona.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-warning" onclick="editarPersona(${persona.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
            `;
            
            tabla.appendChild(row);
        });
    }

    // ============================================
    // REPORTES
    // ============================================

    generarReporte() {
        const tipo = document.getElementById('reporteTipo').value;
        const fecha = document.getElementById('reporteFecha').value;
        
        let datos = [];
        
        switch (tipo) {
            case 'entradas':
                datos = this.obtenerEntradasPorFecha(fecha);
                break;
            case 'salidas':
                datos = this.obtenerSalidasPorFecha(fecha);
                break;
            case 'nacionalidad':
                datos = this.obtenerPorNacionalidad();
                break;
            case 'motivo':
                datos = this.obtenerPorMotivo();
                break;
            case 'estado':
                datos = this.obtenerPorEstado();
                break;
        }

        this.mostrarReporte(tipo, datos);
    }

    obtenerEntradasPorFecha(fecha) {
        return this.movimientos.filter(m => 
            m.tipo === 'entrada' && 
            new Date(m.fecha).toDateString() === new Date(fecha).toDateString()
        ).map(m => {
            const persona = this.personas.find(p => p.id === m.personaId);
            return { ...m, persona };
        });
    }

    obtenerSalidasPorFecha(fecha) {
        return this.movimientos.filter(m => 
            m.tipo === 'salida' && 
            new Date(m.fecha).toDateString() === new Date(fecha).toDateString()
        ).map(m => {
            const persona = this.personas.find(p => p.id === m.personaId);
            return { ...m, persona };
        });
    }

    obtenerPorNacionalidad() {
        const nacionalidades = {};
        this.personas.forEach(persona => {
            nacionalidades[persona.nacionalidad] = (nacionalidades[persona.nacionalidad] || 0) + 1;
        });
        return Object.entries(nacionalidades).map(([nacionalidad, cantidad]) => ({
            nacionalidad,
            cantidad
        }));
    }

    obtenerPorMotivo() {
        const motivos = {};
        this.personas.forEach(persona => {
            motivos[persona.motivoViaje] = (motivos[persona.motivoViaje] || 0) + 1;
        });
        return Object.entries(motivos).map(([motivo, cantidad]) => ({
            motivo,
            cantidad
        }));
    }

    obtenerPorEstado() {
        const estados = {};
        this.personas.forEach(persona => {
            estados[persona.estado] = (estados[persona.estado] || 0) + 1;
        });
        return Object.entries(estados).map(([estado, cantidad]) => ({
            estado,
            cantidad
        }));
    }

    mostrarReporte(tipo, datos) {
        const contenedor = document.getElementById('reporteResultado');
        if (!contenedor) return;

        let html = `<h3>Reporte: ${tipo}</h3>`;
        
        if (datos.length === 0) {
            html += '<p>No hay datos para mostrar</p>';
        } else {
            html += '<table class="table"><thead><tr>';
            
            // Crear encabezados según el tipo de reporte
            switch (tipo) {
                case 'entradas':
                case 'salidas':
                    html += '<th>Nombre</th><th>Documento</th><th>Nacionalidad</th><th>Fecha</th><th>Observaciones</th>';
                    break;
                case 'nacionalidad':
                    html += '<th>Nacionalidad</th><th>Cantidad</th>';
                    break;
                case 'motivo':
                    html += '<th>Motivo</th><th>Cantidad</th>';
                    break;
                case 'estado':
                    html += '<th>Estado</th><th>Cantidad</th>';
                    break;
            }
            
            html += '</tr></thead><tbody>';
            
            datos.forEach(item => {
                html += '<tr>';
                switch (tipo) {
                    case 'entradas':
                    case 'salidas':
                        html += `
                            <td>${item.persona.nombre}</td>
                            <td>${item.persona.documento}</td>
                            <td>${item.persona.nacionalidad}</td>
                            <td>${this.formatearFecha(item.fecha)}</td>
                            <td>${item.observaciones}</td>
                        `;
                        break;
                    case 'nacionalidad':
                        html += `<td>${item.nacionalidad}</td><td>${item.cantidad}</td>`;
                        break;
                    case 'motivo':
                        html += `<td>${item.motivo}</td><td>${item.cantidad}</td>`;
                        break;
                    case 'estado':
                        html += `<td>${item.estado}</td><td>${item.cantidad}</td>`;
                        break;
                }
                html += '</tr>';
            });
            
            html += '</tbody></table>';
        }
        
        contenedor.innerHTML = html;
    }

    // ============================================
    // UTILIDADES
    // ============================================

    generarId() {
        return Date.now() + Math.random();
    }

    obtenerUltimoMovimiento(personaId) {
        const movimientosPersona = this.movimientos.filter(m => m.personaId === personaId);
        return movimientosPersona.length > 0 ? 
            movimientosPersona.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0] : 
            null;
    }

    formatearFecha(fecha) {
        return new Date(fecha).toLocaleString('es-ES');
    }

    limpiarFormulario() {
        const form = document.getElementById('registroForm');
        if (form) {
            form.reset();
        }
    }

    mostrarAlerta(mensaje, tipo) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-${tipo}`;
        alerta.textContent = mensaje;
        
        const container = document.querySelector('.container');
        container.insertBefore(alerta, container.firstChild);
        
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

    verDetalles(personaId) {
        const persona = this.personas.find(p => p.id === personaId);
        if (!persona) return;

        const movimientos = this.movimientos.filter(m => m.personaId === personaId);
        
        const modal = document.getElementById('personaModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        modalTitle.textContent = `Detalles de ${persona.nombre}`;
        
        modalContent.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h4>Información Personal</h4>
                <p><strong>Nombre:</strong> ${persona.nombre}</p>
                <p><strong>Documento:</strong> ${persona.documento} (${persona.tipoDocumento})</p>
                <p><strong>Nacionalidad:</strong> ${persona.nacionalidad}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${persona.fechaNacimiento}</p>
                <p><strong>Género:</strong> ${persona.genero}</p>
                <p><strong>Teléfono:</strong> ${persona.telefono || 'No especificado'}</p>
                <p><strong>Email:</strong> ${persona.email || 'No especificado'}</p>
                <p><strong>Dirección:</strong> ${persona.direccion || 'No especificada'}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4>Información del Viaje</h4>
                <p><strong>Motivo:</strong> ${persona.motivoViaje}</p>
                <p><strong>Duración:</strong> ${persona.duracionEstancia || 'No especificada'}</p>
                <p><strong>Estado:</strong> <span class="status-badge status-${persona.estado}">${persona.estado}</span></p>
                <p><strong>Observaciones:</strong> ${persona.observaciones || 'Sin observaciones'}</p>
            </div>
            
            <div>
                <h4>Historial de Movimientos</h4>
                ${movimientos.length > 0 ? 
                    `<table class="table">
                        <thead>
                            <tr><th>Tipo</th><th>Fecha</th><th>Observaciones</th></tr>
                        </thead>
                        <tbody>
                            ${movimientos.map(m => `
                                <tr>
                                    <td><span class="status-badge status-${m.tipo}">${m.tipo}</span></td>
                                    <td>${this.formatearFecha(m.fecha)}</td>
                                    <td>${m.observaciones}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>` : 
                    '<p>No hay movimientos registrados</p>'
                }
            </div>
        `;
        
        modal.style.display = 'block';
    }

    closeModal() {
        const modal = document.getElementById('personaModal');
        modal.style.display = 'none';
    }

    guardarConfiguracion() {
        this.configuracion.paisOrigen = document.getElementById('paisOrigen').value;
        this.configuracion.puntoControl = document.getElementById('puntoControl').value;
        this.configuracion.usuario = document.getElementById('usuario').value;
        this.configuracion.fechaSistema = document.getElementById('fechaSistema').value;
        
        this.guardarDatos();
        this.mostrarAlerta('Configuración guardada exitosamente', 'success');
    }

    resetearDatos() {
        if (confirm('¿Está seguro de que desea eliminar todos los datos? Esta acción no se puede deshacer.')) {
            this.personas = [];
            this.movimientos = [];
            this.guardarDatos();
            this.actualizarDashboard();
            this.mostrarAlerta('Datos reseteados exitosamente', 'success');
        }
    }
}

// ============================================
// FUNCIONES GLOBALES
// ============================================

let controlMigratorio;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    controlMigratorio = new ControlMigratorio();
});

// Funciones para las pestañas
function showTab(tabName) {
    // Ocultar todas las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.add('hidden'));
    
    // Remover clase active de todos los botones
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.remove('hidden');
    
    // Agregar clase active al botón seleccionado
    event.target.classList.add('active');
    
    // Actualizar dashboard si es necesario
    if (tabName === 'dashboard') {
        controlMigratorio.actualizarDashboard();
    }
}

// Funciones para el dashboard
function searchDashboard() {
    const termino = document.getElementById('searchDashboard').value.toLowerCase();
    const personasFiltradas = controlMigratorio.personas.filter(persona => 
        persona.nombre.toLowerCase().includes(termino) ||
        persona.documento.toLowerCase().includes(termino) ||
        persona.nacionalidad.toLowerCase().includes(termino)
    );
    
    const tabla = document.getElementById('dashboardTable');
    if (!tabla) return;

    tabla.innerHTML = '';

    personasFiltradas.forEach(persona => {
        const ultimoMovimiento = controlMigratorio.obtenerUltimoMovimiento(persona.id);
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.documento}</td>
            <td>${persona.nacionalidad}</td>
            <td><span class="status-badge status-${persona.estado}">${persona.estado}</span></td>
            <td>${ultimoMovimiento ? controlMigratorio.formatearFecha(ultimoMovimiento.fecha) : 'Sin movimientos'}</td>
            <td>
                <button class="btn btn-primary" onclick="verDetalles(${persona.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-warning" onclick="editarPersona(${persona.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger" onclick="eliminarPersona(${persona.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        tabla.appendChild(row);
    });
}

function refreshDashboard() {
    controlMigratorio.actualizarDashboard();
}

// Funciones para registro
function registrarEntrada() {
    controlMigratorio.registrarEntrada();
}

function registrarSalida() {
    controlMigratorio.registrarSalida();
}

// Funciones para búsqueda
function searchPersonas() {
    controlMigratorio.searchPersonas();
}

function advancedSearch() {
    // Implementar búsqueda avanzada
    alert('Búsqueda avanzada - Funcionalidad en desarrollo');
}

// Funciones para reportes
function generarReporte() {
    controlMigratorio.generarReporte();
}

function exportarExcel() {
    // Implementar exportación a Excel
    alert('Exportar Excel - Funcionalidad en desarrollo');
}

// Funciones para configuración
function guardarConfiguracion() {
    controlMigratorio.guardarConfiguracion();
}

function resetearDatos() {
    controlMigratorio.resetearDatos();
}

// Funciones para acciones
function verDetalles(personaId) {
    controlMigratorio.verDetalles(personaId);
}

function editarPersona(personaId) {
    // Implementar edición de persona
    alert('Editar persona - Funcionalidad en desarrollo');
}

function eliminarPersona(personaId) {
    if (confirm('¿Está seguro de que desea eliminar esta persona?')) {
        controlMigratorio.personas = controlMigratorio.personas.filter(p => p.id !== personaId);
        controlMigratorio.movimientos = controlMigratorio.movimientos.filter(m => m.personaId !== personaId);
        controlMigratorio.guardarDatos();
        controlMigratorio.actualizarDashboard();
        controlMigratorio.mostrarAlerta('Persona eliminada exitosamente', 'success');
    }
}

function closeModal() {
    controlMigratorio.closeModal();
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('personaModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

console.log('📋 Sistema de Control Migratorio cargado'); 