import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./AllUsers";
import FriendRequest from "./FriendRequest";
import { useSelector } from "react-redux";
const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [search, setSearch] = useState();
  const [showRequest, setShowRequest] = useState([]);
  console.log(showRequest);
  const loginuser = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get("https://noteitappapi.herokuapp.com/allusers")
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
  console.log(search);
  return (
    <div className="h-groupHeight bg-sidebarBackgroundColor">
      <div className="w-full p-2">
        <form>
          <input
            type="text"
            value={search}
            placeholder="Search Friends"
            onChange={(e) => searchItem(e.target.value)}
            className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </form>
      </div>
      <Users users={searchUser} email={loginuser.email} />
      <FriendRequest
        loginUser={loginuser.followRequest}
        loginuserid={loginuser._id}
      />
    </div>
  );
};

export default Search;
