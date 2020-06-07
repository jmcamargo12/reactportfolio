
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
      <h3>Jonathan Camargo Labeau</h3>
      </Link>
      <div>
        <ul className="the-links">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"}>La Casa</Link></li>
          <li className="nav-item">
            <Link to="/portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link></li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

}
export default NavBar;










