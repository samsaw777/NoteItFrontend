import React from "react";

import Notes from "../Groups";

const Sidebar = () => {
  return (
    <div className="h-viewHeight flex">
      <p className="flex-2">
        <Notes />
      </p>
      <p className="flex-1">
        <p>hello world!</p>
        <p>World</p>
      </p>
    </div>
  );
};

export default Sidebar;
