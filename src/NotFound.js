import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="message-404">
        {/* <h1>404</h1> */}
        <h2>Sorry!</h2>
        <p>That page cannot be found</p>
        <p>please go back to Home</p>
        <span>
          <Link to="/">Back to the homepage...</Link>
        </span>
      </div>
      <div className="img-404">
        <img src="./error404.png" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
