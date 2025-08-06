import { NavLink } from 'react-router-dom';

import { headerItems } from '../../data/header';
import { MyLink } from '../MyLink/MyLink';

const HeaderItems = ({ isModal, closeModal }) => {
  return (
    <>
      <ul className={isModal ? 'header-items active' : 'header-items'}>
        {headerItems.map(item => (
          <NavLink
            className="header-item"
            key={item.id}
            to={item.path}
            onClick={closeModal}
          >
            {item.name}
          </NavLink>
        ))}
        <MyLink to="/contact-us" onClick={closeModal}>
          Contact Us
        </MyLink>
      </ul>
    </>
  );
};

export { HeaderItems };
