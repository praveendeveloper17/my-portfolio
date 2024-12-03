import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div>
      <div className="calculator-container"></div>
      <div className="calculator-content">
        <h1>responsive calculator</h1>
        <h3>developer by praveen</h3>
        <p>
          .Developed a functional calculator app using React with state <br></br>
          .management for user inputs and operations. It includes keyboard<br></br>
          .support for seamless calculations and robust error handling. The<br></br>
          .responsive design ensures a smooth user experience across devices.<br></br>
        </p>
        <h3>link's</h3>
        <div className="btn-container">
        
        <a href="https://praveenkumarv.neocities.org/calculator/calculator/"><button className="about-btn">live</button></a>
        <a href="https://github.com/praveendeveloper17/calculator.git"><button className="about-btn">sorce-code</button></a>
        
        </div>
      </div>
    </div>
  );
}
