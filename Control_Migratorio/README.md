# 🛂 Sistema de Control Migratorio

Una aplicación web completa para gestionar entradas y salidas de personas en puntos de control migratorio.

## 📋 Características Principales

### ✅ Funcionalidades Core
- **Registro de Personas**: Captura completa de datos personales y de viaje
- **Control de Entradas/Salidas**: Registro de movimientos migratorios
- **Dashboard en Tiempo Real**: Estadísticas y monitoreo activo
- **Búsqueda Avanzada**: Filtros por múltiples criterios
- **Reportes Dinámicos**: Generación de informes por fecha, nacionalidad, motivo, etc.
- **Configuración del Sistema**: Personalización de parámetros

### 🎯 Módulos Principales

#### 1. **Dashboard**
- Estadísticas en tiempo real
- Vista general de todas las personas
- Filtros de búsqueda rápida
- Acciones directas (ver, editar, eliminar)

#### 2. **Registro de Personas**
- Formulario completo de datos personales
- Validación de campos requeridos
- Registro directo de entradas/salidas
- Prevención de duplicados

#### 3. **Búsqueda**
- Búsqueda por nombre, documento, nacionalidad
- Filtros avanzados
- Resultados en tiempo real
- Acceso rápido a detalles

#### 4. **Reportes**
- Entradas por fecha
- Salidas por fecha
- Estadísticas por nacionalidad
- Análisis por motivo de viaje
- Distribución por estado

#### 5. **Configuración**
- Personalización del sistema
- Gestión de datos
- Configuración de punto de control

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web
- Funciona completamente offline

### Instalación
```bash
# Clonar o descargar el proyecto
cd Control_Migratorio

# Abrir en el navegador
open index.html
```

### Uso Básico

#### 1. **Registrar una Persona**
1. Ir a la pestaña "Registro"
2. Completar todos los campos requeridos (*)
3. Hacer clic en "Registrar Persona"
4. La persona aparecerá en el dashboard

#### 2. **Registrar Entrada/Salida**
1. En la pestaña "Registro"
2. Ingresar el número de documento
3. Completar datos adicionales si es nueva persona
4. Hacer clic en "Registrar Entrada" o "Registrar Salida"

#### 3. **Buscar Personas**
1. Ir a la pestaña "Búsqueda"
2. Escribir en el campo de búsqueda
3. Los resultados se muestran automáticamente
4. Hacer clic en "Ver" para más detalles

#### 4. **Generar Reportes**
1. Ir a la pestaña "Reportes"
2. Seleccionar tipo de reporte
3. Elegir fecha (si aplica)
4. Hacer clic en "Generar Reporte"

## 📊 Estructura de Datos

### Persona
```javascript
{
    id: number,
    nombre: string,
    documento: string,
    tipoDocumento: string,
    nacionalidad: string,
    fechaNacimiento: string,
    genero: string,
    telefono: string,
    email: string,
    direccion: string,
    motivoViaje: string,
    duracionEstancia: string,
    observaciones: string,
    fechaRegistro: string,
    estado: 'entrada' | 'salida' | 'pendiente'
}
```

### Movimiento
```javascript
{
    id: number,
    personaId: number,
    tipo: 'entrada' | 'salida',
    fecha: string,
    observaciones: string
}
```

## 🎨 Interfaz de Usuario

### Diseño Responsivo
- Adaptable a diferentes tamaños de pantalla
- Navegación intuitiva por pestañas
- Iconos descriptivos de Font Awesome
- Gradientes y animaciones modernas

### Estados Visuales
- **Entrada**: Verde
- **Salida**: Rojo
- **Pendiente**: Amarillo

### Alertas y Notificaciones
- Mensajes de éxito/error
- Confirmaciones para acciones críticas
- Validación en tiempo real

## 🔧 Configuración

### Parámetros del Sistema
- **País de Origen**: Configuración del país donde opera el sistema
- **Punto de Control**: Nombre del punto de control migratorio
- **Usuario**: Usuario actual del sistema
- **Fecha del Sistema**: Configuración de fecha/hora

### Almacenamiento
- Datos guardados en localStorage del navegador
- Persistencia entre sesiones
- Backup automático de configuración

## 📈 Reportes Disponibles

### 1. **Entradas por Fecha**
- Lista de todas las entradas en una fecha específica
- Incluye datos completos de la persona
- Observaciones del movimiento

### 2. **Salidas por Fecha**
- Lista de todas las salidas en una fecha específica
- Información detallada del movimiento
- Datos de la persona

### 3. **Por Nacionalidad**
- Estadísticas de personas por país de origen
- Cantidad de personas por nacionalidad
- Distribución porcentual

### 4. **Por Motivo de Viaje**
- Análisis de motivos de entrada
- Turismo, negocios, trabajo, estudios, etc.
- Estadísticas de distribución

