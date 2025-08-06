import { MyLink } from '../../../UI/MyLink/MyLink';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';
import { BlogItems } from '../../Blog/BlogItems';

const HomeBlog = () => {
  return (
    <div className="home-blog">
      <MyTitle title="" subtitle="" />
      <BlogItems limit="3" />
      <MyLink to="/blog">View All Blogs</MyLink>
    </div>
  );
};

export { HomeBlog };
