# Instrucciones para Remover Archivos PHP

El proyecto ha sido migrado exitosamente de CodeIgniter 4 (PHP) a Node.js.

## ⚠️ Archivos PHP que ya NO son necesarios

Los siguientes directorios y archivos pueden ser eliminados de forma segura:

### Directorios PHP (pueden eliminarse):
```
/app/          # Toda la aplicación PHP de CodeIgniter
/system/       # Sistema de CodeIgniter
/vendor/       # Dependencias de Composer (si existe)
```

### Archivos PHP en la raíz (pueden eliminarse):
```
composer.json
composer.lock  (si existe)
phpunit.xml.dist
preload.php
spark
```

### Archivos PHP en /public/ (pueden eliminarse):
```
/public/index.php
```

## ✅ Archivos/Directorios que DEBES MANTENER:

```
/src/              # Nueva aplicación Node.js
/public/           # Archivos estáticos (CSS, JS, imágenes) - mantener solo archivos estáticos
/writable/         # Logs y archivos temporales
/database/         # Scripts SQL
package.json
package-lock.json
.env
.env.example
.gitignore
README.md
LICENSE
```

## 🗑️ Comando para eliminar archivos PHP (PowerShell)

**PRECAUCIÓN:** Esto eliminará permanentemente los archivos PHP. Asegúrate de tener un backup antes.

```powershell
# Eliminar directorios PHP
Remove-Item -Recurse -Force app, system

# Eliminar archivos PHP en la raíz
Remove-Item -Force composer.json, phpunit.xml.dist, preload.php, spark

# Eliminar index.php de public (pero mantener otros archivos)
Remove-Item -Force public/index.php

# Si existe vendor (dependencias de Composer)
if (Test-Path vendor) { Remove-Item -Recurse -Force vendor }

# Si existe composer.lock
if (Test-Path composer.lock) { Remove-Item -Force composer.lock }
```

## 📝 Alternativa: Crear backup antes de eliminar

```powershell
# Crear directorio de backup
New-Item -ItemType Directory -Force -Path ../vayven_php_backup

# Mover archivos PHP al backup
Move-Item -Force app, system, composer.json, phpunit.xml.dist, preload.php, spark ../vayven_php_backup/

# Verificar que el proyecto Node.js funciona correctamente
npm start

# Si todo funciona bien, puedes eliminar el backup después
```

## ✨ Verificar la migración

Después de eliminar los archivos PHP, verifica que:

1. ✓ El servidor Node.js inicia correctamente: `npm start`
2. ✓ La API responde: `http://localhost:3000/api/unidad`
3. ✓ La página principal carga: `http://localhost:3000`
4. ✓ No hay errores en la consola

## 🚀 Iniciar el proyecto Node.js

```bash
# Instalar dependencias (si aún no lo hiciste)
npm install

# Configurar variables de entorno
copy .env.example .env
# Editar .env con tus credenciales de base de datos

# Iniciar en modo desarrollo
npm run dev

# O iniciar en modo producción
npm start
```

---

Una vez que confirmes que todo funciona correctamente con Node.js, puedes ejecutar el comando de eliminación de forma segura.
