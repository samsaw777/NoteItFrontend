import React from "react";
import { MinusIcon } from "@heroicons/react/outline";
const Groupmembers = ({ groupMember }) => {
  return (
    <div className="grid-cols-2 grid  gap-2">
      {groupMember.map((member) =>
        member.members.map((singlemember) => (
          <div className="border bg-chatBackgroundColor w-full p-3 flex mb-2 justify-between">
            <div className="pt-1 mr-3">
              <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
            </div>
            <div className="text-gray-200">{singlemember}</div>
            <p className="pt-1">
              <MinusIcon className="w-5 h-5 cursor-pointer text-red-600 rounded  hover:bg-gray-600" />
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Groupmembers;
