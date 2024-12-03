import React from "react";
import "./Ecommerce.css";
import { Container, Row, Col } from "react-bootstrap";
import ecommerce from "../componets/images/my-car.png";

function Ecommerce() {
  return (
    <Container className="about-container">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-left">
          <p>
            This project is a dynamic car rental website called QuickDrive,
            built using HTML, CSS, Bootstrap, and JavaScript. It features a
            responsive design with an interactive menu, smooth scroll animations
            powered by ScrollReveal, and user-friendly sections for rental
            services, customer experiences, and mobile app downloads.
          </p>
         
        </Col>
        <Col md={6} className="text-center text-md-right">
          <img src={ecommerce} alt="Sample" className="img-fluid" />
        </Col>
      </Row>
      <div className="container-btn">
        <a href="https://praveenkumarv.neocities.org/QuickDrive_project/QuickDrive">
          <button class="button">live-link</button>
        </a>
        <a href="https://github.com/praveendeveloper17/project-QuickDrive-html-css-js.git">
          <button class="button">sorece-link</button>
        </a>
      </div>
    </Container>
  );
}

export default Ecommerce;
