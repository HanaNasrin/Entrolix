import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubAdminManageUsers = () => {
  const navigate = useNavigate(); 
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: " Sub Admin", isBlocked: false },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Sub Admin", isBlocked: false },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Clerk", isBlocked: false },
  ]);

//   const handleToggleBlock = (id) => {
//     setUsers(users.map(user => 
//       user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
//     ));
//   };

  return (
    <div className="container mt-4">
       
      <h3 className="mb-3">Manage Sub Users</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button 
                //   className={btn ${user.isBlocked ? "btn-success" : "btn-warning"}} 
                //   onClick={() => handleToggleBlock(user.id)}
                >blc
                  {/* {user.isBlocked ? "Unblock" : "Block"} */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="mb-3 d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={() => navigate("/admin/addsubadmin")} > Add Sub Admin</button>
      </h3>
    </div>
  );
};

export default SubAdminManageUsers;