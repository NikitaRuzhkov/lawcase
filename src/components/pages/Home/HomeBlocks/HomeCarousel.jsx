import { homeSwiper } from '../../../data/homeSwiper';
import { Carousel } from '../../../UI/Carousel/Carousel';

const HomeCarousel = () => {
  return (
    <Carousel>
      {homeSwiper.map((item, i) => (
        <img key={i} src={item.icon} alt={item.icon} />
      ))}
    </Carousel>
  );
};

export { HomeCarousel };
