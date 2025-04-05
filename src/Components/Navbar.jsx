

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS for dropdowns

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
//       <div className="container-fluid">
//         {/* Logo & Institute Info */}
//         <a className="navbar-brand d-flex align-items-center" href="#">
//           <img
//             src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
//             alt="Logo"
//             className="me-2 img-fluid"
//             style={{ height: "60px" }}
//           />
//           <div className="d-flex flex-column">
//             <span className="fw-bold text-nowrap" style={{ fontSize: "18px" }}>
//               Institute of Engineering and Technology
//             </span>
//             <span className="text-muted text-start" style={{ fontSize: "12px" }}>
//               University of Calicut
//             </span>
//           </div>
//         </a>

//         {/* Navbar Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             {/* Signup Dropdown */}
//             <li className="nav-item dropdown me-2">
//               <button
//                 className="btn btn-primary rounded-pill dropdown-toggle"
//                 type="button"
//                 id="signupDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Signup
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="signupDropdown">
//                 <li><a className="dropdown-item" href="HodSignup">HOD SignUp</a></li>
//                 <li><a className="dropdown-item" href="SubAdminSignup">Subadmin SignUp</a></li>
//                 <li><a className="dropdown-item" href="ClerkSignup">Clerk SignUp</a></li>
//                 <li><a className="dropdown-item" href="/UserSignUp">User SignUp</a></li>
//               </ul>
//             </li>

//             {/* Login Dropdown */}
//             <li className="nav-item dropdown me-2">
//               <button
//                 className="btn btn-success rounded-pill dropdown-toggle"
//                 type="button"
//                 id="loginDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Login
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="loginDropdown">
//                 <li><a className="dropdown-item" href="AdminLogin">Admin Login</a></li>
//                 <li><a className="dropdown-item" href="Login">Login</a></li>
//               </ul>
//             </li>

//             {/* Contact Button */}
//             <li className="nav-item">
//               <a
//                 href="tel:+919240013650"
//                 className="btn text-white d-flex align-items-center px-3 py-2"
//                 style={{ borderRadius: "30px", backgroundColor: "#001F60" }}
//               >
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
//                   alt="Phone Icon"
//                   className="me-2 img-fluid"
//                   style={{ height: "20px", borderRadius: "50%" }}
//                 />
//                 <span className="d-none d-sm-inline">+91 9240013650</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS for dropdowns

const Navbar = () => {
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Signup Button */}
            <li className="nav-item me-2">
              <a href="/usersignup" className="btn btn-primary rounded-pill px-3">
                Signup
              </a>
            </li>

            {/* Login Button */}
            <li className="nav-item me-2">
              <a href="/login" className="btn btn-success rounded-pill px-3">
                Login
              </a>
            </li>

            {/* Contact Button */}
            <li className="nav-item">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
