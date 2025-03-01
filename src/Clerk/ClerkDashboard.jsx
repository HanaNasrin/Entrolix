import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";

const ClerkDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on authentication status

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add actual logout logic here
  };

  return (
    <div className="vh-100 d-flex flex-column">
      {/* Full-width Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white  shadow px-4">
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
        </div>
        <div className="ms-auto d-flex align-items-center">
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              <span className="me-3" style={{ whiteSpace: "nowrap" }}>Hello, Clerk</span>
              <button className="btn btn-danger rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
            <div className="d-flex align-items-center gap-2">
              <a href="#" className="btn btn-outline-primary rounded-pill ">
                Login
              </a>
              <a href="#" className="btn btn-outline-success rounded-pill me-2">
                Sign Up
              </a>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Dashboard Section (Sidebar + Main Content) */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <h5 className="text-center mb-4">Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Reports & Analytics
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaCalendarAlt className="me-2" />Scholarship
              </a>
            </li>
            <li className="nav-item mb-2">
                <a href="/AddAlertsChats" className="nav-link text-white">
                    <FaComments className="me-2" /> Add Alerts & Chat Support
                </a>
            </li>

          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <h3>Welcome, Clerk</h3>
          <p>Select an option from the sidebar to proceed.</p>
        </div>
      </div>
    </div>
  );
};

export default ClerkDashboard;

