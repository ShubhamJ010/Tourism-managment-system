import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useNavbarContext } from "../context/NavbarContext";

function NavBar() {
  const [click, setClick] = useState(false);

  const { showNavbar } = useNavbarContext();

  if (!showNavbar) {
    return null;
  }

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo">
            TourTravel
            <i className="fas fa-code"></i>
          </NavLink> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Destinations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Book"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
