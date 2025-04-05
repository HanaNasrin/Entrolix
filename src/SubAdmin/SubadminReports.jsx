import React from "react";

const SubAdminReports = () => {
  // Dummy data
  const totalStudents = 600;
  const departments = [
    { name: "Computer Science", count: 150 },
    { name: "Mechanical", count: 120 },
    { name: "Electrical", count: 130 },
    { name: "Electronics", count: 100 },
    { name: "printing", count: 60 },
    { name: "computer and electronics", count: 40 },
  ];
  const nriStudents = 80;
  const meritStudents = 520;

  return (
    <div className="container mt-4">
      

      {/* Cards Row */}
      <div className="row">
        {/* Total Students */}
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="students-icon"
                style={{ width: "50px" }}
              />
              <h5 className="card-title mt-3">Total Students</h5>
              <p className="display-6 fw-bold">{totalStudents}</p>
            </div>
          </div>
        </div>

        {/* NRI Students */}
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3176/3176292.png"
                alt="nri-icon"
                style={{ width: "50px" }}
              />
              <h5 className="card-title mt-3">NRI Students</h5>
              <p className="display-6 fw-bold">{nriStudents}</p>
            </div>
          </div>
        </div>

        {/* Merit Students */}
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                alt="merit-icon"
                style={{ width: "50px" }}
              />
              <h5 className="card-title mt-3">Merit Students</h5>
              <p className="display-6 fw-bold">{meritStudents}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Breakdown */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">Students by Department</h5>
          <hr />
          <div className="row">
            {departments.map((dept, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div className="border p-3 text-center">
                  <h6 className="fw-semibold">{dept.name}</h6>
                  <p className="h4 fw-bold">{dept.count}</p>
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
