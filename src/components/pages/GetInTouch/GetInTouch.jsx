import { getContactImg } from '../../../assets/images';
import { contacts } from '../../data/contact';
import { MyTitle } from '../../UI/MyTitle/MyTitle';
import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

import './GetInTouch.css';

import { GetInTouchForm } from './GetInTouchForm';

const GetInTouch = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className="get-contact">
      <div className="get-contact-inner">
        <img src={getContactImg} alt="" />
        <div className="get-contact-content">
          <MyTitle title="Contact Us" subtitle="Get In Touch" />
          <GetInTouchForm />
        </div>
      </div>
      <div className="wrapper">
        <div className="get-contact-items">
          {contacts.map(contact => {
            let href = contact.text;

            if (contact.title === 'Call') {
              href = `tel:${contact.text}`;
            } else if (contact.title === 'Email') {
              href = `mailto:${contact.text}`;
            } else if (contact.title === 'Addres') {
              href = `https://www.google.com/maps/search/${encodeURIComponent(contact.text)}`;
            }

            return (
              <div className="get-contact-item" key={contact.id}>
                <img src={contact.image} alt={contact.title} />
                <div className="get-contact-box">
                  <div className="get-contact-img">
                    <img src={contact.icon} alt={contact.title} />
                  </div>
                  <h2>{contact.title}</h2>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {contact.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="get-contact-title">
        <SectionBlock isDefault={false} onBtnClick={handleClick} />
      </div>
    </section>
  );
};

export { GetInTouch };
