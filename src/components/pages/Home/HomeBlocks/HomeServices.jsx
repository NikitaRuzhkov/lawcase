import { MyLink } from '../../../UI/MyLink/MyLink';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';
import { ServicesItems } from '../../pages';

const HomeServices = () => {
  return (
    <div className="home-services">
      <MyTitle title="Services" subtitle="Explore Our Services" />
      <ServicesItems limit="4" />
      <MyLink to="/services">View All Services</MyLink>
    </div>
  );
};

export { HomeServices };
