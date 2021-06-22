import React, { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
function Notes() {
  //initialize the dispatch method with
  const dispatchdata = useDispatch();

  //dispatching the get method
  useEffect(() => {
    dispatchdata(getNotebooks());
    // };
    // return subscribe;
  }, []);

  //loading the state
  const notebooks = useSelector((state) => state.notebook.notebook);
  console.log(notebooks);

  //posting the data to database
  dotenv.config();
  const [val, setval] = useState("");
  console.log(process.env.REACT_APP_DBNAME);
  console.log(val);

  const subvalue = (e) => {
    e.preventDefault();
    const newnotebook = {
      text: val,
    };

    dispatchdata(addNotebook(newnotebook));
    setval("");
  };

  //returning the jsx element
  return (
    <div>
      <form onSubmit={subvalue}>
        <h1>This is a signature.</h1>
        <input value={val} onChange={(e) => setval(e.target.value)} />
        <button type='submit'>Add notes</button>
      </form>
    </div>
  );
}

export default Notes;
