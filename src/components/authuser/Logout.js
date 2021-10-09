import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/authtype";
const Logoutuser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutuser = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div
      className="w-11/12 mx-auto h-10 bg-red-500 hover:bg-red-800 hover:text-gray-100  text-white font-bold py-2 px-4 rounded m-1 pb-2 cursor-pointer"
      onClick={() => logoutuser()}
    >
      <p className="block mx-auto w-min text-md text-white">Logout</p>
    </div>
  );
};

export default Logoutuser;
