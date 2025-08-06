import React, { useEffect, useRef } from 'react';

import { homeSwiper } from '../../../data/homeSwiper';

const HomeCarousel = ({ direction = 'left', speed = 0.6 }) => {
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
    <div className="home-carousel-container" ref={carouselRef}>
      <div className="home-carousel-content">
        {[...homeSwiper, ...homeSwiper].map((item, index) => (
          <div className="home-carousel-item" key={index}>
            <img src={item.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { HomeCarousel };
