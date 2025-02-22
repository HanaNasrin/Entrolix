
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Rules and Regulations for Admission",
      answer: `1. Admission to the courses in CUIET are regulated on the basis of orders/instructions of Govt. of Kerala from time to time.

2. The percentage of seats to be filled by the Commissioner for Entrance Examination, Kerala and the management will be as per the decision of the University and Govt. of Kerala. At present 95% of the seats are on merit basis and is filled through Centralized Allotment Process by the Commissioner for Entrance Examinations, Govt. of Kerala.

3. This Prospectus is subject to modification/addition/deletion, as may be deemed necessary by the University of Calicut.`,
    },
    {
      question: "What types of degree programs are offered by JAIN Online?",
      answer: "JAIN Online offers undergraduate, postgraduate, and diploma programs in various disciplines.",
    },
    {
      question: "What are the eligibility criteria to apply for online degree programs at JAIN Online?",
      answer: "Eligibility criteria vary by program but generally require a minimum educational qualification.",
    },
    {
      question: "What is the duration of the programs offered by JAIN Online?",
      answer: "Program durations vary from 1 to 4 years depending on the level and type of degree.",
    },
    {
      question: "Are online degrees recognized by UGC?",
      answer: "Yes, all programs offered by JAIN Online are recognized by UGC.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-center">
        <span className="text-warning">Frequently</span> Asked Questions
      </h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="border-bottom py-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">{faq.question}</h5>
              <span className="fs-4">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="mt-2 text-muted">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="container-fluid">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Welcome to Our B-Tech Programs</h1>
        <p>Empower your career with our accredited courses</p>
      </header>

      {/* Main Content Section */}
      <main className="p-4">
        {/* Main Image */}
        <div className="mb-4 text-center">
          <img
            src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/02/18-19-B.jpg"
            alt="Admissions"
            className="img-fluid"
          />
        </div>

        {/* Program Highlights */}
        <section>
          <h2>Our Programs</h2>
          <div className="row">
            {["CS", "ME", "EEE", "PT", "EC", "ECS"].map((program) => (
              <div key={program} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{program}</h5>
                    <p className="card-text">Learn more about our {program} program.</p>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FAQ Section - Now Placed at the Bottom */}
      <FAQ />
    </div>
  );
};

export default LandingPage;
