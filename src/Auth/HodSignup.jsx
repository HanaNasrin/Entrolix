
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HodSignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg border-0 rounded" style={{ width: "350px" }}>
        <div className="text-center mb-3">
          <img
            src="https://i.pinimg.com/474x/7a/6c/e8/7a6ce8bca4bf64faa0bf3990eba2c6cb.jpg"
            alt="Signup"
            className="img-fluid rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h4 className="text-center text-primary mb-3">Head of Dept Account</h4>
        <form>
          <input type="text" className="form-control rounded-pill mb-2" placeholder="Full Name" />
          <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" />
          <input type="password" className="form-control rounded-pill mb-2" placeholder="Password" />
          <input type="password" className="form-control rounded-pill mb-2" placeholder="Confirm Password" />
          <select className="form-select  rounded-pill mb-3">
            <option value="">Select Department</option>
            <option value="CS">Computer Science and Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="EP">Electronics and Computer Science Engineering</option>
            <option value="EEE">Electrical and Electronics Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="PT">Printing Technology</option>
          </select>
          <button className="btn btn-primary rounded-pill">Sign Up</button>
          <p className="text-center mt-2">
            Already have an account? <a href="Login" className="text-primary">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default HodSignUp;
