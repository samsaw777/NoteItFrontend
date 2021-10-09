import React from "react";

import SidebarComponent from "../Groups";
import Chat from "../chatcomponent/Chat";
import Search from "../filters/Search";
import Tab from "../filters/Tabs";
import Userinfo from "../authuser/Userinfo";
const Sidebar = () => {
  return (
    <div className="h-viewHeight flex">
      <div className="flex-2">
        <SidebarComponent />
      </div>
      <div className="flex-3 bg-newchatbackground text-gray-300">
        {/*  */}
        <Chat />
      </div>
      <div className="flex-4">
        <Userinfo />
      </div>
    </div>
  );
};

export default Sidebar;
