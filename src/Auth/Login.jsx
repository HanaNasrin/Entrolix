import { ToastContainer,toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
  // const notifySuccess = () => toast.success('Success! 🎉');
  const[login,setLogin]=useState({})
  const navigate=useNavigate()

  const handleChange=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
  console.log(login)

  }
const handleSubmit=(e)=>{
  e.preventDefault()

  axios.post('http://localhost:8000/api/login/',login).then((response)=>{
    console.log(response)
    const role=response.data.data.role
    localStorage.setItem('Id',response.data.data.id)
    localStorage.setItem('studentId',response.data.data.studentId)


    if(role=="admin"){
      navigate('/admin/manageuser')
    }
    else if(role=="student"){
      navigate('/dashboard/upload')
    }
    else if(role=="subadmin"){
      navigate('/subadmin/manageadmission')
    }
}).catch((error)=>{
    console.log(error)
  })


}
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
          <input type="username" className="form-control rounded-pill mb-2" placeholder="Username/Email" name="username"  onChange={handleChange}/>
          <input type="password" className="form-control rounded-pill mb-3" placeholder="Password" name="password" onChange={handleChange}/>
          <button className="btn btn-primary rounded-pill" onClick={handleSubmit}>Login</button>
          <p className="text-center mt-2">
            Don't have an account? <a href="usersignup" className="text-primary">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
