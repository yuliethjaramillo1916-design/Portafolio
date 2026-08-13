import React, { useState, useEffect } from 'react';

const defaultProjects = [
  {
    id: 1,
    icon: '🧮',
    title: 'Calculadora',
    category: 'Herramientas matemáticas'
  },
  {
    id: 2,
    icon: '🔐',
    title: 'Generador de Contraseñas',
    category: 'Seguridad avanzada'
  },
  {
    id: 3,
    icon: '⏱️',
    title: 'Cronómetro',
    category: 'Control de tiempo'
  }
];

const renderWidgetIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('calculadora')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="svg-vector-icon" style={{width: '36px', height: '36px'}}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>
    );
  }
  if (t.includes('contraseña') || t.includes('seguridad')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="svg-vector-icon" style={{width: '36px', height: '36px'}}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/><rect x="12" y="15" width="2" height="3" rx="1"/></svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="svg-vector-icon" style={{width: '36px', height: '36px'}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
  );
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setProjects(data.data);
        }
      })
      .catch(() => {
        console.log('Servidor backend offline, cargando datos predeterminados.');
      });
  }, []);

  return (
    <section id="proyectos-destacados" className="proyectos-destacados">
      <h2 className="section-title">Herramientas Desarrolladas</h2>
      
      <div className="widgets-container">
        <div className="widgets-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="widget">
              <div className="widget-icon">{renderWidgetIcon(proj.title)}</div>
              <h3>{proj.title}</h3>
              <p>{proj.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
