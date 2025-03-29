import React, { useState } from "react";
import { FaUsers, FaUserClock, FaUniversity } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const UserReports = () => {
  // Sample data
  const [totalStudents, setTotalStudents] = useState(500);
  const [pendingAdmissions, setPendingAdmissions] = useState(45);
  const [totalDepartments, setTotalDepartments] = useState(6);
  const [studentsPerDept, setStudentsPerDept] = useState([
    { name: "CS", count: 120 },
    { name: "IT", count: 80 },
    { name: "EP", count: 60 },
    { name: "ME", count: 50 },
    { name: "PT", count: 40 },
    { name: "EC", count: 30 },
  ]);

  return (
    <div className="container py-5">
      {/* Header Stats */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUsers className="text-primary mb-2" size={35} />
            <h5>Total Students</h5>
            <h3 className="fw-bold">{totalStudents}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUserClock className="text-warning mb-2" size={35} />
            <h5>Admission Pending</h5>
            <h3 className="fw-bold">{pendingAdmissions}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUniversity className="text-danger mb-2" size={35} />
            <h5>Total Departments</h5>
            <h3 className="fw-bold">{totalDepartments}</h3>
          </div>
        </div>
      </div>

      {/* Students Per Department (3 Cards Per Row) */}
      <h4 className="mb-3 text-center">Students Per Department</h4>
      <div className="row">
        {studentsPerDept.map((dept, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
            <div
              className="border p-4 rounded text-center shadow-sm"
              style={{ width: "150px", backgroundColor: "#f8f9fa" }}
            >
              <h6 className="mb-1">{dept.name}</h6>
              <h5 className="fw-bold">{dept.count}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReports;
