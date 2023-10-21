import React, { useState } from "react";
import InputBox from "./InputBox";
import WordToType from "./WordToType";

const SelectLevel = () => {
  const properties = { type: "radio", name: "select", className: "Btn" };
  const levels = ["easy", "medium", "hard"];
  const [isChanged, setIsChanged] = useState("easy");

  const handleCheckboxChange = (e) => {
    setIsChanged(e.target.value);
  };
  function capitalizeFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
  return (
    <>
      <p className="lead">
        Type the given word within{" "}
        <span id="Seconds">
          {isChanged === "easy" ? 5 : isChanged === "medium" ? 3 : 2}
        </span>{" "}
        Seconds
      </p>
      <div className="selectLevel">
        <p>select Level:</p>
        <div className="radioBtns">
          {levels.map((elem, key) => {
            return (
              <>
                <InputBox
                  {...properties}
                  value={elem}
                  defaultChecked={isChanged === elem}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={capitalizeFirstLetter(elem)} key={key}>
                  {capitalizeFirstLetter(elem)}
                </label>
              </>
            );
          })}
        </div>
      </div>
      <WordToType levelVal={ isChanged}/>
    </>
  );
};

export default SelectLevel;
