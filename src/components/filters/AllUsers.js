import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/outline";
const Users = ({ users, email }) => {
  console.log(email);
  const sendFriendRequest = (id, userEmail) => {
    const body = {
      userEmail: userEmail,
      friendId: id,
    };
    axios
      .post("http://localhost:9000/sendrequest", body)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
