// import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
// const SubAdminReports = () => {
//   // Dummy data
//   const totalStudents = 600;
//   const nriStudents = 80;
//   const meritStudents = 520;
//   const pendingAdmissions = 35;

//   const departments = [
//     { name: "Computer Science", count: 150 },
//     { name: "Mechanical", count: 120 },
//     { name: "Electrical", count: 130 },
//     { name: "Electronics", count: 100 },
//     { name: "Printing", count: 60 },
//     { name: "Computer and Electronics", count: 40 },
//   ];

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/dashboard/")
//       .then((res) => {
//         const data = res.data;
//         setDashboard({
//           total_students: data.total_students,
//           nri_students: data.nri_students || 0,
//           merit_students: data.merit_students || 0,
//           pending_admissions: data.total_applications || 0,
//           department_counts: data.department_counts || {},
//         });
//       })
//       .catch((err) => {
//         console.error("Failed to fetch dashboard data:", err);
//       });
//   }, []);


//   return (
//     <div className="container mt-4">
//       <h4 className="mb-4">Sub-Admin Dashboard</h4>

//       {/* Cards Row */}
//       <div className="row">
//         {/* Total Students */}
//         <div className="col-md-3 mb-3">
//           <div className="card text-center shadow-sm">
//             <div className="card-body">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//                 alt="students-icon"
//                 style={{ width: "50px" }}
//               />
//               <h6 className="mt-2">Total Students</h6>
//               <p className="h4 fw-bold">{totalStudents}</p>
//             </div>
//           </div>
//         </div>

//         {/* NRI Students */}
//         <div className="col-md-3 mb-3">
//           <div className="card text-center shadow-sm">
//             <div className="card-body">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/3176/3176292.png"
//                 alt="nri-icon"
//                 style={{ width: "50px" }}
//               />
//               <h6 className="mt-2">NRI Students</h6>
//               <p className="h4 fw-bold">{nriStudents}</p>
//             </div>
//           </div>
//         </div>

//         {/* Merit Students */}
//         <div className="col-md-3 mb-3">
//           <div className="card text-center shadow-sm">
//             <div className="card-body">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
//                 alt="merit-icon"
//                 style={{ width: "50px" }}
//               />
//               <h6 className="mt-2">Merit Students</h6>
//               <p className="h4 fw-bold">{meritStudents}</p>
//             </div>
//           </div>
//         </div>

//         {/* Pending Admissions */}
//         <div className="col-md-3 mb-3">
//           <div className="card text-center shadow-sm">
//             <div className="card-body">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
//                 alt="pending-icon"
//                 style={{ width: "50px" }}
//               />
//               <h6 className="mt-2">Admission Pending</h6>
//               <p className="h4 fw-bold">{pendingAdmissions}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Department Breakdown */}
//       <div className="card shadow-sm mt-4">
//         <div className="card-body">
//           <h5 className="card-title">Students by Department</h5>
//           <hr />
//           <div className="row">
//             {departments.map((dept, index) => (
//               <div key={index} className="col-md-4 col-sm-6 mb-3">
//                 <div className="border p-3 text-center">
//                   <h6 className="fw-semibold">{dept.name}</h6>
//                   <p className="h5 fw-bold">{dept.count}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubAdminReports;
import React, { useEffect, useState } from "react";
import axios from "axios";

const SubAdminReports = () => {
  const [dashboard, setDashboard] = useState({
    total_students: 0,
    nri_students: 0,
    merit_students: 0,
    pending_admissions: 0,
    department_counts: {},
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/dashboard/")
      .then((res) => {
        console.log(res)
        const data = res.data;
        setDashboard({
          total_students: data.total_students || 0,
          nri_students: data.nri_students || 0,
          merit_students: data.merit_students || 0,
          pending_admissions: data.total_applications || 0,
          department_counts: data.department_counts || {},
        });
      })
      .catch((err) => {
        console.error("Failed to fetch dashboard data:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Sub-Admin Dashboard</h4>

      {/* Summary Cards */}
      <div className="row">
        {[
          {
            title: "Total Students",
            icon: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
            count: dashboard.total_students,
          },
          {
            title: "NRI Students",
            icon: "https://cdn-icons-png.flaticon.com/512/3176/3176292.png",
            count: dashboard.nri_students,
          },
          {
            title: "Merit Students",
            icon: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
            count: dashboard.merit_students,
          },
          {
            title: "Admission Pending",
            icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
            count: dashboard.pending_admissions,
          },
        ].map((card, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <img src={card.icon} alt="icon" style={{ width: "50px" }} />
                <h6 className="mt-2">{card.title}</h6>
                <p className="h4 fw-bold">{card.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Students by Department */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">Students by Department</h5>
          <hr />
          <div className="row">
            {Object.entries(dashboard.department_counts).map(([dept, count], index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div className="border p-3 text-center">
                  <h6 className="fw-semibold">
                    {dept.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h6>
                  <p className="h5 fw-bold">{count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminReports;
