import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icon

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
            alt="Logo"
            className="me-2 img-fluid"
            style={{ height: "80px" }}
          />
          <div className="d-flex flex-column">
            <span className="fw-bold text-nowrap" style={{ fontSize: "20px" }}>Institute of Engineering and Technology</span>
            <span className="text-muted text-start" style={{ fontSize: "14px" }}>University of Calicut</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
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
