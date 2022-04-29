import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Toronto" />
          </div>
          <p className="source-code">
            <a
              href="https://github.com/veronicabets/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by veronicabets
          </p>
        </div>
      </div>
    </div>
  );
}
