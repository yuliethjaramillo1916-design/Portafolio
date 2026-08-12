import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SgUP564PlawSTNAUq9xyUc3b55f__1OarA&s',
    alt: 'Proyecto 1'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1729508419473-b2d296bffbb2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    alt: 'Proyecto 2'
  },
  {
    id: 3,
    image: 'https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg',
    alt: 'Proyecto 3'
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
