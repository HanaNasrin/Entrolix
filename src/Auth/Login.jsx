
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { Modal, Button } from "react-bootstrap";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//   const [login, setLogin] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [forgotData, setForgotData] = useState({ email: "", role: "student" });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8000/api/login/", login)
//       .then((response) => {
//         const role = response.data.data.role;
//         localStorage.setItem("Id", response.data.data.id);
//         localStorage.setItem("studentId", response.data.data.studentId);

//         toast.success("Login Successful!", {
//           autoClose: 2000,
//           position: "top-center",
//         });

//         setTimeout(() => {
//           if (role === "admin") {
//             navigate("/admin/manageuser");
//           } else if (role === "student") {
//             navigate("/dashboard/upload");
//           } else if (role === "subadmin") {
//             navigate("/subadmin/manageadmission");
//           }
//         }, 2000);
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("Login Failed! Please check your credentials.", {
//           autoClose: 3000,
//           position: "top-center",
//         });
//       });
//   };

//   const handleForgotChange = (e) => {
//     setForgotData({ ...forgotData, [e.target.name]: e.target.value });
//   };

//   const handleForgotPassword = () => {
//     axios
//       .post("http://localhost:8000/api/forgot-password/", forgotData)
//       .then((res) => {
//         toast.success(res.data.detail, {
//           autoClose: 3000,
//           position: "top-center",
//         });
//         setShowModal(false);
//       })
//       .catch((err) => {
//         toast.error(err.response?.data?.detail || "Something went wrong.", {
//           autoClose: 3000,
//           position: "top-center",
//         });
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="card p-4 shadow-lg border-0 rounded"
//         style={{ width: "350px" }}
//       >
//         <div className="text-center mb-3">
//           <img
//             src="https://i.pinimg.com/474x/bd/a3/17/bda3177a3943ffdbcc652b3a678a0d74.jpg"
//             alt="Login"
//             className="img-fluid rounded-circle"
//             style={{ width: "100px", height: "100px" }}
//           />
//         </div>
//         <h4 className="text-center text-primary mb-3">Login</h4>
//         <form>
//           <input
//             type="text"
//             className="form-control rounded-pill mb-2"
//             placeholder="Username/Email"
//             name="username"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             className="form-control rounded-pill mb-3"
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//           />
//           <button
//             className="btn btn-primary rounded-pill w-100"
//             onClick={handleSubmit}
//           >
//             Login
//           </button>
//           <div className="text-center">
//             <button
//               type="button"
//               className="btn  text-primary p-0"
//               onClick={() => setShowModal(true)}
//             >
//               Forgot password?
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Forgot Password Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Reset Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="form-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               onChange={handleForgotChange}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Role</label>
//             <div className="d-flex gap-3 mt-1">
//               <div>
//                 <input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={forgotData.role === "student"}
//                   onChange={handleForgotChange}
//                 />{" "}
//                 Student
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   name="role"
//                   value="subadmin"
//                   checked={forgotData.role === "subadmin"}
//                   onChange={handleForgotChange}
//                 />{" "}
//                 Subadmin
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleForgotPassword}>
//             Reset
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// };

// export default Login;
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";



// const Login = () => {
//   // const notifySuccess = () => toast.success('Success! 🎉');
//   const[login,setLogin]=useState({})
//   const navigate=useNavigate()

//   const handleChange=(e)=>{
//   setLogin({...login,[e.target.name]:e.target.value})
//   console.log(login)

//   }
// const handleSubmit=(e)=>{
//   e.preventDefault()

//   axios.post('http://localhost:8000/api/login/',login)
//   .then((response)=>{
//     console.log(response)
//     const role=response.data.data.role
//     localStorage.setItem('Id',response.data.data.id)
//     localStorage.setItem('studentId',response.data.data.studentId)

//     toast.success('Login Successful! ', { autoClose: 2000, position: "top-center" });

//     setTimeout(()=>{
//     if(role=="admin"){
//       navigate('/admin/manageuser')
//     }
//     else if(role=="student"){
//       navigate('/dashboard/upload')
//     }
//     else if(role=="subadmin"){
//       navigate('/subadmin/manageadmission')
//     }
//   },2000);
// })
  
// .catch((error)=>{
//     console.log(error)
//     toast.error('Login Failed! Please check your credentials.', { autoClose: 3000, position: "top-center" });
//   })


// }
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow-lg border-0 rounded" style={{ width: "350px" }}>
//         <div className="text-center mb-3">
//           <img
//             src="https://i.pinimg.com/474x/bd/a3/17/bda3177a3943ffdbcc652b3a678a0d74.jpg"
//             alt="Login"
//             className="img-fluid rounded-circle"
//             style={{ width: "100px", height: "100px" }}
//           />
//         </div>
//         <h4 className="text-center text-primary mb-3">Login</h4>
//         <form>
//           <input type="username" className="form-control rounded-pill mb-2" placeholder="Username/Email" name="username"  onChange={handleChange}/>
//           <input type="password" className="form-control rounded-pill mb-3" placeholder="Password" name="password" onChange={handleChange}/><a href="forgot" className="text-primary"> forget password</a><br/><br/>
//           <button className="btn btn-primary rounded-pill" onClick={handleSubmit}>Login</button>
//           <p className="text-center mt-2">
//             Don't have an account? <a href="usersignup" className="text-primary">Sign Up</a>
//           </p>
//         </form>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [login, setLogin] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [forgotData, setForgotData] = useState({ email: "", role: "student" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { username, password } = login;
  
    // Email validation
    if (!username || !username.includes("@gmail.com")) {
      toast.error("Please enter a valid Gmail address.", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
  
    // Password length validation
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long.", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
  
    axios
      .post("http://localhost:8000/api/login/", login)
      .then((response) => {
        const role = response.data.data.role;
        localStorage.setItem("Id", response.data.data.id);
        localStorage.setItem("studentId", response.data.data.studentId);
  
        toast.success("Login Successful!", {
          autoClose: 2000,
          position: "top-center",
        });
  
        setTimeout(() => {
          if (role === "admin") {
            navigate("/admin/manageuser");
          } else if (role === "student") {
            navigate("/dashboard/upload");
          } else if (role === "subadmin") {
            navigate("/subadmin/manageadmission");
          }
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login Failed! Please check your credentials.", {
          autoClose: 3000,
          position: "top-center",
        });
      });
  };
  

  const handleForgotChange = (e) => {
    setForgotData({ ...forgotData, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = () => {
    axios
      .post("http://localhost:8000/api/forgot-password/", forgotData)
      .then((res) => {
        toast.success(res.data.detail, {
          autoClose: 3000,
          position: "top-center",
        });
        setShowModal(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.detail || "Something went wrong.", {
          autoClose: 3000,
          position: "top-center",
        });
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg border-0 rounded"
        style={{ width: "350px" }}
      >
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
          <input
            type="text"
            className="form-control rounded-pill mb-2"
            placeholder="Email address"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control rounded-pill mb-3"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button
            className="btn btn-primary rounded-pill w-100"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="text-center">
            <button
              type="button"
              className="btn  text-primary p-0"
              onClick={() => setShowModal(true)}
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>

      {/* Forgot Password Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleForgotChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <div className="d-flex gap-3 mt-1">
              <div>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={forgotData.role === "student"}
                  onChange={handleForgotChange}
                />{" "}
                Student
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="subadmin"
                  checked={forgotData.role === "subadmin"}
                  onChange={handleForgotChange}
                />{" "}
                Subadmin
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleForgotPassword}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
