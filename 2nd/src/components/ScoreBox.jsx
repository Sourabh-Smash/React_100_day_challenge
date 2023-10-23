import React, { useEffect, useState } from "react";

const ScoreBox = ({ totalTime }) => {
  const timeMapping = {
    easy: 5,
    medium: 3,
    hard: 2, // Add more options if needed
  };
  // Function to calculate the initial time based on totalTime prop
  const changeTime = () => {
    console.log(totalTime);
    return timeMapping[totalTime]||0;
  };

  const [changet, setChangeT] = useState(changeTime);

  useEffect(() => {
    const calcInterval = setInterval(() => {
      // Update changet based on totalTime
      setChangeT((prevNum) => {
        if (prevNum > 0) {
          return prevNum - 1;
        } else {
          // Time is up, you might want to handle this case
          clearInterval(calcInterval);
          return 0;
        }
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(calcInterval);
  }, [timeMapping[totalTime]]); // Re-run the effect when totalTime changes

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
