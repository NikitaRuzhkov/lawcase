import { RxHamburgerMenu } from 'react-icons/rx';

import { Logo } from '../Logo/Logo';

import './Header.css';

import { useState } from 'react';

import { HeaderItems } from './HeaderItems';

const Header = () => {
  const [isModal, setIsmodal] = useState(false);

  const openModal = () => {
    setIsmodal(prev => !prev);
  };
  const closeModal = () => {
    setIsmodal(false);
  };
  return (
    <div className="header">
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
