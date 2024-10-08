import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h1>All blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
