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
      <h2 className="section-title">Proyectos Destacados</h2>
      
      <div className="widgets-container">
        <div className="widgets-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="widget">
              <div className="widget-icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
              <p>{proj.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
