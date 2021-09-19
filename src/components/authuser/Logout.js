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
      className="w-10/12 h-10 bg-green-400 block mx-auto rounded pt-2 cursor-pointer"
      onClick={() => logoutuser()}
    >
      <p className="block mx-auto w-min text-lg text-white">Logout</p>
    </div>
  );
};

export default Logoutuser;
