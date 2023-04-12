import React, { useState } from "react";
import Confetti from "react-confetti";
import "../styles/Eggs.css";

const Eggs = () => {
  const [showEggs, setShowEggs] = useState([
    { id: "one", show: false },
    { id: "two", show: false },
    { id: "three", show: false },
    { id: "four", show: false },
    { id: "five", show: false },
  ]);

  const handleClick = (id) => {
    setShowEggs((prevShowEggs) => {
      return prevShowEggs.map((newEggs) => {
        if (newEggs.id === id) {
          return { ...newEggs, show: true };
        } else {
          return newEggs;
        }
      });
    });
  };

  const handleResetClick = () => {
    setShowEggs((prevShowEggs) => {
      return prevShowEggs.map((eggReset) => {
        return { ...eggReset, show: false };
      });
    });
  };

  return (
    <div className="container">
      {showEggs.map((eggs) => {
        return (
          <div
            key={eggs.id}
            className={eggs.show ? `egg-${eggs.id}` : `egg-${eggs.id}-unhidden`}
            onClick={() => handleClick(eggs.id)}
          >
            {eggs.show && <Confetti />}
          </div>
        );
      })}
      <button onClick={handleResetClick} className="egg-reset">
        Reset
      </button>
    </div>
  );
};

export default Eggs;
