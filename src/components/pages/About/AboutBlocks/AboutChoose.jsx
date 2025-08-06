import { aboutChoose } from '../../../data/aboutChoose';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const AboutChoose = () => {
  return (
    <div className="about-choose">
      <MyTitle title="Why Choose Us" subtitle="Why should you work with us?" />
      <div className="about-choose-items">
        {aboutChoose.map(item => (
          <div className="about-choose-item" key={item.id}>
            <span>
              <img src={item.icon} alt={item.title} />
            </span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <GetInTouchBtn />
    </div>
  );
};

export { AboutChoose };
