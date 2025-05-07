// // // import React from "react";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FaCalendarAlt,
// // //   FaEdit,
// // //   FaUserCog,
// // //   FaUsers,
// // //   FaChartBar,
// // //   FaList,
// // //   FaGift
// // // } from "react-icons/fa";

// // // const SubAdminDash = () => {
// // //   return (
// // //     <div className="d-flex vh-100">
// // //       {/* Sidebar */}
// // //       <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
// // //         <h5 className="text-center mb-4">Sub-Admin Panel</h5>
// // //         <ul className="nav flex-column">
// // //           <li className="nav-item mb-2">
// // //             <Link to="/subadmin/schedule" className="nav-link text-white">
// // //               <FaCalendarAlt className="me-2" /> Admission Schedule
// // //             </Link>
// // //           </li>
         
// // //           <li className="nav-item mb-2">
// // //             <Link to="/subadmin/manageadmission" className="nav-link text-white">
// // //               <FaList className="me-2" /> Manage Admissions
// // //             </Link>
// // //           </li>
// // //           <li className="nav-item mb-2">
// // //             <Link to="/subadmin/manageusers" className="nav-link text-white">
// // //               <FaUsers className="me-2" /> Manage Users
// // //             </Link>
// // //           </li>
// // //           <li className="nav-item mb-2">
// // //             <Link to="/subadmin/reports" className="nav-link text-white">
// // //               <FaChartBar className="me-2" /> Reports
// // //             </Link>
// // //           </li>
// // //           <li className="nav-item mb-2">
// // //             <Link to="/subadmin/scholarships" className="nav-link text-white">
// // //               <FaGift className="me-2" /> Scholarships
// // //             </Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="flex-grow-1 p-4">
// // //         <Outlet /> {/* This is where nested route content appears */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SubAdminDash;
// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Link, Outlet } from "react-router-dom";
// // import {
// //   FaCalendarAlt,
// //   FaList,
// //   FaUsers,
// //   FaChartBar,
// //   FaGift
// // } from "react-icons/fa";

// // const SubAdminDash = () => {
// //   return (
// //     <div className="d-flex vh-100">
// //       {/* Sidebar */}
// //       <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
// //         <h5 className="text-center mb-4">Sub-Admin Panel</h5>
// //         <ul className="nav flex-column">
// //           <li className="nav-item mb-2">
// //             <Link to="/subadmin/schedule" className="nav-link text-white">
// //               <FaCalendarAlt className="me-2" /> Admission Schedule
// //             </Link>
// //           </li>
// //           <li className="nav-item mb-2">
// //             <Link to="/subadmin/manageadmission" className="nav-link text-white">
// //               <FaList className="me-2" /> Manage Admissions
// //             </Link>
// //           </li>
// //           <li className="nav-item mb-2">
// //             <Link to="/subadmin/manageusers" className="nav-link text-white">
// //               <FaUsers className="me-2" /> Manage Users
// //             </Link>
// //           </li>
// //           <li className="nav-item mb-2">
// //             <Link to="/subadmin/reports" className="nav-link text-white">
// //               <FaChartBar className="me-2" /> Reports
// //             </Link>
// //           </li>
// //           <li className="nav-item mb-2">
// //             <Link to="/subadmin/scholarships" className="nav-link text-white">
// //               <FaGift className="me-2" /> Scholarships
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-grow-1 p-4">
// //         <Outlet /> {/* This is where nested route content appears */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubAdminDash;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, Outlet } from "react-router-dom";
// import {
//   FaCalendarAlt,
//   FaList,
//   FaUsers,
//   FaChartBar,
//   FaGift,
//   FaBars,FaComments,FaUser
// } from "react-icons/fa";


// const SubAdminDash = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// const navigate= useNavigate();

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//    useEffect(() => {
//       const id = localStorage.getItem("Id");
//       setIsLoggedIn(!!id);
//     }, []);
  
//     const handleLogout = () => {
//       localStorage.clear();
//       setIsLoggedIn(false);
//       navigate("/");
//     };
  

