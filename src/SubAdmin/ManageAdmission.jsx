
import React, { useEffect, useState } from "react";
import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";
import { MdCategory, MdSchool } from "react-icons/md";
import { Button } from "react-bootstrap";
import axios from "axios";
const initialAdmissions = [
    { id: 1, studentName: "John Doe", date: "2025-03-29T14:30:00Z", documentsUploaded: "2/3", category: "Merit", department: "Computer Science" },
    { id: 2, studentName: "Jane Smith", date: "2025-03-28T10:00:00Z", documentsUploaded: "3/3", category: "NRI", department: "Electrical Engineering" },
    { id: 3, studentName: "Alex Johnson", date: "2025-03-27T09:15:00Z", documentsUploaded: "1/3", category: "Merit", department: "Mechanical Engineering" }
];

const ManageAdmissions = () => {
    const [admissions, setAdmissions] = useState([]);
    const [expanded, setExpanded] = useState(null);
   useEffect(()=>{
    axios.get('http://localhost:8000/api/upload-certificates/').then((response)=>{
    console.log(response)
    if (response.data) {
        setAdmissions(response.data);
    }
        
}).catch((error)=>{
    console.log(error)
})
   },[])
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    };

    const enrollStudent = (id) => setAdmissions(admissions.filter((admission) => admission.id !== id));

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Manage Admissions</h1>
            {admissions.length === 0 ? (
                <h4 className="text-center text-muted">No pending admissions.</h4>
            ) : (
                <div className="row">
                    {admissions.map((admission) => (
                        <div key={admission.id} className="col-md-12 mb-4">
                            <div className={`card ${expanded === admission.id ? "border-primary shadow" : ""}`}>
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div><FiUser className="text-primary me-2" /> {admission.student_name}</div>
                                    <div><FiCalendar className="text-primary me-2" /> {formatDate(admission.date)}</div>
                                    <div><FiFileText className="text-primary me-2" /> {admission.documentsUploaded}</div>
                                    <div><MdCategory className="text-primary me-2" /> {admission.category}</div>
                                    <div><MdSchool className="text-primary me-2" /> {admission.course_name}</div>
                                    <div>
                                        <Button variant="success" className="me-2" onClick={() => enrollStudent(admission.id)}>Enroll</Button>
                                        <Button variant="warning" onClick={() => setExpanded(expanded === admission.id ? null : admission.id)}>
                                            {expanded === admission.id ? "Hide Details" : "View Details"}
                                        </Button>
                                    </div>
                                </div>
                                {expanded === admission.id && <div className="card-footer bg-light">Additional Details: No further details available.</div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageAdmissions;
