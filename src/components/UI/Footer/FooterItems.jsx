import { Link } from 'react-router-dom';

import { footerItems } from '../../data/footer';

const FooterItems = () => {
  return (
    <>
      {footerItems.map(item => (
        <ul className="footer-items" key={item.id}>
          <span className="footer-item-title">{item.name}</span>
          {item.links.map(link => (
            <li key={link.title}>
              {link.path.startsWith('http') ? (
                <a href={link.path} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              ) : (
                <Link to={link.path}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export { FooterItems };
