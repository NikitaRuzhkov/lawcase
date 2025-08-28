import { team } from '../../../data/team';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';
import { SocialBlock } from '../../../UI/SocialBlock/SocialBlock';

const AboutTeam = () => {
  return (
    <div className="about-team">
      <MyTitle title="Our Team" subtitle="Excellence Through Teamwork" />
      <div className="about-team-items">
        {team.map(item => (
          <div className="about-team-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <span>{item.position}</span>
            <SocialBlock />
          </div>
        ))}
      </div>
    </div>
  );
};

export { AboutTeam };
