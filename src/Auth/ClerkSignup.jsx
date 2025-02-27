import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://i.pinimg.com/474x/7a/6c/e8/7a6ce8bca4bf64faa0bf3990eba2c6cb.jpg"
                  alt="Signup Illustration"
                  className="img-fluid rounded-circle"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <h3 className="text-center text-primary mb-4">Account for scholarship handling</h3>
              <form>
                {/* Full Name Input */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>

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
                    placeholder="Create a password"
                  />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-3">
                  <label htmlFor="confirm-password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    id="confirm-password"
                    placeholder="Confirm your password"
                  />
                </div>

        
                {/* Submit Button */}
                <div className="d-grid">
                  <button type="button" className="btn btn-primary rounded-pill">
                    Sign Up
                  </button>
                </div>

                {/* Login Link */}
                <p className="text-center mt-3">
                  Already have an account? <a href="#" className="text-primary">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
