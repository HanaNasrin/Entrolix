// import axios from "axios";
// import React, { useState } from "react";
// import { FaUsers, FaUniversity, FaUserGraduate } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AdminReports = () => {
//   const [totalUsers, setTotalUsers] = useState(100);
//   const [totalStudents, setTotalStudents] = useState(500);
//   const [totalDepartments, setTotalDepartments] = useState(6);
//   const [studentsPerDept, setStudentsPerDept] = useState([
//     { name: "CS", count: 30 },
//     { name: "IT", count: 50 },
//     { name: "EP", count: 20 },
//     { name: "ME", count: 10 },
//     { name: "PT", count: 5 },
//     { name: "EC", count: 2 },
//   ]);

  
//   axios
//       .get("http://localhost:8000/api/dashboard/")
//       .then((response) => {
//         console.log(response)
//         // setNotifications(response.data);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch datas:", error);
//       });

//   return (
//     <div className="container py-5">
//       {/* Header Stats */}
//       <div className="row justify-content-center mb-4">
//         <div className="col-md-4 mb-3">
//           <div className="border p-4 bg-light rounded text-center shadow-sm">
//             <FaUsers className="text-primary mb-2" size={35} />
//             <h5>Total Subadmins</h5>
//             <h3 className="fw-bold">{totalUsers}</h3>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="border p-4 bg-light rounded text-center shadow-sm">
//             <FaUserGraduate className="text-success mb-2" size={35} />
//             <h5>Total Students</h5>
//             <h3 className="fw-bold">{totalStudents}</h3>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="border p-4 bg-light rounded text-center shadow-sm">
//             <FaUniversity className="text-danger mb-2" size={35} />
//             <h5>Total Departments</h5>
//             <h3 className="fw-bold">{totalDepartments}</h3>
//           </div>
//         </div>
//       </div>

//       {/* Students Per Department (3 Cards Per Row) */}
//       <h4 className="mb-3 text-center">Students Per Department</h4>
//       <div className="row">
//         {studentsPerDept.map((dept, index) => (
//           <div key={index} className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
//             <div
//               className="border p-4 rounded text-center shadow-sm"
//               style={{ width: "150px", backgroundColor: "#f8f9fa" }}
//             >
//               <h6 className="mb-1">{dept.name}</h6>
//               <h5 className="fw-bold">{dept.count}</h5>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminReports;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaUniversity, FaUserGraduate } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminReports = () => {
  const [dashboardData, setDashboardData] = useState({
    total_subadmins: 0,
    total_students: 0,
    total_departments: 0,
    department_counts: {},
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/dashboard/")
      .then((response) => {
        console.log(response)
        const data = response.data;
        setDashboardData({
          total_subadmins: data.total_subadmins,
          total_students: data.total_students,
          total_departments: Object.keys(data.department_counts).length,
          department_counts: data.department_counts,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard data:", error);
      });
  }, []);

  return (
    <div className="container py-5">
      {/* Header Stats */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUsers className="text-primary mb-2" size={35} />
            <h5>Total Subadmins</h5>
            <h3 className="fw-bold">{dashboardData.total_subadmins}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUserGraduate className="text-success mb-2" size={35} />
            <h5>Total Students</h5>
            <h3 className="fw-bold">{dashboardData.total_students}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="border p-4 bg-light rounded text-center shadow-sm">
            <FaUniversity className="text-danger mb-2" size={35} />
            <h5>Total Departments</h5>
            <h3 className="fw-bold">{dashboardData.total_departments}</h3>
          </div>
        </div>
      </div>

      {/* Students Per Department */}
      <h4 className="mb-3 text-center">Students Per Department</h4>
      <div className="row">
        {Object.entries(dashboardData.department_counts).map(([key, count], index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
            <div
              className="border p-4 rounded text-center shadow-sm"
              style={{ width: "180px", backgroundColor: "#f8f9fa" }}
            >
              <h6 className="mb-1">{key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</h6>
              <h5 className="fw-bold">{count}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
