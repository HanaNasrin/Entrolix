// import { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ViewStudents = () => {
//   const [departments, setDepartments] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/email/")
//       .then((response) => {
//         console.log(response.data)
//         // Group students by course_name (department)
//         const grouped = response.data.reduce((acc, curr) => {
//           const dept = curr.course_name || "Unknown";
//           if (!acc[dept]) acc[dept] = [];
//           acc[dept].push(curr);
//           return acc;
//         }, {});
//         console.log("object")
//         setDepartments(grouped);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">List of Students</h2>

//       {["IT", "EC","ME","PT","EEE","EP"].map((dept) => (
//         departments[dept] ? (
//           <div key={dept} className="mb-5">
//             <h4 className="mb-3">{dept} Department</h4>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {departments[dept].map((user) => (
//                     <tr key={user.id}>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : null
//       ))}
//     </div>
//   );
// };
// export default ViewStudents;
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewStudents = () => {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8000/api/email/")
      .then((response) => {
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
        console.error("Error fetching students:", error);
      });
  };

  const handleDelete = (studentId) => {
    axios
      .delete(`http://localhost:8000/api/studentregister/${studentId}/`)
      .then((response) => {
        console.log(response);
        toast.success("Student deleted successfully!");
  
        // Update state by removing the student from departments
        setDepartments((prevDepartments) => {
          const newDepartments = { ...prevDepartments };
          for (const dept in newDepartments) {
            newDepartments[dept] = newDepartments[dept].filter(
              (student) => student.id !== studentId
            );
          }
          return newDepartments;
        });
  
        // Optionally, re-fetch the updated list of students from the server
        fetchStudents();  // Re-fetch students to ensure the data is always up to date
      })
      .catch((error) => {
        console.error("Failed to delete student:", error);
        toast.error("Failed to delete student.");
      });
  };
  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">List of Students</h2>

      {["IT", "EC", "ME", "PT", "EEE", "EP"].map((dept) => (
        departments[dept] ? (
          <div key={dept} className="mb-5">
            <h4 className="mb-3">{dept} Department</h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {departments[dept].map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null
      ))}

      {/* Toasts Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ViewStudents;
