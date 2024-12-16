import React from "react";
import "./About.css";
import photo from "./images/my-pick.png";
import { Container, Row, Col } from "react-bootstrap";



function About() {
  return (
    <Container className="about-container" id="About">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-left">
          <p className="content-about">
            As an enthusiastic and evolving full-stack Developer, I am actively
            seeking opportunities to contribute my skills and creativity to a
            collaborative development team. I have a solid foundation in
            REACT.JS , JAVASCRIPT and PYTHON I am particularly interested in
            joining a team where I can leverage my current project experience to
            craft intuitive and visually appealing user interfaces while
            continuously expanding my skill set in the field of full-stack
            development.
          </p>
          {/* button section */}
            <a href="praveenkumar-resume.pdf"><button className="about-btn">About -- CV</button></a>
          {/* button section end */}
        </Col>
        <Col md={6} className="text-center text-md-right">
          <img src={photo} alt="Sample" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
