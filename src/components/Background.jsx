import React from "react";
import img from "../assets/find-the-egg.jpeg";
import "../styles/Background.css";

const Background = () => {
  return (
    <div>
      <h1 className="egg-title">Egg Hunt</h1>
      <img className="egg-img" src={img} alt="" />
    </div>
  );
};

export default Background;
