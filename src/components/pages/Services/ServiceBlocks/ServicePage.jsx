import { useParams } from 'react-router-dom';

import { callingImg, callUsImg } from '../../../../assets/images';
import { services } from '../../../data/services';
import { SectionBlock } from '../../../UI/SectionBlock/SectionBlock';

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === Number(id));
  return (
    <div className="service-page">
      <SectionBlock title="Service Details" subtitle={service.title} />
      <div className="wrapper">
        <img className="service-page-img" src={service.image} alt="" />
        <div className="service-page-content">
          <div className="service-page-left">
            <h2>Overview</h2>
            <p>{service.overview}</p>
            <ul>
              <h3>Our Service Include:</h3>
              {service.servicesList.map((item, i) => (
                <li className="service-page-left-li" key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              With a deep understanding of business law and industry-specific
              regulations, our legal team is committed to helping businesses
              operate smoothly, minimize risks, and achieve long-term success.
            </p>
            <h2>Our Approach</h2>
            <p>{service.approach}</p>
            <h2>Why Choose Us?</h2>
            <p>{service.whyChooseUs}</p>
          </div>
          <div className="service-page-right">
            <img src={callUsImg} alt="" />
            <h2>Get Free Consultation</h2>
            <p>
              Unlock a free consultation. Our team is ready to discuss your
              legal matters and provide valuable insights.
            </p>
            <div className="service-page-contact">
              <a
                className="service-page-contact-img"
                href="tel:+919574468870"
                target="_blank"
                rel="noreferrer"
              >
                <img src={callingImg} alt="" />
              </a>
              <div className="service-page-tel">
                <span>Call Us</span>
                <a href="tel:+919574468870">+91 95744 68870</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionBlock
        title="Reach out"
        subtitle="Our experienced attorney are here to answer any questions"
        isBtn={false}
      />
    </div>
  );
};

export { ServicePage };
