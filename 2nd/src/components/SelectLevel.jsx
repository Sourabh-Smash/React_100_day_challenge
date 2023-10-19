import React, { useState } from "react";
import InputBox from "./InputBox";

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
        Type the given word within <span id="Seconds">5</span> Seconds
      </p>
      <div className="selectLevel">
        <p>select Level:</p>
        <div className="radioBtns">
          {levels.map((elem,key) => {
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
    </>
  );
};

export default SelectLevel;