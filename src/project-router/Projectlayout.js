import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Projectlayout.css";
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundVideo from "../componets/images/video.mp4"; // Use the correct path for the video

function Projectlayout() {
  return (
    <Card className="text-center bg-transparent border-0 text-white project-container" id="project">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Main content */}
      <Card.Header>Projects</Card.Header>
      <Card.Body>
        <Card.Title id="project-title"> developed Our PROJECT'S</Card.Title>
        <Card.Text id="project-text">
          Welcome to my portfolio! I am a passionate web developer specializing
          in creating responsive and dynamic applications using modern web
          technologies. My primary focus is on building engaging user interfaces
          with React, JavaScript, HTML, and CSS.
        </Card.Text>
      </Card.Body>
      <div className="num-container">
        <Card.Footer className="border-0">
          <div className="slider-container">
            <Carousel id="project-carousel">
              <Carousel.Item>
                <div className="card-item">
                  <h1 className="calculator-icon">
                    <i className="fa-solid fa-calculator"></i>
                  </h1>
                  <h3>Calculator</h3>
                  <p>
                    Build using
                    <Link to="calculator" className="Calculator text-white">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">VIEW</div>
                      </button>
                    </Link>
                  </p>
                </div>
              </Carousel.Item>
              {/* Additional Carousel Items weather app start */}
              <Carousel.Item>
                <div className="card-item">
                  <h1 className="calculator-icon">
                  <i class="fa-solid fa-cloud-sun"></i>
                  </h1>
                  <h3>Weather-App</h3>
                  <p>
                    Build using
                    <Link to="Weather" className="Calculator text-white">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">VIEW</div>
                      </button>
                    </Link>
                  </p>
                </div>
              </Carousel.Item>
           {/* Additional Carousel Items weather app end */}

           {/* carousel item todo list start */}
           <Carousel.Item>
                <div className="card-item">
                  <h1 className="calculator-icon">
                  <i class="fa-solid fa-list"></i>
                  </h1>
                  <h3>TODO-LIST</h3>
                  <p>
                    Build using
                    <Link to="Todolist" className="Calculator text-white">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">VIEW</div>
                      </button>
                    </Link>
                  </p>
                </div>
              </Carousel.Item>

              {/* carocel item end */}

              {/* carosel item start */}
              <Carousel.Item>
                <div className="card-item">
                  <h1 className="calculator-icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                  </h1>
                  <h3>E-commerce</h3>
                  <p>
                    Build using
                    <Link to="Ecommerce" className="Calculator text-white">
                      <button className="Btn">
                        <div className="sign">
                          <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                          </svg>
                        </div>
                        <div className="text">VIEW</div>
                      </button>
                    </Link>
                  </p>
                </div>
              </Carousel.Item>

              {/* carosel item end */}

            </Carousel>
          </div>
        </Card.Footer>
      </div>
      <Outlet />
    </Card>
  );
}

export default Projectlayout;
