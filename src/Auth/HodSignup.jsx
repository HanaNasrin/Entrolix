// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap'; // Import Table from react-bootstrap

// const Subadmindash = () => {
//   const [applications, setApplication] = useState([]);
//   const [apr, setap] = useState(false);


//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/api/upload-certificates/')
//       .then((response) => {
//         console.log(response);
//         setApplication(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);


//   const approveapplication=(id)=>{
//     const Id=id
//     // console.log(Id)
//     axios
//     .patch(http://localhost:8000/api/upload-certificates/${Id}/)
//     .then((response) => {
//       console.log(response);
//       setap(!apr)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

//   const removeapplication=(id)=>{
//     const Id=id
//     console.log(Id)
//     axios
//     .delete(http://localhost:8000/api/upload-certificates/${Id}/)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }


//   return (
    // <div className="container my-5">
    //   <h1>Student Applications</h1>
    //   <Table striped bordered hover responsive>
    //     <thead>
    //       <tr>
    //         <th>Student Name</th>
    //         <th>Plus Two Certificate</th>
    //         <th>Passport Size Photo</th>
    //         <th>Annual Income</th>
    //         <th>Community Certificate</th>
    //         <th>Nativity Certificate</th>
    //         <th>Transfer Certificate</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {applications.map((application) => (
    //         <tr key={application.id}>
    //           <td>{application.student_name}</td>
    //           <td>
    //             {application.plus_two_certificate ? (
    //               <a  href={http://localhost:8000${application.plus_two_certificate}} target="_blank" rel="noopener noreferrer">
    //                 View Certificate
    //               </a>
    //             ) : (
    //               'N/A'
    //             )}
    //           </td>
    //           <td>
    //             {application.passport_size_photo ? (
    //               <a href={application.passport_size_photo} target="_blank" rel="noopener noreferrer">
    //                 View Photo
    //               </a>
    //             ) : (
    //               'N/A'
    //             )}
    //           </td>
    //           <td>{application.annual_income}</td>
    //           <td>
    //             {application.community_certificate ? (
    //               <a href={application.community_certificate} target="_blank" rel="noopener noreferrer">
    //                 View Certificate
    //               </a>
    //             ) : (
    //               'N/A'
    //             )}
    //           </td>
    //           <td>
    //             {application.nativity_certificate ? (
    //               <a href={application.nativity_certificate} target="_blank" rel="noopener noreferrer">
    //                 View Certificate
    //               </a>
    //             ) : (
    //               'N/A'
    //             )}
    //           </td>
    //           <td>
    //             {application.transfer_certificate ? (
    //               <a href={application.transfer_certificate} target="_blank" rel="noopener noreferrer">
    //                 View Certificate
    //               </a>
    //             ) : (
    //               'N/A'
    //             )}
    //           </td>
    //           <td>
    //           <button onClick={()=>approveapplication(application.id)} value={setap ? "Approved":"approve"}></button>
    //           </td>
    //           <td>
    //           <button onClick={()=>removeapplication(application.id)}>Remove</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </div>
//   );
// };

// export default Subadmindash;