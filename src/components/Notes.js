import React, { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

function Notes() {
  dotenv.config();
  const [val, setval] = useState("");
  console.log(process.env.REACT_APP_DBNAME);
  console.log(val);
  const subvalue = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/savenotes", {
        text: val,
      })
      .then((res) => {
        console.log(res, "signature added!");
        setval("");
      })
      .catch((err) => {
        console.log(err.message, "signature not added!");
      });
  };
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
