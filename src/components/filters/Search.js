import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./AllUsers";
import FriendRequest from "./FriendRequest";
import { useSelector } from "react-redux";
const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  // console.log(users);
  const [search, setSearch] = useState();
  const [showRequest, setShowRequest] = useState([]);
  // console.log(showRequest);
  const loginuser = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get("https://remotetracker.onrender.com/allusers")
      .then((users) => {
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //search item
  const searchItem = (value) => {
    setSearch(value);
    const searchuser = users.filter((user) => {
      return user.email.indexOf(search) !== -1;
    });
    if (value) {
      setSearchUser(searchuser);
    } else {
      setSearchUser();
    }
  };
  // console.log(search);
  return (
    <div className="h-viewHeight bg-newsidebarcolor">
      <div className="w-full p-2">
        <form>
          <input
            type="text"
            value={search}
            placeholder="Search Friends"
            onChange={(e) => searchItem(e.target.value)}
            className="appearance-none bg-newchatbackground  rounded-lg w-full text-gray-500  p-3 mx-auto leading-tight focus:outline-none placeholder-gray-500 font-bold"
          />
        </form>
      </div>
      <Users
        users={searchUser}
        email={loginuser.email}
        image={loginuser.image}
        loginId={loginuser.id}
      />
      {/* <FriendRequest
        loginUser={loginuser.followRequest}
        loginuserid={loginuser._id}
      /> */}
    </div>
  );
};

export default Search;
