import React from "react";
import axios from "axios";
import { MinusIcon } from "@heroicons/react/outline";
const Groupmembers = ({ groupMember, groupID }) => {
  const removeMember = (memberId, removeId) => {
    const body = {
      userId: memberId,
      groupId: groupID,
      userdocId: removeId,
    };
    axios
      .post("https://remotetracker.onrender.com/removemember", body)
      .then((res) => {
        console.log("Member removes");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="h-chatheight  overflow-y-scroll">
      <div className="grid-cols-2 grid  gap-2">
        {groupMember.map((member) => (
          <div
            className=" bg-newsidebarcolor w-11/12 mx-auto rounded-lg p-3 flex mb-2 justify-between"
            key={member.memberId}
          >
            <div className="pt-1 mr-3">
              <img
                className="rounded-full w-5 h-5  block mx-auto"
                src={member.memberImage}
                alt="Member"
              />
            </div>
            <div className="text-gray-200">{member.memberEmail}</div>
            <p
              className="pt-1"
              onClick={() => removeMember(member.memberId, member.id)}
            >
              <MinusIcon className="w-5 h-5 cursor-pointer text-red-600 rounded  hover:bg-gray-600" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groupmembers;
