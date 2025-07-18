#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Conversor Telegram a Binario - Versión Python
=============================================

Este script permite convertir archivos de Telegram a formato binario
con funcionalidades avanzadas de análisis y procesamiento.
"""

import os
import sys
import argparse
import hashlib
import binascii
from pathlib import Path
from typing import Dict, List, Tuple, Optional
import struct
import json
from datetime import datetime

class ConversorTelegramBinario:
    """Clase principal para convertir archivos de Telegram a binario"""
    
    def __init__(self):
        self.archivo_entrada = None
        self.datos_binarios = None
        self.datos_hex = None
        self.analisis = {}
        
        # Firmas conocidas de archivos
        self.firmas_archivos = {
            # Documentos
            b'%PDF': 'PDF',
            b'\xD0\xCF\x11\xE0': 'DOC',
            b'PK\x03\x04': 'DOCX',
            b'PK\x05\x06': 'DOCX',
            
            # Imágenes
            b'\xFF\xD8\xFF': 'JPEG',
            b'\x89PNG\r\n\x1A\n': 'PNG',
            b'GIF87a': 'GIF',
            b'GIF89a': 'GIF',
            b'BM': 'BMP',
            b'II*\x00': 'TIFF',
            b'MM\x00*': 'TIFF',
            
            # Videos
            b'\x00\x00\x00\x18ftyp': 'MP4',
            b'RIFF': 'AVI',
            b'\x1A\x45\xDF\xA3': 'MKV',
            b'\x00\x00\x01\xB3': 'MPEG',
            
            # Audio
            b'ID3': 'MP3',
            b'RIFF': 'WAV',
            b'OggS': 'OGG',
            b'fLaC': 'FLAC',
            
            # Archivos de Telegram específicos
            b'TG': 'Telegram',
            b'TLG': 'Telegram',
        }
    
    def cargar_archivo(self, ruta_archivo: str) -> bool:
        """
        Carga un archivo desde la ruta especificada
        
        Args:
            ruta_archivo: Ruta al archivo a cargar
            
        Returns:
            bool: True si se cargó correctamente, False en caso contrario
        """
        try:
            if not os.path.exists(ruta_archivo):
                print(f"❌ Error: El archivo '{ruta_archivo}' no existe")
                return False
            
            self.archivo_entrada = Path(ruta_archivo)
            
            # Verificar tamaño del archivo
            tamano = self.archivo_entrada.stat().st_size
            if tamano > 100 * 1024 * 1024:  # 100MB
                print(f"⚠️ Advertencia: El archivo es muy grande ({self.formatear_tamano(tamano)})")
            
            print(f"✅ Archivo cargado: {self.archivo_entrada.name}")
            print(f"📊 Tamaño: {self.formatear_tamano(tamano)}")
            
            return True
            
        except Exception as e:
            print(f"❌ Error al cargar el archivo: {e}")
            return False
    
    def convertir_a_binario(self) -> bool:
        """
        Convierte el archivo cargado a formato binario
        
        Returns:
            bool: True si la conversión fue exitosa
        """
        try:
            if not self.archivo_entrada:
                print("❌ Error: No hay archivo cargado")
                return False
            
            print("🔄 Convirtiendo archivo a binario...")
            
            # Leer archivo como bytes
            with open(self.archivo_entrada, 'rb') as f:
                datos_bytes = f.read()
            
            # Convertir a representación binaria
            self.datos_binarios = self.bytes_a_binario(datos_bytes)
            
            # Convertir a representación hexadecimal
            self.datos_hex = self.bytes_a_hexadecimal(datos_bytes)
            
            # Realizar análisis del archivo
            self.analizar_archivo(datos_bytes)
            
            print("✅ Conversión completada exitosamente")
            return True
            
        except Exception as e:
            print(f"❌ Error durante la conversión: {e}")
            return False
    
    def bytes_a_binario(self, datos_bytes: bytes) -> str:
        """
        Convierte bytes a representación binaria
        
        Args:
            datos_bytes: Datos en bytes
            
        Returns:
            str: Representación binaria del archivo
        """
        resultado = []
        
        for i, byte in enumerate(datos_bytes):
            # Convertir cada byte a binario de 8 bits
            binario = format(byte, '08b')
            resultado.append(binario)
            
            # Agregar saltos de línea cada 8 bytes
            if (i + 1) % 8 == 0:
                resultado.append('\n')
            else:
                resultado.append(' ')
        
        return ''.join(resultado).strip()
    
    def bytes_a_hexadecimal(self, datos_bytes: bytes) -> str:
        """
        Convierte bytes a representación hexadecimal
        
        Args:
            datos_bytes: Datos en bytes
            
        Returns:
            str: Representación hexadecimal del archivo
        """
        resultado = []
        
        for i, byte in enumerate(datos_bytes):
            # Convertir cada byte a hexadecimal
            hex_byte = format(byte, '02x')
            resultado.append(hex_byte)
            
            # Agregar saltos de línea cada 16 bytes
            if (i + 1) % 16 == 0:
                resultado.append('\n')
            else:
                resultado.append(' ')
        
        return ''.join(resultado).strip()
    
    def analizar_archivo(self, datos_bytes: bytes) -> None:
        """
        Realiza un análisis detallado del archivo
        
        Args:
            datos_bytes: Datos del archivo en bytes
        """
        print("🔍 Analizando archivo...")
        
        self.analisis = {
            'tamano_total': len(datos_bytes),
            'tipo_archivo': self.detectar_tipo_archivo(datos_bytes),
            'hash_md5': hashlib.md5(datos_bytes).hexdigest(),
            'hash_sha256': hashlib.sha256(datos_bytes).hexdigest(),
            'firma_archivo': self.obtener_firma_archivo(datos_bytes),
            'patrones_comunes': self.encontrar_patrones_comunes(datos_bytes),
            'entropia': self.calcular_entropia(datos_bytes),
            'estadisticas_bytes': self.estadisticas_bytes(datos_bytes),
            'fecha_analisis': datetime.now().isoformat()
        }
    
    def detectar_tipo_archivo(self, datos_bytes: bytes) -> str:
        """
        Detecta el tipo de archivo basado en su firma
        
        Args:
            datos_bytes: Datos del archivo
            
        Returns:
            str: Tipo de archivo detectado
        """
        for firma, tipo in self.firmas_archivos.items():
            if datos_bytes.startswith(firma):
                return tipo
        
        return 'Desconocido'
    
    def obtener_firma_archivo(self, datos_bytes: bytes) -> str:
        """
        Obtiene la firma hexadecimal del archivo
        
        Args:
            datos_bytes: Datos del archivo
            
        Returns:
            str: Firma hexadecimal de los primeros bytes
        """
        return binascii.hexlify(datos_bytes[:16]).decode('ascii')
    
    def encontrar_patrones_comunes(self, datos_bytes: bytes, limite: int = 1000) -> List[Dict]:
        """
        Encuentra patrones comunes en los datos
        
        Args:
            datos_bytes: Datos del archivo
            limite: Número máximo de bytes a analizar
            
        Returns:
            List[Dict]: Lista de patrones encontrados
        """
        frecuencias = {}
        datos_analizar = datos_bytes[:min(len(datos_bytes), limite)]
        
        for byte in datos_analizar:
            frecuencias[byte] = frecuencias.get(byte, 0) + 1
        
        # Ordenar por frecuencia
        patrones_ordenados = sorted(frecuencias.items(), key=lambda x: x[1], reverse=True)
        
        return [
            {
                'byte': f"0x{byte:02x}",
                'frecuencia': count,
                'porcentaje': (count / len(datos_analizar)) * 100
            }
            for byte, count in patrones_ordenados[:10]
        ]
    
    def calcular_entropia(self, datos_bytes: bytes) -> float:
        """
        Calcula la entropía de Shannon de los datos
        
        Args:
            datos_bytes: Datos del archivo
            
        Returns:
            float: Valor de entropía (0-8 bits)
        """
        frecuencias = [0] * 256
        
        for byte in datos_bytes:
            frecuencias[byte] += 1
        
        entropia = 0
        total_bytes = len(datos_bytes)
        
        for frecuencia in frecuencias:
            if frecuencia > 0:
                probabilidad = frecuencia / total_bytes
                entropia -= probabilidad * (probabilidad.bit_length() - 1)
        
        return entropia
    
    def estadisticas_bytes(self, datos_bytes: bytes) -> Dict:
        """
        Calcula estadísticas de los bytes del archivo
        
        Args:
            datos_bytes: Datos del archivo
            
        Returns:
            Dict: Estadísticas del archivo
        """
        return {
            'bytes_cero': datos_bytes.count(0),
            'bytes_no_cero': len(datos_bytes) - datos_bytes.count(0),
            'valor_minimo': min(datos_bytes),
            'valor_maximo': max(datos_bytes),
            'promedio': sum(datos_bytes) / len(datos_bytes),
            'bytes_ascii': sum(1 for b in datos_bytes if 32 <= b <= 126)
        }
    
    def guardar_resultado(self, ruta_salida: str, formato: str = 'binario') -> bool:
        """
        Guarda el resultado de la conversión
        
        Args:
            ruta_salida: Ruta donde guardar el archivo
            formato: Formato de salida ('binario', 'hex', 'json')
            
        Returns:
            bool: True si se guardó correctamente
        """
        try:
            if formato == 'binario':
                contenido = self.datos_binarios
                extension = '.bin'
            elif formato == 'hex':
                contenido = self.datos_hex
                extension = '.hex'
            elif formato == 'json':
                contenido = json.dumps(self.analisis, indent=2, ensure_ascii=False)
                extension = '.json'
            else:
                print(f"❌ Error: Formato '{formato}' no soportado")
                return False
            
            # Crear nombre de archivo
            nombre_base = self.archivo_entrada.stem
            ruta_completa = Path(ruta_salida) / f"{nombre_base}{extension}"
            
            # Guardar archivo
            with open(ruta_completa, 'w', encoding='utf-8') as f:
                f.write(contenido)
            
            print(f"✅ Archivo guardado: {ruta_completa}")
            return True
            
        except Exception as e:
            print(f"❌ Error al guardar archivo: {e}")
            return False
    
    def mostrar_analisis(self) -> None:
        """Muestra el análisis del archivo en consola"""
        if not self.analisis:
            print("❌ No hay análisis disponible")
            return
        
        print("\n" + "="*50)
        print("📊 ANÁLISIS DEL ARCHIVO")
        print("="*50)
        
        print(f"📁 Nombre: {self.archivo_entrada.name}")
        print(f"📏 Tamaño: {self.formatear_tamano(self.analisis['tamano_total'])}")
        print(f"🏷️ Tipo: {self.analisis['tipo_archivo']}")
        print(f"🔍 Firma: {self.analisis['firma_archivo']}")
        print(f"📈 Entropía: {self.analisis['entropia']:.2f} bits")
        
        print(f"\n🔐 HASHES:")
        print(f"   MD5: {self.analisis['hash_md5']}")
        print(f"   SHA256: {self.analisis['hash_sha256']}")
        
        print(f"\n📊 ESTADÍSTICAS:")
        stats = self.analisis['estadisticas_bytes']
        print(f"   Bytes cero: {stats['bytes_cero']}")
        print(f"   Bytes no cero: {stats['bytes_no_cero']}")
        print(f"   Valor mínimo: {stats['valor_minimo']}")
        print(f"   Valor máximo: {stats['valor_maximo']}")
        print(f"   Promedio: {stats['promedio']:.2f}")
        print(f"   Bytes ASCII: {stats['bytes_ascii']}")
        
        print(f"\n🎯 PATRONES MÁS COMUNES:")
        for i, patron in enumerate(self.analisis['patrones_comunes'][:5], 1):
            print(f"   {i}. {patron['byte']}: {patron['frecuencia']} veces ({patron['porcentaje']:.1f}%)")
    
    def formatear_tamano(self, bytes: int) -> str:
        """
        Formatea el tamaño en bytes a formato legible
        
        Args:
            bytes: Tamaño en bytes
            
        Returns:
            str: Tamaño formateado
        """
        for unidad in ['B', 'KB', 'MB', 'GB']:
            if bytes < 1024.0:
                return f"{bytes:.2f} {unidad}"
            bytes /= 1024.0
        return f"{bytes:.2f} TB"


def main():
    """Función principal del programa"""
    parser = argparse.ArgumentParser(
        description="Conversor de archivos de Telegram a binario",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos de uso:
  python conversor_python.py archivo.pdf
  python conversor_python.py imagen.jpg --formato hex
  python conversor_python.py documento.docx --salida ./resultados/
        """
    )
    
    parser.add_argument('archivo', help='Ruta al archivo a convertir')
    parser.add_argument('--formato', choices=['binario', 'hex', 'json'], 
                       default='binario', help='Formato de salida')
    parser.add_argument('--salida', default='./', 
                       help='Directorio de salida para los archivos')
    parser.add_argument('--analizar', action='store_true',
                       help='Mostrar análisis detallado del archivo')
    
    args = parser.parse_args()
    
    # Crear instancia del conversor
    conversor = ConversorTelegramBinario()
    
    # Cargar archivo
    if not conversor.cargar_archivo(args.archivo):
        sys.exit(1)
    
    # Convertir a binario
    if not conversor.convertir_a_binario():
        sys.exit(1)
    
    # Mostrar análisis si se solicita
    if args.analizar:
        conversor.mostrar_analisis()
    
    # Guardar resultado
    if not conversor.guardar_resultado(args.salida, args.formato):
        sys.exit(1)
    
    print("\n🎉 Proceso completado exitosamente!")


if __name__ == "__main__":
    main() 