
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const UserSignup = () => {
  const[signup,setSignup]=useState({})
  const navigate=useNavigate()

  const handleChange=(e)=>{
  setSignup({...signup,[e.target.name]:e.target.value})
  console.log(signup)

  }
const handleSubmit=(e)=>{

  e.preventDefault()

  axios.post('http://localhost:8000/api/studentregister/',signup).then((response)=>{
    console.log(response)
    localStorage.setItem("Id",response.data.id)
      alert("Student successfully added")
      navigate('/dashboard/upload')
    
  }).catch((error)=>{
    console.log(error)
  })


}
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
          <input type="text" className="form-control rounded-pill mb-2" placeholder="First Name" name="first_name"  onChange={handleChange}/>
          <input type="text" className="form-control rounded-pill mb-2" placeholder="Last Name" name="last_name"  onChange={handleChange} />
          <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" name="email"  onChange={handleChange}/>
          <input type="password" className="form-control rounded-pill mb-2" placeholder="Password" name="password"  onChange={handleChange}/>
          <button className="btn btn-primary rounded-pill " onClick={handleSubmit}>Sign Up</button>
          <p className="text-center mt-2">
            Already have an account? <a href="Login" className="text-primary">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default UserSignup;
