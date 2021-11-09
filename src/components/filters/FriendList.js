import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { GroupLoader } from "../loader/Skeleton";
import { MinusIcon } from "@heroicons/react/outline";
const FriendList = ({ Friends, userid }) => {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  const [Loading, setLoading] = useState(false);
  const removeUser = (id, friendId) => {
    const body = { userId: id, friendId };
    axios
      .post("https://noteitappapi.herokuapp.com/removefriend", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://noteitappapi.herokuapp.com/showfriends/${user.id}`)
      .then((response) => {
        setFriends(response.data);
        setLoading(false);
      });
  }, [user.id]);

  return (
    <div className="h-viewHeight overflow-y-scroll">
      <div className="text-center text-lg text-gray-300 mt-2 mb-3 p-2 w-11/12 rounded mx-auto bg-tabbackgroundcolor">
        Friends
      </div>
      {Loading && (
        <>
          <GroupLoader />
          <GroupLoader />
        </>
      )}
      {friends && friends?.length ? (
        friends?.map((friend) => (
          <div
            className=" bg-newchatbackground w-11/12 mx-auto rounded-lg p-3 flex mb-2 justify-between"
            key={friend.friendId}
          >
            <div className="pt-1 mr-3">
              <img
                src={friend.friendImage}
                alt="Friend"
                className="rounded-full w-5 h-5  block mx-auto"
              />
            </div>
            <div className="text-gray-200 text-xs max-w-xl">
              {friend.friendEmail}
            </div>
            <p className="pt-1" onClick={() => removeUser(user.id, friend.id)}>
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
