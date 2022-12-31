import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { PlusIcon } from "@heroicons/react/outline";
import { sendRequest } from "../../actions/friendsType";
const Users = ({ users, email, image, loginId }) => {
  const dispatch = useDispatch();
  console.log(users);
  const sendFriendRequest = (id, userEmail) => {
    const body = {
      userEmail: userEmail,
      friendId: id,
      image,
      loginId,
    };
    dispatch(sendRequest(body));
  };

  return (
    <div className="h-sidebarHeight overflow-y-scroll">
      {users ? (
        users.map((user) => (
          <div
            className="bg-newchatbackground w-11/12 p-3 flex mb-2 justify-between mx-auto rounded-lg"
            key={user.id}
          >
            <div className="pt-1 mr-3">
              <p className=" w-5 h-5 ">
                <img
                  src={user.image}
                  referrerpolicy="no-referrer"
                  alt="User"
                  className="h-5 w-5 rounded-full"
                />
              </p>
            </div>
            <div className="text-gray-200 text-xs max-w-xl pt-1">
              {user.email}
            </div>
            <p onClick={() => sendFriendRequest(user.id, email)}>
              <PlusIcon className="w-5 h-5 cursor-pointer text-tabbackgroundcolor rounded  hover:bg-gray-600" />
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
