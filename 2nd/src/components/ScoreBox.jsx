import React from 'react'

const ScoreBox = () => {
  return (
    <div className="scores">
      <h3>
        Time left:
        <span id="time">0</span>
      </h3>
      <h3>
        Score:
        <span id="score">0</span>
      </h3>
    </div>
  );
}

export default ScoreBox;