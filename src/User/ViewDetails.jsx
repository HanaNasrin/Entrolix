import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Merit");

  const MeritDetails = (
    <div>
      <h3 className="text-primary">Merit Admissions</h3>
      <p className="text-muted">
        Merit-based admissions are open to students who meet the academic and eligibility criteria set by the University of Calicut. Seats are allocated based on marks obtained in the qualifying examination and entrance tests.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Eligibility:</strong> Candidates must have passed 10 and +2 or equivalent with required subjects.
        </li>
        <li className="list-group-item">
          <strong>Application Process:</strong> Submit the application form online through the university portal. Attach all required documents, including mark sheets and certificates.
        </li>
        <li className="list-group-item">
          <strong>Important Dates:</strong> The last date for submitting applications is March 20, 2025.
        </li>
        <li className="list-group-item">
          <strong>Contact:</strong> For queries, email us at <a href="mailto:merit@cuiet.ac.in">merit@cuiet.ac.in</a>.
        </li>
      </ul>
    </div>
  );

  const NRIDetails = (
    <div>
      <h3 className="text-primary">NRI Admissions</h3>
      <p className="text-muted">
        NRI admissions are available for students residing outside India. These seats are reserved for students sponsored by NRIs, as per university guidelines.
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Eligibility:</strong> Candidates must meet the academic criteria and provide proof of NRI sponsorship.
        </li>
        <li className="list-group-item">
          <strong>Application Process:</strong> Complete the application form and upload supporting documents, including sponsorship letters and certificates.
        </li>
        <li className="list-group-item">
          <strong>Fee Structure:</strong> NRI students have a different fee structure. Contact the help desk for more details.
        </li>
        <li className="list-group-item">
          <strong>Important Dates:</strong> The application window closes on March 25, 2025.
        </li>
        <li className="list-group-item">
          <strong>Contact:</strong> For queries, email us at <a href="mailto:nri@cuiet.ac.in">nri@cuiet.ac.in</a>.
        </li>
      </ul>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="text-center"><b>Admission Details</b></h2>
      <p className="lead text-center mb-5">
        Welcome to the Admission Help Desk of the Institute of Engineering and Technology, University of Calicut. Below, you can find categorized information about the admission process.
      </p>

      {/* Category Selection */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          <button
            className={`btn btn-primary ${selectedCategory === "Merit" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Merit")}
          >
            Merit
          </button>
          <button
            className={`btn btn-primary ${selectedCategory === "NRI" ? "active" : ""}`}
            onClick={() => setSelectedCategory("NRI")}
          >
            NRI
          </button>
        </div>
      </div>

      {/* Display Details */}
      <div className="card shadow-sm p-4">
        {selectedCategory === "Merit" ? MeritDetails : NRIDetails}
      </div>
    </div>
  );
};
export default ViewDetails;