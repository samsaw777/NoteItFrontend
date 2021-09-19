import React from "react";
import { useSelector } from "react-redux";
import SidebarComponent from "../Groups";
import Logout from "../authuser/Logout";
const Sidebar = () => {
  const chatinfo = useSelector((state) => state.chat.chat);
  console.log(chatinfo);
  return (
    <div className="h-viewHeight flex">
      <p className="flex-2">
        <SidebarComponent />
      </p>
      <p className="flex-1 bg-chatBackgroundColor text-gray-300">
        <p className="p-5 text-xl">#{chatinfo.chatname}</p>
      </p>
    </div>
  );
};

export default Sidebar;
