import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSubadmin = () => {
    const[add,setAdd]=useState({})
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setAdd({...add,[e.target.name]:e.target.value})
        console.log(add)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
      
        axios.post('http://127.0.0.1:8000/api/subadminregister/',add).then((response)=>{
          console.log(response)
          
          
        
        }).catch((error)=>{
          console.log(error)
        })
    
    
    
    
    }
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Centering the form within a smaller container */}
        <div className="col-md-6 col-lg-5 col-xl-4 mx-auto mt-4">
          <div className="card p-3 shadow-sm">
            <h4 className="text-center mb-3">Add Sub Admin</h4>
            <form>
              {/* Name */}
              <div className="mb-2">
                <label className="form-label" placeholder="Name of subadmin" >Full Name</label>
                <input type="text" className="form-control form-control-sm" name="username" onChange={handleChange} required />
              </div>

              {/* Email */}
              <div className="mb-2">
                <label className="form-label" placeholder="Email" >Email</label>
                <input type="email" className="form-control form-control-sm" name="email" onChange={handleChange} required />
              </div>

              {/* Phone Number */}
              <div className="mb-2">
                <label className="form-label"  placeholder="phone_number" >Phone Number</label>
                <input type="tel" className="form-control form-control-sm" name="phone_number" onChange={handleChange} required />
              </div>

              {/* Submit Button */}
              <button type="button" className="btn btn-primary btn-sm w-100 mt-2"  onClick={handleSubmit}>
                Add Sub Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubadmin;
