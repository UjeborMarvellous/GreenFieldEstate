import React from "react";
import "./HomePage.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place Today!
          </h1>
          <p>
            Unlock the Door to Your Dream Lifestyle: Embark on Your Real Estate
            Quest Today! Find the Perfect Property and Start Living Your Best
            Life Now!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>6+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" className="Img" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
