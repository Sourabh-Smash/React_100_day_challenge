import React, { useState } from "react";

const ScoreBox = ({ totalTime }) => {
  const changeTime = () => {
    return totalTime === "easy" ? 5 : totalTime === "medium" ? 3 : 2;
  };
  const [changet,setChangeT]=useState(changeTime)
  console.log(totalTime);
  return (
    <div className="scores">
      <h3>
        Time left:
        <span id="time">{changet}</span>
      </h3>
      <h3>
        Score:
        <span id="score">0</span>
      </h3>
    </div>
  );
};

export default ScoreBox;
