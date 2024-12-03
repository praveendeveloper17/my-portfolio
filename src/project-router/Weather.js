import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="weather-container">
        <div className="weather-img"></div>
        <div className="weather-content">
          <h1>WEATHER-APP</h1>
          <h3>developer by praveen</h3>
          <p>
            Overview The Weather App is a simple yet functional React
            application that allows users to search for current weather data
            based on city names. Utilizing the OpenWeatherMap API, the app
            provides real-time weather information, including temperature,
            humidity, and wind speed.
          </p>
  
          <h1>
          Development
          </h1>
          <h4>
            <span className="bold-content">.State Management:</span> Utilized React's <span className="content-color"> useState </span>  for managing input search and weather data.
          </h4>
          <h4>
            <span className="bold-content">.Data Fetching:</span> Employed <span className="content-color"> useEffect</span> and  <span className="content-color">  useCallback</span> hooks to manage API calls and optimize performance.
          </h4>
          <h4>
            <span className="bold-content">.Responsive Design: </span> Employed Styled components for a clean and user-friendly interface.
          </h4>

        </div>

        <div className="btn-weather">
        <a href="https://live--v-praveen-weatherapp.netlify.app/"><button className="about-btn">live</button></a>
        <a href="https://github.com/praveendeveloper17/weatherapp.git"><button className="about-btn">sorce-code</button></a>
        </div>
        
        
      </div>
    </div>
  );
}
