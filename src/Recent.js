import React from 'react';

function Recent({ blogs, onBlogClick }) {
  return (
    <section className='recent'>
      <div className="header">RECENT BLOG POSTS</div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          onClick={() => onBlogClick(blog)}
          className="blog-item"
        >
          {blog.attributes.BlogImage?.data?.attributes?.url && (
            <img src={`http://localhost:1337${blog.attributes.BlogImage.data.attributes.url}`} alt="blog" className="blog-img"/>
          )}
          <div className="blog-content">
            <p className='blog-title'>{blog.attributes.BlogTitle}</p>
          </div>
          <div className='footer'>
            {blog.attributes.AuthorImage?.data && (
              <img src={`http://localhost:1337${blog.attributes.AuthorImage.data.attributes.url}`} alt='author' className='author-img'/>
            )}
            <span className='author-name'>{blog.attributes.AuthorName}</span>
            <span className='date'>{new Date(blog.attributes.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Recent;
