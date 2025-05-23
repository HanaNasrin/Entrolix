// import {ToastContainer,toast} from "react-toastify";
// import React, { useState } from "react";
// import { Form  } from "react-bootstrap";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-toastify/dist/ReactToastify.css';

// const UserUpload = () => {
//   const [formData, setFormData] = useState({
//     course_name: "",
//     admit_card: null,
//     fee_reciept: null,
//     sslc_certificate: null,
//     plus_two_certificate: null,
//     passport_size_photo: null,
//     income_certificate: null,
//     annual_income: "",
//     community_certificate: null,
//     nativity_certificate: null,
//     transfer_certificate: null,
//     conduct_certificate: null,
//     physical_certificate: null,
//     migration_certificate: null,
//     });
//   const [category, setCategory] = useState("merit"); // Default selection
//   const courses = ["CS", "PT", "EC", "EEE", "ME", "EP"];
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, type, files, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//     console.log(formData)
//   };

//   const handleSubmit = async (e) => {
//     const studentId=localStorage.getItem('studentId')

//     e.preventDefault();
//     setLoading(true);


    


//     const submissionData = new FormData();
//     submissionData.append('student', studentId);
//     submissionData.append('type', category);

//     Object.keys(formData).forEach((key) => {
//       if (formData[key]) {
//         submissionData.append(key, formData[key]);
//       }
//     });
//     try {
//       const response = await axios.post("http://localhost:8000/api/upload-certificates/", submissionData)
//      console.log(response)
//      toast.success("Your Documents Are Submitted Successfully!");
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       if (
//         error.response &&
//         error.response.status === 400 &&
//         error.response.data?.error === "An application already exists for this student."
//       ) {
//         toast.warning("You have already submitted an application.");
//       } else {
//         toast.error("Failed to submit application");
//       }
//     }
//      finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container py-5">

// <ToastContainer
//   position="top-center"
//   autoClose={2500}
//   hideProgressBar={true}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
//   theme="colored"
// />



//       <div className="row justify-content-center">
//         <div className="col-md-8 col-sm-12">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h3 className="card-title text-center mb-4">Upload Required Documents</h3>

//               {/* Category Selection */}
//               <div className="text-center mb-4">
//                 <button
//                   className={`btn me-2 ${category === "merit" ? "btn-primary" : "btn-outline-primary"}`}
//                   onClick={() => setCategory("merit")}
//                 >
//                   Merit
//                 </button>
//                 <button
//                   className={`btn ${category === "nri" ? "btn-primary" : "btn-outline-primary"}`}
//                   onClick={() => setCategory("nri")}
//                 >
//                   NRI
//                 </button>
//               </div>

//               {/* Merit Fields */}
//               {category === "merit" && (
//                 <form onSubmit={handleSubmit}>
//                  <div className="mb-3">
//                     <label className="form-label">Select Your Admitted Course<span style={{ color: "red" }}>*</span></label>
//                     <select
//                       className="form-select"
//                       name="course_name"
//                       value={formData.course_name} // This ensures controlled behavior
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="" disabled hidden>
//                         ---Select a course---
//                       </option>
//                       {courses.map((course, index) => (
//                         <option key={index} value={course}>
//                           {course}
//                         </option>
//                       ))}
//                     </select>

//                   </div>

//                   <Form.Group controlId="">
//                             <Form.Label>Copy of Admit Card, Allotment Memo, Candidate’s Data Sheet</Form.Label>
//                             <Form.Control type="file" name="admit_card" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="">
//                             <Form.Label>Copy of Fee Receipt</Form.Label>
//                             <Form.Control type="file" name="fee_reciept" onChange={handleChange} />
//                   </Form.Group>
                
//                   <Form.Group controlId="">
//                             <Form.Label>SSLC Certificate / Xth Mark List & Pass Certificate</Form.Label>
//                             <Form.Control type="file" name="sslc_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="plus_two_certificate">
//                             <Form.Label>Plus Two/VHSC/THS/Diploma Certificate</Form.Label>
//                             <Form.Control type="file" name="plus_two_certificate" onChange={handleChange} />
//                   </Form.Group>
                  
//                   <Form.Group controlId="passport_size_photo">
//                             <Form.Label>Passport Size Photo</Form.Label>
//                             <Form.Control type="file" name="passport_size_photo" onChange={handleChange} />
//                   </Form.Group>
                  
//                   <Form.Group controlId="income_certificate">
//                     <Form.Label>Income Certificate</Form.Label>
//                     <Form.Control type="file" name="income_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="annual_income">
//                             <Form.Label>Annual Income</Form.Label>
//                             <Form.Control type="number" name="annual_income" value={formData.annual_income} onChange={handleChange} />
//                   </Form.Group>
              
//                   <Form.Group controlId="">
//                             <Form.Label>Community Certificate (For Reservation Category)</Form.Label>
//                             <Form.Control type="file" name="community_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="">
//                             <Form.Label>Nativity Certificate (For Reservation Category)</Form.Label>
//                             <Form.Control type="file" name="nativity_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="">
//                             <Form.Label>Transfer Certificate (Original)</Form.Label>
//                             <Form.Control type="file" name="transfer_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="">
//                             <Form.Label>Conduct Certificate (Obtained within 6 months)</Form.Label>
//                             <Form.Control type="file" name="conduct_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   <Form.Group controlId="">
//                             <Form.Label>Physical/Medical Fitness Certificate (As per CEE Format)</Form.Label>
//                             <Form.Control type="file" name="physical_certificate" onChange={handleChange} />
//                   </Form.Group>
//                   {/* <Form.Group controlId="">
//                             <Form.Label>Migration Certificate (Original)</Form.Label>
//                             <Form.Control type="file" name="migration_certificate" onChange={handleChange} />
//                   </Form.Group> */}
//                   <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//                                 {loading ? "Submitting..." : "Submit"}
//                   </button>

//                 </form>
//               )}

//               {/* NRI Fields */}
//               {category === "nri" && (
//                 <form onSubmit={handleSubmit}>
//                   <label className="form-label">Select Your Admitted Course<span style={{ color: "red" }}>*</span></label>
//                   <select
//                       className="form-select"
//                       name="course_name"
//                       value={formData.course_name} // This ensures controlled behavior
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="" disabled hidden>
//                         ---Select a course---
//                       </option>
//                       {courses.map((course, index) => (
//                         <option key={index} value={course}>
//                           {course}
//                         </option>
//                       ))}
//                     </select>
//                   <div className="mb-3">
//                     <label className="form-label">Passport Size Photo</label>
//                     <input type="file"  name="passport_size_photo" className="form-control" onChange={handleChange} />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">SSLC Certificate / Xth Mark List & Pass Certificate</label>
//                     <input type="file" name="sslc_certificate" className="form-control" onChange={handleChange} />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Plus Two/VHSC/THS/Diploma Certificate</label>
//                     <input type="file" name="plus_two_certificate" className="form-control"  onChange={handleChange}/>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Copy of Fee Receipt</label>
//                     <input type="file" name="fee_reciept" className="form-control" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Community/Nativity/Income Certificate (For Reservation Category)</label>
//                     <input type="file" className="form-control" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Transfer Certificate (Original)</label>
//                     <input type="file" name="transfer_certificate" className="form-control" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Conduct Certificate (Obtained within 6 months)</label>
//                     <input type="file" name="conduct_certificate" className="form-control" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Physical/Medical Fitness Certificate</label>
//                     <input type="file" name="physical_certificate" className="form-control" />
//                   </div>
//                   {/* <div className="mb-3">
//                     <label className="form-label">Migration Certificate (Original)</label>
//                     <input type="file" className="form-control" />
//                   </div> */}
//                   <button type="submit" className="btn btn-primary w-100">Submit</button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserUpload;
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const UserUpload = () => {
  const [formData, setFormData] = useState({
    course_name: "",
    admit_card: null,
    fee_reciept: null,
    sslc_certificate: null,
    plus_two_certificate: null,
    passport_size_photo: null,
    income_certificate: null,
    annual_income: "",
    community_certificate: null,
    nativity_certificate: null,
    transfer_certificate: null,
    conduct_certificate: null,
    physical_certificate: null,
    migration_certificate: null,
  });

  const [category, setCategory] = useState("merit");
  const courses = ["CS", "PT", "EC", "EEE", "ME", "EP"];
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const studentId = localStorage.getItem("studentId");

    const requiredFields = {
      merit: [
        "course_name",
        "admit_card",
        "fee_reciept",
        "sslc_certificate",
        "plus_two_certificate",
        "passport_size_photo",
        "income_certificate",
        "annual_income",
        "transfer_certificate",
      ],
      nri: [
        "course_name",
        "passport_size_photo",
        "sslc_certificate",
        "plus_two_certificate",
        "fee_reciept",
        "transfer_certificate",
        "conduct_certificate",
        "physical_certificate",
      ],
    };

    const missingFields = requiredFields[category].filter((field) => {
      return !formData[field];
    });

    if (missingFields.length > 0) {
      setLoading(false);
      toast.error("Please fill all required fields before submitting.");
      return;
    }

    const submissionData = new FormData();
    submissionData.append("student", studentId);
    submissionData.append("type", category);

    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        submissionData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload-certificates/",
        submissionData
      );
      console.log(response);
      toast.success("Your Documents Are Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data?.error ===
          "An application already exists for this student."
      ) {
        toast.warning("You have already submitted an application.");
      } else {
        toast.error("Failed to submit application");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Upload Required Documents
              </h3>

              {/* Category Selection */}
              <div className="text-center mb-4">
                <button
                  className={`btn me-2 ${
                    category === "merit"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setCategory("merit")}
                >
                  Merit
                </button>
                <button
                  className={`btn ${
                    category === "nri" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setCategory("nri")}
                >
                  NRI
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Select Your Admitted Course
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    name="course_name"
                    value={formData.course_name}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>
                      ---Select a course---
                    </option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Common & Conditional Fields */}
                {category === "merit" && (
                  <>
                    <Form.Group>
                      <Form.Label>
                        Copy of Admit Card, Allotment Memo, Candidate’s Data Sheet*
                      </Form.Label>
                      <Form.Control type="file" name="admit_card" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Copy of Fee Receipt*</Form.Label>
                      <Form.Control type="file" name="fee_reciept" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>SSLC Certificate*</Form.Label>
                      <Form.Control type="file" name="sslc_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Plus Two Certificate*</Form.Label>
                      <Form.Control type="file" name="plus_two_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Passport Size Photo*</Form.Label>
                      <Form.Control type="file" name="passport_size_photo" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Income Certificate*</Form.Label>
                      <Form.Control type="file" name="income_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Annual Income*</Form.Label>
                      <Form.Control
                        type="number"
                        name="annual_income"
                        value={formData.annual_income}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Transfer Certificate*</Form.Label>
                      <Form.Control type="file" name="transfer_certificate" onChange={handleChange} />
                    </Form.Group>
                  </>
                )}

                {category === "nri" && (
                  <>
                    <Form.Group>
                      <Form.Label>Passport Size Photo*</Form.Label>
                      <Form.Control type="file" name="passport_size_photo" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>SSLC Certificate*</Form.Label>
                      <Form.Control type="file" name="sslc_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Plus Two Certificate*</Form.Label>
                      <Form.Control type="file" name="plus_two_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Copy of Fee Receipt*</Form.Label>
                      <Form.Control type="file" name="fee_reciept" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Transfer Certificate*</Form.Label>
                      <Form.Control type="file" name="transfer_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Conduct Certificate*</Form.Label>
                      <Form.Control type="file" name="conduct_certificate" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Physical/Medical Fitness Certificate*</Form.Label>
                      <Form.Control type="file" name="physical_certificate" onChange={handleChange} />
                    </Form.Group>
                  </>
                )}

                <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpload;
