import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/outline";
function FriendRequest({ loginUser, loginuserid }) {
  const addFriend = (email, id) => {
    const body = {
      userId: id,
      friendEmail: email,
    };
    axios
      .post("http://localhost:9000/addfriend", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="text-gray-200 p-2">Friend Requests</div>
      <div className="h-searchHeight overflow-y-scroll">
        {loginUser ? (
          loginUser.map((user) => (
            <div
              className="border bg-chatBackgroundColor w-full p-3 flex mb-2 justify-between"
              key={user}
            >
              <div className="pt-1 mr-3">
                <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
              </div>
              <div className="text-gray-200">{user}</div>
              <p className="pt-1" onClick={() => addFriend(user, loginuserid)}>
                <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
              </p>
            </div>
          ))
        ) : (
          <div>No Friend Request.</div>
        )}
      </div>
    </>
  );
}

export default FriendRequest;
