import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const AdminReports = () => {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Admin Dashboard Reports</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <FaChartLine className="me-2" /> Sales Report
          </h5>
          <p className="card-text">
            Summary of sales metrics and analytics will be displayed here.
          </p>
          {/* Insert your detailed report data or charts here */}
        </div>
      </div>
    </div>
  );
};

export default AdminReports;