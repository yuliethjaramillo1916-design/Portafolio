import React, { useState } from 'react';
import { Code, Download, Menu, X, Rabbit, FileText } from 'lucide-react';
import PdfModal from './PdfModal';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalDoc, setModalDoc] = useState(null);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'experiencia', label: 'Experiencia', href: '#experiencia' },
    { id: 'slider', label: 'Proyectos', href: '#slider' },
    { id: 'tu-proyecto', label: 'Contacto', href: '#tu-proyecto' }
  ];

  // Controladores para abrir modal de cada documento
  const handleOpenCv = () => {
    setModalDoc({
      title: 'Currículum Vitae',
      subtitle: 'CV Profesional • Yessica Jaramillo',
      fileUrl: '/imagen/CV.pdf',
      fileName: 'CV_Yessica_Jaramillo.pdf'
    });
  };

  const handleOpenHdv = () => {
    setModalDoc({
      title: 'Hoja de Vida',
      subtitle: 'Hoja de Vida Completa • Yessica Jaramillo',
      fileUrl: '/imagen/Hoja de vida.pdf',
      fileName: 'Hoja_de_vida_Yessica_Jaramillo.pdf'
    });
  };

  return (
    <>
      <header className="navbar-container">
        <div className="logo-wrapper">
          <Rabbit className="code-icon" style={{ color: '#a855f7', marginRight: '8px' }} size={32} />
          <span className="logo-name">
            Portafolio <span className="logo-gradient">Web</span>
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
          {/* Botones adicionales dentro del menú móvil para mejor accesibilidad */}
          <div className="mobile-cv-group">
            <button 
              type="button" 
              onClick={() => { handleOpenCv(); setMobileMenuOpen(false); }} 
              className="btn-cv"
            >
              <Download size={16} />
              <span>Descargar CV</span>
            </button>
            <button 
              type="button" 
              onClick={() => { handleOpenHdv(); setMobileMenuOpen(false); }} 
              className="btn-cv btn-cv-hdv"
            >
              <FileText size={16} />
              <span>Descargar Hoja de Vida</span>
            </button>
          </div>
        </nav>

        <div className="nav-right">
          <button 
            type="button" 
            onClick={handleOpenCv} 
            className="btn-cv"
            title="Previsualizar y descargar CV"
          >
            <Download size={16} />
            <span>Descargar CV</span>
          </button>

          <button 
            type="button" 
            onClick={handleOpenHdv} 
            className="btn-cv btn-cv-hdv"
            title="Previsualizar y descargar Hoja de Vida"
          >
            <FileText size={16} />
            <span>Descargar Hoja de Vida</span>
          </button>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Modal interactivo para visualizar y descargar el documento */}
      <PdfModal 
        isOpen={Boolean(modalDoc)} 
        doc={modalDoc} 
        onClose={() => setModalDoc(null)} 
      />
    </>
  );
}
