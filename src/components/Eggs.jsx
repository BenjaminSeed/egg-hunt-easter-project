import React, { useState } from "react";
import Confetti from "react-confetti";
import "../styles/Eggs.css";

const Eggs = () => {
  const [showEgg1, setShowEgg1] = useState(false);
  const [showEgg2, setShowEgg2] = useState(false);
  const [showEgg3, setShowEgg3] = useState(false);
  const [showEgg4, setShowEgg4] = useState(false);
  const [showEgg5, setShowEgg5] = useState(false);

  // create single state for all and iterate over

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
  const handleEgg5Click = () => {
    setShowEgg5(true);
  };

  const handleResetClick = () => {
    setShowEgg1(false);
    setShowEgg2(false);
    setShowEgg3(false);
    setShowEgg4(false);
    setShowEgg5(false);
  };

  return (
    <div className="container">
      <div
        className={showEgg1 ? "egg-one" : "egg-one-unhidden"}
        onClick={handleEggClick}
      >
        {showEgg1 && <Confetti />}
      </div>
      <div
        className={showEgg2 ? "egg-two" : "egg-two-unhidden"}
        onClick={handleEgg2Click}
      >
        {showEgg2 && <Confetti />}
      </div>
      <div
        className={showEgg3 ? "egg-three" : "egg-three-unhidden"}
        onClick={handleEgg3Click}
      >
        {showEgg3 && <Confetti />}
      </div>
      <div
        className={showEgg4 ? "egg-four" : "egg-four-unhidden"}
        onClick={handleEgg4Click}
      >
        {showEgg4 && <Confetti />}
      </div>
      <div
        className={showEgg5 ? "egg-five" : "egg-five-unhidden"}
        onClick={handleEgg5Click}
      >
        {showEgg5 && <Confetti />}
      </div>
      <button onClick={handleResetClick} className="egg-reset">
        Reset
      </button>
    </div>
  );
};

export default Eggs;