//   return (
//     <div className="d-flex flex-column flex-md-row vh-100">
//       {/* Toggle Button (Mobile) */}
//   <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
//           <div className="container-fluid">
//             {/* Logo & Institute Info */}
//             <a className="navbar-brand d-flex align-items-center" href="#">
//               <img
//                 src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
//                 alt="Logo"
//                 className="me-2 img-fluid"
//                 style={{ height: "60px" }}
//               />
//               <div className="d-flex flex-column">
//                 <span className="fw-bold text-nowrap" style={{ fontSize: "18px" }}>
//                   Institute of Engineering and Technology
//                 </span>
//                 <span className="text-muted text-start" style={{ fontSize: "12px" }}>
//                   University of Calicut
//                 </span>
//               </div>
//             </a>
  
//             {/* Right Side: Logout */}
//             {isLoggedIn && (
//               <div className="d-flex align-items-center ms-auto">
//                 <FaUser className="me-2" />
//                 <span className="me-3">Hello</span>
//                 <button className="btn btn-danger rounded-pill" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       <div className="bg-dark text-white d-md-none p-2">
//         <button
//           className="btn btn-outline-light"
//           onClick={toggleSidebar}
//         >
//           <FaBars /> Menu
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-dark text-white p-3 ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}
//         style={{ width: "250px", minHeight: "100vh" }}
//       >
//         <h5 className="text-center mb-4">Sub-Admin Panel</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <Link to="/subadmin/schedule" className="nav-link text-white">
//               <FaCalendarAlt className="me-2" /> Admission Schedule
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link to="/subadmin/manageadmission" className="nav-link text-white">
//               <FaList className="me-2" /> Manage Admissions
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link to="/subadmin/manageusers" className="nav-link text-white">
//               <FaUsers className="me-2" /> Manage Users
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link to="/subadmin/reports" className="nav-link text-white">
//               <FaChartBar className="me-2" /> Reports
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//                           <Link to="messages" className="nav-link text-white">
//                             <FaComments className="me-2" /> Chats
//                           </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link to="/subadmin/scholarships" className="nav-link text-white">
//               <FaGift className="me-2" /> Scholarships
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4 bg-light">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default SubAdminDash;
import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCalendarAlt,
  FaList,
  FaUsers,
  FaChartBar,
  FaGift,
  FaBars,
  FaComments,
  FaUser,
} from "react-icons/fa";

const SubAdminDash = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("Id");
    setIsLoggedIn(!!id);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo & Institute Info */}
          <div className="d-flex align-items-center">
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
          </div>

          {/* Right Side: Logout */}
          {isLoggedIn && (
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              <span className="me-3">Hello</span>
              <button className="btn btn-danger btn-sm rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar Toggle */}
      <div className="bg-dark text-white d-md-none p-2">
        <button className="btn btn-outline-light" onClick={toggleSidebar}>
          <FaBars /> Menu
        </button>
      </div>

      {/* Sidebar + Content Layout */}
      <div className="d-flex flex-column flex-md-row" style={{ minHeight: "calc(100vh - 72px)" }}>
        {/* Sidebar */}
        <div
          className={`bg-dark text-white p-3 ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}
          style={{ width: "250px" }}
        >
          <h5 className="text-center mb-4">Sub-Admin Panel</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/subadmin/schedule" className="nav-link text-white">
                <FaCalendarAlt className="me-2" /> Admission Schedule
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/subadmin/manageadmission" className="nav-link text-white">
                <FaList className="me-2" /> Manage Admissions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/subadmin/manageusers" className="nav-link text-white">
                <FaUsers className="me-2" /> Manage Users
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/subadmin/reports" className="nav-link text-white">
                <FaChartBar className="me-2" /> Reports
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/subadmin/messages" className="nav-link text-white">
                <FaComments className="me-2" /> Chats
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/subadmin/scholarships" className="nav-link text-white">
                <FaGift className="me-2" /> Scholarships
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SubAdminDash;
