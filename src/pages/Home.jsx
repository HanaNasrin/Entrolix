// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Home.css';
// import Footer from "../Components/Footer";

// const Home = () => {
//   const programs = [
//     { title: "Computer Science Engineering", seats: 60 },
//     { title: "Electrical and Electronics Engineering", seats: 60 },
//     { title: "Mechanical Engineering", seats: 60 },
//     { title: "Printing Technology", seats: 30 },
//     { title: "Computer and Electronics Engineering", seats: 30 },
//     { title: "Electronics Engineering", seats: 30 },
//   ];

//   const notifyStudents = () => {
//     alert("Interview dates will be announced soon.");
//   };

//   return (
//     <div>
//       <main>
//         {/* Main Image */}
//         <div className="position-relative">
//           <img
//             src="http://studyhigher.in/images/college/489/489-2.jpg"
//             alt="Admissions"
//             className="img-fluid w-100"
//             style={{ maxWidth: "100vw", height: "600px" }}
//           />
          
//           {/* Static Navbar over the image */}
//           <nav className="navbar navbar-expand-lg navbar-light p-2 fixed-top" style={{ background: "rgba(255, 255, 255, 0.7)", zIndex: 10 }}>
//             <div className="container-fluid">
//               {/* Logo & Institute Info */}
//               <a className="navbar-brand d-flex align-items-center" href="#">
//                 <img
//                   src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
//                   alt="Logo"
//                   className="me-2 img-fluid"
//                   style={{ height: "60px" }}
//                 />
//                 <div className="d-flex flex-column">
//                   <span className="fw-bold text-nowrap" style={{ fontSize: "18px" }}>
//                     Institute of Engineering and Technology
//                   </span>
//                   <span className="text-muted text-start" style={{ fontSize: "12px" }}>
//                     University of Calicut
//                   </span>
//                 </div>
//               </a>

//               {/* Navbar Toggler */}
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                 <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <button
//                       onClick={notifyStudents}
//                       className="btn rounded-pill px-3"
            
//                     >
//                        Interview 
//                     </button>
//                   </li>
                  

//                   {/* Login Button */}
//                   <li className="nav-item me-2">
//                     <a href="/login" className="btn btn-success rounded-pill px-3">
//                       Login
//                     </a>
//                   </li>

//                   {/* Contact Button */}
//                   <li className="nav-item me-2">
//                     <a
//                       href="tel:+919240013650"
//                       className="btn text-white d-flex align-items-center px-3 py-2"
//                       style={{ borderRadius: "30px", backgroundColor: "#001F60" }}
//                     >
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
//                         alt="Phone Icon"
//                         className="me-2 img-fluid"
//                         style={{ height: "20px", borderRadius: "50%" }}
//                       />
//                       <span className="d-none d-sm-inline">+91 9240013650</span>
//                     </a>
//                   </li>
                  
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//         {/* Our B.Tech Programs */}
//         <div className="container my-4">
//           <h2 className="text-center mb-4">Our B.Tech Programs</h2>
//           <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
//             {programs.map((program, index) => (
//               <div key={index} className="col">
//                 <div className="card rounded text-center h-100" style={{ backgroundColor: "rgb(77, 69, 64)", color: "white",border: "none" }}>
//                   <div className="card-body">
//                     <h5 className="card-title">{program.title}</h5>
//                     <p className="card-text">{program.seats} seats</p>
//                     <a href="usersignup" className="btn rounded-pill" style={{ backgroundColor: "rgb(175, 170, 166)", color: "rgb(12, 11, 11)" }}>
//                       Take Admission
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

        
//         <div className="admission-rules text-center">
//           <h2 className="title" style={{ color: "#8B5A2B" }}>Rules and Regulations for Admission</h2>
//           <div className="rules-box">
//             <ul className="rules-list" style={{ paddingLeft: "20px", listStylePosition: "inside" }}>
//               <li>Admission is regulated as per Govt. of Kerala orders.</li>
//               <li>95% of seats are merit-based and filled via the Centralized Allotment Process.</li>
//               <li>This Prospectus is subject to modification by the University of Calicut.</li>
//             </ul>
//           </div>
//         </div>


//         {/* Educational Concessions */}
//         <div className="container my-4 bg-light p-4 rounded shadow-sm">
//           <h3  style={{ color: "#D2B48C" }}>Educational Concessions</h3>
//           <p>
//             Students are eligible for educational concession from the Harijan Welfare Department, Kerala, if their annual income is within limits. Applications must be submitted within 15 days of admission.
//           </p>
//           <p>
//             Students must abide by institute rules. They should not have any criminal cases pending. Disciplinary actions are under the Principal’s jurisdiction.
//           </p>
//           <div >
//             <strong>Note:</strong> RAGGING IS A CRIMINAL OFFENSE. Guilty students will be expelled and handed over to the police.
//           </div>
//         </div>

