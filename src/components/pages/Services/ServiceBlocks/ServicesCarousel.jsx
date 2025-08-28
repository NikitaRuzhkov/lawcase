import { services } from '../../../data/services';
import { Carousel } from '../../../UI/Carousel/Carousel';

const ServicesCarousel = () => {
  return (
    <Carousel>
      {services.map(item => (
        <div className="services-item-carousel" key={item.id}>
          <p className="services-item-text">/</p>
          <h2>{item.title}</h2>
        </div>
      ))}
    </Carousel>
  );
};

export { ServicesCarousel };
