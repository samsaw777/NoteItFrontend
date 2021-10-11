import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { PlusIcon } from "@heroicons/react/outline";
import { loaduser } from "../../actions/authtype";
function FriendRequest({ loginUser, loginuserid }) {
  const user = useSelector((state) => state.auth.user);
  console.log(user._id);
  const [followRequest, setFollowRequest] = useState([]);
  // console.log(followRequest);
  const dispatch = useDispatch();
  const addFriend = (email) => {
    const body = {
      userId: user._id,
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

  useEffect(() => {
    dispatch(loaduser());
  }, [dispatch]);

  // useEffect(() => {
  //   setFollowRequest(user.followRequest);
  // }, [user]);

  // useEffect(() => {
  //   const pusher = new Pusher("b389d6daa22bf8adf416", {
  //     cluster: "ap2",
  //   });

  //   const channel = pusher.subscribe("friendrequest");
  //   channel.bind("updated", function (data) {
  //     // alert(JSON.stringify());
  //     setFollowRequest([...followRequest, data.friendRequest]);
  //   });
  // }, [followRequest]);

  const friendRequest = useSelector((state) => state.friends.friendsRequest);
  return (
    <>
      <div className="h-searchHeight overflow-y-scroll">
        <div className="text-center text-lg text-gray-300 mt-2 mb-3 p-2 w-11/12 rounded mx-auto bg-tabbackgroundcolor">
          <div className="flex justify-center w-11/12">
            Friends Request
            <span className="bg-red-600 text-gray-100 w-6 h-6 text-sm ml-1 mt-1 rounded-full">
              {user.followRequest.length}
            </span>
          </div>
        </div>
        {user.followRequest ? (
          user.followRequest.map((user) => (
            <div
              className=" bg-newchatbackground w-11/12 mx-auto p-3 flex mb-2 justify-between rounded-lg"
              key={user}
            >
              <div className="pt-1 mr-2">
                <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
              </div>
              <div className="text-gray-200">{user}</div>
              <p onClick={() => addFriend(user)}>
                <PlusIcon className="w-5 h-5 cursor-pointer text-tabbackgroundcolor rounded  hover:bg-newsidebarcolor" />
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
