import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const EditableAdmissionSchedule = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, department: 'Computer Science', date: '2025-06-01', time: '10:00 AM' },
    { id: 2, department: 'Mechanical', date: '2025-06-02', time: '09:30 AM' },
    { id: 3, department: 'Printing Technology', date: '2025-06-04', time: '10:00 AM' },
    { id: 4, department: 'Electronics and Computer', date: '2025-06-07', time: '10:00 AM' },
    { id: 5, department: 'Electrical and Electronics', date: '2025-06-08', time: '10:00 AM' },
    { id: 6, department: 'Electronics', date: '2025-06-09', time: '10:00 AM' }
  ]);

  const [editing, setEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState([]);

  const handleEditClick = () => {
    setEditing(true);
    setEditedSchedule(schedule);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEditedSchedule(editedSchedule.map(item => item.id === id ? { ...item, [name]: value } : item));
  };

  const handleSaveClick = () => {
    setSchedule(editedSchedule);
    setEditing(false);
  };

  const handlePublishClick = () => {
    alert("Admission schedule has been published to the home page.");
    // Here you could send the data to your backend to reflect on homepage
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Admission Schedule</h3>
        <div className="d-flex gap-2">
          {!editing ? (
            <>
              <button className="btn btn-primary" onClick={handleEditClick}>Edit All</button>
              <button className="btn btn-warning" onClick={handlePublishClick}>Publish to Homepage</button>
            </>
          ) : (
            <button className="btn btn-success" onClick={handleSaveClick}>Save All</button>
          )}
        </div>
      </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Department Name</th>
            <th>Date of Joining</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {(editing ? editedSchedule : schedule).map((item) => (
            <tr key={item.id}>
              <td>{item.department}</td>
              <td>
                {editing ? (
                  <input
                    type="date"
                    name="date"
                    value={item.date}
                    onChange={(e) => handleChange(e, item.id)}
                    className="form-control"
                  />
                ) : (
                  item.date
                )}
              </td>
              <td>
                {editing ? (
                  <input
                    type="time"
                    name="time"
                    value={item.time}
                    onChange={(e) => handleChange(e, item.id)}
                    className="form-control"
                  />
                ) : (
                  item.time
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableAdmissionSchedule;
