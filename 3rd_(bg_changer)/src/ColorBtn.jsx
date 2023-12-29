import React from "react";

const ColorBtn = ({ color, bg_color, setChangeColor }) => {
  return (
    <button
      className={` ${bg_color} text-white p-3 mx-3 my-2 rounded-2xl `}
      onClick={()=>setChangeColor(bg_color)}
    >
      {color}
    </button>
  );
};

export default ColorBtn;
