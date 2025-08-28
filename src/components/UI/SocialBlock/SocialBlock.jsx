import { facebookImg, instagramImg, twitterImg } from '../../../assets/images';

import './SocialBlock.css';

const SocialBlock = () => {
  const socials = [
    {
      id: 1,
      icon: twitterImg,
      link: 'https://twitter.com',
    },
    {
      id: 2,
      icon: facebookImg,
      link: 'https://www.facebook.com/',
    },
    {
      id: 3,
      icon: instagramImg,
      link: 'https://instagram.com',
    },
  ];
  return (
    <div className="social-block">
      {socials.map(social => (
        <a
          className="social-item"
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.link} />
        </a>
      ))}
    </div>
  );
};

export { SocialBlock };
