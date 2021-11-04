import React, { useState } from "react";
import { menuinfo } from "../../actions/menuinfo";
import { useDispatch } from "react-redux";
import Logout from "../authuser/Logout";
const MenuList = ({ options }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const setMenuValue = (value, name) => {
    dispatch(menuinfo(value, name));
    closeMenu();
  };

  return (
    <div className="flex flex-col ">
      <div className="ml-auto" onClick={openMenu}>
        <div className="cursor-pointer ml-auto mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
      {/* Drop down menu */}
      <div
        className={
          open === true
            ? `top-7 absolute right-7 w-40 bg-newchatbackground text-gray-300 flex flex-col p-2 cursor-pointer rounded z-40`
            : `w-32 bg-newchatbackground text-gray-300 hidden flex-col p-2 cursor-pointer rounded`
        }
      >
        <p className="">
          {options.map((option) => (
            <div
              className="text-sm py-2 cursor-pointer hover:bg-newsidebarcolor hover:rounded-lg pl-1"
              onClick={() => setMenuValue(option.value, option.name)}
            >
              {option.name}
            </div>
          ))}
          <Logout />
        </p>
      </div>
    </div>
  );
};

export default MenuList;
