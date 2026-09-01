import React, { useState, useEffect } from 'react';

// =========================================================================
// CONFIGURACIÓN DE ENLACES A PROYECTOS EN LÍNEA Y GITHUB
// =========================================================================
const SIGEP_TURNOS_URL = "https://yessica.online/turnos";
const SIGEP_TURNOS_GITHUB = "https://github.com/yuliethjaramillo1916-design/SIGEP-Turnos.git";

const KASSY_URL = "https://klassy.teamfusion.site";
const KASSY_GITHUB = "https://github.com/sahiramvs162007-oss/Klassy-3.0.git";

const SGDP_URL = "#"; // El usuario proporcionará este enlace en línea
const SGDP_GITHUB = "https://github.com/yuliethjaramillo1916-design/SGDP.git";

const defaultExperiences = [
  {
    id: 'sigep-turnos',
    title: 'SIGEP-Turnos',
    tagline: 'Plataforma Web para Gestión y Control de Turnos',
    description: 'SIGEP-Turnos es una plataforma web integral diseñada para la gestión, organización y control eficiente de turnos y atención al usuario. Permite administrar filas de espera en tiempo real, usuarios, trámites y ventanillas de atención, visualizando el llamado de turnos en una pantalla pública interactiva. Cuenta con una arquitectura multi-entidad para separar y proteger los datos de cada organización.',
    howItWorks: [
      '1. Generación del turno por parte del usuario.',
      '2. Selección del trámite o servicio correspondiente.',
      '3. Ingreso automático a la fila de espera.',
      '4. El operador atiende desde su ventanilla asignada.',
      '5. El sistema realiza el llamado del siguiente turno.',
      '6. Visualización inmediata en la pantalla pública con alertas.',
      '7. Registro y auditoría del proceso para métricas y control de gestión.'
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.io', 'CSS'],
    linkUrl: SIGEP_TURNOS_URL,
    linkText: 'Ver en línea',
    githubUrl: SIGEP_TURNOS_GITHUB,
    isPrimary: true
  },
  {
    id: 'kassy',
    title: 'KLASSY',
    tagline: 'Plataforma Web de Gestión de Procesos Académicos',
    description: 'KLASSY es una solución web orientada a optimizar y centralizar la administración de procesos académicos institucionales. Facilita la organización integral de estudiantes, docentes, asignaturas, calificaciones, registro de asistencia y control administrativo mediante un sistema modular y seguro.',
    howItWorks: [
      '1. Ingreso seguro a la plataforma según credenciales.',
      '2. Control de acceso y vistas personalizadas según el rol (Administrador, Docente, Estudiante).',
      '3. Los docentes gestionan asignaturas, evaluaciones y asistencias.',
      '4. Los estudiantes consultan su historial académico, notas y reportes.',
      '5. Los administradores gestionan usuarios, grupos e información institucional.',
      '6. Centralización total de los procesos académicos en un único sistema confiable.'
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL / MongoDB', 'CSS', 'APIs REST'],
    linkUrl: KASSY_URL,
    linkText: 'Ver en línea',
    githubUrl: KASSY_GITHUB,
    isPrimary: true
  },
  {
    id: 'sgdp',
    title: 'SGDP',
    tagline: 'Sistema de Gestión y Desarrollo de Procesos',
    description: 'SGDP es una plataforma web desarrollada para la administración, control y seguimiento eficiente de procesos y registros. Cuenta con autenticación segura, gestión modular de información y diseño responsive optimizado para flujos de trabajo institucionales.',
    howItWorks: [
      '1. Acceso autenticado según el rol asignado de usuario.',
      '2. Registro y gestión de información en tiempo real.',
      '3. Visualización y organización de módulos del sistema.',
      '4. Generación de métricas, reportes y control de actividades.'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL / MongoDB', 'CSS', 'APIs REST', 'Git / GitHub'],
    linkUrl: SGDP_URL,
    linkText: 'Ver en línea',
    githubUrl: SGDP_GITHUB,
    isPrimary: true
  }
];

export default function Experience() {
  const [experiences, setExperiences] = useState(defaultExperiences);
  const [draggedIndex, setDraggedIndex] = useState(null);

  useEffect(() => {
    // Intentar sincronizar con backend si está disponible, conservando los datos predeterminados
    fetch('http://localhost:5000/api/experience')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          setExperiences(data.data);
        }
      })
      .catch(() => {
        // Modo offline / estático: se usan los datos locales
      });
  }, []);

  // Manejadores de Drag and Drop para reordenar las tarjetas
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const updated = [...experiences];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, movedItem);
    setExperiences(updated);
    setDraggedIndex(null);
  };

  return (
    <section id="experiencia" className="experience">
      <h2 className="section-title">Proyectos & Experiencia del Aprendiz</h2>
      
      <div className="projects-grid">
        {experiences.map((exp, index) => {
          const isUrlConfigured = exp.linkUrl && exp.linkUrl !== '#' && exp.linkUrl.startsWith('http');
          const hrefValue = isUrlConfigured ? exp.linkUrl : '#';

          return (
            <article
              key={exp.id || index}
              className={`project-card ${exp.isPrimary ? 'featured-card' : ''}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
            >
              <div className="project-card-header">
                <h3>
                  {exp.id === 'sigep-turnos' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-vector-icon" style={{marginRight: '6px'}}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="16"/><line x1="15" y1="22" x2="15" y2="16"/><line x1="9" y1="16" x2="15" y2="16"/><path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zM8 11h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>
                  ) : exp.id === 'kassy' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-vector-icon" style={{marginRight: '6px'}}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-vector-icon" style={{marginRight: '6px'}}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  )}
                  {exp.title.replace('🏢 ', '').replace('🎓 ', '')}
                </h3>
                {exp.tagline && <span className="project-tagline">{exp.tagline}</span>}
              </div>

              <p className="project-desc">{exp.description}</p>

              {/* Sección visual Cómo Funciona */}
              {exp.howItWorks && (
                <div className="how-it-works-box">
                  <div className="how-it-works-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-vector-icon" style={{marginRight: '4px'}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    ¿Cómo funciona?
                  </div>
                  <ul className="flow-steps">
                    {exp.howItWorks.map((step, idx) => (
                      <li key={idx} className="flow-step">{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologías utilizadas */}
              {exp.technologies && (
                <div className="tech-badge-container">
                  <span className="tech-label">Tecnologías:</span>
                  <div className="tech-badges">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Botones de acción: GitHub y Demo en línea */}
              <div className="project-action-wrapper">
                {exp.githubUrl && (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-github"
                    title={`Ver repositorio de ${exp.title} en GitHub`}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="github-action-icon">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {exp.linkText && (
                  <a
                    href={hrefValue}
                    target={isUrlConfigured ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn-project-action"
                    onClick={(e) => {
                      if (!isUrlConfigured) {
                        e.preventDefault();
                        alert(`El enlace en línea de ${exp.title} estará disponible próximamente.`);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    <span>{isUrlConfigured ? exp.linkText : 'Próximamente en línea'}</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <p className="hint-text">💡 Puedes arrastrar las tarjetas para reordenarlas a tu gusto</p>
    </section>
  );
}
