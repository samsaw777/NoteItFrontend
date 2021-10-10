import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../actions/typeactions";
import { loaduser } from "../actions/authtype";
import Notebook from "./Groupinfo";
import Modal from "./notebookComponent/Modal";
import Logout from "./authuser/Logout";
import FriendList from "../components/filters/FriendList";
import SearchFriend from "../components/filters/Search";
import FriendRequest from "../components/filters/FriendRequest";
function Notes() {
  //initialize the dispatch method with
  const dispatchdata = useDispatch();

  //dispatching the get method
  useEffect(() => {
    dispatchdata(getNotebooks());
    dispatchdata(loaduser());
    // };
    // return subscribe;
  }, []);

  //loading the state
  const notebooks = useSelector((state) => state.notebook.notebook);
  const menu = useSelector((state) => state.menu.menu);
  // console.log(notebooks);
  //Load the user
  const user = useSelector((state) => state.auth.user);
  console.log(user.joinedGroup);
  const chatinfo = useSelector((state) => state.chat.chat);
  //posting the data to database
  const [toggleValue, setToggleValue] = useState(1);
  console.log(toggleValue);
  const changeToggleValue = (value) => {
    setToggleValue(value);
  };
  //returning the jsx element
  return (
    <div className="h-viewHeight bg-newsidebarcolor">
      {/* Show the user in the top */}

      {menu.value === "Groups" && (
        <div className="flex flex-col">
          <div className="flex pl-3.5 pt-4 pb-2 justify-between">
            <span className="text-gray-300 text-lg font-bold">Your Groups</span>
            <Modal />
          </div>
          <div className="flex flex-col  h-groupHeight">
            <div>
              <div className=" bg-newsidebarcolor flex flex-col ">
                <div className="flex w-11/12 mt-1  mx-auto ">
                  <div
                    onClick={() => changeToggleValue(1)}
                    className={
                      toggleValue === 1
                        ? "cursor-pointer  text-center  font-bold w-1/2 p-2 bg-tabbackgroundcolor text-white rounded-l-lg"
                        : "cursor-pointer  font-bold w-1/2 p-2 text-center bg-newchatbackground text-gray-300  rounded-l-lg"
                    }
                  >
                    <p>Created</p>
                  </div>
                  <div
                    onClick={() => changeToggleValue(2)}
                    className={
                      toggleValue === 2
                        ? "cursor-pointer bg-tabbackgroundcolor text-white text-center font-bold w-1/2 p-2 rounded-r-lg"
                        : "cursor-pointer  font-bold w-1/2 p-2 text-center bg-newchatbackground text-gray-300  rounded-r-lg"
                    }
                  >
                    <p>Group Joined</p>
                  </div>
                </div>
                <div className="block">
                  <p
                    className={
                      toggleValue === 1
                        ? "block h-groupHeight overflow-y-scroll "
                        : "hidden"
                    }
                  >
                    {notebooks.map((notebook) => (
                      <>
                        <Notebook
                          id={notebook._id}
                          title={notebook.text}
                          image={notebook.image}
                        />
                      </>
                    ))}
                  </p>
                  <p
                    className={
                      toggleValue === 2
                        ? "block h-groupHeight overflow-y-scroll"
                        : "hidden"
                    }
                  >
                    {user.joinedGroup &&
                      user.joinedGroup.map((group) => (
                        <Notebook id={group.Id} title={group.Name} />
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {menu.value === "Friends" && <FriendList />}
      {menu.value === "FindFriends" && <SearchFriend />}
      {menu.value === "FriendRequests" && (
        <FriendRequest friends={user.friends} userid={user._id} />
      )}
      {/* <Logout /> */}
    </div>
  );
}

export default Notes;
