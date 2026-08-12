import React, { useState } from 'react';
import { Code, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'experiencia', label: 'Experiencia', href: '#experiencia' },
    { id: 'slider', label: 'Proyectos', href: '#slider' },
    { id: 'proyectos-destacados', label: 'Destacados', href: '#proyectos-destacados' },
    { id: 'tu-proyecto', label: 'Contacto', href: '#tu-proyecto' }
  ];

  return (
    <header className="navbar-container">
      <div className="logo-wrapper">
        <span className="code-icon">&lt;/&gt;</span>
        <span className="logo-name">
          Yessica <span className="logo-gradient">Jaramillo</span>
        </span>
      </div>

      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveNav(item.id);
              setMobileMenuOpen(false);
            }}
          >
            {item.label}
            {activeNav === item.id && <span className="nav-active-indicator"></span>}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <a href="#contacto" className="btn-cv" onClick={(e) => { e.preventDefault(); alert("Descargando currículum vitae de Yessica Jaramillo..."); }}>
          <Download size={16} />
          <span>Descargar CV</span>
        </a>
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
