import { processPage } from '../../../data/process';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const HomeProcess = () => {
  return (
    <div className="home-process">
      <MyTitle title="Process" subtitle="Explore Our Process" />
      <div className="home-process-items">
        {processPage.map(process => (
          <div className="home-process-item" key={process.id}>
            <img src={process.image} alt={process.title} />
            <div className="home-process-content">
              <span>{process.number}</span>
              <h3>{process.title}</h3>
              <p>{process.text}</p>
            </div>
          </div>
        ))}
      </div>
      <GetInTouchBtn />
    </div>
  );
};

export { HomeProcess };
