import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from "axios";

const UserSignup = () => {
  const [signup, setSignup] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "first_name" || name === "last_name") {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    setSignup({ ...signup, [name]: value });
  };

  const validatePassword = (password) => {
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@#]/.test(password);
    return password.length >= 8 && hasNumber && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = signup;

    if (!email || !email.includes("@gmail.com")) {
      toast.error("Please enter a valid Gmail address.", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters and include a number and @ or # symbol.", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }

    axios.post('http://localhost:8000/api/studentregister/', signup)
      .then((response) => {
        localStorage.setItem("Id", response.data.id);
        localStorage.setItem("studentId", response.data.studentId);

        toast.success('Signup Successful! 🎉', { autoClose: 2000, position: "top-center" });
        setTimeout(() => {
          navigate('/dashboard/upload');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Signup Failed! Please try again.', { autoClose: 3000, position: "top-center" });
      });
  };

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
        <h4 className="text-center text-primary mb-3">User Sign Up</h4>
        <form method="post">
          <input type="text" className="form-control rounded-pill mb-2" placeholder="First Name" name="first_name" onChange={handleChange} />
          <input type="text" className="form-control rounded-pill mb-2" placeholder="Last Name" name="last_name" onChange={handleChange} />
          <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" name="email" onChange={handleChange} />
          <input type="password" className="form-control rounded-pill mb-2" placeholder="Password" name="password" onChange={handleChange} />
          <input type="password" className="form-control rounded-pill mb-2" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button className="btn btn-primary rounded-pill" onClick={handleSubmit}>Sign Up</button>
          <p className="text-center mt-2">
            Already have an account? <a href="Login" className="text-primary">Login</a>
          </p>
        </form>
      </div>
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
        theme="colored" />
    </div>
  );
};

export default UserSignup;


// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 
// import axios from "axios";

// const UserSignup = () => {
//   const[signup,setSignup]=useState({})
//   const navigate=useNavigate()

//   const handleChange=(e)=>{
//     let { name, value } = e.target;

//     // Capitalize first and last name
//     if (name === "first_name" || name === "last_name") {
//       value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
//     }

//     setSignup({ ...signup, [name]: value });
//   };
// const handleSubmit=(e)=>{

//   e.preventDefault();

//   const { first_name, last_name, email, password } = signup;

//   // Email validation
//   if (!email || !email.includes("@gmail.com")) {
//     toast.error("Please enter a valid Gmail address.", {
//       autoClose: 3000,
//       position: "top-center",
//     });
//     return;
//   }

//   // Password validation
//   if (!password || password.length < 8) {
//     toast.error("Password must be at least 8 characters long.", {
//       autoClose: 3000,
//       position: "top-center",
//     });
//     return;
//   }

//   axios.post('http://localhost:8000/api/studentregister/',signup).then((response)=>{
//     console.log(response)
//     localStorage.setItem("Id",response.data.id)
//     localStorage.setItem("studentId",response.data.studentId)

//     toast.success('Signup Successful! 🎉', { autoClose: 2000, position: "top-center" });
//     setTimeout(() => {
//       navigate('/dashboard/upload');
//     }, 2000); // Wait 2s so user can see the toast

    
//   }).catch((error)=>{
//     console.log(error)
//     toast.error('Signup Failed! Please try again.', { autoClose: 3000, position: "top-center" });
//   })


// }
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow-lg border-0 rounded" style={{ width: "350px" }}>
//         <div className="text-center mb-3">
//           <img
//             src="https://i.pinimg.com/474x/7a/6c/e8/7a6ce8bca4bf64faa0bf3990eba2c6cb.jpg"
//             alt="Signup"
//             className="img-fluid rounded-circle"
//             style={{ width: "100px", height: "100px" }}
//           />
//         </div>
//         <h4 className="text-center text-primary mb-3">User Sign Up</h4>
//         <form method="post">
//           <input type="text" className="form-control rounded-pill mb-2" placeholder="First Name" name="first_name"  onChange={handleChange}/>
//           <input type="text" className="form-control rounded-pill mb-2" placeholder="Last Name" name="last_name"  onChange={handleChange} />
//           <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" name="email"  onChange={handleChange}/>
//           <input type="password" className="form-control rounded-pill mb-2" placeholder="Password" name="password"  onChange={handleChange}/>
//           <button className="btn btn-primary rounded-pill " onClick={handleSubmit}>Sign Up</button>
//           <p className="text-center mt-2">
//             Already have an account? <a href="Login" className="text-primary">Login</a>
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
//         theme="colored"/>
//     </div>
//   );
// };


// export default UserSignup;
