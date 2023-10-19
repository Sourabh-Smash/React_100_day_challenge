import React from "react";

const Item = ({ name, userInput }) => {
  name = name.toUpperCase();
  userInput = userInput.toUpperCase();
  console.log(userInput);
  console.log(userInput.includes(name));
  return (
    <li className="collection-item">
      <a
        href="#"
        style={{
          display:
            userInput.length === 0 || userInput.includes(name) ? "" : "none",
        }}
      >
        {name}
      </a>
    </li>
  );
};

export default Item;
