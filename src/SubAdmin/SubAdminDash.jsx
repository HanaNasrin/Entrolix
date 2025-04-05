// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Link } from "react-router-dom";
// // import {
// //   FaCalendarAlt,
// //   FaEdit,
// //   FaUserCog,
// //   FaUsers,
// //   FaChartBar,
// //   FaList,
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
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, Outlet } from "react-router-dom";
// import {
//   FaCalendarAlt,
//   FaList,
//   FaUsers,
//   FaChartBar,
//   FaGift
// } from "react-icons/fa";

// const SubAdminDash = () => {
//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
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
//             <Link to="/subadmin/scholarships" className="nav-link text-white">
//               <FaGift className="me-2" /> Scholarships
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4">
//         <Outlet /> {/* This is where nested route content appears */}
//       </div>
//     </div>
//   );
// };

// export default SubAdminDash;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaList,
  FaUsers,
  FaChartBar,
  FaGift,
  FaBars
} from "react-icons/fa";

const SubAdminDash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex flex-column flex-md-row vh-100">
      {/* Toggle Button (Mobile) */}
      <div className="bg-dark text-white d-md-none p-2">
        <button
          className="btn btn-outline-light"
          onClick={toggleSidebar}
        >
          <FaBars /> Menu
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}
        style={{ width: "250px", minHeight: "100vh" }}
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
  );
};

export default SubAdminDash;
