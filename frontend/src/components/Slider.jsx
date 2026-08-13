import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/imagen/Klassy.jpeg',
    alt: 'Klassy'
  },
  {
    id: 2,
    image: '/imagen/SIGEP-Turnos.jpeg',
    alt: 'SIGEP-Turnos'
  },
  {
    id: 3,
    image: '/imagen/Klassy 2.jpeg',
    alt: 'Klassy 2'
  },
  {
    id: 4,
    image: '/imagen/SIGEP-Turnos 2.jpeg',
    alt: 'SIGEP-Turnos 2'
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Cambio automático de imagen cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="slider" className="slider-section">
      <h2 className="section-title">Mis Proyectos</h2>
      
      <div className="slider-wrapper">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slider-slide">
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button className="slider-btn" onClick={handlePrev} aria-label="Imagen anterior">
          ❮
        </button>
        <button className="slider-btn" onClick={handleNext} aria-label="Imagen siguiente">
          ❯
        </button>
      </div>
    </section>
  );
}
