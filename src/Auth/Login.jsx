

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg border-0 rounded" style={{ width: "350px" }}>
        <div className="text-center mb-3">
          <img
            src="https://i.pinimg.com/474x/bd/a3/17/bda3177a3943ffdbcc652b3a678a0d74.jpg"
            alt="Login"
            className="img-fluid rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h4 className="text-center text-primary mb-3">Login</h4>
        <form>
          <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" />
          <input type="password" className="form-control rounded-pill mb-3" placeholder="Password" />
          <button className="btn btn-primary rounded-pill">Login</button>
          <p className="text-center mt-2">
            Don't have an account? <a href="#" className="text-primary">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
