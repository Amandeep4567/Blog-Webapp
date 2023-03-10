import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./bg-logo.png" alt="" />
      <h1> The ADK blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
