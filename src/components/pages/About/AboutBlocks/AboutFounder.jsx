import { founderImg, founderOne } from '../../../../assets/images';

const AboutFounder = () => {
  const founder = [
    {
      id: 1,
      number: '1993',
      text: "Founded in 1993, LawCase Law Firm's dedicated team serves clients across the globe, with a presence in over 80 cities worldwide.",
    },
    {
      id: 2,
      number: '2k+',
      text: '2k+ Case Solved. LawCase Law Firm has a proven track record of delivering effective legal solutions. ',
    },
  ];
  return (
    <div className="about-founder">
      <div className="about-founder-left">
        <div className="about-founder-block">
          <img src={founderImg} alt="Founder" />
          <div className="founder-position">
            <h2>John Canady</h2>
            <p>Founder & CEO</p>
          </div>
        </div>
        <p className="fouder-text">
          At LawCase Law Firm, we are committed to delivering exceptional legal
          services with integrity and precision. Our experienced team
          specializes in a wide range of legal areas, providing personalized
          solutions tailored to your needs.{' '}
        </p>
      </div>
      <div className="about-founder-right">
        <img src={founderOne} alt="judge" />
        <div className="founder-items">
          {founder.map(item => (
            <div className="founder-item" key={item.id}>
              <h1>{item.number}</h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AboutFounder };
