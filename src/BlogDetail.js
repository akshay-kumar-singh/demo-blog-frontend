import React from 'react';

function BlogDetail({ blog }) {
  const { attributes } = blog;
  return (
    <div className="blog-detail">
      <h1>{attributes.BlogTitle}</h1>
      <p><strong>Date Posted:</strong> {new Date(attributes.publishedAt).toLocaleDateString()}</p>
      <p><strong>Author:</strong> {attributes.AuthorName}</p>
      {attributes.BlogImage?.data?.attributes?.url && (
        <img
          src={attributes.BlogImage.data.attributes.url} 
          alt={attributes.BlogTitle}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <div>
        {attributes.BlogDescription.map((desc, index) => (
          <p key={index}>{desc.children.map(child => child.text).join('')}</p>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
