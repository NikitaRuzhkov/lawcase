import { Link } from 'react-router-dom';

import './MyLink.css';

const MyLink = ({ children, ...props }) => {
  return (
    <Link className="main-link" {...props}>
      {children}
    </Link>
  );
};

export { MyLink };
