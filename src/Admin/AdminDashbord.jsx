
// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { FaChartBar, FaUsers,FaClipboardList } from "react-icons/fa";

// const AdminDashboard = () => {
//   return (
//     <div className="vh-100 d-flex flex-column">
//       {/* Dashboard Section (Sidebar + Main Content) */}
//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
//           <h5 className="text-center mb-4">Menu</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <Link to="/admin/manageuser" className="nav-link text-white">
//                 <FaUsers className="me-2" /> Manage Sub Users
//               </Link>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="/admin/students" className="nav-link text-white">
//                 <FaClipboardList className="me-2" />  Students
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <Link to="/admin/reports" className="nav-link text-white">
//                 <FaChartBar className="me-2" /> View Statistics
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content - Outlet renders child routes */}
//         <div className="flex-grow-1 p-4">
//           <Outlet /> {/* This renders nested routes */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaChartBar, FaUsers, FaClipboardList, FaUser } from "react-icons/fa";

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
    <div className="vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
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
          {isLoggedIn && (
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              <span className="me-3"></span>
              <button className="btn btn-danger btn-sm rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </div>
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
              <Link to="/admin/manageuser" className="nav-link text-white">
                <FaUsers className="me-2" /> Manage Sub Users
              </Link>
            </li>
            <li className="nav-item mb-2">
              <a href="/admin/students" className="nav-link text-white">
                <FaClipboardList className="me-2" /> Students
              </a>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/reports" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Statistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
