import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

import './Blog.css';

import { BlogItems } from './BlogItems';

const Blog = () => {
  return (
    <section>
      <SectionBlock title="Blog" subtitle="Read From Our Blogs" />
      <div className="wrapper">
        <BlogItems />
      </div>
      <SectionBlock isDefault={false} />
    </section>
  );
};

export { Blog };
