import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://i.pinimg.com/474x/25/a5/32/25a532ed43fe25d0a4cb6ce4bb3b4bf8.jpg"
                  alt="Login Illustration"
                  className="img-fluid rounded-circle"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <h3 className="text-center text-primary mb-4">Login</h3>
              <form>
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="button" className="btn btn-primary rounded-pill">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

