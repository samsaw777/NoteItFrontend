import React, { useState } from "react";
import EditChat from "../chatcomponent/EditChat";
const MenuList = ({ fetchData, setFetchData, id }) => {
  console.log(id);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col">
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
            ? `top-7 absolute right-7 w-40 bg-white text-buttonColor flex flex-col p-2 cursor-pointer rounded z-40`
            : `w-32 bg-white text-buttonColor hidden flex-col p-2 cursor-pointer rounded`
        }
      >
        <p className="py-2" onClick={closeMenu}>
          <EditChat setFetchData={setFetchData} fetchData={fetchData} id={id} />
        </p>
      </div>
    </div>
  );
};

export default MenuList;
