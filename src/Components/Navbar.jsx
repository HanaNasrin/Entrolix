
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS for dropdowns

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo & Institute Info */}
        <div className="d-flex align-items-center">
          <img
            src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
            alt="Logo"
            className="me-2 img-fluid"
            style={{ height: "80px" }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold text-nowrap" style={{ fontSize: "20px" }}>
              Institute of Engineering and Technology
            </span>
            <span className="text-muted text-start" style={{ fontSize: "14px" }}>
              University of Calicut
            </span>
          </div>
        </div>

        {/* Signup & Login Dropdowns */}
        <div className="d-flex align-items-center">
          {/* Signup Dropdown */}
          <div className="dropdown me-2">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="signupDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Signup
            </button>
            <ul className="dropdown-menu" aria-labelledby="signupDropdown">
              <li><a className="dropdown-item" href="HodSignup">HOD SignUp</a></li>
              <li><a className="dropdown-item" href="SubAdminSignup">Subadmin SignUp</a></li>
              <li><a className="dropdown-item" href="ClerkSignup">Clerk SignUp</a></li>
              <li><a className="dropdown-item" href="UserSignUp">User SignUp</a></li>
            </ul>
          </div>

          {/* Login Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="loginDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li><a className="dropdown-item" href="AdminLogin">Admin Login</a></li>
              <li><a className="dropdown-item" href="Login"> Login</a></li>
            </ul>
          </div>

          {/* Contact Button */}
          <a
            href="tel:+919240013650"
            className="btn text-white d-flex align-items-center px-3 py-2"
            style={{ borderRadius: "30px", backgroundColor: "#001F60" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Phone Icon"
              className="me-2 img-fluid"
              style={{ height: "20px", borderRadius: "50%" }}
            />
            <span className="d-none d-sm-inline">+91 9240013650</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
