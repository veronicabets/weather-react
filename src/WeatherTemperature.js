import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherUnits">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          <small>
            °C |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </small>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <strong>{Math.round(fahrenheit())}</strong>
        <span className="units">
          <small>
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </small>
        </span>
      </div>
    );
  }
}
