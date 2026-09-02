#!/bin/bash
REPO_DIR="/home/yessica/Portafolio"
TARGET_DIR="/home/yessica/proyectos/yessica.online"
LOG_FILE="/home/yessica/deploy.log"

cd "$REPO_DIR" || exit 1

# Traer información remota de GitHub silenciosamente
git fetch origin main >/dev/null 2>&1

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "$(date): Nuevos cambios detectados en GitHub ($REMOTE). Iniciando deploy..." >> "$LOG_FILE"
    git reset --hard origin/main >> "$LOG_FILE" 2>&1
    
    cd "$REPO_DIR/frontend"
    npm ci --production=false >> "$LOG_FILE" 2>&1 || npm install >> "$LOG_FILE" 2>&1
    npm run build >> "$LOG_FILE" 2>&1
    
    # Copiar archivos compilados a la carpeta real de yessica.online
    cp -rf "$REPO_DIR/frontend/dist/"* "$TARGET_DIR/"
    mkdir -p "$TARGET_DIR/imagen"
    cp -rf "$REPO_DIR/frontend/public/imagen/"* "$TARGET_DIR/imagen/" 2>/dev/null || true
    cp -rf "$REPO_DIR/imagen/"* "$TARGET_DIR/imagen/" 2>/dev/null || true
    
    echo "$(date): Deploy completado exitosamente con commit $(git rev-parse --short HEAD)." >> "$LOG_FILE"
fi
