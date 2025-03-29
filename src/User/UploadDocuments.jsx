// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const UploadDocuments = () => {
//   const [selectedOption, setSelectedOption] = useState("Merit"); // Default option
//   const [files, setFiles] = useState([]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setFiles([]); // Clear files when switching options
//   };

//   const handleFileChange = (event) => {
//     const newFiles = Array.from(event.target.files);
//     setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//   };

//   const handleRemoveFile = (index) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     alert(`Submitting ${selectedOption} documents: ${files.map((file) => file.name).join(", ")}`);
//     // Add logic for actual submission here
//   };

//   return (
//     <div className="container mt-4">
//       <h4>Upload Documents</h4>
//       <div className="mb-3">
//         <h6>Select Category:</h6>
//         <div className="btn-group">
//           <button
//             className={`btn btn-outline-primary ${selectedOption === "Merit" ? "active" : ""}`}
//             onClick={() => handleOptionChange("Merit")}
//           >
//             Merit
//           </button>
//           <button
//             className={`btn btn-outline-primary ${selectedOption === "NRI" ? "active" : ""}`}
//             onClick={() => handleOptionChange("NRI")}
//           >
//             NRI
//           </button>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label htmlFor="fileInput" className="form-label">
//           Upload {selectedOption} Documents:
//         </label>
//         <input
//           type="file"
//           className="form-control"
//           id="fileInput"
//           multiple
//           onChange={handleFileChange}
//         />
//       </div>

//       {files.length > 0 && (
//         <div className="mb-3">
//           <h6>Selected Files:</h6>
//           <ul className="list-group">
//             {files.map((file, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                 {file.name}
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => handleRemoveFile(index)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <button className="btn btn-success" onClick={handleSubmit} disabled={files.length === 0}>
//         Submit {selectedOption} Documents
//       </button>
//     </div>
//   );
// };
// export default UploadDocuments;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserUpload = () => {
  const [category, setCategory] = useState("merit"); // Default selection
  const courses = ["IT", "PT", "EC", "EEE", "ME", "EP"];

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
                    <label className="form-label">Copy of Admit Card, Allotment Memo, Candidate’s Data Sheet</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Copy of Fee Receipt</label>
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
                    <label className="form-label">Passport Size Photo</label>
                    <input type="file" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Income Certificate (For Reservation Category)</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Annual Income in rupees</label>
                    <input
                      type="number"
                      className="form-control"
                      // value={income}
                      // onChange={handleIncomeChange}
                      placeholder="Enter your income"
                    />
                  <div className="mb-3">
                    <label className="form-label">Community Certificate (For Reservation Category)</label>
                    <input type="file" className="form-control" />
                  </div><div className="mb-3">
                    <label className="form-label">Nativity Certificate (For Reservation Category)</label>
                    <input type="file" className="form-control" />
                  </div>
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
