import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewStudents = () => {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/upload-certificates/")
      .then((response) => {
        // Group students by course_name (department)
        console.log(response)
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
      <h2 className="mb-4">List of Students</h2>

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
                  </tr>
                </thead>
                <tbody>
                  {departments[dept].map((user) => (
                    <tr key={user.id}>
                      <td>{user.student_name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
};
export default ViewStudents;