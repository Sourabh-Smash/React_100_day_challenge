import React from "react";
import ScoreBox from "./ScoreBox";

const InputBox = (props) => {
  // console.log(others);
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        className={props.class}
        placeholder={props.placeholder}
        autoFocus={props.autofocus}
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
      />
     {/* <ScoreBox/> */}
    </>
  );
};

export default InputBox;
