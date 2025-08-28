import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { blog } from '../../data/blog';

const BlogItems = ({
  limit,
  excludeId,
  isDisplay = true,
  withDeley = false,
}) => {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  useEffect(() => {
    let filteredBlogs = blog;

    if (excludeId) {
      filteredBlogs = filteredBlogs.filter(item => item.id !== excludeId);
    }

    if (limit) {
      filteredBlogs = filteredBlogs.slice(0, limit);
    }

    if (withDeley) {
      const timer = setTimeout(() => {
        setDisplayedBlogs(filteredBlogs);

        return () => clearTimeout(timer);
      }, 1000);
    } else {
      setDisplayedBlogs(filteredBlogs);
    }
  }, [limit, excludeId]);

  return (
    <div className={isDisplay ? 'blog-items' : 'blog-items-page'}>
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
