import React from "react";

const Chatheader = ({ groupName, show, groupID, groupMember }) => {
  const openModal = () => {
    show(true);
  };
  return (
    <div className="bg-chatBackgroundColor border-2 border-gray-200">
      <div className="w-full flex justify-between">
        <p className="p-5 text-xl">#{groupName}</p>
        <p className="p-5 text-xl cursor-pointer" onClick={() => openModal()}>
          Add member
        </p>
      </div>
    </div>
  );
};

export default Chatheader;
