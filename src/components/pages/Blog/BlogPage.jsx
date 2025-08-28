import { useParams } from 'react-router-dom';

import { blog } from '../../data/blog';
import { MyTitle } from '../../UI/MyTitle/MyTitle';
import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';
import { BlogItems } from './BlogItems';

const BlogPage = () => {
  const { id } = useParams();
  const blogItem = blog.find(b => b.id === Number(id));
  const blogContent = blogItem.content;
  return (
    <div className="blog-page">
      <SectionBlock
        title="Blog Details"
        subtitle={blogItem.text}
        isBtn={false}
        isDate={true}
        date={blogItem.date}
      />
      <div className="blog-page-inner">
        <div className="wrapper">
          <div className="blog-page-content">
            <img src={blogItem.icon} alt={blogItem.title} />
            <h2>{blogContent.titleOne}</h2>
            <p>{blogContent.textOne}</p>
            <h2>{blogContent.titleTwo}</h2>
            <p>{blogContent.textTwo}</p>
            <h2>{blogContent.keyRolesTitle}</h2>
            <ul className="blog-page-list">
              {blogContent.keyRoles.map((keyRole, index) => (
                <li key={keyRole.id}>
                  <span style={{ fontWeight: 'bold', marginRight: '5px' }}>
                    {index + 1}.{keyRole.title}
                  </span>
                  {keyRole.text}
                </li>
              ))}
            </ul>

            <h2>{blogContent.titleThree}</h2>
            <p>{blogContent.textThree}</p>
          </div>
          <MyTitle
            title="Related Blogs"
            subtitle="Read From Our Blogs
"
          />
          <BlogItems
            limit="3"
            excludeId={blogItem.id}
            isDisplay={false}
            withDeley={true}
          />
        </div>
        <SectionBlock
          title="Reach out"
          subtitle="Our experienced attorney are here to answer any questions"
        />
      </div>
    </div>
  );
};

export { BlogPage };
