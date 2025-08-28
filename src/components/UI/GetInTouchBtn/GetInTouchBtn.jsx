import { Link } from 'react-router-dom';

import './GetInTouchBtn.css';

import { forwardRef } from 'react';

import { callingImg } from '../../../assets/images';

const GetInTouchBtn = forwardRef(function GetInTouchBtn({ onBtnClick }, ref) {
  return (
    <Link
      ref={ref}
      className="get-in-touch"
      to="/contact-us"
      onClick={onBtnClick}
    >
      <img src={callingImg} />
      Get In Touch
    </Link>
  );
});

export { GetInTouchBtn };
