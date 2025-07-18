# 🔄 Conversor Telegram a Binario

Este proyecto proporciona herramientas para convertir archivos de Telegram (documentos, imágenes, videos, etc.) a formato binario y hexadecimal.

## 📁 Estructura del Proyecto

```
Conversor_Telegram_Binario/
├── index.html          # Interfaz web
├── conversor.js        # Lógica JavaScript
├── conversor_python.py # Script Python avanzado
└── README.md          # Este archivo
```

## 🚀 Características

### ✅ Funcionalidades Principales
- **Conversión a Binario**: Transforma archivos a representación binaria
- **Conversión a Hexadecimal**: Genera representación hexadecimal
- **Análisis de Archivos**: Detecta tipo de archivo y calcula estadísticas
- **Interfaz Web**: Aplicación web moderna y responsive
- **Script Python**: Versión de línea de comandos con análisis avanzado

### 🔧 Características Técnicas
- Soporte para archivos hasta 100MB
- Detección automática de tipos de archivo
- Cálculo de hashes MD5 y SHA256
- Análisis de entropía de datos
- Identificación de patrones comunes
- Drag & Drop para archivos

## 🌐 Uso de la Interfaz Web

### 1. Abrir la Aplicación
```bash
# Navegar al directorio
cd Conversor_Telegram_Binario

# Abrir en el navegador
open index.html
```

### 2. Seleccionar Archivo
- **Opción A**: Hacer clic en "Seleccionar Archivo"
- **Opción B**: Arrastrar y soltar el archivo en el área designada

### 3. Convertir
- Hacer clic en "Convertir a Binario"
- Esperar a que se complete el proceso
- Ver la vista previa del resultado

### 4. Descargar Resultados
- **Descargar Binario**: Archivo con representación binaria
- **Descargar Hexadecimal**: Archivo con representación hexadecimal

## 🐍 Uso del Script Python

### Instalación
```bash
# Verificar que Python 3 esté instalado
python3 --version

# El script no requiere dependencias adicionales
```

### Uso Básico
```bash
# Convertir archivo a binario
python3 conversor_python.py archivo.pdf

# Convertir a hexadecimal
python3 conversor_python.py imagen.jpg --formato hex

# Guardar en directorio específico
python3 conversor_python.py documento.docx --salida ./resultados/

# Mostrar análisis detallado
python3 conversor_python.py video.mp4 --analizar
```

### Opciones Disponibles
```bash
python3 conversor_python.py --help
```

**Opciones:**
- `archivo`: Ruta al archivo a convertir (requerido)
- `--formato`: Formato de salida (`binario`, `hex`, `json`)
- `--salida`: Directorio de salida (por defecto: `./`)
- `--analizar`: Mostrar análisis detallado del archivo

## 📊 Tipos de Archivo Soportados

### Documentos
- PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX
- TXT, RTF, ODT, ODS, ODP

### Imágenes
- JPEG, PNG, GIF, BMP, TIFF, WebP
- SVG, ICO, RAW

### Videos
- MP4, AVI, MKV, MOV, WMV, FLV
- WebM, 3GP, MPEG

### Audio
- MP3, WAV, OGG, FLAC, AAC
- WMA, M4A, AIFF

### Otros
- ZIP, RAR, 7Z, TAR, GZ
- Cualquier archivo binario

## 🔍 Análisis de Archivos

### Información Proporcionada
- **Tamaño del archivo** en bytes
- **Tipo de archivo** detectado automáticamente
- **Firma hexadecimal** de los primeros bytes
- **Hashes MD5 y SHA256** para verificación
- **Entropía de datos** (medida de aleatoriedad)
- **Estadísticas de bytes** (ceros, valores min/max, promedio)
- **Patrones más comunes** en los datos

