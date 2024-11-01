import React, { useRef, useEffect } from 'react';
import './styles/Gallery.css';

const SimpleGallery = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = [
    "photo-1581090464777-f3220bbe1b8b",
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1504893524553-b855bce32c67",
    "photo-1461749280684-dccba630e2f6",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    if (carousel) {
      carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
      });

      carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
      });

      carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <div className="gallery-section">
      <h2>Наша галерея</h2>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-content">
          {images.map((imageId, index) => (
            <div key={index} className="carousel-item">
              <div className="image-wrapper">
                <img
                  src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Галерея ${index + 1}`}
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleGallery;