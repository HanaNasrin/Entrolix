// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-lg border-0 rounded">
//             <div className="card-body">
//               <h3 className="text-center text-primary mb-4">Login</h3>
//               <form>
//                 {/* Email Input */}
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control rounded-pill"
//                     id="email"
//                     placeholder="Enter your email address"
//                   />
//                 </div>

//                 {/* Password Input */}
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control rounded-pill"
//                     id="password"
//                     placeholder="Enter your password"
//                   />
//                 </div>

//                 {/* Login Button */}
//                 <div className="d-grid">
//                   <button type="button" className="btn btn-primary rounded-pill">
//                     Login
//                   </button>
//                 </div>

//                 {/* Signup Link */}
//                 <p className="text-center mt-3">
//                   Don't have an account?{" "}
//                   <a href="#" className="text-primary">
//                     Sign Up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



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
                  src="https://i.pinimg.com/474x/bd/a3/17/bda3177a3943ffdbcc652b3a678a0d74.jpg"
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

                {/* Signup Link */}
                <p className="text-center mt-3">
                  Don't have an account? <a href="#" className="text-primary">Sign Up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

