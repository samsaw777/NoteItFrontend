import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
import { loaduser } from "../actions/authtype";
import Navbar from "./navbar/Navbar";
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

  //posting the data to database

  //returning the jsx element
  return (
    <div className="">
      <Navbar />

      {/* <div className="absolute right-28">
     
      </div> */}
      <div className="h-sidebarHeight bg-sidebarBackgroundColor-color w-1/6">
        <div className="flex flex-col">
          {notebooks.map((notebook) => (
            <Notebook
              id={notebook._id}
              title={notebook.text}
              color={notebook.color}
              weight={notebook.weight}
            />
          ))}
        </div>
        <Modal />
      </div>
    </div>
  );
}

export default Notes;
