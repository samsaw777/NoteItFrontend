import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
import { loaduser } from "../actions/authtype";
import Navbar from "./navbar/navbar";
import Notebook from "./Notebook";
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
      <Navbar />
      {/* <form onSubmit={subvalue}>
        <h1>This is a signature.</h1>
        <input value={val} onChange={(e) => setval(e.target.value)} />
        <button type="submit">Add notes</button>
      </form> */}

      <div className="grid grid-rows-5 grid-flow-col gap-4 px-20 py-10">
        {notebooks.map((notebook) => (
          <Notebook id={notebook.id} title={notebook.text} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
