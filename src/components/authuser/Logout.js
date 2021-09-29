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
      className="lg:w-80 sm:w-32 md:w-32 h-10 bg-buttonColor hover:bg-gray-600 hover:text-gray-100  text-white font-bold py-2 px-4 rounded m-1 cursor-pointer"
      onClick={() => logoutuser()}
    >
      <p className="block mx-auto w-min text-lg text-white">Logout</p>
    </div>
  );
};

export default Logoutuser;
