
// // // import React, { useEffect, useState } from "react";
// // // import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";
// // // import { MdCategory, MdSchool } from "react-icons/md";
// // // import { Button } from "react-bootstrap";
// // // import axios from "axios";
// // // const initialAdmissions = [
// // //     { id: 1, studentName: "John Doe", date: "2025-03-29T14:30:00Z", documentsUploaded: "2/3", category: "Merit", department: "Computer Science" },
// // //     { id: 2, studentName: "Jane Smith", date: "2025-03-28T10:00:00Z", documentsUploaded: "3/3", category: "NRI", department: "Electrical Engineering" },
// // //     { id: 3, studentName: "Alex Johnson", date: "2025-03-27T09:15:00Z", documentsUploaded: "1/3", category: "Merit", department: "Mechanical Engineering" }
// // // ];

// // // const ManageAdmissions = () => {
// // //     const [admissions, setAdmissions] = useState([]);
// // //     const [expanded, setExpanded] = useState(null);
// // //    useEffect(()=>{
// // //     axios.get('http://localhost:8000/api/upload-certificates/').then((response)=>{
// // //     console.log(response)
// // //     if (response.data) {
// // //         setAdmissions(response.data);
// // //     }
        
// // // }).catch((error)=>{
// // //     console.log(error)
// // // })
// // //    },[])
    
// // //     const formatDate = (dateString) => {
// // //         const date = new Date(dateString);
// // //         return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
// // //     };

// // //     const enrollStudent = (id) => setAdmissions(admissions.filter((admission) => admission.id !== id));

// // //     return (
// // //         <div className="container my-4">
// // //             <h1 className="text-center mb-4">Manage Admissions</h1>
// // //             {admissions.length === 0 ? (
// // //                 <h4 className="text-center text-muted">No pending admissions.</h4>
// // //             ) : (
// // //                 <div className="row">
// // //                     {admissions.map((admission) => (
// // //                         <div key={admission.id} className="col-md-12 mb-4">
// // //                             <div className={`card ${expanded === admission.id ? "border-primary shadow" : ""}`}>
// // //                                 <div className="card-body d-flex justify-content-between align-items-center">
// // //                                     <div><FiUser className="text-primary me-2" /> {admission.student_name}</div>
// // //                                     <div><FiCalendar className="text-primary me-2" /> {formatDate(admission.date)}</div>
// // //                                     <div><FiFileText className="text-primary me-2" /> {admission.documentsUploaded}</div>
// // //                                     <div><MdCategory className="text-primary me-2" /> {admission.category}</div>
// // //                                     <div><MdSchool className="text-primary me-2" /> {admission.course_name}</div>
// // //                                     <div>
// // //                                         <Button variant="success" className="me-2" onClick={() => enrollStudent(admission.id)}>Enroll</Button>
// // //                                         <Button variant="warning" onClick={() => setExpanded(expanded === admission.id ? null : admission.id)}>
// // //                                             {expanded === admission.id ? "Hide Details" : "View Details"}
// // //                                         </Button>
// // //                                     </div>
// // //                                 </div>
// // //                                 {expanded === admission.id && <div className="card-footer bg-light">Additional Details: No further details available.</div>}
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ManageAdmissions;
// // import React, { useEffect, useState } from "react";
// // import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";
// // import { MdCategory, MdSchool } from "react-icons/md";
// // import { Button, Table } from "react-bootstrap";
// // import axios from "axios";

// // const ManageAdmissions = () => {
// //   const [admissions, setAdmissions] = useState([]);
// //   const [expanded, setExpanded] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:8000/api/upload-certificates/")
// //       .then((response) => {
// //         console.log(response);
// //         if (response.data) {
// //           setAdmissions(response.data);
// //         }
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
// //       hour: "2-digit",
// //       minute: "2-digit"
// //     })}`;
// //   };

// //   const enrollStudent = (id) =>
// //     setAdmissions(admissions.filter((admission) => admission.id !== id));

