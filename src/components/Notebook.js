import React from "react";
import Button from "../components/rawcomponent/Button";
import { logout } from "../../src/actions/authtype";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Notebook = ({ id, title, color, weight }) => {
  console.log(id);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative border-2 border-gray-500 rounded p-5 h-96 w-full bg-${color}-${weight}`}
      key={id}
    >
      <p>{title}</p>

      <div className="absolute bottom-10 right-10">
        <Link to={{ pathname: `/notebook/${id}` }}>
          <Button title="Open Group" />
        </Link>
      </div>
    </div>
  );
};

export default Notebook;
