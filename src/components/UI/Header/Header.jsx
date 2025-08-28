import { RxHamburgerMenu } from 'react-icons/rx';

import { Logo } from '../Logo/Logo';

import './Header.css';

import { useEffect, useState } from 'react';

import { HeaderItems } from './HeaderItems';

const Header = () => {
  const [isModal, setIsmodal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    setIsmodal(prev => !prev);
  };
  const closeModal = () => {
    setIsmodal(false);
  };
  return (
    <div className={isSticky ? 'header sticky' : 'header'}>
      <div className="container">
        <div className="header-inner">
          <Logo />
          <HeaderItems isModal={isModal} closeModal={closeModal} />
          <button className="burger-menu" onClick={openModal}>
            <RxHamburgerMenu className="burger-menu-item" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
