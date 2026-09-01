import React from 'react';
import { 
  Rocket, Eye, Code2, Monitor, Zap, Sparkles, Terminal, PenTool, Layers, Box, Cloud, GitBranch, Database
} from 'lucide-react';

export default function Hero() {
  const technologies = [
    { 
      name: 'JavaScript', 
      color: 'js',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="tech-svg-icon">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7 16.5c.5.8 1.4 1.3 2.5 1.3 1.4 0 2.3-.7 2.3-2.1v-6.2h-1.8v6.1c0 .6-.3.9-.8.9-.4 0-.7-.2-.9-.6l-1.3.6zm6.8-.2c.6 1 1.7 1.6 3.1 1.6 2 0 3.3-1.1 3.3-2.7 0-1.4-.8-2.2-2.3-2.8l-.8-.3c-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1.1 1.4-1.1.8 0 1.4.3 1.8.9l1.4-.9c-.7-1.1-1.8-1.7-3.2-1.7-2 0-3.2 1.2-3.2 2.7 0 1.3.8 2.1 2.2 2.6l.8.3c1 .4 1.4.8 1.4 1.4 0 .7-.6 1.2-1.6 1.2-.9 0-1.6-.4-2.1-1.1l-1.4.9z" fill="#000000"/>
        </svg>
      )
    },
    { 
      name: 'React', 
      color: 'react',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="tech-svg-icon">
          <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      color: 'node',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#68A063" className="tech-svg-icon">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.8L12 19.7 5.5 15.9V8.1L12 4.3z"/>
          <circle cx="12" cy="12" r="2.5" fill="#68A063"/>
        </svg>
      )
    },
    { 
      name: 'Express', 
      color: 'express',
      icon: (
        <span className="express-badge-text">ex</span>
      )
    },
    { 
      name: 'MongoDB', 
      color: 'mongodb',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#47A248" className="tech-svg-icon">
          <path d="M12 2C11.5 4.5 9 8 9 12c0 3.5 2 6.5 3 8 1-1.5 3-4.5 3-8 0-4-2.5-7.5-3-10z"/>
          <path d="M12 2v18c.2-.3.5-.8.8-1.4.8-1.5 1.7-3.7 1.7-6.6 0-3.5-2-6.5-2.5-10z" fill="#3FA037"/>
        </svg>
      )
    },
    { 
      name: 'MySQL', 
      color: 'mysql',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-svg-icon">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    { 
      name: 'APIs REST', 
      color: 'rest',
      icon: <Cloud size={16} color="#A855F7" />
    },
    { 
      name: 'Git / GitHub', 
      color: 'git',
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" color="#F05032" className="tech-svg-icon">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="inicio" className="hero-section">
      {/* ── CUADRÍCULA PRINCIPAL DE 2 COLUMNAS ── */}
      <div className="hero-grid">
        
        {/* ── COLUMNA IZQUIERDA: INFORMACIÓN Y ACCIONES ── */}
        <div className="hero-left-content">
          {/* Badge de disponibilidad */}
          <div className="status-badge-neon">
            <span className="status-dot-pulse"></span>
            <span className="badge-text">Disponible para nuevos proyectos</span>
            <Sparkles size={14} className="badge-sparkle" />
          </div>

          {/* Título Gigante Estilo Bebas Neue: CREATIVE DEVELOPER */}
          <div className="hero-heading">
            <h1 className="hero-full-name-giant">
              <span className="name-line-purple">CREATIVE</span>
              <span className="name-line-white">DEVELOPER</span>
            </h1>
          </div>

          {/* Subtítulo descriptivo en mayúsculas con barra vertical izquierda */}
          <div className="hero-subtext-container">
            <div className="hero-subtext-bar"></div>
            <p className="hero-subtext-uppercase">
              DESARROLLO SOFTWARE<br />
              Y DISEÑO DE EXPERIENCIAS<br />
              QUE INSPIRAN.
            </p>
          </div>

          {/* Fila de Estadísticas */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">AÑOS DE EXPERIENCIA</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">PROYECTOS COMPLETADOS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">CLIENTES</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">TECNOLOGÍAS</span>
            </div>
          </div>

          {/* Badges de Tecnologías Estilizados con Iconos de Neón */}
          <div className="tech-chips-wrapper-premium">
            {technologies.map((tech, index) => (
              <div key={index} className={`tech-chip-premium tech-chip-${tech.color}`}>
                <span className="tech-chip-icon-box">{tech.icon}</span>
                <span className="tech-chip-name">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Botones de Llamada a la Acción */}
          <div className="hero-cta-group">
            <a href="#tu-proyecto" className="btn-cta primary-glow">
              <Rocket size={18} />
              <span>Trabajemos juntos</span>
            </a>
            <a href="#experiencia" className="btn-cta secondary-outline">
              <Eye size={18} />
              <span>Ver mis proyectos</span>
            </a>
          </div>
        </div>

        {/* ── COLUMNA DERECHA: TARJETA DE PERFIL CON FOTO Y SELLO GIRATORIO ── */}
        <div className="hero-right-card">
          <div className="profile-glass-card">
            
            {/* Destello decorativo superior derecho */}
            <div className="floating-sparkle-top-right">
              <Sparkles size={24} className="corner-sparkle-icon" />
            </div>

            {/* Elementos decorativos de fondo sutiles */}
            <div className="floating-shape shape-left-diamond"></div>
            <div className="floating-shape shape-right-diamond"></div>
            <div className="floating-dot dot-top-left"></div>
            <div className="floating-dot dot-top-right"></div>
            <div className="floating-dot dot-mid-right"></div>
            <div className="floating-dot dot-bottom-left"></div>

            {/* Contenedor central de la foto con Marco Ovalado y Halo Elegante */}
            <div className="profile-image-oval-wrapper">
              <div className="neon-halo-glow-bg"></div>
              <div className="neon-halo-border-ring"></div>
              <img 
                src="/imagen/gafas.png" 
                alt="Foto de perfil Yessica Jaramillo - Aprendiz SENA ADSO" 
                className="profile-oval-photo"
              />

              {/* Sello de texto circular giratorio SVG */}
              <div className="circular-badge-seal">
                <div className="circular-badge-inner">
                  <svg viewBox="0 0 100 100" className="circular-text-svg">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text>
                      <textPath href="#circlePath" startOffset="0%">
                        DESARROLLADORA FULL STACK • APASIONADA POR EL CÓDIGO •
                      </textPath>
                    </text>
                  </svg>
                  <div className="circular-center-text">YJ</div>
                </div>
              </div>
            </div>

            {/* Panel Inferior de Habilidades (Separado limpiamente, compacto y estilizado) */}
            <div className="skills-subpanel-grid">
              <div className="subpanel-col">
                <div className="subpanel-direct-icon code-color">
                  <Code2 size={20} />
                </div>
                <h4 className="subpanel-title">Desarrollo</h4>
                <p className="subpanel-desc">Web Full Stack</p>
              </div>

              <div className="subpanel-divider"></div>

              <div className="subpanel-col">
                <div className="subpanel-direct-icon monitor-color">
                  <Monitor size={20} />
                </div>
                <h4 className="subpanel-title">Interfaces</h4>
                <p className="subpanel-desc">Intuitivas</p>
              </div>

              <div className="subpanel-divider"></div>

              <div className="subpanel-col">
                <div className="subpanel-direct-icon zap-color">
                  <Zap size={20} />
                </div>
                <h4 className="subpanel-title">Soluciones</h4>
                <p className="subpanel-desc">Efectivas</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── SECCIÓN HORIZONTAL "WHAT I DO" (4 COLUMNAS) ── */}
      <div className="what-i-do-container">
        <div className="what-i-do-title-col">
          <h2 className="what-i-do-title">
            WHAT<br />I DO
          </h2>
          <Sparkles size={24} className="what-i-do-sparkle" />
        </div>
        
        <div className="what-i-do-grid">
          <div className="what-i-do-card">
            <div className="what-i-do-icon-num">
              <div className="what-i-do-icon-box card-blue">
                <PenTool size={22} />
              </div>
              <span className="what-i-do-num">01</span>
            </div>
            <h4 className="what-i-do-card-title">DISEÑO WEB</h4>
            <p className="what-i-do-card-desc">
              Diseño interfaces modernas, atractivas y centradas en el usuario para experiencias excepcionales.
            </p>
          </div>

          <div className="what-i-do-card">
            <div className="what-i-do-icon-num">
              <div className="what-i-do-icon-box card-purple">
                <Code2 size={22} />
              </div>
              <span className="what-i-do-num">02</span>
            </div>
            <h4 className="what-i-do-card-title">DESARROLLO WEB</h4>
            <p className="what-i-do-card-desc">
              Desarrollo aplicaciones web robustas, escalables y optimizadas utilizando las mejores prácticas.
            </p>
          </div>

          <div className="what-i-do-card">
            <div className="what-i-do-icon-num">
              <div className="what-i-do-icon-box card-pink">
                <Box size={22} />
              </div>
              <span className="what-i-do-num">03</span>
            </div>
            <h4 className="what-i-do-card-title">UI/UX DESIGN</h4>
            <p className="what-i-do-card-desc">
              Creo diseños intuitivos que mejoran la experiencia del usuario y generan impacto.
            </p>
          </div>

          <div className="what-i-do-card">
            <div className="what-i-do-icon-num">
              <div className="what-i-do-icon-box card-orange">
                <Zap size={22} />
              </div>
              <span className="what-i-do-num">04</span>
            </div>
            <h4 className="what-i-do-card-title">OPTIMIZACIÓN</h4>
            <p className="what-i-do-card-desc">
              Optimización de rendimiento, SEO y mejores prácticas para aplicaciones rápidas y eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
