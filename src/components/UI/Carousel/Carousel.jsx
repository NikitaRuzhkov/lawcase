import { useEffect, useRef } from 'react';

import './Carousel.css';

const Carousel = ({ children, direction = 'left', speed = 0.6 }) => {
  const carouselRef = useRef(null);
  const requestIdRef = useRef(0);
  const positionRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth / 2;

    const animate = () => {
      positionRef.current += direction === 'left' ? speed : -speed;

      if (positionRef.current >= maxScroll) {
        positionRef.current = 0;
      } else if (positionRef.current <= 0) {
        positionRef.current = maxScroll;
      }

      carousel.scrollLeft = positionRef.current;
      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestIdRef.current);
  }, [direction, speed]);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-content">
        {[children, children].flat().map((child, i) => (
          <div className="carousel-item" key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
