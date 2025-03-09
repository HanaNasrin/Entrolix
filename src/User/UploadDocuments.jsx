import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadDocuments = () => {
  const [selectedOption, setSelectedOption] = useState("Merit"); // Default option
  const [files, setFiles] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setFiles([]); // Clear files when switching options
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert(`Submitting ${selectedOption} documents: ${files.map((file) => file.name).join(", ")}`);
    // Add logic for actual submission here
  };

  return (
    <div className="container mt-4">
      <h4>Upload Documents</h4>
      <div className="mb-3">
        <h6>Select Category:</h6>
        <div className="btn-group">
          <button
            className={`btn btn-outline-primary ${selectedOption === "Merit" ? "active" : ""}`}
            onClick={() => handleOptionChange("Merit")}
          >
            Merit
          </button>
          <button
            className={`btn btn-outline-primary ${selectedOption === "NRI" ? "active" : ""}`}
            onClick={() => handleOptionChange("NRI")}
          >
            NRI
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">
          Upload {selectedOption} Documents:
        </label>
        <input
          type="file"
          className="form-control"
          id="fileInput"
          multiple
          onChange={handleFileChange}
        />
      </div>

      {files.length > 0 && (
        <div className="mb-3">
          <h6>Selected Files:</h6>
          <ul className="list-group">
            {files.map((file, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {file.name}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemoveFile(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className="btn btn-success" onClick={handleSubmit} disabled={files.length === 0}>
        Submit {selectedOption} Documents
      </button>
    </div>
  );
};
export default UploadDocuments;