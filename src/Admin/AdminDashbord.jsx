import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaUsers, FaUserShield, FaClipboardList, FaUser } from "react-icons/fa";

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add actual logout logic here
  };

  return (
    <div className="vh-100 d-flex flex-column">

      {/* Dashboard Section (Sidebar + Main Content) */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <h5 className="text-center mb-4">Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"onClick={() => navigate("/admin/manageuser")}>
              <a href="#" className="nav-link text-white">
                <FaUsers className="me-2" /> Manage Sub Users
              </a>
            </li>
            {/* <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaUserShield className="me-2" /> Manage Clerk
              </a>
            </li> */}
            {/* <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaClipboardList className="me-2" /> Monitor Students
              </a>
            </li> */}
            <li className="nav-item mb-2" onClick={() => navigate("/admin/repor")}>
              <a href="#" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Reports & Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <h3>Welcome, Admin</h3>
          <p>Select an option from the sidebar to proceed.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