// //   return (
// //     <div className="container my-4">
// //       <h1 className="text-center mb-4">Manage Admissions</h1>
// //       {admissions.length === 0 ? (
// //         <h4 className="text-center text-muted">No pending admissions.</h4>
// //       ) : (
// //         <div className="row">
// //           {admissions.map((admission) => (
// //             <div key={admission.id} className="col-md-12 mb-4">
// //               <div
// //                 className={`card ${
// //                   expanded === admission.id ? "border-primary shadow" : ""
// //                 }`}
// //               >
// //                 <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
// //                   <div>
// //                     <FiUser className="text-primary me-2" />
// //                     {admission.student_name}
// //                   </div>
// //                   <div>
// //                     <FiCalendar className="text-primary me-2" />
// //                     {formatDate(admission.date)}
// //                   </div>
// //                   <div>
// //                     <FiFileText className="text-primary me-2" />
// //                     {admission.documentsUploaded}
// //                   </div>
// //                   <div>
// //                     <MdCategory className="text-primary me-2" />
// //                     {admission.category}
// //                   </div>
// //                   <div>
// //                     <MdSchool className="text-primary me-2" />
// //                     {admission.course_name}
// //                   </div>
// //                   <div className="mt-2 mt-md-0">
// //                     <Button
// //                       variant="success"
// //                       className="me-2"
// //                       onClick={() => enrollStudent(admission.id)}
// //                     >
// //                       Enroll
// //                     </Button>
// //                     <Button
// //                       variant="warning"
// //                       onClick={() =>
// //                         setExpanded(expanded === admission.id ? null : admission.id)
// //                       }
// //                     >
// //                       {expanded === admission.id ? "Hide Details" : "View Details"}
// //                     </Button>
// //                   </div>
// //                 </div>

// //                 {expanded === admission.id && (
// //                   <div className="card-footer bg-light">
// //                     <h5 className="mb-3">Uploaded Documents</h5>
// //                     <Table striped bordered hover responsive>
// //                       <thead>
// //                         <tr>
// //                           <th>Plus Two Certificate</th>
// //                           <th>Passport Size Photo</th>
// //                           <th>Annual Income</th>
// //                           <th>Community Certificate</th>
// //                           <th>Nativity Certificate</th>
// //                           <th>Transfer Certificate</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         <tr>
// //                           <td>
// //                             {admission.plus_two_certificate ? (
// //                               <a
// //                                 href={`http://localhost:8000${admission.plus_two_certificate}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                           <td>
// //                             {admission.passport_size_photo ? (
// //                               <a
// //                                 href={`http://localhost:8000${admission.passport_size_photo}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                           <td>{admission.annual_income || "N/A"}</td>
// //                           <td>
// //                             {admission.community_certificate ? (
// //                               <a
// //                                 href={`http://localhost:8000${admission.community_certificate}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                           <td>
// //                             {admission.nativity_certificate ? (
// //                               <a
// //                                 href={`http://localhost:8000${admission.nativity_certificate}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                           <td>
// //                             {admission.transfer_certificate ? (
// //                               <a
// //                                 href={`http://localhost:8000${admission.transfer_certificate}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                         </tr>
// //                       </tbody>
// //                     </Table>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ManageAdmissions;
// import React, { useEffect, useState } from "react";
// import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";
// import { MdCategory, MdSchool } from "react-icons/md";
// import { Button, Table } from "react-bootstrap";
// import axios from "axios";

// const ManageAdmissions = () => {
//   const [admissions, setAdmissions] = useState([]);
//   const [expanded, setExpanded] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/upload-certificates/")
//       .then((response) => {
//         if (response.data) {
//           setAdmissions(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     })}`;
//   };

//   const enrollStudent = (id) =>
//     setAdmissions(admissions.filter((admission) => admission.id !== id));

//   const approveApplication = (id) => {
//     axios
//       .patch(`http://localhost:8000/api/upload-certificates/${id}/`, {
//         status: "approved", // Assuming your backend accepts this
//       })
//       .then((response) => {
//         console.log("Application approved", response);
//         setAdmissions((prev) =>
//           prev.map((a) => (a.id === id ? { ...a, status: "approved" } : a))
//         );
//       })
//       .catch((error) => console.log("Error approving application", error));
//   };

//   const removeApplication = (id) => {
//     axios
//       .delete(`http://localhost:8000/api/upload-certificates/${id}/`)
//       .then(() => {
//         console.log("Application removed");
//         setAdmissions(admissions.filter((admission) => admission.id !== id));
//       })
//       .catch((error) => console.log("Error removing application", error));
//   };

