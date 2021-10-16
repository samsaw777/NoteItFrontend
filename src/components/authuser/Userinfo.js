import React, { useState, useEffect } from "react";
import { loaduser } from "../../actions/authtype";
import { useSelector, useDispatch } from "react-redux";
import { sidebarDropDown } from "../../Assets/Data";
import MenuList from "../rawcomponent/MenuList";
import Logout from "../authuser/Logout";
const Userinfo = () => {
  const dispatchdata = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  useEffect(() => {
    dispatchdata(loaduser());
  }, []);
  return (
    <div className="bg-newsidebarcolor h-viewHeight pt-2 flex flex-col">
      <div className="flex pl-2 pt-1 bg-newchatbackground  pb-3  relative rounded-lg mr-2 ml-2">
        <div className="mr-2 pt-1 w-10 h-10">
          <img src={user.image} alt="User" className="w-10 h-10 rounded-full" />
        </div>
        <div className="flex flex-col mt-1">
          <p className="text-md text-gray-100">{user.name}</p>
          <p className="text-xs text-gray-100">{user.email}</p>
        </div>
        <div className="ml-auto pt-4">
          <MenuList options={sidebarDropDown} />
        </div>
      </div>

      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
};

export default Userinfo;
