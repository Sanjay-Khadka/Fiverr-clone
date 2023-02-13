import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left-section">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="search-input">
              <img src="./img/search-icon.svg" alt="" className="search-icon" />
              <input type="text" placeholder="Build a Resume" />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span> popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button> Logo Design</button>
            <button> AI Services</button>
          </div>
        </div>
        <div className="right-section">
          <img src="./img/back.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
