#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Ejemplo de Uso - Conversor Telegram a Binario
=============================================

Este script demuestra cómo usar el conversor de archivos de Telegram a binario
con diferentes tipos de archivos y configuraciones.
"""

import os
import tempfile
from pathlib import Path
from conversor_python import ConversorTelegramBinario

def crear_archivo_ejemplo(nombre: str, contenido: str) -> str:
    """
    Crea un archivo de ejemplo para pruebas
    
    Args:
        nombre: Nombre del archivo
        contenido: Contenido del archivo
        
    Returns:
        str: Ruta al archivo creado
    """
    # Crear directorio temporal
    temp_dir = tempfile.mkdtemp()
    ruta_archivo = os.path.join(temp_dir, nombre)
    
    # Escribir contenido
    with open(ruta_archivo, 'w', encoding='utf-8') as f:
        f.write(contenido)
    
    print(f"✅ Archivo de ejemplo creado: {ruta_archivo}")
    return ruta_archivo

def ejemplo_conversion_basica():
    """Ejemplo de conversión básica de un archivo de texto"""
    print("\n" + "="*50)
    print("📝 EJEMPLO: Conversión Básica")
    print("="*50)
    
    # Crear archivo de ejemplo
    contenido = """
    Este es un archivo de ejemplo para probar el conversor.
    Contiene texto en español con caracteres especiales: áéíóúñ
    También números: 1234567890
    Y símbolos: !@#$%^&*()_+-=[]{}|;':",./<>?
    """
    
    ruta_archivo = crear_archivo_ejemplo("ejemplo.txt", contenido)
    
    # Crear conversor y procesar
    conversor = ConversorTelegramBinario()
    
    if conversor.cargar_archivo(ruta_archivo):
        if conversor.convertir_a_binario():
            conversor.mostrar_analisis()
            
            # Guardar en diferentes formatos
            conversor.guardar_resultado("./", "binario")
            conversor.guardar_resultado("./", "hex")
            conversor.guardar_resultado("./", "json")
    
    # Limpiar archivo temporal
    os.remove(ruta_archivo)

def ejemplo_analisis_avanzado():
    """Ejemplo de análisis avanzado con diferentes tipos de datos"""
    print("\n" + "="*50)
    print("🔍 EJEMPLO: Análisis Avanzado")
    print("="*50)
    
    # Crear archivo con datos binarios simulados
    datos_binarios = bytes([i % 256 for i in range(1000)])  # Patrón repetitivo
    
    temp_dir = tempfile.mkdtemp()
    ruta_archivo = os.path.join(temp_dir, "datos_binarios.bin")
    
    with open(ruta_archivo, 'wb') as f:
        f.write(datos_binarios)
    
    print(f"✅ Archivo binario creado: {ruta_archivo}")
    
    # Procesar con conversor
    conversor = ConversorTelegramBinario()
    
    if conversor.cargar_archivo(ruta_archivo):
        if conversor.convertir_a_binario():
            conversor.mostrar_analisis()
            
            # Mostrar estadísticas específicas
            analisis = conversor.analisis
            print(f"\n📊 ANÁLISIS ESPECÍFICO:")
            print(f"   Entropía: {analisis['entropia']:.2f} bits")
            print(f"   Tipo detectado: {analisis['tipo_archivo']}")
            print(f"   Firma: {analisis['firma_archivo']}")
    
    # Limpiar
    os.remove(ruta_archivo)

def ejemplo_multiple_formatos():
    """Ejemplo de conversión a múltiples formatos"""
    print("\n" + "="*50)
    print("🔄 EJEMPLO: Múltiples Formatos")
    print("="*50)
    
    # Crear archivo con contenido variado
    contenido = "Hola Mundo! 🌍\n" * 100  # Repetir 100 veces
    
    ruta_archivo = crear_archivo_ejemplo("multiformato.txt", contenido)
    
    conversor = ConversorTelegramBinario()
    
    if conversor.cargar_archivo(ruta_archivo):
        if conversor.convertir_a_binario():
            # Guardar en todos los formatos disponibles
            formatos = ["binario", "hex", "json"]
            
            for formato in formatos:
                nombre_archivo = f"ejemplo_multiformato.{formato}"
                ruta_salida = f"./salida_{formato}/"
                
                # Crear directorio si no existe
                os.makedirs(ruta_salida, exist_ok=True)
                
                # Guardar archivo
                conversor.archivo_entrada = Path(ruta_archivo)
                conversor.guardar_resultado(ruta_salida, formato)
                
                print(f"✅ Guardado en formato {formato}: {ruta_salida}")
    
    # Limpiar
    os.remove(ruta_archivo)

def ejemplo_rendimiento():
    """Ejemplo de prueba de rendimiento con archivos de diferentes tamaños"""
    print("\n" + "="*50)
    print("⚡ EJEMPLO: Prueba de Rendimiento")
    print("="*50)
    
    import time
    
    # Crear archivos de diferentes tamaños
    tamanos = [1024, 10240, 102400]  # 1KB, 10KB, 100KB
    
    for tamano in tamanos:
        print(f"\n📏 Probando archivo de {tamano} bytes...")
        
        # Crear contenido del tamaño especificado
        contenido = "A" * tamano
        
        ruta_archivo = crear_archivo_ejemplo(f"test_{tamano}.txt", contenido)
        
        conversor = ConversorTelegramBinario()
        
        # Medir tiempo de procesamiento
        inicio = time.time()
        
        if conversor.cargar_archivo(ruta_archivo):
            if conversor.convertir_a_binario():
                tiempo_total = time.time() - inicio
                print(f"   ⏱️ Tiempo de procesamiento: {tiempo_total:.3f} segundos")
                print(f"   📊 Tamaño resultado: {len(conversor.datos_binarios)} caracteres")
        
        # Limpiar
        os.remove(ruta_archivo)

def ejemplo_telegram_especifico():
    """Ejemplo específico para archivos de Telegram"""
    print("\n" + "="*50)
    print("📱 EJEMPLO: Archivos de Telegram")
    print("="*50)
    
    # Simular diferentes tipos de archivos de Telegram
    archivos_telegram = {
        "mensaje.txt": "Hola desde Telegram! 👋\nEste es un mensaje de ejemplo.",
        "imagen.jpg": b"\xFF\xD8\xFF\xE0\x00\x10JFIF\x00\x01\x01\x01\x00H\x00H\x00\x00",  # Firma JPEG
        "documento.pdf": b"%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj",  # Firma PDF
    }
    
    for nombre, contenido in archivos_telegram.items():
        print(f"\n📄 Procesando: {nombre}")
        
        temp_dir = tempfile.mkdtemp()
        ruta_archivo = os.path.join(temp_dir, nombre)
        
        # Escribir contenido (texto o bytes)
        if isinstance(contenido, str):
            with open(ruta_archivo, 'w', encoding='utf-8') as f:
                f.write(contenido)
        else:
            with open(ruta_archivo, 'wb') as f:
                f.write(contenido)
        
        conversor = ConversorTelegramBinario()
        
        if conversor.cargar_archivo(ruta_archivo):
            if conversor.convertir_a_binario():
                print(f"   ✅ Tipo detectado: {conversor.analisis['tipo_archivo']}")
                print(f"   📏 Tamaño: {conversor.formatear_tamano(conversor.analisis['tamano_total'])}")
                print(f"   🔍 Firma: {conversor.analisis['firma_archivo'][:20]}...")
        
        # Limpiar
        os.remove(ruta_archivo)

def main():
    """Función principal que ejecuta todos los ejemplos"""
    print("🚀 INICIANDO EJEMPLOS DEL CONVERSOR TELEGRAM A BINARIO")
    print("="*60)
    
    try:
        # Ejecutar todos los ejemplos
        ejemplo_conversion_basica()
        ejemplo_analisis_avanzado()
        ejemplo_multiple_formatos()
        ejemplo_rendimiento()
        ejemplo_telegram_especifico()
        
        print("\n" + "="*60)
        print("🎉 TODOS LOS EJEMPLOS COMPLETADOS EXITOSAMENTE")
        print("="*60)
        
        print("\n📋 RESUMEN:")
        print("✅ Conversión básica de archivos de texto")
        print("✅ Análisis avanzado de datos binarios")
        print("✅ Conversión a múltiples formatos")
        print("✅ Pruebas de rendimiento")
        print("✅ Procesamiento de archivos de Telegram")
        
        print("\n💡 PRÓXIMOS PASOS:")
        print("1. Abrir index.html en tu navegador para usar la interfaz web")
        print("2. Usar conversor_python.py para procesamiento por línea de comandos")
        print("3. Experimentar con tus propios archivos de Telegram")
        
    except Exception as e:
        print(f"\n❌ Error durante la ejecución: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main()) 