### Ejemplo de Salida
```
==================================================
📊 ANÁLISIS DEL ARCHIVO
==================================================
📁 Nombre: documento.pdf
📏 Tamaño: 2.45 MB
🏷️ Tipo: PDF
🔍 Firma: 25 50 44 46 2d 31 2e 34
📈 Entropía: 7.85 bits

🔐 HASHES:
   MD5: a1b2c3d4e5f678901234567890123456
   SHA256: abc123def456...

📊 ESTADÍSTICAS:
   Bytes cero: 1,234
   Bytes no cero: 2,567,890
   Valor mínimo: 0
   Valor máximo: 255
   Promedio: 127.45
   Bytes ASCII: 45,678

🎯 PATRONES MÁS COMUNES:
   1. 0x00: 1234 veces (0.5%)
   2. 0xff: 987 veces (0.4%)
   3. 0x20: 456 veces (0.2%)
```

## 🛠️ Desarrollo

### Estructura del Código JavaScript
```javascript
class ConversorTelegramBinario {
    // Métodos principales:
    - handleFileSelect()     // Manejo de archivos
    - convertToBinary()      // Conversión principal
    - arrayBufferToBinary()  // Conversión a binario
    - arrayBufferToHex()     // Conversión a hexadecimal
    - analyzeFileStructure() // Análisis de archivos
}
```

### Estructura del Código Python
```python
class ConversorTelegramBinario:
    # Métodos principales:
    - cargar_archivo()       # Carga de archivos
    - convertir_a_binario()  # Conversión principal
    - bytes_a_binario()      # Conversión a binario
    - bytes_a_hexadecimal()  # Conversión a hexadecimal
    - analizar_archivo()     # Análisis completo
```

## 🔧 Personalización

### Agregar Nuevos Tipos de Archivo
En `conversor_python.py`, agregar firmas en `self.firmas_archivos`:
```python
self.firmas_archivos = {
    # ... firmas existentes ...
    b'NUEVA_FIRMA': 'NUEVO_TIPO',
}
```

### Modificar Límites
```python
# Cambiar límite de tamaño (por defecto: 100MB)
max_size = 200 * 1024 * 1024  # 200MB

# Cambiar límite de análisis
limite = 2000  # Analizar más bytes
```

## ⚠️ Consideraciones

### Limitaciones
- **Tamaño máximo**: 100MB por archivo
- **Memoria**: Archivos grandes pueden consumir mucha RAM
- **Navegador**: Algunos navegadores tienen límites de memoria

### Rendimiento
- **Archivos pequeños** (< 1MB): Conversión instantánea
- **Archivos medianos** (1-10MB): Pocos segundos
- **Archivos grandes** (10-100MB): Puede tomar varios segundos

### Seguridad
- Los archivos se procesan localmente
- No se envían datos a servidores externos
- Se recomienda verificar archivos antes de procesar

## 🐛 Solución de Problemas

### Error: "Archivo demasiado grande"
```bash
# Usar el script Python para archivos grandes
python3 conversor_python.py archivo_grande.zip
```

### Error: "No se puede leer el archivo"
- Verificar permisos del archivo
- Asegurar que el archivo no esté corrupto
- Intentar con un archivo diferente

### Error: "Memoria insuficiente"
- Cerrar otras aplicaciones
- Usar archivos más pequeños
- Usar el script Python en lugar de la web

## 📝 Ejemplos de Uso

### Conversión Básica
```bash
# Archivo de imagen
python3 conversor_python.py foto.jpg

# Archivo de documento
python3 conversor_python.py documento.pdf --formato hex

# Archivo de video
python3 conversor_python.py video.mp4 --analizar
```

### Análisis Avanzado
```bash
# Análisis completo con salida JSON
python3 conversor_python.py archivo.zip --formato json --analizar

# Guardar en directorio específico
python3 conversor_python.py archivo.txt --salida ./analisis/
```

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Push a la rama
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisar la documentación
2. Verificar los logs de error
3. Probar con archivos diferentes
4. Crear un issue en el repositorio

---

**¡Disfruta convirtiendo tus archivos de Telegram a binario! 🎉** 