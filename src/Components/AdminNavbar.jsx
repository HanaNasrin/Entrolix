

  //here you put isloogged function for dummy

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
      <div className="container-fluid">
        {/* Logo & Institute Info */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
            alt="Logo"
            className="me-2 img-fluid"
            style={{ height: "60px" }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold text-nowrap" style={{ fontSize: "18px" }}>
              Institute of Engineering and Technology
            </span>
            <span className="text-muted text-start" style={{ fontSize: "12px" }}>
              University of Calicut
            </span>
          </div>
        </a>

        {/* Navbar Toggler */}
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

        {/* Right Side Buttons */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              <span className="me-3">Hello</span>
              <button
                className="btn btn-danger rounded-pill"
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/");
                  
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-outline-primary rounded-pill me-2"
                onClick={() =>{ 
                  navigate("/login");
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
              <button
                className="btn btn-outline-success rounded-pill"
                onClick={() => navigate("/usersignup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
