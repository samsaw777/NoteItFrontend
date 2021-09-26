import React from "react";

const FriendList = ({ friends }) => {
  return (
    <div className="h-viewHeight overflow-y-scroll">
      {friends ? (
        friends.map((user) => (
          <div
            className="border bg-chatBackgroundColor w-full p-3 flex mb-2"
            key={user}
          >
            <div className="pt-1 mr-3">
              <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
            </div>
            <div className="text-gray-200">{user}</div>
            {/* <p className="pt-1">
                <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
              </p> */}
          </div>
        ))
      ) : (
        <div className="text-gray-200 p-2">You have no friends.</div>
      )}
    </div>
  );
};

export default FriendList;
