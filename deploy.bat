@echo off
echo ============================================
echo  DEPLOY A YESSICA.ONLINE - VPS Nginx
echo ============================================
echo.

REM Primero construir el proyecto
echo [1/3] Compilando proyecto React/Vite...
cd /d "d:\Usuario\Desktop\TRABAJOS\trabajo\frontend"
call npm run build
if errorlevel 1 (
    echo ERROR: La compilacion fallo.
    pause
    exit /b 1
)
echo [OK] Build completado.
echo.

REM Subir archivos al servidor via SCP
echo [2/3] Subiendo archivos al servidor...
echo *** Se te pedira la contrasena SSH (2283) ***
echo.

REM Subir index.html
scp -o StrictHostKeyChecking=no "d:\Usuario\Desktop\TRABAJOS\trabajo\frontend\dist\index.html" yessica@31.97.129.144:/var/www/yessica.online/index.html

REM Subir carpeta assets
scp -o StrictHostKeyChecking=no -r "d:\Usuario\Desktop\TRABAJOS\trabajo\frontend\dist\assets" yessica@31.97.129.144:/var/www/yessica.online/

REM Subir carpeta imagen (PDFs)
scp -o StrictHostKeyChecking=no -r "d:\Usuario\Desktop\TRABAJOS\trabajo\frontend\dist\imagen" yessica@31.97.129.144:/var/www/yessica.online/

echo.
echo [3/3] Verificando...
echo ============================================
echo  DEPLOY COMPLETADO
echo  Visita: https://yessica.online/
echo ============================================
pause
