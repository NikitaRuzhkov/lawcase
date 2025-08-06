import { useRef, useState } from 'react';

import { minusImg, plusImg } from '../../../../assets/images';
import { faq } from '../../../data/faq';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const HomeFaq = () => {
  const [openIds, setOpenIds] = useState([]);

  const handleToggle = id => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="home-faq">
      <MyTitle title="FAQ" subtitle="Insights & Clarifications" />
      <div className="home-faq-items">
        {faq.map(item => {
          const contentRef = useRef(null);
          const isOpen = openIds.includes(item.id);
          return (
            <div className="home-faq-item" key={item.id}>
              <div
                className="home-faq-header"
                onClick={() => handleToggle(item.id)}
              >
                <h3>{item.question}</h3>
                <img src={isOpen ? minusImg : plusImg} alt="toggle" />
              </div>

              <div
                ref={contentRef}
                className="faq-content"
                style={{
                  maxHeight: isOpen
                    ? `${contentRef.current?.scrollHeight}px`
                    : '0px',
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { HomeFaq };
