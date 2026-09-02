@echo off
chcp 65001 >nul
title Configurar Deploy Automatico - yessica.online
echo ============================================================
echo   CONFIGURACION AUTOMATICA DE DEPLOY - yessica.online
echo   (Solo necesitas ejecutar este archivo UNA SOLA VEZ)
echo ============================================================
echo.
echo Este instalador va a:
echo   1. Subir el script de configuracion a tu servidor VPS
echo   2. Ejecutar la instalacion y compilar tu sitio
echo   3. Dejar programada la actualizacion automatica cada 2 min
echo.
echo NOTA: Te solicitara la contrasena de SSH (2283).
echo       Escribela y presiona ENTER (los caracteres no se ven al escribir).
echo.
pause

echo.
echo [PASO 1/2] Subiendo script al servidor...
scp -o StrictHostKeyChecking=no "%~dp0setup_server.sh" yessica@31.97.129.144:~/setup_server.sh
if errorlevel 1 (
    echo.
    echo [ERROR] No se pudo conectar por SCP. Verifica la contrasena.
    pause
    exit /b 1
)

echo.
echo [PASO 2/2] Ejecutando configuracion en el servidor...
ssh -o StrictHostKeyChecking=no -t yessica@31.97.129.144 "chmod +x ~/setup_server.sh && tr -d '\r' < ~/setup_server.sh > ~/setup_clean.sh && chmod +x ~/setup_clean.sh && ~/setup_clean.sh"

echo.
echo ============================================================
echo   ¡TODO QUEDO CONFIGURADO AUTOMATICO!
echo   Ahora cada vez que subas cambios a GitHub (git push),
echo   en 2 minutos se reflejaran en https://yessica.online/
echo ============================================================
echo.
pause
