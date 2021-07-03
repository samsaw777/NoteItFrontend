import React from "react";
import Button from "../components/rawcomponent/Button";
import { logout } from "../../src/actions/authtype";
import { useDispatch } from "react-redux";
const Notebook = ({ id, title }) => {
  const dispatch = useDispatch();
  const submit = () => {
    console.log("hello btn cliked");
    dispatch(logout());
  };
  return (
    <div className="border-2 border-gray-500 rounded p-5 h-96 w-96 ">
      <p>{id}</p>
      <p>{title}</p>
      <Button title="Open" submit={submit} />
    </div>
  );
};

export default Notebook;
