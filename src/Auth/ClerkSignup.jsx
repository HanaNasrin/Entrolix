

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
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
        <h4 className="text-center text-primary mb-3">Scholarship Account</h4>
        <form>
          <input type="text" className="form-control  rounded-pill mb-2" placeholder="Full Name" />
          <input type="email" className="form-control  rounded-pill mb-2" placeholder="Email" />
          <input type="password" className="form-control  rounded-pill mb-2" placeholder="Password" />
          <input type="password" className="form-control  rounded-pill mb-3" placeholder="Confirm Password" />
          <button className="btn btn-primary  rounded-pill">Sign Up</button>
          <p className="text-center mt-2">
            Already have an account? <a href="#" className="text-primary">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

