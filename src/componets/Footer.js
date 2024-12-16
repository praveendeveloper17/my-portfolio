import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_6rkxqyd", // YOUR_SERVICE_ID
        "template_if4ku0k", // template_id
        userParams, // Pass the user details as parameters
        "gbHgYxlABI8gRDoDt" // public key
      )
      .then((response) => {
        console.log(
          "Thank You email sent successfully to the user!",
          response.status,
          response.text
        );

        // Clear the form fields after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) =>
        console.error("Failed to send Thank You email to the user:", err)
      );

    // 2. Send admin email with user details
    const adminParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_6rkxqyd", // YOUR_SERVICE_ID
        "template_1i32ju5", // template_id
        adminParams, // Pass the user details as parameters
        "gbHgYxlABI8gRDoDt" // public key
      )
      .then((response) => {
        console.log(
          "Admin email sent successfully!",
          response.status,
          response.text
        );
      })
      .catch((err) => console.error("Failed to send admin email:", err));
  };

  return (
    <Container fluid className="footer-container" id="Contact">
      <Row className="align-items-center">
        <Col xs={12} md={6} lg={4}>
          <div className="login-box">
            <form className="contactform" onSubmit={sendEmail}>
              <div className="user-box">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="user-box">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="user-box">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Text Your Message"
                  required
                />
              </div>

              <Button type="submit" variant="success" id="footer-btn">
                send
              </Button>
            </form>
          </div>
        </Col>
        <Col xs={12} md={6} lg={8}>
          <div className="align-items-center">
            <h2>Praveen</h2>
            <h1>Junior Full Stack Developer</h1>
            <ul class="wrapper">
              <a href="https://www.linkedin.com/in/praveenkumar1712/">
                <li class="icon facebook">
                  <span class="tooltip">linkedin</span>
                  <h5>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </h5>
                </li>
              </a>
              <a href="https://github.com/praveendeveloper17">
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <h5>
                    <i class="fa-brands fa-github"></i>
                  </h5>
                </li>
              </a>
              <a href="https://github.com/praveendeveloper17">
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                  </svg>
                </li>
              </a>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
