import { Link, useLocation } from "react-router-dom";

function NavBar() {
  useLocation();

  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/index" className="navbar-item">
          Index
        </Link>
        <Link to="/battleworld" className="navbar-item">
          Battleworld
        </Link>
      </div>
    </>
  );
}

export default NavBar;
