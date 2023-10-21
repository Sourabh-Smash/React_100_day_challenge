import React, { useEffect, useState } from "react";
import ScoreBox from "./ScoreBox";
import InputBox from "./InputBox";
import ResultMessage from "./ResultMessage";

const WordToType = ({ levelVal }) => {
  console.log(levelVal);
  const changeLevel = () => {
    return levelVal === "easy" ? 5000 : levelVal === "medium" ? 3000 : 2000;
  };
  const [changeWord, setChangeWord] = useState("hello!");

  const randomWordArr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "map",
    "filter",
    "son",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let idx = Math.floor(Math.random() * randomWordArr.length);
      setChangeWord(randomWordArr[idx]);
    }, changeLevel());
    // console.log(changeLevel());
    return () => {
      clearInterval(interval);
    };
  }, [changeWord]);

  return (
    <>
      <h2 id="changeWord" className="word">
        {changeWord}
      </h2>
      <InputBox
        type="text"
        id="inputField"
        placeholder="Type Here!"
        autofocus={true}
      />
      <ResultMessage />
      <ScoreBox totalTime={levelVal } />
    </>
  );
};

export default WordToType;
