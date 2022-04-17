import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="Search"
              placeholder="Search city..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-150"
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success location-button"
              id="get-location-button"
            >
              Current location
            </button>
          </div>
        </div>
      </form>
      <h1>Toronto</h1>
    </div>
  );
}
