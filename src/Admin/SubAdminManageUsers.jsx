import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubAdminManageUsers = () => {
  const navigate = useNavigate(); 
  const [subadmin, setSubadmin] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/subadminregister/')
      .then((response) => {
        console.log("Fetched sub-admins:", response.data);
        setSubadmin(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sub-admins:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this sub-admin?")) {
      try {
        await axios.delete(`http://localhost:8000/api/subadminregister/${id}/`);
        alert("Subadmin deleted successfully.");
        setSubadmin(subadmin.filter(user => user.id !== id)); // Remove deleted user from UI
      } catch (error) {
        console.error("Error deleting subadmin:", error.response?.data || error.message);
        alert("Failed to delete subadmin.");
      }
    }
  };
  

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Manage Sub Users</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th> {/* Added phone number column */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subadmin.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td> {/* Displaying phone number */}
              <td>
              <button className="btn btn-warning" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => navigate("/admin/addsubadmin")}>
          Add Sub Admin
        </button>
      </div>
    </div>
  );
};

export default SubAdminManageUsers;