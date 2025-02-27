import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        {/* University Name & Logo */}
        <Row className="text-center md-start">
          <Col>
            <img
              src="http://www.cuiet.info/images/logo-light.png"
              alt="University Logo"
              width="80"
              className="mb-2"
            />
            <h5 className="fw-bold">
              INSTITUTE OF ENGINEERING AND TECHNOLOGY - UNIVERSITY OF CALICUT
            </h5>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="text-center md-start">
          <Col>
          <a href="https://www.facebook.com/ietuocofficial?ti=as#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="fs-3 mx-2 cursor-pointer text-white" />
          </a>
          <a href="https://www.instagram.com/iet_uoc_official/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="fs-3 mx-2 cursor-pointer text-white" />
         </a>
         <a href="http://www.cuiet.info/admission.php#!" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="fs-3 mx-2 cursor-pointer text-white" />
         </a>
          </Col>
        </Row>

        {/* Footer Links */}
        <Row className="text-center text-md-start">
          <Col sm={6} md={3}>
            <h6 className="fw-bold">QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li><a href="http://www.cuiet.info/circular.php" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">B.Tech Grade Sheet Circular</a></li>
              <li><a href="http://www.cuiet.info/iet_old/btech_gradesheet.php" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">B.Tech Unclaimed Grade Sheet</a></li>
              <li><a href="http://www.cuiet.info/sde_gradesheet.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">SDE Unclaimed Grade Sheets</a></li>
              <li><a href="http://www.cuiet.info/circular.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Office Circular</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h6 className="fw-bold">EXTERNAL LINKS</h6>
            <ul className="list-unstyled">
              <li><a href="https://www.uoc.ac.in"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer"> University of Calicut</a></li>
              <li><a href="https://www.aicte-india.org/"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">AICTE</a></li>
              <li><a href="https://iedc.startupmission.in/"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IEDC</a></li>
              <li><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">SB Collect</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h6 className="fw-bold">DOWNLOADS</h6>
            <ul className="list-unstyled">
              <li><a href="http://www.cuiet.info/assets/downloads/Madatory-Disclosure-2023-24-1.pdf"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Mandatory Disclosure</a></li>
              <li><a href="http://www.cuiet.info/eoaloa.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">AICTE Approval</a></li>
              <li><a href="http://www.cuiet.info/assets/downloads/uni_affiliation.pdf"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">University Affiliation Order</a></li>
              <li><a href="http://www.cuiet.info/btech_regulation.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">B.Tech Regulations</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h6 className="fw-bold">INTERNAL LINKS</h6>
            <ul className="list-unstyled">
              <li><a href="http://cuiet.info/iedcietuoc/index.html"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IEDC IET</a></li>
              <li><a href="https://tinkerhubietcu.github.io/"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">TinkerHub IET</a></li>
              <li><a href="http://www.cuiet.info/alumni.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Alumni IET</a></li>
              <li><a href="http://www.cuiet.info/forms.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Forms to Download</a></li>
              <li><a href="http://www.cuiet.info/gradesheet.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">B.Tech Gradesheet after 05/11/2024</a></li>
            </ul>
          </Col>
        </Row>

        {/* Additional Cells Section */}
        <Row className="text-center text-md-start">
          <Col sm={6} md={3}>
            <h6 className="fw-bold">CELLS</h6>
            <ul className="list-unstyled">
              <li><a href="http://www.cuiet.info/ragging_cell.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IET Anti-Ragging Cell</a></li>
              <li><a href="http://www.cuiet.info/grievence_cell.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IET Grievance Cell</a></li>
              <li><a href="http://www.cuiet.info/womens_cell.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IET Women's Cell</a></li>
              <li><a href="http://www.cuiet.info/iqac_cell.php"className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">IET IQAC Cell</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Text */}
        
        <Row className="text-center mt-3">
            <Col>
                <p className="text-white small">
                © Copyright {new Date().getFullYear()}. All Rights Reserved. | Developed & Maintained by 
                <span className="fw-bold"> Institute of Engineering & Technology - University of Calicut</span>
                </p>
            </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;

