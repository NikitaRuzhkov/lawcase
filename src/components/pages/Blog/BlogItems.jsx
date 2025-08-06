import { Link } from 'react-router-dom';

import { blog } from '../../data/blog';

const BlogItems = ({ limit }) => {
  const displayedBlogs = limit ? blog.slice(0, limit) : blog;
  return (
    <div className="blog-items">
      {displayedBlogs.map(item => (
        <Link to={`/blog/${item.id}`} className="blog-item" key={item.id}>
          <img src={item.icon} alt={item.title} />
          <h6>{item.title}</h6>
          <h2>{item.text}</h2>
        </Link>
      ))}
    </div>
  );
};

export { BlogItems };
