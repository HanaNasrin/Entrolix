// import React from 'react'

// function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home
import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <header className="hero text-center">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-warning">Welcome to Entrolix</h1>
          <p className="lead text-dark">
            Streamline your admissions process with Entrolix, your ultimate helpdesk solution.
          </p>
          <a href="#admissions" className="btn btn-warning btn-lg text-white">
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Features</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-check-circle text-warning display-4"></i>
              <h3 className="mt-3">Guided Workflows</h3>
              <p>Simplify admissions with step-by-step guidance.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-chat-dots text-warning display-4"></i>
              <h3 className="mt-3">Live Chat Support</h3>
              <p>Get instant help with your queries anytime.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-lock text-warning display-4"></i>
              <h3 className="mt-3">Secure Document Uploads</h3>
              <p>Safeguard your data with our secure systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2023 Entrolix. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
