import React, { useState, useEffect } from 'react';

// =========================================================================
// CONFIGURACIÓN DE ENLACES A PROYECTOS EN LÍNEA
// Puedes reemplazar las URLs a continuación con los enlaces reales de tus proyectos:
// =========================================================================
const SIGEP_TURNOS_URL = "PEGAR_AQUI_URL_DE_SIGEP_TURNOS";
const KASSY_URL = "PEGAR_AQUI_URL_DE_KASSY";

const defaultExperiences = [
  {
    id: 'sigep-turnos',
    title: '🏢 SIGEP-Turnos',
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
    linkText: '🚀 Ver SIGEP-Turnos en línea',
    isPrimary: true
  },
  {
    id: 'kassy',
    title: '🎓 KASSY',
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
    linkText: '🚀 Explorar KASSY',
    isPrimary: true
  },
  {
    id: 'total-red',
    title: '🌐 Total-Red',
    tagline: 'Monitoreo de Redes de Datos',
    description: 'Sistema de gestión y monitoreo continuo de infraestructura de red con dashboard interactivo en tiempo real y sistema de alertas automáticas.',
    technologies: ['JavaScript', 'Node.js', 'CSS', 'APIs'],
    isPrimary: false
  },
  {
    id: 'sicap',
    title: '🔐 SICAP',
    tagline: 'Control de Acceso Empresarial',
    description: 'Plataforma empresarial para el control de acceso, registro de personal, generación de reportes detallados y panel administrativo seguro.',
    technologies: ['React', 'Express', 'MySQL', 'JWT'],
    isPrimary: false
  },
  {
    id: 'pos',
    title: '💳 Sistema POS',
    tagline: 'Punto de Venta y Facturación',
    description: 'Solución punto de venta para control de inventarios, facturación electrónica y análisis de ventas en tiempo real.',
    technologies: ['React', 'Node.js', 'Base de Datos', 'CSS'],
    isPrimary: false
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
                <h3>{exp.title}</h3>
                {exp.tagline && <span className="project-tagline">{exp.tagline}</span>}
              </div>

              <p className="project-desc">{exp.description}</p>

              {/* Sección visual Cómo Funciona si está presente */}
              {exp.howItWorks && (
                <div className="how-it-works-box">
                  <div className="how-it-works-title">⚡ ¿Cómo funciona?</div>
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
                    className="btn primary btn-project-action"
                    onClick={(e) => {
                      if (!isUrlConfigured) {
                        e.preventDefault();
                        alert(`Configura la URL de este proyecto en el archivo Experience.jsx reemplazando la constante correspondiente.`);
                      }
                    }}
                  >
                    {exp.linkText}
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
