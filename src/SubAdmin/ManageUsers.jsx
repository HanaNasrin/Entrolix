import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageDepartmentUsers = () => {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/email/")
      .then((response) => {
        console.log(response)
        // Group students by course_name (department)
        const grouped = response.data.reduce((acc, curr) => {
          const dept = curr.course_name || "Unknown";
          if (!acc[dept]) acc[dept] = [];
          acc[dept].push(curr);
          return acc;
        }, {});
        setDepartments(grouped);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Students</h2>

      {["IT", "EC","ME","PT","EEE","EP"].map((dept) => (
        departments[dept] ? (
          <div key={dept} className="mb-5">
            <h4 className="mb-3">{dept} Department</h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Acion</th>
                  </tr>
                </thead>
                <tbody>
                  {departments[dept].map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><button className="btn btn-warning">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : <h4 className="text-center text-muted">Currently no students Admitted.</h4>
      ))}
    </div>
  );
};
export default ManageDepartmentUsers;