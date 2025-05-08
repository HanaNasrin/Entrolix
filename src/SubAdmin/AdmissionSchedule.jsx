
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AdmissionSchedule = () => {
//   const [schedule, setSchedule] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     department: "",
//     date_of_joining: "",
//     time_of_joining: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/admission-schedule/")
//       .then((response) => {
//         setSchedule(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleEditClick = (index) => {
//     const item = schedule[index];
//     setFormData({
//       department: item.department,
//       date_of_joining: item.date_of_joining,
//       time_of_joining: item.time_of_joining,
//     });
//     setEditIndex(index);
//     setShowModal(true);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSave = () => {
//     const updated = [...schedule];
//     updated[editIndex] = {
//       ...updated[editIndex],
//       department: formData.department,
//       date_of_joining: formData.date_of_joining,
//       time_of_joining: formData.time_of_joining,
//     };
//     setSchedule(updated);
//     setShowModal(false);

//     // Update backend (optional)
//     axios
//       .put(`http://localhost:8000/api/admission-schedule/${updated[editIndex].id}/`, updated[editIndex])
//       .then((res) => {
//         console.log("Updated successfully:", res.data);
//       })
//       .catch((err) => {
//         console.error("Update failed:", err);
//       });
//   };

//   const handlePublishClick = () => {
//     alert("Admission schedule has been published to the home page.");
//     // Backend publish logic goes here
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="mb-0">Admission Schedule</h3>
//         <Button className="btn btn-warning" onClick={handlePublishClick}>
//           Publish to Homepage
//         </Button>
//       </div>
//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Department Name</th>
//             <th>Date of Joining</th>
//             <th>Time</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {schedule.map((item, index) => (
//             <tr key={item.id}>
//               <td>{item.department_display}</td>
//               <td>{item.date_of_joining}</td>
//               <td>{item.time_of_joining}</td>
//               <td>
//                 <Button variant="primary" onClick={() => handleEditClick(index)}>
//                   Edit
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Schedule</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//   <form>
//     <div className="mb-3">
//       <label className="form-label">Date of Joining</label>
//       <input
//         type="date"
//         className="form-control"
//         name="date_of_joining"
//         value={formData.date_of_joining}
//         onChange={handleChange}
//       />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Time of Joining</label>
//       <input
//         type="time"
//         className="form-control"
//         name="time_of_joining"
//         value={formData.time_of_joining}
//         onChange={handleChange}
//       />
//     </div>
//   </form>
// </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="success" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default AdmissionSchedule;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdmissionSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    department: "",
    date_of_joining: "",
    time_of_joining: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admission-schedule/")
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditClick = (index) => {
    const item = schedule[index];
    setFormData({
      id: item.id,
      department: item.department,
      date_of_joining: item.date_of_joining,
      time_of_joining: item.time_of_joining,
    });
    setEditIndex(index);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const { id, department, date_of_joining, time_of_joining } = formData;
    const updatedSchedule = {
      department,
      date_of_joining,
      time_of_joining,
    };

    axios
      .put(`http://localhost:8000/api/admission-schedule/${id}/`, updatedSchedule)
      .then((res) => {
        const updated = [...schedule];
        updated[editIndex] = res.data;
        setSchedule(updated);
        setShowModal(false);
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  };

  const handlePublishClick = () => {
    alert("Admission schedule has been published to the home page.");
    // Optional: trigger backend API for publishing if needed
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Admission Schedule</h3>
      </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Department Name</th>
            <th>Date of Joining</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={item.id}>
              <td>{item.department_display}</td>
              <td>{item.date_of_joining_display}</td>
              <td>{item.time_of_joining_display}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditClick(index)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Date of Admission</label>
              <input
                type="date"
                className="form-control"
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Time of Joining</label>
              <input
                type="time"
                className="form-control"
                name="time_of_joining"
                value={formData.time_of_joining}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdmissionSchedule;
