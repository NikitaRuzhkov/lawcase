import { termsItems } from '../../data/terms';
import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <SectionBlock
        title="Terms & Conditions"
        subtitle="Your Privacy Matters"
      />
      <div className="wrapper">
        <div className="terms-page-inner">
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to LawCase. By accessing or using our website, you agree to
            comply with and be bound by the following Terms and Conditions. If
            you do not agree with these terms, please refrain from using our
            services.
          </p>
          <ul>
            {termsItems.map(item => (
              <li key={item.id}>
                <h2>
                  <span>{item.id}.</span>
                  {item.title}
                </h2>
                {Array.isArray(item.text) ? (
                  <ul>
                    {item.text.map((point, idx) => (
                      <li className="terms-item" key={idx}>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SectionBlock isDefault={false} />
    </div>
  );
};

export { Terms };
