// import React, { useState } from "react";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", isBlocked: false },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Sub Admin", isBlocked: false },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Clerk", isBlocked: false },
//   ]);

//   const handleToggleBlock = (id) => {
//     setUsers(users.map(user => 
//       user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
//     ));
//   };

//   return (
//     <div className="container mt-4">
       
//       <h3 className="mb-3">Manage Students</h3>
//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button 
//                 //   className={btn ${user.isBlocked ? "btn-success" : "btn-warning"}} 
//                 //   onClick={() => handleToggleBlock(user.id)}
//                 >
//                      {user.isBlocked ? "Unblock" : "Block"} 
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageUsers;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageDepartmentUsers = () => {
  const [departments, setDepartments] = useState({
    CSE: [
      { id: 1, name: "Alice Johnson", email: "alice@cse.com", isBlocked: false },
      { id: 2, name: "Mark Brown", email: "mark@cse.com", isBlocked: false },
    ],
    ECE: [
      { id: 3, name: "Eve Watson", email: "eve@ece.com", isBlocked: false },
    ],
    EEE: [
      { id: 3, name: "Eve Watson", email: "eve@ece.com", isBlocked: false },
    ],
    ME: [],
    CEC: [],
    PT: [],
  });

  const handleToggleBlock = (dept, userId) => {
    setDepartments((prev) => ({
      ...prev,
      [dept]: prev[dept].map((user) =>
        user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
      ),
    }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Students</h2>

      {Object.entries(departments).map(([dept, students]) => (
        <div key={dept} className="mb-5">
          <h4 className="mb-3">{dept} Department</h4>

          {students.length === 0 ? (
            <p className="text-muted">No students in this department.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th style={{ width: "150px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className={`btn btn-sm ${
                            user.isBlocked ? "btn-success" : "btn-warning"
                          }`}
                          onClick={() => handleToggleBlock(dept, user.id)}
                        >
                          {user.isBlocked ? "Unblock" : "Block"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageDepartmentUsers;
