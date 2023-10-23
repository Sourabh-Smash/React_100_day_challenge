import React from "react";

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
    </>
  );
};

export default InputBox;
