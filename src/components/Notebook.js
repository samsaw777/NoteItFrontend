import React from "react";
import Button from "../components/rawcomponent/Button";
import { logout } from "../../src/actions/authtype";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGroup } from "../actions/typeactions";
import axios from "axios";
const Notebook = ({ id, title, color, weight }) => {
  //initialize the dispatch method with
  const dispatchdata = useDispatch();
  return (
    <div
      className="w-full flex flex-row p-3.5 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-white"
      key={id}
    >
      <span className="text-lg  pr-1">#</span>
      <p className="text-lg text-center ">{title}</p>
      <p onClick={() => dispatchdata(deleteGroup(id))}>delete</p>
    </div>
  );
};

export default Notebook;
