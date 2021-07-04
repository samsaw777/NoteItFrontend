import React from "react";
import Button from "../components/rawcomponent/Button";
import { logout } from "../../src/actions/authtype";
import { useDispatch } from "react-redux";
const Notebook = ({ id, title, color, weight }) => {
  const dispatch = useDispatch();
  const open = () => {
    console.log(`${title} is clicked`);
  };
  return (
    <div
      className={`relative border-2 border-gray-500 rounded p-5 h-96 w-96 bg-${color}-${weight}`}
      key={id}
    >
      {/* <p>{id}</p> */}
      <p>{title}</p>
      {/* <button onClick={open}>Open</button> */}
      <div className="absolute bottom-10 right-10">
        <Button title="Open Notebook" submit={open} />
      </div>
    </div>
  );
};

export default Notebook;
