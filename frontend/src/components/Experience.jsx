import React, { useState, useEffect } from 'react';

// =========================================================================
// CONFIGURACIÓN DE ENLACES A PROYECTOS EN LÍNEA
// =========================================================================
const SIGEP_TURNOS_URL = "https://yessica.online/turnos";
const KASSY_URL = "PEGAR_AQUI_URL_DE_KASSY";

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
    linkText: 'Ver SIGEP-Turnos en línea',
    isPrimary: true
  },
  {
    id: 'kassy',
    title: 'KASSY',
    tagline: 'Plataforma Web de Gestión de Procesos Académicos',
    description: 'KASSY es una solución web orientada a optimizar y centralizar la administración de procesos académicos institucionales. Facilita la organización integral de estudiantes, docentes, asignaturas, calificaciones, registro de asistencia y control administrativo mediante un sistema modular y seguro.',
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
    linkText: 'Explorar KASSY',
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
          const isUrlConfigured = exp.linkUrl && exp.linkUrl !== 'PEGAR_AQUI_URL_DE_SIGEP_TURNOS' && exp.linkUrl !== 'PEGAR_AQUI_URL_DE_KASSY' && exp.linkUrl.startsWith('http');
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-vector-icon" style={{marginRight: '6px'}}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="16"/><line x1="15" y1="22" x2="15" y2="16"/><line x1="9" y1="16" x2="15" y2="16"/><path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zM8 11h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-vector-icon" style={{marginRight: '6px'}}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                  )}
                  {exp.title.replace('🏢 ', '').replace('🎓 ', '')}
                </h3>
                {exp.tagline && <span className="project-tagline">{exp.tagline}</span>}
              </div>

              <p className="project-desc">{exp.description}</p>

              {/* Sección visual Cómo Funciona si está presente */}
              {exp.howItWorks && (
                <div className="how-it-works-box">
                  <div className="how-it-works-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-vector-icon" style={{marginRight: '4px'}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
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

              {/* Botón de acceso al proyecto en línea */}
              {exp.linkText && (
                <div className="project-action-wrapper">
                  <a
                    href={hrefValue}
                    target={isUrlConfigured ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn-project-action"
                    onClick={(e) => {
                      if (!isUrlConfigured) {
                        e.preventDefault();
                        alert(`Configura la URL de este proyecto en el archivo Experience.jsx reemplazando la constante correspondiente.`);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-vector-icon" style={{marginRight: '6px', stroke: 'currentColor'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {exp.linkText.replace('🚀 ', '')}
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <p className="hint-text">💡 Puedes arrastrar las tarjetas para reordenarlas a tu gusto</p>
    </section>
  );
}
