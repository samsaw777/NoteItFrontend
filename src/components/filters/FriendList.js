import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { MinusIcon } from "@heroicons/react/outline";
const FriendList = ({ friends, userid }) => {
  const [Friends, setFriends] = useState([]);
  console.log(friends);
  const removeUser = (id, email) => {
    const body = { userId: id, friendEmail: email };
    axios
      .post("https://noteitappapi.herokuapp.com/removefriend", body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="h-viewHeight overflow-y-scroll">
      <div className="text-center text-lg text-gray-300 mt-2 mb-3 p-2 w-11/12 rounded mx-auto bg-tabbackgroundcolor">
        Friends
      </div>
      {user?.friends && user?.friends?.length ? (
        user?.friends?.map((user) => (
          <div
            className=" bg-newchatbackground w-11/12 mx-auto rounded-lg p-3 flex mb-2 justify-between"
            key={user}
          >
            <div className="pt-1 mr-3">
              <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
            </div>
            <div className="text-gray-200 text-xs max-w-xl">{user}</div>
            <p className="pt-1" onClick={() => removeUser(userid, user)}>
              <MinusIcon className="w-5 h-5 cursor-pointer text-red-600 rounded  hover:bg-gray-600" />
            </p>
          </div>
        ))
      ) : (
        <div className="text-gray-300 font-bold p-2">You have no friends.</div>
      )}
      {/* {!friends && (
        <div className="text-gray-200 p-2">You have no friends.</div>
      )} */}
    </div>
  );
};

export default FriendList;
