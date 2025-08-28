import { posterVideo, serviceVideo } from '../../../../assets/images';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { VideoPlayer } from '../../../UI/VideoPlayer/VideoPlayer';

const ServiceVideo = () => {
  return (
    <div className="service-video">
      <VideoPlayer src={serviceVideo} poster={posterVideo} />
      <h2>Dedicated to Justice, Driven by Integrity.</h2>
      <span>
        At Lawcase, we offer expert legal solutions tailored to your needs. With
        a focus on justice, integrity, & results, our experienced team stands by
        your side every step of the way.
      </span>
      <GetInTouchBtn />
    </div>
  );
};

export { ServiceVideo };
