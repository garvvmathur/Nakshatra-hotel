import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    `${process.env.PUBLIC_URL}/images/gallery1.jpg`,
    `${process.env.PUBLIC_URL}/images/gallery2.jpg`,
    `${process.env.PUBLIC_URL}/images/gallery3.jpg`,
    `${process.env.PUBLIC_URL}/images/gallery4.jpg`,
    `${process.env.PUBLIC_URL}/images/gallery5.jpg`,
    `${process.env.PUBLIC_URL}/images/gallery6.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(images.length / 3)) % Math.ceil(images.length / 3));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header-overlay">
        <h2>GALLERY</h2>
      </div>
      
      <div className="gallery-slider">
        <button className="gallery-nav prev" onClick={prevSlide}>‹</button>
        
        <div className="gallery-container">
          <div 
            className="gallery-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <button className="gallery-nav next" onClick={nextSlide}>›</button>
      </div>
      
      <div className="gallery-footer-overlay">
        <p><a href='/gallery' className="show-more-link">Show&nbsp;More</a></p>
      </div>
    </section>
  );
};

export default Gallery;