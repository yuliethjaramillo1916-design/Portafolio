import React from 'react';

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <div className="marca">Yessica Jaramillo</div>
      </div>
      
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#slider">Proyectos</a>
        <a href="#proyectos-destacados">Destacados</a>
        <a href="#tu-proyecto">Contacto</a>
      </nav>
    </header>
  );
}
