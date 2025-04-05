
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaChartBar, FaUsers,FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="vh-100 d-flex flex-column">
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
              <a href="#" className="nav-link text-white">
                <FaClipboardList className="me-2" />  Students
              </a>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/reports" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Statistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content - Outlet renders child routes */}
        <div className="flex-grow-1 p-4">
          <Outlet /> {/* This renders nested routes */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
