import React from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Widget() {
  const html = 85; //html percentage
  const css = 80; //css percentage
  const js = 60; // js percentage
  const react = 40; // react percentage
  const c = 55;
  const python = 75;
  const mangotp = 40; 
  return (
    <Container  className="skil-container" id="Skils">
      <Row className="align-items-center">
        <Col xs={12} md={6} lg={6}>
        <h1>HTML</h1>
        <ProgressBar now={html} label={`${html}%`} />
        <h1>CSS</h1>
        <ProgressBar now={css} label={`${css}%`} />
        <h1>Javascript</h1>
        <ProgressBar now={js} label={`${js}%`} />
        <h1>React</h1>
        <ProgressBar now={react} label={`${react}%`} />

        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="content">

          <h1>C program</h1>
        <ProgressBar now={c} label={`${c}%`} />
        <h1>Python</h1>
        <ProgressBar now={python} label={`${python}%`} />
        <h1>django</h1>
        <ProgressBar now={mangotp} label={`${mangotp}%`} />
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Widget;
