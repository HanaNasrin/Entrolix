import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <a className="navbar-brand text-warning fw-bold" href="#">
        Entrolix
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Admission Open</a>
          </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
