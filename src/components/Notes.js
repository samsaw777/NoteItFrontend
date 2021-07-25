import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
import { loaduser } from "../actions/authtype";
import Navbar from "./navbar/navbar";
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
    <div className="relative">
      <Navbar />

      <div className="absolute right-28">
        <Modal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2 px-20 py-10 mt-12">
        {/* <Modal /> */}
        {notebooks.map((notebook) => (
          <Notebook
            id={notebook._id}
            title={notebook.text}
            color={notebook.color}
            weight={notebook.weight}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
