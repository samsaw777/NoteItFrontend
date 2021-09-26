import React from "react";

const Chatheader = ({ groupName }) => {
  return (
    <div className="bg-chatBackgroundColor">
      <div className="w-full">
        <p className="p-5 text-xl">#{groupName}</p>
      </div>
    </div>
  );
};

export default Chatheader;
