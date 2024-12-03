import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import team from "./images/team-3.jpg";
import photo from "./images/my-new image1.png";
import "./Home.css";

function Home() {
  return (
    <Container fluid className="home-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} lg={4}>
          <img
            src={photo}
            alt="Left Side"
            className="img-fluid"
            style={{ width: "100%"}}
          ></img>
        </Col>
        <Col xs={12} md={6} lg={8}>
          <div className="content">
            <h2>praveen</h2>
            <h1>Junior full stack developer</h1>
            <p>
              As a graduate with a Bachelor's degree in Information Technology{" "}
              <br></br>
              and a specialization in full-stack web development, I am
              passionate<br></br>
              about crafting innovative and effective web solutions. My academic
              <br></br>
              background has equipped me with a solid foundation in both
              front-end<br></br>
              and back-end technologies, enabling me to build dynamic and
              user-centric websites.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
