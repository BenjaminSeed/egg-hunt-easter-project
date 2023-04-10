import React, { useState } from "react";
import "../styles/Eggs.css";

const Eggs = () => {
  const [showEgg1, setShowEgg1] = useState(false);
  const [showEgg2, setShowEgg2] = useState(false);
  const [showEgg3, setShowEgg3] = useState(false);
  const [showEgg4, setShowEgg4] = useState(false);

  const handleEggClick = () => {
    setShowEgg1(true);
  };
  const handleEgg2Click = () => {
    setShowEgg2(true);
  };
  const handleEgg3Click = () => {
    setShowEgg3(true);
  };
  const handleEgg4Click = () => {
    setShowEgg4(true);
  };

  return (
    <div className="container">
      <div
        className={showEgg1 ? "egg-one" : "egg-one-unhidden"}
        onClick={handleEggClick}
      ></div>
      <div
        className={showEgg2 ? "egg-two" : "egg-two-unhidden"}
        onClick={handleEgg2Click}
      ></div>
      <div
        className={showEgg3 ? "egg-three" : "egg-three-unhidden"}
        onClick={handleEgg3Click}
      ></div>
      <div
        className={showEgg4 ? "egg-four" : "egg-four-unhidden"}
        onClick={handleEgg4Click}
      ></div>
    </div>
  );
};

export default Eggs;
