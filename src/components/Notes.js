import React, { useState } from "react";
import axios from "axios";
function Notes() {
  const [val, setval] = useState("");
  console.log(val);
  const subvalue = (e) => {
    e.preventDefault();
    axios
      .post("/savenotes", {
        text: val,
      })
      .then((res) => {
        console.log(res, "signature added!");
      })
      .catch((err) => {
        console.log(err.message, "signature not added!");
      });
  };
  return (
    <div>
      <form onSubmit={subvalue}>
        <input value={val} onChange={(e) => setval(e.target.value)} />
        <button type='submit'>Add notes</button>
      </form>
    </div>
  );
}

export default Notes;
