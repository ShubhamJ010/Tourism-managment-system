// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TourTravel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Add ml-auto here */}
            {/* Other navigation links */}
          </ul>
        </div>
        <ul className="navbar-nav ml-auto"> {/* Add ml-auto here */}
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/Destinations" className="nav-link">
              Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Book" className="nav-link">
              Book
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
