import React from "react";

import Cities from "./Cities";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Cities />
            <Weather time="11:00" humidity="89%" wind="3 km/h" />
          </div>
          <p className="source-code">
            <a href="https://github.com/veronicabets/shecodes-weather-app">
              Open-source code
            </a>{" "}
            by veronicabets
          </p>
        </div>
      </div>
    </div>
  );
}
