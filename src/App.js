import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogDetail from './BlogDetail';
import BlogList from './BlogList';
import './App.css'; // Assuming you put CSS here

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://demo-blog-with-strapi.onrender.com/api/blogs?populate=*');
        if (response.data && response.data.data) {
          setBlogs(response.data.data);
          if (response.data.data.length > 0) {
            setSelectedBlog(response.data.data[0]); // Set the first blog as selected by default
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="app">
      <div className="main-content">
        {selectedBlog ? (
          <BlogDetail blog={selectedBlog} />
        ) : (
          <p>Select a blog to view details.</p>
        )}
      </div>
      <div className="sidebar">
        <BlogList blogs={blogs} onSelect={handleBlogSelect} />
      </div>
    </div>
  );
}

export default App;
