// ============================================
// CONVERSOR TELEGRAM A BINARIO
// ============================================

class ConversorTelegramBinario {
    constructor() {
        this.selectedFile = null;
        this.binaryData = null;
        this.hexData = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        console.log('🚀 Conversor Telegram a Binario inicializado');
    }

    setupEventListeners() {
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');

        // Evento para selección de archivo
        fileInput.addEventListener('change', (e) => {
            this.handleFileSelect(e.target.files[0]);
        });

        // Eventos para drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileSelect(files[0]);
            }
        });
    }

    handleFileSelect(file) {
        if (!file) {
            this.showMessage('❌ No se seleccionó ningún archivo', 'error');
            return;
        }

        // Validar tamaño del archivo (máximo 100MB)
        const maxSize = 100 * 1024 * 1024; // 100MB
        if (file.size > maxSize) {
            this.showMessage('❌ El archivo es demasiado grande. Máximo 100MB', 'error');
            return;
        }

        this.selectedFile = file;
        this.displayFileInfo(file);
        document.getElementById('convertBtn').disabled = false;
        this.showMessage('✅ Archivo seleccionado correctamente', 'success');
    }

    displayFileInfo(file) {
        const fileInfo = document.getElementById('fileInfo');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const fileType = document.getElementById('fileType');

        fileName.textContent = file.name;
        fileSize.textContent = this.formatFileSize(file.size);
        fileType.textContent = file.type || 'Desconocido';

        fileInfo.style.display = 'block';
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    async convertToBinary() {
        if (!this.selectedFile) {
            this.showMessage('❌ No hay archivo seleccionado', 'error');
            return;
        }

        try {
            this.showProgress(true);
            this.updateProgress(0);

            // Leer el archivo como ArrayBuffer
            const arrayBuffer = await this.readFileAsArrayBuffer(this.selectedFile);
            
            this.updateProgress(50);

            // Convertir a binario y hexadecimal
            this.binaryData = this.arrayBufferToBinary(arrayBuffer);
            this.hexData = this.arrayBufferToHex(arrayBuffer);

            this.updateProgress(100);
            this.showProgress(false);

            // Mostrar resultado
            this.displayResult();
            this.showMessage('✅ Conversión completada exitosamente', 'success');

        } catch (error) {
            this.showProgress(false);
            this.showMessage(`❌ Error durante la conversión: ${error.message}`, 'error');
            console.error('Error en conversión:', error);
        }
    }

    readFileAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                resolve(e.target.result);
            };
            
            reader.onerror = (e) => {
                reject(new Error('Error al leer el archivo'));
            };
            
            reader.readAsArrayBuffer(file);
        });
    }

    arrayBufferToBinary(arrayBuffer) {
        const uint8Array = new Uint8Array(arrayBuffer);
        let binaryString = '';
        
        for (let i = 0; i < uint8Array.length; i++) {
            // Convertir cada byte a representación binaria de 8 bits
            const binary = uint8Array[i].toString(2).padStart(8, '0');
            binaryString += binary + ' ';
            
            // Agregar saltos de línea cada 8 bytes para mejor legibilidad
            if ((i + 1) % 8 === 0) {
                binaryString += '\n';
            }
        }
        
        return binaryString.trim();
    }

    arrayBufferToHex(arrayBuffer) {
        const uint8Array = new Uint8Array(arrayBuffer);
        let hexString = '';
        
        for (let i = 0; i < uint8Array.length; i++) {
            // Convertir cada byte a representación hexadecimal
            const hex = uint8Array[i].toString(16).padStart(2, '0');
            hexString += hex + ' ';
            
            // Agregar saltos de línea cada 16 bytes para mejor legibilidad
            if ((i + 1) % 16 === 0) {
                hexString += '\n';
            }
        }
        
        return hexString.trim();
    }

    displayResult() {
        const resultArea = document.getElementById('resultArea');
        const binaryOutput = document.getElementById('binaryOutput');
        
        // Mostrar una vista previa del resultado (primeros 1000 caracteres)
        const preview = this.binaryData.substring(0, 1000);
        const totalLength = this.binaryData.length;
        
        binaryOutput.textContent = `Vista previa (primeros 1000 caracteres de ${totalLength}):\n\n${preview}${totalLength > 1000 ? '\n\n... (archivo truncado para vista previa)' : ''}`;
        
        resultArea.style.display = 'block';
    }

    downloadBinary() {
        if (!this.binaryData) {
            this.showMessage('❌ No hay datos binarios para descargar', 'error');
            return;
        }

        this.downloadFile(this.binaryData, `${this.selectedFile.name}.bin`, 'text/plain');
        this.showMessage('✅ Archivo binario descargado', 'success');
    }

    downloadHex() {
        if (!this.hexData) {
            this.showMessage('❌ No hay datos hexadecimales para descargar', 'error');
            return;
        }

        this.downloadFile(this.hexData, `${this.selectedFile.name}.hex`, 'text/plain');
        this.showMessage('✅ Archivo hexadecimal descargado', 'success');
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
    }

    showProgress(show) {
        const progressBar = document.getElementById('progressBar');
        progressBar.style.display = show ? 'block' : 'none';
    }

    updateProgress(percentage) {
        const progressFill = document.getElementById('progressFill');
        progressFill.style.width = `${percentage}%`;
    }

    showMessage(message, type) {
        const messageArea = document.getElementById('messageArea');
        const messageDiv = document.createElement('div');
        messageDiv.className = type;
        messageDiv.textContent = message;
        
        messageArea.appendChild(messageDiv);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 5000);
    }

    // Métodos adicionales para análisis de archivos
    analyzeFileStructure(arrayBuffer) {
        const uint8Array = new Uint8Array(arrayBuffer);
        const analysis = {
            totalBytes: uint8Array.length,
            fileSignature: this.getFileSignature(uint8Array),
            commonPatterns: this.findCommonPatterns(uint8Array),
            entropy: this.calculateEntropy(uint8Array)
        };
        
        return analysis;
    }

    getFileSignature(uint8Array) {
        // Obtener los primeros bytes para identificar el tipo de archivo
        const signature = Array.from(uint8Array.slice(0, 8))
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join(' ');
        
        return signature;
    }

    findCommonPatterns(uint8Array) {
        const patterns = {};
        const chunkSize = 1000; // Analizar en chunks para archivos grandes
        
        for (let i = 0; i < Math.min(uint8Array.length, chunkSize); i++) {
            const byte = uint8Array[i];
            patterns[byte] = (patterns[byte] || 0) + 1;
        }
        
        // Ordenar por frecuencia
        return Object.entries(patterns)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([byte, count]) => ({ byte: `0x${parseInt(byte).toString(16).padStart(2, '0')}`, count }));
    }

    calculateEntropy(uint8Array) {
        // Calcular entropía de Shannon para medir la aleatoriedad
        const frequencies = new Array(256).fill(0);
        
        for (let i = 0; i < uint8Array.length; i++) {
            frequencies[uint8Array[i]]++;
        }
        
        let entropy = 0;
        const totalBytes = uint8Array.length;
        
        for (let i = 0; i < 256; i++) {
            if (frequencies[i] > 0) {
                const probability = frequencies[i] / totalBytes;
                entropy -= probability * Math.log2(probability);
            }
        }
        
        return entropy;
    }
}

