import React, { useState, useEffect } from "react";
import { loaduser } from "../../actions/authtype";
import { useSelector, useDispatch } from "react-redux";
import { sidebarDropDown } from "../../Assets/Data";
import MenuList from "../rawcomponent/MenuList";
import Logout from "../authuser/Logout";
import { UserLoader } from "../loader/Skeleton";
const Userinfo = () => {
  const dispatchdata = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  console.log(user);
  console.log(user);
  useEffect(() => {
    dispatchdata(loaduser());
  }, []);
  return (
    <>
      <div className="bg-newsidebarcolor h-viewHeight pt-2 flex flex-col">
        {loading ? (
          <UserLoader />
        ) : (
          <div className="flex pl-2 pt-1 bg-newchatbackground  pb-3  relative rounded-lg mr-2 ml-2">
            {user.image ? (
              <div className="mr-2 pt-1 w-10 h-10">
                <img
                  src={user.image}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <div className="flex flex-col mt-1">
              <p className="text-md text-gray-100">{user.name}</p>
              <p className="text-xs text-gray-100">{user.email}</p>
            </div>
            <div className="ml-auto pt-4">
              <MenuList options={sidebarDropDown} />
            </div>
          </div>
        )}
        <div className="mt-auto">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Userinfo;
