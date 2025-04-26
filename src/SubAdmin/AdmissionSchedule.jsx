
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const AdmissionSchedule = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the admission schedule from the backend using axios
    axios.get("http://localhost:8000/api/admission-schedule/")
      .then(response => {
        console.log(response.data);
        setSchedule(response.data); // Update state with fetched data
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handlePublishClick = () => {
    alert("Admission schedule has been published to the home page.");
    // You can integrate backend call here
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Admission Schedule</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => navigate("/subadmin/form")}>
            Edit All
          </button>
          <button className="btn btn-warning" onClick={handlePublishClick}>
            Publish to Homepage
          </button>
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
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.department_display}</td>
              <td>{item.date_of_joining}</td>
              <td>{item.time_of_joining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdmissionSchedule;
