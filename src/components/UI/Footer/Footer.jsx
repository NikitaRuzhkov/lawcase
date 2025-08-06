import { Logo } from '../Logo/Logo';

import './Footer.css';

import { FooterItems } from './FooterItems';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-inner">
          <div className="footer-logo">
            <Logo />
            <div className="footer-text">
              Our law firm combines legal expertise with personalized solutions
            </div>
          </div>
          <FooterItems />
        </div>
      </div>
      <hr />
      <div className="wrapper">
        <div className="footer-bottom">
          © {date} <span> Lawcase</span> Template
        </div>
      </div>
    </div>
  );
};

export { Footer };
