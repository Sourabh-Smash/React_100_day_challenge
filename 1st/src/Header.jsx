import React from "react";

const Header = ({ head }) => {
    // console.log(head);
  return (
    <li className="collection-header">
      <h5>{head}</h5>
    </li>
  );
};

export default Header;
