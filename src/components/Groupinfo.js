import React from "react";
import Button from "./rawcomponent/Button";
import { logout } from "../actions/authtype";
import { useDispatch, useSelector } from "react-redux";
import { chatinfodata } from "../actions/chatinfotype";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { deleteGroup } from "../actions/typeactions";
import axios from "axios";
const Notebook = ({ id, title }) => {
  //initialize the dispatch method with
  const groupMember = useSelector((state) => state.notebook.notebook);
  const member = groupMember.filter((member) => member._id === id);
  const chatinfo = useSelector((state) => state.chat.chat);
  console.log(chatinfo);
  const dispatchdata = useDispatch();
  const sendchatinfo = (id, name, member) => {
    dispatchdata(chatinfodata(id, name, member));
  };
  return (
    <div
      className={
        chatinfo?.chatname === title
          ? " flex flex-row p-3 justify-between text-gray-300 cursor-pointer ml-3 mr-2 rounded mt-2 bg-newchatbackground "
          : " flex flex-row p-3 justify-between text-gray-300 cursor-pointer ml-3 mr-2 rounded mt-2 hover:bg-newchatbackground hover:text-white"
      }
      key={id}
    >
      <div className="flex" onClick={() => sendchatinfo(id, title, member)}>
        <span className="text-md  pr-1 font-bold">#</span>
        <p className="text-md w-groupName font-bold">{title}</p>
      </div>
      <p onClick={() => dispatchdata(deleteGroup(id))} className="pt-2">
        <TrashIcon className="w-5 h-5 cursor-pointer text-red-500 rounded  hover:bg-gray-600" />
      </p>
    </div>
  );
};

export default Notebook;
