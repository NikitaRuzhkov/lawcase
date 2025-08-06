import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { homeSwiper } from '../../data/homeSwiper';

const HomeSwiper = () => {
  return (
    <>
      <Swiper
        className="home-swiper"
        modules={[Autoplay, FreeMode]}
        slidesPerView={12}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        speed={4500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        grabCursor={false}
      >
        {homeSwiper.map(item => (
          <SwiperSlide key={item.id} className="swiper-item">
            <img src={item.icon} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { HomeSwiper };
