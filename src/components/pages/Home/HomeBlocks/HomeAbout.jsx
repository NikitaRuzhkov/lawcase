import { homeAbout } from '../../../data/homeAbout';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="home-about-inner">
        <div className="home-about-left">
          <MyTitle
            title="About Us"
            subtitle="Dedicated to Justice, Driven by Integrity."
          />
          <p>
            At Lawcase, we offer expert legal solutions tailored to nyour needs.
            With a focus on justice, integrity, & results, our experienced team
            stands by your side every step of the way.
          </p>
          <GetInTouchBtn />
        </div>
        <div className="home-about-right">
          {homeAbout.map(item => (
            <div className="home-about-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="home-about-content">
                <div className="home-about-img">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HomeAbout };
