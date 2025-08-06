import {
  aboutFour,
  aboutOne,
  aboutThree,
  aboutTwo,
} from '../../../../assets/images';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const AboutContent = () => {
  const aboutContent = [
    {
      id: 1,
      image: aboutThree,
      title: 'Our Mission',
      text: 'To deliver exceptional legal services with integrity and a client-first approach, ensuring the best outcomes for our clients.',
    },
    {
      id: 2,
      image: aboutFour,
      title: 'Our Vision',
      text: 'To become a trusted legal partner, known for excellence, innovation, and unwavering commitment to justice.',
    },
  ];
  return (
    <div className="about-content">
      <div className="about-top">
        <div className="about-left">
          <MyTitle
            title="About Lawcase"
            subtitle="Empowering Justice Through Expertise"
          />
          <p>
            At LawCase Law Firm, we are committed to delivering exceptional
            legal services with integrity and precision. Our experienced team
            specializes in a wide range of legal areas, providing personalized
            solutions tailored to your needs. <br /> <br />
            Whether navigating complex disputes or offering strategic counsel,
            we strive to protect your rights and achieve the best possible
            outcomes.
          </p>
          <GetInTouchBtn />
        </div>
        <div className="about-right">
          <img src={aboutOne} alt="image" />
          <img src={aboutTwo} alt="image" />
        </div>
      </div>
      <div className="about-bot">
        {aboutContent.map(item => (
          <div className="about-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="about-item-box">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { AboutContent };
