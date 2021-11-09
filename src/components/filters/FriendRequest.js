import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
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

  const addFriend = (email, image, id, rId) => {
    const body = {
      userId: user.id,
      friendEmail: email,
      friendId: id,
      removeId: rId,
      friendImage: image,
    };
    axios
      .post("https://noteitappapi.herokuapp.com/addfriend", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelRequest = (userId, friendId) => {
    const body = { userId, friendId };
    axios
      .post("https://noteitappapi.herokuapp.com/cancelrequest", body)
      .then((response) => {
        console.log(response.data);
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
          followRequest.map((friend) => (
            <div
              className=" bg-newchatbackground w-11/12 mx-auto p-3 flex mb-2 justify-between rounded-lg"
              key={friend.id}
            >
              <div className="pt-1 mr-2">
                <img
                  src={friend.image}
                  alt="friend"
                  className="rounded-full w-5 h-5 block mx-auto"
                />
              </div>
              <div className="text-gray-200">{friend.userEmail}</div>
              <div className="flex">
                <p
                  onClick={() =>
                    addFriend(
                      friend.userEmail,
                      friend.image,
                      friend.loginId,
                      friend.id
                    )
                  }
                >
                  <PlusIcon className="w-5 h-5 cursor-pointer text-tabbackgroundcolor rounded  hover:bg-newsidebarcolor" />
                </p>
                <p onClick={() => cancelRequest(user.id, friend.id)}>
                  <MinusIcon className="w-5 h-5 cursor-pointer text-red-400 rounded  hover:bg-newsidebarcolor" />
                </p>
              </div>
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