//   return (
//     <div className="container my-4">
//       <h1 className="text-center mb-4">Manage Admissions</h1>
//       {admissions.length === 0 ? (
//         <h4 className="text-center text-muted">No pending admissions.</h4>
//       ) : (
//         <div className="row">
//           {admissions.map((admission) => (
//             <div key={admission.id} className="col-md-12 mb-4">
//               <div
//                 className={`card ${
//                   expanded === admission.id ? "border-primary shadow" : ""
//                 }`}
//               >
//                 <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
//                   <div>
//                     <FiUser className="text-primary me-2" />
//                     {admission.student_name}
//                   </div>
//                   <div>
//                     <FiCalendar className="text-primary me-2" />
//                     {formatDate(admission.date)}
//                   </div>
//                   <div>
//                     <FiFileText className="text-primary me-2" />
//                     {admission.documentsUploaded}
//                   </div>
//                   <div>
//                     <MdCategory className="text-primary me-2" />
//                     {admission.category}
//                   </div>
//                   <div>
//                     <MdSchool className="text-primary me-2" />
//                     {admission.course_name}
//                   </div>
//                   <div className="mt-2 mt-md-0">
//                     <Button
//                       variant="success"
//                       className="me-2"
//                       onClick={() => enrollStudent(admission.id)}
//                     >
//                       Enroll
//                     </Button>
//                     <Button
//                       variant="warning"
//                       onClick={() =>
//                         setExpanded(
//                           expanded === admission.id ? null : admission.id
//                         )
//                       }
//                     >
//                       {expanded === admission.id ? "Hide Details" : "View Details"}
//                     </Button>
//                   </div>
//                 </div>

//                 {expanded === admission.id && (
//                   <div className="card-footer bg-light">
//                     <h5 className="mb-3">Uploaded Documents</h5>
//                     <Table striped bordered hover responsive>
//                       <thead>
//                         <tr>
//                           <th>Plus Two Certificate</th>
//                           <th>Passport Size Photo</th>
//                           <th>Annual Income</th>
//                           <th>Community Certificate</th>
//                           <th>Nativity Certificate</th>
//                           <th>Transfer Certificate</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>
//                             {admission.plus_two_certificate ? (
//                               <a
//                                 href={`http://localhost:8000${admission.plus_two_certificate}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 View
//                               </a>
//                             ) : (
//                               "N/A"
//                             )}
//                           </td>
//                           <td>
//                             {admission.passport_size_photo ? (
//                               <a
//                                 href={`http://localhost:8000${admission.passport_size_photo}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 View
//                               </a>
//                             ) : (
//                               "N/A"
//                             )}
//                           </td>
//                           <td>{admission.annual_income || "N/A"}</td>
//                           <td>
//                             {admission.community_certificate ? (
//                               <a
//                                 href={`http://localhost:8000${admission.community_certificate}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 View
//                               </a>
//                             ) : (
//                               "N/A"
//                             )}
//                           </td>
//                           <td>
//                             {admission.nativity_certificate ? (
//                               <a
//                                 href={`http://localhost:8000${admission.nativity_certificate}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 View
//                               </a>
//                             ) : (
//                               "N/A"
//                             )}
//                           </td>
//                           <td>
//                             {admission.transfer_certificate ? (
//                               <a
//                                 href={`http://localhost:8000${admission.transfer_certificate}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 View
//                               </a>
//                             ) : (
//                               "N/A"
//                             )}
//                           </td>
//                         </tr>
//                       </tbody>
//                     </Table>

//                     {/* Action Buttons */}
//                     <div className="mt-3 d-flex justify-content-end gap-2">
//                       <Button
//                         variant="outline-success"
//                         onClick={() => approveApplication(admission.id)}
//                       >
//                         Approve Application
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => removeApplication(admission.id)}
//                       >
//                         Remove Application
//                       </Button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageAdmissions;
import React, { useEffect, useState } from "react";
import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";
import { MdCategory, MdSchool } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { data } from "react-router-dom";

const ManageAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/upload-certificates/")
      .then((response) => {
        setAdmissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const approveApplication = (id) => {
    axios
      .patch(`http://localhost:8000/api/upload-certificates/${id}/`)
      .then(() => {
        console.log(data)
        setAdmissions((prev) => prev.filter((admission) => admission.id !== id));
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
                  <div><FiCalendar className="text-primary me-2" /> {formatDate(admission.date)}</div>
                  <div><FiFileText className="text-primary me-2" /> {admission.documentsUploaded}</div>
                  <div><MdCategory className="text-primary me-2" /> {admission.category}</div>
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
    </div>
  );
};

export default ManageAdmissions;
