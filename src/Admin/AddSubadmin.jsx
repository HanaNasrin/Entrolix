// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const AddSubadmin = () => {
// //     const[add,setAdd]=useState({})
// //     const navigate=useNavigate()

// //     const handleChange=(e)=>{
// //         setAdd({...add,[e.target.name]:e.target.value})
// //         console.log(add)
// //     }
// //     const handleSubmit=async(e)=>{
// //         e.preventDefault();
// //         if (!formData.username || !formData.email || !formData.phone || !formData.branch) {
// //           alert("Please fill in all fields.");
// //           return;
// //         }
// //         try {
      
// //           await axios.post('http://127.0.0.1:8000/api/subadminregister/',add)
// //           .then((response)=>{
// //           console.log(response)
// //           alert("Subadmin is added successfully")
          
        
// //         }).catch((error)=>{
// //           console.log(error)
// //         })
    
  
    
    
// //     }
// //   return (
// //     <div className="container-fluid">
// //       <div className="row">
// //         {/* Centering the form within a smaller container */}
// //         <div className="col-md-6 col-lg-5 col-xl-4 mx-auto mt-4">
// //           <div className="card p-3 shadow-sm">
// //             <h4 className="text-center mb-3">Add Sub Admin</h4>
// //             <form>
// //               {/* Name */}
// //               <div className="mb-2">
// //                 <label className="form-label" placeholder="Name of subadmin" >Full Name</label>
// //                 <input type="text" className="form-control form-control-sm" name="username" onChange={handleChange} required />
// //               </div>

// //               {/* Email */}
// //               <div className="mb-2">
// //                 <label className="form-label" placeholder="Email" >Email</label>
// //                 <input type="email" className="form-control form-control-sm" name="email" onChange={handleChange} required />
// //               </div>

// //               {/* Phone Number */}
// //               <div className="mb-2">
// //                 <label className="form-label"  placeholder="phone_number" >Phone Number</label>
// //                 <input type="tel" className="form-control form-control-sm" name="phone_number" onChange={handleChange} required />
// //               </div>

// //               {/* Submit Button */}
// //               <button type="button" className="btn btn-primary btn-sm w-100 mt-2"  onClick={handleSubmit}>
// //                 Add Sub Admin
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddSubadmin;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AddSubadmin = () => {
//   const [add, setAdd] = useState({
//     username: "",
//     email: "",
//     phone_number: ""
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAdd({ ...add, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!add.username || !add.email || !add.phone_number) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/subadminregister/", add);
//       console.log(response);
//       alert("Subadmin added successfully");
//       navigate("/admin/manageuser"); // Optional: Redirect after success
//     } catch (error) {
//       console.error("Error adding subadmin:", error.response?.data || error.message);
//       alert("Failed to add subadmin. Check console for more info.");
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-6 col-lg-5 col-xl-4 mx-auto mt-4">
//           <div className="card p-3 shadow-sm">
//             <h4 className="text-center mb-3">Add Sub Admin</h4>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-2">
//                 <label className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   name="username"
//                   value={add.username}
//                   onChange={handleChange}
//                   placeholder="Enter full name"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   name="email"
//                   value={add.email}
//                   onChange={handleChange}
//                   placeholder="Enter email"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label className="form-label">Phone Number</label>
//                 <input
//                   type="tel"
//                   className="form-control form-control-sm"
//                   name="phone_number"
//                   value={add.phone_number}
//                   onChange={handleChange}
//                   placeholder="Enter phone number"
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary btn-sm w-100 mt-2">
//                 Add Sub Admin
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddSubadmin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSubadmin = () => {
  const [add, setAdd] = useState({
    username: "",
    email: "",
    phone_number: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone_number to digits only
    if (name === "phone_number") {
      if (!/^\d*$/.test(value)) return; // Ignore non-digit characters
    }

    setAdd({ ...add, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, phone_number } = add;

    if (!username || !email || !phone_number) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone_number)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/subadminregister/",
        add
      );
      console.log(response);
      alert("Subadmin added successfully");
      navigate("/admin/manageuser");
    } catch (error) {
      console.error("Error adding subadmin:", error.response?.data || error.message);
      alert("Failed to add subadmin. Check console for more info.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-5 col-xl-4 mx-auto mt-4">
          <div className="card p-3 shadow-sm">
            <h4 className="text-center mb-3">Add Sub Admin</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="username"
                  value={add.username}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  name="email"
                  value={add.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control form-control-sm"
                  name="phone_number"
                  value={add.phone_number}
                  onChange={handleChange}
                  placeholder="Enter  phone number"
                  maxLength={10}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-sm w-100 mt-2">
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
