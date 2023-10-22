import React, { useEffect, useState } from "react";

const ScoreBox = ({ totalTime }) => {
  const changeTime = () => {
    return totalTime === "easy" ? 5 : totalTime === "medium" ? 3 : 2;
  };
  const [changet, setChangeT] = useState(changeTime);
  useEffect(() => {
    const calcInterval = setInterval(() => {
      setChangeT((prevnum) => {
        if (prevnum > 0) {
          return prevnum - 1;
        } else {
          clearInterval(calcInterval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(calcInterval);
  }, changeTime);
  // console.log(totalTime);
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
