import {
  homeOne,
  homeTitleLeft,
  homeTitleRight,
} from '../../../../assets/images';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';

const HomeFirst = () => {
  return (
    <div
      className="home-first"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(23, 36, 35, 0.9) 38%,  
            rgba(23, 36, 35, 0.8) 49%,  
            rgba(23, 36, 35, 0.6) 57%, 
            rgba(23, 36, 35, 0.3) 73%,  
            rgba(23, 36, 35, 0) 100%    
          ),
          url(${homeOne})
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="wrapper">
        <div className="home-first-inner">
          <div className="home-first-text">
            <img src={homeTitleLeft} />
            Award Wining Law Firm
            <img src={homeTitleRight} />
          </div>
          <h1>Advocating Justice, Delivering Results</h1>
          <p>
            Our law firm combines legal expertise with personalized solutions to
            protect your rights and achieve your goals.
          </p>
          <GetInTouchBtn />
        </div>
      </div>
    </div>
  );
};

export { HomeFirst };
