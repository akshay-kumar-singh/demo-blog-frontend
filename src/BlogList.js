import React from 'react';

function BlogList({ blogs, onSelect }) {
  return (
    <div className="blog-list">
      <h2>Other Blogs</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-item"
          onClick={() => onSelect(blog)}
        >
          <h3>{blog.attributes.BlogTitle}</h3>
          <p>{new Date(blog.attributes.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
