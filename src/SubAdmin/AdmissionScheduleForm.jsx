import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdmissionScheduleForm = () => {

  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow rounded-4">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Admission Schedule Form</h3>
              <form>
                {/* Department Select */}
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <select className="form-select" id="department" defaultValue="">
                    <option value="" disabled>Select Department</option>
                    <option value="cse">Computer Science</option>
                    <option value="ece">Electronics & Communication</option>
                    <option value="eee">Electrical & Electronics</option>
                    <option value="mech">Mechanical</option>
                    <option value="civil">Printing Technology</option>
                    <option value="it">Computer and Electronics</option>
                  </select>
                </div>

                {/* Date of Joining */}
                <div className="mb-3">
                  <label htmlFor="dateOfJoining" className="form-label">
                    Date of Joining
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfJoining"
                  />
                </div>

                {/* Time of Joining */}
                <div className="mb-3">
                  <label htmlFor="timeOfJoining" className="form-label">
                    Time of Joining
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="timeOfJoining"
                  />
                </div>

                {/* Submit Button */}
                <button type="button" className="btn btn-primary w-100">
                  Save Schedule
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionScheduleForm;
