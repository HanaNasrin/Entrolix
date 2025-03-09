import React, { useState } from "react";
// import AdminNavbar from "./AdminNavbar";

const ManageAdmission = () => {
  const [admissions, setAdmissions] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Applicant" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Applicant" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Applicant" },
  ]);

  const handleEdit = (id) => {
    // Placeholder for edit functionality (e.g., open an edit form or modal)
    console.log("Editing admission with id:", id);
  };

  const handleDelete = (id) => {
    // Remove the admission from the list
    setAdmissions(admissions.filter((adm) => adm.id !== id));
  };

  return (
    <div>
      {/* <AdminNavbar /> */}
      <div className="d-flex">
        <div className="container mt-4">
          <h3 className="mb-3">Manage Admission</h3>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((adm) => (
                <tr key={adm.id}>
                  <td>{adm.name}</td>
                  <td>{adm.email}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(adm.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(adm.id)}
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
    </div>
  );
};

export default ManageAdmission;