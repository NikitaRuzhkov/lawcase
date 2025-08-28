import './Home.css';

import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';
import {
  HomeAbout,
  HomeBlog,
  HomeCarousel,
  HomeChoose,
  HomeCustomers,
  HomeFaq,
  HomeFirst,
  HomeProcess,
  HomeServices,
} from './homecomponents';

const Home = () => {
  return (
    <section className="home">
      <HomeFirst />
      <HomeCarousel direction="left" />
      <div className="wrapper">
        <HomeAbout />
        <HomeChoose />
        <HomeServices />
        <HomeProcess />
        <HomeCustomers />
        <HomeFaq />
        <HomeBlog />
      </div>
      <SectionBlock isDefault={false} />
    </section>
  );
};

export { Home };
