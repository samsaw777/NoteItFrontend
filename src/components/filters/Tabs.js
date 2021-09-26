import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";
import FriendsList from "./FriendList";
import { useSelector } from "react-redux";
const Tab = () => {
  const loginuser = useSelector((state) => state.auth.user);
  const [toggleValue, setToggleValue] = useState(1);
  console.log(toggleValue);
  const changeToggleValue = (value) => {
    setToggleValue(value);
  };
  // const removeUser = (id, email) => {
  //   const body = { userId: id, friendEmail: email };
  //   axios
  //     .post("http://localhost:9000/removefriend", body)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="h-viewHeight bg-sidebarBackgroundColor flex flex-col ">
      <div className="flex justify-between p-3">
        <div
          onClick={() => changeToggleValue(1)}
          className="cursor-pointer text-gray-100"
        >
          <p>Friends</p>
        </div>
        <div
          onClick={() => changeToggleValue(2)}
          className="cursor-pointer text-gray-100"
        >
          <p>Serach Friends</p>
        </div>
      </div>
      <div>
        <p className={toggleValue === 1 ? "block" : "hidden"}>
          <FriendsList friends={loginuser.friends} userid={loginuser._id} />
        </p>
        <p className={toggleValue === 2 ? "block" : "hidden"}>
          <Search />
        </p>
      </div>
    </div>
  );
};

export default Tab;
