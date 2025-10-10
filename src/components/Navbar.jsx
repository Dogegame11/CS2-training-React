import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">
              <a className="nav-btn">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a className="nav-btn">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
