import { Link } from 'react-router-dom';

import './GetInTouchBtn.css';

import { callingImg } from '../../../assets/images';

const GetInTouchBtn = () => {
  return (
    <Link className="get-in-touch" to="/contact-us">
      <img src={callingImg} />
      Get In Touch
    </Link>
  );
};

export { GetInTouchBtn };
