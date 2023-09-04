import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Online Shop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <span className="bag-quantity">
            <span>3</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
