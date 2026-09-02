#!/bin/bash
# ============================================================
# Script de configuracion del servidor para deploy automatico
# Se ejecuta UNA SOLA VEZ en el servidor via SSH
# ============================================================

set -e
SUDO_PASS="2283"

echo ""
echo "========================================"
echo " Configurando deploy automatico..."
echo "========================================"

# 1. Detectar la ruta del sitio web en Nginx
echo ""
echo "[1/6] Detectando ruta del sitio web..."
WEB_ROOT=$(grep -r "root " /etc/nginx/sites-enabled/ 2>/dev/null | grep -v "#" | head -1 | awk '{print $2}' | tr -d ';')

if [ -z "$WEB_ROOT" ]; then
    WEB_ROOT=$(grep -r "root " /etc/nginx/nginx.conf 2>/dev/null | grep -v "#" | head -1 | awk '{print $2}' | tr -d ';')
fi

if [ -z "$WEB_ROOT" ]; then
    WEB_ROOT="/var/www/html"
fi

echo "    Ruta detectada: $WEB_ROOT"

# Asignar permisos al usuario yessica en WEB_ROOT para que el cron job no requiera sudo
echo "    Configurando permisos en $WEB_ROOT..."
echo "$SUDO_PASS" | sudo -S chown -R $(whoami):$(whoami) "$WEB_ROOT" 2>/dev/null || true
echo "$SUDO_PASS" | sudo -S chmod -R 755 "$WEB_ROOT" 2>/dev/null || true

# 2. Verificar si Node.js esta instalado
echo ""
echo "[2/6] Verificando Node.js..."
if command -v node &> /dev/null; then
    echo "    Node.js encontrado: $(node -v)"
else
    echo "    Instalando Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | echo "$SUDO_PASS" | sudo -S bash - 2>/dev/null
    echo "$SUDO_PASS" | sudo -S apt-get install -y nodejs 2>/dev/null
    echo "    Node.js instalado: $(node -v)"
fi

# 3. Clonar o actualizar el repositorio
REPO_DIR="$HOME/Portafolio"
echo ""
echo "[3/6] Configurando repositorio en $REPO_DIR..."
if [ -d "$REPO_DIR" ]; then
    echo "    Repositorio existente, actualizando..."
    cd "$REPO_DIR"
    git fetch origin main
    git reset --hard origin/main
else
    echo "    Clonando repositorio..."
    cd "$HOME"
    git clone https://github.com/yuliethjaramillo1916-design/Portafolio.git
    cd "$REPO_DIR"
fi

# 4. Instalar dependencias y compilar
echo ""
echo "[4/6] Instalando dependencias y compilando..."
cd "$REPO_DIR/frontend"
npm ci --production=false 2>/dev/null || npm install
npm run build

# 5. Copiar archivos compilados al directorio web
echo ""
echo "[5/6] Desplegando archivos a $WEB_ROOT..."
rm -rf "$WEB_ROOT/assets" 2>/dev/null || true
cp -r "$REPO_DIR/frontend/dist/"* "$WEB_ROOT/"

# Copiar PDFs de imagen
if [ -d "$REPO_DIR/frontend/public/imagen" ]; then
    mkdir -p "$WEB_ROOT/imagen"
    cp -r "$REPO_DIR/frontend/public/imagen/"* "$WEB_ROOT/imagen/" 2>/dev/null || true
fi

if [ -d "$REPO_DIR/imagen" ]; then
    mkdir -p "$WEB_ROOT/imagen"
    cp -r "$REPO_DIR/imagen/"* "$WEB_ROOT/imagen/" 2>/dev/null || true
fi

echo "    Archivos desplegados correctamente."

# 6. Crear script de auto-deploy y cron job
echo ""
echo "[6/6] Configurando auto-deploy periodico..."

cat > "$HOME/auto_deploy.sh" << 'DEPLOY_SCRIPT'
#!/bin/bash
# Script de auto-deploy: verifica cambios en GitHub cada 2 minutos y despliega
REPO_DIR="$HOME/Portafolio"
LOG_FILE="$HOME/deploy.log"

cd "$REPO_DIR" || exit 1

# Obtener cambios remotos silenciosamente
git fetch origin main >/dev/null 2>&1

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "$(date): Nuevos cambios detectados en GitHub, iniciando compilación y despliegue..." >> "$LOG_FILE"
    
    git reset --hard origin/main >> "$LOG_FILE" 2>&1
    
    cd "$REPO_DIR/frontend"
    npm ci --production=false >> "$LOG_FILE" 2>&1 || npm install >> "$LOG_FILE" 2>&1
    npm run build >> "$LOG_FILE" 2>&1
    
    WEB_ROOT=$(grep -r "root " /etc/nginx/sites-enabled/ 2>/dev/null | grep -v "#" | head -1 | awk '{print $2}' | tr -d ';')
    [ -z "$WEB_ROOT" ] && WEB_ROOT="/var/www/html"
    
    rm -rf "$WEB_ROOT/assets" 2>/dev/null || true
    cp -r "$REPO_DIR/frontend/dist/"* "$WEB_ROOT/"
    
    if [ -d "$REPO_DIR/frontend/public/imagen" ]; then
        mkdir -p "$WEB_ROOT/imagen"
        cp -r "$REPO_DIR/frontend/public/imagen/"* "$WEB_ROOT/imagen/" 2>/dev/null || true
    fi
    if [ -d "$REPO_DIR/imagen" ]; then
        mkdir -p "$WEB_ROOT/imagen"
        cp -r "$REPO_DIR/imagen/"* "$WEB_ROOT/imagen/" 2>/dev/null || true
    fi
    
    echo "$(date): Despliegue completado exitosamente con commit $(git rev-parse --short HEAD)." >> "$LOG_FILE"
fi
DEPLOY_SCRIPT

chmod +x "$HOME/auto_deploy.sh"

# Agregar cron job (cada 2 minutos)
CRON_JOB="*/2 * * * * $HOME/auto_deploy.sh"
(crontab -l 2>/dev/null | grep -v "auto_deploy.sh"; echo "$CRON_JOB") | crontab -

echo ""
echo "========================================"
echo " CONFIGURACION COMPLETADA CON EXITO"
echo "========================================"
echo " - Directorio web: $WEB_ROOT"
echo " - Tarea cron: cada 2 minutos"
echo " - Registro: $HOME/deploy.log"
echo "========================================"