//         {/* Eligibility for Admission */}
//         <div className="container my-4 bg-light p-4 rounded shadow-sm">
//           <h3 style={{ color: "#E2725B" }}>Eligibility for Admission</h3>
//           <h5>Academic</h5>
//           <p>
//             Candidates must have passed Higher Secondary Examination (Kerala or equivalent) with Physics & Mathematics as compulsory subjects and Chemistry/Computer Science/Biotechnology/Biology as optional, securing at least 45% marks.
//           </p>
//           <p>
//             SC/ST/SEBC/PwD candidates need only 40% marks.
//           </p>
//           <h5>Lateral Entry</h5>
//           <p>
//             Diploma holders (3-year course) with 60% marks (50% for SC/ST) can apply for lateral entry, but only in the corresponding branch.
//           </p>
//           <h5>Age Criteria</h5>
//           <p>
//             Applicants must be at least 17 years old by 31st December 2023. For lateral entry, the upper age limit is 25 years.
//           </p>
//         </div>
//         <div className="container my-4">
//   <div className="bg-light p-4 rounded shadow-sm">
//     <h3  style={{ color: "#A67B5B" }}>Admission</h3>
//     <p>
//       The candidates who wish to be admitted in CUIET should exercise their options at the time of 
//       centralized allotment made by the Commissioner for Entrance Examinations, Govt. of Kerala.
//     </p>

//     <h4 className="text-secondary mt-3">Documents to be Produced</h4>
//     <p>Candidates seeking admission to the Institute of Engineering and Technology will have to produce the following original certificates at the time of Interview/Counselling:</p>
    
//     <ul className="list-group">
//       <li className="list-group-item">1. S.S.L.C/Equivalent Certificate as proof of age.</li>
//       <li className="list-group-item">2. Mark list and Pass Certificate of qualifying Exam.</li>
//       <li className="list-group-item">3. Course and Conduct Certificate from the Head of Institution last attended.</li>
//       <li className="list-group-item">4. Transfer Certificate.</li>
//       <li className="list-group-item">5. Community and Income Certificate for SC/ST/SEBC candidates if reservation is claimed.</li>
//       <li className="list-group-item">6. Admit card of Entrance Examination.</li>
//       <li className="list-group-item">7. Rank Card issued by the Commissioner for Entrance Exam.</li>
//       <li className="list-group-item">8. Physical fitness certificate.</li>
//     </ul>
//   </div>
// </div>

