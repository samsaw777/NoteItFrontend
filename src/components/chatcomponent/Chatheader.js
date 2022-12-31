import React from "react";
import Chatlist from "./Chatlist";
import Chatmodal from "./Chatmodel";
const Chatheader = ({ groupName, show, groupID, groupMember, groupImage }) => {
  const openModal = () => {
    show(true);
  };
  return (
    <div className="bg-newchatbackground relative">
      <div className="w-full flex justify-between">
        <div className="flex ml-2 mt-2">
          <div className="w-10 h-10  my-auto">
            <img
              src={groupImage}
              referrerpolicy="no-referrer"
              alt="Groip"
              className="w-10 h-10 rounded-full"
            />
          </div>

          <p className="p-3 text-xl">{groupName}</p>
        </div>
        <div className="flex">
          <Chatmodal />
          <Chatlist />
        </div>
      </div>
    </div>
  );
};

export default Chatheader;
