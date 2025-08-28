import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';
import { ServicesCarousel } from './ServiceBlocks/ServicesCarousel';
import { ServicesItems } from './ServiceBlocks/ServicesItems';
import { ServiceVideo } from './ServiceBlocks/ServiceVideo';

import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <SectionBlock
        title="Services"
        subtitle="Tailored Services for Your Needs."
      />
      <div className="wrapper">
        <ServicesItems />
      </div>
      <ServicesCarousel />
      <div className="wrapper">
        <ServiceVideo />
      </div>
      <div className="services-block">
        <SectionBlock isDefault={false} />
      </div>
    </section>
  );
};

export { Services };
