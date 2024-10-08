import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not">
      <h1>NotFound</h1>
      <button>
        <Link to="/">Back to Homepage</Link>
      </button>
    </div>
  );
};

export default NotFound;
