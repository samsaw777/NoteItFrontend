import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
import { loaduser } from "../actions/authtype";
import Notebook from "./Notebook";
import Modal from "../components/notebookComponent/Modal";
function Notes() {
  //initialize the dispatch method with
  const dispatchdata = useDispatch();

  //dispatching the get method
  useEffect(() => {
    dispatchdata(getNotebooks());
    dispatchdata(loaduser());
    // };
    // return subscribe;
  }, []);

  //loading the state
  const notebooks = useSelector((state) => state.notebook.notebook);
  console.log(notebooks);
  //Load the user
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  //posting the data to database

  //returning the jsx element
  return (
    <div className="h-viewHeight bg-sidebarBackgroundColor-color">
      {/* Show the user in the top */}
      <div className="flex pl-5 pt-1 border-b-2 border-gray-600 pb-1">
        <div className="mr-5 pt-1">
          <p className="rounded-full w-10 h-10 bg-gray-100 block mx-auto"></p>
        </div>
        <div className="flex flex-col ">
          <p className="text-lg text-gray-200">{user.name}</p>
          <p className="text-xs text-gray-300">{user.email}</p>
        </div>
      </div>
      {/* <div className="flex flex-col">
        {notebooks.map((notebook) => (
          <Notebook
            id={notebook._id}
            title={notebook.text}
            color={notebook.color}
            weight={notebook.weight}
          />
        ))}
      </div> */}
      {/* <Modal /> */}
    </div>
  );
}

export default Notes;