// ============================================
// FUNCIONES GLOBALES PARA LA INTERFAZ
// ============================================

let conversor;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    conversor = new ConversorTelegramBinario();
});

// Función global para convertir a binario
function convertToBinary() {
    if (conversor) {
        conversor.convertToBinary();
    }
}

// Función global para descargar binario
function downloadBinary() {
    if (conversor) {
        conversor.downloadBinary();
    }
}

// Función global para descargar hexadecimal
function downloadHex() {
    if (conversor) {
        conversor.downloadHex();
    }
}

// ============================================
// UTILIDADES ADICIONALES
// ============================================

// Función para convertir texto a binario
function textToBinary(text) {
    return text.split('').map(char => 
        char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
}

// Función para convertir binario a texto
function binaryToText(binaryString) {
    const binaryArray = binaryString.replace(/\s/g, '').match(/.{1,8}/g);
    return binaryArray.map(binary => 
        String.fromCharCode(parseInt(binary, 2))
    ).join('');
}

// Función para analizar archivos de Telegram específicamente
function analyzeTelegramFile(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    const analysis = {
        isTelegramFile: false,
        fileType: 'unknown',
        metadata: {}
    };
    
    // Buscar firmas conocidas de archivos de Telegram
    const telegramSignatures = {
        // Documentos
        'PDF': [0x25, 0x50, 0x44, 0x46],
        'DOC': [0xD0, 0xCF, 0x11, 0xE0],
        'DOCX': [0x50, 0x4B, 0x03, 0x04],
        
        // Imágenes
        'JPEG': [0xFF, 0xD8, 0xFF],
        'PNG': [0x89, 0x50, 0x4E, 0x47],
        'GIF': [0x47, 0x49, 0x46],
        
        // Videos
        'MP4': [0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70],
        'AVI': [0x52, 0x49, 0x46, 0x46],
        
        // Audio
        'MP3': [0x49, 0x44, 0x33],
        'WAV': [0x52, 0x49, 0x46, 0x46]
    };
    
    // Verificar firmas
    for (const [type, signature] of Object.entries(telegramSignatures)) {
        if (this.matchesSignature(uint8Array, signature)) {
            analysis.isTelegramFile = true;
            analysis.fileType = type;
            break;
        }
    }
    
    return analysis;
}

// Función auxiliar para verificar firmas
function matchesSignature(uint8Array, signature) {
    if (uint8Array.length < signature.length) return false;
    
    for (let i = 0; i < signature.length; i++) {
        if (uint8Array[i] !== signature[i]) return false;
    }
    
    return true;
}

console.log('📚 Conversor Telegram a Binario cargado'); 