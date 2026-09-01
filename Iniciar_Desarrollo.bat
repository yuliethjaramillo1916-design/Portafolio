@echo off
title Iniciando Entorno de Desarrollo - Portafolio
echo ======================================================
echo Iniciando Servidores en segundo plano...
echo ======================================================
echo.

:: 1. Iniciar el Backend (minimizada)
echo [+] Levantando Backend (Puerto 5000)...
start /min cmd /c "npm run backend"

:: 2. Iniciar el Frontend Vite (minimizada)
echo [+] Levantando Frontend React/Vite (Puerto 3000)...
start /min cmd /c "npm run dev"

:: Esperar 3 segundos para que los servidores arranquen
timeout /t 3 /nobreak > nul

:: 3. Iniciar el tunel en linea (en una ventana para que puedas ver el estado si deseas)
echo [+] Levantando Tunel Publico en Internet...
start cmd /k "npm run share"

echo.
echo ======================================================
echo IP LOCAL:   http://localhost:3000
echo IP EN LINEA: https://yessicajaramillodev.localtunnel.me
echo ======================================================
echo.
echo Abriendo tu portafolio local en el navegador...
start http://localhost:3000
exit
