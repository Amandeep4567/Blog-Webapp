import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="errorname">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="My Blogs!" />}
    </div>
  );
};

export default Home;
