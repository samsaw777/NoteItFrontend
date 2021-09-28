import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { PlusIcon } from "@heroicons/react/outline";
import { sendRequest } from "../../actions/friendsType";
const Users = ({ users, email }) => {
  const dispatch = useDispatch();
  console.log(email);
  const sendFriendRequest = (id, userEmail) => {
    const body = {
      userEmail: userEmail,
      friendId: id,
    };
    dispatch(sendRequest(body));
  };

  return (
    <div className="h-searchHeight overflow-y-scroll">
      {users ? (
        users.map((user) => (
          <div
            className="border bg-chatBackgroundColor w-full p-3 flex mb-2 justify-between"
            key={user._id}
          >
            <div className="pt-1 mr-3">
              <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
            </div>
            <div className="text-gray-200">{user.email}</div>
            <p
              className="pt-1"
              onClick={() => sendFriendRequest(user._id, email)}
            >
              <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
            </p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Users;
