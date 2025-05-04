// // import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { FaChartBar, FaCalendarAlt, FaComments, FaUser, FaMoneyBillWave, FaBell } from "react-icons/fa";
// // import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// // // Placeholder components for each section
// // const UserSignUp = () => <div className="container">Sign Up Section</div>;
// // const Login = () => <div className="container">Login Section</div>;
// // const UploadDocuments = () => (
// //   <div className="container">
// //     <h4>Upload Documents</h4>
// //     <p>Upload NRI and Merit forms, Mentorship forms, and other documents.</p>
// //   </div>
// // );
// // const Payment = () => <div className="container">Payment Section</div>;
// // const Chat = () => <div className="container">Chat Section</div>;
// // const Alerts = () => (
// //   <div className="container">
// //     <h4>Alerts</h4>
// //     <p>View and manage alerts. Analyze received alerts here.</p>
// //   </div>
// // );
// // const Details = () => <div className="container">View Details Section</div>;

// // const UserDashboard = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on authentication status

// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     // Add actual logout logic here
// //   };

// //   return (
// //     <div className="vh-100 d-flex flex-column">
      
// //       {/* Dashboard Section (Sidebar + Main Content) */}
// //       <div className="d-flex flex-grow-1">
// //         {/* Sidebar */}
// //         <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
// //           <h5 className="text-center mb-4">Menu</h5>
// //           <ul className="nav flex-column">
// //             <li className="nav-item mb-2">
// //               <Link to="/upload" className="nav-link text-white">
// //                 <FaCalendarAlt className="me-2" /> Upload Documents
// //               </Link>
// //             </li>
// //             <li className="nav-item mb-2">
// //               <Link to="/payment" className="nav-link text-white">
// //                 <FaMoneyBillWave className="me-2" /> Payment Details
// //               </Link>
// //             </li>
// //             <li className="nav-item mb-2">
// //               <Link to="/useralerts" className="nav-link text-white">
// //                 <FaComments className="me-2" /> Chats
// //               </Link>
// //             </li>
// //             <li className="nav-item mb-2">
// //               <Link to="/alerts" className="nav-link text-white">
// //                 <FaBell className="me-2" /> Notifications
// //               </Link>
// //             </li>
// //             <li className="nav-item mb-2">
// //               <Link to="/details" className="nav-link text-white">
// //                 <FaChartBar className="me-2" /> View Details
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default UserDashboard;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   FaChartBar,
//   FaCalendarAlt,
//   FaComments,
//   FaMoneyBillWave,
//   FaBell,
// } from "react-icons/fa";
// import { Link, Outlet } from "react-router-dom";

// const UserDashboard = () => {
//   return (
    
//     <div className="vh-100 d-flex flex-column">
//       {/* Dashboard Section (Sidebar + Main Content) */}
//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
//           <h5 className="text-center mb-4">Menu</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <Link to="upload" className="nav-link text-white">
//                 <FaCalendarAlt className="me-2" /> Upload Documents
//               </Link>
//             </li>
//             <li className="nav-item mb-2">
//               <Link to="payment" className="nav-link text-white">
//                 <FaMoneyBillWave className="me-2" /> Payment Details
//               </Link>
//             </li>
//             <li className="nav-item mb-2">
//               <Link to="userchat" className="nav-link text-white">
//                 <FaComments className="me-2" /> Chats
//               </Link>
//             </li>
//             <li className="nav-item mb-2">
//               <Link to="useralerts" className="nav-link text-white">
//                 <FaBell className="me-2" /> Notifications
//               </Link>
//             </li>
//             <li className="nav-item mb-2">
//               <Link to="details" className="nav-link text-white">
//                 <FaChartBar className="me-2" /> View Details
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Main content injected here */}
//         <div className="flex-grow-1 p-4 bg-light">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
   

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaChartBar,
  FaCalendarAlt,
  FaComments,
  FaMoneyBillWave,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("Id");
    setIsLoggedIn(!!id);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
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

          {/* Right Side: Logout */}
          {isLoggedIn && (
            <div className="d-flex align-items-center ms-auto">
              <FaUser className="me-2" />
              <span className="me-3">Hello</span>
              <button className="btn btn-danger rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Dashboard Layout */}
      <div className="vh-100 d-flex flex-column">
        <div className="d-flex flex-grow-1">
          {/* Sidebar */}
          <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
            <h5 className="text-center mb-4">Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="upload" className="nav-link text-white">
                  <FaCalendarAlt className="me-2" /> Upload Documents
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="payment" className="nav-link text-white">
                  <FaMoneyBillWave className="me-2" /> Payment Details
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="userchat" className="nav-link text-white">
                  <FaComments className="me-2" /> Chats
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="useralerts" className="nav-link text-white">
                  <FaBell className="me-2" /> Notifications
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="details" className="nav-link text-white">
                  <FaChartBar className="me-2" /> View Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Main content */}
          <div className="flex-grow-1 p-4 bg-light">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
