import React from "react";
import Chatlist from "./Chatlist";
const Chatheader = ({ groupName, show, groupID, groupMember }) => {
  const openModal = () => {
    show(true);
  };
  return (
    <div className="bg-newchatbackground relative">
      <div className="w-full flex justify-between">
        <p className="p-5 text-xl">#{groupName}</p>
        <Chatlist />
      </div>
    </div>
  );
};

export default Chatheader;
