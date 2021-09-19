import React from "react";
import Button from "./rawcomponent/Button";
import { logout } from "../actions/authtype";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { deleteGroup } from "../actions/typeactions";
import axios from "axios";
const Notebook = ({ id, title, color, weight }) => {
  //initialize the dispatch method with
  const dispatchdata = useDispatch();
  return (
    <div
      className=" flex flex-row p-3 justify-between text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-white"
      key={id}
    >
      <div className="flex">
        <span className="text-md  pr-1">#</span>
        <p className="text-md text-center ">{title}</p>
      </div>
      <p onClick={() => dispatchdata(deleteGroup(id))} className="pt-2">
        <TrashIcon className="w-5 h-5 cursor-pointer text-red-500 rounded  hover:bg-gray-600" />
      </p>
    </div>
  );
};

export default Notebook;
