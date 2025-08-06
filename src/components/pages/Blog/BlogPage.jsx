import { useParams } from 'react-router-dom';

import { blog } from '../../data/blog';

const BlogPage = () => {
  const { id } = useParams();
  const blogItem = blog.find(b => b.id === Number(id));
  return <div>{blogItem.title}</div>;
};

export { BlogPage };
