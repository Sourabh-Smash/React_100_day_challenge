import React, { useEffect, useState } from "react";

const WordToType = () => {
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
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [changeWord]);
  

  return (
    <h2 id="changeWord" className="word">
      {changeWord}
    </h2>
  );
};

export default WordToType;
