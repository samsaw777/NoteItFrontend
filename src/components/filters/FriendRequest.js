import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { PlusIcon } from "@heroicons/react/outline";
import { loaduser } from "../../actions/authtype";
function FriendRequest({ loginUser, loginuserid }) {
  const user = useSelector((state) => state.auth.user);

  const [followRequest, setFollowRequest] = useState([]);
  console.log(followRequest);
  useEffect(() => {
    axios
      .get(`https://noteitappapi.herokuapp.com/showrequest/${user.id}`)
      .then((response) => {
        setFollowRequest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.id]);

  const addFriend = (email) => {
    const body = {
      userId: user._id,
      friendEmail: email,
    };
    axios
      .post("https://noteitappapi.herokuapp.com/addfriend", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="h-searchHeight overflow-y-scroll">
        <div className="text-center text-lg text-gray-300 mt-2 mb-3 p-2 w-11/12 rounded mx-auto bg-tabbackgroundcolor">
          <div className="flex justify-center w-11/12">
            Friends Request
            <span className="bg-red-600 text-gray-100 w-6 h-6 text-sm ml-1 mt-1 rounded-full">
              {followRequest?.length || 0}
            </span>
          </div>
        </div>
        {followRequest ? (
          followRequest.map((user) => (
            <div
              className=" bg-newchatbackground w-11/12 mx-auto p-3 flex mb-2 justify-between rounded-lg"
              key={user.id}
            >
              <div className="pt-1 mr-2">
                <img
                  src={user.image}
                  alt="user"
                  className="rounded-full w-5 h-5 block mx-auto"
                />
              </div>
              <div className="text-gray-200">{user.userEmail}</div>
              <p onClick={() => addFriend(user.userEmail)}>
                <PlusIcon className="w-5 h-5 cursor-pointer text-tabbackgroundcolor rounded  hover:bg-newsidebarcolor" />
              </p>
            </div>
          ))
        ) : (
          <div className="text-gray-200 pl-3">No Friend Request.</div>
        )}
      </div>
    </>
  );
}

export default FriendRequest;
