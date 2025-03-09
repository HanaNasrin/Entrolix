import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChartBar, FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Placeholder components for each section
const UserSignUp = () => <div className="container">Sign Up Section</div>;
const Login = () => <div className="container">Login Section</div>;
const UploadDocuments = () => (
  <div className="container">
    <h4>Upload Documents</h4>
    <p>Upload NRI and Merit forms, Mentorship forms, and other documents.</p>
  </div>
);
const Payment = () => <div className="container">Payment Section</div>;
const Chat = () => <div className="container">Chat Section</div>;
const Alerts = () => (
  <div className="container">
    <h4>Alerts</h4>
    <p>View and manage alerts. Analyze received alerts here.</p>
  </div>
);
const Details = () => <div className="container">View Details Section</div>;

const UserDashboard = () => {
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
              <Link to="/upload-documents" className="nav-link text-white">
                <FaCalendarAlt className="me-2" /> Upload Documents
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/payment" className="nav-link text-white">
                <FaChartBar className="me-2" /> Payment
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/chat" className="nav-link text-white">
                <FaComments className="me-2" /> Chat Support
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/alerts" className="nav-link text-white">
                <FaComments className="me-2" /> Alerts & Analytics
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/details" className="nav-link text-white">
                <FaChartBar className="me-2" /> View Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;