### 5. **Por Estado**
- Distribución de personas por estado actual
- Entrada, salida, pendiente
- Análisis de flujo migratorio

## 🛡️ Seguridad y Validación

### Validaciones Implementadas
- **Campos Requeridos**: Verificación de datos obligatorios
- **Documentos Únicos**: Prevención de duplicados
- **Fechas Válidas**: Validación de formatos de fecha
- **Emails Válidos**: Verificación de formato de email
- **Teléfonos**: Validación básica de formato

### Protección de Datos
- Datos almacenados localmente
- No se envían a servidores externos
- Confirmación para eliminación de datos
- Backup automático de configuración

## 🔄 Flujo de Trabajo

### Proceso de Registro
1. **Captura de Datos**: Formulario completo de información
2. **Validación**: Verificación de campos requeridos
3. **Almacenamiento**: Guardado en localStorage
4. **Actualización**: Dashboard actualizado automáticamente
5. **Confirmación**: Mensaje de éxito al usuario

### Proceso de Entrada/Salida
1. **Identificación**: Búsqueda por documento
2. **Verificación**: Confirmación de datos
3. **Registro**: Creación de movimiento
4. **Actualización**: Cambio de estado de la persona
5. **Confirmación**: Notificación al usuario

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos
- ✅ Desktop (1920x1080+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

## 🚀 Funcionalidades Avanzadas

### Búsqueda Inteligente
- Búsqueda en tiempo real
- Filtros múltiples
- Resultados ordenados
- Acceso rápido a detalles

### Dashboard Interactivo
- Estadísticas en tiempo real
- Gráficos de tendencias
- Alertas automáticas
- Filtros dinámicos

### Reportes Personalizados
- Múltiples formatos
- Exportación de datos
- Filtros avanzados
- Análisis estadísticos

## 🔧 Personalización

### Modificación de Campos
Para agregar nuevos campos al formulario:

1. **HTML**: Agregar campo en `index.html`
2. **JavaScript**: Actualizar `obtenerDatosFormulario()`
3. **Validación**: Agregar validación en `validarDatosPersona()`

### Nuevos Tipos de Reporte
Para crear nuevos reportes:

1. **Función**: Crear función en `ControlMigratorio`
2. **Switch**: Agregar caso en `generarReporte()`
3. **HTML**: Actualizar opciones del select

## 🐛 Solución de Problemas

### Problemas Comunes

#### **Los datos no se guardan**
- Verificar que localStorage esté habilitado
- Comprobar espacio disponible en el navegador
- Recargar la página

#### **La búsqueda no funciona**
- Verificar que el campo de búsqueda esté visible
- Comprobar que haya datos cargados
- Revisar la consola del navegador

#### **Los reportes no se generan**
- Verificar que se haya seleccionado un tipo de reporte
- Comprobar que haya datos para la fecha seleccionada
- Revisar que los campos estén completos

### Debugging
```javascript
// Verificar datos almacenados
console.log(localStorage.getItem('personas'));
console.log(localStorage.getItem('movimientos'));

// Verificar estado del sistema
console.log(controlMigratorio.personas);
console.log(controlMigratorio.movimientos);
```

## 📋 Roadmap

### Funcionalidades Futuras
- [ ] Exportación a Excel/PDF
- [ ] Búsqueda avanzada con filtros múltiples
- [ ] Edición de personas registradas
- [ ] Historial completo de movimientos
- [ ] Gráficos y visualizaciones
- [ ] Backup/restore de datos
- [ ] Múltiples puntos de control
- [ ] Autenticación de usuarios
- [ ] Sincronización con servidor
- [ ] API REST para integración

### Mejoras Técnicas
- [ ] Base de datos local (IndexedDB)
- [ ] Service Workers para offline
- [ ] PWA (Progressive Web App)
- [ ] TypeScript para mejor tipado
- [ ] Framework moderno (React/Vue)
- [ ] Testing automatizado

## 🤝 Contribuciones

### Cómo Contribuir
1. Fork el proyecto
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Push a la rama
5. Crear un Pull Request

### Estándares de Código
- Usar camelCase para variables y funciones
- Comentar funciones complejas
- Mantener consistencia en el estilo
- Seguir las mejores prácticas de JavaScript

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 📞 Soporte

### Contacto
- **Issues**: Crear issue en el repositorio
- **Documentación**: Revisar este README
- **Ejemplos**: Ver datos de ejemplo incluidos

### Recursos Adicionales
- [Documentación de localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Guía de JavaScript Moderno](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Buenas Prácticas de UX](https://www.nngroup.com/articles/)

---

**¡El Sistema de Control Migratorio está listo para usar! 🎉**

*Desarrollado con ❤️ para facilitar la gestión migratoria* 