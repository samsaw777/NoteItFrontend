import React from "react";

import SidebarComponent from "../Groups";
import Chat from "../chatcomponent/Chat";
import Search from "../filters/Search";
import Tab from "../filters/Tabs";
const Sidebar = () => {
  return (
    <div className="h-viewHeight flex">
      <p className="flex-2">
        <SidebarComponent />
      </p>
      <p className="flex-4 bg-buttonColor text-gray-300">
        {/*  */}
        <Chat />
      </p>
      <p className="flex-3">
        {/* <Search /> */}
        <Tab />
      </p>
    </div>
  );
};

export default Sidebar;
