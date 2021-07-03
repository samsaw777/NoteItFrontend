import React from "react";

function Button({ title, submit }) {
  return (
    <button type="button" onClick={submit()}>
      {title}
    </button>
  );
}

export default Button;
