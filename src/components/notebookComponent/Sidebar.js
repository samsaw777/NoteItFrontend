import React from "react";

import SidebarComponent from "../Groups";
import Logout from "../authuser/Logout";
const Sidebar = () => {
  return (
    <div className="h-viewHeight flex">
      <p className="flex-2">
        <SidebarComponent />
      </p>
      <p className="flex-1">
        <p>hello world!</p>
        <p>World</p>
      </p>
    </div>
  );
};

export default Sidebar;