//       </main>
//       <Footer/>
//     </div>
    
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import Footer from "../Components/Footer";
import { Modal, Button, Table } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const programs = [
    { title: "Computer Science Engineering", seats: 60 },
    { title: "Electrical and Electronics Engineering", seats: 60 },
    { title: "Mechanical Engineering", seats: 60 },
    { title: "Printing Technology", seats: 30 },
    { title: "Computer and Electronics Engineering", seats: 30 },
    { title: "Electronics Engineering", seats: 30 },
  ];

  useEffect(() => {
    axios.get("http://localhost:8000/api/admission-schedule/")
      .then((res) => setSchedule(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInterviewClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <main>
        {/* Main Image */}
        <div className="position-relative">
          <img
            src="http://studyhigher.in/images/college/489/489-2.jpg"
            alt="Admissions"
            className="img-fluid w-100"
            style={{ maxWidth: "100vw", height: "600px" }}
          />

          {/* Static Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light p-2 fixed-top" style={{ background: "rgba(255, 255, 255, 0.7)", zIndex: 10 }}>
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/gotouniv/uploads/577/logo/logo_170X115.png"
                  alt="Logo"
                  className="me-2 img-fluid"
                  style={{ height: "60px" }}
                />
                <div className="d-flex flex-column">
                  <span className="fw-bold text-nowrap" style={{ fontSize: "18px" }}>
                    Institute of Engineering and Technology
                  </span>
                  <span className="text-muted text-start" style={{ fontSize: "12px" }}>
                    University of Calicut
                  </span>
                </div>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item me-2">
                    <button onClick={handleInterviewClick} className="btn btn-outline-dark rounded-pill px-3">
                      Schedule
                    </button>
                  </li>
                  <li className="nav-item me-2">
                    <a href="/login" className="btn btn-outline-success rounded-pill px-3">
                      Login
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a
                      href="tel:+919240013650"
                      className="btn d-flex align-items-center px-3 py-2"
                      style={{ borderRadius: "30px", border: "1px solid #001F60", backgroundColor: "transparent", color: "#001F60" }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                        alt="Phone Icon"
                        className="me-2 img-fluid"
                        style={{ height: "20px", borderRadius: "50%" }}
                      />
                      <span className="d-none d-sm-inline">+91 9240013650</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Programs List */}
        <div className="container my-4">
          <h2 className="text-center mb-4">Our B.Tech Programs</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            {programs.map((program, index) => (
              <div key={index} className="col">
                <div className="card rounded text-center h-100" style={{ backgroundColor: "rgb(77, 69, 64)", color: "white", border: "none" }}>
                  <div className="card-body">
                    <h5 className="card-title">{program.title}</h5>
                    <p className="card-text">{program.seats} seats</p>
                    <a href="usersignup" className="btn rounded-pill" style={{ backgroundColor: "rgb(175, 170, 166)", color: "rgb(12, 11, 11)" }}>
                      Take Admission
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="admission-rules text-center">
          <h2 className="title" style={{ color: "#8B5A2B" }}>Rules and Regulations for Admission</h2>
          <div className="rules-box">
            <ul className="rules-list" style={{ paddingLeft: "20px", listStylePosition: "inside" }}>
              <li>Admission is regulated as per Govt. of Kerala orders.</li>
              <li>95% of seats are merit-based and filled via the Centralized Allotment Process.</li>
              <li>This Prospectus is subject to modification by the University of Calicut.</li>
            </ul>
          </div>
        </div>


        {/* Educational Concessions */}
        <div className="container my-4 bg-light p-4 rounded shadow-sm">
          <h3  style={{ color: "#D2B48C" }}>Educational Concessions</h3>
          <p>
            Students are eligible for educational concession from the Harijan Welfare Department, Kerala, if their annual income is within limits. Applications must be submitted within 15 days of admission.
          </p>
          <p>
            Students must abide by institute rules. They should not have any criminal cases pending. Disciplinary actions are under the Principal’s jurisdiction.
          </p>
          <div >
            <strong>Note:</strong> RAGGING IS A CRIMINAL OFFENSE. Guilty students will be expelled and handed over to the police.
          </div>
        </div>

        {/* Eligibility for Admission */}
        <div className="container my-4 bg-light p-4 rounded shadow-sm">
          <h3 style={{ color: "#E2725B" }}>Eligibility for Admission</h3>
          <h5>Academic</h5>
          <p>
            Candidates must have passed Higher Secondary Examination (Kerala or equivalent) with Physics & Mathematics as compulsory subjects and Chemistry/Computer Science/Biotechnology/Biology as optional, securing at least 45% marks.
          </p>
          <p>
            SC/ST/SEBC/PwD candidates need only 40% marks.
          </p>
          <h5>Lateral Entry</h5>
          <p>
            Diploma holders (3-year course) with 60% marks (50% for SC/ST) can apply for lateral entry, but only in the corresponding branch.
          </p>
          <h5>Age Criteria</h5>
          <p>
            Applicants must be at least 17 years old by 31st December 2023. For lateral entry, the upper age limit is 25 years.
          </p>
        </div>
        <div className="container my-4">
  <div className="bg-light p-4 rounded shadow-sm">
    <h3  style={{ color: "#A67B5B" }}>Admission</h3>
    <p>
      The candidates who wish to be admitted in CUIET should exercise their options at the time of 
      centralized allotment made by the Commissioner for Entrance Examinations, Govt. of Kerala.
    </p>

    <h4 className="text-secondary mt-3">Documents to be Produced</h4>
    <p>Candidates seeking admission to the Institute of Engineering and Technology will have to produce the following original certificates at the time of Interview/Counselling:</p>
    
    <ul className="list-group">
      <li className="list-group-item">1. S.S.L.C/Equivalent Certificate as proof of age.</li>
      <li className="list-group-item">2. Mark list and Pass Certificate of qualifying Exam.</li>
      <li className="list-group-item">3. Course and Conduct Certificate from the Head of Institution last attended.</li>
      <li className="list-group-item">4. Transfer Certificate.</li>
      <li className="list-group-item">5. Community and Income Certificate for SC/ST/SEBC candidates if reservation is claimed.</li>
      <li className="list-group-item">6. Admit card of Entrance Examination.</li>
      <li className="list-group-item">7. Rank Card issued by the Commissioner for Entrance Exam.</li>
      <li className="list-group-item">8. Physical fitness certificate.</li>
    </ul>
  </div>
</div>
     

       
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Interview Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {schedule.length === 0 ? (
              <p>No schedules available at the moment.</p>
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index}>
                      <td>{item.department_display}</td>
              <td>{item.date_of_joining_display}</td>
              <td>{item.time_of_joining_display}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
