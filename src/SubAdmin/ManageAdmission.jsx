
import React, { useEffect, useState } from "react";
import { FiUser, FiFileText } from "react-icons/fi";
import { MdCategory, MdSchool } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { data } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; // 
import 'react-toastify/dist/ReactToastify.css'; 

const ManageAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/upload-certificates/")
      .then((response) => {
        console.log(response)
        setAdmissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const approveApplication = (id) => {
    axios
      .patch(`http://localhost:8000/api/upload-certificates/${id}/`)
      .then(() => {
        console.log(data)
        setAdmissions((prev) => prev.filter((admission) => admission.id !== id));
        toast.success("The admission is approved! ", { autoClose: 3000, position: "top-center" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeApplication = (id) => {
    axios
      .delete(`http://localhost:8000/api/upload-certificates/${id}/`)
      .then((response) => {
        console.log(response)
        setAdmissions((prev) => prev.filter((admission) => admission.id !== id));
        toast.success("The admission is rejected! ❌", { autoClose: 3000, position: "top-center" });

      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                  <div><FiUser className="text-primary me-2" /> {admission.student_name}</div>
                  {/* <div><FiCalendar className="text-primary me-2" /> {formatDate(admission.date)}</div> */}
                  <div><FiFileText className="text-primary me-2" /> {admission.documentsUploaded}</div>
                  <div><MdCategory className="text-primary me-2" /> {admission.type}</div>
                  <div><MdSchool className="text-primary me-2" /> {admission.course_name}</div>
                  <div>
                    <Button
                      variant="warning"
                      onClick={() =>
                        setExpanded(expanded === admission.id ? null : admission.id)
                      }
                    >
                      {expanded === admission.id ? "Hide Details" : "View Details"}
                    </Button>
                  </div>
                </div>

                {expanded === admission.id && (
                  <div className="card-footer bg-light">
                    <Table striped bordered responsive className="mt-3">
                      <thead>
                        <tr>
                          <th>Document</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: "Admit Card / Allotment Memo / Data Sheet", value: admission.admit_card },
                          { label: "Fee Receipt", value: admission.fee_receipt },
                          { label: "SSLC / 10th Mark List", value: admission.sslc_certificate },
                          { label: "Plus Two / Diploma Certificate", value: admission.plus_two_certificate },
                          { label: "Passport Size Photo", value: admission.passport_size_photo },
                          { label: "Income Certificate", value: admission.income_certificate },
                          { label: "Annual Income", value: admission.annual_income },
                          { label: "Community Certificate", value: admission.community_certificate },
                          { label: "Nativity Certificate", value: admission.nativity_certificate },
                          { label: "Transfer Certificate", value: admission.transfer_certificate },
                          { label: "Conduct Certificate", value: admission.conduct_certificate },
                          { label: "Medical Fitness Certificate", value: admission.fitness_certificate },
                          { label: "Migration Certificate", value: admission.migration_certificate },
                        ].map((doc, idx) => (
                          <tr key={idx}>
                            <td>{doc.label}</td>
                            <td>
                              {doc.value ? (
                                typeof doc.value === "string" ? (
                                  <a
                                    href={`http://localhost:8000${doc.value}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View
                                  </a>
                                ) : (
                                  doc.value
                                )
                              ) : (
                                "N/A"
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-end gap-2 mt-3">
                      <Button variant="success" onClick={() => approveApplication(admission.id)}>
                        Approve
                      </Button>
                      <Button variant="danger" onClick={() => removeApplication(admission.id)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"/>
    </div>
  );
};

export default ManageAdmissions;
