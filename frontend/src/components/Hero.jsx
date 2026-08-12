import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <aside className="contenido" id="contenido">
        <div className="texto">
          <div className="status-badge">
            <div className="status-dot"></div>
            Disponible para nuevos proyectos
          </div>
          
          <h1>
            Yessica Jaramillo<br />
            <span className="highlight">Aprendiz SENA</span><br />
            Tecnólogo ADSO
          </h1>
          
          <p>
            Apasionada por el desarrollo de software y la creación de soluciones web modernas.
            Formándome en el tecnólogo en <strong>Análisis y Desarrollo de Software (ADSO)</strong> en el SENA, con enfoque en desarrollo Frontend, Backend, diseño de interfaces intuitivas y arquitectura de aplicaciones web robustas.
          </p>

          <div className="skills-chips">
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Node.js</span>
            <span className="skill-chip">Express</span>
            <span className="skill-chip">MongoDB</span>
            <span className="skill-chip">MySQL</span>
            <span className="skill-chip">Git / GitHub</span>
            <span className="skill-chip">APIs REST</span>
          </div>
          
          <div className="buttons-row" style={{ marginTop: '20px' }}>
            <a href="#tu-proyecto" className="btn primary">Trabajemos juntos</a>
            <a href="#experiencia" className="btn">Ver mis proyectos</a>
          </div>
        </div>
      </aside>

      <aside className="widgets-container" id="foto">
        <img src="/imagen/gafas.png" alt="Foto de perfil Yessica Jaramillo - Aprendiz SENA" />
      </aside>
    </section>
  );
}
