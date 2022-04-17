import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <ul>
        <li>Last updated: Tuesday {props.time}</li>
        <li>Overcast Clouds</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="Overcast Clouds"
              className="float-left"
            />
            <div className="float-left">
              <strong>18</strong>
              <span className="units">
                <small>
                  <a href="/">°C</a>|<a href="/">°F</a>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}</li>
            <li>Wind: {props.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
