# Script para eliminar archivos PHP del proyecto migrado a Node.js
# ADVERTENCIA: Este script eliminará permanentemente los archivos PHP

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Limpieza de Archivos PHP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: No se encontró package.json en el directorio actual." -ForegroundColor Red
    Write-Host "Por favor, ejecuta este script desde la raíz del proyecto vayven." -ForegroundColor Red
    exit 1
}

Write-Host "ADVERTENCIA: Este script eliminará los siguientes archivos y directorios:" -ForegroundColor Yellow
Write-Host "  - /app/" -ForegroundColor Yellow
Write-Host "  - /system/" -ForegroundColor Yellow
Write-Host "  - /vendor/ (si existe)" -ForegroundColor Yellow
Write-Host "  - composer.json" -ForegroundColor Yellow
Write-Host "  - composer.lock (si existe)" -ForegroundColor Yellow
Write-Host "  - phpunit.xml.dist" -ForegroundColor Yellow
Write-Host "  - preload.php" -ForegroundColor Yellow
Write-Host "  - spark" -ForegroundColor Yellow
Write-Host "  - /public/index.php" -ForegroundColor Yellow
Write-Host ""

$confirmation = Read-Host "¿Estás seguro de que deseas continuar? (S/N)"

if ($confirmation -ne "S" -and $confirmation -ne "s") {
    Write-Host "Operación cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Creando backup..." -ForegroundColor Green

# Crear directorio de backup
$backupDir = "../vayven_php_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# Lista de archivos y directorios a mover
$itemsToBackup = @(
    "app",
    "system",
    "composer.json",
    "phpunit.xml.dist",
    "preload.php",
    "spark",
    "public/index.php"
)

# Agregar vendor y composer.lock si existen
if (Test-Path "vendor") { $itemsToBackup += "vendor" }
if (Test-Path "composer.lock") { $itemsToBackup += "composer.lock" }

foreach ($item in $itemsToBackup) {
    if (Test-Path $item) {
        Write-Host "  Moviendo $item al backup..." -ForegroundColor Cyan
        try {
            Move-Item -Path $item -Destination $backupDir -Force
            Write-Host "    ✓ $item movido exitosamente" -ForegroundColor Green
        } catch {
            Write-Host "    ✗ Error moviendo $item : $_" -ForegroundColor Red
        }
    } else {
        Write-Host "  - $item no existe (omitiendo)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Limpieza completada exitosamente" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backup creado en: $backupDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pasos siguientes:" -ForegroundColor Yellow
Write-Host "  1. Verificar que el servidor Node.js funciona: npm start" -ForegroundColor White
Write-Host "  2. Probar la API: http://localhost:3000/api/unidad" -ForegroundColor White
Write-Host "  3. Si todo funciona correctamente, puedes eliminar el backup" -ForegroundColor White
Write-Host ""
Write-Host "Para eliminar el backup después:" -ForegroundColor Yellow
Write-Host "  Remove-Item -Recurse -Force '$backupDir'" -ForegroundColor White
Write-Host ""
