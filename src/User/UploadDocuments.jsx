import React, { useState } from "react";
import { Form,  } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const UserUpload = () => {
  const [formData, setFormData] = useState({
      course : "",
      plus_two_certificate: null,
      passport_size_photo: null,
      income_certificate: null,
      annual_income: "",
      community_certificate: null,
      nativity_certificate: null,
      transfer_certificate: null,
    });
  const [category, setCategory] = useState("merit"); // Default selection
  const courses = ["IT", "PT", "EC", "EEE", "ME", "EP"];
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    const Id=localStorage.getItem('Id')

    e.preventDefault();
    setLoading(true);


    console.log("studentid"+Id)


    const submissionData = new FormData();
    submissionData.append('student', Id);
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        submissionData.append(key, formData[key]);
      }
    });
    try {
      const response = await axios.post("http://localhost:8000/api/upload-certificates/", submissionData)
     console.log(response)
      // alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      // alert("Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Upload Required Documents</h3>

              {/* Category Selection */}
              <div className="text-center mb-4">
                <button
                  className={`btn me-2 ${category === "merit" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setCategory("merit")}
                >
                  Merit
                </button>
                <button
                  className={`btn ${category === "nri" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setCategory("nri")}
                >
                  NRI
                </button>
              </div>

              {/* Merit Fields */}
              {category === "merit" && (
                <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                    <label className="form-label">Select Your Admitted Course</label>
                    <select
                      className="form-select"
                      name="course_name "
                      onChange={handleChange}
                      
                    >
                      <option value="" disabled>Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Form.Group controlId="">
                            <Form.Label>Copy of Admit Card, Allotment Memo, Candidate’s Data Sheet</Form.Label>
                            <Form.Control type="file" name="admit_card" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Copy of Fee Receipt</Form.Label>
                            <Form.Control type="file" name="fee_reciept" onChange={handleChange} />
                  </Form.Group>
                
                  <Form.Group controlId="">
                            <Form.Label>SSLC Certificate / Xth Mark List & Pass Certificate</Form.Label>
                            <Form.Control type="file" name="sslc_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="plus_two_certificate">
                            <Form.Label>Plus Two/VHSC/THS/Diploma Certificate</Form.Label>
                            <Form.Control type="file" name="plus_two_certificate" onChange={handleChange} />
                  </Form.Group>
                  
                  <Form.Group controlId="passport_size_photo">
                            <Form.Label>Passport Size Photo</Form.Label>
                            <Form.Control type="file" name="passport_size_photo" onChange={handleChange} />
                  </Form.Group>
                  
                  <Form.Group controlId="income_certificate">
                    <Form.Label>Income Certificate</Form.Label>
                    <Form.Control type="file" name="income_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="annual_income">
                            <Form.Label>Annual Income</Form.Label>
                            <Form.Control type="number" name="annual_income" value={formData.annual_income} onChange={handleChange} />
                  </Form.Group>
              
                  <Form.Group controlId="">
                            <Form.Label>Community Certificate (For Reservation Category)</Form.Label>
                            <Form.Control type="file" name="community_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Nativity Certificate (For Reservation Category)</Form.Label>
                            <Form.Control type="file" name="nativity_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Transfer Certificate (Original)</Form.Label>
                            <Form.Control type="file" name="transfer_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Conduct Certificate (Obtained within 6 months)</Form.Label>
                            <Form.Control type="file" name="conduct_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Physical/Medical Fitness Certificate (As per CEE Format)</Form.Label>
                            <Form.Control type="file" name="physical_certificate" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="">
                            <Form.Label>Migration Certificate (Original)</Form.Label>
                            <Form.Control type="file" name="migration_certificate" onChange={handleChange} />
                  </Form.Group>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              )}

              {/* NRI Fields */}
              {category === "nri" && (
                <form>
                  <div className="mb-3">Select Your Admitted Course</div>
                   {courses.map((course, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="course"
              id={`course-${index}`}
            />
            <label className="form-check-label" htmlFor={`course-${index}`}>
              {course}
            </label>
          </div>
        ))}
                  <div className="mb-3">
                    <label className="form-label">Passport Size Photo</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SSLC Certificate / Xth Mark List & Pass Certificate</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Plus Two/VHSC/THS/Diploma Certificate</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Copy of Fee Receipt</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Community/Nativity/Income Certificate (For Reservation Category)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Transfer Certificate (Original)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Conduct Certificate (Obtained within 6 months)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Physical/Medical Fitness Certificate (As per CEE Format)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Migration Certificate (Original)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpload;
