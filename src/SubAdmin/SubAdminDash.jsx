import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaEdit,
  FaUserCog,
  FaUsers,
  FaChartBar,
  FaList,
} from "react-icons/fa";

const SubAdminDash = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h5 className="text-center mb-4">Sub-Admin Panel</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/subadmin/admissionschedule" className="nav-link text-white">
              <FaCalendarAlt className="me-2" /> Admission Schedule
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/subadmin/addadmissionschedule" className="nav-link text-white">
              <FaEdit className="me-2" /> Add Admission Schedule
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/subadmin/editadmissionschedule" className="nav-link text-white">
              <FaEdit className="me-2" /> Edit Admission Schedule
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/subadmin/manageadmission" className="nav-link text-white">
              <FaList className="me-2" /> Manage Admission
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
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2>Welcome to Sub-Admin Dashboard</h2>
        <p>Select an option from the menu to manage admissions, users, or view reports.</p>
      </div>
    </div>
  );
};

export default SubAdminDash;
