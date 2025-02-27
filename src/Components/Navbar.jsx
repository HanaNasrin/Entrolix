import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4 py-2 custom-navbar">
      {/* Left Side - Logo */}
      <div className="d-flex align-items-center">
        <img
          src="https://i.pinimg.com/736x/40/51/c0/4051c041611e23ce3137078cac153f10.jpg"
          alt="Jain Online Logo"
          height="40"
        />
        <span className="ms-2 fw-bold">
          CUIET <span className="text-muted"> Thenhipalam</span>
        </span>
      </div>

      {/* Right Side - Phone Button */}
      <a href="tel:+919240013650" className="contact-button d-flex align-items-center">
        <i className="bi bi-telephone me-2"></i> +91 9240013650
      </a>
    </nav>
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
//       <a className="navbar-brand text-warning fw-bold" href="#">
//        ENTROLIX
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}` } id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">About</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">Courses</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">Pages</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">Blog</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-dark" href="#">Contact</a>
//           </li>
//         </ul>
//       </div>

//       <a className="btn btn-warning text-white px-3" href="#">
//         Admission Open
//       </a>
//     </nav>


  );
};

export default Navbar;
