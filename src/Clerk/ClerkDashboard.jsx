import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";

const ClerkDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on authentication status

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
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Reports & Analytics
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                <FaCalendarAlt className="me-2" />Scholarship
              </a>
            </li>
            <li className="nav-item mb-2">
                <a href="/AddAlertsChats" className="nav-link text-white">
                    <FaComments className="me-2" /> Add Alerts & Chat Support
                </a>
            </li>

          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <h3>Welcome, Clerk</h3>
          <p>Select an option from the sidebar to proceed.</p>
        </div>
      </div>
    </div>
  );
};

export default ClerkDashboard;

