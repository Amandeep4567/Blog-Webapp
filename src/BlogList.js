import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="blog-heading">{title}</h2>
      <div className="all-blogs-list">
        <div className="blog-description">
          <h1>
            Myself <span>Amandeep Kumar |</span>
          </h1>
          <h3> I'm Frontend Developer</h3>
          <p>
            Welcome to my blog! As a frontend developer, I'm passionate about
            creating beautiful and functional user interfaces that provide an
            outstanding user experience. Here, I share my knowledge, tips, and
            insights with other developers to help them improve their frontend
            development skills and create amazing web experiences.
          </p>
        </div>
        <div className="blogs-listing">
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          ))}
          <button>All Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
