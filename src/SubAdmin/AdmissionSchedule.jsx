import React from 'react';

const AdmissionSchedule = () => {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Department Name</th>
          <th>Date of Joining</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Dummy row 1 */}
        <tr>
          <td>Computer Science</td>
          <td>2025-06-01</td>
          <td>10:00 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
        {/* Dummy row 2 */}
        <tr>
          <td>Mechanical</td>
          <td>2025-06-02</td>
          <td>09:30 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
         {/* Dummy row 3 */}
         <tr>
          <td>Printing Technology</td>
          <td>2025-06-04</td>
          <td>10:00 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
         {/* Dummy row 4 */}
         <tr>
          <td>Electronics and computer</td>
          <td>2025-06-07</td>
          <td>10:00 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
         {/* Dummy row 5 */}
         <tr>
          <td>Electrical and Electronics</td>
          <td>2025-06-08</td>
          <td>10:00 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
         {/* Dummy row 6 */}
         <tr>
          <td>Electronics</td>
          <td>2025-06-09</td>
          <td>10:00 AM</td>
          <td>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdmissionSchedule;