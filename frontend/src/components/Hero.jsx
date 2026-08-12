import React from 'react';
import { 
  Rocket, Eye, Code2, Monitor, Zap, Target, 
  GraduationCap, Users, Sparkles, Database, 
  Layers, Globe, Cpu, Terminal
} from 'lucide-react';

export default function Hero() {
  const technologies = [
    { name: 'JavaScript', icon: 'JS', isBadge: true },
    { name: 'React', icon: '⚛' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: 'EX', isBadge: true },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'APIs REST', icon: '☁' },
    { name: 'Git / GitHub', icon: '🐙' },
  ];

  const values = [
    {
      icon: <Target size={22} className="val-icon" />,
      title: 'Enfoque en soluciones',
      desc: 'Desarrollo aplicaciones que resuelven problemas reales.'
    },
    {
      icon: <GraduationCap size={22} className="val-icon" />,
      title: 'Aprendizaje continuo',
      desc: 'Siempre explorando nuevas tecnologías y metodologías.'
    },
    {
      icon: <Users size={22} className="val-icon" />,
      title: 'Trabajo en equipo',
      desc: 'Colaboración efectiva para lograr los mejores resultados.'
    },
    {
      icon: <Zap size={22} className="val-icon" />,
      title: 'Pasión por el código',
      desc: 'Convertir ideas en código funcional y elegante.'
    }
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

          {/* Saludo y Nombre */}
          <div className="hero-heading">
            <p className="greeting-text">Hola, soy</p>
            <h1 className="hero-full-name">
              Yessica <span className="gradient-text-name">Jaramillo</span>
            </h1>
            <div className="neon-divider-line"></div>
          </div>

          {/* Subtítulo ADSO */}
          <div className="hero-role-title">
            <span className="sena-tag">Aprendiz SENA</span>
            <span className="role-separator">|</span>
            <span className="adso-tag">Tecnólogo ADSO</span>
          </div>

          {/* Descripción profesional */}
          <p className="hero-description">
            Apasionada por el desarrollo de software y la creación de soluciones web modernas.
            Me especializo en <strong className="highlight-adso">Análisis y Desarrollo de Software (ADSO)</strong> en el SENA, con enfoque en desarrollo Frontend, Backend y diseño de interfaces intuitivas y arquitecturas de aplicaciones web robustas.
          </p>

          {/* Badges de Tecnologías */}
          <div className="tech-chips-wrapper">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-chip-item">
                <span className="tech-chip-icon">{tech.icon}</span>
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

        {/* ── COLUMNA DERECHA: TARJETA DE PERFIL CON ARO NEON Y PANEL ── */}
        <div className="hero-right-card">
          <div className="profile-glass-card">
            
            {/* Elementos decorativos de fondo flotantes */}
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>

            {/* Contenedor central de la foto con Halo Ovalado Neon 360° */}
            <div className="profile-image-oval-wrapper">
              <div className="neon-halo-ring"></div>
              <div className="neon-halo-secondary"></div>
              <img 
                src="/imagen/gafas.png" 
                alt="Foto de perfil Yessica Jaramillo - Aprendiz SENA ADSO" 
                className="profile-oval-photo"
              />
            </div>

            {/* Panel Inferior de Habilidades (3 Columnas) */}
            <div className="skills-subpanel-grid">
              <div className="subpanel-col">
                <div className="subpanel-icon-circle purple-glow">
                  <Code2 size={20} />
                </div>
                <h4 className="subpanel-title">Desarrollo</h4>
                <p className="subpanel-desc">Web Full Stack</p>
              </div>

              <div className="subpanel-divider"></div>

              <div className="subpanel-col">
                <div className="subpanel-icon-circle violet-glow">
                  <Monitor size={20} />
                </div>
                <h4 className="subpanel-title">Interfaces</h4>
                <p className="subpanel-desc">Intuitivas</p>
              </div>

              <div className="subpanel-divider"></div>

              <div className="subpanel-col">
                <div className="subpanel-icon-circle fuchsia-glow">
                  <Zap size={20} />
                </div>
                <h4 className="subpanel-title">Soluciones</h4>
                <p className="subpanel-desc">Efectivas</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── SECCIÓN HORIZONTAL DE VALORES (4 ITEMS) ── */}
      <div className="values-banner-card">
        {values.map((val, idx) => (
          <div key={idx} className="value-item-box">
            <div className="value-icon-wrapper">
              {val.icon}
            </div>
            <div className="value-text-group">
              <h4 className="value-title">{val.title}</h4>
              <p className="value-description">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
