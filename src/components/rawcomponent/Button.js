import React from "react";

function Button({ title, submit }) {
  //var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return (
    <span
      onClick={submit}
      className="border-2 border-gray-500 p-1 rounded cursor-pointer"
    >
      {title}
    </span>
  );
}

export default Button;
