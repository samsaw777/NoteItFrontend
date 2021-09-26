import React, { useEffect } from "react";
import axios from "axios";
import { MinusIcon } from "@heroicons/react/outline";
const FriendList = ({ friends, userid }) => {
  const removeUser = (id, email) => {
    const body = { userId: id, friendEmail: email };
    axios
      .post("http://localhost:9000/removefriend", body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   console.log("this is loaded");
  // }, [removeUser]);
  return (
    <div className="h-viewHeight overflow-y-scroll">
      {friends ? (
        friends.map((user) => (
          <div
            className="border bg-chatBackgroundColor w-full p-3 flex mb-2 justify-between"
            key={user}
          >
            <div className="pt-1 mr-3">
              <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
            </div>
            <div className="text-gray-200">{user}</div>
            <p className="pt-1" onClick={() => removeUser(userid, user)}>
              <MinusIcon className="w-5 h-5 cursor-pointer text-red-600 rounded  hover:bg-gray-600" />
            </p>
          </div>
        ))
      ) : (
        <div className="text-gray-200 p-2">You have no friends.</div>
      )}
    </div>
  );
};

export default FriendList;
